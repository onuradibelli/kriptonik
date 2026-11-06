'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import LiquidationHeatmap from './LiquidationHeatmap';
import { Flame, ArrowRight, Layers, HelpCircle, ArrowUpRight } from 'lucide-react';

interface LiquidationHubClientProps {
  coins: CoinData[];
}

export default function LiquidationHubClient({ coins }: LiquidationHubClientProps) {
  const [selectedSlug, setSelectedSlug] = useState('bitcoin');
  const selectedCoin = coins.find((c) => c.slug === selectedSlug) || coins[0];

  return (
    <div className="space-y-8">
      {/* Coin Selector Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {coins.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedSlug(c.slug)}
            className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              selectedSlug === c.slug
                ? 'bg-[#FF3B56] text-white shadow-md shadow-[#FF3B56]/20'
                : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
            }`}
          >
            <span>{c.name} ({c.symbol})</span>
            <span className="text-[10px] opacity-80">${(c.totalLiquidation24hUsd / 1_000_000).toFixed(0)}M</span>
          </button>
        ))}
      </div>

      {/* Featured Heatmap */}
      <LiquidationHeatmap coin={selectedCoin} />

      {/* Grid of All Coins for Direct Navigation */}
      <div className="panel-card p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
          <div>
            <h2 className="text-base font-bold text-[var(--foreground)]">
              Tüm Kripto Varlıklar İçin Tasfiye Kümeleri
            </h2>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              Her coin için Coinglass modelinde hesaplanan 10x - 100x kaldıraç likidasyon duvarları ve açık pozisyon tasfiye haritaları.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coins.map((coin) => (
            <Link
              key={coin.id}
              href={`/likidasyon/${coin.slug}/`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#FF3B56] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--foreground)]">
                      {coin.symbol}
                    </span>
                    <span className="font-bold text-[var(--foreground)] group-hover:text-[#FF3B56] transition-colors">
                      {coin.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--foreground)]">
                    ${coin.price > 10 ? coin.price.toLocaleString('tr-TR') : coin.price.toFixed(4)}
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>24s Toplam Tasfiye:</span>
                    <strong className="text-[var(--foreground)]">${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M</strong>
                  </div>
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>Dominant Seviye:</span>
                    <strong className="text-[#2962FF]">${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}</strong>
                  </div>
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>Tasfiye Yönü:</span>
                    <strong className={coin.dominantSide === 'SHORT' ? 'text-[#FF3B56]' : 'text-[#00E699]'}>
                      %{coin.shortPercentage} Short
                    </strong>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs font-semibold text-[#FF3B56] flex items-center justify-between">
                <span>Derinlik Haritasını Aç</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO FAQ Section for Rich Snippets */}
      <div className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-[#2962FF]" />
          <span>Likidasyon Isı Haritası Hakkında Sıkça Sorulan Sorular (SSS)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Likidasyon Isı Haritası (Liquidation Heatmap) Nedir?</h4>
            <p className="text-[var(--card-muted)]">
              Vadeli kripto para borsalarında (Binance, Bybit, OKX vb.) açılan yüksek kaldıraçlı (10x, 25x, 50x, 100x) pozisyonların zorunlu tasfiye edileceği kritik fiyat bölgelerini görselleştiren derinlik analiz aracıdır.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Short Squeeze ve Long Cascade Nasıl Gerçekleşir?</h4>
            <p className="text-[var(--card-muted)]">
              Fiyat yoğun short tasfiye kümelerinin bulunduğu seviyeye ulaştığında, borsalar otomatik piyasa alım emirleri gönderir. Bu zincirleme alımlar fiyatı aniden yukarı fırlatarak Short Squeeze yaratır. Ters yönde ise Long Cascade (şelale düşüşü) oluşur.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Coinglass ile Kriptonik Arasındaki Fark Nedir?</h4>
            <p className="text-[var(--card-muted)]">
              Kriptonik, Coinglass ve CryptoQuant verilerini karmaşıklaştırmadan, Türkçe finansal terminolojiye uygun, anlık WebSocket senkronizasyonu ve Türk Lirası entegrasyonuyla sunar.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Dominant Tasfiye Seviyesi Nasıl Kullanılır?</h4>
            <p className="text-[var(--card-muted)]">
              Dominant seviye, piyasa yapıcıların ve balinaların likidite avlamak için fiyatı çekmek isteyebileceği en yüksek hacimli tasfiye duvarıdır. Destek ve direnç tespitinde kullanılır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
