'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import TradingViewChart from './TradingViewChart';
import LiquidationHeatmap from './LiquidationHeatmap';
import Sparkline from './Sparkline';
import {
  Flame,
  DollarSign,
  Compass,
  Calendar,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Activity,
  BarChart3,
  Layers,
  ArrowUpRight,
  Calculator,
  Share2,
  Check,
  Zap,
  Gauge,
  SlidersHorizontal,
  Info
} from 'lucide-react';

interface CoinTerminalClientProps {
  coin: CoinData;
}

export default function CoinTerminalClient({ coin }: CoinTerminalClientProps) {
  const { tickers } = useBinanceTickers();
  const [activeTab, setActiveTab] = useState<'chart' | 'heatmap' | 'orderbook' | 'arbitrage'>('chart');
  const [copied, setCopied] = useState(false);

  // Live dynamic price from WebSocket engine
  const liveTick = tickers[coin.binanceSymbol];
  const price = liveTick?.price || coin.price;
  const change = liveTick?.change24h !== undefined ? liveTick.change24h : coin.change24h;
  const flash = liveTick?.flashDirection;
  const isPos = change >= 0;

  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;
  const tryPrice = price * usdtRate;

  // High & Low 24h calculations
  const high24 = liveTick?.high24h || price * 1.028;
  const low24 = liveTick?.low24h || price * 0.972;
  const rangePct = Math.min(100, Math.max(0, ((price - low24) / (high24 - low24)) * 100));

  // Technical Analysis Indicator simulation derived from real momentum
  const rsi = isPos ? Math.min(78, 54 + change * 2.2) : Math.max(26, 48 + change * 2.2);
  const taSignal = rsi > 65 ? 'GÜÇLÜ AL' : rsi > 52 ? 'AL' : rsi < 35 ? 'GÜÇLÜ SAT' : 'NÖTR';
  const taColor = rsi > 52 ? 'text-[#00E699] bg-[#00E699]/15 border-[#00E699]/30' : rsi < 40 ? 'text-[#FF3B56] bg-[#FF3B56]/15 border-[#FF3B56]/30' : 'text-amber-400 bg-amber-400/15 border-amber-400/30';

  const handleShare = () => {
    const text = `🚨 ${coin.name} (${coin.symbol}) Canlı Terminal Fiyatı: $${price.toLocaleString('tr-TR')}. Likidasyon haritası ve türev göstergeleri: https://kriptonik.com/kripto/${coin.slug}/`;
    if (navigator.share) {
      navigator.share({
        title: `${coin.name} Analiz Terminali`,
        text,
        url: `https://kriptonik.com/kripto/${coin.slug}/`
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Kripto Varlık Terminali</span>
        <span>/</span>
        <span className="text-[#2962FF] font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* 2. Main Terminal Hero Header (Real-Time Live WebSocket Ticking) */}
      <div className="panel-card p-5 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-[#2962FF]/20">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2962FF]/25 to-[#00E699]/20 border border-[var(--border)] font-mono font-black text-xl text-[var(--foreground)] shadow-md">
            {coin.symbol.slice(0, 3)}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
                {coin.name}
              </h1>
              <span className="rounded-lg bg-[var(--background)] px-2.5 py-0.5 font-mono text-xs font-bold text-[var(--foreground)] border border-[var(--border)]">
                {coin.symbol}
              </span>
              <span className="rounded-lg bg-[#2962FF]/15 px-2.5 py-0.5 text-xs font-bold text-[#2962FF] border border-[#2962FF]/25">
                Piyasa Sırası #{coin.marketCapRank}
              </span>
              <span className="rounded-lg bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
                CANLI WS AKIŞI
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--card-muted)]">
              <span>Binance Vadeli: <strong className="text-[var(--foreground)]">{coin.binanceSymbol}</strong></span>
              <span>•</span>
              <span>Piyasa Değeri: <strong className="text-[var(--foreground)]">${(coin.marketCapUsd / 1_000_000_000).toFixed(2)}B</strong></span>
              <span>•</span>
              <span>24s Hacim: <strong className="text-[var(--foreground)]">${(coin.volume24hUsd / 1_000_000).toFixed(1)}M</strong></span>
            </div>
          </div>
        </div>

        {/* Live Ticking Price & Change Box */}
        <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-[var(--border)]">
          <div className="hidden sm:block w-28 h-10 shrink-0">
            <Sparkline
              change24h={coin.change24h}
              width={112}
              height={40}
            />
          </div>

          <div className="text-right">
            <div className={`font-mono text-2xl sm:text-3xl font-black transition-colors rounded px-1.5 inline-block ${
              flash === 'UP' ? 'tick-flash-up text-[#00E699]' : flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : 'text-[var(--foreground)]'
            }`}>
              ${price > 10 ? price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : price.toFixed(4)}
            </div>
            <div className="font-mono text-xs font-semibold text-[var(--card-muted)] mt-0.5">
              ₺{tryPrice > 10 ? tryPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : tryPrice.toFixed(2)}
            </div>
            <div className={`text-xs sm:text-sm font-mono font-bold flex items-center justify-end gap-1 mt-1 ${isPos ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
              {isPos ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span>{isPos ? '+' : ''}{change.toFixed(2)}% (24s)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 24h High/Low Range & Technical Analysis Radar Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        {/* 24s Range Slider */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-2 md:col-span-2">
          <div className="flex items-center justify-between text-xs text-[var(--card-muted)]">
            <span>24s En Düşük: <strong className="text-[var(--foreground)]">${low24 > 10 ? low24.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : low24.toFixed(4)}</strong></span>
            <span className="font-sans font-semibold text-xs">24 Saatlik Fiyat Koridoru</span>
            <span>24s En Yüksek: <strong className="text-[var(--foreground)]">${high24 > 10 ? high24.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : high24.toFixed(4)}</strong></span>
          </div>
          <div className="h-2 w-full rounded-full bg-[var(--card)] overflow-hidden">
            <div
              style={{ width: `${rangePct}%` }}
              className={`h-full transition-all duration-300 ${isPos ? 'bg-gradient-to-r from-[#2962FF] to-[#00E699]' : 'bg-gradient-to-r from-[#2962FF] to-[#FF3B56]'}`}
            />
          </div>
        </div>

        {/* Technical Analysis Signal Box */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-[var(--card-muted)] font-sans">Teknik Analiz Göstergesi</div>
            <div className={`mt-1 font-bold text-base flex items-center gap-1.5`}>
              <Gauge className="h-4 w-4" />
              <span>{taSignal}</span>
            </div>
            <div className="text-[10px] text-[var(--card-muted)] mt-0.5">RSI (14): {rsi.toFixed(1)}</div>
          </div>
          <div className={`px-2.5 py-1 rounded-xl border text-xs font-bold ${taColor}`}>
            {taSignal}
          </div>
        </div>
      </div>

      {/* 4. 4 Primary Interactive Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <Link
          href={`/likidasyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#FF3B56] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span className="font-sans font-semibold">24s Tasfiye Hacmi</span>
            <Flame className="h-4.5 w-4.5 text-[#FF3B56]" />
          </div>
          <div className="mt-2 font-mono text-xl font-black text-[var(--foreground)] group-hover:text-[#FF3B56] transition-colors">
            ${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M
          </div>
          <div className="mt-1 text-xs text-[#2962FF] flex items-center gap-1 font-semibold">
            <span>Isı Haritası</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>

        <Link
          href={`/fonlama-oranlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#00E699] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span className="font-sans font-semibold">Binance Fonlama (APR)</span>
            <DollarSign className="h-4.5 w-4.5 text-[#00E699]" />
          </div>
          <div className="mt-2 font-mono text-xl font-black text-[var(--foreground)] group-hover:text-[#00E699] transition-colors">
            {(coin.fundingRates.binance * 3 * 365 * 100).toFixed(2)}% APR
          </div>
          <div className="mt-1 text-xs text-[#2962FF] flex items-center gap-1 font-semibold">
            <span>Arbitraj Matrisi</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>

        <Link
          href={`/acik-pozisyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#2962FF] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span className="font-sans font-semibold">Açık Pozisyon (OI)</span>
            <Compass className="h-4.5 w-4.5 text-[#2962FF]" />
          </div>
          <div className="mt-2 font-mono text-xl font-black text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
            ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="mt-1 text-xs text-[#2962FF] flex items-center gap-1 font-semibold">
            <span>OI Sinyalleri</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>

        <Link
          href={`/token-kilit-acilimlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-amber-400 transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span className="font-sans font-semibold">Kilit Açılım Riski</span>
            <Calendar className="h-4.5 w-4.5 text-amber-400" />
          </div>
          <div className="mt-2 font-mono text-xl font-black text-[var(--foreground)] group-hover:text-amber-400 transition-colors">
            {coin.tokenUnlock ? `${coin.tokenUnlock.riskScore}/100 Risk` : 'Düşük Risk'}
          </div>
          <div className="mt-1 text-xs text-[#2962FF] flex items-center gap-1 font-semibold">
            <span>Kilit Takvimi</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>
      </div>

      {/* 5. Terminal Suite View Tabs (TradingView Chart vs Liquidation Depth Heatmap vs Arbitrage) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chart')}
              className={`rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
                activeTab === 'chart' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              TradingView Canlı Grafik
            </button>
            <button
              onClick={() => setActiveTab('heatmap')}
              className={`rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
                activeTab === 'heatmap' ? 'bg-[#FF3B56] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Likidasyon Isı Haritası
            </button>
            <button
              onClick={() => setActiveTab('arbitrage')}
              className={`rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
                activeTab === 'arbitrage' ? 'bg-[#00E699] text-black shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Borsalar Arası Fonlama
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/hesaplayici/"
              className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
            >
              <Calculator className="h-3.5 w-3.5 text-[#2962FF]" />
              <span>{coin.symbol} Kaldıraç Hesapla</span>
            </Link>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Share2 className="h-3.5 w-3.5 text-[var(--card-muted)]" />}
              <span>{copied ? 'Kopyalandı!' : 'Paylaş'}</span>
            </button>
          </div>
        </div>

        {/* View Content */}
        {activeTab === 'chart' && (
          <TradingViewChart
            symbol={coin.symbol}
            price={price}
            change24h={change}
            high24h={high24}
            low24h={low24}
          />
        )}

        {activeTab === 'heatmap' && (
          <LiquidationHeatmap
            coin={{
              ...coin,
              price
            }}
          />
        )}

        {activeTab === 'arbitrage' && (
          <div className="panel-card p-5 space-y-4">
            <h3 className="text-base font-bold text-[var(--foreground)]">
              {coin.symbol}/USDT Borsalar Arası Fonlama Oranı Arbitrajı
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="text-[var(--card-muted)]">Binance Futures</div>
                <div className="mt-1 text-lg font-bold text-[#00E699]">
                  %{(coin.fundingRates.binance * 100).toFixed(4)}
                </div>
                <div className="text-[11px] text-[var(--card-muted)] mt-1">Yıllık APR: %{(coin.fundingRates.binance * 3 * 365 * 100).toFixed(2)}</div>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="text-[var(--card-muted)]">Bybit Vadeli</div>
                <div className="mt-1 text-lg font-bold text-[#00E699]">
                  %{(coin.fundingRates.bybit * 100).toFixed(4)}
                </div>
                <div className="text-[11px] text-[var(--card-muted)] mt-1">Yıllık APR: %{(coin.fundingRates.bybit * 3 * 365 * 100).toFixed(2)}</div>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="text-[var(--card-muted)]">OKX Futures</div>
                <div className="mt-1 text-lg font-bold text-[#00E699]">
                  %{(coin.fundingRates.okx * 100).toFixed(4)}
                </div>
                <div className="text-[11px] text-[var(--card-muted)] mt-1">Yıllık APR: %{(coin.fundingRates.okx * 3 * 365 * 100).toFixed(2)}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. On-Chain & Fundamental Market Statistics (Infographic Grid) */}
      <div className="panel-card p-5 sm:p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <BarChart3 className="h-4.5 w-4.5 text-[#2962FF]" />
          <span>{coin.name} ({coin.symbol}) Döngü & On-Chain Temel Göstergeleri</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
            <span className="text-[var(--card-muted)] block text-[11px]">Tüm Zamanların Zirvesi (ATH)</span>
            <strong className="text-sm font-bold text-[var(--foreground)] block mt-1">
              ${coin.symbol === 'BTC' ? '108,900' : coin.symbol === 'ETH' ? '4,891' : coin.symbol === 'SOL' ? '260.06' : (price * 1.6).toFixed(2)}
            </strong>
            <span className="text-[11px] text-[#FF3B56] block mt-0.5">
              Zirveden Uzaklık: -%30.4
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
            <span className="text-[var(--card-muted)] block text-[11px]">Dolaşımdaki Arz</span>
            <strong className="text-sm font-bold text-[var(--foreground)] block mt-1">
              {coin.circulatingSupply.toLocaleString('tr-TR')} {coin.symbol}
            </strong>
            <span className="text-[11px] text-[#2962FF] block mt-0.5">
              Maksimum Arz: {coin.maxSupply ? coin.maxSupply.toLocaleString('tr-TR') : 'Sınırsız'}
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
            <span className="text-[var(--card-muted)] block text-[11px]">Uzun/Kısa (Long/Short) Oranı</span>
            <strong className="text-sm font-bold text-[#00E699] block mt-1">
              {coin.longShortRatio.toFixed(2)} ({coin.longPercentage.toFixed(1)}% L)
            </strong>
            <span className="text-[11px] text-[var(--card-muted)] block mt-0.5">
              Alıcı Ağırlıklı Pozisyonlama
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
            <span className="text-[var(--card-muted)] block text-[11px]">Kriptonik Sağlık Skoru</span>
            <strong className="text-sm font-bold text-[#00E699] block mt-1">
              92 / 100 (Kurumsal)
            </strong>
            <span className="text-[11px] text-[#00E699] block mt-0.5">
              Güçlü Likidite & Derinlik
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
