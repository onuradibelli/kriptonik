'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { Calendar, AlertCircle, Clock, ShieldAlert, ArrowRight, Search, Zap, CheckCircle2 } from 'lucide-react';

interface TokenUnlockCalendarProps {
  coins: CoinData[];
}

export default function TokenUnlockCalendar({ coins }: TokenUnlockCalendarProps) {
  const [filterMode, setFilterMode] = useState<'ALL' | 'HIGH_RISK' | 'THIS_WEEK' | 'CLIFF' | 'LINEAR'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const usdtTry = LIVE_CURRENCY_RATES.USDT_TRY; // 50.04
  const now = new Date('2026-11-06T15:00:00Z');

  const unlockCoins = coins
    .filter((c) => c.tokenUnlock !== undefined)
    .sort((a, b) => (b.tokenUnlock?.riskScore || 0) - (a.tokenUnlock?.riskScore || 0));

  // Compute Total Monitored Unlock Value
  const totalUnlockValueUsd = unlockCoins.reduce((acc, c) => acc + (c.tokenUnlock?.unlockValueUsd || 0), 0);
  const totalUnlockValueTry = totalUnlockValueUsd * usdtTry;

  const filteredCoins = unlockCoins.filter((coin) => {
    const unlock = coin.tokenUnlock!;
    const matchesSearch =
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    const unlockDate = new Date(unlock.nextUnlockDate);
    const diffDays = Math.ceil((unlockDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (filterMode === 'HIGH_RISK') return unlock.riskScore >= 70;
    if (filterMode === 'THIS_WEEK') return diffDays <= 7;
    if (filterMode === 'CLIFF') return unlock.unlockType === 'CLIFF';
    if (filterMode === 'LINEAR') return unlock.unlockType === 'LINEAR';

    return true;
  });

  return (
    <div className="panel-card p-5 sm:p-6 space-y-5">
      {/* 1. Header with KPI Ribbon */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF8A00]/15 text-[#FF8A00] border border-[#FF8A00]/25 font-bold">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Token Kilit Açılım Takvimi (Cliff & Linear Unlocks)</span>
                <span className="rounded bg-[#FF3B56]/15 text-[#FF3B56] px-2 py-0.5 text-xs font-mono font-bold">
                  30 GÜNLÜK RADAR
                </span>
              </h2>
              <p className="mt-0.5 text-xs text-[var(--card-muted)]">
                Kilitli arzların serbest kalış tarihleri, dolaşım oranları ve Kriptonik Satış Baskısı Risk Skoru.
              </p>
            </div>
          </div>
        </div>

        {/* Global Total Unlock Value */}
        <div className="flex items-center gap-3 font-mono text-xs rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2">
          <div>
            <span className="text-[var(--card-muted)] text-[11px] block">30G Toplam Açılacak Değer:</span>
            <strong className="text-sm font-black text-[#FF3B56]">
              ${(totalUnlockValueUsd / 1_000_000).toFixed(1)}M USD
            </strong>
          </div>
          <div className="text-right border-l border-[var(--border)] pl-3">
            <span className="text-[var(--card-muted)] text-[11px] block">TRY Büyüklüğü:</span>
            <span className="font-bold text-[var(--foreground)]">
              ₺{(totalUnlockValueTry / 1_000_000_000).toFixed(2)}B
            </span>
          </div>
        </div>
      </div>

      {/* 2. Controls: Filter Chips & Search Input */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs overflow-x-auto no-scrollbar">
          {[
            { id: 'ALL', label: `TÜMÜ (${unlockCoins.length})` },
            { id: 'HIGH_RISK', label: '🚨 YÜKSEK RİSK (>70)' },
            { id: 'THIS_WEEK', label: '⏳ BU HAFTA AÇILACAKLAR' },
            { id: 'CLIFF', label: '📦 CLIFF (TOPLU)' },
            { id: 'LINEAR', label: '📈 LINEAR (DOĞRUSAL)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterMode(tab.id as any)}
              className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterMode === tab.id
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[var(--card-muted)]" />
          <input
            type="text"
            placeholder="Token ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] pl-8 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] outline-none focus:border-[#2962FF] w-40 transition-colors"
          />
        </div>
      </div>

      {/* 3. Grid of Token Unlock Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCoins.map((coin) => {
          const unlock = coin.tokenUnlock!;
          const unlockDate = new Date(unlock.nextUnlockDate);
          const diffDays = Math.max(1, Math.ceil((unlockDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

          const isHighRisk = unlock.riskScore >= 70;
          const isMediumRisk = unlock.riskScore >= 40 && unlock.riskScore < 70;

          return (
            <div
              key={coin.id}
              className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--background)] p-4 flex flex-col justify-between hover:border-[#FF8A00]/60 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                {/* Top Row: Coin Info & Risk Score */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <Link href={`/token-kilit-acilimlari/${coin.slug}/`} className="flex items-center gap-2.5 group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--card)] border border-[var(--border)] font-mono font-bold text-xs text-[var(--foreground)] group-hover:scale-105 transition-transform">
                      {coin.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--foreground)] text-sm group-hover:text-[#2962FF] transition-colors">
                        {coin.name} ({coin.symbol})
                      </div>
                      <div className="text-[10px] text-[var(--card-muted)] font-mono">
                        Spot: ${coin.price.toLocaleString('tr-TR')}
                      </div>
                    </div>
                  </Link>

                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[var(--card-muted)]">Risk Skoru</div>
                    <div
                      className={`font-mono text-sm font-black ${
                        isHighRisk ? 'text-[#FF3B56]' : isMediumRisk ? 'text-[#FF8A00]' : 'text-[#00E699]'
                      }`}
                    >
                      {unlock.riskScore}/100
                    </div>
                  </div>
                </div>

                {/* Unlock Details */}
                <div className="mt-3 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--card-muted)]">Kilit Açılım Tarihi:</span>
                    <span className="font-semibold text-[var(--foreground)] flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#2962FF]" />
                      {unlockDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })} ({diffDays} gün kaldı)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[var(--card-muted)]">Açılacak Varlık Değeri:</span>
                    <span className="font-bold text-[var(--foreground)]">
                      ${(unlock.unlockValueUsd / 1_000_000).toFixed(1)}M USD
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[var(--card-muted)]">Dolaşıma Oranı:</span>
                    <span className="font-bold text-[#FF3B56]">
                      %{unlock.unlockedPercent}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[var(--card-muted)]">Kilit Tipi:</span>
                    <span className="rounded bg-[var(--border)] px-2 py-0.5 text-[10px] font-bold text-[var(--foreground)]">
                      {unlock.unlockType} UNLOCK
                    </span>
                  </div>

                  <div className="pt-1.5 text-[11px] text-[var(--card-muted)] border-t border-[var(--border)]">
                    Hedef: <strong className="text-[var(--foreground)] font-sans">{unlock.targetAudience}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Bar of Risk Score */}
              <div className="mt-4 pt-3 border-t border-[var(--border)]">
                <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isHighRisk ? 'bg-[#FF3B56]' : isMediumRisk ? 'bg-[#FF8A00]' : 'bg-[#00E699]'
                    }`}
                    style={{ width: `${unlock.riskScore}%` }}
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--card-muted)]">
                    {isHighRisk ? '⚠️ Yüksek Satış Baskısı Riski' : 'Düşük/Orta Risk'}
                  </span>
                  <Link
                    href={`/token-kilit-acilimlari/${coin.slug}/`}
                    className="text-[11px] text-[#2962FF] hover:underline flex items-center gap-1 font-semibold"
                  >
                    Detaylı Rapor <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
