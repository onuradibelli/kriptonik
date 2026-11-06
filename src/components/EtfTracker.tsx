'use client';

import React, { useState } from 'react';
import { BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY } from '../lib/data';
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
  Search
} from 'lucide-react';

export default function EtfTracker() {
  const [selectedAsset, setSelectedAsset] = useState<'BTC' | 'ETH' | 'ALL'>('BTC');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const btcSummary = BITCOIN_ETF_SUMMARY;
  const ethSummary = ETHEREUM_ETF_SUMMARY;

  const totalCombinedAum = btcSummary.totalAumUsd + ethSummary.totalAumUsd;
  const combinedTotalDay = btcSummary.lastDayNetFlowUsd + ethSummary.lastDayNetFlowUsd;
  const totalCumulativeInflow = btcSummary.cumulativeNetInflowUsd + ethSummary.cumulativeNetInflowUsd;

  const currentSummary = selectedAsset === 'ETH' ? ethSummary : btcSummary;

  // Funds to display based on tab
  const displayedFunds =
    selectedAsset === 'ALL'
      ? [
          ...btcSummary.funds.map((f) => ({ ...f, asset: 'BTC' })),
          ...ethSummary.funds.map((f) => ({ ...f, asset: 'ETH' }))
        ]
      : currentSummary.funds.map((f) => ({ ...f, asset: selectedAsset }));

  const filteredFunds = displayedFunds.filter(
    (f) =>
      f.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.fundName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const maxFlowAbs = Math.max(...currentSummary.recentDailyFlows.map((f) => Math.abs(f.netInflowUsd)), 100);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-6">
      {/* 1. Coinglass Standard Top KPI Metric Cards */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
              🏛️
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Spot Kripto ETF Dashboard</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold">
                  COINGLASS & SOSOVALUE MODELİ
                </span>
              </h2>
              <p className="text-xs text-[var(--card-muted)] mt-0.5">
                ABD Menkul Kıymetler Komisyonu (SEC) onaylı kurumsal Bitcoin ve Ethereum fonlarının anlık rezerv ve net para akışları.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--card-muted)] bg-[var(--background)] px-3 py-1.5 rounded-xl border border-[var(--border)]">
            <Calendar className="h-3.5 w-3.5 text-[#2962FF]" />
            <span>Son Seans Akışı: <strong>5-6 Kasım 2026</strong></span>
          </div>
        </div>

        {/* 4 Primary High-Impact KPI Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* KPI 1: 1D Total Net Inflow */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Toplam 1G Net Akış (SoSoValue)</div>
            <div className={`font-mono text-xl sm:text-2xl font-black flex items-center gap-1.5 ${
              combinedTotalDay >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'
            }`}>
              {combinedTotalDay >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
              <span>{combinedTotalDay >= 0 ? '+' : '-'}${Math.abs(combinedTotalDay / 1_000_000).toFixed(1)}M</span>
            </div>
            <div className="text-xs text-[var(--card-muted)] font-mono">
              BTC: -${Math.abs(btcSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M | ETH: -${Math.abs(ethSummary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
            </div>
          </div>

          {/* KPI 2: Total Cumulative Inflow */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Toplam Kümülatif Giriş</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#00E699]">
              +${(totalCumulativeInflow / 1_000_000_000).toFixed(2)}B
            </div>
            <div className="text-xs text-[var(--card-muted)] font-mono">
              Ocak 2024 Lansmanından Bu Yana
            </div>
          </div>

          {/* KPI 3: Total AUM Under Management */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">Toplam Yönetilen AUM</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[var(--foreground)]">
              ${(totalCombinedAum / 1_000_000_000).toFixed(2)}B
            </div>
            <div className="text-xs text-[#2962FF] font-mono font-bold">
              BTC: %87.2 | ETH: %12.8 Pay
            </div>
          </div>

          {/* KPI 4: 24h Estimated Trading Volume */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)] font-medium">24s ETF İşlem Hacmi</div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[var(--foreground)]">
              $3.84B
            </div>
            <div className="text-xs text-[#00E699] font-mono">
              IBIT & FBTC Liderliğinde
            </div>
          </div>
        </div>
      </div>

      {/* 2. Asset View Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        {/* Asset Switcher Pills */}
        <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
          <button
            onClick={() => setSelectedAsset('BTC')}
            className={`rounded-lg px-3.5 py-1.5 font-bold transition-all cursor-pointer ${
              selectedAsset === 'BTC'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Bitcoin Spot ETF (11 Fon)
          </button>
          <button
            onClick={() => setSelectedAsset('ETH')}
            className={`rounded-lg px-3.5 py-1.5 font-bold transition-all cursor-pointer ${
              selectedAsset === 'ETH'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Ethereum Spot ETF (9 Fon)
          </button>
          <button
            onClick={() => setSelectedAsset('ALL')}
            className={`rounded-lg px-3.5 py-1.5 font-bold transition-all cursor-pointer ${
              selectedAsset === 'ALL'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Konsolide Tüm Fonlar
          </button>
        </div>

        {/* Search Input Filter */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--card-muted)]" />
          <input
            type="text"
            placeholder="Fon veya İhraççı Ara (IBIT, Fidelity)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-9 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] focus:outline-hidden focus:border-[#2962FF] font-sans"
          />
        </div>
      </div>

      {/* 3. Coinglass Daily Historical Inflow Bar Chart */}
      {selectedAsset !== 'ALL' && (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#2962FF]" />
              <span className="text-sm font-bold text-[var(--foreground)]">
                Son 10 İşlem Seansı Net Giriş / Çıkış Geçmişi ($Milyon)
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-xs bg-[#00E699]" />
                <span className="text-[var(--card-muted)]">Net Giriş</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-xs bg-[#FF3B56]" />
                <span className="text-[var(--card-muted)]">Net Çıkış (SoSoValue)</span>
              </span>
            </div>
          </div>

          {/* Dynamic SVG / CSS Bar Chart */}
          <div className="relative pt-6 pb-2">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 items-end h-40">
              {currentSummary.recentDailyFlows.slice().reverse().map((flow, idx) => {
                const isPositive = flow.netInflowUsd >= 0;
                const barHeightPercent = Math.max(14, Math.round((Math.abs(flow.netInflowUsd) / maxFlowAbs) * 100));
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
                      <div className="absolute -top-12 z-20 whitespace-nowrap rounded-lg bg-[#0C111C] border border-[#232E42] px-2.5 py-1 text-center shadow-xl font-mono text-xs text-white">
                        <div className="font-bold">{flow.date}</div>
                        <div className={isPositive ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
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

      {/* 4. Master Fund Issuer Breakdown Table (Coinglass Architecture) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-[var(--card-muted)]">
          <span className="flex items-center gap-1.5 text-sm font-bold text-[var(--foreground)]">
            <Building2 className="h-4 w-4 text-[#2962FF]" />
            <span>Kurumsal Fon Listesi ve İhraççı Detayları</span>
          </span>
          <span className="font-mono text-xs">
            {filteredFunds.length} Fon Listeleniyor
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card-subtle)] text-xs text-[var(--card-muted)] select-none">
                <th className="py-3 px-3.5 font-semibold">Fon Sembolü</th>
                <th className="py-3 px-3.5 font-semibold">İhraççı (Kurum)</th>
                <th className="py-3 px-3.5 font-semibold text-right">Günlük Net Akış</th>
                <th className="py-3 px-3.5 font-semibold text-right">Fon Büyüklüğü (AUM)</th>
                <th className="py-3 px-3.5 font-semibold text-right hidden md:table-cell">Rezerv Varlık</th>
                <th className="py-3 px-3.5 font-semibold text-right hidden sm:table-cell">Komisyon</th>
                <th className="py-3 px-3.5 font-semibold text-right">Piyasa Payı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
              {filteredFunds.map((fund) => {
                const isPos = fund.netFlowUsd24h >= 0;
                const flowMillion = (fund.netFlowUsd24h / 1_000_000).toFixed(1);
                const aumBillion = (fund.totalAumUsd / 1_000_000_000).toFixed(2);
                const marketShare = ((fund.totalAumUsd / totalCombinedAum) * 100).toFixed(1);

                return (
                  <tr
                    key={fund.ticker}
                    className="hover:bg-[var(--hover-bg)] transition-colors group text-xs"
                  >
                    {/* Ticker & Full Name */}
                    <td className="py-3.5 px-3.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg bg-[#2962FF]/15 text-[#2962FF] px-2 py-1 font-bold text-xs border border-[#2962FF]/25">
                          {fund.ticker}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors font-sans">
                            {fund.fundName}
                          </div>
                          <span className="text-[11px] text-[var(--card-muted)]">
                            {fund.asset} Spot ETF
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Issuer */}
                    <td className="py-3.5 px-3.5 text-sm text-[var(--foreground)] font-sans font-medium">
                      {fund.issuer}
                    </td>

                    {/* 1D Net Inflow */}
                    <td className="py-3.5 px-3.5 text-right font-bold text-sm">
                      <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 ${
                        isPos ? 'bg-[#00E699]/15 text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
                      }`}>
                        {isPos ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                        {isPos ? '+' : ''}${flowMillion}M
                      </span>
                    </td>

                    {/* Total AUM */}
                    <td className="py-3.5 px-3.5 text-right font-bold text-sm text-[var(--foreground)]">
                      ${aumBillion}B
                    </td>

                    {/* Holdings Coins */}
                    <td className="py-3.5 px-3.5 text-right text-xs text-[var(--card-muted)] hidden md:table-cell">
                      {fund.holdingsCoins.toLocaleString('tr-TR')} {fund.asset}
                    </td>

                    {/* Fee Percent */}
                    <td className="py-3.5 px-3.5 text-right text-xs text-[var(--card-muted)] hidden sm:table-cell">
                      %{fund.feePercent.toFixed(2)}
                    </td>

                    {/* Market Share Bar */}
                    <td className="py-3.5 px-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-[var(--background)] overflow-hidden hidden sm:block">
                          <div
                            style={{ width: `${Math.min(100, parseFloat(marketShare) * 2)}%` }}
                            className="h-full bg-[#2962FF]"
                          />
                        </div>
                        <span className="text-xs font-bold text-[var(--foreground)]">%{marketShare}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
