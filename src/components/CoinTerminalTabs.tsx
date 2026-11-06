'use client';

import React, { useState } from 'react';
import { CoinData } from '../lib/types';
import TradingViewChart from './TradingViewChart';
import LiquidationHeatmap from './LiquidationHeatmap';
import Link from 'next/link';
import { CandlestickChart, Flame, Calculator, Share2, Check, ArrowUpRight } from 'lucide-react';

interface CoinTerminalTabsProps {
  coin: CoinData;
}

export default function CoinTerminalTabs({ coin }: CoinTerminalTabsProps) {
  const [activeTab, setActiveTab] = useState<'chart' | 'heatmap'>('chart');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `🚨 ${coin.name} (${coin.symbol}) Canlı Terminal Fiyatı: $${coin.price.toLocaleString('tr-TR')}. Likidasyon ısı haritası ve türev göstergelerini incele: https://kriptonik.com/kripto/${coin.slug}/`;
    if (navigator.share) {
      navigator.share({
        title: `${coin.name} (${coin.symbol}) Kriptonik Analiz`,
        text,
        url: `https://kriptonik.com/kripto/${coin.slug}/`,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Tab Switcher & Quick Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Chart View Mode Tabs */}
        <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-1 text-xs">
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
              activeTab === 'chart'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            <CandlestickChart className="h-4 w-4" />
            <span>Teknik Grafik (TradingView)</span>
          </button>

          <button
            onClick={() => setActiveTab('heatmap')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
              activeTab === 'heatmap'
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            <Flame className="h-4 w-4 text-[#F6465D]" />
            <span>Likidasyon Isı Haritası</span>
          </button>
        </div>

        {/* Quick External Actions */}
        <div className="flex items-center gap-2">
          <Link
            href={`/hesaplayici/`}
            className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
          >
            <Calculator className="h-3.5 w-3.5 text-[#2962FF]" />
            <span className="hidden sm:inline">{coin.symbol}</span> Kaldıraç Hesapla
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
            title="Analizi Paylaş"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#00C087]" />
                <span className="text-[#00C087]">Kopyalandı!</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5 text-[var(--card-muted)]" />
                <span className="hidden sm:inline">Paylaş</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Render Active View */}
      {activeTab === 'chart' ? (
        <TradingViewChart
          symbol={coin.symbol}
          price={coin.price}
          change24h={coin.change24h}
          high24h={coin.high24h}
          low24h={coin.low24h}
        />
      ) : (
        <LiquidationHeatmap coin={coin} />
      )}
    </div>
  );
}
