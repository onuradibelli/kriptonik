'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { COINS_DATA } from '../lib/data';
import { Search, Flame, DollarSign, Calendar, Compass, ShieldAlert, Newspaper, Calculator, BarChart3, ArrowRight, Zap, ExternalLink, X, Layers } from 'lucide-react';

interface PaletteItem {
  id: string;
  category: 'ARAÇLAR' | 'VARLIKLAR' | 'KAÇ TL? ÇEVİRİ';
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
  icon?: any;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Core navigation items
  const staticItems: PaletteItem[] = [
    {
      id: 'tool-home',
      category: 'ARAÇLAR',
      title: 'Piyasa Nabzı & Kokpit',
      subtitle: 'Tüm türev ve on-chain sinyalleri tek ekranda',
      href: '/',
      icon: Zap,
      badge: 'CANLI'
    },
    {
      id: 'tool-likidasyon',
      category: 'ARAÇLAR',
      title: 'Canlı Likidasyon Isı Haritası',
      subtitle: 'Borsalar arası tasfiye seviyeleri ve Squeeze Radarı',
      href: '/likidasyon/',
      icon: Flame,
      badge: 'RADAR'
    },
    {
      id: 'tool-hesaplayici',
      category: 'ARAÇLAR',
      title: 'Kaldıraç & Likidasyon Hesaplayıcı',
      subtitle: 'Futures PnL, likidasyon fiyatı ve risk simülatörü',
      href: '/hesaplayici/',
      icon: Calculator,
      badge: 'YENİ'
    },
    {
      id: 'tool-dca',
      category: 'ARAÇLAR',
      title: 'DCA & Ortalama Maliyet Hesaplayıcı',
      subtitle: 'Kademeli alım, başabaş fiyatı ve maliyet düşürme simülatörü',
      href: '/hesaplayici/',
      icon: Layers,
      badge: 'YENİ'
    },
    {
      id: 'tool-fonlama',
      category: 'ARAÇLAR',
      title: 'Borsalar Arası Fonlama Oranları',
      subtitle: 'Binance, Bybit ve OKX funding rate arbitrajı',
      href: '/fonlama-oranlari/',
      icon: DollarSign
    },
    {
      id: 'tool-etf',
      category: 'ARAÇLAR',
      title: 'Spot Bitcoin & Ethereum ETF Akışları',
      subtitle: 'BlackRock, Fidelity net sermaye girişleri',
      href: '/etf/',
      icon: BarChart3
    },
    {
      id: 'tool-kac-tl',
      category: 'ARAÇLAR',
      title: 'Kaç TL? Döviz & Kripto Çevirici',
      subtitle: 'Dolar, USDT, BTC ve altcoin canlı Türk Lirası çevirisi',
      href: '/kac-tl/',
      icon: Calculator
    },
    {
      id: 'tool-kilit',
      category: 'ARAÇLAR',
      title: 'Token Kilit Açılım Takvimi',
      subtitle: 'Cliff & Linear kilit açılımları ve satış baskısı takibi',
      href: '/token-kilit-acilimlari/',
      icon: Calendar
    },
    {
      id: 'tool-oi',
      category: 'ARAÇLAR',
      title: 'Açık Pozisyon (Open Interest) Radarı',
      subtitle: 'Türev piyasalarındaki toplam kontrat hacimleri',
      href: '/acik-pozisyon/',
      icon: Compass
    },
    {
      id: 'tool-balina',
      category: 'ARAÇLAR',
      title: 'Balina Cüzdan Transferleri',
      subtitle: 'Borsalara giren ve çıkan yüklü on-chain işlemler',
      href: '/balina-takibi/',
      icon: ShieldAlert
    },
    {
      id: 'tool-bulten',
      category: 'ARAÇLAR',
      title: 'Kriptonik Piyasa Bülteni',
      subtitle: 'Canlı verilerle derlenen yapay zeka analiz raporları',
      href: '/bulten/',
      icon: Newspaper
    }
  ];

  // Coin items
  const coinItems: PaletteItem[] = COINS_DATA.map((coin) => ({
    id: `coin-${coin.slug}`,
    category: 'VARLIKLAR',
    title: `${coin.name} (${coin.symbol})`,
    subtitle: `Fiyat: $${coin.price.toLocaleString('tr-TR')} • 24s: ${coin.change24h >= 0 ? '+' : ''}${coin.change24h.toFixed(2)}% • Fonlama: %${(coin.fundingRates.binance * 100).toFixed(3)}`,
    href: `/likidasyon/${coin.slug}/`,
    badge: coin.symbol
  }));

  // Quick conversions
  const conversionItems: PaletteItem[] = [
    {
      id: 'conv-1-dolar',
      category: 'KAÇ TL? ÇEVİRİ',
      title: '1 Dolar Kaç TL?',
      subtitle: 'Serbest Piyasa, TCMB ve Kapalıçarşı Dolar Kuru',
      href: '/kac-tl/1-dolar-kac-tl/',
      badge: 'USD'
    },
    {
      id: 'conv-1-usdt',
      category: 'KAÇ TL? ÇEVİRİ',
      title: '1 USDT Kaç TL?',
      subtitle: 'Binance TR Tether alış/satış canlı kuru',
      href: '/kac-tl/1-usdt-kac-tl/',
      badge: 'USDT'
    },
    {
      id: 'conv-1-btc',
      category: 'KAÇ TL? ÇEVİRİ',
      title: '1 Bitcoin Kaç TL?',
      subtitle: 'Anlık BTC/TRY spot borsa tahta fiyatı',
      href: '/kac-tl/1-btc-kac-tl/',
      badge: 'BTC'
    },
    {
      id: 'conv-1-eth',
      category: 'KAÇ TL? ÇEVİRİ',
      title: '1 Ethereum Kaç TL?',
      subtitle: 'Ethereum canlı Türk Lirası karşılığı',
      href: '/kac-tl/1-eth-kac-tl/',
      badge: 'ETH'
    },
    {
      id: 'conv-1-sol',
      category: 'KAÇ TL? ÇEVİRİ',
      title: '1 Solana Kaç TL?',
      subtitle: 'Solana canlı Türk Lirası karşılığı',
      href: '/kac-tl/1-sol-kac-tl/',
      badge: 'SOL'
    }
  ];

  const allItems = [...staticItems, ...coinItems, ...conversionItems];

  // Filter items based on query
  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          (item.badge && item.badge.toLowerCase().includes(query.toLowerCase())) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 12);

  // Global keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, []);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Arrow key navigation inside palette
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      const target = filteredItems[selectedIndex];
      setIsOpen(false);
      router.push(target.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 p-4 pt-16 sm:pt-24 backdrop-blur-sm transition-all"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[var(--border)] px-4 py-3">
          <Search className="h-5 w-5 text-[#2962FF]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Ne aramak istiyorsun? (Bitcoin, Likidasyon, Hesaplayıcı, 1 Dolar Kaç TL...)"
            className="w-full bg-transparent px-3 text-sm font-medium text-[var(--foreground)] placeholder-[var(--card-muted)] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="mr-2 rounded p-1 text-[var(--card-muted)] hover:text-[var(--foreground)]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-[var(--background)] px-2 py-0.5 text-[10px] font-mono font-semibold text-[var(--card-muted)] border border-[var(--border)]">
            ESC
          </kbd>
        </div>

        {/* Quick Category Suggestions if no query */}
        {!query && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[var(--border)] bg-[var(--card-subtle)] px-4 py-2 text-[11px]">
            <span className="font-mono text-[10px] font-semibold text-[var(--card-muted)] uppercase">Hızlı Seç:</span>
            {['Likidasyon', 'Hesaplayıcı', 'ETF', 'Bitcoin', 'Solana', 'Kaç TL'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="rounded-md border border-[var(--border)] bg-[var(--card)] px-2 py-0.5 font-medium text-[var(--card-muted)] hover:text-[#2962FF] hover:border-[#2962FF]/40 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon || Zap;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                    isSelected
                      ? 'bg-[#2962FF]/15 text-[var(--foreground)] border border-[#2962FF]/30'
                      : 'hover:bg-[var(--hover-bg)] text-[var(--foreground)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#2962FF] text-white'
                          : 'bg-[var(--card-subtle)] text-[var(--card-muted)] group-hover:text-[var(--foreground)] border border-[var(--border)]'
                      }`}
                    >
                      {item.badge ? (
                        item.badge.slice(0, 3)
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-xs font-bold text-[var(--foreground)]">
                          {item.title}
                        </span>
                        <span className="shrink-0 rounded bg-[var(--card-subtle)] px-1.5 py-0.2 font-mono text-[9px] font-semibold text-[var(--card-muted)] border border-[var(--border)]">
                          {item.category}
                        </span>
                      </div>
                      <p className="truncate text-[11px] text-[var(--card-muted)]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="ml-2 flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#2962FF]">
                        Git <ArrowRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="py-12 text-center text-xs text-[var(--card-muted)]">
              <Search className="mx-auto h-8 w-8 text-[var(--card-muted)]/40 mb-2" />
              <p className="font-semibold text-[var(--foreground)]">Eşleşen sonuç bulunamadı</p>
              <p className="mt-1">Farklı bir terim veya coin sembolü deneyin (örn. BTC, SUI, ETF, Dolar)</p>
            </div>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--card-subtle)] px-4 py-2 text-[10px] font-mono text-[var(--card-muted)]">
          <div className="flex items-center gap-3">
            <span><strong className="text-[var(--foreground)]">↑↓</strong> Gezin</span>
            <span><strong className="text-[var(--foreground)]">↵</strong> Seç</span>
            <span><strong className="text-[var(--foreground)]">ESC</strong> Kapat</span>
          </div>
          <div className="hidden sm:block">
            Kriptonik Terminal v2.5
          </div>
        </div>
      </div>
    </div>
  );
}
