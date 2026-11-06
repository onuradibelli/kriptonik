'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COINS_DATA, WHALE_TRANSACTIONS, LIVE_CURRENCY_RATES, FEAR_AND_GREED } from '../lib/data';
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
import LiveCryptoMarketTable from '../components/LiveCryptoMarketTable';
import CryptoMarketHeatmapGrid from '../components/CryptoMarketHeatmapGrid';
import MajorAssetsPulseBar from '../components/MajorAssetsPulseBar';
import Sparkline from '../components/Sparkline';
import {
  Flame,
  DollarSign,
  Calendar,
  Compass,
  ShieldAlert,
  ArrowUpRight,
  Zap,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Calculator,
  Star,
  Sparkles,
  Share2,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Layers,
  ArrowRightLeft
} from 'lucide-react';

export default function HomePage() {
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'ALL' | 'FAVORITES'>('ALL');
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [activeCockpitTab, setActiveCockpitTab] = useState<'heatmap' | 'funding' | 'etf' | 'whales' | 'converter' | 'directory'>('heatmap');
  const [expandAllModules, setExpandAllModules] = useState(false);

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

  // Watchlist persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kriptonik_watchlist');
      if (saved) {
        setWatchlist(JSON.parse(saved));
      } else {
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

  // Telegram / X formatted instant market brief with real live rates & ETF net flow data
  const handleCopyBrief = () => {
    const btcTick = tickers['BTCUSDT'] || defaultTickers.BTCUSDT;
    const ethTick = tickers['ETHUSDT'] || defaultTickers.ETHUSDT;
    const solTick = tickers['SOLUSDT'] || defaultTickers.SOLUSDT;
    const dateStr = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    
    const usdtTry = LIVE_CURRENCY_RATES.USDT_TRY; // 50.04
    const usdTry = LIVE_CURRENCY_RATES.USD_TRY;   // 50.15

    const text = `📊 KRİPTONİK GÜNLÜK PİYASA RAPORU (${dateStr})
--------------------------------------------------
🪙 BTC/USDT: $${btcTick.price.toLocaleString('tr-TR')} (${btcTick.change24h >= 0 ? '+' : ''}${btcTick.change24h.toFixed(2)}%)
🪙 ETH/USDT: $${ethTick.price.toLocaleString('tr-TR')} (${ethTick.change24h >= 0 ? '+' : ''}${ethTick.change24h.toFixed(2)}%)
🪙 SOL/USDT: $${solTick.price.toLocaleString('tr-TR')} (${solTick.change24h >= 0 ? '+' : ''}${solTick.change24h.toFixed(2)}%)

🔥 24s Likidasyon: $348.5M (Baskı: %62 Short Tasfiyesi)
📈 Toplam OI (Açık Pozisyon): $68.4B (+%5.42)
⚖️ Ağırlıklı Fonlama Oranı: +%0.0125 (Ilımlı Boğa)
🏦 Spot ETF Akışı: -$506.8M Net Çıkış (BTC -$438.4M, ETH -$68.4M)
💵 USDT/TRY: ₺${usdtTry.toFixed(2)} | USD/TRY: ₺${usdTry.toFixed(2)} (Makas: %-0.22)
😱 Korku & Açgözlülük: ${FEAR_AND_GREED.value} (${FEAR_AND_GREED.classification.split(' ')[0]})

Detaylı Canlı Isı Haritaları, Grafikler & Arbitraj:
👉 https://kriptonik.com`;

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  const displayedCoins =
    activeTab === 'FAVORITES'
      ? COINS_DATA.filter((c) => watchlist.includes(c.symbol))
      : COINS_DATA;

  return (
    <div className="space-y-8">
      {/* 1. VISUAL MARKET COCKPIT (Görsel ve Derli Toplu Piyasa Özeti) */}
      <section className="space-y-4">
        {/* Cockpit Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2962FF]/30 bg-[#2962FF]/10 px-3 py-1 text-xs font-bold text-[#2962FF]">
              <span className="h-2 w-2 rounded-full bg-[#00E699] pulse-bull" />
              <span>KRİPTONİK CANLI KOKPİT v2.6</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
              Piyasa Nabzı & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2962FF] to-[#00E699]">Görsel İstihbarat</span>
            </h1>
            <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-2xl">
              Karmaşık on-chain tabloları geride bırakın. Kaldıraçlı tasfiyeler, borsalar arası arbitraj ve kurumsal ETF akışları tek ekranda.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyBrief}
              className="inline-flex items-center gap-2 rounded-xl border border-[#2962FF]/40 bg-[#2962FF]/10 hover:bg-[#2962FF]/20 px-3.5 py-2 text-xs font-bold text-[#2962FF] transition-all cursor-pointer shadow-xs"
            >
              {copiedBrief ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-[#00E699]" />
                  <span className="text-[#00E699]">Bülten Kopyalandı! (Telegram / X)</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>30sn Günlük Özeti Kopyala</span>
                </>
              )}
            </button>

            <Link
              href="/hesaplayici/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[#00E699]/40 px-3.5 py-2 text-xs font-semibold text-[var(--card-muted)] hover:text-[var(--foreground)] transition-all shadow-xs"
            >
              <Calculator className="h-4 w-4 text-[#00E699]" />
              <span>Komisyon Simülatörü</span>
            </Link>
          </div>
        </div>

        {/* Major Assets Market Pulse Hero Bar (BTC, ETH, SOL, BNB with Real-Time Ticks) */}
        <MajorAssetsPulseBar coins={COINS_DATA} tickers={tickers} />

        {/* Market Isı Şeması (Hacim Ağırlıklı Yatay Canlı Treemap) */}
        <CryptoMarketHeatmapGrid coins={COINS_DATA} tickers={tickers} />

        {/* 4 Primary High-Impact Visual Cards (Görsel Odak Kartları) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Fear & Greed Visual Segmented Gauge */}
          <div className="cockpit-card p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--card-muted)]">Piyasa Duyarlılığı</span>
              <span className="font-mono text-[10px] text-[var(--card-muted)]">Günlük İndeks</span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-2xl font-black font-mono text-[#FF3B56]">
                  {FEAR_AND_GREED.value}
                </div>
                <div className="text-xs font-bold text-[#FF3B56]">
                  {FEAR_AND_GREED.classification}
                </div>
              </div>
              <div className="text-right text-[10px] font-mono text-[var(--card-muted)]">
                Dün: <strong>32</strong>
              </div>
            </div>

            {/* Visual Segmented Gauge */}
            <div className="space-y-1">
              <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden flex gap-0.5">
                <div className="h-full w-1/4 bg-[#FF3B56]" />
                <div className="h-full w-1/4 bg-[#FF8A00]" />
                <div className="h-full w-1/4 bg-[#F2C14E]" />
                <div className="h-full w-1/4 bg-[#00E699]" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-[var(--card-muted)]">
                <span className="text-[#FF3B56] font-bold">▲ Aşırı Korku</span>
                <span>Nötr</span>
                <span>Açgözlülük</span>
              </div>
            </div>
          </div>

          {/* Card 2: 24h Liquidation Visual Duel Bar */}
          <div className="cockpit-card p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--card-muted)]">24s Tasfiye Isı Dengesi</span>
              <span className="font-mono text-[10px] text-[#FF3B56] font-bold">Short Baskın</span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-black font-mono text-[var(--foreground)]">
                $348.5M
              </div>
              <div className="text-[10px] font-mono text-[var(--card-muted)]">
                Toplam Tasfiye
              </div>
            </div>

            {/* Visual Duel Bar (Short vs Long) */}
            <div className="space-y-1">
              <div className="h-2.5 w-full rounded-full bg-[var(--border)] overflow-hidden flex">
                <div style={{ width: '62%' }} className="bg-[#FF3B56] h-full" title="Short Tasfiyeleri: %62 ($216.1M)" />
                <div style={{ width: '38%' }} className="bg-[#00E699] h-full" title="Long Tasfiyeleri: %38 ($132.4M)" />
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-[#FF3B56] font-bold">%62 Short ($216M)</span>
                <span className="text-[#00E699] font-bold">%38 Long ($132M)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Spot ETF Institutional Outflow */}
          <div className="cockpit-card p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--card-muted)]">Spot ETF Kurumsal Akış</span>
              <span className="rounded bg-[#FF3B56]/15 text-[#FF3B56] px-2 py-0.5 font-mono text-[10px] font-bold">
                KONSOLİDE RAPOR
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-black font-mono text-[#FF3B56] flex items-center gap-1">
                <TrendingDown className="h-5 w-5" />
                -$506.8M
              </div>
              <div className="text-[10px] font-mono text-[#FF3B56] font-bold">
                Net Çıkış (Dün)
              </div>
            </div>

            {/* Visual Distribution */}
            <div className="space-y-1">
              <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden flex gap-1">
                <div style={{ width: '86%' }} className="bg-[#FF3B56] h-full" />
                <div style={{ width: '14%' }} className="bg-[#FF8A00] h-full" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[var(--card-muted)]">
                <span>BTC ETF: <strong className="text-[#FF3B56]">-$438.4M</strong></span>
                <span>ETH: <strong className="text-[#FF8A00]">-$68.4M</strong></span>
              </div>
            </div>
          </div>

          {/* Card 4: USDT/TRY and USD/TRY Live Spread */}
          <div className="cockpit-card p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--card-muted)]">Tether & Dolar Kuru</span>
              <span className="font-mono text-[10px] text-[#00E699] font-bold">Canlı Tahta</span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[var(--card-muted)] mr-1">USDT:</span>
                <span className="text-2xl font-black font-mono text-[#00E699]">
                  ₺{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-[var(--card-muted)]">
                  USD: <strong className="text-[var(--foreground)]">₺{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}</strong>
                </div>
              </div>
            </div>

            {/* Visual Premium Spread Indicator */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--card-muted)]">Kripto Dolar Primi:</span>
                <span className="text-[#00E699] font-bold">-%0.22 İskonto</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
                <div style={{ width: '48%' }} className="bg-[#00E699] h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME CRYPTO MARKET SCREENER TABLE */}
      <section className="space-y-4">
        <LiveCryptoMarketTable
          coins={COINS_DATA}
          tickers={tickers}
          watchlist={watchlist}
          onToggleWatchlist={toggleFavorite}
        />
      </section>

      {/* 3. SEGMENTED COCKPIT NAVIGATION BAR (Derli Toplu Görsel Sekmeler) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          {/* Scrollable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            <button
              onClick={() => setActiveCockpitTab('heatmap')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'heatmap'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-[#FF3B56]" />
              <span>Likidasyon Haritası</span>
            </button>

            <button
              onClick={() => setActiveCockpitTab('funding')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'funding'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <DollarSign className="h-3.5 w-3.5 text-[#00E699]" />
              <span>Fonlama & Açık Pozisyon</span>
            </button>

            <button
              onClick={() => setActiveCockpitTab('etf')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'etf'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5 text-[#FF8A00]" />
              <span>Spot ETF Akışları</span>
            </button>

            <button
              onClick={() => setActiveCockpitTab('whales')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'whales'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5 text-indigo-400" />
              <span>Balina & Kilit Açılımı</span>
            </button>

            <button
              onClick={() => setActiveCockpitTab('converter')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'converter'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <Calculator className="h-3.5 w-3.5 text-cyan-400" />
              <span>Kaç TL? & Arbitraj</span>
            </button>

            <button
              onClick={() => setActiveCockpitTab('directory')}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCockpitTab === 'directory'
                  ? 'bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              <Star className="h-3.5 w-3.5 text-amber-400" />
              <span>Tüm Varlıklar ({COINS_DATA.length})</span>
            </button>
          </div>

          {/* Toggle Expand All View */}
          <button
            onClick={() => setExpandAllModules(!expandAllModules)}
            className="shrink-0 flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[11px] font-semibold text-[var(--card-muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="h-3 w-3" />
            <span>{expandAllModules ? 'Sekmeli Mod' : 'Tüm Panelleri Aç'}</span>
          </button>
        </div>

        {/* 3. DYNAMIC TAB CONTENT / PANELS */}

        {/* Panel A: Heatmap */}
        {(activeCockpitTab === 'heatmap' || expandAllModules) && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-[#FF3B56]" />
                <h2 className="text-lg font-black text-[var(--foreground)]">Canlı Likidasyon Isı Haritası</h2>
                <span className="text-xs text-[var(--card-muted)] hidden sm:inline">• 25x, 50x, 100x Tasfiye Kümeleri</span>
              </div>

              {/* Coin Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {COINS_DATA.slice(0, 6).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCoinSlug(c.slug)}
                    className={`rounded-lg px-3 py-1 text-xs font-mono font-bold transition-all cursor-pointer ${
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

            <LiquidationHeatmap
              coin={{
                ...selectedCoin,
                price: tickers[selectedCoin.binanceSymbol]?.price || selectedCoin.price,
                change24h: tickers[selectedCoin.binanceSymbol]?.change24h !== undefined ? tickers[selectedCoin.binanceSymbol].change24h : selectedCoin.change24h
              }}
            />
          </div>
        )}

        {/* Panel B: Funding & Open Interest */}
        {(activeCockpitTab === 'funding' || expandAllModules) && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <FundingMatrix coins={COINS_DATA} />
              </div>
              <div>
                <FearGreedWidget />
              </div>
            </div>

            <OpenInterestRadar coins={COINS_DATA} />
          </div>
        )}

        {/* Panel C: Spot ETF Flows */}
        {(activeCockpitTab === 'etf' || expandAllModules) && (
          <div className="space-y-4">
            <EtfTracker />
          </div>
        )}

        {/* Panel D: Whale Tracking & Token Unlocks */}
        {(activeCockpitTab === 'whales' || expandAllModules) && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WhaleTracker transactions={WHALE_TRANSACTIONS} />
              <div className="space-y-4">
                {/* Leverage Calculator Interactive Promo Banner */}
                <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card-subtle)] to-[var(--card)] p-5 shadow-xs space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00E699]/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#00E699] border border-[#00E699]/30">
                    <Sparkles className="h-3 w-3" />
                    TÜRKİYE BORSA KOMİSYON SİMÜLATÖRÜ
                  </div>
                  <h3 className="text-base font-black text-[var(--foreground)]">
                    Binance TR, BtcTurk, Paribu Komisyon Kıyaslama
                  </h3>
                  <p className="text-xs text-[var(--card-muted)] leading-relaxed">
                    Alış ve satış işlemlerinde hangi borsanın ne kadar komisyon kestiğini ve net kârınızı işlem öncesinde hesaplayın.
                  </p>
                  <Link
                    href="/hesaplayici/"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2962FF] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#2962FF]/20 hover:bg-[#1E4BD8] transition-all"
                  >
                    <Calculator className="h-4 w-4" />
                    Kıyaslamayı Başlat
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="panel-card p-5 space-y-2">
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#FF8A00]" />
                    Yaklaşan Büyük Kilit Açılımları
                  </h4>
                  <p className="text-xs text-[var(--card-muted)]">
                    Ayrıntılı 30 günlük kilit açılış takvimi ve satış baskısı risk analizleri için kilit açılım merkezini ziyaret edin.
                  </p>
                  <Link
                    href="/token-kilit-acilimlari/"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2962FF] hover:underline pt-2"
                  >
                    Tam Takvimi İncele <ArrowRightLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <TokenUnlockCalendar coins={COINS_DATA} />
          </div>
        )}

        {/* Panel E: Currency & Converters */}
        {(activeCockpitTab === 'converter' || expandAllModules) && (
          <div className="space-y-6">
            <UsdtPremiumWidget />
            <KacTlConverter />
          </div>
        )}

        {/* Panel F: 360 Coin Directory with Watchlist Support */}
        {(activeCockpitTab === 'directory' || expandAllModules) && (
          <div className="panel-card p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  Kriptonik Türev ve On-Chain Varlık İndeksi
                </h3>
                <p className="text-xs text-[var(--card-muted)] mt-0.5">
                  Her coin için algoritmik olarak oluşturulan anlık likidasyon duvarları, fonlama geçmişi ve kilit açılım raporları.
                </p>
              </div>

              {/* Watchlist Filter Tabs */}
              <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-1 text-xs">
                <button
                  onClick={() => setActiveTab('ALL')}
                  className={`rounded-lg px-3 py-1 font-mono font-semibold transition-all cursor-pointer ${
                    activeTab === 'ALL'
                      ? 'bg-[#2962FF] text-white shadow-xs'
                      : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  Tüm Varlıklar ({COINS_DATA.length})
                </button>
                <button
                  onClick={() => setActiveTab('FAVORITES')}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono font-semibold transition-all cursor-pointer ${
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
                              className="text-[var(--card-muted)] hover:text-amber-400 transition-colors cursor-pointer"
                            >
                              <Star className={`h-3.5 w-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                            </button>
                            <Link href={`/kripto/${coin.slug}/`} className="font-bold text-[var(--foreground)] hover:text-[#2962FF]">
                              {coin.symbol}
                            </Link>
                          </div>
                          <span className={`font-mono text-[11px] font-bold ${displayChange >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                            {displayChange >= 0 ? '+' : ''}{displayChange.toFixed(1)}%
                          </span>
                        </div>
                        <div className="text-[11px] text-[var(--card-muted)] truncate mt-0.5">{coin.name}</div>
                        <div className={`font-mono text-xs font-bold text-[var(--foreground)] mt-1 transition-colors px-1 rounded inline-block ${
                          liveTick?.flashDirection === 'UP' ? 'tick-flash-up text-[#00E699]' : liveTick?.flashDirection === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : ''
                        }`}>
                          ${displayPrice > 10 ? displayPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : displayPrice.toFixed(4)}
                        </div>

                        {/* 24h Trend Sparkline */}
                        <div className="mt-2 flex justify-center">
                          <Sparkline change24h={displayChange} width={120} height={28} />
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[var(--border)] flex flex-col gap-1 text-[10px] font-mono">
                        <Link href={`/kripto/${coin.slug}/`} className="text-[#2962FF] hover:underline font-semibold flex items-center justify-between">
                          <span>Canlı Terminal</span>
                          <span>→</span>
                        </Link>
                        <Link href={`/likidasyon/${coin.slug}/`} className="text-[var(--card-muted)] hover:text-[var(--foreground)] hover:underline">
                          Likidasyon Isı Haritası
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
                  className="mt-2 rounded-lg bg-[#2962FF]/15 text-[#2962FF] px-3 py-1 font-semibold text-xs border border-[#2962FF]/30 hover:bg-[#2962FF]/25 transition-colors cursor-pointer"
                >
                  Tüm Varlıkları Göster
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
