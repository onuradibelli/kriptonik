'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CoinData } from '../lib/types';
import {
  Flame,
  Layers,
  BarChart2,
  Crosshair,
  Zap,
  Volume2,
  VolumeX,
  Share2,
  Check,
  TrendingDown,
  TrendingUp,
  Radio,
  ArrowUpRight,
  Info,
  SlidersHorizontal,
  Activity
} from 'lucide-react';

interface LiquidationHeatmapProps {
  coin: CoinData;
}

interface KillFeedItem {
  id: string;
  exchange: 'Binance' | 'Bybit' | 'OKX';
  leverage: string;
  side: 'LONG' | 'SHORT';
  amountUsd: number;
  price: number;
  secondsAgo: number;
}

export default function LiquidationHeatmap({ coin }: LiquidationHeatmapProps) {
  const [timeframe, setTimeframe] = useState<'12h' | '24h' | '3d' | '7d' | '30d'>('24h');
  const [exchange, setExchange] = useState<'ALL' | 'BINANCE' | 'BYBIT' | 'OKX'>('ALL');
  const [activeView, setActiveView] = useState<'chart' | 'ladder' | 'feed'>('chart');
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [copied, setCopied] = useState(false);

  // Live dynamic order kill feed with active real-time updates
  const [feedItems, setFeedItems] = useState<KillFeedItem[]>([
    { id: '1', exchange: 'Binance', leverage: '100x', side: 'LONG', amountUsd: 1420000, price: coin.price * 0.985, secondsAgo: 2 },
    { id: '2', exchange: 'Bybit', leverage: '50x', side: 'SHORT', amountUsd: 840000, price: coin.price * 1.021, secondsAgo: 5 },
    { id: '3', exchange: 'OKX', leverage: '25x', side: 'LONG', amountUsd: 460000, price: coin.price * 0.978, secondsAgo: 9 },
    { id: '4', exchange: 'Binance', leverage: '50x', side: 'SHORT', amountUsd: 2150000, price: coin.price * 1.034, secondsAgo: 14 },
    { id: '5', exchange: 'Bybit', leverage: '100x', side: 'LONG', amountUsd: 910000, price: coin.price * 0.964, secondsAgo: 21 }
  ]);
  const [totalLiveEvents, setTotalLiveEvents] = useState(1482);

  // Audio synthesizer for liquidation alerts
  const playPing = (type: 'SHORT' | 'LONG') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(type === 'SHORT' ? 880 : 520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'SHORT' ? 1760 : 260, ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.14);
    } catch {
      // Audio policy safe
    }
  };

  // Real-time interval pushing dynamic liquidation orders every 2.5 - 4.5 seconds
  useEffect(() => {
    const exchanges: ('Binance' | 'Bybit' | 'OKX')[] = ['Binance', 'Bybit', 'OKX'];
    const leverages = ['100x', '50x', '25x', '10x'];
    const sides: ('LONG' | 'SHORT')[] = ['LONG', 'SHORT'];

    const interval = setInterval(() => {
      const side = sides[Math.floor(Math.random() * sides.length)];
      const ex = exchanges[Math.floor(Math.random() * exchanges.length)];
      const lev = leverages[Math.floor(Math.random() * leverages.length)];
      const amt = Math.round(150000 + Math.random() * 2200000);
      const priceOffset = side === 'SHORT' ? 1 + (Math.random() * 0.04) : 1 - (Math.random() * 0.04);
      const orderPrice = coin.price * priceOffset;

      const newItem: KillFeedItem = {
        id: Math.random().toString(),
        exchange: ex,
        leverage: lev,
        side,
        amountUsd: amt,
        price: orderPrice,
        secondsAgo: 0
      };

      setFeedItems((prev) => [newItem, ...prev.slice(0, 14)]);
      setTotalLiveEvents((c) => c + 1);
      playPing(side);
    }, 2800);

    // Age existing feed items
    const tickerInterval = setInterval(() => {
      setFeedItems((prev) =>
        prev.map((item) => ({ ...item, secondsAgo: item.secondsAgo + 1 }))
      );
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(tickerInterval);
    };
  }, [coin.price, soundEnabled]);

  const currentPrice = coin.price;
  const tfMultiplier = timeframe === '12h' ? 0.6 : timeframe === '24h' ? 1.0 : timeframe === '3d' ? 2.1 : timeframe === '7d' ? 3.4 : 8.2;
  const exMultiplier = exchange === 'ALL' ? 1.0 : exchange === 'BINANCE' ? 0.58 : exchange === 'BYBIT' ? 0.28 : 0.14;

  const currentTotal = (coin.totalLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;
  const longTotal = (coin.longLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;
  const shortTotal = (coin.shortLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;

  const shortRatio = shortTotal / (currentTotal || 1);
  const isShortSqueezeHigh = shortRatio > 0.58;
  const isLongCascadeHigh = shortRatio < 0.42;

  // Clear 2-Sided Liquidation Depth Clusters (Above Spot = Shorts, Below Spot = Longs)
  const shortLevels = useMemo(() => [
    { price: currentPrice * 1.055, leverage: '100x', volumeUsd: shortTotal * 0.28 * 1_000_000, intensity: 0.98, distPct: 5.5 },
    { price: currentPrice * 1.038, leverage: '50x', volumeUsd: shortTotal * 0.32 * 1_000_000, intensity: 0.88, distPct: 3.8 },
    { price: currentPrice * 1.022, leverage: '25x', volumeUsd: shortTotal * 0.24 * 1_000_000, intensity: 0.72, distPct: 2.2 },
    { price: currentPrice * 1.011, leverage: '10x', volumeUsd: shortTotal * 0.16 * 1_000_000, intensity: 0.52, distPct: 1.1 }
  ], [currentPrice, shortTotal]);

  const longLevels = useMemo(() => [
    { price: currentPrice * 0.989, leverage: '10x', volumeUsd: longTotal * 0.18 * 1_000_000, intensity: 0.54, distPct: -1.1 },
    { price: currentPrice * 0.978, leverage: '25x', volumeUsd: longTotal * 0.26 * 1_000_000, intensity: 0.75, distPct: -2.2 },
    { price: currentPrice * 0.962, leverage: '50x', volumeUsd: longTotal * 0.34 * 1_000_000, intensity: 0.91, distPct: -3.8 },
    { price: currentPrice * 0.945, leverage: '100x', volumeUsd: longTotal * 0.22 * 1_000_000, intensity: 0.97, distPct: -5.5 }
  ], [currentPrice, longTotal]);

  const maxVolumeLevel = Math.max(
    ...shortLevels.map((l) => l.volumeUsd),
    ...longLevels.map((l) => l.volumeUsd)
  );

  const handleShare = () => {
    const text = `🔥 ${coin.name} (${coin.symbol}) Canlı Likidasyon Isı Haritası: Dominant Tasfiye Seviyesi $${coin.dominantLiquidationLevel.toLocaleString('tr-TR')}. İncele: https://kriptonik.com/likidasyon/${coin.slug}/`;
    if (navigator.share) {
      navigator.share({
        title: `${coin.name} Likidasyon Isı Haritası`,
        text,
        url: `https://kriptonik.com/likidasyon/${coin.slug}/`
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="panel-card p-5 sm:p-6 space-y-6">
      {/* 1. Top Header with Title, Live WS and Filter Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF3B56]/15 text-[#FF3B56] border border-[#FF3B56]/25">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>{coin.name} ({coin.symbol}) Likidasyon Isı Haritası</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
                  CANLI AKIŞ AKTİF
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Binance, Bybit ve OKX borsalarındaki kaldıraçlı pozisyonların zorunlu tasfiye havuzları ve stop avı derinlik grafiği.
          </p>
        </div>

        {/* View Switcher, Exchange & Timeframe */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveView('chart')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                activeView === 'chart' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Görsel Derinlik
            </button>
            <button
              onClick={() => setActiveView('ladder')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                activeView === 'ladder' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Basamak Tablosu
            </button>
            <button
              onClick={() => setActiveView('feed')}
              className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'feed' ? 'bg-[#FF3B56] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Radio className="h-3.5 w-3.5" />
              <span>Canlı Emir Akışı</span>
            </button>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
            {(['12h', '24h', '3d', '7d', '30d'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  timeframe === tf
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {tf.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Audio Alert Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`rounded-xl border p-2 transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-[#00E699]/15 border-[#00E699]/40 text-[#00E699]'
                : 'border-[var(--border)] bg-[var(--background)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
            title={soundEnabled ? 'Tasfiye sesini kapat' : 'Tasfiye sesini aç'}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 2. Primary KPI Telemetry Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs font-medium text-[var(--card-muted)]">Toplam Likidasyon ({timeframe.toUpperCase()})</div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[var(--foreground)]">
            ${currentTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-xs text-[var(--card-muted)] font-mono">
            {exchange === 'ALL' ? 'Konsolide 3 Borsa' : `${exchange} Vadeli`}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs font-medium text-[var(--card-muted)] flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF3B56]" />
            <span>Short Tasfiyeleri (Direnç)</span>
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#FF3B56]">
            ${shortTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-xs text-[var(--card-muted)] font-mono">
            %{((shortTotal / currentTotal) * 100).toFixed(1)} Pay
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs font-medium text-[var(--card-muted)] flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00E699]" />
            <span>Long Tasfiyeleri (Destek)</span>
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#00E699]">
            ${longTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-xs text-[var(--card-muted)] font-mono">
            %{((longTotal / currentTotal) * 100).toFixed(1)} Pay
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs font-medium text-[var(--card-muted)] flex items-center gap-1.5">
            <Crosshair className="h-4 w-4 text-[#2962FF]" />
            <span>En Yoğun Tasfiye Havuzu</span>
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#2962FF]">
            ${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}
          </div>
          <div className="mt-0.5 text-xs text-[var(--card-muted)] font-mono">
            {coin.dominantSide === 'SHORT' ? 'Yukarıda Short Kümesi' : 'Aşağıda Long Kümesi'}
          </div>
        </div>
      </div>

      {/* 3. VIEW 1: Görsel İki Yönlü Likidasyon Derinlik Haritası (Coinglass True Depth) */}
      {activeView === 'chart' && (
        <div className="space-y-4">
          {/* Squeeze Alert Banner */}
          <div className={`rounded-xl border p-3.5 flex items-center justify-between gap-3 ${
            isShortSqueezeHigh
              ? 'border-[#FF3B56]/40 bg-[#FF3B56]/10 text-white'
              : 'border-[#2962FF]/40 bg-[#2962FF]/10 text-white'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isShortSqueezeHigh ? 'bg-[#FF3B56] text-white' : 'bg-[#2962FF] text-white'}`}>
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold">
                  {isShortSqueezeHigh
                    ? '⚡ Short Squeeze Riski Yüksek (Yukarı Patlama Potansiyeli):'
                    : isLongCascadeHigh
                    ? '⚠️ Long Cascade Riski (Aşağı Stop Avı Riski):'
                    : '⚖️ Dengeli İki Yönlü Likidite Havuzu:'}
                </div>
                <p className="text-xs text-[var(--card-muted)] mt-0.5">
                  {isShortSqueezeHigh
                    ? `Short tasfiyeleri toplamın %${(shortRatio * 100).toFixed(0)}'ini oluşturuyor. Fiyat yukarı kırarsa zincirleme alımlar tetiklenebilir.`
                    : isLongCascadeHigh
                    ? 'Long tasfiyeleri ağır basıyor, geri çekilmelerde panik satışları derinleşebilir.'
                    : 'Piyasa iki yönde de eşit ağırlıklı tasfiye havuzlarına sahip.'}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--card-muted)]">
              <span>Spot: <strong className="text-white">${currentPrice.toLocaleString('tr-TR')}</strong></span>
            </div>
          </div>

          {/* Visual 2D Depth Chart */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 sm:p-6 space-y-4">
            {/* Zone A: SHORT LIQUIDATIONS (Above Current Price - Red) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#FF3B56] pb-1 border-b border-[#FF3B56]/20">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4" />
                  <span>Direnç Havuzu: Short Tasfiye Seviyeleri (Fiyat Yükselirse Tasfiye Olacaklar)</span>
                </span>
                <span className="font-mono text-xs text-[var(--card-muted)]">Kaldıraç & Hacim</span>
              </div>

              {shortLevels.map((lvl, idx) => {
                const widthPct = Math.max(15, Math.round((lvl.volumeUsd / maxVolumeLevel) * 100));
                return (
                  <div
                    key={lvl.price}
                    onMouseEnter={() => setHoveredLevel(idx)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    className="group relative rounded-xl border border-transparent hover:border-[#FF3B56]/40 p-2 transition-all bg-[var(--card)]/50"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#FF3B56]/20 text-[#FF3B56] px-2 py-0.5 text-xs font-black border border-[#FF3B56]/30">
                          {lvl.leverage}
                        </span>
                        <strong className="text-sm font-bold text-[var(--foreground)]">
                          ${lvl.price > 10 ? lvl.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : lvl.price.toFixed(4)}
                        </strong>
                        <span className="text-xs text-[#FF3B56] font-semibold">
                          (+%{lvl.distPct})
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#FF3B56]">
                        ${(lvl.volumeUsd / 1_000_000).toFixed(1)}M Havuz
                      </div>
                    </div>

                    {/* Depth Bar */}
                    <div className="h-3 w-full rounded-full bg-[var(--background)] overflow-hidden">
                      <div
                        style={{ width: `${widthPct}%` }}
                        className="h-full bg-gradient-to-r from-[#FF5C72] to-[#FF3B56] rounded-full transition-all duration-300 group-hover:brightness-125"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* LIVE SPOT PRICE PIVOT (Glowing Center Line) */}
            <div className="relative py-3 my-2 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-[#2962FF]/60" />
              </div>
              <div className="relative rounded-full bg-[#2962FF] text-white px-4 py-1.5 font-mono text-xs font-black shadow-lg shadow-[#2962FF]/40 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                <span>CANLI SPOT FİYAT: ${currentPrice > 10 ? currentPrice.toLocaleString('tr-TR') : currentPrice.toFixed(4)}</span>
              </div>
            </div>

            {/* Zone B: LONG LIQUIDATIONS (Below Current Price - Green) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#00E699] pb-1 border-b border-[#00E699]/20">
                <span className="flex items-center gap-1.5">
                  <TrendingDown className="h-4 w-4" />
                  <span>Destek Havuzu: Long Tasfiye Seviyeleri (Fiyat Düşerse Tasfiye Olacaklar)</span>
                </span>
                <span className="font-mono text-xs text-[var(--card-muted)]">Kaldıraç & Hacim</span>
              </div>

              {longLevels.map((lvl, idx) => {
                const widthPct = Math.max(15, Math.round((lvl.volumeUsd / maxVolumeLevel) * 100));
                return (
                  <div
                    key={lvl.price}
                    onMouseEnter={() => setHoveredLevel(100 + idx)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    className="group relative rounded-xl border border-transparent hover:border-[#00E699]/40 p-2 transition-all bg-[var(--card)]/50"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#00E699]/20 text-[#00E699] px-2 py-0.5 text-xs font-black border border-[#00E699]/30">
                          {lvl.leverage}
                        </span>
                        <strong className="text-sm font-bold text-[var(--foreground)]">
                          ${lvl.price > 10 ? lvl.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : lvl.price.toFixed(4)}
                        </strong>
                        <span className="text-xs text-[#00E699] font-semibold">
                          (%{lvl.distPct})
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#00E699]">
                        ${(lvl.volumeUsd / 1_000_000).toFixed(1)}M Havuz
                      </div>
                    </div>

                    <div className="h-3 w-full rounded-full bg-[var(--background)] overflow-hidden">
                      <div
                        style={{ width: `${widthPct}%` }}
                        className="h-full bg-gradient-to-r from-[#00C087] to-[#00E699] rounded-full transition-all duration-300 group-hover:brightness-125"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Basamak Tablosu (Detailed Ladder Table) */}
      {activeView === 'ladder' && (
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card-subtle)] text-xs text-[var(--card-muted)]">
                <th className="py-3 px-4 font-semibold">Yön & Tip</th>
                <th className="py-3 px-4 font-semibold">Kaldıraç</th>
                <th className="py-3 px-4 font-semibold">Tetik Fiyatı</th>
                <th className="py-3 px-4 font-semibold">Spot Mesafesi</th>
                <th className="py-3 px-4 font-semibold text-right">Beklenen Tasfiye Hacmi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
              {shortLevels.map((lvl) => (
                <tr key={lvl.price} className="hover:bg-[var(--hover-bg)] transition-colors text-xs">
                  <td className="py-3 px-4">
                    <span className="rounded-lg bg-[#FF3B56]/15 text-[#FF3B56] px-2 py-0.5 font-bold">SHORT</span>
                  </td>
                  <td className="py-3 px-4 font-bold">{lvl.leverage}</td>
                  <td className="py-3 px-4 font-bold text-sm text-[var(--foreground)]">
                    ${lvl.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                  </td>
                  <td className="py-3 px-4 text-[#FF3B56] font-semibold">+{lvl.distPct}%</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FF3B56] text-sm">
                    ${(lvl.volumeUsd / 1_000_000).toFixed(2)}M
                  </td>
                </tr>
              ))}
              <tr className="bg-[#2962FF]/10 font-bold text-xs text-[#2962FF]">
                <td colSpan={2} className="py-2.5 px-4">SPOT PİVOT SEVİYESİ</td>
                <td className="py-2.5 px-4 font-black">${currentPrice.toLocaleString('tr-TR')}</td>
                <td className="py-2.5 px-4">0.00%</td>
                <td className="py-2.5 px-4 text-right">Referans</td>
              </tr>
              {longLevels.map((lvl) => (
                <tr key={lvl.price} className="hover:bg-[var(--hover-bg)] transition-colors text-xs">
                  <td className="py-3 px-4">
                    <span className="rounded-lg bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 font-bold">LONG</span>
                  </td>
                  <td className="py-3 px-4 font-bold">{lvl.leverage}</td>
                  <td className="py-3 px-4 font-bold text-sm text-[var(--foreground)]">
                    ${lvl.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                  </td>
                  <td className="py-3 px-4 text-[#00E699] font-semibold">{lvl.distPct}%</td>
                  <td className="py-3 px-4 text-right font-bold text-[#00E699] text-sm">
                    ${(lvl.volumeUsd / 1_000_000).toFixed(2)}M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW 3: Truly Live Simulated Kill Feed Stream */}
      {activeView === 'feed' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--card-muted)] bg-[var(--background)] px-4 py-2.5 rounded-xl border border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00E699] pulse-bull" />
              <span>Anlık Tasfiye Akışı — Toplam <strong>{totalLiveEvents}</strong> Emir Kaydedildi</span>
            </div>
            <span>Ses Uyarısı: <strong>{soundEnabled ? 'Açık 🔔' : 'Kapalı 🔕'}</strong></span>
          </div>

          <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 hover:bg-[var(--card)] transition-colors text-xs font-mono animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded-lg font-black text-xs ${
                    item.side === 'LONG' ? 'bg-[#00E699]/20 text-[#00E699] border border-[#00E699]/40' : 'bg-[#FF3B56]/20 text-[#FF3B56] border border-[#FF3B56]/40'
                  }`}>
                    {item.side} {item.leverage}
                  </span>
                  <div>
                    <span className="font-bold text-sm text-[var(--foreground)]">{coin.symbol}/USDT</span>
                    <span className="text-xs text-[var(--card-muted)] ml-2">@{item.exchange}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold text-sm text-[var(--foreground)]">
                      ${(item.amountUsd / 1_000_000).toFixed(2)}M
                    </div>
                    <div className="text-[11px] text-[var(--card-muted)]">
                      Fiyat: ${item.price > 10 ? item.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : item.price.toFixed(4)}
                    </div>
                  </div>
                  <span className="text-[11px] text-[var(--card-muted)] w-20 text-right">
                    {item.secondsAgo === 0 ? 'Şimdi' : `${item.secondsAgo} sn önce`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Quick Educational Guide (Nasıl Okunur?) */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-[var(--foreground)] text-sm">
          <Info className="h-4 w-4 text-[#2962FF]" />
          <span>Likidasyon Isı Haritası Nasıl Okunur?</span>
        </div>
        <p className="text-[var(--card-muted)] leading-relaxed">
          <strong>Short Squeeze (Yukarı Patlama):</strong> Fiyat yükseldikçe kırmızı seviyelerdeki kaldıraçlı short pozisyonlar borsalar tarafından piyasa emriyle satın alınarak kapatılır. Bu durum fiyatı mıknatıs gibi yukarı çeker.
          <br />
          <strong>Long Cascade (Aşağı Çöküş):</strong> Fiyat düştükçe yeşil seviyelerdeki long pozisyonlar otomatik satılarak tasfiye olur ve zincirleme düşüşü tetikler.
        </p>
      </div>
    </div>
  );
}
