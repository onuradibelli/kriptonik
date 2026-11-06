'use client';

import React from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { Compass, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface OpenInterestRadarProps {
  coins: CoinData[];
}

export default function OpenInterestRadar({ coins }: OpenInterestRadarProps) {
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
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
        {coins.slice(0, 6).map((coin) => {
          const isOiUp = coin.openInterestChange24h >= 0;
          const isPriceUp = coin.change24h >= 0;

          // Anomaly logic
          let signal = 'Normal Akış';
          let signalColor = 'text-[var(--card-muted)]';

          if (isOiUp && isPriceUp) {
            signal = 'Güçlü Yükseliş Trendi (Taze Sermaye Girişi)';
            signalColor = 'text-[#00C087]';
          } else if (isOiUp && !isPriceUp) {
            signal = 'Agresif Short Baskısı (Dip Kırılım Riski)';
            signalColor = 'text-[#F6465D]';
          } else if (!isOiUp && isPriceUp) {
            signal = 'Short Squeeze / Kâr Satışı (Zayıflayan Trend)';
            signalColor = 'text-[#D97706] dark:text-[#F2C14E]';
          } else {
            signal = 'Long Tasfiyesi / Pozisyon Boşaltma';
            signalColor = 'text-[#F6465D]';
          }

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
                <div className={`text-[11px] font-sans font-bold mt-0.5 ${signalColor}`}>
                  {signal}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
