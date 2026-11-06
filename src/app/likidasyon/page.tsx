import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import LiquidationHeatmap from '../../components/LiquidationHeatmap';
import { Flame, ArrowRight, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Likidasyon Isı Haritası ve Kripto Tasfiye Seviyeleri | Kriptonik',
  description: 'Tüm majör kripto paralar için son 24 saatlik anlık tasfiyeler, 10x-100x kaldıraç likidasyon duvarları ve açık pozisyon ısı haritası verileri.'
};

export default function LiquidationHubPage() {
  const topCoin = COINS_DATA[0];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Likidasyon Isı Haritası</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6465D]/15 text-[#F6465D]">
            <Flame className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Canlı Likidasyon Isı Haritası & Tasfiye Havuzları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Kaldıraçlı vadeli işlem piyasalarında yüksek yoğunluklu tasfiye seviyeleri (10x, 25x, 50x, 100x kaldıraç duvarları), emir defteri derinliği ve zincirleme tasfiye tetiklenme noktaları.
        </p>
      </div>

      {/* Featured Bitcoin Heatmap */}
      <LiquidationHeatmap coin={topCoin} />

      {/* Coin Directory for Liquidations (pSEO Links) */}
      <div className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)]">Tüm Varlıklar İçin Likidasyon Haritaları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COINS_DATA.map((coin) => (
            <Link
              key={coin.id}
              href={`/likidasyon/${coin.slug}/`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#F6465D] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--foreground)] group-hover:text-[#F6465D] transition-colors">
                    {coin.name} ({coin.symbol})
                  </span>
                  <span className="font-mono text-xs text-[var(--foreground)]">
                    ${coin.price > 10 ? coin.price.toLocaleString('tr-TR') : coin.price.toFixed(4)}
                  </span>
                </div>
                <div className="mt-2 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>24s Tasfiye:</span>
                  <strong className="text-[var(--foreground)]">${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M</strong>
                </div>
                <div className="mt-1 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>Kritik Seviye:</span>
                  <strong className="text-[#2962FF]">${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}</strong>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[var(--border)] text-[11px] font-semibold text-[#F6465D] flex items-center justify-between">
                <span>Isı Haritasını Aç</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
