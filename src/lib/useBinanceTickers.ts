'use client';

import { useTickers } from '../context/TickerContext';

export interface MiniTicker {
  symbol: string;
  price: number;
  change24h: number;
  high24h?: number;
  low24h?: number;
  volumeUsd?: number;
  updatedAt?: number;
  flashDirection?: 'UP' | 'DOWN' | null;
}

/**
 * Global single-instance Binance Ticker Hook.
 * Backed by TickerProvider context so that only 1 WebSocket is ever established.
 */
export function useBinanceTickers(_initial?: Record<string, any>) {
  const { tickers, isConnected, isWsActive } = useTickers();
  return {
    tickers,
    isConnected,
    isWsActive,
    lastUpdated: Date.now()
  };
}
