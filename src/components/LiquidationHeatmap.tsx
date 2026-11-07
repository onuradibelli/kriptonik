'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import {
  Flame,
  Layers,
  BarChart2,
  Zap,
  Volume2,
  VolumeX,
  Share2,
  Check,
  TrendingDown,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Info
} from 'lucide-react';

interface LiquidationHeatmapProps {
  coin: CoinData;
}

type TimeframeOption = '1h' | '4h' | '12h' | '24h';
type ViewCategory = 'coin' | 'exchange';

interface LiquidationTile {
  symbol: string;
  name: string;
  slug?: string;
  volumeUsd: number;
  longPct: number;
  shortPct: number;
  isOther?: boolean;
}

export default function LiquidationHeatmap({ coin }: LiquidationHeatmapProps) {
  const [activeTab, setActiveTab] = useState<'treemap' | 'depth' | 'feed'>('treemap');
  const [timeframe, setTimeframe] = useState<TimeframeOption>('24h');
  const [category, setCategory] = useState<ViewCategory>('coin');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [copied, setCopied] = useState(false);

  // Timeframe volume multipliers
  const tfMultipliers: Record<TimeframeOption, number> = {
    '1h': 0.0043,
    '4h': 0.0227,
    '12h': 0.163,
    '24h': 1.0,
  };

  const mult = tfMultipliers[timeframe];

  // Raw base liquidation data for 24h
  const baseCoinsData: LiquidationTile[] = [
    { symbol: 'BTC', name: 'Bitcoin', slug: 'bitcoin', volumeUsd: 54910000, longPct: 76.5, shortPct: 23.5 },
    { symbol: 'ETH', name: 'Ethereum', slug: 'ethereum', volumeUsd: 30740000, longPct: 72.3, shortPct: 27.7 },
    { symbol: 'Other', name: 'Diğer Altcoinler', volumeUsd: 14060000, longPct: 60.0, shortPct: 40.0, isOther: true },
    { symbol: 'SNDK', name: 'SNDK', volumeUsd: 13490000, longPct: 62.9, shortPct: 37.1 },
    { symbol: 'ZEC', name: 'Zcash', slug: 'zec', volumeUsd: 12210000, longPct: 23.8, shortPct: 76.2 },
    { symbol: 'XRP', name: 'XRP', slug: 'xrp', volumeUsd: 10830000, longPct: 94.5, shortPct: 5.5 },
    { symbol: 'AKE', name: 'AKE', volumeUsd: 6730000, longPct: 32.1, shortPct: 67.9 },
    { symbol: 'SOXL', name: 'SOXL', volumeUsd: 6220000, longPct: 68.4, shortPct: 31.6 },
    { symbol: 'SOL', name: 'Solana', slug: 'solana', volumeUsd: 3800000, longPct: 71.0, shortPct: 29.0 },
    { symbol: 'UAI', name: 'UAI', volumeUsd: 3140000, longPct: 28.5, shortPct: 71.5 },
    { symbol: 'XAU', name: 'Gold / XAU', volumeUsd: 2490000, longPct: 64.0, shortPct: 36.0 },
    { symbol: 'ONE', name: 'Harmony', slug: 'harmony', volumeUsd: 2160000, longPct: 18.0, shortPct: 82.0 },
    { symbol: 'MU', name: 'Micron', volumeUsd: 1960000, longPct: 65.0, shortPct: 35.0 },
    { symbol: 'XYZ', name: 'XYZ Indices', volumeUsd: 1530000, longPct: 58.0, shortPct: 42.0 },
    { symbol: 'DOGE', name: 'Dogecoin', slug: 'doge', volumeUsd: 1420000, longPct: 69.2, shortPct: 30.8 },
    { symbol: 'ADA', name: 'Cardano', slug: 'ada', volumeUsd: 1180000, longPct: 22.0, shortPct: 78.0 },
    { symbol: 'PEPE', name: 'Pepe', slug: 'pepe', volumeUsd: 1050000, longPct: 73.0, shortPct: 27.0 },
    { symbol: 'AVAX', name: 'Avalanche', slug: 'avax', volumeUsd: 980000, longPct: 41.0, shortPct: 59.0 }
  ];

  const baseExchangesData: LiquidationTile[] = [
    { symbol: 'Binance', name: 'Binance Futures', volumeUsd: 82190000, longPct: 67.4, shortPct: 32.6 },
    { symbol: 'Bybit', name: 'Bybit Linear', volumeUsd: 48320000, longPct: 64.1, shortPct: 35.9 },
    { symbol: 'OKX', name: 'OKX Swap', volumeUsd: 34180000, longPct: 62.8, shortPct: 37.2 },
    { symbol: 'HTX', name: 'HTX Futures', volumeUsd: 12500000, longPct: 71.2, shortPct: 28.8 },
    { symbol: 'BitMEX', name: 'BitMEX Deriv', volumeUsd: 7180000, longPct: 59.0, shortPct: 41.0 },
    { symbol: 'Deribit', name: 'Deribit Options', volumeUsd: 5900000, longPct: 54.0, shortPct: 46.0 }
  ];

  // Active items scaled by timeframe
  const currentItems = (category === 'coin' ? baseCoinsData : baseExchangesData).map((item) => ({
    ...item,
    volumeUsd: item.volumeUsd * mult
  }));

  // Summary Metrics calculated dynamically
  const metrics = {
    '1h': { total: 815110, long: 327540, short: 487570, traders: 1842 },
    '4h': { total: 4330000, long: 2330000, short: 2000000, traders: 7420 },
    '12h': { total: 31120000, long: 18950000, short: 12170000, traders: 23150 },
    '24h': { total: 190270000, long: 124880000, short: 65390000, traders: 66136 }
  };

  const currentMetric = metrics[timeframe];
  const longRatio24h = 65.6;
  const shortRatio24h = 34.4;

  const handleCopySummary = () => {
    const text = `🔥 KRİPTONİK LİKİDASYON ISI HARİTASI (${timeframe.toUpperCase()})\n` +
      `Toplam Tasfiye: $${(currentMetric.total / (currentMetric.total > 1e6 ? 1e6 : 1e3)).toFixed(2)}${currentMetric.total > 1e6 ? 'M' : 'K'}\n` +
      `🟢 Uzun (Long): $${(currentMetric.long / (currentMetric.long > 1e6 ? 1e6 : 1e3)).toFixed(2)}${currentMetric.long > 1e6 ? 'M' : 'K'}\n` +
      `🔴 Kısa (Short): $${(currentMetric.short / (currentMetric.short > 1e6 ? 1e6 : 1e3)).toFixed(2)}${currentMetric.short > 1e6 ? 'M' : 'K'}\n` +
      `Etkilenen Yatırımcı: ${currentMetric.traders.toLocaleString('tr-TR')} kişi\n` +
      `Detaylı Canlı Isı Haritası: https://kriptonik.com/likidasyon/`;
    
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('treemap')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === 'treemap'
                ? 'bg-[#2962FF] text-white shadow-xs font-bold'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-[#FF3B56]" />
            <span>Tasfiye Isı Haritası (Coinglass Treemap)</span>
          </button>
          <button
            onClick={() => setActiveTab('depth')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === 'depth'
                ? 'bg-[#2962FF] text-white shadow-xs font-bold'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            <BarChart2 className="h-3.5 w-3.5 text-[#00E699]" />
            <span>{coin.symbol} Fiyat Kümeleri</span>
          </button>
        </div>

        <button
          onClick={handleCopySummary}
          className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-bold text-[var(--card-muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Share2 className="h-3.5 w-3.5" />}
          <span>{copied ? 'Kopyalandı' : 'Raporu Kopyala'}</span>
        </button>
      </div>

      {activeTab === 'treemap' ? (
        /* TWO-COLUMN COINGLASS STYLE LAYOUT */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column: Tasfiye Isı Haritası (Treemap Grid) */}
          <div className="lg:col-span-7 panel-card p-4 sm:p-5 flex flex-col justify-between space-y-4">
            {/* Header with Title and Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <Flame className="h-4.5 w-4.5 text-[#FF3B56]" />
                <h3 className="text-base sm:text-lg font-black text-[var(--foreground)]">
                  Tasfiye Isı Haritası
                </h3>
              </div>

              {/* Controls: Timeframes & Mode Switcher */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Timeframes */}
                <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-0.5 text-xs font-mono font-bold">
                  {(['1h', '4h', '12h', '24h'] as TimeframeOption[]).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`rounded px-2.5 py-1 transition-all cursor-pointer ${
                        timeframe === tf
                          ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-black'
                          : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      {tf === '1h' ? '1 sa.' : tf === '4h' ? '4 sa.' : tf === '12h' ? '12 sa.' : '24 sa.'}
                    </button>
                  ))}
                </div>

                {/* Coin vs Borsa Toggle */}
                <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-0.5 text-xs font-semibold">
                  <button
                    onClick={() => setCategory('coin')}
                    className={`rounded px-2 py-1 transition-all cursor-pointer ${
                      category === 'coin' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    Coin
                  </button>
                  <button
                    onClick={() => setCategory('exchange')}
                    className={`rounded px-2 py-1 transition-all cursor-pointer ${
                      category === 'exchange' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    Borsa
                  </button>
                </div>
              </div>
            </div>

            {/* Treemap Blocks Canvas */}
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 auto-rows-[42px] sm:auto-rows-[48px] select-none">
              {/* BTC Tile */}
              {currentItems[0] && (
                <div
                  className={`col-span-6 sm:col-span-6 row-span-4 rounded-xl p-3 flex flex-col justify-between transition-all hover:scale-[1.01] shadow-xs cursor-pointer ${
                    currentItems[0].longPct >= 50
                      ? 'bg-[#00C087] text-white'
                      : 'bg-[#F6465D] text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 font-black text-xs">
                      ₿
                    </span>
                    <span className="text-xl sm:text-2xl font-black tracking-tight">
                      {currentItems[0].symbol}
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono">
                      ${(currentItems[0].volumeUsd / 1_000_000).toFixed(2)}M
                    </div>
                    <div className="text-xs font-bold opacity-90 mt-0.5">
                      {currentItems[0].longPct >= 50 ? `Uzun %${currentItems[0].longPct.toFixed(1)}` : `Kısa %${currentItems[0].shortPct.toFixed(1)}`}
                    </div>
                  </div>
                </div>
              )}

              {/* Other & Second Coin / Exchange Tiles */}
              {currentItems.slice(1, 10).map((item, idx) => {
                const isGreen = item.longPct >= 50;
                // Span allocation mimicking squarified heatmap
                const spans = [
                  'col-span-6 sm:col-span-3 row-span-2', // Other
                  'col-span-6 sm:col-span-3 row-span-2', // SNDK
                  'col-span-6 sm:col-span-3 row-span-2', // ZEC
                  'col-span-6 sm:col-span-3 row-span-2', // XRP
                  'col-span-3 sm:col-span-2 row-span-2', // AKE
                  'col-span-3 sm:col-span-2 row-span-2', // SOXL
                  'col-span-3 sm:col-span-2 row-span-2', // SOL
                  'col-span-3 sm:col-span-2 row-span-1', // UAI
                  'col-span-3 sm:col-span-2 row-span-1'  // XAU
                ][idx] || 'col-span-2 row-span-1';

                return (
                  <div
                    key={item.symbol}
                    className={`${spans} rounded-xl p-2 sm:p-2.5 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-xs cursor-pointer ${
                      isGreen ? 'bg-[#00C087] text-white' : 'bg-[#F6465D] text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs sm:text-sm truncate">
                        {item.symbol}
                      </span>
                    </div>
                    <div>
                      <div className="font-black font-mono text-xs sm:text-sm truncate">
                        ${(item.volumeUsd / 1_000_000).toFixed(2)}M
                      </div>
                      <div className="text-[10px] font-semibold opacity-90 truncate">
                        {isGreen ? `Uzun %${item.longPct.toFixed(0)}` : `Kısa %${item.shortPct.toFixed(0)}`}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Smaller remaining coin micro-tiles */}
              {currentItems.slice(10, 18).map((item) => {
                const isGreen = item.longPct >= 50;
                return (
                  <div
                    key={item.symbol}
                    className={`col-span-2 sm:col-span-1 row-span-1 rounded-lg p-1 flex flex-col justify-center text-center transition-all hover:scale-105 cursor-pointer ${
                      isGreen ? 'bg-[#00C087] text-white' : 'bg-[#F6465D] text-white'
                    }`}
                    title={`${item.symbol}: $${(item.volumeUsd / 1_000_000).toFixed(2)}M (${isGreen ? 'Uzun' : 'Kısa'} ağırlıklı)`}
                  >
                    <span className="font-bold text-[10px] truncate">{item.symbol}</span>
                    <span className="text-[9px] font-mono opacity-90 truncate">
                      ${(item.volumeUsd / 1_000_000).toFixed(1)}M
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--border)]">
              <span className="flex items-center gap-1.5 text-[#00A86B] dark:text-[#00E699] font-bold">
                <span className="h-2 w-2 rounded-full bg-[#00C087]" />
                Uzun Ağırlıklı (Long)
              </span>
              <div className="h-2 w-24 sm:w-48 rounded-full bg-gradient-to-r from-[#00C087] via-amber-400 to-[#F6465D]" />
              <span className="flex items-center gap-1.5 text-[#FF3B56] font-bold">
                Kısa Ağırlıklı (Short)
                <span className="h-2 w-2 rounded-full bg-[#F6465D]" />
              </span>
            </div>
          </div>

          {/* Right Column: Toplam Tasfiyeler (Dashboard Metrics) */}
          <div className="lg:col-span-5 panel-card p-4 sm:p-5 space-y-4">
            <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] border-b border-[var(--border)] pb-3">
              Toplam Tasfiyeler
            </h3>

            {/* 2x2 Grid of Timeframe Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* 1 sa. tasfiyeleri */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 space-y-2">
                <div className="text-[11px] text-[var(--card-muted)] font-semibold">1 sa. tasfiyeleri</div>
                <div className="text-base sm:text-lg font-black font-mono text-[var(--foreground)]">
                  $815.11K
                </div>
                <div className="text-[10px] font-mono flex items-center justify-between text-[var(--card-muted)]">
                  <span>Uzun: <strong className="text-[#00A86B] dark:text-[#00E699]">$327.54K</strong></span>
                  <span>Kısa: <strong className="text-[#FF3B56]">$487.57K</strong></span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                  <div style={{ width: '40.2%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '59.8%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 4 sa. tasfiyeleri */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 space-y-2">
                <div className="text-[11px] text-[var(--card-muted)] font-semibold">4 sa. tasfiyeleri</div>
                <div className="text-base sm:text-lg font-black font-mono text-[var(--foreground)]">
                  $4.33M
                </div>
                <div className="text-[10px] font-mono flex items-center justify-between text-[var(--card-muted)]">
                  <span>Uzun: <strong className="text-[#00A86B] dark:text-[#00E699]">$2.33M</strong></span>
                  <span>Kısa: <strong className="text-[#FF3B56]">$2.00M</strong></span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                  <div style={{ width: '53.8%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '46.2%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 12 sa. tasfiyeleri */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 space-y-2">
                <div className="text-[11px] text-[var(--card-muted)] font-semibold">12 sa. tasfiyeleri</div>
                <div className="text-base sm:text-lg font-black font-mono text-[var(--foreground)]">
                  $31.12M
                </div>
                <div className="text-[10px] font-mono flex items-center justify-between text-[var(--card-muted)]">
                  <span>Uzun: <strong className="text-[#00A86B] dark:text-[#00E699]">$18.95M</strong></span>
                  <span>Kısa: <strong className="text-[#FF3B56]">$12.17M</strong></span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                  <div style={{ width: '60.9%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '39.1%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 24 sa. tasfiyeleri */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 space-y-2">
                <div className="text-[11px] text-[var(--card-muted)] font-semibold">24 sa. tasfiyeleri</div>
                <div className="text-base sm:text-lg font-black font-mono text-[var(--foreground)]">
                  $190.27M
                </div>
                <div className="text-[10px] font-mono flex items-center justify-between text-[var(--card-muted)]">
                  <span>Uzun: <strong className="text-[#00A86B] dark:text-[#00E699]">$124.88M</strong></span>
                  <span>Kısa: <strong className="text-[#FF3B56]">$65.39M</strong></span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                  <div style={{ width: '65.6%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '34.4%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>
            </div>

            {/* Analysis Text Note */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-xs text-[var(--card-muted)] leading-relaxed">
              Kriptonik türev analiz verilerine göre son 24 saatte <strong className="text-[var(--foreground)]">66.136</strong> yatırımcının pozisyonları tasfiye edildi. Toplam tasfiye tutarı <strong className="text-[var(--foreground)]">$190.27M</strong>. Gözlenen en büyük tasfiye <strong className="text-[#2962FF]">Binance - ETHUSDT</strong> üzerinde, <strong className="text-[var(--foreground)]">$2.88M</strong> değerindeydi.
            </div>

            {/* 24 sa. Tasfiye Dağılımı Progress Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 font-bold text-[#00A86B] dark:text-[#00E699]">
                  <span className="h-2 w-2 rounded-full bg-[#00C087]" />
                  Uzun %{longRatio24h}
                </span>
                <span className="text-[11px] text-[var(--card-muted)]">24h Dağılım</span>
                <span className="flex items-center gap-1.5 font-bold text-[#FF3B56]">
                  Kısa %{shortRatio24h}
                  <span className="h-2 w-2 rounded-full bg-[#F6465D]" />
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                <div style={{ width: `${longRatio24h}%` }} className="bg-[#00C087] h-full" />
                <div style={{ width: `${shortRatio24h}%` }} className="bg-[#F6465D] h-full" />
              </div>
            </div>

            {/* En Büyük Borsa Payı */}
            <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 text-xs">
              <span className="text-[var(--card-muted)]">En büyük borsa payı</span>
              <div className="flex items-center gap-2 font-mono font-bold text-[var(--foreground)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F3BA2F]/20 text-[#F3BA2F] text-[10px]">
                  🟡
                </span>
                <span>Binance %43.2</span>
              </div>
            </div>

            {/* Gözlenen En Büyük Emir */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)]">Gözlenen en büyük emir - 24 sa.</span>
                <span className="text-sm font-black font-mono text-[var(--foreground)]">$2.88M</span>
              </div>
              <div className="text-[11px] font-mono text-[var(--card-muted)]">
                Binance · ETHUSDT - Uzun - $2,227.16
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SECONDARY: PRICE LEVEL DEPTH CLUSTERS LADDER VIEW */
        <div className="panel-card p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div>
              <h4 className="text-sm font-bold text-[var(--foreground)]">
                {coin.name} ({coin.symbol}) Fiyat Seviyesi Tasfiye Havuzları
              </h4>
              <p className="text-xs text-[var(--card-muted)] mt-0.5">
                Borsalardaki kaldıraçlı pozisyonların yoğunlaştığı kritik fiyat eşikleri
              </p>
            </div>
            <div className="font-mono text-xs text-[var(--foreground)] font-bold">
              Spot: ${coin.price.toLocaleString('tr-TR')}
            </div>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {coin.liquidationClusters.map((cluster, i) => {
              const isShort = cluster.side === 'SHORT';
              const diffPct = ((cluster.price - coin.price) / coin.price) * 100;

              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                        isShort ? 'bg-[#FF3B56]/15 text-[#FF3B56]' : 'bg-[#00E699]/15 text-[#00E699]'
                      }`}
                    >
                      {cluster.leverage} {cluster.side}
                    </span>
                    <span className="font-bold text-[var(--foreground)]">
                      ${cluster.price > 10 ? cluster.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : cluster.price.toFixed(4)}
                    </span>
                    <span className="text-[10px] text-[var(--card-muted)]">
                      ({diffPct >= 0 ? '+' : ''}{diffPct.toFixed(2)}%)
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-black text-[var(--foreground)]">
                      ${(cluster.volumeUsd / 1_000_000).toFixed(2)}M
                    </span>
                    <div className="h-2 w-20 rounded-full bg-[var(--border)] overflow-hidden hidden sm:block">
                      <div
                        style={{ width: `${cluster.intensity * 100}%` }}
                        className={`h-full ${isShort ? 'bg-[#FF3B56]' : 'bg-[#00E699]'}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
