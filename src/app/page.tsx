'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COINS_DATA, WHALE_TRANSACTIONS } from '../lib/data';
import LiquidationHeatmap from '../components/LiquidationHeatmap';
import FundingMatrix from '../components/FundingMatrix';
import TokenUnlockCalendar from '../components/TokenUnlockCalendar';
import WhaleTracker from '../components/WhaleTracker';
import FearGreedWidget from '../components/FearGreedWidget';
import OpenInterestRadar from '../components/OpenInterestRadar';
import EtfTracker from '../components/EtfTracker';
import KacTlConverter from '../components/KacTlConverter';
import { Flame, DollarSign, Calendar, Compass, ShieldAlert, ArrowUpRight, Zap, TrendingUp, BarChart3, Calculator } from 'lucide-react';

export default function HomePage() {
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const selectedCoin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];

  return (
    <div className="space-y-8">
      {/* 1. Hero Telemetry Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card-subtle)] to-[var(--background)] p-6 sm:p-8 shadow-xs">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2962FF]/30 bg-[#2962FF]/10 px-3 py-1 text-xs font-bold text-[#2962FF]">
            <Zap className="h-3.5 w-3.5" />
            <span>Kriptonik On-Chain & Türev İstihbarat Terminali v2.5</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight">
            Sıfır Gürültü, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2962FF] to-[#00C087]">Maksimum Sinyal.</span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
            Coinglass ve CryptoQuant karmaşasını geride bırakın. Kaldıraçlı tasfiye derinlik grafikleri, borsalar arası fonlama arbitrajı, kurumsal Spot ETF net girişleri ve kilit açılım risk analizleri tek bir canlı ekranda.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">24s Toplam Piyasa Tasfiyesi</div>
              <div className="mt-1 font-mono text-lg font-black text-[#F6465D]">$348.5M</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">%62 Short • %38 Long</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Toplam Açık Pozisyon (OI)</div>
              <div className="mt-1 font-mono text-lg font-black text-[#2962FF]">$68.4B</div>
              <div className="text-[10px] text-[#00C087] font-semibold mt-0.5">+%5.42 (Son 24s)</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Piyasa Ağırlıklı Fonlama</div>
              <div className="mt-1 font-mono text-lg font-black text-[#00C087]">+%0.0125</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">Ilımlı Boğa Baskısı</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Bu Ay Açılacak Kilitli Arz</div>
              <div className="mt-1 font-mono text-lg font-black text-[#D97706] dark:text-[#F2C14E]">$2.45B</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">Cliff & Linear Takvimi</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Liquidation Heatmap Module */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#F6465D]" />
            <h2 className="text-lg font-black text-[var(--foreground)]">Canlı Likidasyon Isı Haritası</h2>
          </div>

          {/* Coin Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {COINS_DATA.slice(0, 5).map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCoinSlug(c.slug)}
                className={`rounded-lg px-3 py-1 text-xs font-mono font-bold transition-all ${
                  selectedCoinSlug === c.slug
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
                }`}
              >
                {c.symbol}
              </button>
            ))}
            <Link
              href="/likidasyon/"
              className="rounded-lg px-3 py-1 text-xs text-[#2962FF] hover:underline flex items-center gap-1 font-bold"
            >
              Tüm Isı Haritaları <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <LiquidationHeatmap coin={selectedCoin} />
      </section>

      {/* 3. Multi-Exchange Funding Matrix & Fear & Greed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FundingMatrix coins={COINS_DATA} />
        </div>
        <div>
          <FearGreedWidget />
        </div>
      </div>

      {/* 4. Spot ETF Daily Institutional Flows */}
      <section>
        <EtfTracker />
      </section>

      {/* 5. Token Unlock 30-Day Calendar */}
      <section>
        <TokenUnlockCalendar coins={COINS_DATA} />
      </section>

      {/* 6. Open Interest Radar & Whale Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OpenInterestRadar coins={COINS_DATA} />
        <WhaleTracker transactions={WHALE_TRANSACTIONS} />
      </div>

      {/* 7. Kaç TL? Canlı Kur ve Kripto Çevirici */}
      <section>
        <KacTlConverter />
      </section>

      {/* 8. Programmatic 360 Coin Directory (pSEO Master Section) */}
      <section className="panel-card p-6 space-y-4">
        <div className="border-b border-[var(--border)] pb-4">
          <h3 className="text-base font-bold text-[var(--foreground)]">Kriptonik Türev ve On-Chain İndeksi</h3>
          <p className="text-xs text-[var(--card-muted)] mt-1">
            Her coin için algoritmik olarak oluşturulan anlık likidasyon duvarları, fonlama geçmişi ve kilit açılım raporları.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
          {COINS_DATA.map((coin) => (
            <div
              key={coin.id}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 hover:border-[#2962FF] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--foreground)]">{coin.symbol}</span>
                  <span className={`font-mono text-[11px] font-bold ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(1)}%
                  </span>
                </div>
                <div className="text-[11px] text-[var(--card-muted)] truncate">{coin.name}</div>
                <div className="font-mono text-xs font-bold text-[var(--foreground)] mt-1">
                  ${coin.price > 10 ? coin.price.toLocaleString('tr-TR') : coin.price.toFixed(4)}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[var(--border)] flex flex-col gap-1 text-[10px] font-mono">
                <Link href={`/likidasyon/${coin.slug}/`} className="text-[#2962FF] hover:underline font-semibold">
                  → Likidasyon
                </Link>
                <Link href={`/fonlama-oranlari/${coin.slug}/`} className="text-[#00C087] hover:underline font-semibold">
                  → Fonlama
                </Link>
                <Link href={`/kripto/${coin.slug}/`} className="text-[var(--card-muted)] hover:text-[var(--foreground)] hover:underline">
                  → 360 Analiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
