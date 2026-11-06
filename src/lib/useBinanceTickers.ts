'use client';

import { useState, useEffect, useRef } from 'react';

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

export function useBinanceTickers(defaultTickers: Record<string, { price: number; change24h: number }>) {
  const [tickers, setTickers] = useState<Record<string, MiniTicker>>(() => {
    const initial: Record<string, MiniTicker> = {};
    for (const [sym, data] of Object.entries(defaultTickers)) {
      initial[sym] = {
        symbol: sym,
        price: data.price,
        change24h: data.change24h,
        high24h: data.price * 1.02,
        low24h: data.price * 0.98,
        volumeUsd: 1000000000,
        updatedAt: Date.now(),
        flashDirection: null
      };
    }
    return initial;
  });

  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);

  useEffect(() => {
    let isSubscribed = true;

    function connect() {
      // Connect to Binance Futures miniTicker stream
      const wsUrl = 'wss://fstream.binance.com/ws/!miniTicker@arr';
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        if (!isSubscribed) return;
        setIsConnected(true);
        retryCountRef.current = 0;
      };

      ws.onmessage = (event) => {
        if (!isSubscribed) return;
        try {
          const data = JSON.parse(event.data);
          if (Array.isArray(data)) {
            setTickers((prev) => {
              const updated = { ...prev };
              let changed = false;

              for (const item of data) {
                const s = item.s;
                if (s && (s.endsWith('USDT') || s.endsWith('BUSD'))) {
                  const currentPrice = parseFloat(item.c);
                  const openPrice = parseFloat(item.o);
                  const high = parseFloat(item.h);
                  const low = parseFloat(item.l);
                  const volQuote = parseFloat(item.q);
                  const changePct = openPrice > 0 ? ((currentPrice - openPrice) / openPrice) * 100 : 0;

                  const prevPrice = prev[s]?.price || currentPrice;
                  const flash = currentPrice > prevPrice ? 'UP' : currentPrice < prevPrice ? 'DOWN' : prev[s]?.flashDirection || null;

                  updated[s] = {
                    symbol: s,
                    price: currentPrice,
                    change24h: changePct,
                    high24h: high,
                    low24h: low,
                    volumeUsd: volQuote,
                    updatedAt: Date.now(),
                    flashDirection: flash
                  };
                  changed = true;
                }
              }

              return changed ? updated : prev;
            });
          }
        } catch {
          // ignore parse errors
        }
      };

      ws.onerror = () => {
        // triggers onclose
      };

      ws.onclose = () => {
        if (!isSubscribed) return;
        setIsConnected(false);
        const backoff = Math.min(1000 * Math.pow(1.5, retryCountRef.current), 30000);
        retryCountRef.current += 1;
        reconnectTimeoutRef.current = setTimeout(connect, backoff);
      };
    }

    connect();

    return () => {
      isSubscribed = false;
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return { tickers, isConnected };
}
