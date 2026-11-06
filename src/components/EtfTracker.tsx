'use client';

import React, { useState } from 'react';
import { BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY } from '../lib/data';
import { BarChart3, TrendingUp, TrendingDown, Building, ShieldCheck, DollarSign } from 'lucide-react';

export default function EtfTracker() {
  const [selectedAsset, setSelectedAsset] = useState<'BTC' | 'ETH'>('BTC');
  const summary = selectedAsset === 'BTC' ? BITCOIN_ETF_SUMMARY : ETHEREUM_ETF_SUMMARY;

  const isPositiveFlow = summary.lastDayNetFlowUsd >= 0;

  return (
    <div className="panel-card p-5 space-y-5">
      {/* Header and Asset Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <BarChart3 className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Spot {summary.assetName} Kurumsal Akışları (Net Inflows)</span>
              <span className="rounded bg-[#00C087]/20 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">GÜNLÜK VERİ</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#848E9C]">
            BlackRock (IBIT), Fidelity (FBTC), Grayscale ve diğer ihraççıların günlük net fon giriş/çıkışları ve toplam AUM rezervleri.
          </p>
        </div>

        {/* BTC / ETH Toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-[#222938] bg-[#0B0E14] p-1 font-mono text-xs">
          <button
            onClick={() => setSelectedAsset('BTC')}
            className={`rounded px-3 py-1 font-bold transition-colors ${
              selectedAsset === 'BTC' ? 'bg-[#2962FF] text-white shadow-sm' : 'text-[#848E9C] hover:text-white'
            }`}
          >
            Bitcoin Spot ETF
          </button>
          <button
            onClick={() => setSelectedAsset('ETH')}
            className={`rounded px-3 py-1 font-bold transition-colors ${
              selectedAsset === 'ETH' ? 'bg-[#2962FF] text-white shadow-sm' : 'text-[#848E9C] hover:text-white'
            }`}
          >
            Ethereum Spot ETF
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3.5">
          <div className="text-[11px] text-[#848E9C]">Son İşlem Günü Net Akış</div>
          <div className={`mt-1 font-mono text-xl font-bold flex items-center gap-1.5 ${isPositiveFlow ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {isPositiveFlow ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
            {isPositiveFlow ? '+' : ''}${(summary.lastDayNetFlowUsd / 1_000_000).toFixed(1)}M
          </div>
          <div className="text-[10px] text-[#848E9C] mt-0.5">Tüm ihraççılar kümülatif</div>
        </div>

        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3.5">
          <div className="text-[11px] text-[#848E9C]">Toplam Kümülatif Net Giriş</div>
          <div className="mt-1 font-mono text-xl font-bold text-[#2962FF]">
            ${(summary.cumulativeNetInflowUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="text-[10px] text-[#848E9C] mt-0.5">Lansmandan bu yana net sermaye</div>
        </div>

        <div className="rounded-lg border border-[#222938] bg-[#0D121A] p-3.5">
          <div className="text-[11px] text-[#848E9C]">Toplam Rezerv / AUM</div>
          <div className="mt-1 font-mono text-xl font-bold text-white">
            ${(summary.totalAumUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="text-[10px] text-[#00C087] mt-0.5">Yönetilen Toplam Varlık</div>
        </div>
      </div>

      {/* Recent Daily Flows Chart / Table */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono text-[#848E9C] uppercase tracking-wider font-semibold">
          Son 10 İşlem Günü Net Fon Akış Çizelgesi
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {summary.recentDailyFlows.map((flow, i) => {
            const isPos = flow.netInflowUsd >= 0;
            return (
              <div
                key={i}
                className="rounded-lg border border-[#222938] bg-[#0B0E14] p-2 text-center font-mono text-xs hover:border-[#334055] transition-colors"
              >
                <div className="text-[10px] text-[#848E9C]">{flow.date}</div>
                <div className={`text-xs font-bold mt-1 ${isPos ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {isPos ? '+' : ''}{flow.netInflowUsd.toFixed(1)}M
                </div>
                <div className="text-[9px] text-[#848E9C] mt-0.5">
                  ${flow.btcPriceAtDate.toLocaleString('tr-TR')}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual ETF Funds Table */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono text-[#848E9C] uppercase tracking-wider font-semibold">
          İhraççı Bazında Fon Dağılımı ve Yönetim Ücretleri
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#222938] text-[11px] text-[#848E9C]">
                <th className="py-2.5 px-3">Ticker / Fon Adı</th>
                <th className="py-2.5 px-3">İhraççı Kuruluş</th>
                <th className="py-2.5 px-3">Son Gün Net Akış</th>
                <th className="py-2.5 px-3">Toplam AUM</th>
                <th className="py-2.5 px-3">Yönetim Ücreti</th>
                <th className="py-2.5 px-3 text-right">Rezerv Miktarı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A212D]">
              {summary.funds.map((fund) => {
                const isPos = fund.netFlowUsd24h >= 0;
                return (
                  <tr key={fund.ticker} className="hover:bg-[#151A23]/80 transition-colors">
                    <td className="py-3 px-3">
                      <div className="font-bold text-white text-sm">{fund.ticker}</div>
                      <div className="text-[10px] text-[#848E9C] font-sans">{fund.fundName}</div>
                    </td>
                    <td className="py-3 px-3 text-[#CBD5E1] font-sans font-medium">
                      {fund.issuer}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`inline-block px-2 py-0.5 rounded font-bold ${isPos ? 'badge-bull' : 'badge-bear'}`}>
                        {isPos ? '+' : ''}${(fund.netFlowUsd24h / 1_000_000).toFixed(1)}M
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-white">
                      ${(fund.totalAumUsd / 1_000_000_000).toFixed(2)}B
                    </td>
                    <td className="py-3 px-3 text-[#848E9C]">
                      %{fund.feePercent.toFixed(2)}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-white">
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
