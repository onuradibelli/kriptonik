'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LayoutGrid, ArrowUpRight, TrendingUp, TrendingDown, Layers, Sparkles, SlidersHorizontal } from 'lucide-react';
import { LIVE_CURRENCY_RATES } from '../lib/data';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [viewMode, setViewMode] = useState<'treemap' | 'grid'>('treemap');
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'L1' | 'DEFI' | 'MEME' | 'AI'>('ALL');
  const [sortBy, setSortBy] = useState<'CAP' | 'VOLUME' | 'CHANGE'>('CAP');
  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

  // Process coins with real-time tickers
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

  // Filter by category
  const filtered = mappedCoins.filter((c) => {
    if (filterCategory === 'L1') return c.category.toLowerCase().includes('katman') || ['BTC', 'ETH', 'SOL', 'BNB', 'AVAX', 'SUI', 'APT', 'ADA', 'NEAR'].includes(c.symbol);
    if (filterCategory === 'DEFI') return c.category.toLowerCase().includes('defi') || ['UNI', 'AAVE', 'ENA', 'JUP', 'RAY', 'ETHFI'].includes(c.symbol);
    if (filterCategory === 'MEME') return c.category.toLowerCase().includes('meme') || ['DOGE', 'SHIB', 'PEPE', 'PUMP', 'FLOKI', 'BONK'].includes(c.symbol);
    if (filterCategory === 'AI') return c.category.toLowerCase().includes('yapay') || ['NEAR', 'RENDER', 'TAO', 'FET'].includes(c.symbol);
    return true;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'CHANGE') return b.effectiveChange - a.effectiveChange;
    if (sortBy === 'VOLUME') return b.volume24hUsd - a.volume24hUsd;
    return a.marketCapRank - b.marketCapRank;
  });

  // Top assets for the TradingView Treemap layout
  const btc = mappedCoins.find((c) => c.symbol === 'BTC') || sorted[0];
  const eth = mappedCoins.find((c) => c.symbol === 'ETH') || sorted[1];
  const bnb = mappedCoins.find((c) => c.symbol === 'BNB') || sorted[2];
  const sol = mappedCoins.find((c) => c.symbol === 'SOL') || sorted[3];
  const xrp = mappedCoins.find((c) => c.symbol === 'XRP') || sorted[4];
  const doge = mappedCoins.find((c) => c.symbol === 'DOGE') || sorted[5];
  const avax = mappedCoins.find((c) => c.symbol === 'AVAX') || sorted[6];
  const sui = mappedCoins.find((c) => c.symbol === 'SUI') || sorted[7];
  const link = mappedCoins.find((c) => c.symbol === 'LINK') || sorted[8];
  const ada = mappedCoins.find((c) => c.symbol === 'ADA') || sorted[9];

  // Remaining altcoins for nested clusters
  const altcoins = sorted.filter(
    (c) => !['BTC', 'ETH', 'BNB', 'SOL', 'XRP', 'DOGE', 'AVAX', 'SUI', 'LINK', 'ADA'].includes(c.symbol)
  );

  // Background color helper (vibrant emerald for positive, crimson for negative, neutral slate for stable)
  const getTileBg = (change: number, isStable = false) => {
    if (isStable || Math.abs(change) < 0.15) {
      return 'bg-[#64748B] dark:bg-[#475569] text-white';
    }
    if (change >= 3) return 'bg-[#00B074] text-white';
    if (change > 0) return 'bg-[#00C087] text-white';
    if (change > -3) return 'bg-[#F6465D] text-white';
    return 'bg-[#DC2626] text-white';
  };

  return (
    <div className="panel-card p-4 sm:p-6 space-y-4">
      {/* 1. Header with Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] border border-[#00E699]/25 font-bold">
            <LayoutGrid className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
              <span>Market Isı Şeması (Crypto Coins Heatmap)</span>
              <span className="rounded bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold border border-[#00E699]/30">
                24S HACİM & PİYASA DEĞERİ
              </span>
            </h3>
          </div>
        </div>

        {/* Filters and View Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Chips */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            {[
              { id: 'ALL', label: 'Tüm Varlıklar' },
              { id: 'L1', label: 'Katman 1/2' },
              { id: 'DEFI', label: 'DeFi' },
              { id: 'AI', label: 'Yapay Zeka' },
              { id: 'MEME', label: 'Meme' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#2962FF] text-white shadow-xs font-bold'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-1 text-xs font-semibold">
            <button
              onClick={() => setViewMode('treemap')}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === 'treemap'
                  ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-bold'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              İç İçe Treemap
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-bold'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Izgara Görünümü
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'treemap' ? (
        /* HIERARCHICAL SQUARIFIED TREEMAP (TRADINGVIEW STYLE - IMAGE 2) */
        <div className="w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background)] p-1.5 select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 min-h-[480px]">
            {/* Left Dominant Block: BITCOIN (approx 50% width on desktop) */}
            <Link
              href={`/kripto/${btc.slug}/`}
              className={`lg:col-span-6 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.008] shadow-xs cursor-pointer group ${getTileBg(
                btc.effectiveChange
              )}`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7931A] text-white shadow-md text-2xl font-black">
                  ₿
                </div>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight">{btc.name}</h4>
                <div className="text-sm font-mono opacity-90">
                  ${btc.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono mt-1">
                  {btc.effectiveChange >= 0 ? '+' : ''}
                  {btc.effectiveChange.toFixed(2)}%
                </div>
                <span className="text-[11px] font-mono opacity-80 mt-1">
                  Piyasa Payı: %{btc.dominancePercent || 54.2}
                </span>
              </div>
            </Link>

            {/* Right Side: Ethereum, Stablecoins, and Sub-trees */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-1.5">
              {/* Upper Right: ETH and USDT */}
              <Link
                href={`/kripto/${eth.slug}/`}
                className={`col-span-7 rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.01] shadow-xs cursor-pointer ${getTileBg(
                  eth.effectiveChange
                )}`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#627EEA] text-white text-base font-bold shadow-xs">
                  Ξ
                </div>
                <div>
                  <div className="font-black text-sm sm:text-base">{eth.name}</div>
                  <div className="text-xs font-mono opacity-90">
                    ${eth.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                  </div>
                </div>
                <div className="text-lg sm:text-xl font-black font-mono">
                  {eth.effectiveChange >= 0 ? '+' : ''}
                  {eth.effectiveChange.toFixed(2)}%
                </div>
              </Link>

              {/* Tether USDT (Neutral Grey Tile) */}
              <div
                className={`col-span-5 rounded-xl p-3 flex flex-col justify-between items-center text-center transition-all shadow-xs ${getTileBg(
                  0.01,
                  true
                )}`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26A17B] text-white text-xs font-black shadow-xs">
                  ₮
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm">Tether USDT</div>
                  <div className="text-[10px] font-mono opacity-80">₺{usdtRate.toFixed(2)}</div>
                </div>
                <div className="text-xs sm:text-sm font-bold font-mono">+0.01%</div>
              </div>

              {/* Middle Tier: BNB, USDC, SOL, XRP */}
              <Link
                href={`/kripto/${bnb.slug}/`}
                className={`col-span-4 rounded-xl p-2.5 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  bnb.effectiveChange
                )}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3BA2F] text-black font-black text-xs">
                  B
                </div>
                <div className="font-bold text-xs truncate w-full">{bnb.symbol}</div>
                <div className="text-xs font-black font-mono">
                  {bnb.effectiveChange >= 0 ? '+' : ''}
                  {bnb.effectiveChange.toFixed(2)}%
                </div>
              </Link>

              {/* USDC (Neutral) */}
              <div
                className={`col-span-4 rounded-xl p-2.5 flex flex-col justify-between items-center text-center transition-all ${getTileBg(
                  -0.01,
                  true
                )}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2775CA] text-white font-black text-xs">
                  $
                </div>
                <div className="font-bold text-xs">USDC</div>
                <div className="text-xs font-mono font-bold">+0.00%</div>
              </div>

              <Link
                href={`/kripto/${sol.slug}/`}
                className={`col-span-4 rounded-xl p-2.5 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  sol.effectiveChange
                )}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] text-white font-bold text-xs">
                  ◎
                </div>
                <div className="font-bold text-xs truncate w-full">{sol.name}</div>
                <div className="text-xs font-black font-mono">
                  {sol.effectiveChange >= 0 ? '+' : ''}
                  {sol.effectiveChange.toFixed(2)}%
                </div>
              </Link>

              {/* Lower Tier: XRP, DOGE, AVAX, SUI + Altcoin Micro-Clusters */}
              <Link
                href={`/kripto/${xrp.slug}/`}
                className={`col-span-3 rounded-xl p-2 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  xrp.effectiveChange
                )}`}
              >
                <span className="font-black text-xs truncate">XRP</span>
                <span className="text-[11px] font-mono font-bold">
                  {xrp.effectiveChange >= 0 ? '+' : ''}
                  {xrp.effectiveChange.toFixed(2)}%
                </span>
              </Link>

              <Link
                href={`/kripto/${doge.slug}/`}
                className={`col-span-3 rounded-xl p-2 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  doge.effectiveChange
                )}`}
              >
                <span className="font-black text-xs truncate">DOGE</span>
                <span className="text-[11px] font-mono font-bold">
                  {doge.effectiveChange >= 0 ? '+' : ''}
                  {doge.effectiveChange.toFixed(2)}%
                </span>
              </Link>

              <Link
                href={`/kripto/${sui.slug}/`}
                className={`col-span-3 rounded-xl p-2 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  sui.effectiveChange
                )}`}
              >
                <span className="font-black text-xs truncate">SUI</span>
                <span className="text-[11px] font-mono font-bold">
                  {sui.effectiveChange >= 0 ? '+' : ''}
                  {sui.effectiveChange.toFixed(2)}%
                </span>
              </Link>

              <Link
                href={`/kripto/${avax.slug}/`}
                className={`col-span-3 rounded-xl p-2 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.02] ${getTileBg(
                  avax.effectiveChange
                )}`}
              >
                <span className="font-black text-xs truncate">AVAX</span>
                <span className="text-[11px] font-mono font-bold">
                  {avax.effectiveChange >= 0 ? '+' : ''}
                  {avax.effectiveChange.toFixed(2)}%
                </span>
              </Link>

              {/* Nested Micro-Tiles for 24+ Remaining Altcoins */}
              <div className="col-span-12 grid grid-cols-6 sm:grid-cols-8 gap-1 pt-0.5">
                {altcoins.slice(0, 24).map((coin) => (
                  <Link
                    key={coin.id}
                    href={`/kripto/${coin.slug}/`}
                    title={`${coin.name} (${coin.symbol}): ${coin.effectiveChange >= 0 ? '+' : ''}${coin.effectiveChange.toFixed(2)}% • $${coin.effectivePrice.toLocaleString('tr-TR')}`}
                    className={`rounded-lg p-1 flex flex-col items-center justify-center text-center transition-all hover:scale-105 cursor-pointer ${getTileBg(
                      coin.effectiveChange
                    )}`}
                  >
                    <span className="text-[10px] font-black truncate w-full">{coin.symbol}</span>
                    <span className="text-[9px] font-mono opacity-90 truncate w-full">
                      {coin.effectiveChange >= 0 ? '+' : ''}
                      {coin.effectiveChange.toFixed(1)}%
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SECONDARY: EXPANDED GRID VIEW */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {sorted.slice(0, 24).map((coin) => {
            const isGreen = coin.effectiveChange >= 0;
            return (
              <Link
                key={coin.id}
                href={`/kripto/${coin.slug}/`}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5 hover:border-[#2962FF] transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[var(--foreground)] group-hover:text-[#2962FF]">
                    {coin.symbol}
                  </div>
                  <span
                    className={`font-mono text-xs font-bold ${
                      isGreen ? 'text-[#00E699]' : 'text-[#FF3B56]'
                    }`}
                  >
                    {isGreen ? '+' : ''}
                    {coin.effectiveChange.toFixed(2)}%
                  </span>
                </div>
                <div className="text-[11px] text-[var(--card-muted)] truncate mt-0.5">{coin.name}</div>
                <div className="font-mono text-xs font-black text-[var(--foreground)] mt-2">
                  ${coin.effectivePrice > 10 ? coin.effectivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.effectivePrice.toFixed(4)}
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Footer Navigation to Dedicated Page */}
      <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] text-xs text-[var(--card-muted)]">
        <span>Tüm kripto varlıklar 24 saatlik piyasa değeri ve hacim dağılımına göre ölçeklenir.</span>
        <Link
          href="/market-isi-semasi/"
          className="text-[#2962FF] font-bold hover:underline flex items-center gap-1"
        >
          Tam Ekran Isı Şeması Sayfası <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
