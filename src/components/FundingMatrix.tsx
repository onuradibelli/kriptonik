'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { DollarSign, Search, ArrowUpDown, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

interface FundingMatrixProps {
  coins: CoinData[];
}

export default function FundingMatrix({ coins }: FundingMatrixProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<'binance' | 'volume' | 'spread'>('spread');
  const [sortDesc, setSortDesc] = useState(true);

  const filteredCoins = coins.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <DollarSign className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>Borsalar Arası Canlı Fonlama Isı Tablosu</span>
              <span className="rounded bg-[#00C087]/15 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">
                ARBITRAJ RADARI
              </span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Binance, Bybit ve OKX fonlama oranları (8 saatlik) ve borsalar arası risksiz delta-nötr arbitraj marjları.
          </p>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[var(--card-muted)]" />
            <input
              type="text"
              placeholder="Coin ara (BTC, SOL...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-lg border border-[var(--border)] bg-[var(--background)] pl-8 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--card-muted)] outline-none focus:border-[#2962FF] w-48 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--subtle)] font-mono text-[11px] text-[var(--card-muted)]">
              <th className="py-2.5 px-3">Parite / Varlık</th>
              <th className="py-2.5 px-3">Spot Fiyat</th>
              <th
                className="py-2.5 px-3 cursor-pointer hover:text-[var(--foreground)]"
                onClick={() => {
                  if (sortKey === 'binance') setSortDesc(!sortDesc);
                  else { setSortKey('binance'); setSortDesc(true); }
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
                  else { setSortKey('spread'); setSortDesc(true); }
                }}
              >
                <div className="flex items-center gap-1">
                  <span>Maksimum Spread (Arbitraj)</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 text-right">Tahmini Yıllık APR</th>
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

              return (
                <tr key={coin.id} className="hover:bg-[var(--hover-bg)] transition-colors">
                  {/* Symbol */}
                  <td className="py-3 px-3">
                    <Link href={`/fonlama-oranlari/${coin.slug}/`} className="flex items-center gap-2 group">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--border)] font-bold text-[10px] text-[var(--foreground)]">
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
                        <span className="flex items-center gap-0.5 rounded bg-[#F2C14E]/20 text-[#D97706] dark:text-[#F2C14E] px-1.5 py-0.2 text-[9px] font-bold">
                          <Zap className="h-2.5 w-2.5" /> FIRSAT
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Annualized APR */}
                  <td className="py-3 px-3 text-right">
                    <span className={`font-bold ${isArbitrageHot ? 'text-[#00C087]' : 'text-[var(--card-muted)]'}`}>
                      %{annualizedApr.toFixed(1)} APR
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)] pt-1">
        <span>* Fonlama oranları her 8 saatte bir (03:00, 11:00, 19:00 UTC) takas edilir.</span>
        <Link href="/fonlama-oranlari/" className="text-[#2962FF] hover:underline flex items-center gap-1 font-semibold">
          Tüm Fonlama Analizleri <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
