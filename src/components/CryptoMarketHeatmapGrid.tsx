'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { computeSquarifiedTreemap, TreemapNode } from '../lib/squarify';
import CoinIcon from './CoinIcon';
import { 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  Maximize2,
  ExternalLink,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

interface CryptoMarketHeatmapGridProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
}

type CoinFilter = 'ALL' | 'TOP30' | 'TOP50' | 'TOP100' | 'L1' | 'DEFI' | 'AI' | 'MEME';

// TradingView / Finviz style precise solid color palette
const getTradingViewColor = (change: number, isStable: boolean): { bg: string; text: string; hex: string; border: string } => {
  // Stablecoins near zero are rendered neutral slate-gray, matching TradingView Screenshot 2
  if (isStable || Math.abs(change) < 0.05) {
    return { 
      bg: 'bg-[#64748B] hover:bg-[#475569]', 
      text: 'text-white', 
      hex: '#64748B',
      border: 'border-white/20 dark:border-black/30'
    };
  }
  if (change >= 5.0) {
    return { 
      bg: 'bg-[#005A32] hover:bg-[#004727]', 
      text: 'text-white', 
      hex: '#005A32',
      border: 'border-emerald-300/30 dark:border-black/40'
    }; // Dark forest green
  }
  if (change >= 2.5) {
    return { 
      bg: 'bg-[#007A43] hover:bg-[#006839]', 
      text: 'text-white', 
      hex: '#007A43',
      border: 'border-emerald-300/30 dark:border-black/40'
    }; // Rich green
  }
  if (change >= 0.8) {
    return { 
      bg: 'bg-[#00A859] hover:bg-[#00934e]', 
      text: 'text-white', 
      hex: '#00A859',
      border: 'border-emerald-200/30 dark:border-black/40'
    }; // Emerald green
  }
  if (change > 0) {
    return { 
      bg: 'bg-[#10B981] hover:bg-[#059669]', 
      text: 'text-white', 
      hex: '#10B981',
      border: 'border-emerald-200/30 dark:border-black/40'
    }; // Soft light green
  }
  if (change > -0.8) {
    return { 
      bg: 'bg-[#F87171] hover:bg-[#ef4444]', 
      text: 'text-white', 
      hex: '#F87171',
      border: 'border-rose-200/30 dark:border-black/40'
    }; // Soft coral red
  }
  if (change > -2.5) {
    return { 
      bg: 'bg-[#EF4444] hover:bg-[#dc2626]', 
      text: 'text-white', 
      hex: '#EF4444',
      border: 'border-rose-300/30 dark:border-black/40'
    }; // Crimson red
  }
  if (change > -5.0) {
    return { 
      bg: 'bg-[#DC2626] hover:bg-[#b91c1c]', 
      text: 'text-white', 
      hex: '#DC2626',
      border: 'border-rose-300/30 dark:border-black/40'
    }; // Strong red
  }
  return { 
    bg: 'bg-[#991B1B] hover:bg-[#7f1d1d]', 
    text: 'text-white', 
    hex: '#991B1B',
    border: 'border-rose-400/30 dark:border-black/40'
  }; // Deep ruby red
};

export default function CryptoMarketHeatmapGrid({ coins, tickers }: CryptoMarketHeatmapGridProps) {
  const [filterGroup, setFilterGroup] = useState<CoinFilter>('ALL');
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
        const h = w > 768 ? Math.max(580, Math.round(w * 0.58)) : 500;
        setCanvasDimensions({ width: w, height: h });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Map real-time Binance tickers and filter by category/limit
  const mappedCoins = useMemo(() => {
    const list = coins.map((c) => {
      const liveTick = tickers[c.binanceSymbol];
      const livePrice = liveTick?.price || c.price;
      const liveChange = liveTick?.change24h !== undefined ? liveTick.change24h : c.change24h;

      return {
        ...c,
        effectivePrice: livePrice,
        effectiveChange: liveChange
      };
    });

    if (filterGroup === 'TOP30') return list.slice(0, 30);
    if (filterGroup === 'TOP50') return list.slice(0, 50);
    if (filterGroup === 'TOP100') return list.slice(0, 100);
    if (filterGroup === 'L1') {
      return list.filter((c) => (c.category || '').toLowerCase().includes('katman 1') || ['BTC', 'ETH', 'SOL', 'BNB', 'AVAX', 'SUI', 'ADA', 'NEAR'].includes(c.symbol));
    }
    if (filterGroup === 'DEFI') {
      return list.filter((c) => (c.category || '').toLowerCase().includes('defi') || ['UNI', 'AAVE', 'CRV', 'RAY', 'CAKE', 'JUP', 'ENA', 'LDO'].includes(c.symbol));
    }
    if (filterGroup === 'AI') {
      return list.filter((c) => (c.category || '').toLowerCase().includes('yapay zeka') || (c.category || '').toLowerCase().includes('ai') || ['TAO', 'RENDER', 'NEAR', 'WLD', 'FET'].includes(c.symbol));
    }
    if (filterGroup === 'MEME') {
      return list.filter((c) => (c.category || '').toLowerCase().includes('meme') || ['DOGE', 'SHIB', 'PEPE', 'WIF', 'BONK', 'FLOKI'].includes(c.symbol));
    }

    return list;
  }, [coins, tickers, filterGroup]);

  // Compute global treemap nodes (when Sector is OFF)
  const globalNodes = useMemo(() => {
    if (isSectorMode || mappedCoins.length === 0) return [];

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
    if (!isSectorMode || mappedCoins.length === 0) return [];

    const groups: Record<string, (CoinData & { effectivePrice: number; effectiveChange: number })[]> = {};
    mappedCoins.forEach((coin) => {
      const cat = coin.category || 'Diğer Altcoinler';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(coin);
    });

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

    const sectorRects = computeSquarifiedTreemap(sectorItems, {
      x: 0,
      y: 0,
      width: canvasDimensions.width,
      height: canvasDimensions.height
    });

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
      {/* 1. Header Toolbar Matching TradingView & Finviz */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        {/* Left Title & Status */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl font-black text-[var(--foreground)] tracking-tight">
            Market Isı Şeması (Crypto Heatmap)
          </h2>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#00E699]/15 px-2.5 py-0.5 text-xs font-mono font-bold text-[#00A86B] dark:text-[#00E699] border border-[#00E699]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] animate-pulse" />
            CANLI PIYASA AKIŞI
          </span>
        </div>

        {/* Right Controls: Filters matching TradingView Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
          {/* 1. Coin Universe Filter (TradingView "Crypto coins ⌄") */}
          <div className="relative">
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value as CoinFilter)}
              className="appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 pr-8 font-bold text-[var(--foreground)] hover:bg-[var(--card-subtle)] transition-colors cursor-pointer focus:outline-none"
            >
              <option value="ALL">Tüm Kriptolar ({coins.length}) ⌄</option>
              <option value="TOP30">İlk 30 Varlık ⌄</option>
              <option value="TOP50">İlk 50 Varlık ⌄</option>
              <option value="TOP100">İlk 100 Varlık ⌄</option>
              <option value="L1">Katman 1 (L1) ⌄</option>
              <option value="DEFI">DeFi & DEX ⌄</option>
              <option value="AI">AI & Veri ⌄</option>
              <option value="MEME">Meme Tokenler ⌄</option>
            </select>
            <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2.5 pointer-events-none text-[var(--card-muted)]" />
          </div>

          {/* 2. Weight Metric Dropdown (TradingView "Market cap ⌄") */}
          <div className="relative">
            <select
              value={weightMetric}
              onChange={(e) => setWeightMetric(e.target.value as any)}
              className="appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 pr-8 font-bold text-[var(--foreground)] hover:bg-[var(--card-subtle)] transition-colors cursor-pointer focus:outline-none"
            >
              <option value="MARKET_CAP">Market cap (Piyasa Değeri) ⌄</option>
              <option value="VOLUME">Volume 24h (24s Hacim) ⌄</option>
            </select>
            <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2.5 pointer-events-none text-[var(--card-muted)]" />
          </div>

          {/* 3. Timeframe Dropdown (TradingView "Change 24h, % ⌄") */}
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 pr-8 font-bold text-[var(--foreground)] hover:bg-[var(--card-subtle)] transition-colors cursor-pointer focus:outline-none"
            >
              <option value="24H">Fiyat Değişimi 24s, % ⌄</option>
              <option value="1H">Fiyat Değişimi 1s, % ⌄</option>
              <option value="7D">Fiyat Değişimi 7g, % ⌄</option>
            </select>
            <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2.5 pointer-events-none text-[var(--card-muted)]" />
          </div>

          {/* 4. Sector Toggle Checkbox (Finviz Screenshot 3) */}
          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--card-subtle)] cursor-pointer font-bold text-[var(--foreground)] transition-colors">
            <input
              type="checkbox"
              checked={isSectorMode}
              onChange={(e) => setIsSectorMode(e.target.checked)}
              className="rounded border-[var(--border)] text-[#2962FF] focus:ring-0 cursor-pointer h-3.5 w-3.5"
            />
            <span>Sector (Sektör)</span>
          </label>

          {/* 5. Screener Link */}
          <Link
            href="/kripto/bitcoin/"
            className="hidden xl:inline-flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-bold text-[var(--card-muted)] hover:text-[#2962FF] hover:border-[#2962FF] transition-colors"
          >
            <span>Open in Screener</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* 2. SQUARIFIED TREEMAP CANVAS (TRADINGVIEW & FINVIZ STYLE) */}
      <div 
        ref={containerRef}
        style={{ height: `${canvasDimensions.height}px` }}
        className="w-full relative rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900 shadow-inner"
        onMouseLeave={() => setHoveredCoin(null)}
      >
        {!isSectorMode ? (
          /* A) UNIFIED GLOBAL TREEMAP (TRADINGVIEW STYLE - SCREENSHOT 2) */
          globalNodes.map((node) => {
            const coin = node.data;
            const isStable = ['USDT', 'USDC', 'FDUSD', 'DAI', 'USDE', 'TUSD', 'PYUSD'].includes(coin.symbol.toUpperCase());
            const colors = getTradingViewColor(coin.effectiveChange, isStable);

            // Responsive sizing thresholds
            const w = node.width;
            const h = node.height;
            const isHuge = w >= 130 && h >= 100;
            const isLarge = w >= 80 && h >= 65;
            const isMedium = w >= 52 && h >= 44;
            const isSmall = w >= 34 && h >= 30;
            const isMicro = !isSmall;

            // Icon size dynamically matched to block dimensions
            const iconSize = isHuge ? 44 : isLarge ? 30 : isMedium ? 22 : isSmall ? 16 : 14;

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
                  className={`w-full h-full rounded-[2px] border ${colors.border} ${colors.bg} ${colors.text} flex flex-col items-center justify-center text-center p-1 overflow-hidden transition-all duration-150 group-hover:brightness-110 group-hover:ring-2 group-hover:ring-white`}
                >
                  {/* 1. Official Coin Logo Displayed on ALL Visible Tiles */}
                  {!isMicro && (
                    <div className="shrink-0 mb-1 flex items-center justify-center">
                      <CoinIcon
                        symbol={coin.symbol}
                        name={coin.name}
                        imageUrl={coin.imageUrl}
                        size={iconSize}
                        className="shadow-sm border border-white/20"
                      />
                    </div>
                  )}

                  {/* 2. Coin Name / Symbol (TradingView Screenshot 2: "Bitcoin", "Ethereum", "BNB", "XRP") */}
                  <span className={`font-black tracking-tight leading-none drop-shadow-sm truncate max-w-full px-0.5 ${
                    isHuge ? 'text-lg sm:text-xl' : isLarge ? 'text-xs sm:text-sm' : isMedium ? 'text-[11px]' : 'text-[9px]'
                  }`}>
                    {isHuge || (isLarge && coin.name.length <= 10) ? coin.name : coin.symbol}
                  </span>

                  {/* 3. 24h Change % */}
                  <span className={`font-mono font-bold leading-tight drop-shadow-sm mt-0.5 truncate max-w-full ${
                    isHuge ? 'text-sm sm:text-base' : isLarge ? 'text-xs' : 'text-[10px]'
                  }`}>
                    {coin.effectiveChange >= 0 ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                  </span>

                  {/* 4. Formatted Price on Big Tiles */}
                  {isHuge && (
                    <span className="text-[11px] font-mono opacity-90 mt-1 drop-shadow-sm font-semibold">
                      ${formatPrice(coin.effectivePrice)}
                    </span>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          /* B) SECTOR-PARTITIONED TREEMAP (SECTOR MODE ENABLED - SCREENSHOT 3) */
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
                <div className="w-full h-full rounded-lg border border-[var(--border)] bg-[var(--card)]/95 flex flex-col overflow-hidden shadow-xs">
                  {/* Sector Header Banner */}
                  <div className="h-6 shrink-0 bg-[var(--background)] px-2 flex items-center justify-between border-b border-[var(--border)] text-[11px] font-bold">
                    <span className="truncate text-[var(--foreground)]">{sector.category}</span>
                    <span className={`font-mono font-black ${isSectorPositive ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {isSectorPositive ? '+' : ''}{sector.avgChange.toFixed(2)}%
                    </span>
                  </div>

                  {/* Sector Inner Tiles with Logos */}
                  <div className="w-full flex-1 relative">
                    {nodes.map((node: TreemapNode<any>) => {
                      const coin = node.data;
                      const isStable = ['USDT', 'USDC', 'FDUSD', 'DAI', 'USDE', 'TUSD', 'PYUSD'].includes(coin.symbol.toUpperCase());
                      const colors = getTradingViewColor(coin.effectiveChange, isStable);

                      const relX = node.x - (rect.x + 1);
                      const relY = node.y - (rect.y + 24);
                      const innerW = rect.width - 2;
                      const innerH = rect.height - 25;

                      const showIcon = node.width >= 36 && node.height >= 34;
                      const iconSize = node.width >= 60 ? 22 : 16;

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
                            {showIcon && (
                              <div className="shrink-0 mb-0.5">
                                <CoinIcon
                                  symbol={coin.symbol}
                                  name={coin.name}
                                  imageUrl={coin.imageUrl}
                                  size={iconSize}
                                />
                              </div>
                            )}
                            <span className="font-black text-[10px] leading-tight truncate max-w-full">
                              {coin.symbol}
                            </span>
                            <span className="font-mono text-[9px] font-bold leading-tight truncate max-w-full opacity-95">
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
            className="w-64 rounded-xl border border-[var(--border)] bg-slate-950/95 p-3.5 text-white shadow-2xl backdrop-blur-md transition-opacity duration-100"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
              <CoinIcon
                symbol={hoveredCoin.coin.symbol}
                name={hoveredCoin.coin.name}
                imageUrl={hoveredCoin.coin.imageUrl}
                size={34}
                className="border border-white/20"
              />
              <div className="min-w-0">
                <div className="font-black text-sm text-white truncate flex items-center gap-1.5">
                  <span>{hoveredCoin.coin.name}</span>
                  <span className="font-mono text-xs text-white/60">({hoveredCoin.coin.symbol})</span>
                </div>
                <div className="text-[11px] font-mono text-white/60">
                  Sıralama #{hoveredCoin.coin.marketCapRank} • {hoveredCoin.coin.category}
                </div>
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Canlı Fiyat:</span>
                <span className="font-black text-white">
                  ${formatPrice(hoveredCoin.coin.effectivePrice)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">TL Karşılığı:</span>
                <span className="font-black text-white/90">
                  ₺{(hoveredCoin.coin.effectivePrice * usdtRate).toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">24s Değişim:</span>
                <span className={`font-black flex items-center gap-1 ${
                  hoveredCoin.coin.effectiveChange >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'
                }`}>
                  {hoveredCoin.coin.effectiveChange >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {hoveredCoin.coin.effectiveChange >= 0 ? '+' : ''}{hoveredCoin.coin.effectiveChange.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-1.5 text-[11px]">
                <span className="text-white/60">Piyasa Değeri:</span>
                <span className="font-bold text-white/90">
                  {formatLargeUsd(hoveredCoin.coin.marketCapUsd)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-white/60">24s Hacim:</span>
                <span className="font-bold text-white/90">
                  {formatLargeUsd(hoveredCoin.coin.volume24hUsd)}
                </span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-white/10 text-[10px] text-white/50 text-center font-sans">
              Detaylı analiz ve likidasyon haritası için tıklayın
            </div>
          </div>
        )}
      </div>

      {/* 4. Color Scale Legend Matching TradingView & Finviz */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-[var(--card-muted)]">
        <div className="flex items-center gap-1.5">
          <span className="font-bold">Renk Skalası:</span>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#991B1B] text-white font-bold">&lt;-5%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#DC2626] text-white font-bold">-3%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#F87171] text-white font-bold">-1%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#64748B] text-white font-bold">0%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#10B981] text-white font-bold">+1%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#00A859] text-white font-bold">+3%</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#005A32] text-white font-bold">&gt;+5%</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span>Toplam Varlık: <strong className="text-[var(--foreground)]">{mappedCoins.length}</strong></span>
          <span>Ağırlık: <strong className="text-[var(--foreground)]">{weightMetric === 'MARKET_CAP' ? 'Piyasa Değeri' : '24s Hacim'}</strong></span>
        </div>
      </div>
    </div>
  );
}
