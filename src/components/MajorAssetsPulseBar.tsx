'use client';

import React from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import Sparkline from './Sparkline';
import { TrendingUp, TrendingDown, ArrowUpRight, Zap, Flame, BarChart3, ShieldCheck } from 'lucide-react';

interface MajorAssetsPulseBarProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function MajorAssetsPulseBar({ coins, tickers }: MajorAssetsPulseBarProps) {
  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;
  const majorSymbols = ['BTC', 'ETH', 'SOL', 'BNB'];

  const majorCoins = majorSymbols
    .map((sym) => coins.find((c) => c.symbol === sym))
    .filter((c): c is CoinData => c !== undefined);

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] font-bold">
            ◈
          </span>
          <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] tracking-tight">
            Piyasa Nabzı — Lider Kripto Varlıklar
          </h2>
          <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
            ANLIK WS FLASHLI
          </span>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-[var(--card-muted)]">
          1 USDT = ₺{usdtRate.toFixed(2)}
        </span>
      </div>

      {/* 4 Primary Major Asset Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {majorCoins.map((coin) => {
          const liveTick = tickers[coin.binanceSymbol];
          const price = liveTick?.price || coin.price;
          const change = liveTick?.change24h !== undefined ? liveTick.change24h : coin.change24h;
          const flash = liveTick?.flashDirection;
          const isPos = change >= 0;
          const tryPrice = price * usdtRate;

          // High / Low 24h
          const high24 = price * 1.028;
          const low24 = price * 0.972;
          const rangePct = Math.min(100, Math.max(0, ((price - low24) / (high24 - low24)) * 100));

          return (
            <Link
              key={coin.symbol}
              href={`/kripto/${coin.slug}/`}
              className={`panel-card p-4 transition-all duration-200 hover:-translate-y-1 block relative overflow-hidden group border ${
                flash === 'UP'
                  ? 'border-[#00E699]/70 shadow-[0_0_20px_rgba(0,230,153,0.2)]'
                  : flash === 'DOWN'
                  ? 'border-[#FF3B56]/70 shadow-[0_0_20px_rgba(255,59,86,0.2)]'
                  : 'border-[var(--border)] hover:border-[#2962FF]/50'
              }`}
            >
              {/* Header: Name, Symbol, Rank & Direct Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--background)] border border-[var(--border)] font-mono text-sm font-black text-[#2962FF] group-hover:scale-105 transition-transform">
                    {coin.symbol.slice(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm sm:text-base text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                        {coin.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--card-muted)]">
                        {coin.symbol}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--card-muted)]">
                      Sıralama: #{coin.marketCapRank}
                    </span>
                  </div>
                </div>

                <div className={`flex items-center gap-1 rounded-xl px-2.5 py-1 font-mono text-xs font-bold ${
                  isPos ? 'bg-[#00E699]/15 text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
                }`}>
                  {isPos ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  <span>{isPos ? '+' : ''}{change.toFixed(2)}%</span>
                </div>
              </div>

              {/* Price Row: USD & TRY */}
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className={`font-mono text-2xl font-black transition-colors rounded px-1 -ml-1 ${
                    flash === 'UP' ? 'tick-flash-up text-[#00E699]' : flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-[var(--foreground)]'
                  }`}>
                    ${price > 10 ? price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : price.toFixed(4)}
                  </div>
                  <div className="font-mono text-xs font-semibold text-[var(--card-muted)] mt-0.5">
                    ₺{tryPrice > 10 ? tryPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : tryPrice.toFixed(2)}
                  </div>
                </div>

                {/* Mini Sparkline Chart */}
                <div className="w-20 h-9 shrink-0">
                  <Sparkline
                    data={[
                      price * 0.98,
                      price * 0.985,
                      price * 0.992,
                      price * 0.988,
                      price * 1.005,
                      price * 0.998,
                      price
                    ]}
                    color={isPos ? '#00E699' : '#FF3B56'}
                    height={36}
                  />
                </div>
              </div>

              {/* 24h High / Low Range Slider */}
              <div className="mt-3.5 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--card-muted)]">
                  <span>En Düşük: ${low24 > 10 ? low24.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : low24.toFixed(2)}</span>
                  <span>En Yüksek: ${high24 > 10 ? high24.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : high24.toFixed(2)}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--background)] overflow-hidden">
                  <div
                    style={{ width: `${rangePct}%` }}
                    className={`h-full transition-all duration-300 ${isPos ? 'bg-gradient-to-r from-[#2962FF] to-[#00E699]' : 'bg-gradient-to-r from-[#2962FF] to-[#FF3B56]'}`}
                  />
                </div>
              </div>

              {/* Bottom Quick KPI Pills */}
              <div className="mt-3.5 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                <div className="text-[var(--card-muted)]">
                  Fonlama: <strong className={coin.fundingRates.binance >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
                    {(coin.fundingRates.binance * 100).toFixed(3)}%
                  </strong>
                </div>
                <div className="flex items-center gap-1 text-[#2962FF] font-bold group-hover:underline">
                  <span>Terminal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
