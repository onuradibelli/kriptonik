'use client';

import React, { useState } from 'react';
import { CoinData } from '../../lib/types';
import { useBinanceTickers } from '../../lib/useBinanceTickers';
import CryptoMarketHeatmapGrid from '../../components/CryptoMarketHeatmapGrid';
import MarketMoversBar from '../../components/MarketMoversBar';
import { Flame, Layers, Sparkles, Filter } from 'lucide-react';

interface MarketHeatmapPageClientProps {
  coins: CoinData[];
}

export default function MarketHeatmapPageClient({ coins }: MarketHeatmapPageClientProps) {
  const defaultTickers = {
    BTCUSDT: { price: 75728.00, change24h: -0.11 },
    ETHUSDT: { price: 2227.60, change24h: -0.85 },
    SOLUSDT: { price: 90.50, change24h: 0.85 },
    BNBUSDT: { price: 695.50, change24h: 1.04 },
    XRPUSDT: { price: 1.185, change24h: -4.63 },
    DOGEUSDT: { price: 0.0729, change24h: 1.87 },
    SUIUSDT: { price: 0.871, change24h: 2.85 }
  };

  const { tickers } = useBinanceTickers(defaultTickers);
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'layer-1' | 'defi' | 'ai' | 'meme'>('ALL');

  const filteredCoins = selectedCategory === 'ALL'
    ? coins
    : coins.filter((c) => {
        const cat = (c.category || '').toLowerCase();
        if (selectedCategory === 'layer-1') return cat.includes('katman');
        if (selectedCategory === 'defi') return cat.includes('defi');
        if (selectedCategory === 'ai') return cat.includes('yapay') || cat.includes('ai');
        if (selectedCategory === 'meme') return cat.includes('meme');
        return true;
      });

  return (
    <div className="space-y-6">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--card)] border border-[var(--border)] p-3 rounded-2xl">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: 'ALL', label: `Tüm Varlıklar (${coins.length})` },
            { id: 'layer-1', label: '⛓️ Katman 1 (L1)' },
            { id: 'defi', label: '🏦 DeFi & DEX' },
            { id: 'ai', label: '🤖 Yapay Zeka (AI)' },
            { id: 'meme', label: '🐸 Meme Coinler' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-[var(--card-muted)] hidden sm:block">
          Gösterilen: <strong className="text-[var(--foreground)]">{filteredCoins.length} Varlık</strong>
        </div>
      </div>

      {/* Main Heatmap Grid with Translucent Colors */}
      <CryptoMarketHeatmapGrid coins={filteredCoins} tickers={tickers} />

      {/* 24s Market Movers (Top Gainers, Losers, Volume Leaders) */}
      <div className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
          <Flame className="h-4.5 w-4.5 text-[#FF8A00]" />
          <span>24 Saatlik Piyasa Kutuplaşması (En Çok Kazandıranlar & Düşenler)</span>
        </h2>
        <MarketMoversBar coins={coins} tickers={tickers} />
      </div>
    </div>
  );
}
