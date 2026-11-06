'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { DollarSign, Search, ArrowUpDown, Zap, AlertTriangle } from 'lucide-react';

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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25">
              <DollarSign className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Borsalar Arası Canlı Fonlama Isı Tablosu</span>
              <span className="rounded bg-[#00C087]/20 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">ARBITRAJE RADARI</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#848E9C]">
            Binance, Bybit ve OKX fonlama oranları (8 saatlik periyot) ve borsalar arası spread / arbitraj pencereleri.
          </p>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[#848E9C]" />
            <input
              type="text"
              placeholder="Coin ara (BTC, SOL...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-lg border border-[#222938] bg-[#0B0E14] pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#848E9C] outline-none focus:border-[#2962FF] w-48"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[#222938] font-mono text-[11px] text-[#848E9C]">
              <th className="py-2.5 px-3">Parite / Varlık</th>
              <th className="py-2.5 px-3">Spot Fiyat</th>
              <th
                className="py-2.5 px-3 cursor-pointer hover:text-white"
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
                className="py-2.5 px-3 cursor-pointer hover:text-white"
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
          <tbody className="divide-y divide-[#1A212D] font-mono">
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
                <tr key={coin.id} className="hover:bg-[#151A23]/80 transition-colors">
                  {/* Symbol */}
                  <td className="py-3 px-3">
                    <Link href={`/fonlama-oranlari/${coin.slug}/`} className="flex items-center gap-2 group">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-[#222938] font-bold text-[10px] text-white">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-sans font-bold text-white group-hover:text-[#2962FF] transition-colors">
                          {coin.symbol}
                        </div>
                        <div className="text-[10px] text-[#848E9C] font-sans">{coin.name}</div>
                      </div>
                    </Link>
                  </td>

                  {/* Spot Price */}
                  <td className="py-3 px-3 text-white font-semibold">
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

                  {/* Arbitrage Spread */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-1.5">
                      {isArbitrageHot && (
                        <span className="flex h-2 w-2 rounded-full bg-[#00C087] pulse-bull" />
                      )}
                      <span className={`font-bold ${isArbitrageHot ? 'text-[#00C087]' : 'text-[#CBD5E1]'}`}>
                        %{(maxSpread * 100).toFixed(4)}
                      </span>
                      {isArbitrageHot && (
                        <span className="rounded bg-[#00C087]/15 px-1 py-0.2 text-[9px] font-bold text-[#00C087]">
                          FIRSAT
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Annual APR */}
                  <td className="py-3 px-3 text-right">
                    <span className={`font-bold text-xs ${isArbitrageHot ? 'text-[#00C087]' : 'text-[#848E9C]'}`}>
                      %{annualizedApr.toFixed(1)} APR
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-[#222938] pt-3 text-[11px] text-[#848E9C]">
        <div className="flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-[#00C087]" />
          <span>Yeşil fonlama = Long pozisyonlar Short pozisyonlara prim ödüyor (Piyasada boğa baskısı).</span>
        </div>
        <div>Sıradaki Fonlama: <strong className="text-white font-mono">04:12:35</strong></div>
      </div>
    </div>
  );
}
