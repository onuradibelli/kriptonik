'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export interface MiniTicker {
  symbol: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volumeUsd: number;
  updatedAt: number;
  flashDirection?: 'UP' | 'DOWN' | null;
}

export function useBinanceTickers(customDefaults?: Record<string, { price: number; change24h: number }>) {
  const [tickers, setTickers] = useState<Record<string, MiniTicker>>(() => {
    const initial: Record<string, MiniTicker> = {};
    if (customDefaults) {
      for (const [sym, data] of Object.entries(customDefaults)) {
        initial[sym] = {
          symbol: sym,
          price: data.price,
          change24h: data.change24h,
          high24h: data.price,
          low24h: data.price,
          volumeUsd: 0,
          updatedAt: Date.now(),
          flashDirection: null
        };
      }
    }
    return initial;
  });

  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());
  const flashTimeoutsRef = useRef<Record<string, NodeJS.Timeout>>({});
  const isWsConnectedRef = useRef(false);

  // Clean tick application without recursive state update
  const applyTick = useCallback((
    symbol: string,
    newPrice: number,
    changePct?: number,
    high?: number,
    low?: number,
    vol?: number
  ) => {
    setTickers((prev) => {
      const existing = prev[symbol];
      const prevPrice = existing ? existing.price : newPrice;
      const flash: 'UP' | 'DOWN' | null =
        newPrice > prevPrice ? 'UP' : newPrice < prevPrice ? 'DOWN' : null;

      // Clear existing flash reset timer for this symbol
      if (flashTimeoutsRef.current[symbol]) {
        clearTimeout(flashTimeoutsRef.current[symbol]);
      }

      // Schedule flash reset after 700ms
      if (flash) {
        flashTimeoutsRef.current[symbol] = setTimeout(() => {
          setTickers((latest) => {
            if (!latest[symbol] || latest[symbol].flashDirection === null) return latest;
            return {
              ...latest,
              [symbol]: {
                ...latest[symbol],
                flashDirection: null
              }
            };
          });
        }, 700);
      }

      return {
        ...prev,
        [symbol]: {
          symbol,
          price: newPrice,
          change24h: changePct !== undefined ? changePct : existing ? existing.change24h : 0,
          high24h: high !== undefined ? high : existing ? existing.high24h : newPrice,
          low24h: low !== undefined ? low : existing ? existing.low24h : newPrice,
          volumeUsd: vol !== undefined ? vol : existing ? existing.volumeUsd : 0,
          updatedAt: Date.now(),
          flashDirection: flash
        }
      };
    });
    setLastUpdated(Date.now());
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    let ws: WebSocket | null = null;
    let reconnectTimer: NodeJS.Timeout | null = null;
    let pollerTimer: NodeJS.Timeout | null = null;

    // 1. Primary Live Binance WebSocket Stream
    function connectWs() {
      if (!isSubscribed) return;
      try {
        ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');

        ws.onopen = () => {
          if (!isSubscribed) return;
          setIsConnected(true);
          isWsConnectedRef.current = true;
        };

        ws.onmessage = (event) => {
          if (!isSubscribed) return;
          try {
            const raw = JSON.parse(event.data);
            if (Array.isArray(raw)) {
              for (const item of raw) {
                const s = item.s;
                if (s && (s.endsWith('USDT') || s === 'USDTTRY')) {
                  const currentPrice = parseFloat(item.c);
                  const openPrice = parseFloat(item.o);
                  const changePct = openPrice > 0 ? ((currentPrice - openPrice) / openPrice) * 100 : 0;
                  const high = parseFloat(item.h);
                  const low = parseFloat(item.l);
                  const volQuote = parseFloat(item.q);

                  applyTick(s, currentPrice, changePct, high, low, volQuote);
                }
              }
            }
          } catch {
            // Ignore parse errors
          }
        };

        ws.onerror = () => {
          isWsConnectedRef.current = false;
        };

        ws.onclose = () => {
          isWsConnectedRef.current = false;
          if (!isSubscribed) return;
          setIsConnected(false);
          reconnectTimer = setTimeout(connectWs, 5000);
        };
      } catch {
        isWsConnectedRef.current = false;
        setIsConnected(false);
        reconnectTimer = setTimeout(connectWs, 5000);
      }
    }

    connectWs();

    // 2. Initial / Fallback REST Poller (Only polls if tab is visible and WebSocket is disconnected or initial load)
    const pollRest = async () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
        return; // Pause poller in background tab
      }

      // If WebSocket is actively connected, skip redundant full-market poll to protect rate limits
      if (isWsConnectedRef.current) return;

      try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/24hr', {
          cache: 'no-store'
        });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && isSubscribed) {
          setIsConnected(true);
          for (const item of data) {
            const s = item.symbol;
            if (s && (s.endsWith('USDT') || s === 'USDTTRY')) {
              const currentPrice = parseFloat(item.lastPrice);
              const changePct = parseFloat(item.priceChangePercent);
              const high = parseFloat(item.highPrice);
              const low = parseFloat(item.lowPrice);
              const vol = parseFloat(item.quoteVolume);
              applyTick(s, currentPrice, changePct, high, low, vol);
            }
          }
        }
      } catch {
        // Fallback gracefully
      }
    };

    pollRest();
    pollerTimer = setInterval(pollRest, 10000);

    return () => {
      isSubscribed = false;
      if (ws) ws.close();
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (pollerTimer) clearInterval(pollerTimer);
      Object.values(flashTimeoutsRef.current).forEach((t) => clearTimeout(t));
    };
  }, [applyTick]);

  return { tickers, isConnected, lastUpdated };
}
