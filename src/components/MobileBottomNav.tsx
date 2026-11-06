'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Flame, BarChart3, Calculator, Search } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const handleOpenSearch = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const navItems = [
    {
      label: 'Piyasa',
      href: '/',
      icon: Activity,
      isActive: pathname === '/'
    },
    {
      label: 'Likidasyon',
      href: '/likidasyon/',
      icon: Flame,
      isActive: pathname.startsWith('/likidasyon')
    },
    {
      label: 'ETF',
      href: '/etf/',
      icon: BarChart3,
      isActive: pathname.startsWith('/etf')
    },
    {
      label: 'Hesapla',
      href: '/hesaplayici/',
      icon: Calculator,
      isActive: pathname.startsWith('/hesaplayici')
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-lg px-2 py-1.5 transition-colors shadow-2xl safe-area-pb">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                item.isActive
                  ? 'text-[#2962FF]'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 ${item.isActive ? 'scale-110' : ''} transition-transform`} />
                {item.isActive && (
                  <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-[#2962FF] animate-pulse" />
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${item.isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Global Search Button */}
        <button
          onClick={handleOpenSearch}
          className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[var(--card-muted)] hover:text-[#2962FF] transition-all"
        >
          <div className="relative flex items-center justify-center">
            <Search className="h-5 w-5 text-[#2962FF]" />
            <span className="absolute -top-1.5 -right-2 rounded-full bg-[#2962FF]/15 px-1 py-0.1 font-mono text-[8px] font-bold text-[#2962FF] border border-[#2962FF]/30">
              ⌘K
            </span>
          </div>
          <span className="text-[10px] mt-1 font-medium">
            Ara
          </span>
        </button>
      </div>
    </nav>
  );
}
