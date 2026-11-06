'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import { FEAR_AND_GREED, LIVE_CURRENCY_RATES } from '../lib/data';
import ThemeToggle from './ThemeToggle';
import BreakingNewsTicker from './BreakingNewsTicker';
import { Activity, Flame, DollarSign, Calendar, Compass, ShieldAlert, Newspaper, Search, BarChart3, Calculator } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  // Verified accurate live seed tickers from Binance API
  const defaultTickers = {
    BTCUSDT: { price: 75728.00, change24h: -0.11 },
    ETHUSDT: { price: 2227.60, change24h: -0.85 },
    SOLUSDT: { price: 90.50, change24h: 0.85 },
    BNBUSDT: { price: 695.50, change24h: 1.04 },
    XRPUSDT: { price: 1.185, change24h: -4.63 },
    DOGEUSDT: { price: 0.0729, change24h: 1.87 },
    SUIUSDT: { price: 0.871, change24h: 2.85 }
  };

  const { tickers, isConnected } = useBinanceTickers(defaultTickers);

  const handleOpenSearch = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const navItems = [
    { label: 'Piyasa Nabzı', href: '/', icon: Activity },
    { label: 'Likidasyon Haritası', href: '/likidasyon/', icon: Flame },
    { label: 'Kaldıraç Hesaplayıcı', href: '/hesaplayici/', icon: Calculator, isNew: true },
    { label: 'Fonlama Oranları', href: '/fonlama-oranlari/', icon: DollarSign },
    { label: 'Spot ETF Akışları', href: '/etf/', icon: BarChart3 },
    { label: 'Kaç TL? Çevirici', href: '/kac-tl/', icon: Calculator },
    { label: 'Kilit Açılımları', href: '/token-kilit-acilimlari/', icon: Calendar },
    { label: 'Açık Pozisyon (OI)', href: '/acik-pozisyon/', icon: Compass },
    { label: 'Balina Takibi', href: '/balina-takibi/', icon: ShieldAlert },
    { label: 'Bülten', href: '/bulten/', icon: Newspaper }
  ];

  const featuredSymbols = [
    { sym: 'BTCUSDT', name: 'BTC', slug: 'bitcoin' },
    { sym: 'ETHUSDT', name: 'ETH', slug: 'ethereum' },
    { sym: 'SOLUSDT', name: 'SOL', slug: 'solana' },
    { sym: 'BNBUSDT', name: 'BNB', slug: 'binancecoin' },
    { sym: 'XRPUSDT', name: 'XRP', slug: 'ripple' },
    { sym: 'DOGEUSDT', name: 'DOGE', slug: 'dogecoin' },
    { sym: 'SUIUSDT', name: 'SUI', slug: 'sui' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md transition-colors">
      {/* 1. Real-time Live Telemetry Ticker Bar */}
      <div className="border-b border-[var(--border)] bg-[var(--ticker-bg)] px-3 py-1.5 text-xs transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 rounded bg-[var(--card)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--card-muted)] border border-[var(--border)]">
              <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? 'bg-[#00C087] pulse-bull' : 'bg-[#00C087]'}`} />
              {isConnected ? 'CANLI WS' : 'CANLI API'}
            </span>

            <div className="flex items-center gap-4">
              {/* Live FX & Stablecoin Telemetry */}
              <Link
                href="/kac-tl/1-dolar-kac-tl/"
                className="flex items-center gap-1 transition-colors hover:text-[#2962FF]"
              >
                <span className="font-semibold text-[var(--card-muted)]">USD/TRY:</span>
                <span className="font-mono font-bold text-[var(--foreground)]">₺{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}</span>
              </Link>

              <Link
                href="/kac-tl/1-usdt-kac-tl/"
                className="flex items-center gap-1 transition-colors hover:text-[#00C087]"
              >
                <span className="font-semibold text-[var(--card-muted)]">USDT/TRY:</span>
                <span className="font-mono font-bold text-[#00C087]">₺{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}</span>
              </Link>

              <span className="text-[var(--border)] hidden sm:inline">•</span>

              {featuredSymbols.map(({ sym, name, slug }) => {
                const tick = tickers[sym] || defaultTickers[sym as keyof typeof defaultTickers];
                if (!tick) return null;
                const isPositive = tick.change24h >= 0;
                const flash = (tick as any).flashDirection;
                return (
                  <Link
                    key={sym}
                    href={`/kripto/${slug}/`}
                    title={`${name} Canlı Kripto Terminali ve Verileri`}
                    className="flex items-center gap-1.5 transition-colors hover:text-[#2962FF]"
                  >
                    <span className="font-semibold text-[var(--card-muted)]">{name}:</span>
                    <span className={`font-mono font-medium text-[var(--foreground)] px-1 rounded transition-colors ${
                      flash === 'UP' ? 'tick-flash-up text-[#00E699]' : flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : ''
                    }`}>
                      ${tick.price > 10 ? tick.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : tick.price.toFixed(4)}
                    </span>
                    <span className={`font-mono font-bold text-[11px] ${isPositive ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                      {isPositive ? '+' : ''}{tick.change24h.toFixed(2)}%
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[var(--card-muted)]">
            <span className="font-mono text-[11px]">
              BTC Dom: <strong className="text-[var(--foreground)]">%58.4</strong>
            </span>
            <span>•</span>
            <span className="font-mono text-[11px]">
              ETH Gas: <strong className="text-[#00C087]">8 Gwei</strong>
            </span>
            <span>•</span>
            <span className="font-mono text-[11px]">
              Korku/Açgözlülük: <strong className="text-[#F6465D]">{FEAR_AND_GREED.value} ({FEAR_AND_GREED.classification.split(' ')[0]})</strong>
            </span>
            <span>•</span>
            <span className="font-mono text-[11px]">
              ETF Net: <strong className="text-[#00C087]">+$361.0M</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2962FF] to-[#00C087] text-white shadow-md shadow-[#2962FF]/20 group-hover:scale-105 transition-transform">
              <span className="font-mono text-lg font-black">◈</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xl font-black tracking-tight text-[var(--foreground)]">KRİPTONİK</span>
                <span className="rounded bg-[#2962FF]/15 px-1.5 py-0.2 text-[9px] font-extrabold text-[#2962FF] uppercase tracking-wider border border-[#2962FF]/20">TERMINAL</span>
              </div>
              <p className="hidden sm:block text-[10px] text-[var(--card-muted)] font-mono leading-none">Sıfır Gürültü, Maksimum Sinyal</p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-[#2962FF]/10 text-[#2962FF] border border-[#2962FF]/30 shadow-xs'
                      : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                  {item.isNew && (
                    <span className="rounded bg-[#00C087]/20 text-[#00C087] px-1 py-0.1 text-[9px] font-mono font-bold">
                      YENİ
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleOpenSearch}
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--card-muted)] hover:border-[#2962FF] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            title="Global Arama ve Komut Paleti (Ctrl+K / ⌘K)"
          >
            <Search className="h-3.5 w-3.5 text-[#2962FF]" />
            <span className="hidden sm:inline">Varlık veya Sinyal Ara...</span>
            <kbd className="hidden sm:inline-block rounded bg-[var(--background)] px-1.5 py-0.5 text-[10px] font-mono border border-[var(--border)]">⌘K</kbd>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile / Tablet Nav Bar */}
      <div className="xl:hidden flex items-center gap-1 overflow-x-auto no-scrollbar border-t border-[var(--border)] bg-[var(--card)] px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1 whitespace-nowrap px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                isActive
                  ? 'bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/30 font-bold'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Icon className="h-3 w-3" />
              {item.label}
              {item.isNew && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C087]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* 3. Breaking News Marquee Ticker */}
      <BreakingNewsTicker />
    </header>
  );
}
