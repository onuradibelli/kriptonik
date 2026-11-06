'use client';

import React from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { Compass, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface OpenInterestRadarProps {
  coins: CoinData[];
}

export default function OpenInterestRadar({ coins }: OpenInterestRadarProps) {
  const [signalFilter, setSignalFilter] = React.useState<'ALL' | 'BULL' | 'BEAR' | 'SQUEEZE'>('ALL');
  const [showAll, setShowAll] = React.useState(false);

  const getSignalData = (coin: CoinData) => {
    const isOiUp = coin.openInterestChange24h >= 0;
    const isPriceUp = coin.change24h >= 0;

    if (isOiUp && isPriceUp) {
      return {
        type: 'BULL',
        label: 'Güçlü Yükseliş Trendi (Taze Sermaye)',
        color: 'text-[#00C087]',
        badge: 'bg-[#00C087]/15 text-[#00C087] border-[#00C087]/30'
      };
    } else if (isOiUp && !isPriceUp) {
      return {
        type: 'BEAR',
        label: 'Agresif Short Baskısı (Kırılım Riski)',
        color: 'text-[#F6465D]',
        badge: 'bg-[#F6465D]/15 text-[#F6465D] border-[#F6465D]/30'
      };
    } else if (!isOiUp && isPriceUp) {
      return {
        type: 'SQUEEZE',
        label: 'Short Squeeze / Zayıflayan Trend',
        color: 'text-[#D97706] dark:text-[#F2C14E]',
        badge: 'bg-[#F2C14E]/15 text-[#D97706] dark:text-[#F2C14E] border-[#F2C14E]/30'
      };
    } else {
      return {
        type: 'BEAR',
        label: 'Long Tasfiyesi / Pozisyon Boşaltma',
        color: 'text-[#F6465D]',
        badge: 'bg-[#F6465D]/15 text-[#F6465D] border-[#F6465D]/30'
      };
    }
  };

  const filteredCoins = coins.filter((coin) => {
    if (signalFilter === 'ALL') return true;
    const sig = getSignalData(coin);
    return sig.type === signalFilter;
  });

  const displayedCoins = showAll ? filteredCoins : filteredCoins.slice(0, 6);
  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <Compass className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>Açık Pozisyon (Open Interest - OI) & Trend Gücü Radarı</span>
              <span className="rounded bg-[#2962FF]/15 text-[#2962FF] px-2 py-0.5 text-[10px] font-mono font-bold">
                ANOMALİ TESPİTİ
              </span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Vadeli piyasalardaki açık kontrat büyüklüğü, 24 saatlik sermaye giriş/çıkışları ve trend kırılım sinyalleri.
          </p>
        </div>

        {/* Signal Filters & Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
            {[
              { id: 'ALL', label: 'TÜMÜ' },
              { id: 'BULL', label: '🟢 BOĞA GİRİŞİ' },
              { id: 'BEAR', label: '🔴 SHORT BASKISI' },
              { id: 'SQUEEZE', label: '⚡ SQUEEZE' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSignalFilter(tab.id as any)}
                className={`rounded px-2.5 py-1 font-bold transition-all ${
                  signalFilter === tab.id
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] px-2.5 py-1 font-mono text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-colors"
          >
            {showAll ? 'İlk 6 Göster' : `Tümünü Göster (${coins.length})`}
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
        {displayedCoins.map((coin) => {
          const isOiUp = coin.openInterestChange24h >= 0;
          const isPriceUp = coin.change24h >= 0;
          const sig = getSignalData(coin);

          return (
            <div
              key={coin.id}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 flex flex-col justify-between hover:border-[#2962FF] transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
                  <Link href={`/acik-pozisyon/${coin.slug}/`} className="flex items-center gap-2 group">
                    <span className="font-sans font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors text-sm">
                      {coin.name} ({coin.symbol})
                    </span>
                  </Link>
                  <span className={`font-bold ${isPriceUp ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--card-muted)]">Toplam Açık Pozisyon:</span>
                    <span className="font-bold text-[var(--foreground)]">
                      ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[var(--card-muted)]">24s OI Değişimi:</span>
                    <span className={`font-bold flex items-center gap-1 ${isOiUp ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                      {isOiUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                      {isOiUp ? '+' : ''}{coin.openInterestChange24h.toFixed(2)}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[var(--card-muted)]">Long / Short Oranı:</span>
                    <span className="font-bold text-[var(--foreground)]">
                      {coin.longShortRatio.toFixed(2)} ({coin.longPercentage.toFixed(1)}% Long)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[var(--border)]">
                <div className="text-[10px] text-[var(--card-muted)]">Piyasa Sinyali:</div>
                <div className={`text-[11px] font-sans font-bold mt-0.5 ${sig.color}`}>
                  {sig.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
