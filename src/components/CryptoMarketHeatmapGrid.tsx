'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LayoutGrid, Flame, ArrowUpRight, TrendingUp, TrendingDown, Layers, Sparkles } from 'lucide-react';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [filterMode, setFilterMode] = useState<'CAP' | 'GAINERS' | 'VOLUME'>('CAP');

  // Compute live price and change for all coins
  const mappedCoins = coins.map((coin) => {
    const tick = tickers[coin.binanceSymbol];
    const livePrice = tick?.price || coin.price;
    const liveChange = tick?.change24h !== undefined ? tick.change24h : coin.change24h;
    const flash = tick?.flashDirection;

    return {
      ...coin,
      effectivePrice: livePrice,
      effectiveChange: liveChange,
      flash
    };
  });

  // Sort according to mode
  const sortedCoins = [...mappedCoins].sort((a, b) => {
    if (filterMode === 'GAINERS') return b.effectiveChange - a.effectiveChange;
    if (filterMode === 'VOLUME') return b.volume24hUsd - a.volume24hUsd;
    return a.marketCapRank - b.marketCapRank;
  });

  // Color generator based on 24h change
  const getTileColorStyle = (change: number, flash?: 'UP' | 'DOWN' | null) => {
    if (flash === 'UP') {
      return 'bg-[#00E699]/30 border-[#00E699] text-white shadow-[0_0_15px_rgba(0,230,153,0.35)]';
    }
    if (flash === 'DOWN') {
      return 'bg-[#FF3B56]/30 border-[#FF3B56] text-white shadow-[0_0_15px_rgba(255,59,86,0.35)]';
    }

    if (change >= 5) {
      return 'bg-gradient-to-br from-[#00E699]/25 to-[#00B074]/35 border-[#00E699]/50 text-[#00E699] hover:border-[#00E699]';
    } else if (change > 0) {
      return 'bg-gradient-to-br from-[#00C087]/15 to-[#008F64]/25 border-[#00C087]/35 text-[#00E699] hover:border-[#00C087]';
    } else if (change <= -5) {
      return 'bg-gradient-to-br from-[#FF3B56]/25 to-[#D90429]/35 border-[#FF3B56]/50 text-[#FF3B56] hover:border-[#FF3B56]';
    } else {
      return 'bg-gradient-to-br from-[#FF5C72]/15 to-[#C9184A]/25 border-[#FF5C72]/35 text-[#FF5C72] hover:border-[#FF5C72]';
    }
  };

  return (
    <div className="panel-card p-4 sm:p-5 flex flex-col h-full space-y-4">
      {/* 1. Header with Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
            <LayoutGrid className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-[var(--foreground)] flex items-center gap-2">
              <span>Pazar Isı Şeması</span>
              <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-[10px] font-mono font-bold">
                CANLI TREEMAP
              </span>
            </h3>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
          <button
            onClick={() => setFilterMode('CAP')}
            className={`rounded-lg px-2 py-1 transition-all cursor-pointer ${
              filterMode === 'CAP' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Piyasa Değeri
          </button>
          <button
            onClick={() => setFilterMode('GAINERS')}
            className={`rounded-lg px-2 py-1 transition-all cursor-pointer ${
              filterMode === 'GAINERS' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Performans
          </button>
          <button
            onClick={() => setFilterMode('VOLUME')}
            className={`rounded-lg px-2 py-1 transition-all cursor-pointer ${
              filterMode === 'VOLUME' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Hacim
          </button>
        </div>
      </div>

      {/* 2. Coinglass Stocks-Style Weighted Square Treemap */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 flex-1 min-h-[360px]">
        {/* Dominant Tile 1: Bitcoin (Takes 2 cols & 2 rows in standard view) */}
        {sortedCoins.slice(0, 1).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-2 row-span-2 rounded-2xl border p-4 flex flex-col justify-between transition-all group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-[var(--foreground)]">
                  {coin.symbol}
                </span>
                <span className="text-[11px] font-mono font-bold rounded-lg px-2 py-0.5 bg-black/30 border border-white/10">
                  #{coin.marketCapRank}
                </span>
              </div>

              <div>
                <div className={`font-mono text-base sm:text-lg font-black transition-colors ${coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-white'}`}>
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : coin.effectivePrice.toFixed(4)}
                </div>
                <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-bold mt-0.5">
                  {isPos ? <TrendingUp className="h-3.5 w-3.5 text-[#00E699]" /> : <TrendingDown className="h-3.5 w-3.5 text-[#FF3B56]" />}
                  <span className={isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
                    {isPos ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
            </Link>
          );
        })}

        {/* Dominant Tile 2: Ethereum (Takes 2 cols & 2 rows) */}
        {sortedCoins.slice(1, 2).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-2 row-span-2 rounded-2xl border p-4 flex flex-col justify-between transition-all group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-[var(--foreground)]">
                  {coin.symbol}
                </span>
                <span className="text-[11px] font-mono font-bold rounded-lg px-2 py-0.5 bg-black/30 border border-white/10">
                  #{coin.marketCapRank}
                </span>
              </div>

              <div>
                <div className={`font-mono text-base sm:text-lg font-black transition-colors ${coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-white'}`}>
                  ${coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                </div>
                <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-bold mt-0.5">
                  {isPos ? <TrendingUp className="h-3.5 w-3.5 text-[#00E699]" /> : <TrendingDown className="h-3.5 w-3.5 text-[#FF3B56]" />}
                  <span className={isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
                    {isPos ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
            </Link>
          );
        })}

        {/* Medium & Small Asset Tiles (SOL, BNB, XRP, DOGE, SUI, ADA, AVAX, LINK, etc.) */}
        {sortedCoins.slice(2, 20).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-2 sm:col-span-2 rounded-xl border p-2.5 sm:p-3 flex flex-col justify-between transition-all group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base font-black text-[var(--foreground)]">
                  {coin.symbol}
                </span>
                <span className={`font-mono text-[11px] font-bold ${isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {isPos ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className={`font-mono text-xs sm:text-sm font-bold ${coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-[var(--foreground)]'}`}>
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </span>
                <ArrowUpRight className="h-3 w-3 text-[var(--card-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 3. Footer Legend */}
      <div className="flex items-center justify-between text-xs text-[var(--card-muted)] border-t border-[var(--border)] pt-2.5 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#00E699] pulse-bull" />
          <span>Binance WS + Rest Senkronize</span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="h-2.5 w-3.5 rounded-xs bg-[#FF3B56]" />
          <span>Satış</span>
          <span className="mx-1">•</span>
          <span className="h-2.5 w-3.5 rounded-xs bg-[#00E699]" />
          <span>Alış</span>
        </div>
      </div>
    </div>
  );
}
