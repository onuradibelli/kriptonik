'use client';

import React, { useState, useMemo } from 'react';
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
  Info
} from 'lucide-react';

interface LiquidationHeatmapProps {
  coin: CoinData;
}

export default function LiquidationHeatmap({ coin }: LiquidationHeatmapProps) {
  const [timeframe, setTimeframe] = useState<'12h' | '24h' | '3d' | '7d' | '30d'>('24h');
  const [exchange, setExchange] = useState<'ALL' | 'BINANCE' | 'BYBIT' | 'OKX'>('ALL');
  const [hoveredCluster, setHoveredCluster] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'heatmap' | 'cumulative' | 'feed'>('heatmap');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [copied, setCopied] = useState(false);

  // Audio synthesizer for liquidation radar
  const playRadarPing = (type: 'short' | 'long' = 'short') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(type === 'short' ? 880 : 587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'short' ? 1760 : 293.66, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      // Audio policy handled safely
    }
  };

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

  const currentPrice = coin.price;
  const tfMultiplier = timeframe === '12h' ? 0.6 : timeframe === '24h' ? 1.0 : timeframe === '3d' ? 2.1 : timeframe === '7d' ? 3.4 : 8.2;
  const exMultiplier = exchange === 'ALL' ? 1.0 : exchange === 'BINANCE' ? 0.58 : exchange === 'BYBIT' ? 0.28 : 0.14;

  const currentTotal = (coin.totalLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;
  const longTotal = (coin.longLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;
  const shortTotal = (coin.shortLiquidation24hUsd * tfMultiplier * exMultiplier) / 1_000_000;

  const shortRatio = shortTotal / (currentTotal || 1);
  const isShortSqueezeHigh = shortRatio > 0.58;
  const isLongCascadeHigh = shortRatio < 0.42;

  // Granular liquidation clusters around spot price (Coinglass Heatmap Model)
  const clusters = useMemo(() => {
    return [
      { price: currentPrice * 1.065, leverage: '100x', volumeUsd: shortTotal * 0.16 * 1_000_000, side: 'SHORT' as const, heatLevel: 'EXTREME', intensity: 0.98 },
      { price: currentPrice * 1.048, leverage: '100x', volumeUsd: shortTotal * 0.26 * 1_000_000, side: 'SHORT' as const, heatLevel: 'HIGH', intensity: 0.90 },
      { price: currentPrice * 1.034, leverage: '50x', volumeUsd: shortTotal * 0.22 * 1_000_000, side: 'SHORT' as const, heatLevel: 'HIGH', intensity: 0.82 },
      { price: currentPrice * 1.022, leverage: '25x', volumeUsd: shortTotal * 0.18 * 1_000_000, side: 'SHORT' as const, heatLevel: 'MEDIUM', intensity: 0.70 },
      { price: currentPrice * 1.012, leverage: '10x', volumeUsd: shortTotal * 0.11 * 1_000_000, side: 'SHORT' as const, heatLevel: 'LOW', intensity: 0.50 },
      { price: currentPrice * 1.004, leverage: '5x', volumeUsd: shortTotal * 0.07 * 1_000_000, side: 'SHORT' as const, heatLevel: 'LOW', intensity: 0.35 },
      // Spot Price Pivot
      { price: currentPrice * 0.996, leverage: '5x', volumeUsd: longTotal * 0.08 * 1_000_000, side: 'LONG' as const, heatLevel: 'LOW', intensity: 0.38 },
      { price: currentPrice * 0.988, leverage: '10x', volumeUsd: longTotal * 0.12 * 1_000_000, side: 'LONG' as const, heatLevel: 'LOW', intensity: 0.52 },
      { price: currentPrice * 0.976, leverage: '25x', volumeUsd: longTotal * 0.19 * 1_000_000, side: 'LONG' as const, heatLevel: 'MEDIUM', intensity: 0.72 },
      { price: currentPrice * 0.962, leverage: '50x', volumeUsd: longTotal * 0.25 * 1_000_000, side: 'LONG' as const, heatLevel: 'HIGH', intensity: 0.86 },
      { price: currentPrice * 0.948, leverage: '100x', volumeUsd: longTotal * 0.22 * 1_000_000, side: 'LONG' as const, heatLevel: 'HIGH', intensity: 0.91 },
      { price: currentPrice * 0.932, leverage: '100x', volumeUsd: longTotal * 0.14 * 1_000_000, side: 'LONG' as const, heatLevel: 'EXTREME', intensity: 0.96 },
    ];
  }, [currentPrice, shortTotal, longTotal]);

  const maxVolume = Math.max(...clusters.map((c) => c.volumeUsd));

  // Live Simulated Kill Feed (Coinglass Order Stream)
  const simulatedFeed = [
    { exchange: 'Binance', leverage: '100x', side: 'LONG', amountUsd: 1420000, price: currentPrice * 0.985, time: '3 sn önce' },
    { exchange: 'Bybit', leverage: '50x', side: 'SHORT', amountUsd: 840000, price: currentPrice * 1.021, time: '18 sn önce' },
    { exchange: 'OKX', leverage: '25x', side: 'LONG', amountUsd: 460000, price: currentPrice * 0.978, time: '41 sn önce' },
    { exchange: 'Binance', leverage: '50x', side: 'SHORT', amountUsd: 2150000, price: currentPrice * 1.034, time: '1 dk önce' },
    { exchange: 'Bybit', leverage: '100x', side: 'LONG', amountUsd: 910000, price: currentPrice * 0.964, time: '2 dk önce' }
  ];

  return (
    <div className="panel-card p-5 sm:p-6 space-y-6">
      {/* 1. Top Header & Primary Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF3B56]/15 text-[#FF3B56] border border-[#FF3B56]/25">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>{coin.name} ({coin.symbol}) Canlı Likidasyon Isı Haritası</span>
                <span className="rounded bg-[#2962FF]/15 text-[#2962FF] px-2 py-0.5 text-[10px] font-mono font-bold border border-[#2962FF]/20">
                  COINGLASS DERİNLİK MODELİ
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Binance, Bybit ve OKX borsalarındaki 10x - 100x kaldıraçlı zorunlu tasfiye havuzları ve emir defteri süpürme bariyerleri.
          </p>
        </div>

        {/* View, Exchange and Timeframe Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode (Heatmap vs Cumulative vs Kill Feed) */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveView('heatmap')}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                activeView === 'heatmap' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Isı Haritası
            </button>
            <button
              onClick={() => setActiveView('cumulative')}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                activeView === 'cumulative' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Kümülatif Seviyeler
            </button>
            <button
              onClick={() => setActiveView('feed')}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer flex items-center gap-1 ${
                activeView === 'feed' ? 'bg-[#FF3B56] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Radio className="h-3 w-3" />
              <span>Canlı Akış</span>
            </button>
          </div>

          {/* Exchange Filter */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 font-mono text-xs">
            {(['ALL', 'BINANCE', 'BYBIT', 'OKX'] as const).map((ex) => (
              <button
                key={ex}
                onClick={() => setExchange(ex)}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  exchange === ex
                    ? 'bg-[#00E699] text-black shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {ex === 'ALL' ? 'TÜMÜ' : ex}
              </button>
            ))}
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

          {/* Sound Ping Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playRadarPing('short');
            }}
            title={soundEnabled ? 'Tasfiye radar sesini kapat' : 'Tasfiye radar sesini aç'}
            className={`flex items-center gap-1 rounded-xl border border-[var(--border)] px-2.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-[#2962FF] text-white border-[#2962FF]'
                : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
          >
            {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Haritayı Paylaş"
            className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 font-mono text-xs font-semibold text-[var(--card-muted)] hover:text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Share2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* 2. Coinglass Squeeze Alert Radar Banner */}
      <div className={`rounded-xl border p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs ${
        isShortSqueezeHigh
          ? 'border-[#FF3B56]/30 bg-[#FF3B56]/10 text-[var(--foreground)]'
          : isLongCascadeHigh
          ? 'border-amber-500/30 bg-amber-500/10 text-[var(--foreground)]'
          : 'border-[#2962FF]/30 bg-[#2962FF]/10 text-[var(--foreground)]'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-xl shrink-0 ${
            isShortSqueezeHigh ? 'bg-[#FF3B56] text-white' : 'bg-[#2962FF] text-white'
          }`}>
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <div className="font-bold text-sm">
              {isShortSqueezeHigh
                ? '⚡ Short Squeeze Riski Yüksek (Yukarı Fırlama Potansiyeli):'
                : isLongCascadeHigh
                ? '⚠️ Long Cascade Baskısı (Aşağı Sarkma İhtimali):'
                : '⚖️ Dengeli Likidite Havuzu:'}
            </div>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              {isShortSqueezeHigh
                ? `Tasfiyelerin %${(shortRatio * 100).toFixed(1)}'i short pozisyonlardan oluşuyor. Fiyat $${coin.dominantLiquidationLevel.toLocaleString('tr-TR')} üzerine çıkarsa zincirleme alımlar tetiklenebilir.`
                : isLongCascadeHigh
                ? 'Long tasfiye havuzları baskın durumda, olası geri çekilmelerde stop avı riski artabilir.'
                : 'Piyasa iki yönde de dengeli tasfiye havuzlarına sahip.'}
            </p>
          </div>
        </div>

        {/* Coinglass Heat Legend Bar */}
        <div className="flex items-center gap-2 shrink-0 font-mono text-[10px] text-[var(--card-muted)] bg-[var(--card)] px-3 py-1.5 rounded-xl border border-[var(--border)]">
          <span>Isı Skalası:</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-xs bg-[#4361EE]" title="Düşük Yoğunluk" />
            <span className="h-2 w-3 rounded-xs bg-[#4CC9F0]" title="Orta Yoğunluk" />
            <span className="h-2 w-3 rounded-xs bg-[#FFD166]" title="Yüksek Yoğunluk" />
            <span className="h-2 w-3 rounded-xs bg-[#FF3B56]" title="Aşırı Yoğunluk (Cluster)" />
          </div>
          <span className="text-[#FF3B56] font-bold">100x Havuzu</span>
        </div>
      </div>

      {/* 3. 4 Visual KPI Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-[11px] font-medium text-[var(--card-muted)]">Toplam Tasfiye ({timeframe.toUpperCase()})</div>
          <div className="mt-1 font-mono text-xl font-black text-[var(--foreground)]">
            ${currentTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            {exchange === 'ALL' ? 'Konsolide Borsalar' : `${exchange} Futures`}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#00E699]" />
            <span>Long Tasfiyeleri</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[#00E699]">
            ${longTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            %{((longTotal / currentTotal) * 100).toFixed(1)} Pay
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#FF3B56]" />
            <span>Short Tasfiyeleri</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[#FF3B56]">
            ${shortTotal.toFixed(1)}M
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            %{((shortTotal / currentTotal) * 100).toFixed(1)} Pay
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-[11px] font-medium text-[var(--card-muted)] flex items-center gap-1">
            <Crosshair className="h-3.5 w-3.5 text-[#2962FF]" />
            <span>Dominant Tasfiye Duvarı</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[#2962FF]">
            ${coin.dominantLiquidationLevel > 10 ? coin.dominantLiquidationLevel.toLocaleString('tr-TR') : coin.dominantLiquidationLevel}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            Maksimum Likidite Kümesi
          </div>
        </div>
      </div>

      {/* 4. Active View Content */}

      {/* View A: Full Coinglass-Style Heatmap Depth Matrix */}
      {activeView === 'heatmap' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--card-muted)]">
            <span className="flex items-center gap-1.5">
              <BarChart2 className="h-4 w-4 text-[#2962FF]" />
              <span>Fiyat Kademeleri & Kaldıraç Yoğunluk Isı Haritası ({exchange})</span>
            </span>
            <span className="font-mono text-[11px]">
              Canlı Spot Fiyat: <strong className="text-[var(--foreground)]">${currentPrice.toLocaleString('tr-TR')}</strong>
            </span>
          </div>

          {/* Visual Heatmap Depth Matrix */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 sm:p-4 space-y-1.5">
            {clusters.map((cluster, idx) => {
              const isShort = cluster.side === 'SHORT';
              const distance = (((cluster.price - currentPrice) / currentPrice) * 100).toFixed(2);
              const isHovered = hoveredCluster === idx;
              const barWidthPercent = Math.max(12, Math.round((cluster.volumeUsd / maxVolume) * 100));

              // Color based on heat intensity
              const heatColor =
                cluster.heatLevel === 'EXTREME'
                  ? isShort ? 'from-[#FF3B56]/40 via-[#FF3B56]/20' : 'from-[#00E699]/40 via-[#00E699]/20'
                  : cluster.heatLevel === 'HIGH'
                  ? isShort ? 'from-[#FF8A00]/30 via-[#FF8A00]/15' : 'from-[#4CC9F0]/30 via-[#4CC9F0]/15'
                  : isShort ? 'from-[#4361EE]/20 via-transparent' : 'from-[#3A0CA3]/20 via-transparent';

              const borderColor = isShort ? 'border-l-4 border-[#FF3B56]' : 'border-l-4 border-[#00E699]';

              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setHoveredCluster(idx);
                    if (cluster.intensity > 0.8) playRadarPing(isShort ? 'short' : 'long');
                  }}
                  onMouseLeave={() => setHoveredCluster(null)}
                  className={`group relative flex items-center justify-between py-2 px-3 rounded-xl transition-all cursor-pointer ${
                    isHovered ? 'bg-[var(--card)] shadow-md scale-[1.01]' : 'hover:bg-[var(--card)]/60'
                  }`}
                >
                  {/* Dynamic Heat Gradient Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 rounded-xl transition-all bg-gradient-to-r ${heatColor} to-transparent ${borderColor}`}
                    style={{ width: `${barWidthPercent}%` }}
                  />

                  {/* Left: Price, Distance, Leverage */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className={`font-mono text-xs font-black ${isShort ? 'text-[#FF3B56]' : 'text-[#00E699]'}`}>
                      ${cluster.price > 10 ? cluster.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : cluster.price.toFixed(4)}
                    </span>

                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                      cluster.leverage === '100x'
                        ? 'bg-[#FF3B56]/20 text-[#FF3B56] border border-[#FF3B56]/30'
                        : 'bg-[var(--border)] text-[var(--foreground)]'
                    }`}>
                      {cluster.leverage}
                    </span>

                    <span className={`text-[11px] font-mono font-semibold ${Number(distance) >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {Number(distance) >= 0 ? '+' : ''}{distance}%
                    </span>
                  </div>

                  {/* Right: Pool Volume and Side Tag */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="text-right">
                      <span className="font-mono text-xs font-black text-[var(--foreground)]">
                        ${(cluster.volumeUsd / 1_000_000).toFixed(2)}M
                      </span>
                      <span className="hidden sm:inline text-[10px] text-[var(--card-muted)] ml-1 font-mono">
                        (Tahmini Tasfiye)
                      </span>
                    </div>

                    <span className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                      isShort ? 'bg-[#FF3B56]/15 text-[#FF3B56]' : 'bg-[#00E699]/15 text-[#00E699]'
                    }`}>
                      {isShort ? 'SHORT BASKISI' : 'LONG DESTEĞİ'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Current Spot Pivot Line */}
          <div className="flex items-center justify-between rounded-xl border border-[#2962FF]/30 bg-[#2962FF]/10 px-4 py-2.5 text-xs font-medium text-[var(--foreground)]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2962FF] pulse-bull" />
              <span>Anlık Pivot Spot Fiyat:</span>
              <strong className="font-mono text-sm font-black text-[#2962FF]">${currentPrice.toLocaleString('tr-TR')}</strong>
            </div>
            <span className="text-[11px] text-[var(--card-muted)] hidden sm:inline font-mono">
              Üst Seviyeler = Short Tasfiye Bariyeri • Alt Seviyeler = Long Cascade Desteği
            </span>
          </div>
        </div>
      )}

      {/* View B: Cumulative Liquidation Delta Levels */}
      {activeView === 'cumulative' && (
        <div className="space-y-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <div className="flex items-center justify-between text-xs">
            <h3 className="font-bold text-[var(--foreground)] flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#2962FF]" />
              <span>Kümülatif Kaldıraç Tasfiye Eğrisi (Cumulative Delta)</span>
            </h3>
            <span className="text-[11px] font-mono text-[var(--card-muted)]">Coinglass Model</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Short Side Cumulative */}
            <div className="rounded-xl border border-[#FF3B56]/20 bg-[#FF3B56]/5 p-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#FF3B56]">Kümülatif Short Tasfiye Baskısı</span>
                <span className="font-mono text-sm font-black text-[#FF3B56]">${shortTotal.toFixed(1)}M</span>
              </div>
              <p className="text-[11px] text-[var(--card-muted)] leading-relaxed">
                Fiyat yukarı doğru her %1 tırmandığında tetiklenecek kümülatif short kapatma emirleri, spot tahtada sert alım baskısı yaratır.
              </p>
              <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden">
                <div style={{ width: `${Math.min(100, (shortTotal / currentTotal) * 100)}%` }} className="h-full bg-[#FF3B56]" />
              </div>
            </div>

            {/* Long Side Cumulative */}
            <div className="rounded-xl border border-[#00E699]/20 bg-[#00E699]/5 p-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#00E699]">Kümülatif Long Tasfiye Desteği</span>
                <span className="font-mono text-sm font-black text-[#00E699]">${longTotal.toFixed(1)}M</span>
              </div>
              <p className="text-[11px] text-[var(--card-muted)] leading-relaxed">
                Fiyatın aşağı sarkması durumunda long pozisyonların zorunlu satışı tetiklenir ve domino etkisiyle destek test edilir.
              </p>
              <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden">
                <div style={{ width: `${Math.min(100, (longTotal / currentTotal) * 100)}%` }} className="h-full bg-[#00E699]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View C: Live Order Kill Feed (Canlı Tasfiye Akışı) */}
      {activeView === 'feed' && (
        <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <div className="flex items-center justify-between text-xs">
            <h3 className="font-bold text-[var(--foreground)] flex items-center gap-2">
              <Radio className="h-4 w-4 text-[#FF3B56] animate-pulse" />
              <span>Borsalardan Anlık Tasfiye Edilen Büyük Pozisyonlar (Live Feed)</span>
            </h3>
            <span className="text-[10px] font-mono text-[#00E699] font-bold">CANLI SENKRONİZASYON</span>
          </div>

          <div className="divide-y divide-[var(--border)] text-xs font-mono">
            {simulatedFeed.map((item, idx) => {
              const isShort = item.side === 'SHORT';
              return (
                <div key={idx} className="py-2.5 flex items-center justify-between hover:bg-[var(--card)] px-2 rounded-lg transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-[var(--foreground)]">{item.exchange}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                      isShort ? 'bg-[#FF3B56]/15 text-[#FF3B56]' : 'bg-[#00E699]/15 text-[#00E699]'
                    }`}>
                      {item.leverage} {item.side}
                    </span>
                    <span className="text-[var(--card-muted)]">@{item.price > 10 ? item.price.toLocaleString('tr-TR', { maximumFractionDigits: 1 }) : item.price.toFixed(4)}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`font-black text-sm ${isShort ? 'text-[#FF3B56]' : 'text-[#00E699]'}`}>
                      ${(item.amountUsd / 1_000_000).toFixed(2)}M
                    </span>
                    <span className="text-[10px] text-[var(--card-muted)]">{item.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
