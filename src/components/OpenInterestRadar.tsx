'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { Compass, TrendingUp, TrendingDown, AlertCircle, Search, ArrowUpRight, Flame, Layers } from 'lucide-react';

interface OpenInterestRadarProps {
  coins: CoinData[];
}

export default function OpenInterestRadar({ coins }: OpenInterestRadarProps) {
  const [signalFilter, setSignalFilter] = useState<'ALL' | 'BULL' | 'BEAR' | 'SQUEEZE'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewLimit, setViewLimit] = useState<number>(9);

  const getSignalData = (coin: CoinData) => {
    const isOiUp = coin.openInterestChange24h >= 0;
    const isPriceUp = coin.change24h >= 0;

    if (isOiUp && isPriceUp) {
      return {
        type: 'BULL',
        label: 'Güçlü Boğa Trendi (Taze Para Girişi)',
        sublabel: 'Yükseliş türev fonlamasıyla destekleniyor',
        color: 'text-[#00E699]',
        badge: 'bg-[#00E699]/15 text-[#00E699] border-[#00E699]/30'
      };
    } else if (isOiUp && !isPriceUp) {
      return {
        type: 'BEAR',
        label: 'Agresif Short Baskısı (Kırılım Riski)',
        sublabel: 'Fiyat düşerken vadeli kontratlar artıyor',
        color: 'text-[#FF3B56]',
        badge: 'bg-[#FF3B56]/15 text-[#FF3B56] border-[#FF3B56]/30'
      };
    } else if (!isOiUp && isPriceUp) {
      return {
        type: 'SQUEEZE',
        label: 'Short Squeeze / Zayıflayan Momentum',
        sublabel: 'Açık pozisyon kapanırken fiyat yükseliyor',
        color: 'text-[#FF8A00]',
        badge: 'bg-[#FF8A00]/15 text-[#FF8A00] border-[#FF8A00]/30'
      };
    } else {
      return {
        type: 'BEAR',
        label: 'Long Tasfiyesi / Pozisyon Boşaltma',
        sublabel: 'Kaldıraçlı longlar stop oluyor ve likide ediliyor',
        color: 'text-[#FF3B56]',
        badge: 'bg-[#FF3B56]/15 text-[#FF3B56] border-[#FF3B56]/30'
      };
    }
  };

  const filteredCoins = coins.filter((coin) => {
    const matchesSearch =
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (signalFilter === 'ALL') return true;
    const sig = getSignalData(coin);
    return sig.type === signalFilter;
  });

  const displayedCoins = filteredCoins.slice(0, viewLimit);

  // Total Open Interest across all coins
  const totalOiSum = coins.reduce((acc, c) => acc + c.openInterestUsd, 0);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-5">
      {/* 1. Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Açık Pozisyon (Open Interest - OI) & Trend Gücü Radarı</span>
                <span className="rounded bg-[#2962FF]/15 text-[#2962FF] px-2 py-0.5 text-xs font-mono font-bold">
                  KURUMSAL POZİSYON ANOMALİSİ
                </span>
              </h2>
              <p className="mt-0.5 text-xs text-[var(--card-muted)]">
                Tüm vadeli borsalardaki aktif sözleşme büyüklüğü, sermaye girişleri ve fiyat sapmaları.
              </p>
            </div>
          </div>
        </div>

        {/* Global Total Metric */}
        <div className="flex items-center gap-2 font-mono text-xs rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2">
          <span className="text-[var(--card-muted)]">İzlenen Toplam OI:</span>
          <strong className="text-sm font-black text-[#2962FF]">
            ${(totalOiSum / 1_000_000_000).toFixed(2)}B USD
          </strong>
        </div>
      </div>

      {/* 2. Controls: Filter Chips & Search */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs overflow-x-auto no-scrollbar">
          {[
            { id: 'ALL', label: `TÜMÜ (${filteredCoins.length})` },
            { id: 'BULL', label: '🟢 BOĞA GİRİŞİ' },
            { id: 'BEAR', label: '🔴 SHORT BASKISI' },
            { id: 'SQUEEZE', label: '⚡ SQUEEZE' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSignalFilter(tab.id as any);
                setViewLimit(9);
              }}
              className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer whitespace-nowrap ${
                signalFilter === tab.id
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
            placeholder="OI varlığı ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] pl-8 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] outline-none focus:border-[#2962FF] w-40 sm:w-48 transition-colors"
          />
        </div>
      </div>

      {/* 3. Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
        {displayedCoins.map((coin) => {
          const isOiUp = coin.openInterestChange24h >= 0;
          const isPriceUp = coin.change24h >= 0;
          const sig = getSignalData(coin);

          // OI / Market Cap Ratio % (Kaldıraç Doygunluk Oranı)
          const oiRatioPercent = coin.marketCapUsd > 0 ? (coin.openInterestUsd / coin.marketCapUsd) * 100 : 0;
          const isLeverageHeavy = oiRatioPercent > 3.0;

          return (
            <div
              key={coin.id}
              className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--background)] p-4 flex flex-col justify-between hover:border-[#2962FF] transition-all group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
                  <Link href={`/acik-pozisyon/${coin.slug}/`} className="flex items-center gap-2 group">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--card-subtle)] border border-[var(--border)] font-bold text-xs text-[var(--foreground)] group-hover:scale-105 transition-transform">
                      {coin.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors text-sm">
                        {coin.name}
                      </span>
                      <span className="text-[10px] text-[var(--card-muted)] font-mono ml-1">
                        ({coin.symbol})
                      </span>
                    </div>
                  </Link>
                  <div className="text-right">
                    <div className="font-bold text-[var(--foreground)]">
                      ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
                    </div>
                    <div className={`text-[10px] font-bold ${isPriceUp ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {isPriceUp ? '+' : ''}{coin.change24h.toFixed(2)}%
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--card-muted)]">Toplam Açık Pozisyon (OI):</span>
                    <strong className="text-sm font-black text-[var(--foreground)]">
                      ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B USD
                    </strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[var(--card-muted)]">24s OI Değişimi:</span>
                    <span className={`font-bold flex items-center gap-1 ${isOiUp ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {isOiUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                      {isOiUp ? '+' : ''}{coin.openInterestChange24h.toFixed(2)}%
                    </span>
                  </div>

                  {/* Dual Long / Short Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#00E699] font-bold">%{coin.longPercentage.toFixed(1)} Long</span>
                      <span className="text-[#FF3B56] font-bold">%{coin.shortPercentage.toFixed(1)} Short</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                      <div style={{ width: `${coin.longPercentage}%` }} className="bg-[#00E699] h-full" />
                      <div style={{ width: `${coin.shortPercentage}%` }} className="bg-[#FF3B56] h-full" />
                    </div>
                  </div>

                  {/* OI / Market Cap Ratio */}
                  <div className="flex justify-between items-center pt-1 text-[11px] text-[var(--card-muted)]">
                    <span>Kaldıraç Doygunluğu (OI/MCap):</span>
                    <span className={`font-bold ${isLeverageHeavy ? 'text-[#FF8A00]' : 'text-[var(--foreground)]'}`}>
                      %{oiRatioPercent.toFixed(2)} {isLeverageHeavy && '⚠️ Yüksek'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Signal Badge & Link */}
              <div className="mt-3.5 pt-2.5 border-t border-[var(--border)] flex items-center justify-between">
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[var(--card-muted)] font-mono">Algoritmik Trend Sinyali</div>
                  <div className={`text-xs font-sans font-black mt-0.5 ${sig.color}`}>
                    {sig.label}
                  </div>
                </div>
                <Link
                  href={`/acik-pozisyon/${coin.slug}/`}
                  className="rounded-lg bg-[var(--card-subtle)] hover:bg-[#2962FF]/15 text-[#2962FF] p-1.5 transition-colors"
                  title="Detaylı Grafiğe Git"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Pagination / Load More Controls */}
      {filteredCoins.length > 9 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          {viewLimit < filteredCoins.length ? (
            <>
              <button
                onClick={() => setViewLimit((v) => Math.min(filteredCoins.length, v + 9))}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
              >
                +9 Varlık Daha Göster ({viewLimit}/{filteredCoins.length})
              </button>
              <button
                onClick={() => setViewLimit(filteredCoins.length)}
                className="rounded-xl bg-[#2962FF]/15 border border-[#2962FF]/30 px-4 py-2 text-xs font-bold text-[#2962FF] hover:bg-[#2962FF]/25 transition-all cursor-pointer"
              >
                Tümünü Göster ({filteredCoins.length})
              </button>
            </>
          ) : (
            <button
              onClick={() => setViewLimit(9)}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--card-muted)] hover:text-[var(--foreground)] transition-all cursor-pointer"
            >
              Daha Az Göster (İlk 9)
            </button>
          )}
        </div>
      )}
    </div>
  );
}
