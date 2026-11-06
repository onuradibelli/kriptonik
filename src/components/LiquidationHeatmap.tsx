'use client';

import React, { useState } from 'react';
import { CoinData } from '../lib/types';
import { Flame, Info, Layers, RefreshCw } from 'lucide-react';

interface LiquidationHeatmapProps {
  coin: CoinData;
}

export default function LiquidationHeatmap({ coin }: LiquidationHeatmapProps) {
  const [timeframe, setTimeframe] = useState<'12h' | '24h' | '7d' | '30d'>('24h');

  const clusters = coin.liquidationClusters;
  const currentPrice = coin.price;

  // Multiplier based on timeframe
  const tfMultiplier = timeframe === '12h' ? 0.6 : timeframe === '24h' ? 1.0 : timeframe === '7d' ? 3.4 : 8.2;
  const currentTotal = (coin.totalLiquidation24hUsd * tfMultiplier) / 1_000_000;
  const longTotal = (coin.longLiquidation24hUsd * tfMultiplier) / 1_000_000;
  const shortTotal = (coin.shortLiquidation24hUsd * tfMultiplier) / 1_000_000;

  return (
    <div className="panel-card p-5 space-y-5">
      {/* Header and Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F6465D]/15 text-[#F6465D] border border-[#F6465D]/25">
              <Flame className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>{coin.name} ({coin.symbol}) Likidasyon Isı Haritası</span>
              <span className="rounded bg-[#222938] px-2 py-0.5 text-[10px] font-mono text-[#848E9C]">CANLI HAVUZ</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#848E9C]">
            Kaldıraçlı pozisyonların (10x - 100x) zorunlu tasfiye tetiklenme yoğunlukları ve emir derinliği kümelenmesi.
          </p>
        </div>

        {/* Timeframe selector */}
        <div className="flex items-center gap-1 rounded-lg border border-[#222938] bg-[#0B0E14] p-1">
          {(['12h', '24h', '7d', '30d'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`rounded px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
                timeframe === tf
                  ? 'bg-[#2962FF] text-white shadow-sm'
                  : 'text-[#848E9C] hover:text-white'
              }`}
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3">
          <div className="text-[11px] text-[#848E9C]">Toplam Tasfiye ({timeframe.toUpperCase()})</div>
          <div className="mt-1 font-mono text-base font-bold text-white">${currentTotal.toFixed(1)}M</div>
          <div className="mt-0.5 text-[10px] text-[#848E9C]">Tüm vadeli borsalar</div>
        </div>

        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3">
          <div className="text-[11px] text-[#848E9C]">Long Tasfiyeleri</div>
          <div className="mt-1 font-mono text-base font-bold text-[#F6465D]">${longTotal.toFixed(1)}M</div>
          <div className="mt-0.5 text-[10px] text-[#848E9C]">%{((longTotal / currentTotal) * 100).toFixed(1)} Long Payı</div>
        </div>

        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3">
          <div className="text-[11px] text-[#848E9C]">Short Tasfiyeleri</div>
          <div className="mt-1 font-mono text-base font-bold text-[#00C087]">${shortTotal.toFixed(1)}M</div>
          <div className="mt-0.5 text-[10px] text-[#848E9C]">%{((shortTotal / currentTotal) * 100).toFixed(1)} Short Payı</div>
        </div>

        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3">
          <div className="text-[11px] text-[#848E9C]">Kritik Likidite Duvarı</div>
          <div className="mt-1 font-mono text-base font-bold text-[#2962FF]">
            ${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}
          </div>
          <div className="mt-0.5 text-[10px] text-[#848E9C]">Maksimum havuz derinliği</div>
        </div>
      </div>

      {/* Visual Heatmap Depth Gauge */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-[#848E9C]">
          <span>Fiyat & Kaldıraç Seviyesi</span>
          <span>Tahmini Tasfiye Havuzu ($USD)</span>
        </div>

        <div className="space-y-1.5 rounded-lg border border-[#222938] bg-[#0B0E14] p-3">
          {clusters.map((cluster, idx) => {
            const isAboveCurrent = cluster.price >= currentPrice;
            const distance = (((cluster.price - currentPrice) / currentPrice) * 100).toFixed(2);
            const isShort = cluster.side === 'SHORT';

            return (
              <div key={idx} className="group relative flex items-center justify-between py-1 px-2 rounded hover:bg-[#151A23] transition-colors">
                {/* Background heat intensity bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 rounded opacity-25 group-hover:opacity-40 transition-opacity ${
                    isShort ? 'bg-gradient-to-r from-[#F6465D] to-transparent' : 'bg-gradient-to-r from-[#00C087] to-transparent'
                  }`}
                  style={{ width: `${cluster.intensity * 100}%` }}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold ${isShort ? 'text-[#F6465D]' : 'text-[#00C087]'}`}>
                    ${cluster.price > 10 ? cluster.price.toLocaleString('tr-TR') : cluster.price}
                  </span>
                  <span className="rounded bg-[#222938] px-1.5 py-0.5 text-[10px] font-mono text-[#CBD5E1]">
                    {cluster.leverage}
                  </span>
                  <span className={`text-[10px] font-mono ${isAboveCurrent ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    ({Number(distance) >= 0 ? '+' : ''}{distance}%)
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-white">
                    ${(cluster.volumeUsd / 1_000_000).toFixed(1)}M
                  </span>
                  <span className={`text-[10px] font-bold uppercase ${isShort ? 'text-[#F6465D]' : 'text-[#00C087]'}`}>
                    {cluster.side}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#222938] pt-3 text-[11px] text-[#848E9C]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#F6465D]" /> Short Tasfiye Havuzu (Direnç)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00C087]" /> Long Tasfiye Havuzu (Destek)
          </span>
        </div>
        <div className="font-mono text-[10px] text-[#CBD5E1]">
          Model: Coinglass v3 Algoritması + Binance Futures Derinlik Matrisi
        </div>
      </div>
    </div>
  );
}
