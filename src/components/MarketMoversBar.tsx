'use client';

import React from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { TrendingUp, TrendingDown, Flame, ArrowUpRight, BarChart2 } from 'lucide-react';

interface MarketMoversBarProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

export default function MarketMoversBar({ coins, tickers }: MarketMoversBarProps) {
  // Map coins with their live ticker values
  const coinsWithLive = coins.map((c) => {
    const tick = tickers[c.binanceSymbol];
    const livePrice = tick?.price || c.price;
    const liveChange = tick?.change24h !== undefined ? tick.change24h : c.change24h;
    return {
      ...c,
      price: livePrice,
      change24h: liveChange,
      flash: tick?.flashDirection
    };
  });

  // Top 3 Gainers
  const topGainers = [...coinsWithLive].sort((a, b) => b.change24h - a.change24h).slice(0, 3);

  // Top 3 Losers
  const topLosers = [...coinsWithLive].sort((a, b) => a.change24h - b.change24h).slice(0, 3);

  // Top 3 Volume Leaders
  const volumeLeaders = [...coinsWithLive].sort((a, b) => b.volume24hUsd - a.volume24hUsd).slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Top Gainers */}
      <div className="panel-card p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#00E699]/15 text-[#00E699]">
              <TrendingUp className="h-3.5 w-3.5" />
            </div>
            <h3 className="text-xs font-black text-[var(--foreground)] uppercase tracking-wider">
              En Çok Yükselenler (24s)
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#00E699]">BOĞA LİDERLERİ</span>
        </div>

        <div className="space-y-2">
          {topGainers.map((c, idx) => (
            <Link
              key={c.id}
              href={`/kripto/${c.slug}/`}
              className="flex items-center justify-between rounded-xl p-2 hover:bg-[var(--card-subtle)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[var(--card-muted)] w-4">
                  #{idx + 1}
                </span>
                <div>
                  <div className="font-bold text-xs text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                    {c.name}
                  </div>
                  <div className="text-[10px] text-[var(--card-muted)] font-mono">{c.symbol}</div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-xs font-bold text-[var(--foreground)]">
                  ${c.price > 10 ? c.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : c.price.toFixed(4)}
                </div>
                <div className="text-[11px] font-bold text-[#00E699]">
                  +{c.change24h.toFixed(2)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Top Losers */}
      <div className="panel-card p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FF3B56]/15 text-[#FF3B56]">
              <TrendingDown className="h-3.5 w-3.5" />
            </div>
            <h3 className="text-xs font-black text-[var(--foreground)] uppercase tracking-wider">
              En Çok Düşenler (24s)
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#FF3B56]">FIRSAT / DÜZELTME</span>
        </div>

        <div className="space-y-2">
          {topLosers.map((c, idx) => (
            <Link
              key={c.id}
              href={`/kripto/${c.slug}/`}
              className="flex items-center justify-between rounded-xl p-2 hover:bg-[var(--card-subtle)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[var(--card-muted)] w-4">
                  #{idx + 1}
                </span>
                <div>
                  <div className="font-bold text-xs text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                    {c.name}
                  </div>
                  <div className="text-[10px] text-[var(--card-muted)] font-mono">{c.symbol}</div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-xs font-bold text-[var(--foreground)]">
                  ${c.price > 10 ? c.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : c.price.toFixed(4)}
                </div>
                <div className="text-[11px] font-bold text-[#FF3B56]">
                  {c.change24h.toFixed(2)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Top Volume Leaders */}
      <div className="panel-card p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
              <Flame className="h-3.5 w-3.5" />
            </div>
            <h3 className="text-xs font-black text-[var(--foreground)] uppercase tracking-wider">
              24s Hacim Liderleri
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#2962FF]">LİKİDİTE DERİNLİĞİ</span>
        </div>

        <div className="space-y-2">
          {volumeLeaders.map((c, idx) => (
            <Link
              key={c.id}
              href={`/kripto/${c.slug}/`}
              className="flex items-center justify-between rounded-xl p-2 hover:bg-[var(--card-subtle)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[var(--card-muted)] w-4">
                  #{idx + 1}
                </span>
                <div>
                  <div className="font-bold text-xs text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
                    {c.name}
                  </div>
                  <div className="text-[10px] text-[var(--card-muted)] font-mono">{c.symbol}</div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-xs font-bold text-[var(--foreground)]">
                  ${(c.volume24hUsd / 1_000_000_000).toFixed(2)}B USD
                </div>
                <div className={`text-[11px] font-bold ${c.change24h >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {c.change24h >= 0 ? '+' : ''}{c.change24h.toFixed(2)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
