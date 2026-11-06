'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LayoutGrid, Flame, ArrowUpRight, TrendingUp, TrendingDown, Layers, Sparkles, BarChart2 } from 'lucide-react';
import { LIVE_CURRENCY_RATES } from '../lib/data';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [filterMode, setFilterMode] = useState<'VOLUME' | 'CAP' | 'GAINERS'>('VOLUME');
  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

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
    if (filterMode === 'CAP') return a.marketCapRank - b.marketCapRank;
    return b.volume24hUsd - a.volume24hUsd;
  });

  // Color generator based on 24h change
  const getTileColorStyle = (change: number, flash?: 'UP' | 'DOWN' | null) => {
    if (flash === 'UP') {
      return 'bg-[#00E699]/35 border-[#00E699] text-white shadow-[0_0_20px_rgba(0,230,153,0.4)]';
    }
    if (flash === 'DOWN') {
      return 'bg-[#FF3B56]/35 border-[#FF3B56] text-white shadow-[0_0_20px_rgba(255,59,86,0.4)]';
    }

    if (change >= 4) {
      return 'bg-gradient-to-br from-[#00E699]/25 to-[#00B074]/35 border-[#00E699]/40 text-[#00E699] hover:border-[#00E699]';
    } else if (change > 0) {
      return 'bg-gradient-to-br from-[#00C087]/15 to-[#008F64]/25 border-[#00C087]/30 text-[#00E699] hover:border-[#00C087]';
    } else if (change <= -4) {
      return 'bg-gradient-to-br from-[#FF3B56]/25 to-[#D90429]/35 border-[#FF3B56]/40 text-[#FF3B56] hover:border-[#FF3B56]';
    } else {
      return 'bg-gradient-to-br from-[#FF5C72]/15 to-[#C9184A]/25 border-[#FF5C72]/30 text-[#FF5C72] hover:border-[#FF5C72]';
    }
  };

  const totalVol = sortedCoins.reduce((acc, c) => acc + c.volume24hUsd, 0);

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
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
                HACİM AĞIRLIKLI CANLI TREEMAP
              </span>
            </h3>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
          <button
            onClick={() => setFilterMode('VOLUME')}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              filterMode === 'VOLUME' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            24s Hacim Ağırlıklı
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
            Performans
          </button>
        </div>
      </div>

      {/* 2. Proportional Horizontal Mosaic Treemap Layout (Institutional Grade) */}
      <div className="grid grid-cols-12 gap-2.5">
        {/* Tier 1: Bitcoin & Ethereum - Dominant Market Anchor Blocks */}
        {sortedCoins.slice(0, 2).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          const tryPrice = coin.effectivePrice * usdtRate;
          const volPct = ((coin.volume24hUsd / totalVol) * 100).toFixed(1);

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-12 md:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
              )}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {coin.symbol}
                    </span>
                    <span className="text-xs font-sans text-white/80 font-medium">
                      {coin.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-white/70">
                    24s Hacim Payı: %{volPct} (${(coin.volume24hUsd / 1_000_000_000).toFixed(2)}B)
                  </span>
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
                  <div className={`font-mono text-xl sm:text-2xl font-black transition-colors ${
                    coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-white'
                  }`}>
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

        {/* Tier 2: Mid-Major Assets (SOL, BNB, XRP, DOGE) - 4-Column Grid */}
        {sortedCoins.slice(2, 6).map((coin) => {
          const isPos = coin.effectiveChange >= 0;
          const tryPrice = coin.effectivePrice * usdtRate;

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-6 sm:col-span-3 rounded-2xl border p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
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
                <div className={`font-mono text-base sm:text-lg font-black transition-colors ${
                  coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-white'
                }`}>
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </div>
                <div className="text-[11px] font-mono text-white/70">
                  ₺{tryPrice > 10 ? tryPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : tryPrice.toFixed(2)}
                </div>
              </div>
            </Link>
          );
        })}

        {/* Tier 3: High Volume Altcoins (SUI, LINK, ADA, AVAX, PEPE, SHIB, NEAR, APT, DOT, LTC, TAO, UNI, ARB, TIA) */}
        {sortedCoins.slice(6, 20).map((coin) => {
          const isPos = coin.effectiveChange >= 0;

          return (
            <Link
              key={coin.id}
              href={`/kripto/${coin.slug}/`}
              className={`col-span-4 sm:col-span-3 lg:col-span-2 rounded-xl border p-2.5 sm:p-3 flex flex-col justify-between transition-all group relative overflow-hidden ${getTileColorStyle(
                coin.effectiveChange,
                coin.flash
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm font-black text-white">
                  {coin.symbol}
                </span>
                <span className={`font-mono text-[11px] font-bold ${isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {isPos ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                </span>
              </div>

              <div className="mt-1.5 flex items-baseline justify-between">
                <span className={`font-mono text-xs font-bold transition-colors ${
                  coin.flash === 'UP' ? 'tick-flash-up text-[#00E699]' : coin.flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-white'
                }`}>
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </span>
                <ArrowUpRight className="h-3 w-3 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 3. Footer Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs text-[var(--card-muted)] border-t border-[var(--border)] pt-3 font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00E699] pulse-bull" />
          <span>Binance Vadeli & Spot WebSocket Senkron</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-3.5 rounded-xs bg-[#FF3B56]" />
            <span>Düşüş</span>
          </span>
          <span className="text-[var(--border)]">•</span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-3.5 rounded-xs bg-[#00E699]" />
            <span>Yükseliş</span>
          </span>
          <span className="text-[var(--border)]">•</span>
          <span>Toplam 20 Varlık</span>
        </div>
      </div>
    </div>
  );
}
