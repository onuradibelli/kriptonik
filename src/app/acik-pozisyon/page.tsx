import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import OpenInterestRadar from '../../components/OpenInterestRadar';
import { Compass, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Açık Pozisyon (Open Interest - OI) ve Trend Gücü Radarı | Kriptonik',
  description: 'Vadeli piyasalardaki açık kontrat büyüklüğü, 24 saatlik para giriş/çıkışları, long/short rasyoları ve trend kırılım anormallik analizi.'
};

export default function OpenInterestHubPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Açık Pozisyon (OI)</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <Compass className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Açık Pozisyon (Open Interest - OI) & Trend Gücü Radarı
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Vadeli işlem borsalarında henüz kapatılmamış veya likide olmamış toplam türev kontratlarının parasal büyüklüğü. Fiyat hareketleri ile Open Interest arasındaki pozitif/negatif sapmaları anlık olarak inceleyin.
        </p>
      </div>

      <OpenInterestRadar coins={COINS_DATA} />

      {/* Directory Cards */}
      <div className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)]">Varlık Bazlı Açık Pozisyon Sayfaları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COINS_DATA.map((coin) => (
            <Link
              key={coin.id}
              href={`/acik-pozisyon/${coin.slug}/`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#2962FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                    {coin.name} ({coin.symbol})
                  </span>
                  <span className="font-mono text-xs text-[var(--card-muted)]">
                    ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B OI
                  </span>
                </div>
                <div className="mt-2 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>24s Değişim:</span>
                  <strong className={coin.openInterestChange24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}>
                    {coin.openInterestChange24h >= 0 ? '+' : ''}{coin.openInterestChange24h.toFixed(2)}%
                  </strong>
                </div>
                <div className="mt-1 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>Long / Short:</span>
                  <strong className="text-[var(--foreground)]">{coin.longShortRatio.toFixed(2)}</strong>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[var(--border)] text-[11px] font-semibold text-[#2962FF] flex items-center justify-between">
                <span>OI Raporunu Aç</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
