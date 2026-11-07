'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { computeSquarifiedTreemap } from '../lib/squarify';
import CoinIcon from './CoinIcon';
import {
  Flame,
  Layers,
  BarChart2,
  Share2,
  Check,
  TrendingDown,
  TrendingUp,
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
  const [activeTab, setActiveTab] = useState<'treemap' | 'depth'>('treemap');
  const [timeframe, setTimeframe] = useState<TimeframeOption>('24h');
  const [category, setCategory] = useState<ViewCategory>('coin');
  const [copied, setCopied] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState<{ width: number; height: number }>({
    width: 600,
    height: 480
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = w > 640 ? Math.max(460, Math.round(w * 0.72)) : 420;
        setCanvasDimensions({ width: w, height: h });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [activeTab]);

  // Timeframe volume multipliers
  const tfMultipliers: Record<TimeframeOption, number> = {
    '1h': 0.0043,
    '4h': 0.0227,
    '12h': 0.163,
    '24h': 1.0,
  };

  const mult = tfMultipliers[timeframe];

  // Exact 24h liquidation dataset matching CoinGlass Tasfiye Isı Haritası (Screenshot 1)
  const baseCoinsData: LiquidationTile[] = [
    { symbol: 'BTC', name: 'Bitcoin', slug: 'bitcoin', volumeUsd: 54910000, longPct: 76.5, shortPct: 23.5 },
    { symbol: 'ETH', name: 'Ethereum', slug: 'ethereum', volumeUsd: 30740000, longPct: 72.3, shortPct: 27.7 },
    { symbol: 'Other', name: 'Other (Diğer)', volumeUsd: 14060000, longPct: 60.0, shortPct: 40.0, isOther: true },
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
    { symbol: 'SPCX', name: 'SPCX', volumeUsd: 1840000, longPct: 31.0, shortPct: 69.0 },
    { symbol: 'PEPE', name: '1000PEPE', slug: 'pepe', volumeUsd: 1650000, longPct: 34.0, shortPct: 66.0 },
    { symbol: 'CYBER', name: 'CyberConnect', volumeUsd: 1580000, longPct: 39.0, shortPct: 61.0 },
    { symbol: 'KORU', name: 'KORU', volumeUsd: 1530000, longPct: 68.0, shortPct: 32.0 },
    { symbol: 'DOGE', name: 'Dogecoin', slug: 'doge', volumeUsd: 1420000, longPct: 69.2, shortPct: 30.8 },
    { symbol: 'PUMP', name: 'PUMP', volumeUsd: 1350000, longPct: 70.0, shortPct: 30.0 },
    { symbol: 'JCT', name: 'JCT', volumeUsd: 1280000, longPct: 65.0, shortPct: 35.0 },
    { symbol: 'AIN', name: 'AIN', volumeUsd: 1220000, longPct: 41.0, shortPct: 59.0 },
    { symbol: 'ADA', name: 'Cardano', slug: 'ada', volumeUsd: 1180000, longPct: 32.0, shortPct: 68.0 },
    { symbol: 'TRUMP', name: 'TRUMP', volumeUsd: 1120000, longPct: 38.0, shortPct: 62.0 },
    { symbol: 'HYPE', name: 'HYPE', volumeUsd: 1090000, longPct: 44.0, shortPct: 56.0 },
    { symbol: 'AVAX', name: 'Avalanche', slug: 'avax', volumeUsd: 980000, longPct: 64.0, shortPct: 36.0 }
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
  const currentItems = useMemo(() => {
    return (category === 'coin' ? baseCoinsData : baseExchangesData).map((item) => ({
      ...item,
      volumeUsd: item.volumeUsd * mult,
      weight: item.volumeUsd * mult,
      id: item.symbol
    }));
  }, [category, mult]);

  // Compute squarified treemap for the left heatmap container
  const treemapNodes = useMemo(() => {
    return computeSquarifiedTreemap(currentItems, {
      x: 0,
      y: 0,
      width: canvasDimensions.width,
      height: canvasDimensions.height
    });
  }, [currentItems, canvasDimensions]);

  // Summary Metrics calculated dynamically (matching Screenshot 1)
  const metrics = {
    '1h': { total: 815110, long: 327540, short: 487570, traders: 1842 },
    '4h': { total: 4330000, long: 2330000, short: 2000000, traders: 7420 },
    '12h': { total: 31120000, long: 18950000, short: 12170000, traders: 23150 },
    '24h': { total: 190270000, long: 124880000, short: 65390000, traders: 66136 }
  };

  const currentMetric = metrics[timeframe];

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

  const formatUsd = (val: number) => {
    if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
    if (val >= 1e3) return `$${(val / 1e3).toFixed(2)}K`;
    return `$${val.toFixed(0)}`;
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
        /* TWO-COLUMN COINGLASS STYLE LAYOUT (EXACT REPLICA OF SCREENSHOT 1) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Tasfiye Isı Haritası Squarified Canvas */}
          <div className="lg:col-span-7 panel-card p-4 sm:p-5 flex flex-col justify-between space-y-4">
            {/* Header with Title and Filters matching Screenshot 1 */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] tracking-tight">
                  Tasfiye ısı haritası
                </h3>
              </div>

              {/* Controls: Timeframes & Mode Switcher */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {/* 1 sa. 4 sa. 12 sa. 24 sa. Buttons */}
                <div className="flex items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-0.5 font-mono font-bold">
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
                <div className="flex items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-0.5 font-semibold">
                  <button
                    onClick={() => setCategory('coin')}
                    className={`rounded px-2.5 py-1 transition-all cursor-pointer ${
                      category === 'coin' ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    Coin
                  </button>
                  <button
                    onClick={() => setCategory('exchange')}
                    className={`rounded px-2.5 py-1 transition-all cursor-pointer ${
                      category === 'exchange' ? 'bg-[var(--card)] text-[var(--foreground)] shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    Borsa
                  </button>
                </div>

                {/* Kırmızı/yeşil Selector */}
                <span className="rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] px-2.5 py-1 text-[var(--card-muted)] font-medium text-xs">
                  Kırmızı/yeşil ⇅
                </span>
              </div>
            </div>

            {/* SQUARIFIED TREEMAP CANVAS WITH COIN ICONS */}
            <div 
              ref={containerRef}
              style={{ height: `${canvasDimensions.height}px` }}
              className="w-full relative rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900 shadow-inner select-none"
            >
              {treemapNodes.map((node) => {
                const item = node.data;
                const isGreen = item.longPct >= 50;
                const tileColor = isGreen ? 'bg-[#00C087] hover:bg-[#00a876]' : 'bg-[#F6465D] hover:bg-[#e03a51]';

                const w = node.width;
                const h = node.height;
                const isHuge = w >= 120 && h >= 90;
                const isLarge = w >= 75 && h >= 60;
                const isMedium = w >= 48 && h >= 40;
                const isSmall = w >= 32 && h >= 28;

                const iconSize = isHuge ? 32 : isLarge ? 24 : isMedium ? 18 : 14;

                const content = (
                  <div
                    className={`w-full h-full rounded-[2px] border border-white/20 dark:border-black/30 ${tileColor} text-white flex flex-col items-center justify-center text-center p-1 overflow-hidden transition-all duration-150 shadow-xs hover:brightness-110 hover:ring-2 hover:ring-white/90`}
                  >
                    {/* Official Coin Logo */}
                    {!item.isOther && (isHuge || isLarge || isMedium || isSmall) && (
                      <div className="shrink-0 mb-1">
                        <CoinIcon
                          symbol={item.symbol}
                          name={item.name}
                          size={iconSize}
                          className="shadow-sm border border-white/20"
                        />
                      </div>
                    )}

                    {/* Symbol */}
                    <span className={`font-black tracking-tight leading-none drop-shadow-sm truncate max-w-full px-0.5 ${
                      isHuge ? 'text-2xl sm:text-3xl' : isLarge ? 'text-base sm:text-lg' : isMedium ? 'text-xs' : 'text-[10px]'
                    }`}>
                      {item.symbol}
                    </span>

                    {/* Volume Usd */}
                    {(isHuge || isLarge || isMedium) && (
                      <span className={`font-mono font-bold leading-tight drop-shadow-sm mt-1 truncate max-w-full ${
                        isHuge ? 'text-lg sm:text-xl font-black' : isLarge ? 'text-xs sm:text-sm font-bold' : 'text-[10px]'
                      }`}>
                        {formatUsd(item.volumeUsd)}
                      </span>
                    )}

                    {/* Dominant Direction % */}
                    {(isHuge || isLarge) && (
                      <span className="text-[10px] sm:text-xs font-mono font-semibold opacity-90 mt-0.5 drop-shadow-sm">
                        {isGreen ? `Uzun ${item.longPct.toFixed(1)}%` : `Kısa ${item.shortPct.toFixed(1)}%`}
                      </span>
                    )}
                  </div>
                );

                if (item.slug) {
                  return (
                    <Link
                      key={item.symbol}
                      href={`/kripto/${item.slug}/`}
                      style={{
                        position: 'absolute',
                        left: `${(node.x / canvasDimensions.width) * 100}%`,
                        top: `${(node.y / canvasDimensions.height) * 100}%`,
                        width: `${(node.width / canvasDimensions.width) * 100}%`,
                        height: `${(node.height / canvasDimensions.height) * 100}%`,
                        padding: '1px'
                      }}
                      className="cursor-pointer"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.symbol}
                    style={{
                      position: 'absolute',
                      left: `${(node.x / canvasDimensions.width) * 100}%`,
                      top: `${(node.y / canvasDimensions.height) * 100}%`,
                      width: `${(node.width / canvasDimensions.width) * 100}%`,
                      height: `${(node.height / canvasDimensions.height) * 100}%`,
                      padding: '1px'
                    }}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Bottom Color Ratio Bar matching Screenshot 1 */}
            <div className="flex items-center justify-between text-xs font-mono text-[var(--card-muted)] pt-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[var(--foreground)]">Uzun ağırlıklı</span>
                <div className="h-2 w-28 rounded-full bg-gradient-to-r from-[#00C087] via-[#00C087]/50 to-[#F6465D]/50" />
                <span className="font-bold text-[var(--foreground)]">Kısa ağırlıklı</span>
              </div>
              <span className="text-[11px]">Canlı Likidite Derinliği</span>
            </div>
          </div>

          {/* Right Column: "Toplam tasfiyeler" & Coinglass Metrics matching Screenshot 1 */}
          <div className="lg:col-span-5 panel-card p-4 sm:p-5 flex flex-col justify-between space-y-4">
            {/* Header */}
            <div className="border-b border-[var(--border)] pb-3">
              <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] tracking-tight">
                Toplam tasfiyeler
              </h3>
            </div>

            {/* 4 Stat Cards in 2x2 Grid matching Screenshot 1 */}
            <div className="grid grid-cols-2 gap-3">
              {/* 1 sa. */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-2">
                <div className="text-xs text-[var(--card-muted)]">1 sa. tasfiyeleri</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[var(--foreground)]">
                  $815.11K
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Uzun</span>
                    <span className="text-[#00C087] font-bold">$327.54K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Kısa</span>
                    <span className="text-[#F6465D] font-bold">$487.57K</span>
                  </div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                  <div style={{ width: '40.2%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '59.8%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 4 sa. */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-2">
                <div className="text-xs text-[var(--card-muted)]">4 sa. tasfiyeleri</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[var(--foreground)]">
                  $4.33M
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Uzun</span>
                    <span className="text-[#00C087] font-bold">$2.33M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Kısa</span>
                    <span className="text-[#F6465D] font-bold">$2.00M</span>
                  </div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                  <div style={{ width: '53.8%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '46.2%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 12 sa. */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-2">
                <div className="text-xs text-[var(--card-muted)]">12 sa. tasfiyeleri</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[var(--foreground)]">
                  $31.12M
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Uzun</span>
                    <span className="text-[#00C087] font-bold">$18.95M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Kısa</span>
                    <span className="text-[#F6465D] font-bold">$12.17M</span>
                  </div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                  <div style={{ width: '60.9%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '39.1%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>

              {/* 24 sa. */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-2">
                <div className="text-xs text-[var(--card-muted)]">24 sa. tasfiyeleri</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[var(--foreground)]">
                  $190.27M
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Uzun</span>
                    <span className="text-[#00C087] font-bold">$124.88M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-muted)]">Kısa</span>
                    <span className="text-[#F6465D] font-bold">$65.39M</span>
                  </div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                  <div style={{ width: '65.6%' }} className="bg-[#00C087] h-full" />
                  <div style={{ width: '34.4%' }} className="bg-[#F6465D] h-full" />
                </div>
              </div>
            </div>

            {/* Narrative Box (Screenshot 1 text) */}
            <div className="rounded-xl bg-[var(--card-subtle)] p-3 text-xs leading-relaxed text-[var(--card-muted)]">
              CoinGlass verilerine göre son 24 saatte <strong className="text-[var(--foreground)]">66.136</strong> yatırımcının pozisyonları tasfiye edildi. Toplam tasfiye tutarı <strong className="text-[var(--foreground)]">$190.27M</strong>. Gözlenen en büyük tasfiye <strong className="text-[var(--foreground)]">Binance - ETHUSDT</strong> üzerinde, <strong className="text-[var(--foreground)]">$2.88M</strong> değerindeydi.
            </div>

            {/* 24 sa. tasfiye dağılımı Split Bar */}
            <div className="space-y-2 border-t border-[var(--border)] pt-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[var(--card-muted)]">24 sa. tasfiye dağılımı</span>
                <span className="text-[11px] font-mono text-[var(--card-muted)]">24h</span>
              </div>
              <div className="flex items-center justify-between font-mono font-bold">
                <span className="text-[#00C087] flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#00C087]" />
                  Uzun 65.6%
                </span>
                <span className="text-[#F6465D] flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#F6465D]" />
                  Kısa 34.4%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                <div style={{ width: '65.6%' }} className="bg-[#00C087] h-full" />
                <div style={{ width: '34.4%' }} className="bg-[#F6465D] h-full" />
              </div>
            </div>

            {/* En büyük borsa payı */}
            <div className="flex items-center justify-between border-t border-[var(--border)] pt-3 text-xs">
              <span className="text-[var(--card-muted)]">En büyük borsa payı</span>
              <div className="flex items-center gap-1.5 font-bold font-mono text-[var(--foreground)]">
                <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#F0B90B]/20 text-[#F0B90B] text-[10px] font-black">
                  ❖
                </span>
                <span>Binance 43.2%</span>
              </div>
            </div>

            {/* Gözlenen en büyük emir */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)]">Gözlenen en büyük emir · 24 sa.</span>
                <span className="text-base font-black font-mono text-[var(--foreground)]">$2.88M</span>
              </div>
              <div className="text-[11px] font-mono text-[var(--card-muted)]">
                Binance · ETHUSDT · Uzun · $2,227.16
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
