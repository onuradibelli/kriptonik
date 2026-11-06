'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import {
  DollarSign,
  Search,
  ArrowUpDown,
  Zap,
  AlertTriangle,
  ArrowRight,
  Clock,
  Calculator,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface FundingMatrixProps {
  coins: CoinData[];
}

export default function FundingMatrix({ coins }: FundingMatrixProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<'binance' | 'volume' | 'spread'>('spread');
  const [sortDesc, setSortDesc] = useState(true);
  const [filterMode, setFilterMode] = useState<'ALL' | 'HIGH_ARB' | 'POSITIVE' | 'NEGATIVE'>('ALL');

  // Interactive Arbitrage Calculator State
  const [selectedArbSymbol, setSelectedArbSymbol] = useState<string>('SUI');
  const [arbCapital, setArbCapital] = useState<number>(10000);
  const [showCalculator, setShowCalculator] = useState<boolean>(true);

  // Countdown to next 8-hour funding settlement (03:00, 11:00, 19:00 TSİ)
  const [countdownStr, setCountdownStr] = useState<string>('04:18:22');

  const usdtTry = LIVE_CURRENCY_RATES.USDT_TRY; // 50.04

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();

      // Funding hours in UTC: 00:00, 08:00, 16:00
      const nextFundingUtcHour = [0, 8, 16, 24].find((h) => h > utcHours) || 24;
      const totalSecondsNow = utcHours * 3600 + utcMinutes * 60 + utcSeconds;
      const totalSecondsNext = nextFundingUtcHour * 3600;
      const diffSeconds = totalSecondsNext - totalSecondsNow;

      const hrs = Math.floor(diffSeconds / 3600);
      const mins = Math.floor((diffSeconds % 3600) / 60);
      const secs = diffSeconds % 60;

      setCountdownStr(
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      );
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const arbitrageOpps = [...coins]
    .map((c) => {
      const spread = Math.abs(c.fundingRates.binance - c.fundingRates.bybit);
      const apr = spread * 3 * 365 * 100;
      const longEx = c.fundingRates.binance < c.fundingRates.bybit ? 'Binance' : 'Bybit';
      const shortEx = c.fundingRates.binance < c.fundingRates.bybit ? 'Bybit' : 'Binance';
      return { coin: c, spread, apr, longEx, shortEx };
    })
    .sort((a, b) => b.spread - a.spread)
    .slice(0, 3);

  const filteredCoins = coins.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (filterMode === 'HIGH_ARB') {
      const apr = Math.abs(c.fundingRates.binance - c.fundingRates.bybit) * 3 * 365 * 100;
      return apr >= 1.0;
    }
    if (filterMode === 'POSITIVE') return c.fundingRates.binance > 0;
    if (filterMode === 'NEGATIVE') return c.fundingRates.binance < 0;

    return true;
  });

  const sortedCoins = [...filteredCoins].sort((a, b) => {
    let valA = 0;
    let valB = 0;

    if (sortKey === 'binance') {
      valA = a.fundingRates.binance;
      valB = b.fundingRates.binance;
    } else if (sortKey === 'volume') {
      valA = a.volume24hUsd;
      valB = b.volume24hUsd;
    } else if (sortKey === 'spread') {
      valA = Math.abs(a.fundingRates.binance - a.fundingRates.bybit);
      valB = Math.abs(b.fundingRates.binance - b.fundingRates.bybit);
    }

    return sortDesc ? valB - valA : valA - valB;
  });

  // Selected Arbitrage Asset for the Interactive Calculator
  const activeCalcCoin = coins.find((c) => c.symbol === selectedArbSymbol) || arbitrageOpps[0]?.coin || coins[0];
  const activeSpread = Math.abs(activeCalcCoin.fundingRates.binance - activeCalcCoin.fundingRates.bybit);
  const activeApr = activeSpread * 3 * 365 * 100;
  const longExchange = activeCalcCoin.fundingRates.binance < activeCalcCoin.fundingRates.bybit ? 'Binance' : 'Bybit';
  const shortExchange = activeCalcCoin.fundingRates.binance < activeCalcCoin.fundingRates.bybit ? 'Bybit' : 'Binance';

  // Calculator Return Computations
  const halfCapital = arbCapital / 2; // Split 50% Long, 50% Short for delta-neutral hedge
  const returnPer8hUsd = halfCapital * activeSpread;
  const returnPer24hUsd = returnPer8hUsd * 3;
  const returnMonthlyUsd = returnPer24hUsd * 30;
  const returnAnnualUsd = arbCapital * (activeApr / 100);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-6">
      {/* 1. Header & Live Countdown Ribbon */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Borsalar Arası Canlı Fonlama Isı Tablosu</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold">
                  DELTA-NÖTR RADAR
                </span>
              </h2>
              <p className="mt-0.5 text-xs text-[var(--card-muted)]">
                Binance, Bybit ve OKX sürekli vadeli fonlama oranları (8 saatlik) ve fiyattan bağımsız faiz arbitrajı.
              </p>
            </div>
          </div>
        </div>

        {/* Live Countdown & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-mono text-xs">
            <Clock className="h-3.5 w-3.5 text-[#2962FF]" />
            <span className="text-[var(--card-muted)]">Sonraki Seans:</span>
            <span className="font-bold text-[#00E699]">{countdownStr}</span>
          </div>

          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="flex items-center gap-1.5 rounded-xl border border-[#00E699]/30 bg-[#00E699]/10 px-3 py-1.5 text-xs font-bold text-[#00E699] hover:bg-[#00E699]/20 transition-all cursor-pointer"
          >
            <Calculator className="h-3.5 w-3.5" />
            <span>{showCalculator ? 'Hesaplayıcıyı Gizle' : 'Arbitraj Getirisini Simüle Et'}</span>
          </button>
        </div>
      </div>

      {/* 2. Top 3 Delta-Neutral Arbitrage Opportunities Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {arbitrageOpps.map((opp, idx) => (
          <button
            key={opp.coin.id}
            onClick={() => {
              setSelectedArbSymbol(opp.coin.symbol);
              setShowCalculator(true);
            }}
            className={`rounded-xl border p-3.5 text-left text-xs font-mono space-y-2 transition-all cursor-pointer ${
              selectedArbSymbol === opp.coin.symbol
                ? 'border-[#00E699] bg-[#00E699]/10 shadow-md shadow-[#00E699]/10'
                : 'border-[var(--border)] bg-[var(--background)] hover:border-[#00E699]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-[var(--foreground)] flex items-center gap-1.5 text-sm">
                <span className="text-[#00E699]">#{idx + 1}</span> {opp.coin.name} ({opp.coin.symbol})
              </span>
              <span className="rounded bg-[#00E699]/15 px-2 py-0.5 font-black text-[#00E699] text-xs">
                %{opp.apr.toFixed(1)} APR
              </span>
            </div>

            <div className="text-[11px] text-[var(--card-muted)] flex items-center justify-between">
              <span>Arbitraj Rotası:</span>
              <span className="text-[var(--foreground)] font-bold">
                Long {opp.longEx} / Short {opp.shortEx}
              </span>
            </div>

            <div className="text-[10px] text-[var(--card-muted)] pt-1 border-t border-[var(--border)] flex justify-between">
              <span>8s Spread: %{(opp.spread * 100).toFixed(4)}</span>
              <span className="text-[#00E699] font-bold">Hesaplamak İçin Tıkla →</span>
            </div>
          </button>
        ))}
      </div>

      {/* 3. Interactive Delta-Neutral Funding Arbitrage Calculator */}
      {showCalculator && (
        <div className="rounded-2xl border border-[#00E699]/30 bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--background)] p-5 space-y-4 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00E699]/20 text-[#00E699]">
                <Calculator className="h-4 w-4" />
              </div>
              <h3 className="font-black text-sm sm:text-base text-[var(--foreground)] flex items-center gap-1.5">
                <span>Delta-Nötr Arbitraj Getiri Hesaplayıcı</span>
                <span className="text-xs font-mono font-bold text-[#00E699]">({activeCalcCoin.symbol})</span>
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[var(--card-muted)]">Parite Seçimi:</span>
              <select
                value={selectedArbSymbol}
                onChange={(e) => setSelectedArbSymbol(e.target.value)}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs font-mono font-bold text-[var(--foreground)] outline-none"
              >
                {coins.map((c) => (
                  <option key={c.id} value={c.symbol}>
                    {c.symbol} - {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Input Capital */}
            <div className="lg:col-span-5 space-y-3 font-mono">
              <label className="text-xs font-bold text-[var(--foreground)] block">
                Toplam Arbitraj Sermayesi (USD):
              </label>
              <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 focus-within:border-[#00E699] transition-all">
                <span className="text-sm font-bold text-[var(--card-muted)] mr-2">$</span>
                <input
                  type="number"
                  min="100"
                  step="500"
                  value={arbCapital}
                  onChange={(e) => setArbCapital(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full bg-transparent text-base font-bold text-[var(--foreground)] outline-none"
                />
              </div>

              {/* Capital Presets */}
              <div className="flex items-center gap-1.5 text-xs">
                {[2000, 5000, 10000, 25000, 50000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setArbCapital(amt)}
                    className={`rounded-lg border px-2 py-0.5 text-[11px] font-semibold transition-all ${
                      arbCapital === amt
                        ? 'border-[#00E699] bg-[#00E699]/15 text-[#00E699]'
                        : 'border-[var(--border)] bg-[var(--background)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    ${amt >= 1000 ? `${amt / 1000}k` : amt}
                  </button>
                ))}
              </div>

              {/* Execution Strategy Blueprint */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-xs space-y-2">
                <span className="font-bold text-[var(--foreground)] flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#00E699]" />
                  <span>Risksiz Pozisyon Kurulumu (Hedge):</span>
                </span>
                <div className="text-[11px] text-[var(--card-muted)] space-y-1">
                  <div className="flex justify-between">
                    <span>1. {longExchange} Borsasında:</span>
                    <strong className="text-[#00E699]">${halfCapital.toLocaleString('tr-TR')} LONG</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>2. {shortExchange} Borsasında:</span>
                    <strong className="text-[#FF3B56]">${halfCapital.toLocaleString('tr-TR')} SHORT</strong>
                  </div>
                </div>
                <p className="text-[10px] text-[var(--card-muted)] leading-tight pt-1 border-t border-[var(--border)]">
                  Fiyat ister %100 yükselsin ister %90 düşsün, net portföy kâr/zararı 0 kalır; sadece fonlama faiz farkı her 8 saatte bir hesabınıza yatar.
                </p>
              </div>
            </div>

            {/* Calculated Yields */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-1">
                <span className="text-[11px] text-[var(--card-muted)] block">8 Saatlik Net Gelir</span>
                <div className="text-lg font-black text-[#00E699]">
                  +${returnPer8hUsd.toFixed(2)}
                </div>
                <div className="text-[10px] text-[var(--card-muted)]">
                  ≈ ₺{(returnPer8hUsd * usdtTry).toFixed(1)} TRY
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-1">
                <span className="text-[11px] text-[var(--card-muted)] block">24 Saatlik Günlük Gelir</span>
                <div className="text-lg font-black text-[#00E699]">
                  +${returnPer24hUsd.toFixed(2)}
                </div>
                <div className="text-[10px] text-[var(--card-muted)]">
                  ≈ ₺{(returnPer24hUsd * usdtTry).toFixed(1)} TRY
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 space-y-1">
                <span className="text-[11px] text-[var(--card-muted)] block">30 Günlük Aylık Kâr</span>
                <div className="text-lg font-black text-[#00E699]">
                  +${returnMonthlyUsd.toFixed(1)}
                </div>
                <div className="text-[10px] text-[var(--card-muted)]">
                  ≈ ₺{(returnMonthlyUsd * usdtTry).toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY
                </div>
              </div>

              <div className="col-span-2 sm:col-span-3 rounded-xl border border-[#00E699]/30 bg-[#00E699]/10 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-[var(--card-muted)]">Yıllık Bileşik Getiri (APR):</span>
                  <div className="text-2xl font-black text-[#00E699]">
                    %{activeApr.toFixed(2)} APR
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[var(--card-muted)] block">Yıllık Tahmini Net Gelir:</span>
                  <strong className="text-base font-black text-[var(--foreground)]">
                    +${returnAnnualUsd.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} USD (₺{(returnAnnualUsd * usdtTry).toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY)
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Filter Tabs & Search Header for the Matrix */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
          {[
            { id: 'ALL', label: 'TÜMÜ (60)' },
            { id: 'HIGH_ARB', label: '🔥 ARBİTRAJ' },
            { id: 'POSITIVE', label: 'POZİTİF' },
            { id: 'NEGATIVE', label: 'NEGATİF' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterMode(tab.id as any)}
              className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
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
            placeholder="60 varlık içinde ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] pl-8 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] outline-none focus:border-[#2962FF] w-48 transition-colors"
          />
        </div>
      </div>

      {/* 5. Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--card-subtle)] font-mono text-[11px] text-[var(--card-muted)]">
              <th className="py-2.5 px-3">Parite / Varlık</th>
              <th className="py-2.5 px-3">Spot Fiyat</th>
              <th
                className="py-2.5 px-3 cursor-pointer hover:text-[var(--foreground)]"
                onClick={() => {
                  if (sortKey === 'binance') setSortDesc(!sortDesc);
                  else {
                    setSortKey('binance');
                    setSortDesc(true);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <span>Binance Fonlama</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-2.5 px-3">Bybit Fonlama</th>
              <th className="py-2.5 px-3">OKX Fonlama</th>
              <th
                className="py-2.5 px-3 cursor-pointer hover:text-[var(--foreground)]"
                onClick={() => {
                  if (sortKey === 'spread') setSortDesc(!sortDesc);
                  else {
                    setSortKey('spread');
                    setSortDesc(true);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <span>Maksimum Spread (Arbitraj)</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 text-right">Tahmini Yıllık APR</th>
              <th className="py-2.5 px-3 text-right">Simülasyon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] font-mono bg-[var(--card)]">
            {sortedCoins.map((coin) => {
              const binanceRate = coin.fundingRates.binance;
              const bybitRate = coin.fundingRates.bybit;
              const okxRate = coin.fundingRates.okx;

              const maxSpread = Math.max(
                Math.abs(binanceRate - bybitRate),
                Math.abs(binanceRate - okxRate),
                Math.abs(bybitRate - okxRate)
              );

              // Annualized APR = spread * 3 * 365
              const annualizedApr = maxSpread * 3 * 365 * 100;
              const isArbitrageHot = annualizedApr > 15;
              const isSelected = selectedArbSymbol === coin.symbol;

              return (
                <tr
                  key={coin.id}
                  className={`hover:bg-[var(--card-subtle)] transition-colors ${
                    isSelected ? 'bg-[#00E699]/5' : ''
                  }`}
                >
                  {/* Symbol */}
                  <td className="py-3 px-3">
                    <Link href={`/fonlama-oranlari/${coin.slug}/`} className="flex items-center gap-2 group">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--border)] font-bold text-[10px] text-[var(--foreground)]">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-sans font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                          {coin.symbol}
                        </div>
                        <div className="text-[10px] text-[var(--card-muted)] font-sans">{coin.name}</div>
                      </div>
                    </Link>
                  </td>

                  {/* Spot Price */}
                  <td className="py-3 px-3 text-[var(--foreground)] font-semibold">
                    ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
                  </td>

                  {/* Binance */}
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-bold ${
                        binanceRate >= 0 ? 'badge-bull' : 'badge-bear'
                      }`}
                    >
                      {binanceRate >= 0 ? '+' : ''}{(binanceRate * 100).toFixed(4)}%
                    </span>
                  </td>

                  {/* Bybit */}
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-bold ${
                        bybitRate >= 0 ? 'badge-bull' : 'badge-bear'
                      }`}
                    >
                      {bybitRate >= 0 ? '+' : ''}{(bybitRate * 100).toFixed(4)}%
                    </span>
                  </td>

                  {/* OKX */}
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-bold ${
                        okxRate >= 0 ? 'badge-bull' : 'badge-bear'
                      }`}
                    >
                      {okxRate >= 0 ? '+' : ''}{(okxRate * 100).toFixed(4)}%
                    </span>
                  </td>

                  {/* Spread */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[var(--foreground)]">
                        %{(maxSpread * 100).toFixed(4)}
                      </span>
                      {isArbitrageHot && (
                        <span className="flex items-center gap-0.5 rounded bg-[#00E699]/15 text-[#00E699] px-1.5 py-0.2 text-[9px] font-bold">
                          <Zap className="h-2.5 w-2.5" /> FIRSAT
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Annualized APR */}
                  <td className="py-3 px-3 text-right">
                    <span className={`font-bold ${isArbitrageHot ? 'text-[#00E699]' : 'text-[var(--card-muted)]'}`}>
                      %{annualizedApr.toFixed(1)} APR
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedArbSymbol(coin.symbol);
                        setShowCalculator(true);
                      }}
                      className="rounded-lg bg-[var(--card-subtle)] hover:bg-[#00E699]/20 hover:text-[#00E699] text-[var(--card-muted)] border border-[var(--border)] px-2 py-1 text-[10px] font-bold transition-all cursor-pointer"
                    >
                      Hesapla
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[var(--card-muted)] pt-1 gap-2">
        <span>* Fonlama oranları her 8 saatte bir (03:00, 11:00, 19:00 TSİ) takas edilir.</span>
        <div className="flex items-center gap-3">
          <Link href="/fonlama-oranlari/" className="text-[#2962FF] hover:underline flex items-center gap-1 font-semibold">
            Tüm Fonlama Analizleri <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
