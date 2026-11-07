'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { 
  LayoutGrid, 
  ArrowUpRight, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Sparkles, 
  SlidersHorizontal,
  Flame,
  Activity,
  BarChart2
} from 'lucide-react';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import Sparkline from './Sparkline';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

// Brand color maps for top tokens
const COIN_BADGES: Record<string, { bg: string; text: string; icon: string }> = {
  BTC: { bg: 'bg-[#F7931A]/15 border-[#F7931A]/30', text: 'text-[#F7931A]', icon: '₿' },
  ETH: { bg: 'bg-[#627EEA]/15 border-[#627EEA]/30', text: 'text-[#627EEA]', icon: 'Ξ' },
  SOL: { bg: 'bg-[#9945FF]/15 border-[#14F195]/30', text: 'text-[#14F195]', icon: '◎' },
  BNB: { bg: 'bg-[#F3BA2F]/15 border-[#F3BA2F]/30', text: 'text-[#F3BA2F]', icon: 'B' },
  XRP: { bg: 'bg-[#23292F]/20 border-slate-400/30', text: 'text-[var(--foreground)]', icon: '✕' },
  DOGE: { bg: 'bg-[#C2A633]/15 border-[#C2A633]/30', text: 'text-[#C2A633]', icon: 'Ð' },
  AVAX: { bg: 'bg-[#E84142]/15 border-[#E84142]/30', text: 'text-[#E84142]', icon: '▲' },
  SUI: { bg: 'bg-[#4DA2FF]/15 border-[#4DA2FF]/30', text: 'text-[#4DA2FF]', icon: '💧' },
  LINK: { bg: 'bg-[#375BD2]/15 border-[#375BD2]/30', text: 'text-[#375BD2]', icon: '⬡' },
  ADA: { bg: 'bg-[#0033AD]/15 border-[#0033AD]/30', text: 'text-[#3366FF]', icon: '₳' },
  NEAR: { bg: 'bg-[#000000]/15 border-slate-400/30', text: 'text-[var(--foreground)]', icon: 'Ⓝ' },
  TAO: { bg: 'bg-[#2ECC71]/15 border-[#2ECC71]/30', text: 'text-[#2ECC71]', icon: '𝜏' },
  PEPE: { bg: 'bg-[#479E39]/15 border-[#479E39]/30', text: 'text-[#479E39]', icon: '🐸' },
  SHIB: { bg: 'bg-[#FFA409]/15 border-[#FFA409]/30', text: 'text-[#FFA409]', icon: '🐕' },
  USDT: { bg: 'bg-[#26A17B]/15 border-[#26A17B]/30', text: 'text-[#26A17B]', icon: '₮' },
  USDC: { bg: 'bg-[#2775CA]/15 border-[#2775CA]/30', text: 'text-[#2775CA]', icon: '$' }
};

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [viewMode, setViewMode] = useState<'bento' | 'treemap'>('bento');
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'L1' | 'DEFI' | 'AI' | 'MEME'>('ALL');
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

  // Specific coins for top Bento slots
  const btc = mappedCoins.find((c) => c.symbol === 'BTC') || sorted[0];
  const eth = mappedCoins.find((c) => c.symbol === 'ETH') || sorted[1];
  
  // Secondary tier
  const mediumCoins = sorted.filter((c) => c.symbol !== 'BTC' && c.symbol !== 'ETH').slice(0, 8);
  // Remaining liquid altcoins
  const compactCoins = sorted.filter((c) => c.symbol !== 'BTC' && c.symbol !== 'ETH').slice(8, 28);

  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    if (price >= 1) return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 0.001) return price.toFixed(4);
    return price.toFixed(6);
  };

  const formatVolume = (usd: number) => {
    if (usd >= 1e9) return `$${(usd / 1e9).toFixed(2)}B`;
    if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1)}M`;
    return `$${(usd / 1e3).toFixed(0)}K`;
  };

  return (
    <div className="panel-card p-4 sm:p-6 space-y-5">
      {/* 1. Header with Title, Mode Switcher & Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] border border-[#00E699]/25 font-bold shadow-xs">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] tracking-tight">
                Market Isı Şeması
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00E699]/15 px-2.5 py-0.5 text-[11px] font-mono font-bold text-[#00A86B] dark:text-[#00E699] border border-[#00E699]/30">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] animate-pulse" />
                CANLI BENTO AKIŞI
              </span>
            </div>
            <p className="text-[11px] text-[var(--card-muted)]">
              24 saatlik getiri, hacim ağırlığı ve canlı Binance WebSocket verileriyle modüler bento mimarisi
            </p>
          </div>
        </div>

        {/* Action Controls: Switcher & Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Selector */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            {[
              { id: 'ALL', label: 'Tümü' },
              { id: 'L1', label: 'Katman 1' },
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

          {/* View Mode Toggle (Bento Grid vs Mozaik Treemap) */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-1 text-xs font-semibold">
            <button
              onClick={() => setViewMode('bento')}
              className={`rounded-lg px-3 py-1 transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'bento'
                  ? 'bg-[#2962FF] text-white shadow-xs font-bold'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <span>◫</span>
              <span>Bento Grid</span>
            </button>
            <button
              onClick={() => setViewMode('treemap')}
              className={`rounded-lg px-3 py-1 transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'treemap'
                  ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-bold border border-[var(--border)]'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <span>⊞</span>
              <span>Mozaik</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BENTO GRID VIEW (ALTERNATİF 1) */}
      {viewMode === 'bento' ? (
        <div className="space-y-4">
          {/* Top Tier: Bitcoin & Ethereum Hero Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bitcoin Hero Bento Card */}
            {btc && (
              <Link
                href={`/kripto/${btc.slug}/`}
                className="group relative rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--background)] p-5 transition-all duration-300 hover:border-[#F7931A]/60 hover:shadow-xl hover:shadow-[#F7931A]/5 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Ambient Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none ${
                  btc.effectiveChange >= 0 ? 'bg-[#00E699]' : 'bg-[#FF3B56]'
                }`} />

                {/* Top Row: Coin Identity, Rank & Live Ping */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7931A]/15 text-[#F7931A] border border-[#F7931A]/30 text-2xl font-black shadow-xs group-hover:scale-105 transition-transform">
                      ₿
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-[var(--foreground)] group-hover:text-[#F7931A] transition-colors">
                          {btc.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--card-muted)]">
                          {btc.symbol}
                        </span>
                        <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono font-bold text-[var(--card-muted)] border border-[var(--border)]">
                          #1
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--card-muted)] flex items-center gap-2 mt-0.5">
                        <span>Piyasa Payı: <strong>%{btc.dominancePercent || 56.4}</strong></span>
                        <span>•</span>
                        <span>24s Hacim: <strong>{formatVolume(btc.volume24hUsd)}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* 24h Change Pill */}
                  <div className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-mono font-black border shadow-xs ${
                    btc.effectiveChange >= 0
                      ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30'
                      : 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/30'
                  }`}>
                    {btc.effectiveChange >= 0 ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                    <span>{btc.effectiveChange >= 0 ? '+' : ''}{btc.effectiveChange.toFixed(2)}%</span>
                  </div>
                </div>

                {/* Middle Row: Massive Live Prices & Sparkline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center my-4 relative z-10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--foreground)] tracking-tight">
                      ${formatPrice(btc.effectivePrice)}
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-[var(--card-muted)] mt-1 flex items-center gap-1.5">
                      <span>₺{(btc.effectivePrice * usdtRate).toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY</span>
                      <span className="text-[10px] opacity-75">(1 USDT = ₺{usdtRate.toFixed(2)})</span>
                    </div>
                  </div>

                  {/* Sparkline Trend Chart */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-[var(--card-muted)] mb-1">24 Saatlik Fiyat Eğrisi</span>
                    <Sparkline
                      change24h={btc.effectiveChange}
                      width={180}
                      height={44}
                      className="w-full max-w-[200px]"
                    />
                  </div>
                </div>

                {/* Bottom Row: Quick Stats & Direct Link */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-xs text-[var(--card-muted)] relative z-10">
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span>24s Düşük: <strong>${formatPrice(btc.low24h || btc.effectivePrice * 0.985)}</strong></span>
                    <span>24s Yüksek: <strong>${formatPrice(btc.high24h || btc.effectivePrice * 1.015)}</strong></span>
                  </div>
                  <span className="text-[#F7931A] font-bold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Bitcoin Analizi <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            )}

            {/* Ethereum Hero Bento Card */}
            {eth && (
              <Link
                href={`/kripto/${eth.slug}/`}
                className="group relative rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--background)] p-5 transition-all duration-300 hover:border-[#627EEA]/60 hover:shadow-xl hover:shadow-[#627EEA]/5 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Ambient Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none ${
                  eth.effectiveChange >= 0 ? 'bg-[#00E699]' : 'bg-[#FF3B56]'
                }`} />

                {/* Top Row: Coin Identity, Rank & Live Ping */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#627EEA]/15 text-[#627EEA] border border-[#627EEA]/30 text-2xl font-black shadow-xs group-hover:scale-105 transition-transform">
                      Ξ
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-[var(--foreground)] group-hover:text-[#627EEA] transition-colors">
                          {eth.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--card-muted)]">
                          {eth.symbol}
                        </span>
                        <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono font-bold text-[var(--card-muted)] border border-[var(--border)]">
                          #2
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--card-muted)] flex items-center gap-2 mt-0.5">
                        <span>Piyasa Payı: <strong>%{eth.dominancePercent || 14.8}</strong></span>
                        <span>•</span>
                        <span>24s Hacim: <strong>{formatVolume(eth.volume24hUsd)}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* 24h Change Pill */}
                  <div className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-mono font-black border shadow-xs ${
                    eth.effectiveChange >= 0
                      ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30'
                      : 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/30'
                  }`}>
                    {eth.effectiveChange >= 0 ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                    <span>{eth.effectiveChange >= 0 ? '+' : ''}{eth.effectiveChange.toFixed(2)}%</span>
                  </div>
                </div>

                {/* Middle Row: Massive Live Prices & Sparkline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center my-4 relative z-10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--foreground)] tracking-tight">
                      ${formatPrice(eth.effectivePrice)}
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-[var(--card-muted)] mt-1 flex items-center gap-1.5">
                      <span>₺{(eth.effectivePrice * usdtRate).toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY</span>
                      <span className="text-[10px] opacity-75">(Katman-1 Lideri)</span>
                    </div>
                  </div>

                  {/* Sparkline Trend Chart */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-[var(--card-muted)] mb-1">24 Saatlik Fiyat Eğrisi</span>
                    <Sparkline
                      change24h={eth.effectiveChange}
                      width={180}
                      height={44}
                      className="w-full max-w-[200px]"
                    />
                  </div>
                </div>

                {/* Bottom Row: Quick Stats & Direct Link */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-xs text-[var(--card-muted)] relative z-10">
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span>24s Düşük: <strong>${formatPrice(eth.low24h || eth.effectivePrice * 0.982)}</strong></span>
                    <span>24s Yüksek: <strong>${formatPrice(eth.high24h || eth.effectivePrice * 1.018)}</strong></span>
                  </div>
                  <span className="text-[#627EEA] font-bold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Ethereum Analizi <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* Secondary Tier: Major Altcoin Bento Grid (SOL, BNB, XRP, DOGE, AVAX, SUI, LINK, ADA, etc.) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {mediumCoins.map((coin) => {
              const badge = COIN_BADGES[coin.symbol] || {
                bg: 'bg-slate-100 dark:bg-slate-800 border-[var(--border)]',
                text: 'text-[var(--foreground)]',
                icon: coin.symbol.slice(0, 2)
              };
              const isPositive = coin.effectiveChange >= 0;

              return (
                <Link
                  key={coin.id}
                  href={`/kripto/${coin.slug}/`}
                  className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-200 hover:border-[#2962FF]/50 hover:shadow-md flex flex-col justify-between"
                >
                  {/* Top Bar: Icon, Symbol, Name & 24h Change Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-black text-sm border shadow-2xs ${badge.bg} ${badge.text}`}>
                        {badge.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-black text-sm text-[var(--foreground)] truncate group-hover:text-[#2962FF] transition-colors">
                          {coin.symbol}
                        </div>
                        <div className="text-[11px] text-[var(--card-muted)] truncate">
                          {coin.name}
                        </div>
                      </div>
                    </div>

                    <div className={`shrink-0 rounded-lg px-2 py-0.5 text-xs font-mono font-black border ${
                      isPositive
                        ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30'
                        : 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/30'
                    }`}>
                      {isPositive ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                    </div>
                  </div>

                  {/* Price & Sparkline Row */}
                  <div className="flex items-end justify-between gap-2 mt-3 pt-3 border-t border-[var(--border)]">
                    <div>
                      <div className="text-base font-black font-mono text-[var(--foreground)]">
                        ${formatPrice(coin.effectivePrice)}
                      </div>
                      <div className="text-[11px] font-mono text-[var(--card-muted)]">
                        ₺{(coin.effectivePrice * usdtRate).toLocaleString('tr-TR', { maximumFractionDigits: coin.effectivePrice > 1 ? 2 : 4 })}
                      </div>
                    </div>

                    <Sparkline
                      change24h={coin.effectiveChange}
                      width={86}
                      height={26}
                      className="shrink-0"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Tertiary Tier: Compact Altcoin Tiles (20+ Liquid Coins) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs font-bold text-[var(--card-muted)] px-1">
              <span className="flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-[#2962FF]" />
                <span>Diğer Likit Ekosistem Varlıkları (24s Değişim)</span>
              </span>
              <span className="font-mono text-[11px]">Toplam {mappedCoins.length} Kripto Para</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {compactCoins.map((coin) => {
                const isPositive = coin.effectiveChange >= 0;
                return (
                  <Link
                    key={coin.id}
                    href={`/kripto/${coin.slug}/`}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5 hover:border-[#2962FF]/50 transition-all flex items-center justify-between gap-2 group hover:bg-[var(--card-subtle)]"
                  >
                    <div className="min-w-0">
                      <div className="font-black text-xs text-[var(--foreground)] group-hover:text-[#2962FF] truncate">
                        {coin.symbol}
                      </div>
                      <div className="text-[10px] font-mono text-[var(--card-muted)] truncate">
                        ${formatPrice(coin.effectivePrice)}
                      </div>
                    </div>

                    <span className={`text-[11px] font-mono font-bold shrink-0 ${
                      isPositive ? 'text-[#00C087]' : 'text-[#F6465D]'
                    }`}>
                      {isPositive ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* 3. TRADINGVIEW SQUARIFIED TREEMAP (ALTERNATIVE VIEW) */
        <div className="w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background)] p-1.5 select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 min-h-[480px]">
            {/* Left Dominant Block: BITCOIN */}
            <Link
              href={`/kripto/${btc.slug}/`}
              className={`lg:col-span-6 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.008] shadow-xs cursor-pointer group ${
                btc.effectiveChange >= 0 ? 'bg-[#00B074] text-white' : 'bg-[#DC2626] text-white'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7931A] text-white shadow-md text-2xl font-black">
                  ₿
                </div>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight">{btc.name}</h4>
                <div className="text-sm font-mono opacity-90">
                  ${formatPrice(btc.effectivePrice)}
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono mt-1">
                  {btc.effectiveChange >= 0 ? '+' : ''}
                  {btc.effectiveChange.toFixed(2)}%
                </div>
                <span className="text-[11px] font-mono opacity-80 mt-1">
                  Piyasa Payı: %{btc.dominancePercent || 56.4}
                </span>
              </div>
            </Link>

            {/* Right Side: Ethereum, Stablecoins, and Sub-trees */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-1.5">
              <Link
                href={`/kripto/${eth.slug}/`}
                className={`col-span-7 rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center transition-all hover:scale-[1.01] shadow-xs cursor-pointer ${
                  eth.effectiveChange >= 0 ? 'bg-[#00C087] text-white' : 'bg-[#DC2626] text-white'
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#627EEA] text-white text-base font-bold shadow-xs">
                  Ξ
                </div>
                <div>
                  <div className="font-black text-sm sm:text-base">{eth.name}</div>
                  <div className="text-xs font-mono opacity-90">${formatPrice(eth.effectivePrice)}</div>
                </div>
                <div className="text-lg sm:text-xl font-black font-mono">
                  {eth.effectiveChange >= 0 ? '+' : ''}
                  {eth.effectiveChange.toFixed(2)}%
                </div>
              </Link>

              {/* Tether USDT */}
              <div className="col-span-5 rounded-xl p-3 flex flex-col justify-between items-center text-center transition-all shadow-xs bg-[#475569] text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26A17B] text-white text-xs font-black shadow-xs">
                  ₮
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm">Tether USDT</div>
                  <div className="text-[10px] font-mono opacity-80">₺{usdtRate.toFixed(2)}</div>
                </div>
                <div className="text-xs sm:text-sm font-bold font-mono">+0.01%</div>
              </div>

              {/* Other altcoins grid */}
              <div className="col-span-12 grid grid-cols-4 sm:grid-cols-6 gap-1 pt-0.5">
                {mediumCoins.concat(compactCoins).slice(0, 18).map((coin) => (
                  <Link
                    key={coin.id}
                    href={`/kripto/${coin.slug}/`}
                    className={`rounded-lg p-1.5 flex flex-col items-center justify-center text-center transition-all hover:scale-105 cursor-pointer ${
                      coin.effectiveChange >= 0 ? 'bg-[#00C087] text-white' : 'bg-[#DC2626] text-white'
                    }`}
                  >
                    <span className="text-[11px] font-black truncate w-full">{coin.symbol}</span>
                    <span className="text-[10px] font-mono opacity-90 truncate w-full">
                      {coin.effectiveChange >= 0 ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation to Dedicated Page */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border)] text-xs text-[var(--card-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#00E699]" />
          <span>Fiyatlar serbest piyasa ve Binance WebSocket canlı akışıyla her saniye güncellenir.</span>
        </span>
        <Link
          href="/market-isi-semasi/"
          className="text-[#2962FF] font-bold hover:underline flex items-center gap-1"
        >
          Tam Ekran Market Isı Şeması Sayfası <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
