'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { Calendar, AlertCircle, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

interface TokenUnlockCalendarProps {
  coins: CoinData[];
}

export default function TokenUnlockCalendar({ coins }: TokenUnlockCalendarProps) {
  const unlockCoins = coins
    .filter((c) => c.tokenUnlock !== undefined)
    .sort((a, b) => (b.tokenUnlock?.riskScore || 0) - (a.tokenUnlock?.riskScore || 0));

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <Calendar className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Token Kilit Açılım Takvimi (Cliff & Linear Unlocks)</span>
              <span className="rounded bg-[#F6465D]/20 text-[#F6465D] px-2 py-0.5 text-[10px] font-mono font-bold">30 GÜNLÜK RADAR</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#848E9C]">
            Önümüzdeki 30 gün içinde kilitli arzı serbest kalacak projeler, dolaşıma etki oranı ve Kriptonik Satış Baskısı Risk Skoru.
          </p>
        </div>
      </div>

      {/* Grid of Token Unlock Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {unlockCoins.map((coin) => {
          const unlock = coin.tokenUnlock!;
          const unlockDate = new Date(unlock.nextUnlockDate);
          const now = new Date('2026-11-06T15:00:00Z');
          const diffDays = Math.max(1, Math.ceil((unlockDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

          const isHighRisk = unlock.riskScore >= 70;
          const isMediumRisk = unlock.riskScore >= 40 && unlock.riskScore < 70;

          return (
            <div
              key={coin.id}
              className="rounded-xl border border-[#222938] bg-[#0D121A] p-4 flex flex-col justify-between hover:border-[#334055] transition-colors"
            >
              <div>
                {/* Top Row: Coin Info & Risk Score */}
                <div className="flex items-center justify-between border-b border-[#1A212D] pb-3">
                  <Link href={`/token-kilit-acilimlari/${coin.slug}/`} className="flex items-center gap-2.5 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#151A23] border border-[#222938] font-mono font-bold text-xs text-white">
                      {coin.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm group-hover:text-[#2962FF] transition-colors">
                        {coin.name} ({coin.symbol})
                      </div>
                      <div className="text-[10px] text-[#848E9C]">
                        Spot: ${coin.price.toLocaleString('tr-TR')}
                      </div>
                    </div>
                  </Link>

                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[#848E9C]">Risk Skoru</div>
                    <div
                      className={`font-mono text-sm font-bold ${
                        isHighRisk ? 'text-[#F6465D]' : isMediumRisk ? 'text-[#F2C14E]' : 'text-[#00C087]'
                      }`}
                    >
                      {unlock.riskScore}/100
                    </div>
                  </div>
                </div>

                {/* Unlock Details */}
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#848E9C]">Kilit Açılım Tarihi:</span>
                    <span className="font-mono font-semibold text-white flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#2962FF]" />
                      {unlockDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })} ({diffDays} gün kaldı)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#848E9C]">Açılacak Varlık Değeri:</span>
                    <span className="font-mono font-bold text-white">
                      ${(unlock.unlockValueUsd / 1_000_000).toFixed(1)}M
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#848E9C]">Dolaşıma Oranı:</span>
                    <span className="font-mono font-bold text-[#F6465D]">
                      %{unlock.unlockedPercent}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#848E9C]">Kilit Tipi:</span>
                    <span className="rounded bg-[#1A212D] px-2 py-0.5 text-[10px] font-mono text-[#CBD5E1]">
                      {unlock.unlockType} UNLOCK
                    </span>
                  </div>

                  <div className="pt-1 text-[11px] text-[#848E9C] border-t border-[#1A212D]">
                    Hedef: <strong className="text-white">{unlock.targetAudience}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Bar of Risk Score */}
              <div className="mt-4 pt-3 border-t border-[#1A212D]">
                <div className="h-1.5 w-full rounded-full bg-[#1A212D] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isHighRisk ? 'bg-[#F6465D]' : isMediumRisk ? 'bg-[#F2C14E]' : 'bg-[#00C087]'
                    }`}
                    style={{ width: `${unlock.riskScore}%` }}
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#848E9C]">
                    {isHighRisk ? 'Yüksek Satış Baskısı Riski' : 'Düşük/Orta Risk'}
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
