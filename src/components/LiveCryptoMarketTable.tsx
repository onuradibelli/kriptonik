'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CoinData } from '../lib/types';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { formatUsd, formatTry } from '../lib/format';
import Sparkline from './Sparkline';
import CoinIcon from './CoinIcon';
import {
  Search,
  Star,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Flame,
  DollarSign,
  Compass,
  Layers,
  ArrowUpDown,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

interface LiveCryptoMarketTableProps {
  coins: CoinData[];
  tickers: Record<string, { price: number; change24h: number; flashDirection?: 'UP' | 'DOWN' | null }>;
  watchlist: string[];
  onToggleWatchlist: (symbol: string) => void;
}

type SortField = 'rank' | 'price' | 'change' | 'liquidation' | 'funding' | 'oi';
type SortOrder = 'asc' | 'desc';
type CategoryType = 'ALL' | 'L1' | 'DEFI' | 'AI' | 'MEME' | 'GAINERS' | 'LOSERS' | 'LIQUIDATION' | 'OI' | 'FAVORITES';

export default function LiveCryptoMarketTable({
  coins,
  tickers,
  watchlist,
  onToggleWatchlist,
}: LiveCryptoMarketTableProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);

  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder(field === 'rank' ? 'asc' : 'desc');
    }
  };

  const filteredCoins = useMemo(() => {
    let result = coins.map((c) => {
      const liveTick = tickers[c.binanceSymbol];
      const livePrice = liveTick?.price || c.price;
      const liveChange = liveTick?.change24h !== undefined ? liveTick.change24h : c.change24h;
      return {
        ...c,
        effectivePrice: livePrice,
        effectiveChange: liveChange,
        flash: liveTick?.flashDirection
      };
    });

    // 1. Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) => c.name.toLowerCase().includes(query) || c.symbol.toLowerCase().includes(query)
      );
    }

    // 2. Category filter
    if (activeCategory === 'L1') {
      result = result.filter((c) => (c.category || '').toLowerCase().includes('katman 1') || ['BTC', 'ETH', 'SOL', 'BNB', 'AVAX', 'SUI', 'ADA', 'NEAR', 'APT', 'DOT', 'TRX', 'KAS', 'SEI', 'FTM'].includes(c.symbol));
    } else if (activeCategory === 'DEFI') {
      result = result.filter((c) => (c.category || '').toLowerCase().includes('defi') || (c.category || '').toLowerCase().includes('dex') || ['UNI', 'AAVE', 'CRV', 'RAY', 'CAKE', 'JUP', 'ENA', 'MORPHO'].includes(c.symbol));
    } else if (activeCategory === 'AI') {
      result = result.filter((c) => (c.category || '').toLowerCase().includes('yapay zeka') || (c.category || '').toLowerCase().includes('ai') || ['TAO', 'RENDER', 'NEAR', 'WLD', 'FET'].includes(c.symbol));
    } else if (activeCategory === 'MEME') {
      result = result.filter((c) => (c.category || '').toLowerCase().includes('meme') || ['DOGE', 'SHIB', 'PEPE', 'WIF', 'BONK', 'FLOKI', 'PUMP'].includes(c.symbol));
    } else if (activeCategory === 'GAINERS') {
      result = result.filter((c) => c.effectiveChange > 0).sort((a, b) => b.effectiveChange - a.effectiveChange);
    } else if (activeCategory === 'LOSERS') {
      result = result.filter((c) => c.effectiveChange < 0).sort((a, b) => a.effectiveChange - b.effectiveChange);
    } else if (activeCategory === 'LIQUIDATION') {
      result = result.sort((a, b) => b.totalLiquidation24hUsd - a.totalLiquidation24hUsd);
    } else if (activeCategory === 'OI') {
      result = result.sort((a, b) => b.openInterestUsd - a.openInterestUsd);
    } else if (activeCategory === 'FAVORITES') {
      result = result.filter((c) => watchlist.includes(c.symbol));
    }

    // 3. Sorting
    if (activeCategory === 'ALL' || activeCategory === 'L1' || activeCategory === 'DEFI' || activeCategory === 'AI' || activeCategory === 'MEME' || activeCategory === 'FAVORITES') {
      result.sort((a, b) => {
        let diff = 0;
        if (sortField === 'rank') diff = a.marketCapRank - b.marketCapRank;
        else if (sortField === 'price') diff = a.effectivePrice - b.effectivePrice;
        else if (sortField === 'change') diff = a.effectiveChange - b.effectiveChange;
        else if (sortField === 'liquidation') diff = a.totalLiquidation24hUsd - b.totalLiquidation24hUsd;
        else if (sortField === 'funding') diff = a.fundingRates.binance - b.fundingRates.binance;
        else if (sortField === 'oi') diff = a.openInterestUsd - b.openInterestUsd;
        return sortOrder === 'asc' ? diff : -diff;
      });
    }

    return result;
  }, [coins, tickers, searchQuery, activeCategory, sortField, sortOrder, watchlist]);

  const totalPages = pageSize === -1 ? 1 : Math.ceil(filteredCoins.length / pageSize);
  const displayedCoins = useMemo(() => {
    if (pageSize === -1) return filteredCoins;
    const start = (currentPage - 1) * pageSize;
    return filteredCoins.slice(start, start + pageSize);
  }, [filteredCoins, currentPage, pageSize]);

  return (
    <div className="panel-card p-5 sm:p-6 space-y-5">
      {/* 1. Header with Title, Search Filter and Count Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] font-bold">
              ⚡
            </span>
            <h2 className="text-lg font-black text-[var(--foreground)]">
              Canlı Kripto Varlıklar Pazar Tablosu
            </h2>
            <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-[10px] font-mono font-bold">
              ANLIK WS SİNYALİ
            </span>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Binance vadeli tahta derinliği, tasfiye seviyeleri ve borsalar arası fonlama oranlarıyla anlık güncellenen pazar tarayıcısı ({coins.length} Varlık).
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--card-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Coin veya sembol ara..."
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-9 pr-4 py-2 text-xs text-[var(--foreground)] placeholder:text-[var(--card-muted)] focus:border-[#2962FF] focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--card-muted)] hover:text-[var(--foreground)]"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {[
          { id: 'ALL', label: `Tüm Varlıklar (${coins.length})` },
          { id: 'L1', label: '⛓️ Katman 1' },
          { id: 'DEFI', label: '🏦 DeFi & DEX' },
          { id: 'AI', label: '🤖 Yapay Zeka (AI)' },
          { id: 'MEME', label: '🐸 Meme Coinler' },
          { id: 'GAINERS', label: '🔥 En Çok Yükselenler' },
          { id: 'LOSERS', label: '🔻 En Çok Düşenler' },
          { id: 'LIQUIDATION', label: '⚡ Yüksek Likidasyon' },
          { id: 'OI', label: '📊 Açık Pozisyon Liderleri' },
          { id: 'FAVORITES', label: `⭐ Takip Listem (${watchlist.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id as CategoryType);
              setCurrentPage(1);
            }}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-[#2962FF] text-white shadow-xs font-bold'
                : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. The Live Table Screener */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--card-subtle)] text-xs text-[var(--card-muted)] select-none">
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)]" onClick={() => handleSort('rank')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span># Varlık</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)]" onClick={() => handleSort('price')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span>Canlı Fiyat ($ / ₺)</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)]" onClick={() => handleSort('change')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span>24s Değişim</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 hidden lg:table-cell">24s Fiyat Aralığı</th>
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)] hidden md:table-cell" onClick={() => handleSort('liquidation')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span>24s Likidasyon</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)] hidden sm:table-cell" onClick={() => handleSort('funding')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span>Fonlama (APR)</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-[var(--foreground)] hidden xl:table-cell" onClick={() => handleSort('oi')}>
                <div className="flex items-center gap-1 font-semibold">
                  <span>Açık Pozisyon (OI)</span>
                  <ArrowUpDown className="h-3 w-3 opacity-60" />
                </div>
              </th>
              <th className="py-3 px-3 hidden sm:table-cell text-center">24s Trend</th>
              <th className="py-3 px-3 text-right">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {displayedCoins.map((coin) => {
              const isPos = coin.effectiveChange >= 0;
              const tryPrice = coin.effectivePrice * usdtRate;
              const isFav = watchlist.includes(coin.symbol);

              const high24 = coin.high24h || coin.effectivePrice * 1.025;
              const low24 = coin.low24h || coin.effectivePrice * 0.975;
              const rangePercent = Math.min(100, Math.max(0, ((coin.effectivePrice - low24) / (high24 - low24)) * 100));

              const liqTotal = (coin.totalLiquidation24hUsd / 1_000_000).toFixed(1);
              const shortPercent = coin.shortPercentage;

              const fundingApr = (coin.fundingRates.binance * 3 * 365 * 100).toFixed(2);
              const isFundingPos = coin.fundingRates.binance >= 0;

              return (
                <tr
                  key={coin.id}
                  onClick={() => router.push(`/kripto/${coin.slug}/`)}
                  className="hover:bg-[var(--card-hover)] transition-colors cursor-pointer group"
                >
                  {/* # Rank & Asset */}
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWatchlist(coin.symbol);
                        }}
                        className="text-[var(--card-muted)] hover:text-amber-400 transition-colors cursor-pointer"
                        title={isFav ? 'Takip listesinden çıkar' : 'Takip listesine sabitle'}
                      >
                        <Star className={`h-4 w-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                      </button>

                      <span className="font-mono text-xs text-[var(--card-muted)] w-4 text-center">
                        {coin.marketCapRank}
                      </span>

                      <CoinIcon
                        symbol={coin.symbol}
                        name={coin.name}
                        imageUrl={coin.imageUrl}
                        size={32}
                        className="border border-[var(--border)] shadow-2xs group-hover:scale-105 transition-transform"
                      />

                      <div>
                        <div className="font-bold text-sm text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors flex items-center gap-1.5 font-sans">
                          <span>{coin.name}</span>
                          <span className="font-mono text-xs text-[var(--card-muted)]">{coin.symbol}</span>
                        </div>
                        <div className="text-[11px] text-[var(--card-muted)] font-mono">
                          {coin.binanceSymbol}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Price ($ and ₺) */}
                  <td className="py-3.5 px-3">
                    <div className="font-mono font-bold text-sm sm:text-base text-[var(--foreground)] inline-block">
                      {formatUsd(coin.effectivePrice)}
                    </div>
                    <div className="text-xs font-mono text-[var(--card-muted)]">
                      {formatTry(tryPrice)}
                    </div>
                  </td>

                  {/* 24h Change */}
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center gap-0.5 rounded-lg px-2 py-0.5 font-mono text-xs font-bold ${
                      isPos ? 'bg-[#00E699]/15 text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
                    }`}>
                      {isPos ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {isPos ? '+' : ''}{coin.effectiveChange.toFixed(2)}%
                    </span>
                  </td>

                  {/* 24h Price Range Slider */}
                  <td className="py-3 px-3 hidden lg:table-cell">
                    <div className="space-y-1 w-32">
                      <div className="flex justify-between text-[9px] font-mono text-[var(--card-muted)]">
                        <span>{formatUsd(low24)}</span>
                        <span>{formatUsd(high24)}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-[var(--border)] relative overflow-hidden">
                        <div
                          className="absolute top-0 bottom-0 bg-[#2962FF] rounded-full"
                          style={{ width: `${rangePercent}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* 24h Liquidation Pool */}
                  <td className="py-3 px-3 hidden md:table-cell">
                    <div className="space-y-1">
                      <div className="font-mono font-bold text-[var(--foreground)]">
                        ${liqTotal}M
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono">
                        <span className="text-[#FF3B56]">S:%{shortPercent}</span>
                        <span className="text-[var(--border)]">•</span>
                        <span className="text-[#00E699]">L:%{100 - shortPercent}</span>
                      </div>
                    </div>
                  </td>

                  {/* Funding Rate (APR) */}
                  <td className="py-3 px-3 hidden sm:table-cell">
                    <span className={`font-mono font-bold text-[11px] ${
                      isFundingPos ? 'text-[#00E699]' : 'text-[#FF3B56]'
                    }`}>
                      {isFundingPos ? '+' : ''}{fundingApr}%
                    </span>
                    <div className="text-[10px] text-[var(--card-muted)] font-mono">
                      {isFundingPos ? 'Long Öder' : 'Short Öder'}
                    </div>
                  </td>

                  {/* Open Interest */}
                  <td className="py-3 px-3 hidden xl:table-cell">
                    <div className="font-mono font-bold text-[var(--foreground)]">
                      ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
                    </div>
                    <div className={`text-[10px] font-mono ${
                      coin.openInterestChange24h >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'
                    }`}>
                      {coin.openInterestChange24h >= 0 ? '+' : ''}{coin.openInterestChange24h.toFixed(1)}% (24s)
                    </div>
                  </td>

                  {/* Sparkline */}
                  <td className="py-3 px-3 hidden sm:table-cell text-center">
                    <div className="flex justify-center">
                      <Sparkline change24h={coin.effectiveChange} width={100} height={26} />
                    </div>
                  </td>

                  {/* Terminal Button */}
                  <td className="py-3 px-3 text-right">
                    <Link
                      href={`/kripto/${coin.slug}/`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] hover:border-[#2962FF] hover:bg-[#2962FF] hover:text-white px-2.5 py-1 text-[11px] font-bold text-[var(--foreground)] transition-all font-sans"
                    >
                      <span>Terminal</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredCoins.length === 0 && (
          <div className="py-12 text-center text-xs text-[var(--card-muted)] space-y-2">
            <p className="font-bold text-[var(--foreground)]">Eşleşen varlık bulunamadı</p>
            <p>Arama kriterinizi değiştirerek veya filtreleri temizleyerek tekrar deneyin.</p>
          </div>
        )}
      </div>

      {/* Enhanced Pagination Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-[var(--border)] text-xs font-mono text-[var(--card-muted)]">
        {/* Left: Display Count & Page Size Selector */}
        <div className="flex flex-wrap items-center gap-3">
          <div>
            Gösterilen: <strong className="text-[var(--foreground)]">{pageSize === -1 ? filteredCoins.length : Math.min(filteredCoins.length, (currentPage - 1) * pageSize + 1)} - {pageSize === -1 ? filteredCoins.length : Math.min(filteredCoins.length, currentPage * pageSize)}</strong> / Toplam <strong className="text-[var(--foreground)]">{filteredCoins.length}</strong> Kripto Varlık
          </div>

          <div className="flex items-center gap-1 bg-[var(--background)] p-1 rounded-xl border border-[var(--border)]">
            <span className="px-2 text-[11px] text-[var(--card-muted)]">Sayfa Başı:</span>
            {[25, 50, 100, -1].map((size) => (
              <button
                key={size}
                onClick={() => {
                  setPageSize(size);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  pageSize === size
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {size === -1 ? 'Tümü' : size}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Page Buttons */}
        {pageSize !== -1 && totalPages > 1 && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-bold text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#2962FF] transition-all cursor-pointer"
            >
              ← Önceki
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
              .map((page, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && page - prev > 1;

                return (
                  <React.Fragment key={page}>
                    {showEllipsis && <span className="px-1 text-[var(--card-muted)]">...</span>}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded-xl font-bold transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-[#2962FF] text-white shadow-xs'
                          : 'border border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] hover:border-[#2962FF]'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                );
              })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-bold text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#2962FF] transition-all cursor-pointer"
            >
              Sonraki →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
