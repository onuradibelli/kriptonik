'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import LiquidationHeatmap from './LiquidationHeatmap';
import { Flame, ArrowRight, Search, Layers, HelpCircle, ArrowUpRight } from 'lucide-react';

interface LiquidationHubClientProps {
  coins: CoinData[];
}

export default function LiquidationHubClient({ coins }: LiquidationHubClientProps) {
  const [selectedSlug, setSelectedSlug] = useState('bitcoin');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const selectedCoin = coins.find((c) => c.slug === selectedSlug) || coins[0];

  const filteredCoins = useMemo(() => {
    if (!searchQuery.trim()) return coins;
    const q = searchQuery.toLowerCase().trim();
    return coins.filter((c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q));
  }, [coins, searchQuery]);

  // Featured top coins for quick tabs
  const prioritySlugs = ['bitcoin', 'ethereum', 'solana', 'binancecoin', 'ripple', 'dogecoin', 'sui', 'near', 'pepe', 'bittensor', 'avalanche-2', 'chainlink'];
  const priorityCoins = prioritySlugs.map((s) => coins.find((c) => c.slug === s)).filter(Boolean) as CoinData[];

  return (
    <div className="space-y-8">
      {/* Search & Quick Chips Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Quick Priority Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {priorityCoins.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedSlug(c.slug)}
              className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedSlug === c.slug
                  ? 'bg-[#FF3B56] text-white shadow-md shadow-[#FF3B56]/20'
                  : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
              }`}
            >
              <span>{c.symbol}</span>
              <span className="text-[10px] opacity-80">${(c.totalLiquidation24hUsd / 1_000_000).toFixed(0)}M</span>
            </button>
          ))}
        </div>

        {/* Search for any coin */}
        <div className="relative w-full sm:w-60 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--card-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Coin ara..."
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-8 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder:text-[var(--card-muted)] focus:border-[#FF3B56] focus:outline-none"
          />
        </div>
      </div>

      {/* Featured Heatmap */}
      <LiquidationHeatmap coin={selectedCoin} />

      {/* Grid of All Coins for Direct Navigation */}
      <div className="panel-card p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
          <div>
            <h2 className="text-base font-bold text-[var(--foreground)]">
              Tüm Kripto Varlıklar İçin Tasfiye Kümeleri ({filteredCoins.length})
            </h2>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              Coinglass modelinde hesaplanan 10x - 100x kaldıraç likidasyon duvarları ve açık pozisyon tasfiye haritaları.
            </p>
          </div>

          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setVisibleCount(24)}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                visibleCount === 24 ? 'bg-[#FF3B56] text-white' : 'text-[var(--card-muted)] border border-[var(--border)]'
              }`}
            >
              24 Kart
            </button>
            <button
              onClick={() => setVisibleCount(coins.length)}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                visibleCount === coins.length ? 'bg-[#FF3B56] text-white' : 'text-[var(--card-muted)] border border-[var(--border)]'
              }`}
            >
              Tüm 60+
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCoins.slice(0, visibleCount).map((coin) => (
            <Link
              key={coin.id}
              href={`/likidasyon/${coin.slug}/`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#FF3B56] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--foreground)]">
                      {coin.symbol}
                    </span>
                    <span className="font-bold text-[var(--foreground)] group-hover:text-[#FF3B56] transition-colors truncate max-w-[110px]">
                      {coin.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--foreground)]">
                    ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>24s Toplam Tasfiye:</span>
                    <strong className="text-[var(--foreground)]">${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M</strong>
                  </div>
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>Dominant Seviye:</span>
                    <strong className="text-[#2962FF]">${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}</strong>
                  </div>
                  <div className="flex justify-between text-[var(--card-muted)]">
                    <span>Tasfiye Yönü:</span>
                    <strong className={coin.dominantSide === 'SHORT' ? 'text-[#FF3B56]' : 'text-[#00E699]'}>
                      %{coin.shortPercentage} Short
                    </strong>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs font-semibold text-[#FF3B56] flex items-center justify-between">
                <span>Derinlik Haritasını Aç</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filteredCoins.length && (
          <div className="text-center pt-2">
            <button
              onClick={() => setVisibleCount(coins.length)}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-2.5 text-xs font-bold text-[var(--foreground)] hover:border-[#FF3B56] hover:text-[#FF3B56] transition-all cursor-pointer"
            >
              Kalan {filteredCoins.length - visibleCount} Varlığın Likidasyon Haritasını Göster ↓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
