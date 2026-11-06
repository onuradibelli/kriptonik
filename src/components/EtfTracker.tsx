'use client';

import React, { useState } from 'react';
import { BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY } from '../lib/data';
import { BarChart3, TrendingUp, TrendingDown, Building, ShieldCheck, DollarSign, Layers, PieChart, Sparkles } from 'lucide-react';

export default function EtfTracker() {
  const [selectedAsset, setSelectedAsset] = useState<'BTC' | 'ETH'>('BTC');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const summary = selectedAsset === 'BTC' ? BITCOIN_ETF_SUMMARY : ETHEREUM_ETF_SUMMARY;
  const isPositiveFlow = summary.lastDayNetFlowUsd >= 0;

  // Combined day summary metrics (BTC + ETH)
  const btcLastDay = BITCOIN_ETF_SUMMARY.lastDayNetFlowUsd;
  const ethLastDay = ETHEREUM_ETF_SUMMARY.lastDayNetFlowUsd;
  const combinedTotalDay = btcLastDay + ethLastDay;
  const totalCombinedAum = BITCOIN_ETF_SUMMARY.totalAumUsd + ETHEREUM_ETF_SUMMARY.totalAumUsd;

  // Chart calculations
  const maxFlowAbs = Math.max(...summary.recentDailyFlows.map((f) => Math.abs(f.netInflowUsd)), 100);

  return (
    <div className="panel-card p-5 space-y-6">
      {/* 1. Global Daily ETF Market Brief (Günün Toplam Kurumsal ETF Özeti) */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--subtle)] p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/20">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-[var(--foreground)] flex items-center gap-2">
                <span>Günün Kurumsal ETF Özeti (Bitcoin + Ethereum)</span>
                <span className="rounded bg-[#00C087]/15 text-[#00C087] px-2 py-0.5 text-[9px] font-mono font-bold">
                  KONSOLİDE PİYASA RAPORU
                </span>
              </h2>
            </div>
          </div>
          <div className="text-[11px] font-mono text-[var(--card-muted)]">
            Son İşlem Seansı: <strong className="text-[var(--foreground)]">5-6 Kasım 2026</strong>
          </div>
        </div>

        {/* 4 Summary Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="text-[11px] text-[var(--card-muted)]">Toplam Günlük Net Giriş</div>
            <div className="mt-1 font-mono text-lg font-black text-[#00C087] flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              +${(combinedTotalDay / 1_000_000).toFixed(1)}M
            </div>
            <div className="text-[10px] text-[var(--card-muted)] mt-0.5">BTC + ETH konsolide</div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="text-[11px] text-[var(--card-muted)]">Bitcoin ETF Net Girişi</div>
            <div className="mt-1 font-mono text-lg font-black text-[#2962FF]">
              +${(btcLastDay / 1_000_000).toFixed(1)}M
            </div>
            <div className="text-[10px] text-[var(--card-muted)] mt-0.5">%86.5 Pay</div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="text-[11px] text-[var(--card-muted)]">Ethereum ETF Net Girişi</div>
            <div className="mt-1 font-mono text-lg font-black text-[#00C087]">
              +${(ethLastDay / 1_000_000).toFixed(1)}M
            </div>
            <div className="text-[10px] text-[var(--card-muted)] mt-0.5">%13.5 Pay</div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="text-[11px] text-[var(--card-muted)]">Yönetilen Toplam AUM</div>
            <div className="mt-1 font-mono text-lg font-black text-[var(--foreground)]">
              ${(totalCombinedAum / 1_000_000_000).toFixed(2)}B
            </div>
            <div className="text-[10px] text-[#00C087] mt-0.5">Tüm kurumsal kasalar</div>
          </div>
        </div>

        {/* Visual Share Flow Progress Bar */}
        <div className="space-y-1 pt-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--card-muted)]">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#2962FF]" /> Bitcoin Spot ETF (%86.5)
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#00C087]" /> Ethereum Spot ETF (%13.5)
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
            <div style={{ width: '86.5%' }} className="bg-[#2962FF] h-full" />
            <div style={{ width: '13.5%' }} className="bg-[#00C087] h-full" />
          </div>
        </div>
      </div>

      {/* 2. Asset Selector Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <BarChart3 className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>Spot {summary.assetName} Kurumsal Akış Grafiği</span>
            </h3>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            BlackRock (IBIT), Fidelity (FBTC) ve Grayscale gibi ihraççıların günlük net fon giriş/çıkışları.
          </p>
        </div>

        {/* BTC / ETH Toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
          <button
            onClick={() => setSelectedAsset('BTC')}
            className={`rounded px-3 py-1 font-bold transition-all ${
              selectedAsset === 'BTC' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Bitcoin Spot ETF
          </button>
          <button
            onClick={() => setSelectedAsset('ETH')}
            className={`rounded px-3 py-1 font-bold transition-all ${
              selectedAsset === 'ETH' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            Ethereum Spot ETF
          </button>
        </div>
      </div>

      {/* 3. Real Graphical Daily Net Flow Bar Chart (SVG Visual Histogram) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-[var(--card-muted)]">
          <span>Son 10 İşlem Günü Net Akış Histogramı ($ Milyon USD)</span>
          <span className="font-mono text-[11px]">
            Yeşil = Net Giriş (Alım) • Kırmızı = Net Çıkış (Satış)
          </span>
        </div>

        {/* SVG / Canvas Flow Bars */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <div className="h-44 w-full flex items-end justify-between gap-2 pt-6 pb-2 relative">
            {/* Zero Baseline Line */}
            <div className="absolute left-0 right-0 top-1/2 border-b border-dashed border-[var(--border)] z-0" />

            {summary.recentDailyFlows.map((flow, i) => {
              const isPos = flow.netInflowUsd >= 0;
              const absVal = Math.abs(flow.netInflowUsd);
              // Max height from baseline is 75px
              const barHeight = Math.max(12, Math.round((absVal / maxFlowAbs) * 70));
              const isHovered = hoveredBar === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                  className="relative flex-1 flex flex-col items-center h-full justify-center group cursor-pointer"
                >
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute -top-7 z-30 rounded bg-[var(--foreground)] text-[var(--background)] px-2 py-0.5 text-[10px] font-mono font-bold whitespace-nowrap shadow-lg">
                      {flow.date}: {isPos ? '+' : ''}{flow.netInflowUsd.toFixed(1)}M USD (${flow.btcPriceAtDate.toLocaleString('tr-TR')})
                    </div>
                  )}

                  <div className="w-full flex flex-col items-center justify-center relative z-10 h-full">
                    {isPos ? (
                      // Upward Bar
                      <div className="w-full flex flex-col items-center justify-end h-1/2">
                        <span className="text-[9px] font-mono font-bold text-[#00C087] mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          +{flow.netInflowUsd.toFixed(0)}M
                        </span>
                        <div
                          style={{ height: `${barHeight}px` }}
                          className={`w-full max-w-[28px] rounded-t bg-gradient-to-t from-[#00C087]/80 to-[#00C087] transition-all ${
                            isHovered ? 'scale-105 shadow-md shadow-[#00C087]/40' : ''
                          }`}
                        />
                      </div>
                    ) : (
                      // Downward Bar
                      <div className="w-full flex flex-col items-center justify-start h-1/2 mt-auto">
                        <div
                          style={{ height: `${barHeight}px` }}
                          className={`w-full max-w-[28px] rounded-b bg-gradient-to-b from-[#F6465D]/80 to-[#F6465D] transition-all ${
                            isHovered ? 'scale-105 shadow-md shadow-[#F6465D]/40' : ''
                          }`}
                        />
                        <span className="text-[9px] font-mono font-bold text-[#F6465D] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {flow.netInflowUsd.toFixed(0)}M
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Date Label */}
                  <span className="text-[10px] font-mono text-[var(--card-muted)] mt-1 truncate">
                    {flow.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Individual ETF Funds Table */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono text-[var(--card-muted)] uppercase tracking-wider font-bold">
          İhraççı Bazında Fon Dağılımı ve Yönetim Ücretleri
        </h4>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--subtle)] text-[11px] text-[var(--card-muted)]">
                <th className="py-2.5 px-3.5">Ticker / Fon Adı</th>
                <th className="py-2.5 px-3.5">İhraççı Kuruluş</th>
                <th className="py-2.5 px-3.5">Son Gün Net Akış</th>
                <th className="py-2.5 px-3.5">Toplam AUM</th>
                <th className="py-2.5 px-3.5">Yönetim Ücreti</th>
                <th className="py-2.5 px-3.5 text-right">Rezerv Miktarı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
              {summary.funds.map((fund) => {
                const isPos = fund.netFlowUsd24h >= 0;
                return (
                  <tr key={fund.ticker} className="hover:bg-[var(--hover-bg)] transition-colors">
                    <td className="py-3 px-3.5">
                      <div className="font-bold text-[var(--foreground)] text-sm">{fund.ticker}</div>
                      <div className="text-[10px] text-[var(--card-muted)] font-sans">{fund.fundName}</div>
                    </td>
                    <td className="py-3 px-3.5 text-[var(--foreground)] font-sans font-medium">
                      {fund.issuer}
                    </td>
                    <td className="py-3 px-3.5">
                      <span className={`inline-block px-2 py-0.5 rounded font-bold ${isPos ? 'badge-bull' : 'badge-bear'}`}>
                        {isPos ? '+' : ''}${(fund.netFlowUsd24h / 1_000_000).toFixed(1)}M
                      </span>
                    </td>
                    <td className="py-3 px-3.5 font-bold text-[var(--foreground)]">
                      ${(fund.totalAumUsd / 1_000_000_000).toFixed(2)}B
                    </td>
                    <td className="py-3 px-3.5 text-[var(--card-muted)]">
                      %{fund.feePercent.toFixed(2)}
                    </td>
                    <td className="py-3 px-3.5 text-right font-bold text-[var(--foreground)]">
                      {fund.holdingsCoins.toLocaleString('tr-TR')} {selectedAsset}
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
