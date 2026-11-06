'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COINS_DATA, WHALE_TRANSACTIONS } from '../lib/data';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import LiquidationHeatmap from '../components/LiquidationHeatmap';
import FundingMatrix from '../components/FundingMatrix';
import TokenUnlockCalendar from '../components/TokenUnlockCalendar';
import WhaleTracker from '../components/WhaleTracker';
import FearGreedWidget from '../components/FearGreedWidget';
import OpenInterestRadar from '../components/OpenInterestRadar';
import EtfTracker from '../components/EtfTracker';
import KacTlConverter from '../components/KacTlConverter';
import UsdtPremiumWidget from '../components/UsdtPremiumWidget';
import Sparkline from '../components/Sparkline';
import { Flame, DollarSign, Calendar, Compass, ShieldAlert, ArrowUpRight, Zap, TrendingUp, BarChart3, Calculator, Star, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'ALL' | 'FAVORITES'>('ALL');

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

  const selectedCoin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];

  // Load watchlist from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kriptonik_watchlist');
      if (saved) {
        setWatchlist(JSON.parse(saved));
      } else {
        // Default favorites
        setWatchlist(['BTC', 'ETH', 'SOL']);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const toggleFavorite = (symbol: string) => {
    setWatchlist((prev) => {
      const next = prev.includes(symbol)
        ? prev.filter((s) => s !== symbol)
        : [...prev, symbol];
      try {
        localStorage.setItem('kriptonik_watchlist', JSON.stringify(next));
      } catch (e) {
        // Ignore
      }
      return next;
    });
  };

  const displayedCoins =
    activeTab === 'FAVORITES'
      ? COINS_DATA.filter((c) => watchlist.includes(c.symbol))
      : COINS_DATA;

  return (
    <div className="space-y-8">
      {/* 1. Hero Telemetry Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card-subtle)] to-[var(--background)] p-6 sm:p-8 shadow-xs">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2962FF]/30 bg-[#2962FF]/10 px-3 py-1 text-xs font-bold text-[#2962FF]">
            <Zap className="h-3.5 w-3.5" />
            <span>Kriptonik On-Chain & Türev İstihbarat Terminali v2.5</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight">
            Sıfır Gürültü, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2962FF] to-[#00C087]">Maksimum Sinyal.</span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
            Coinglass ve CryptoQuant karmaşasını geride bırakın. Kaldıraçlı tasfiye derinlik grafikleri, borsalar arası fonlama arbitrajı, kurumsal Spot ETF net girişleri ve kilit açılım risk analizleri tek bir canlı ekranda.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">24s Toplam Piyasa Tasfiyesi</div>
              <div className="mt-1 font-mono text-lg font-black text-[#F6465D]">$348.5M</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">%62 Short • %38 Long</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Toplam Açık Pozisyon (OI)</div>
              <div className="mt-1 font-mono text-lg font-black text-[#2962FF]">$68.4B</div>
              <div className="text-[10px] text-[#00C087] font-semibold mt-0.5">+%5.42 (Son 24s)</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Piyasa Ağırlıklı Fonlama</div>
              <div className="mt-1 font-mono text-lg font-black text-[#00C087]">+%0.0125</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">Ilımlı Boğa Baskısı</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Bu Ay Açılacak Kilitli Arz</div>
              <div className="mt-1 font-mono text-lg font-black text-[#D97706] dark:text-[#F2C14E]">$2.45B</div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">Cliff & Linear Takvimi</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Liquidation Heatmap Module */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#F6465D]" />
            <h2 className="text-lg font-black text-[var(--foreground)]">Canlı Likidasyon Isı Haritası</h2>
          </div>

          {/* Coin Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {COINS_DATA.slice(0, 5).map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCoinSlug(c.slug)}
                className={`rounded-lg px-3 py-1 text-xs font-mono font-bold transition-all ${
                  selectedCoinSlug === c.slug
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
                }`}
              >
                {c.symbol}
              </button>
            ))}
            <Link
              href="/likidasyon/"
              className="rounded-lg px-3 py-1 text-xs text-[#2962FF] hover:underline flex items-center gap-1 font-bold"
            >
              Tüm Isı Haritaları <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <LiquidationHeatmap coin={selectedCoin} />
      </section>

      {/* 3. Multi-Exchange Funding Matrix & Fear & Greed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FundingMatrix coins={COINS_DATA} />
        </div>
        <div>
          <FearGreedWidget />
        </div>
      </div>

      {/* 4. Leverage Calculator Interactive Promo Banner */}
      <section className="rounded-2xl border border-[var(--border)] bg-gradient-to-r from-[var(--card)] via-[var(--card-subtle)] to-[var(--card)] p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00C087]/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#00C087] border border-[#00C087]/30">
            <Sparkles className="h-3 w-3" />
            YENİ PRO ARAÇ
          </div>
          <h3 className="text-base sm:text-lg font-black text-[var(--foreground)]">
            Kaldıraç & Likidasyon Fiyatı Simülatörü
          </h3>
          <p className="text-xs text-[var(--card-muted)] max-w-xl">
            1x ile 125x arasında pozisyon açmadan önce tahmini tasfiye seviyenizi, bakım marjı mesafenizi ve komisyon sonrası net kâr/zarar senaryolarını hesaplayın.
          </p>
        </div>

        <Link
          href="/hesaplayici/"
          className="shrink-0 flex items-center gap-2 rounded-xl bg-[#2962FF] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#2962FF]/20 hover:bg-[#1E4BD8] transition-all"
        >
          <Calculator className="h-4 w-4" />
          Hesaplayıcıyı Başlat
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* 5. Spot ETF Daily Institutional Flows */}
      <section>
        <EtfTracker />
      </section>

      {/* 6. Token Unlock 30-Day Calendar */}
      <section>
        <TokenUnlockCalendar coins={COINS_DATA} />
      </section>

      {/* 7. Open Interest Radar & Whale Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OpenInterestRadar coins={COINS_DATA} />
        <WhaleTracker transactions={WHALE_TRANSACTIONS} />
      </div>

      {/* 8. Tether Primi & Döviz Arbitraj Göstergesi */}
      <section>
        <UsdtPremiumWidget />
      </section>

      {/* 9. Kaç TL? Canlı Kur ve Kripto Çevirici */}
      <section>
        <KacTlConverter />
      </section>

      {/* 10. Programmatic 360 Coin Directory with Watchlist Support */}
      <section className="panel-card p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
          <div>
            <h3 className="text-base font-bold text-[var(--foreground)]">
              Kriptonik Türev ve On-Chain İndeksi
            </h3>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              Her coin için algoritmik olarak oluşturulan anlık likidasyon duvarları, fonlama geçmişi ve kilit açılım raporları.
            </p>
          </div>

          {/* Watchlist Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-1 text-xs">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`rounded-lg px-3 py-1 font-mono font-semibold transition-all ${
                activeTab === 'ALL'
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Tüm Varlıklar ({COINS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('FAVORITES')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono font-semibold transition-all ${
                activeTab === 'FAVORITES'
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              Takip Listem ({watchlist.length})
            </button>
          </div>
        </div>

        {displayedCoins.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
            {displayedCoins.map((coin) => {
              const isFav = watchlist.includes(coin.symbol);
              const liveTick = tickers[coin.binanceSymbol];
              const displayPrice = liveTick?.price || coin.price;
              const displayChange = liveTick?.change24h !== undefined ? liveTick.change24h : coin.change24h;

              return (
                <div
                  key={coin.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3 hover:border-[#2962FF] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => toggleFavorite(coin.symbol)}
                          title={isFav ? 'Takip listesinden çıkar' : 'Takip listesine ekle'}
                          className="text-[var(--card-muted)] hover:text-amber-400 transition-colors"
                        >
                          <Star className={`h-3.5 w-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </button>
                        <span className="font-bold text-[var(--foreground)]">{coin.symbol}</span>
                      </div>
                      <span className={`font-mono text-[11px] font-bold ${displayChange >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                        {displayChange >= 0 ? '+' : ''}{displayChange.toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[var(--card-muted)] truncate mt-0.5">{coin.name}</div>
                    <div className={`font-mono text-xs font-bold text-[var(--foreground)] mt-1 transition-colors px-1 rounded inline-block ${
                      liveTick?.flashDirection === 'UP' ? 'tick-flash-up text-[#00C087]' : liveTick?.flashDirection === 'DOWN' ? 'tick-flash-down text-[#F6465D]' : ''
                    }`}>
                      ${displayPrice > 10 ? displayPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : displayPrice.toFixed(4)}
                    </div>

                    {/* 24h Trend Sparkline */}
                    <div className="mt-2 flex justify-center">
                      <Sparkline change24h={displayChange} width={120} height={28} />
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[var(--border)] flex flex-col gap-1 text-[10px] font-mono">
                    <Link href={`/likidasyon/${coin.slug}/`} className="text-[#2962FF] hover:underline font-semibold">
                      → Likidasyon
                    </Link>
                    <Link href={`/fonlama-oranlari/${coin.slug}/`} className="text-[#00C087] hover:underline font-semibold">
                      → Fonlama
                    </Link>
                    <Link href={`/kripto/${coin.slug}/`} className="text-[var(--card-muted)] hover:text-[var(--foreground)] hover:underline">
                      → 360 Analiz
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-xs text-[var(--card-muted)] space-y-2">
            <Star className="mx-auto h-8 w-8 text-amber-400/40" />
            <p className="font-bold text-[var(--foreground)]">Takip listeniz henüz boş</p>
            <p>Coin kartlarındaki yıldız (⭐) ikonuna tıklayarak sık takip ettiğiniz varlıkları buraya sabitleyebilirsiniz.</p>
            <button
              onClick={() => setActiveTab('ALL')}
              className="mt-2 rounded-lg bg-[#2962FF]/15 text-[#2962FF] px-3 py-1 font-semibold text-xs border border-[#2962FF]/30 hover:bg-[#2962FF]/25 transition-colors"
            >
              Tüm Varlıkları Göster
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
