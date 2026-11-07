'use client';

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

export interface LiveTicker {
  price: number;
  change24h: number;
  high24h?: number;
  low24h?: number;
  volumeUsd?: number;
  flashDirection?: 'UP' | 'DOWN' | null;
  lastUpdated?: number;
}

interface TickerContextValue {
  tickers: Record<string, LiveTicker>;
  isConnected: boolean;
  isWsActive: boolean;
  getTicker: (symbol: string) => LiveTicker | undefined;
}

const TickerContext = createContext<TickerContextValue>({
  tickers: {},
  isConnected: false,
  isWsActive: false,
  getTicker: () => undefined,
});

export function TickerProvider({ children }: { children: ReactNode }) {
  const [tickers, setTickers] = useState<Record<string, LiveTicker>>({});
  const [isConnected, setIsConnected] = useState(false);
  const [isWsActive, setIsWsActive] = useState(false);
  
  const tickersRef = useRef<Record<string, LiveTicker>>({});
  const wsRef = useRef<WebSocket | null>(null);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTabVisibleRef = useRef<boolean>(true);

  // Fallback REST fetch: ONLY runs if WebSocket is disconnected AND tab is visible
  const fetchRestTickers = async () => {
    if (!isTabVisibleRef.current || isWsActive) return;

    try {
      const res = await fetch('https://api.binance.com/api/v3/ticker/24hr', {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) return;
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const nextTickers: Record<string, LiveTicker> = { ...tickersRef.current };
      let changed = false;

      for (const item of data) {
        if (!item?.symbol?.endsWith('USDT') && item?.symbol !== 'USDTTRY') continue;
        const sym = item.symbol;
        const price = parseFloat(item.lastPrice);
        const change24h = parseFloat(item.priceChangePercent);
        if (isNaN(price)) continue;

        const prev = nextTickers[sym];
        let flash: 'UP' | 'DOWN' | null = null;
        if (prev && prev.price !== price) {
          flash = price > prev.price ? 'UP' : 'DOWN';
          changed = true;
        }

        nextTickers[sym] = {
          price,
          change24h: isNaN(change24h) ? 0 : change24h,
          high24h: parseFloat(item.highPrice) || undefined,
          low24h: parseFloat(item.lowPrice) || undefined,
          volumeUsd: parseFloat(item.quoteVolume) || undefined,
          flashDirection: flash,
          lastUpdated: Date.now(),
        };
      }

      if (changed || Object.keys(tickersRef.current).length === 0) {
        tickersRef.current = nextTickers;
        setTickers(nextTickers);
      }
      setIsConnected(true);
    } catch {
      // Network hiccup - ignore
    }
  };

  useEffect(() => {
    // 1. Initial REST fetch for instant paint
    fetchRestTickers();

    // 2. Tab visibility tracking
    const handleVisibilityChange = () => {
      isTabVisibleRef.current = !document.hidden;
      if (document.hidden) {
        // Close WS to save client bandwidth when tab is backgrounded
        if (wsRef.current) {
          wsRef.current.close();
          wsRef.current = null;
        }
        setIsWsActive(false);
      } else {
        // Tab reopened, reconnect
        connectWebSocket();
        fetchRestTickers();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 3. Connect WebSocket (!miniTicker@arr streams real 1000ms market ticks)
    const connectWebSocket = () => {
      if (typeof window === 'undefined' || !isTabVisibleRef.current) return;
      if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
        return;
      }

      try {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');
        wsRef.current = ws;

        ws.onopen = () => {
          setIsWsActive(true);
          setIsConnected(true);
        };

        ws.onmessage = (event) => {
          try {
            const list = JSON.parse(event.data);
            if (!Array.isArray(list)) return;

            const next: Record<string, LiveTicker> = { ...tickersRef.current };
            let hasSignificantUpdate = false;

            for (const item of list) {
              const sym = item.s;
              if (!sym?.endsWith('USDT') && sym !== 'USDTTRY') continue;

              const price = parseFloat(item.c);
              const open = parseFloat(item.o);
              if (isNaN(price)) continue;

              const change24h = open > 0 ? ((price - open) / open) * 100 : 0;
              const prev = next[sym];

              let flash: 'UP' | 'DOWN' | null = null;
              if (prev && prev.price !== price) {
                flash = price > prev.price ? 'UP' : 'DOWN';
                hasSignificantUpdate = true;
              }

              next[sym] = {
                price,
                change24h,
                high24h: parseFloat(item.h) || prev?.high24h,
                low24h: parseFloat(item.l) || prev?.low24h,
                volumeUsd: parseFloat(item.q) || prev?.volumeUsd,
                flashDirection: flash,
                lastUpdated: Date.now(),
              };
            }

            if (hasSignificantUpdate) {
              tickersRef.current = next;
              setTickers(next);
            }
          } catch {
            // Ignore JSON parse errors
          }
        };

        ws.onerror = () => {
          setIsWsActive(false);
        };

        ws.onclose = () => {
          setIsWsActive(false);
          // Auto reconnect after 5s if tab is still visible
          if (isTabVisibleRef.current) {
            setTimeout(connectWebSocket, 5000);
          }
        };
      } catch {
        setIsWsActive(false);
      }
    };

    connectWebSocket();

    // 4. Fallback polling only when WS is inactive
    pollTimerRef.current = setInterval(() => {
      if (!isWsActive && isTabVisibleRef.current) {
        fetchRestTickers();
      }
    }, 12000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
      }
    };
  }, []);

  const getTicker = (symbol: string): LiveTicker | undefined => {
    return tickers[symbol] || tickers[`${symbol}USDT`];
  };

  return (
    <TickerContext.Provider value={{ tickers, isConnected, isWsActive, getTicker }}>
      {children}
    </TickerContext.Provider>
  );
}

export function useTickers() {
  return useContext(TickerContext);
}
