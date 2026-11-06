'use client';

import React, { useState } from 'react';
import { CoinData } from '../lib/types';
import { Flame, Info, Layers, BarChart2, ShieldAlert, ArrowUpRight, ArrowDownRight, Crosshair } from 'lucide-react';

interface LiquidationHeatmapProps {
  coin: CoinData;
}

export default function LiquidationHeatmap({ coin }: LiquidationHeatmapProps) {
  const [timeframe, setTimeframe] = useState<'12h' | '24h' | '7d' | '30d'>('24h');
  const [hoveredCluster, setHoveredCluster] = useState<number | null>(null);

  const currentPrice = coin.price;
  const tfMultiplier = timeframe === '12h' ? 0.6 : timeframe === '24h' ? 1.0 : timeframe === '7d' ? 3.4 : 8.2;
  const currentTotal = (coin.totalLiquidation24hUsd * tfMultiplier) / 1_000_000;
  const longTotal = (coin.longLiquidation24hUsd * tfMultiplier) / 1_000_000;
  const shortTotal = (coin.shortLiquidation24hUsd * tfMultiplier) / 1_000_000;

  // Generate extended realistic liquidation distribution bands around current price
  const clusters = [
    { price: currentPrice * 1.055, leverage: '100x', volumeUsd: shortTotal * 0.28 * 1_000_000, side: 'SHORT' as const, intensity: 0.95 },
    { price: currentPrice * 1.038, leverage: '50x', volumeUsd: shortTotal * 0.24 * 1_000_000, side: 'SHORT' as const, intensity: 0.85 },
    { price: currentPrice * 1.022, leverage: '25x', volumeUsd: shortTotal * 0.20 * 1_000_000, side: 'SHORT' as const, intensity: 0.70 },
    { price: currentPrice * 1.011, leverage: '10x', volumeUsd: shortTotal * 0.15 * 1_000_000, side: 'SHORT' as const, intensity: 0.55 },
    { price: currentPrice * 1.004, leverage: '5x', volumeUsd: shortTotal * 0.13 * 1_000_000, side: 'SHORT' as const, intensity: 0.40 },
    // Current price pivot
    { price: currentPrice * 0.995, leverage: '5x', volumeUsd: longTotal * 0.14 * 1_000_000, side: 'LONG' as const, intensity: 0.42 },
    { price: currentPrice * 0.988, leverage: '10x', volumeUsd: longTotal * 0.18 * 1_000_000, side: 'LONG' as const, intensity: 0.60 },
    { price: currentPrice * 0.976, leverage: '25x', volumeUsd: longTotal * 0.22 * 1_000_000, side: 'LONG' as const, intensity: 0.75 },
    { price: currentPrice * 0.962, leverage: '50x', volumeUsd: longTotal * 0.26 * 1_000_000, side: 'LONG' as const, intensity: 0.88 },
    { price: currentPrice * 0.945, leverage: '100x', volumeUsd: longTotal * 0.32 * 1_000_000, side: 'LONG' as const, intensity: 0.98 },
  ];

  const maxVolume = Math.max(...clusters.map((c) => c.volumeUsd));

  return (
    <div className="panel-card p-5 space-y-5">
      {/* 1. Header & Timeframe Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6465D]/15 text-[#F6465D] border border-[#F6465D]/25">
              <Flame className="h-4.5 w-4.5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
                <span>{coin.name} ({coin.symbol}) Canlı Likidasyon Isı Haritası</span>
                <span className="rounded bg-[#2962FF]/15 text-[#2962FF] px-2 py-0.5 text-[10px] font-mono font-bold border border-[#2962FF]/20">
                  DERİNLİK GRAFİĞİ
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Tüm büyük türev borsalarındaki 10x - 100x kaldıraçlı zorunlu tasfiye havuzları ve emir tahtası süpürme noktaları.
          </p>
        </div>

        {/* Timeframe Selector Tabs */}
        <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
          {(['12h', '24h', '7d', '30d'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`rounded px-3 py-1 font-bold transition-all ${
                timeframe === tf
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Visual KPI Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 transition-colors">
          <div className="text-[11px] font-medium text-[var(--card-muted)]">Toplam Tasfiye ({timeframe.toUpperCase()})</div>
          <div className="mt-1 font-mono text-lg font-black text-[var(--foreground)]">${currentTotal.toFixed(1)}M</div>
          <div className="mt-1 text-[10px] text-[var(--card-muted)]">Borsalar konsolide</div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 transition-colors">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#00C087]" />
            <span>Long Tasfiyeleri</span>
          </div>
          <div className="mt-1 font-mono text-lg font-black text-[#00C087]">${longTotal.toFixed(1)}M</div>
          <div className="mt-1 text-[10px] text-[var(--card-muted)]">%{((longTotal / currentTotal) * 100).toFixed(1)} Pay</div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 transition-colors">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#F6465D]" />
            <span>Short Tasfiyeleri</span>
          </div>
          <div className="mt-1 font-mono text-lg font-black text-[#F6465D]">${shortTotal.toFixed(1)}M</div>
          <div className="mt-1 text-[10px] text-[var(--card-muted)]">%{((shortTotal / currentTotal) * 100).toFixed(1)} Pay</div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 transition-colors">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <Crosshair className="h-3 w-3 text-[#2962FF]" />
            <span>Maksimum Tasfiye Duvarı</span>
          </div>
          <div className="mt-1 font-mono text-lg font-black text-[#2962FF]">
            ${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}
          </div>
          <div className="mt-1 text-[10px] text-[var(--card-muted)]">Hedef Likidite Havuzu</div>
        </div>
      </div>

      {/* 3. Real Interactive Liquidation Depth Chart (Visual Bars & Pools) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-[var(--card-muted)]">
          <span className="flex items-center gap-1.5">
            <BarChart2 className="h-4 w-4 text-[#2962FF]" />
            <span>Kaldıraç & Fiyat Tasfiye Yoğunluk Dağılımı</span>
          </span>
          <span className="font-mono text-[11px]">
            Spot Fiyat: <strong className="text-[var(--foreground)]">${currentPrice.toLocaleString('tr-TR')}</strong>
          </span>
        </div>

        {/* The Graphic Canvas / SVG Depth Display */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
          {clusters.map((cluster, idx) => {
            const isShort = cluster.side === 'SHORT';
            const distance = (((cluster.price - currentPrice) / currentPrice) * 100).toFixed(2);
            const isHovered = hoveredCluster === idx;
            const barWidthPercent = Math.max(12, Math.round((cluster.volumeUsd / maxVolume) * 100));

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCluster(idx)}
                onMouseLeave={() => setHoveredCluster(null)}
                className={`group relative flex items-center justify-between py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  isHovered ? 'bg-[var(--card)] shadow-xs scale-[1.01]' : 'hover:bg-[var(--card)]/60'
                }`}
              >
                {/* Visual Depth Bar Fill */}
                <div
                  className={`absolute left-0 top-0 bottom-0 rounded-lg transition-all ${
                    isShort
                      ? 'bg-gradient-to-r from-[#F6465D]/25 via-[#F6465D]/15 to-transparent border-l-2 border-[#F6465D]'
                      : 'bg-gradient-to-r from-[#00C087]/25 via-[#00C087]/15 to-transparent border-l-2 border-[#00C087]'
                  }`}
                  style={{ width: `${barWidthPercent}%` }}
                />

                {/* Left Side: Price, Leverage, Distance */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold ${isShort ? 'text-[#F6465D]' : 'text-[#00C087]'}`}>
                    ${cluster.price > 10 ? cluster.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : cluster.price.toFixed(4)}
                  </span>

                  <span className="rounded bg-[var(--border)] px-1.5 py-0.5 text-[10px] font-mono font-bold text-[var(--foreground)]">
                    {cluster.leverage}
                  </span>

                  <span className={`text-[11px] font-mono font-semibold flex items-center ${Number(distance) >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    {Number(distance) >= 0 ? '+' : ''}{distance}%
                  </span>
                </div>

                {/* Right Side: Estimated Liquidation Pool Volume */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-mono text-xs font-black text-[var(--foreground)]">
                      ${(cluster.volumeUsd / 1_000_000).toFixed(2)}M
                    </span>
                    <span className="hidden sm:inline text-[10px] text-[var(--card-muted)] ml-1 font-mono">
                      (Havuz)
                    </span>
                  </div>

                  <span className={`rounded px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase ${
                    isShort ? 'bg-[#F6465D]/15 text-[#F6465D]' : 'bg-[#00C087]/15 text-[#00C087]'
                  }`}>
                    {isShort ? 'SHORT BASKISI' : 'LONG DESTEĞİ'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Price Pivot Line Alert */}
        <div className="flex items-center justify-between rounded-lg border border-[#2962FF]/30 bg-[#2962FF]/10 px-3 py-2 text-xs font-medium text-[var(--foreground)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2962FF] pulse-bull" />
            <span>Aktif Spot Fiyat Dengesi:</span>
            <strong className="font-mono font-bold text-[#2962FF]">${currentPrice.toLocaleString('tr-TR')}</strong>
          </div>
          <span className="text-[11px] text-[var(--card-muted)] hidden sm:inline">
            Üst bantlar Short Tasfiye Bariyeri, alt bantlar Long Tasfiye Desteğidir.
          </span>
        </div>
      </div>

      {/* 4. Chart Legend & Interpretation Guide */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-3 text-[11px] text-[var(--card-muted)]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F6465D]" />
            <strong className="text-[var(--foreground)]">Short Likidasyon (Direnç):</strong> Fiyat yukarı fırlarsa zorunlu alım tetiklenir (Squeeze).
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00C087]" />
            <strong className="text-[var(--foreground)]">Long Likidasyon (Destek):</strong> Fiyat düşerse zorunlu satış cascade'i oluşur.
          </span>
        </div>
      </div>
    </div>
  );
}
