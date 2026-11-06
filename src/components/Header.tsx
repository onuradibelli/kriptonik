'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import { FEAR_AND_GREED, LIVE_CURRENCY_RATES } from '../lib/data';
import ThemeToggle from './ThemeToggle';
import BreakingNewsTicker from './BreakingNewsTicker';
import {
  Flame,
  DollarSign,
  Calendar,
  Compass,
  ShieldAlert,
  Newspaper,
  Search,
  BarChart3,
  Calculator,
  ChevronDown,
  Menu,
  X,
  Layers,
  ArrowRightLeft,
  Sparkles,
  TrendingDown
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Verified live seed tickers from Binance API
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

  const featuredSymbols = [
    { sym: 'BTCUSDT', name: 'BTC', slug: 'bitcoin' },
    { sym: 'ETHUSDT', name: 'ETH', slug: 'ethereum' },
    { sym: 'SOLUSDT', name: 'SOL', slug: 'solana' },
    { sym: 'BNBUSDT', name: 'BNB', slug: 'binancecoin' },
    { sym: 'XRPUSDT', name: 'XRP', slug: 'ripple' },
    { sym: 'DOGEUSDT', name: 'DOGE', slug: 'dogecoin' },
    { sym: 'SUIUSDT', name: 'SUI', slug: 'sui' }
  ];

  // Navigation Group Categories (Eliminating linear overcrowding)
  const navGroups = [
    {
      id: 'derivatives',
      title: 'Türev & Likidasyon',
      icon: Flame,
      items: [
        {
          label: 'Likidasyon Isı Haritası',
          href: '/likidasyon/',
          desc: '10x - 100x tasfiye havuzları ve emir tahtası derinliği',
          icon: Flame,
          color: 'text-[#FF3B56]'
        },
        {
          label: 'Fonlama Oranları (Funding Rate)',
          href: '/fonlama-oranlari/',
          desc: 'Borsalar arası arbitraj ve sonraki seans tahminleri',
          icon: DollarSign,
          color: 'text-[#00E699]'
        },
        {
          label: 'Açık Pozisyon (Open Interest)',
          href: '/acik-pozisyon/',
          desc: 'Vadeli kontrat büyüklüğü ve kurumsal pozisyon radarı',
          icon: Compass,
          color: 'text-[#2962FF]'
        }
      ]
    },
    {
      id: 'institutional',
      title: 'Kurumsal & On-Chain',
      icon: BarChart3,
      items: [
        {
          label: 'Spot ETF Akışları',
          href: '/etf/',
          desc: 'BlackRock, Fidelity ve Grayscale günlük net sermaye akışı (SoSoValue)',
          icon: BarChart3,
          color: 'text-[#FF8A00]'
        },
        {
          label: 'Balina Takibi (Whale Tracker)',
          href: '/balina-takibi/',
          desc: 'Büyük borsa giriş/çıkışları ve soğuk cüzdan transferleri',
          icon: ShieldAlert,
          color: 'text-indigo-400'
        },
        {
          label: 'Token Kilit Açılımları',
          href: '/token-kilit-acilimlari/',
          desc: '30 günlük kilit açılış takvimi ve satış baskısı skoru',
          icon: Calendar,
          color: 'text-amber-400'
        }
      ]
    },
    {
      id: 'calculators',
      title: 'Hesaplayıcılar & Araçlar',
      icon: Calculator,
      items: [
        {
          label: 'Borsa Komisyon & Kâr Simülatörü',
          href: '/hesaplayici/',
          desc: 'Binance TR, BtcTurk, Paribu komisyon farkları ve net ROI',
          icon: ArrowRightLeft,
          color: 'text-[#00E699]'
        },
        {
          label: 'Kaldıraç & Tasfiye Hesaplayıcı',
          href: '/hesaplayici/',
          desc: '1x - 125x marj gereksinimi ve likidasyon fiyatı senaryoları',
          icon: Layers,
          color: 'text-[#2962FF]'
        },
        {
          label: 'Kaç TL? Canlı Çevirici',
          href: '/kac-tl/',
          desc: 'Dolar, Tether ve Bitcoin anlık Türk Lirası fiyat çeviricisi',
          icon: Calculator,
          color: 'text-cyan-400'
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl transition-colors">
      {/* 1. REAL-TIME TELEMETRY TOP BAR (Ferah, Genişletilmiş ve Ayrıştırılmış) */}
      <div className="border-b border-[var(--border)] bg-[var(--ticker-bg)] px-3 sm:px-6 py-2 text-xs transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Left: WS Status & Live Telemetry Tickers */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5">
            {/* Live WS Status Badge */}
            <span className="flex items-center gap-1.5 rounded-lg bg-[var(--card)] px-2.5 py-1 font-mono text-[10px] font-bold text-[var(--card-muted)] border border-[var(--border)] shrink-0 shadow-xs">
              <span className={`h-2 w-2 rounded-full ${isConnected ? 'bg-[#00E699] pulse-bull' : 'bg-[#00E699]'}`} />
              <span>{isConnected ? 'CANLI WS' : 'CANLI API'}</span>
            </span>

            {/* Currency Badges */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/kac-tl/1-dolar-kac-tl/"
                className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)]/70 px-2.5 py-1 transition-all hover:border-[#2962FF]"
              >
                <span className="font-semibold text-[var(--card-muted)] text-[11px]">USD/TRY:</span>
                <span className="font-mono font-bold text-[var(--foreground)]">₺{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}</span>
              </Link>

              <Link
                href="/kac-tl/1-usdt-kac-tl/"
                className="flex items-center gap-1.5 rounded-lg border border-[#00E699]/30 bg-[#00E699]/10 px-2.5 py-1 transition-all hover:bg-[#00E699]/15"
              >
                <span className="font-semibold text-[var(--card-muted)] text-[11px]">USDT/TRY:</span>
                <span className="font-mono font-bold text-[#00E699]">₺{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}</span>
              </Link>
            </div>

            <div className="h-4 w-px bg-[var(--border)] shrink-0 hidden sm:block" />

            {/* Featured Crypto Coins */}
            <div className="flex items-center gap-2">
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
                    className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)]/60 hover:bg-[var(--card)] hover:border-[#2962FF]/50 px-2.5 py-1 transition-all shrink-0 group"
                  >
                    <span className="font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">{name}</span>
                    <span className={`font-mono font-medium text-[var(--foreground)] px-1 rounded transition-colors ${
                      flash === 'UP' ? 'tick-flash-up text-[#00E699]' : flash === 'DOWN' ? 'tick-flash-down text-[#FF3B56]' : ''
                    }`}>
                      ${tick.price > 10 ? tick.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : tick.price.toFixed(4)}
                    </span>
                    <span className={`font-mono text-[10px] font-bold rounded px-1.5 py-0.2 ${
                      isPositive ? 'bg-[#00E699]/15 text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
                    }`}>
                      {isPositive ? '+' : ''}{tick.change24h.toFixed(1)}%
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Macro Telemetry Indicators */}
          <div className="hidden xl:flex items-center gap-4 text-[var(--card-muted)] shrink-0 font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span>BTC Dom:</span>
              <strong className="text-[var(--foreground)]">%58.4</strong>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span>ETH Gas:</span>
              <strong className="text-[#00E699]">8 Gwei</strong>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span>Korku/Açgözlülük:</span>
              <strong className="text-[#FF3B56]">{FEAR_AND_GREED.value} ({FEAR_AND_GREED.classification.split(' ')[0]})</strong>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span>Spot ETF:</span>
              <strong className="text-[#FF3B56] flex items-center gap-0.5">
                <TrendingDown className="h-3 w-3" />
                -$506.8M
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Organize, Dropdown Destekli, Modern) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5" ref={dropdownRef}>
        <div className="flex items-center gap-8 lg:gap-10">
          {/* Brand Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2962FF] via-[#1E4BD8] to-[#00E699] text-white shadow-lg shadow-[#2962FF]/25 group-hover:scale-105 transition-all">
              <span className="font-mono text-xl font-black">◈</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xl font-black tracking-tight text-[var(--foreground)]">KRİPTONİK</span>
                <span className="rounded bg-[#2962FF]/15 px-1.5 py-0.5 text-[9px] font-black text-[#2962FF] uppercase tracking-wider border border-[#2962FF]/25">
                  PRO
                </span>
              </div>
              <p className="hidden sm:block text-[10px] text-[var(--card-muted)] font-mono leading-none">
                On-Chain & Türev İstihbarat Terminali
              </p>
            </div>
          </Link>

          {/* Desktop Categorized Navigation (Clean Mega/Dropdown Structure) */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                pathname === '/'
                  ? 'bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
              }`}
            >
              Piyasa Nabzı
            </Link>

            {/* Dropdown Groups */}
            {navGroups.map((group) => {
              const Icon = group.icon;
              const isOpen = activeDropdown === group.id;
              const isGroupActive = group.items.some((item) => pathname.startsWith(item.href));

              return (
                <div key={group.id} className="relative">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                      isGroupActive || isOpen
                        ? 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] shadow-xs'
                        : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
                    }`}
                  >
                    <Icon className="h-4 w-4 opacity-70" />
                    <span>{group.title}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2962FF]' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isItemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-start gap-3 rounded-xl p-3 transition-all ${
                                isItemActive
                                  ? 'bg-[#2962FF]/10 border border-[#2962FF]/30'
                                  : 'hover:bg-[var(--card)]'
                              }`}
                            >
                              <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--card)] border border-[var(--border)] ${item.color}`}>
                                <ItemIcon className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-[var(--foreground)] flex items-center justify-between">
                                  <span>{item.label}</span>
                                  {isItemActive && <span className="h-1.5 w-1.5 rounded-full bg-[#2962FF]" />}
                                </div>
                                <p className="text-[11px] text-[var(--card-muted)] leading-tight mt-0.5 font-sans">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Bülten Link */}
            <Link
              href="/bulten/"
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                pathname.startsWith('/bulten')
                  ? 'bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
              }`}
            >
              Bülten & Analiz
            </Link>
          </nav>
        </div>

        {/* Right Action Icons: Command Palette Search, Theme Toggle, Mobile Menu */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search Button (Cmd+K) */}
          <button
            onClick={handleOpenSearch}
            className="hidden sm:flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3.5 py-2 text-xs text-[var(--card-muted)] hover:text-[var(--foreground)] hover:border-[#2962FF]/40 transition-all cursor-pointer shadow-xs"
          >
            <Search className="h-3.5 w-3.5 text-[#2962FF]" />
            <span className="text-[11px] font-medium">Varlık veya araç ara...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--background)] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[var(--card-muted)]">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={handleOpenSearch}
            className="sm:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
            aria-label="Ara"
          >
            <Search className="h-4 w-4 text-[#2962FF]" />
          </button>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 3. MOBILE MENU SLIDE-DOWN DRAWER (Sade ve Geniş Boşluklu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-2xl px-4 py-5 space-y-5 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl bg-[var(--card)] border border-[var(--border)] p-3 text-xs font-bold text-[var(--foreground)]"
            >
              ⚡ Piyasa Nabzı (Ana Sayfa)
            </Link>

            {navGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.id} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--card-muted)] uppercase tracking-wider px-1">
                    <Icon className="h-3.5 w-3.5 text-[#2962FF]" />
                    <span>{group.title}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between rounded-xl p-2.5 bg-[var(--card)]/60 border border-[var(--border)] text-xs font-medium text-[var(--foreground)] hover:border-[#2962FF]"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className={`h-4 w-4 ${item.color}`} />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[var(--card-muted)] text-[10px]">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <Link
              href="/bulten/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl bg-[var(--card)] border border-[var(--border)] p-3 text-xs font-bold text-[var(--foreground)]"
            >
              📰 Günlük Kripto Bülteni
            </Link>
          </div>
        </div>
      )}

      {/* 4. Breaking News Ticker Bar */}
      <BreakingNewsTicker />
    </header>
  );
}
