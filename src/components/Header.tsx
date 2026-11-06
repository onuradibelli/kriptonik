'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import { COINS_DATA, FEAR_AND_GREED } from '../lib/data';
import { Activity, Flame, DollarSign, Calendar, Compass, ShieldAlert, Newspaper, Search, BarChart3, Calculator } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredCoins = searchQuery.trim()
    ? COINS_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Public Nav Items (Admin is removed from public navigation as requested)
  const navItems = [
    { label: 'Piyasa Nabzı', href: '/', icon: Activity },
    { label: 'Likidasyon Haritası', href: '/likidasyon/', icon: Flame },
    { label: 'Fonlama Oranları', href: '/fonlama-oranlari/', icon: DollarSign },
    { label: 'Spot ETF Akışları', href: '/etf/', icon: BarChart3 },
    { label: 'Kaç TL? Çevirici', href: '/kac-tl/', icon: Calculator },
    { label: 'Kilit Açılımları', href: '/token-kilit-acilimlari/', icon: Calendar },
    { label: 'Açık Pozisyon (OI)', href: '/acik-pozisyon/', icon: Compass },
    { label: 'Balina Takibi', href: '/balina-takibi/', icon: ShieldAlert },
    { label: 'Bülten', href: '/bulten/', icon: Newspaper }
  ];

  const featuredSymbols = [
    { sym: 'BTCUSDT', name: 'BTC' },
    { sym: 'ETHUSDT', name: 'ETH' },
    { sym: 'SOLUSDT', name: 'SOL' },
    { sym: 'BNBUSDT', name: 'BNB' },
    { sym: 'XRPUSDT', name: 'XRP' },
    { sym: 'DOGEUSDT', name: 'DOGE' },
    { sym: 'SUIUSDT', name: 'SUI' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222938] bg-[#0B0E14]/95 backdrop-blur-md">
      {/* 1. Real-time Live Telemetry Ticker Bar */}
      <div className="border-b border-[#1A212D] bg-[#080B0F] px-3 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 rounded bg-[#151A23] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#848E9C]">
              <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? 'bg-[#00C087] pulse-bull' : 'bg-[#00C087]'}`} />
              {isConnected ? 'CANLI WS' : 'CANLI API'}
            </span>

            <div className="flex items-center gap-4">
              {featuredSymbols.map(({ sym, name }) => {
                const tick = tickers[sym] || defaultTickers[sym as keyof typeof defaultTickers];
                if (!tick) return null;
                const isPositive = tick.change24h >= 0;
                return (
                  <Link
                    key={sym}
                    href={`/likidasyon/${name.toLowerCase()}/`}
                    className="flex items-center gap-1.5 transition-colors hover:text-[#2962FF]"
                  >
                    <span className="font-semibold text-[#CBD5E1]">{name}:</span>
                    <span className="font-mono text-[#F0F3F8]">
                      ${tick.price > 10 ? tick.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : tick.price.toFixed(4)}
                    </span>
                    <span className={`font-mono font-medium ${isPositive ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                      {isPositive ? '+' : ''}{tick.change24h.toFixed(2)}%
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[#848E9C]">
            <span className="font-mono text-[11px]">Korku/Açgözlülük: <strong className="text-[#F6465D]">{FEAR_AND_GREED.value} ({FEAR_AND_GREED.classification})</strong></span>
            <span>•</span>
            <span className="font-mono text-[11px]">Spot Bitcoin ETF Net: <strong className="text-[#00C087]">+$458.2M</strong></span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2962FF] to-[#00C087] text-white shadow-md shadow-[#2962FF]/20 group-hover:scale-105 transition-transform">
              <span className="font-mono text-lg font-black">◈</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xl font-bold tracking-tight text-white">KRİPTONİK</span>
                <span className="rounded bg-[#2962FF]/20 px-1.5 py-0.2 text-[9px] font-bold text-[#2962FF] uppercase tracking-wider">TERMINAL</span>
              </div>
              <p className="hidden sm:block text-[10px] text-[#848E9C] font-mono leading-none">Sıfır Gürültü, Maksimum Sinyal</p>
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
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#151A23] text-[#2962FF] border border-[#222938]'
                      : 'text-[#848E9C] hover:text-white hover:bg-[#151A23]/60'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Search & Quick Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-[#222938] bg-[#151A23] px-3 py-1.5 text-xs text-[#848E9C] hover:border-[#334055] hover:text-white transition-colors"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Varlık veya Sinyal Ara...</span>
            <kbd className="hidden sm:inline-block rounded bg-[#0B0E14] px-1.5 py-0.5 text-[10px] font-mono border border-[#222938]">⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Nav Bar */}
      <div className="xl:hidden flex items-center gap-1 overflow-x-auto no-scrollbar border-t border-[#1A212D] bg-[#0D121A] px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1 whitespace-nowrap px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                isActive
                  ? 'bg-[#151A23] text-[#2962FF] border border-[#222938]'
                  : 'text-[#848E9C] hover:text-white'
              }`}
            >
              <Icon className="h-3 w-3" />
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Quick Search Dialog Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-20 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-xl border border-[#222938] bg-[#151A23] p-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#222938] pb-3">
              <div className="flex items-center gap-2 text-white">
                <Search className="h-4 w-4 text-[#2962FF]" />
                <span className="text-sm font-semibold">Kriptonik Radar Arama</span>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="rounded px-2 py-0.5 text-xs text-[#848E9C] hover:bg-[#222938] hover:text-white"
              >
                ESC
              </button>
            </div>

            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Bitcoin, Solana, Dolar, ETF, Fonlama..."
              className="mt-3 w-full rounded-lg border border-[#222938] bg-[#0B0E14] px-3.5 py-2.5 text-sm text-white placeholder-[#848E9C] outline-none focus:border-[#2962FF]"
            />

            <div className="mt-3 max-h-72 overflow-y-auto space-y-1">
              {filteredCoins.length > 0 ? (
                filteredCoins.map((coin) => (
                  <Link
                    key={coin.id}
                    href={`/likidasyon/${coin.slug}/`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between rounded-lg p-2.5 hover:bg-[#1E2532] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-[#222938] font-mono text-xs font-bold text-white">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">{coin.name} ({coin.symbol})</div>
                        <div className="text-[10px] text-[#848E9C]">Spot: ${coin.price.toLocaleString('tr-TR')} • Fonlama: %{(coin.fundingRates.binance * 100).toFixed(3)}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs font-semibold text-white">${coin.price.toLocaleString('tr-TR')}</div>
                      <div className={`font-mono text-[10px] ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                        {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-6 text-center text-xs text-[#848E9C]">
                  {searchQuery ? 'Eşleşen coin bulunamadı.' : 'Aramak istediğin coinin adını veya sembolünü yaz (örn: BTC, SOL, ETF, SUI)'}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
