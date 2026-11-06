'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LayoutGrid, ArrowUpRight, TrendingUp, TrendingDown, Layers, Sparkles } from 'lucide-react';
import { LIVE_CURRENCY_RATES } from '../lib/data';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [filterMode, setFilterMode] = useState<'VOLUME' | 'CAP' | 'GAINERS'>('VOLUME');
  const [displayCount, setDisplayCount] = useState<number>(24);
  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

  // Compute live price and change for all coins (24h change remains stable, price updates smoothly)
  const mappedCoins = coins.map((coin) => {
    const tick = tickers[coin.binanceSymbol];
    const livePrice = tick?.price || coin.price;
    const liveChange = tick?.change24h !== undefined ? tick.change24h : coin.change24h;

    return {
      ...coin,
      effectivePrice: livePrice,
      effectiveChange: liveChange
    };
  });

  // Sort according to mode
  const sortedCoins = [...mappedCoins].sort((a, b) => {
    if (filterMode === 'GAINERS') return b.effectiveChange - a.effectiveChange;
    if (filterMode === 'CAP') return a.marketCapRank - b.marketCapRank;
    return b.volume24hUsd - a.volume24hUsd;
  });

  // Stable color generator based STRICTLY on 24h change (no distracting micro-tick flashing)
  const getTileColorStyle = (change: number) => {
    if (change >= 5) {
      return 'bg-gradient-to-br from-[#00C087]/28 to-[#008F64]/38 border-[#00C087]/50 text-[#00E699] hover:border-[#00E699] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]';
    } else if (change > 0) {
      return 'bg-gradient-to-br from-[#00C087]/16 to-[#008F64]/24 border-[#00C087]/30 text-[#00E699] hover:border-[#00C087]';
    } else if (change === 0) {
      return 'bg-[var(--card)] border-[var(--border)] text-[var(--card-muted)] hover:border-[var(--foreground)]/30';
    } else if (change > -5) {
      return 'bg-gradient-to-br from-[#F6465D]/16 to-[#C9184A]/24 border-[#F6465D]/30 text-[#FF5C72] hover:border-[#F6465D]';
    } else {
      return 'bg-gradient-to-br from-[#F6465D]/28 to-[#D90429]/38 border-[#F6465D]/50 text-[#FF3B56] hover:border-[#FF3B56] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]';
    }
  };

  const visibleCoins = sortedCoins.slice(0, displayCount);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-4">
      {/* 1. Header with Mode Selector and Live Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
            <LayoutGrid className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
              <span>Market Isı Şeması</span>
              <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E699]" />
                24S DEĞİŞİM ISISI
              </span>
            </h3>
          </div>
        </div>

        {/* Filter Pills & Count Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            <button
              onClick={() => setFilterMode('VOLUME')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                filterMode === 'VOLUME' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              24s Hacim
            </button>
            <button
              onClick={() => setFilterMode('CAP')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                filterMode === 'CAP' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Piyasa Değeri
            </button>
            <button
              onClick={() => setFilterMode('GAINERS')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                filterMode === 'GAINERS' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              En Çok Değişen
            </button>
          </div>

          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono font-semibold">
            <button
              onClick={() => setDisplayCount(16)}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                displayCount === 16 ? 'bg-[#2962FF] text-white' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              16 Varlık
            </button>
            <button
              onClick={() => setDisplayCount(24)}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                displayCount === 24 ? 'bg-[#2962FF] text-white' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              24 Varlık
            </button>
            <button
              onClick={() => setDisplayCount(36)}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                displayCount === 36 ? 'bg-[#2962FF] text-white' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              36 Varlık
            </button>
          </div>
        </div>
      </div>

      {/* 2. Volume-Weighted Heatmap Grid */}
      <div className="grid grid-cols-12 gap-2 sm:gap-2.5">
        {/* Tier 1: BTC & ETH (Span 6 on desktop) */}
        {visibleCoins.slice(0, 2).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          const tryPrice = coin.effectivePrice * usdtRate;

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-12 sm:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange
              )}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {coin.symbol}
                    </span>
                    <span className="text-xs font-semibold text-white/70 bg-black/30 rounded-md px-1.5 py-0.5">
                      {coin.name}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-white/60 mt-0.5">
                    Hacim: ${(coin.volume24hUsd / 1_000_000_000).toFixed(2)}B
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base font-black rounded-xl px-2.5 py-1 bg-black/40 border border-white/10">
                  {isPos ? <TrendingUp className="h-4 w-4 text-[#00E699]" /> : <TrendingDown className="h-4 w-4 text-[#FF3B56]" />}
                  <span className={isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
                    {isPos ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-white">
                    ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                  </div>
                  <div className="text-xs font-mono text-white/75 mt-0.5">
                    ₺{tryPrice > 10 ? tryPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : tryPrice.toFixed(2)}
                  </div>
                </div>

                <span className="flex items-center gap-1 text-xs text-white/80 group-hover:text-white font-semibold">
                  <span>Terminal</span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}

        {/* Tier 2: Next 4 Assets (SOL, BNB, XRP, DOGE etc.) - 4-Column Grid */}
        {visibleCoins.slice(2, 6).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          const tryPrice = coin.effectivePrice * usdtRate;

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-6 sm:col-span-3 rounded-2xl border p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg sm:text-xl font-black text-white">
                  {coin.symbol}
                </span>
                <span className={`font-mono text-xs font-bold rounded-lg px-2 py-0.5 bg-black/40 ${isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {isPos ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                </span>
              </div>

              <div className="mt-3">
                <div className="font-mono text-base sm:text-lg font-black text-white">
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </div>
                <div className="text-[11px] font-mono text-white/70">
                  ₺{tryPrice > 10 ? tryPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : tryPrice.toFixed(2)}
                </div>
              </div>
            </Link>
          );
        })}

        {/* Tier 3: Remaining Liquid Altcoins */}
        {visibleCoins.slice(6).map((coin) => {
          const isPos = coin.effectiveChange >= 0;

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-4 sm:col-span-3 lg:col-span-2 rounded-xl border p-2.5 sm:p-3 flex flex-col justify-between transition-all group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm font-black text-white truncate max-w-[55px]">
                  {coin.symbol}
                </span>
                <span className={`font-mono text-[11px] font-bold ${isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {isPos ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                </span>
              </div>

              <div className="mt-1.5 flex items-baseline justify-between">
                <span className="font-mono text-xs font-bold text-white truncate">
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </span>
                <ArrowUpRight className="h-3 w-3 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 3. Footer Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs text-[var(--card-muted)] border-t border-[var(--border)] pt-3 font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00E699]" />
          <span>Binance Spot & Vadeli Canlı Fiyatlar • Renkler 24 Saatlik Getiriye Sabitlenmiştir</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-3.5 rounded-xs bg-[#FF3B56]" />
            <span>24s Düşüş</span>
          </span>
          <span className="text-[var(--border)]">•</span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-3.5 rounded-xs bg-[#00E699]" />
            <span>24s Yükseliş</span>
          </span>
          <span className="text-[var(--border)]">•</span>
          <span>{coins.length} Varlık İzleniyor</span>
        </div>
      </div>
    </div>
  );
}
