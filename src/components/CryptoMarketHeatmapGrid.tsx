'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { computeSquarifiedTreemap, TreemapNode } from '../lib/squarify';
import CoinIcon from './CoinIcon';
import { 
  Layers, 
  ChevronDown, 
  Maximize2, 
  TrendingUp, 
  TrendingDown, 
  Sparkles,
  ArrowUpRight,
  Info
} from 'lucide-react';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

// Color palette matching the Coinglass Stocks / Crypto Heatmap screenshot
const getCoinglassColor = (change: number): { bg: string; text: string; hex: string } => {
  if (Math.abs(change) < 0.05) {
    return { bg: 'bg-[#64748B]', text: 'text-white', hex: '#64748B' }; // Neutral slate
  }
  if (change >= 5) {
    return { bg: 'bg-[#005A32]', text: 'text-white', hex: '#005A32' }; // Deep dark forest green
  }
  if (change >= 2.5) {
    return { bg: 'bg-[#007A43]', text: 'text-white', hex: '#007A43' }; // Dark green
  }
  if (change >= 0.8) {
    return { bg: 'bg-[#00A859]', text: 'text-white', hex: '#00A859' }; // Medium emerald green
  }
  if (change > 0) {
    return { bg: 'bg-[#22C55E]', text: 'text-white', hex: '#22C55E' }; // Soft light green
  }
  if (change > -0.8) {
    return { bg: 'bg-[#F87171]', text: 'text-white', hex: '#F87171' }; // Soft coral red
  }
  if (change > -2.5) {
    return { bg: 'bg-[#EF4444]', text: 'text-white', hex: '#EF4444' }; // Medium red
  }
  if (change > -5) {
    return { bg: 'bg-[#DC2626]', text: 'text-white', hex: '#DC2626' }; // Strong red
  }
  return { bg: 'bg-[#991B1B]', text: 'text-white', hex: '#991B1B' }; // Deep ruby red
};

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [isSectorMode, setIsSectorMode] = useState<boolean>(false);
  const [weightMetric, setWeightMetric] = useState<'MARKET_CAP' | 'VOLUME'>('MARKET_CAP');
  const [timeframe, setTimeframe] = useState<'24H' | '1H' | '7D'>('24H');
  const [hoveredCoin, setHoveredCoin] = useState<{
    coin: CoinData & { effectivePrice: number; effectiveChange: number };
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState<{ width: number; height: number }>({
    width: 1100,
    height: 640
  });

  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

  // Measure container dimensions for pixel-perfect squarified aspect ratio calculation
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        // Keep a golden 16:9 or 16:10 ratio on desktop, square-like on mobile
        const h = w > 768 ? Math.max(560, Math.round(w * 0.56)) : 480;
        setCanvasDimensions({ width: w, height: h });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Map real-time Binance tickers
  const mappedCoins = useMemo(() => {
    return coins.map((c) => {
      const liveTick = tickers[c.binanceSymbol];
      const livePrice = liveTick?.price || c.price;
      const liveChange = liveTick?.change24h !== undefined ? liveTick.change24h : c.change24h;

      return {
        ...c,
        effectivePrice: livePrice,
        effectiveChange: liveChange
      };
    });
  }, [coins, tickers]);

  // Compute global treemap nodes (when Sector is OFF)
  const globalNodes = useMemo(() => {
    if (isSectorMode) return [];

    const items = mappedCoins.map((coin) => ({
      ...coin,
      id: coin.id,
      weight: weightMetric === 'MARKET_CAP' 
        ? Math.max(1000, coin.marketCapUsd || 1000000) 
        : Math.max(1000, coin.volume24hUsd || 500000)
    }));

    return computeSquarifiedTreemap(items, {
      x: 0,
      y: 0,
      width: canvasDimensions.width,
      height: canvasDimensions.height
    });
  }, [mappedCoins, isSectorMode, weightMetric, canvasDimensions]);

  // Compute sector-partitioned treemap nodes (when Sector is ON)
  const sectorGroups = useMemo(() => {
    if (!isSectorMode) return [];

    // Group coins by category
    const groups: Record<string, (CoinData & { effectivePrice: number; effectiveChange: number })[]> = {};
    mappedCoins.forEach((coin) => {
      const cat = coin.category || 'Diğer Altcoinler';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(coin);
    });

    // 1. Calculate each sector's total weight
    const sectorItems = Object.entries(groups).map(([category, coinList]) => {
      const totalWeight = coinList.reduce((sum, c) => {
        return sum + (weightMetric === 'MARKET_CAP' ? Math.max(1000, c.marketCapUsd) : Math.max(1000, c.volume24hUsd));
      }, 0);

      const avgChange = coinList.reduce((sum, c) => sum + c.effectiveChange, 0) / (coinList.length || 1);

      return {
        id: category,
        category,
        weight: totalWeight,
        avgChange,
        coinList
      };
    });

    // 2. Squarify sectors in canvas
    const sectorRects = computeSquarifiedTreemap(sectorItems, {
      x: 0,
      y: 0,
      width: canvasDimensions.width,
      height: canvasDimensions.height
    });

    // 3. For each sector, squarify its coins inside its assigned bounds (leaving 22px for sector header)
    return sectorRects.map((sNode) => {
      const headerHeight = 24;
      const innerBounds = {
        x: sNode.x + 1,
        y: sNode.y + headerHeight,
        width: Math.max(10, sNode.width - 2),
        height: Math.max(10, sNode.height - headerHeight - 1)
      };

      const coinItems = sNode.data.coinList.map((coin: any) => ({
        ...coin,
        id: coin.id,
        weight: weightMetric === 'MARKET_CAP' ? Math.max(100, coin.marketCapUsd) : Math.max(100, coin.volume24hUsd)
      }));

      const coinNodes = computeSquarifiedTreemap(coinItems, innerBounds);

      return {
        sector: sNode.data,
        rect: sNode,
        nodes: coinNodes
      };
    });
  }, [mappedCoins, isSectorMode, weightMetric, canvasDimensions]);

  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    if (price >= 1) return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 0.001) return price.toFixed(4);
    return price.toFixed(6);
  };

  const formatLargeUsd = (usd: number) => {
    if (usd >= 1e12) return `$${(usd / 1e12).toFixed(2)}T`;
    if (usd >= 1e9) return `$${(usd / 1e9).toFixed(2)}B`;
    if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1)}M`;
    return `$${(usd / 1e3).toFixed(0)}K`;
  };

  return (
    <div className="panel-card p-4 sm:p-5 space-y-4 select-none">
      {/* 1. Header Toolbar Exactly Like Screenshot */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        {/* Left Title */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl font-black text-[var(--foreground)] tracking-tight">
            Heatmap
          </h2>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#00E699]/15 px-2.5 py-0.5 text-xs font-mono font-bold text-[#00A86B] dark:text-[#00E699] border border-[#00E699]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] animate-pulse" />
            CANLI PİYASA AKIŞI
          </span>
        </div>

        {/* Right Controls: [ ] Sector Checkbox + Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          {/* Sector Toggle Checkbox (Exact match to screenshot) */}
          <label className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--card-subtle)] cursor-pointer font-bold text-[var(--foreground)] transition-colors">
            <input
              type="checkbox"
              checked={isSectorMode}
              onChange={(e) => setIsSectorMode(e.target.checked)}
              className="rounded border-[var(--border)] text-[#2962FF] focus:ring-0 cursor-pointer h-4 w-4"
            />
            <span>Sector (Sektör)</span>
          </label>

          {/* Market Cap / Volume Dropdown */}
          <div className="relative">
            <select
              value={weightMetric}
              onChange={(e) => setWeightMetric(e.target.value as any)}
              className="appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 pr-8 font-bold text-[var(--foreground)] hover:bg-[var(--card-subtle)] transition-colors cursor-pointer focus:outline-none"
            >
              <option value="MARKET_CAP">Market cap ⌄</option>
              <option value="VOLUME">Volume 24h ⌄</option>
            </select>
            <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2.5 pointer-events-none text-[var(--card-muted)]" />
          </div>

          {/* Price Change Dropdown */}
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 pr-8 font-bold text-[var(--foreground)] hover:bg-[var(--card-subtle)] transition-colors cursor-pointer focus:outline-none"
            >
              <option value="24H">Price Change (24s) ⌄</option>
              <option value="1H">Price Change (1s) ⌄</option>
              <option value="7D">Price Change (7g) ⌄</option>
            </select>
            <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2.5 pointer-events-none text-[var(--card-muted)]" />
          </div>
        </div>
      </div>

      {/* 2. SQUARIFIED TREEMAP CANVAS */}
      <div 
        ref={containerRef}
        style={{ height: `${canvasDimensions.height}px` }}
        className="w-full relative rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900/40 shadow-inner"
        onMouseLeave={() => setHoveredCoin(null)}
      >
        {!isSectorMode ? (
          /* A) UNIFIED GLOBAL TREEMAP (EXACT MATCH TO UPLOADED SCREENSHOT) */
          globalNodes.map((node) => {
            const coin = node.data;
            const colors = getCoinglassColor(coin.effectiveChange);
            const isWide = node.width >= 70;
            const isTall = node.height >= 55;
            const isHuge = node.width >= 120 && node.height >= 90;
            const isTiny = node.width < 45 || node.height < 32;

            // Compute font sizes dynamically based on box area
            const symbolFontSize = isHuge ? 'text-xl sm:text-2xl font-black' : isWide && isTall ? 'text-sm sm:text-base font-black' : isTiny ? 'text-[10px] font-bold' : 'text-xs font-black';
            const changeFontSize = isHuge ? 'text-sm sm:text-base font-bold' : isWide && isTall ? 'text-xs font-bold' : isTiny ? 'text-[9px]' : 'text-[10px] font-bold';

            return (
              <Link
                key={coin.id}
                href={`/kripto/${coin.slug}/`}
                style={{
                  position: 'absolute',
                  left: `${(node.x / canvasDimensions.width) * 100}%`,
                  top: `${(node.y / canvasDimensions.height) * 100}%`,
                  width: `${(node.width / canvasDimensions.width) * 100}%`,
                  height: `${(node.height / canvasDimensions.height) * 100}%`,
                  padding: '1px'
                }}
                onMouseEnter={(e) => {
                  const rect = containerRef.current?.getBoundingClientRect();
                  if (rect) {
                    setHoveredCoin({
                      coin,
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                  }
                }}
                className="group transition-transform hover:z-20 cursor-pointer"
              >
                <div
                  className={`w-full h-full rounded-[3px] border border-black/10 dark:border-white/10 ${colors.bg} ${colors.text} flex flex-col items-center justify-center text-center p-1 overflow-hidden transition-all duration-150 group-hover:brightness-110 group-hover:ring-2 group-hover:ring-white/80`}
                >
                  {/* Official Coin Logo for Larger Tiles */}
                  {isHuge && (
                    <div className="mb-1">
                      <CoinIcon
                        symbol={coin.symbol}
                        name={coin.name}
                        imageUrl={coin.imageUrl}
                        size={32}
                        className="shadow-sm border border-white/20"
                      />
                    </div>
                  )}

                  {/* Coin Symbol */}
                  <span className={`${symbolFontSize} tracking-tight leading-none drop-shadow-xs truncate max-w-full px-0.5`}>
                    {coin.symbol}
                  </span>

                  {/* Price Change % */}
                  <span className={`${changeFontSize} font-mono leading-tight drop-shadow-xs mt-0.5 truncate max-w-full`}>
                    {coin.effectiveChange >= 0 ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                  </span>

                  {/* Price formatted if space permits */}
                  {isHuge && (
                    <span className="text-[11px] font-mono opacity-90 mt-1 drop-shadow-xs">
                      ${formatPrice(coin.effectivePrice)}
                    </span>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          /* B) SECTOR-PARTITIONED TREEMAP (SECTOR MODE ENABLED) */
          sectorGroups.map(({ sector, rect, nodes }) => {
            const isSectorPositive = sector.avgChange >= 0;

            return (
              <div
                key={sector.id}
                style={{
                  position: 'absolute',
                  left: `${(rect.x / canvasDimensions.width) * 100}%`,
                  top: `${(rect.y / canvasDimensions.height) * 100}%`,
                  width: `${(rect.width / canvasDimensions.width) * 100}%`,
                  height: `${(rect.height / canvasDimensions.height) * 100}%`,
                  padding: '2px'
                }}
                className="overflow-hidden"
              >
                <div className="w-full h-full rounded-lg border border-[var(--border)] bg-[var(--card)]/90 flex flex-col overflow-hidden shadow-xs">
                  {/* Sector Header Banner */}
                  <div className="h-6 shrink-0 bg-[var(--background)] px-2 flex items-center justify-between border-b border-[var(--border)] text-[10px] font-bold">
                    <span className="truncate text-[var(--foreground)]">{sector.category}</span>
                    <span className={`font-mono ${isSectorPositive ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {isSectorPositive ? '+' : ''}{sector.avgChange.toFixed(2)}%
                    </span>
                  </div>

                  {/* Sector Inner Tiles */}
                  <div className="w-full flex-1 relative">
                    {nodes.map((node: TreemapNode<any>) => {
                      const coin = node.data;
                      const colors = getCoinglassColor(coin.effectiveChange);
                      const isWide = node.width >= 50;
                      const isTall = node.height >= 40;

                      // Coordinates relative to the sector box
                      const relX = node.x - (rect.x + 1);
                      const relY = node.y - (rect.y + 24);
                      const innerW = rect.width - 2;
                      const innerH = rect.height - 25;

                      return (
                        <Link
                          key={coin.id}
                          href={`/kripto/${coin.slug}/`}
                          style={{
                            position: 'absolute',
                            left: `${(relX / innerW) * 100}%`,
                            top: `${(relY / innerH) * 100}%`,
                            width: `${(node.width / innerW) * 100}%`,
                            height: `${(node.height / innerH) * 100}%`,
                            padding: '1px'
                          }}
                          onMouseEnter={(e) => {
                            const containerRect = containerRef.current?.getBoundingClientRect();
                            if (containerRect) {
                              setHoveredCoin({
                                coin,
                                x: e.clientX - containerRect.left,
                                y: e.clientY - containerRect.top
                              });
                            }
                          }}
                          className="group transition-transform hover:z-20 cursor-pointer"
                        >
                          <div
                            className={`w-full h-full rounded-[2px] ${colors.bg} ${colors.text} flex flex-col items-center justify-center text-center p-0.5 overflow-hidden transition-all group-hover:brightness-110 group-hover:ring-2 group-hover:ring-white`}
                          >
                            <span className="font-black text-[11px] leading-tight truncate max-w-full">
                              {coin.symbol}
                            </span>
                            <span className="font-mono text-[9px] leading-tight truncate max-w-full opacity-95">
                              {coin.effectiveChange >= 0 ? '+' : ''}{coin.effectiveChange.toFixed(1)}%
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* 3. FLOATING RICH HOVER TOOLTIP */}
        {hoveredCoin && (
          <div
            style={{
              position: 'absolute',
              left: Math.min(hoveredCoin.x + 15, canvasDimensions.width - 260),
              top: Math.min(hoveredCoin.y + 15, canvasDimensions.height - 180),
              pointerEvents: 'none',
              zIndex: 50
            }}
            className="rounded-2xl border border-white/20 bg-slate-950/95 backdrop-blur-md p-3.5 shadow-2xl text-white w-60 space-y-2.5 transition-all duration-75"
          >
            {/* Header: Logo, Name, Symbol, Rank */}
            <div className="flex items-center gap-2.5">
              <CoinIcon
                symbol={hoveredCoin.coin.symbol}
                name={hoveredCoin.coin.name}
                imageUrl={hoveredCoin.coin.imageUrl}
                size={34}
                className="border border-white/20 shadow-xs"
              />
              <div className="min-w-0">
                <div className="font-black text-sm text-white truncate flex items-center gap-1.5">
                  <span>{hoveredCoin.coin.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">#{hoveredCoin.coin.marketCapRank}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {hoveredCoin.coin.symbol} • {hoveredCoin.coin.category}
                </div>
              </div>
            </div>

            {/* Price & 24h Change */}
            <div className="flex items-baseline justify-between border-t border-white/10 pt-2">
              <div>
                <div className="text-base font-black font-mono text-white">
                  ${formatPrice(hoveredCoin.coin.effectivePrice)}
                </div>
                <div className="text-[11px] font-mono text-slate-300">
                  ₺{(hoveredCoin.coin.effectivePrice * usdtRate).toLocaleString('tr-TR', { maximumFractionDigits: hoveredCoin.coin.effectivePrice > 1 ? 2 : 4 })} TRY
                </div>
              </div>

              <div className={`px-2 py-0.5 rounded-lg text-xs font-mono font-black ${
                hoveredCoin.coin.effectiveChange >= 0
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
              }`}>
                {hoveredCoin.coin.effectiveChange >= 0 ? '+' : ''}{hoveredCoin.coin.effectiveChange.toFixed(2)}%
              </div>
            </div>

            {/* Volume & Market Cap */}
            <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-2 text-[10px] font-mono text-slate-300">
              <div>
                <span className="text-slate-400 block">24s Hacim</span>
                <strong className="text-white">{formatLargeUsd(hoveredCoin.coin.volume24hUsd)}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Piyasa Değeri</span>
                <strong className="text-white">{formatLargeUsd(hoveredCoin.coin.marketCapUsd)}</strong>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Color Scale Legend (Coinglass Standard) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[var(--card-muted)]">
        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span>Getiri Skalası:</span>
          <div className="flex items-center rounded-md overflow-hidden border border-[var(--border)] text-[9px] font-bold text-white">
            <span className="px-1.5 py-0.5 bg-[#991B1B]">&lt;-5%</span>
            <span className="px-1.5 py-0.5 bg-[#DC2626]">-2.5%</span>
            <span className="px-1.5 py-0.5 bg-[#F87171]">-0.8%</span>
            <span className="px-1.5 py-0.5 bg-[#64748B]">0%</span>
            <span className="px-1.5 py-0.5 bg-[#22C55E]">+0.8%</span>
            <span className="px-1.5 py-0.5 bg-[#007A43]">+2.5%</span>
            <span className="px-1.5 py-0.5 bg-[#005A32]">&gt;+5%</span>
          </div>
        </div>

        <Link
          href="/market-isi-semasi/"
          className="text-[#2962FF] font-bold hover:underline flex items-center gap-1"
        >
          Tam Ekran Isı Şeması Sayfası <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
