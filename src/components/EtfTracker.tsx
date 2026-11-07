'use client';

import React, { useState } from 'react';
import { BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY, SOLANA_ETF_SUMMARY } from '../lib/data';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Building2,
  ShieldCheck,
  DollarSign,
  Layers,
  PieChart,
  Sparkles,
  ArrowUpRight,
  Info,
  Calendar,
  Search,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function EtfTracker() {
  const [selectedAsset, setSelectedAsset] = useState<'BTC' | 'ETH' | 'SOL' | 'ALL'>('BTC');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const btcSummary = BITCOIN_ETF_SUMMARY;
  const ethSummary = ETHEREUM_ETF_SUMMARY;
  const solSummary = SOLANA_ETF_SUMMARY;

  const totalCombinedAum = btcSummary.totalAumUsd + ethSummary.totalAumUsd + solSummary.totalAumUsd;
  const combinedTotalDay = btcSummary.lastDayNetFlowUsd + ethSummary.lastDayNetFlowUsd + solSummary.lastDayNetFlowUsd;
  const totalCumulativeInflow = btcSummary.cumulativeNetInflowUsd + ethSummary.cumulativeNetInflowUsd + solSummary.cumulativeNetInflowUsd;

  const currentSummary = selectedAsset === 'SOL' ? solSummary : selectedAsset === 'ETH' ? ethSummary : btcSummary;

  // Funds to display based on tab
  const displayedFunds =
    selectedAsset === 'ALL'
      ? [
          ...btcSummary.funds.map((f) => ({ ...f, asset: 'BTC' })),
          ...ethSummary.funds.map((f) => ({ ...f, asset: 'ETH' })),
          ...solSummary.funds.map((f) => ({ ...f, asset: 'SOL' }))
        ]
      : currentSummary.funds.map((f) => ({ ...f, asset: selectedAsset }));

  const filteredFunds = displayedFunds.filter(
    (f) =>
      f.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.fundName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const maxFlowAbs = Math.max(...currentSummary.recentDailyFlows.map((f) => Math.abs(f.netInflowUsd)), 50);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-6">
      {/* 1. Standard Top KPI Metric Cards */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
              🏛️
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Spot Kripto ETF Dashboard</span>
                <span className="rounded bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold border border-[#00E699]/30">
                  KURUMSAL TAKAS MODELİ
                </span>
              </h2>
              <p className="text-xs text-[var(--card-muted)] mt-0.5">
                SEC onaylı kurumsal Bitcoin, Ethereum ve Solana spot ETF fonlarının günlük net para akışları ve AUM bilançoları.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--card-muted)] bg-[var(--background)] px-3 py-1.5 rounded-xl border border-[var(--border)]">
            <Calendar className="h-3.5 w-3.5 text-[#2962FF]" />
            <span>Son İşlem Seansı: <strong className="text-[var(--foreground)]">5-6 Kasım 2026</strong></span>
          </div>
        </div>

        {/* Comparative 3-Asset Breakdown Bar (BTC vs ETH vs SOL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* BTC Box */}
          <div
            onClick={() => setSelectedAsset('BTC')}
            className={`rounded-2xl border p-4 space-y-2 cursor-pointer transition-all ${
              selectedAsset === 'BTC' ? 'border-[#2962FF] bg-[#2962FF]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--background)] hover:border-[#2962FF]/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2962FF]" />
                <span>Bitcoin Spot ETF (8 Fon)</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2962FF]/15 text-[#2962FF] font-bold">
                AKTİF TİCARET
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">1G Net Akış:</span>
                <strong className="text-sm font-black text-[#FF3B56]">
                  -${Math.abs(btcSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Toplam AUM:</span>
                <strong className="text-sm font-black text-[var(--foreground)]">
                  ${(btcSummary.totalAumUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Kümülatif Giriş:</span>
                <strong className="text-xs font-black text-[#00A86B] dark:text-[#00E699]">
                  +${(btcSummary.cumulativeNetInflowUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Rezerv:</span>
                <strong className="text-xs font-black text-[var(--foreground)]">
                  1.15M BTC
                </strong>
              </div>
            </div>
          </div>

          {/* ETH Box */}
          <div
            onClick={() => setSelectedAsset('ETH')}
            className={`rounded-2xl border p-4 space-y-2 cursor-pointer transition-all ${
              selectedAsset === 'ETH' ? 'border-[#00E699] bg-[#00E699]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--background)] hover:border-[#00E699]/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00E699]" />
                <span>Ethereum Spot ETF (4 Fon)</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] font-bold">
                AKTİF TİCARET
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">1G Net Akış:</span>
                <strong className="text-sm font-black text-[#FF3B56]">
                  -${Math.abs(ethSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Toplam AUM:</span>
                <strong className="text-sm font-black text-[var(--foreground)]">
                  ${(ethSummary.totalAumUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Kümülatif Giriş:</span>
                <strong className="text-xs font-black text-[#00A86B] dark:text-[#00E699]">
                  +${(ethSummary.cumulativeNetInflowUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Rezerv:</span>
                <strong className="text-xs font-black text-[var(--foreground)]">
                  3.84M ETH
                </strong>
              </div>
            </div>
          </div>

          {/* SOL Box (Active Traded Spot ETF) */}
          <div
            onClick={() => setSelectedAsset('SOL')}
            className={`rounded-2xl border p-4 space-y-2 cursor-pointer transition-all ${
              selectedAsset === 'SOL' ? 'border-purple-500 bg-purple-500/5 shadow-sm' : 'border-[var(--border)] bg-[var(--background)] hover:border-purple-500/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                <span>Solana Spot ETF & Fon (5 Fon)</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400 font-bold">
                AKTİF TİCARET
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">1G Net Akış:</span>
                <strong className="text-sm font-black text-[#00A86B] dark:text-[#00E699]">
                  +${Math.abs(solSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Toplam AUM:</span>
                <strong className="text-sm font-black text-[var(--foreground)]">
                  ${(solSummary.totalAumUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Kümülatif Giriş:</span>
                <strong className="text-xs font-black text-[#00A86B] dark:text-[#00E699]">
                  +${(solSummary.cumulativeNetInflowUsd / 1_000_000_000).toFixed(2)}B
                </strong>
              </div>
              <div>
                <span className="text-[var(--card-muted)] block text-[11px]">Rezerv:</span>
                <strong className="text-xs font-black text-[var(--foreground)]">
                  28.9M SOL
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Primary High-Impact KPI Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* KPI 1: 1D Total Net Inflow */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Toplam 1G Net Akış (Dünkü Seans)</div>
            <div className={`font-mono text-xl sm:text-2xl font-black flex items-center gap-1.5 ${
              combinedTotalDay >= 0 ? 'text-[#00A86B] dark:text-[#00E699]' : 'text-[#FF3B56]'
            }`}>
              {combinedTotalDay >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
              <span>{combinedTotalDay >= 0 ? '+' : '-'}${Math.abs(combinedTotalDay / 1_000_000).toFixed(1)}M</span>
            </div>
            <div className="text-[11px] text-[var(--card-muted)] font-mono">
              BTC: -${Math.abs(btcSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M | SOL: +${(solSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
            </div>
          </div>

          {/* KPI 2: Total Combined AUM */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Spot Kripto Toplam AUM</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[var(--foreground)]">
              ${(totalCombinedAum / 1_000_000_000).toFixed(2)}B USD
            </div>
            <div className="text-[11px] text-[var(--card-muted)] font-mono">
              BTC + ETH + SOL Kurumsal Rezervleri
            </div>
          </div>

          {/* KPI 3: Total Cumulative Inflow */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Kümülatif Net Sermaye Girişi</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#00A86B] dark:text-[#00E699]">
              +${(totalCumulativeInflow / 1_000_000_000).toFixed(2)}B
            </div>
            <div className="text-[11px] text-[var(--card-muted)] font-mono">
              Wall Street Tarihsel Net Girişi
            </div>
          </div>

          {/* KPI 4: Institutional Leader */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">En Büyük İhraççı (Market Share)</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#2962FF] truncate">
              BlackRock (IBIT)
            </div>
            <div className="text-[11px] text-[var(--card-muted)] font-mono">
              $48.6B AUM (%45.7 Pazar Payı)
            </div>
          </div>
        </div>
      </div>

      {/* 2. Asset Selector Tabs & Fund Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-[var(--border)]">
        <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedAsset('BTC')}
            className={`rounded-lg px-3 py-1.5 font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedAsset === 'BTC'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Bitcoin Spot ETF (8 Fon)
          </button>
          <button
            onClick={() => setSelectedAsset('ETH')}
            className={`rounded-lg px-3 py-1.5 font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedAsset === 'ETH'
                ? 'bg-[#00E699] text-black shadow-xs font-black'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Ethereum Spot ETF (4 Fon)
          </button>
          <button
            onClick={() => setSelectedAsset('SOL')}
            className={`rounded-lg px-3 py-1.5 font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedAsset === 'SOL'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Solana Spot ETF (5 Fon)
          </button>
          <button
            onClick={() => setSelectedAsset('ALL')}
            className={`rounded-lg px-3 py-1.5 font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedAsset === 'ALL'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Konsolide Tüm Fonlar (17)
          </button>
        </div>

        {/* Search Input Filter */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--card-muted)]" />
          <input
            type="text"
            placeholder="Fon veya İhraççı Ara (IBIT, GSOL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-9 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] focus:outline-hidden focus:border-[#2962FF] font-sans"
          />
        </div>
      </div>

      {/* 3. Daily Historical Inflow Bar Chart */}
      {selectedAsset !== 'ALL' && (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#2962FF]" />
              <span className="text-sm font-bold text-[var(--foreground)]">
                {selectedAsset === 'BTC' ? 'Bitcoin' : selectedAsset === 'ETH' ? 'Ethereum' : 'Solana'} Son Seanslar Net Giriş / Çıkış ($Milyon)
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-xs bg-[#00E699]" />
                <span className="text-[var(--card-muted)]">Net Giriş</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-xs bg-[#FF3B56]" />
                <span className="text-[var(--card-muted)]">Net Çıkış</span>
              </span>
            </div>
          </div>

          {/* Dynamic SVG / CSS Bar Chart */}
          <div className="relative pt-6 pb-2">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 items-end h-36">
              {currentSummary.recentDailyFlows.slice().reverse().map((flow, idx) => {
                const isPositive = flow.netInflowUsd >= 0;
                const barHeightPercent = Math.max(16, Math.round((Math.abs(flow.netInflowUsd) / maxFlowAbs) * 100));
                const isHovered = hoveredBar === idx;

                return (
                  <div
                    key={flow.date}
                    onMouseEnter={() => setHoveredBar(idx)}
                    onMouseLeave={() => setHoveredBar(null)}
                    className="flex flex-col items-center justify-end h-full group relative cursor-pointer"
                  >
                    {/* Tooltip on hover */}
                    {isHovered && (
                      <div className="absolute -top-12 z-20 whitespace-nowrap rounded-lg bg-[var(--card)] border border-[var(--border)] px-2.5 py-1 text-center shadow-xl font-mono text-xs text-[var(--foreground)]">
                        <div className="font-bold">{flow.date}</div>
                        <div className={isPositive ? 'text-[#00A86B] dark:text-[#00E699]' : 'text-[#FF3B56]'}>
                          {isPositive ? '+' : ''}${flow.netInflowUsd}M
                        </div>
                      </div>
                    )}

                    {/* The Bar */}
                    <div
                      style={{ height: `${barHeightPercent}%` }}
                      className={`w-full rounded-t-lg transition-all duration-200 group-hover:brightness-125 ${
                        isPositive
                          ? 'bg-gradient-to-t from-[#00E699]/40 to-[#00E699] border-t-2 border-[#00E699]'
                          : 'bg-gradient-to-t from-[#FF3B56]/40 to-[#FF3B56] border-t-2 border-[#FF3B56]'
                      }`}
                    />

                    {/* Date label */}
                    <div className="mt-2 text-[11px] font-mono text-[var(--card-muted)] group-hover:text-[var(--foreground)] text-center leading-none">
                      {flow.date.split(' ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. Active Traded Funds Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--card-subtle)] text-xs text-[var(--card-muted)] select-none">
              <th className="py-3 px-3.5 font-semibold">Fon Ticker & İsim</th>
              <th className="py-3 px-3.5 font-semibold">İhraççı (Kurum)</th>
              <th className="py-3 px-3.5 font-semibold">Yönetim Ücreti</th>
              <th className="py-3 px-3.5 font-semibold text-right">Rezerv Miktarı</th>
              <th className="py-3 px-3.5 font-semibold text-right">Toplam AUM ($USD)</th>
              <th className="py-3 px-3.5 font-semibold text-right">24s Net Giriş/Çıkış</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
            {filteredFunds.map((fund) => {
              const isPositive = fund.netFlowUsd24h >= 0;
              const isNeutral = fund.netFlowUsd24h === 0;

              return (
                <tr key={`${fund.asset}-${fund.ticker}`} className="hover:bg-[var(--card-subtle)] transition-colors text-xs">
                  <td className="py-3.5 px-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`rounded-lg px-2 py-1 font-bold text-xs border ${
                        fund.asset === 'BTC'
                          ? 'bg-[#2962FF]/15 text-[#2962FF] border-[#2962FF]/30'
                          : fund.asset === 'ETH'
                          ? 'bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] border-[#00E699]/30'
                          : 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30'
                      }`}>
                        {fund.ticker}
                      </span>
                      <div>
                        <div className="font-bold text-sm text-[var(--foreground)] font-sans">
                          {fund.fundName}
                        </div>
                        <span className="text-[11px] text-[var(--card-muted)]">
                          {fund.asset} Spot ETF
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-3.5 text-sm font-sans font-medium text-[var(--foreground)]">
                    {fund.issuer}
                  </td>

                  <td className="py-3.5 px-3.5 text-xs text-[var(--card-muted)]">
                    %{fund.feePercent.toFixed(2)}
                  </td>

                  <td className="py-3.5 px-3.5 text-right font-bold text-xs text-[var(--foreground)]">
                    {fund.holdingsCoins.toLocaleString('tr-TR')} {fund.asset}
                  </td>

                  <td className="py-3.5 px-3.5 text-right font-bold text-sm text-[var(--foreground)]">
                    ${(fund.totalAumUsd / 1_000_000_000).toFixed(2)}B
                  </td>

                  <td className="py-3.5 px-3.5 text-right font-mono font-bold text-xs">
                    {isNeutral ? (
                      <span className="text-[var(--card-muted)]">$0.00 (Nötr)</span>
                    ) : (
                      <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 ${
                        isPositive ? 'bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
                      }`}>
                        {isPositive ? '+' : '-'}${Math.abs(fund.netFlowUsd24h / 1_000_000).toFixed(1)}M
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ETF Reference Footnote (B-02) */}
      <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-2 text-[11px] text-[var(--card-muted)]">
        <div className="flex items-center gap-1.5">
          <Info className="h-3.5 w-3.5 text-[#2962FF]" />
          <span>Kaynak: <strong>SEC Kamu İhraç Bildirimleri & Farside / Sosovalue</strong> (Kurumsal Fon Bilançoları)</span>
        </div>
        <span className="italic text-[10px]">Veri Tipi: Piyasa Referans Verisi (Periyodik Fon Raporları Konsolidasyonu).</span>
      </div>
    </div>
  );
}
