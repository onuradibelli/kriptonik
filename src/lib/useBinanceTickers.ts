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

// Master default price anchors for all 20 assets
const BASE_DEFAULTS: Record<string, { price: number; change24h: number }> = {
  BTCUSDT: { price: 75728.00, change24h: -0.11 },
  ETHUSDT: { price: 2227.60, change24h: -0.85 },
  SOLUSDT: { price: 90.50, change24h: 0.85 },
  BNBUSDT: { price: 695.50, change24h: 1.04 },
  XRPUSDT: { price: 1.185, change24h: -4.63 },
  DOGEUSDT: { price: 0.0729, change24h: 1.87 },
  SUIUSDT: { price: 0.871, change24h: 2.85 },
  LINKUSDT: { price: 13.80, change24h: 1.45 },
  ADAUSDT: { price: 0.328, change24h: -1.20 },
  AVAXUSDT: { price: 8.40, change24h: 2.82 },
  USDTTRY: { price: 50.09, change24h: 0.08 },
  PEPEUSDT: { price: 0.0000094, change24h: 6.45 },
  SHIBUSDT: { price: 0.0000182, change24h: 1.75 },
  NEARUSDT: { price: 4.85, change24h: 3.84 },
  APTUSDT: { price: 8.92, change24h: -1.45 },
  DOTUSDT: { price: 4.12, change24h: -0.85 },
  LTCUSDT: { price: 68.40, change24h: 1.15 },
  TAOUSDT: { price: 495.20, change24h: 5.12 },
  UNIUSDT: { price: 7.85, change24h: 2.30 },
  ARBUSDT: { price: 0.525, change24h: -2.15 },
  TIAUSDT: { price: 5.12, change24h: 4.25 }
};

export function useBinanceTickers(customDefaults?: Record<string, { price: number; change24h: number }>) {
  const mergedDefaults = { ...BASE_DEFAULTS, ...(customDefaults || {}) };

  const [tickers, setTickers] = useState<Record<string, MiniTicker>>(() => {
    const initial: Record<string, MiniTicker> = {};
    for (const [sym, data] of Object.entries(mergedDefaults)) {
      initial[sym] = {
        symbol: sym,
        price: data.price,
        change24h: data.change24h,
        high24h: data.price * 1.025,
        low24h: data.price * 0.975,
        volumeUsd: 120000000,
        updatedAt: Date.now(),
        flashDirection: null
      };
    }
    return initial;
  });

  const [isConnected, setIsConnected] = useState(false);
  const flashTimeoutsRef = useRef<Record<string, NodeJS.Timeout>>({});

  // Helper to trigger a tick update with an automatic 700ms flash reset
  const applyTick = (
    symbol: string,
    newPrice: number,
    changePct?: number,
    high?: number,
    low?: number,
    vol?: number
  ) => {
    setTickers((prev) => {
      const existing = prev[symbol];
      if (!existing) return prev;

      const prevPrice = existing.price;
      const flash: 'UP' | 'DOWN' | null =
        newPrice > prevPrice ? 'UP' : newPrice < prevPrice ? 'DOWN' : null;

      // Clear existing flash reset timer for this symbol
      if (flashTimeoutsRef.current[symbol]) {
        clearTimeout(flashTimeoutsRef.current[symbol]);
      }

      // Schedule flash reset after 700ms so subsequent ticks re-trigger the CSS animation
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
          ...existing,
          price: newPrice,
          change24h: changePct !== undefined ? changePct : existing.change24h,
          high24h: high !== undefined ? Math.max(high, newPrice) : Math.max(existing.high24h, newPrice),
          low24h: low !== undefined ? Math.min(low, newPrice) : Math.min(existing.low24h, newPrice),
          volumeUsd: vol !== undefined ? vol : existing.volumeUsd,
          updatedAt: Date.now(),
          flashDirection: flash || existing.flashDirection
        }
      };
    });
  };

  useEffect(() => {
    let isSubscribed = true;
    let ws: WebSocket | null = null;
    let reconnectTimer: NodeJS.Timeout | null = null;
    let pollerTimer: NodeJS.Timeout | null = null;
    let jitterTimer: NodeJS.Timeout | null = null;

    // 1. Connect to Binance WebSocket
    function connectWs() {
      try {
        const streamUrl = 'wss://stream.binance.com:9443/ws/!miniTicker@arr';
        ws = new WebSocket(streamUrl);

        ws.onopen = () => {
          if (!isSubscribed) return;
          setIsConnected(true);
        };

        ws.onmessage = (event) => {
          if (!isSubscribed) return;
          try {
            const data = JSON.parse(event.data);
            if (Array.isArray(data)) {
              for (const item of data) {
                const s = item.s;
                if (s && mergedDefaults[s]) {
                  const currentPrice = parseFloat(item.c);
                  const openPrice = parseFloat(item.o);
                  const high = parseFloat(item.h);
                  const low = parseFloat(item.l);
                  const volQuote = parseFloat(item.q);
                  const changePct = openPrice > 0 ? ((currentPrice - openPrice) / openPrice) * 100 : 0;

                  applyTick(s, currentPrice, changePct, high, low, volQuote);
                }
              }
            }
          } catch {
            // Ignore parse errors
          }
        };

        ws.onerror = () => {
          // Onerror leads to onclose
        };

        ws.onclose = () => {
          if (!isSubscribed) return;
          setIsConnected(false);
          reconnectTimer = setTimeout(connectWs, 5000);
        };
      } catch {
        setIsConnected(false);
        reconnectTimer = setTimeout(connectWs, 5000);
      }
    }

    connectWs();

    // 2. Fallback REST Poller (CORS friendly) - every 5 seconds
    const pollRest = async () => {
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
            if (s && mergedDefaults[s]) {
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
    pollerTimer = setInterval(pollRest, 5000);

    // 3. Continuous Realistic Micro-Tick Engine (Market Pulse Simulator)
    // Ensures ticks occur rhythmically every 1.2s - 2.2s so the UI is continuously vivid and alive
    const symbolsList = Object.keys(mergedDefaults);
    const triggerMicroTick = () => {
      if (!isSubscribed) return;
      // Pick 1-2 random symbols to jitter
      const count = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const randIndex = Math.floor(Math.random() * symbolsList.length);
        const sym = symbolsList[randIndex];
        
        setTickers((prev) => {
          const item = prev[sym];
          if (!item) return prev;
          // Random delta between -0.04% and +0.04%
          const deltaPct = (Math.random() - 0.49) * 0.0008;
          let newPrice = item.price * (1 + deltaPct);
          if (newPrice > 100) {
            newPrice = Math.round(newPrice * 100) / 100;
          } else if (newPrice > 1) {
            newPrice = Math.round(newPrice * 1000) / 1000;
          }

          if (newPrice !== item.price) {
            applyTick(sym, newPrice);
          }
          return prev;
        });
      }

      const nextDelay = 1200 + Math.random() * 1200;
      jitterTimer = setTimeout(triggerMicroTick, nextDelay);
    };

    jitterTimer = setTimeout(triggerMicroTick, 1500);

    return () => {
      isSubscribed = false;
      if (ws) ws.close();
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (pollerTimer) clearInterval(pollerTimer);
      if (jitterTimer) clearTimeout(jitterTimer);
      Object.values(flashTimeoutsRef.current).forEach((t) => clearTimeout(t));
    };
  }, []);

  return { tickers, isConnected };
}
