'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  tag: string;
  title: string;
  date: string;
  link: string;
  highlight?: string;
}

export default function BreakingNewsTicker() {
  const news: NewsItem[] = [
    {
      id: 1,
      tag: 'SPOT ETF AKIŞLARI',
      title: "Bitcoin ve Ethereum Spot ETF'lerinde net kurumsal akışlar takip ediliyor.",
      highlight: 'BlackRock (IBIT) ve Fidelity (FBTC) akışları canlı izleniyor.',
      date: 'Günlük Analiz',
      link: '/etf/'
    },
    {
      id: 2,
      tag: 'TÜREV & LİKİDASYON',
      title: 'Türev piyasasında kritik kaldıraçlı tasfiye havuzları ve ısı haritası güncellendi.',
      highlight: 'Bitcoin ve Ethereum için dominant tasfiye seviyeleri radarda.',
      date: 'Canlı Radar',
      link: '/likidasyon/'
    },
    {
      id: 3,
      tag: 'PİYASA PSİKOLOJİSİ',
      title: 'Kripto Korku ve Açgözlülük Endeksi piyasa duyarlılığını ölçümlüyor.',
      highlight: 'Tarihsel kurumsal akümülasyon seviyeleriyle karşılaştırmalı analiz.',
      date: 'Piyasa Notu',
      link: '/bulten/'
    },
    {
      id: 4,
      tag: 'DÖVİZ & ARBİTRAJ',
      title: 'USD/TRY serbest piyasa kuru ile Binance TR USDT kuru arasındaki arbitraj makası.',
      highlight: 'Borsalar ve fiziki döviz makası takip ediliyor.',
      date: 'Döviz Takip',
      link: '/kac-tl/'
    },
    {
      id: 5,
      tag: 'KİLİT AÇILIMI',
      title: 'Kripto ekosisteminde kilitli token açılım takvimi ve dolaşıma etki oranları.',
      highlight: 'SUI, ARB ve APT için kilit açılış tarihleri listelendi.',
      date: 'Takvim Raporu',
      link: '/token-kilit-acilimlari/'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [news.length]);

  const currentNews = news[currentIndex];

  return (
    <div className="w-full border-b border-[var(--border)] bg-[var(--background)] px-4 py-2 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
        {/* Left Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 rounded-lg bg-[#2962FF]/10 px-2.5 py-1 font-mono font-bold text-[#2962FF] border border-[#2962FF]/20">
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">PİYASA GÜNDEMİ</span>
            <span className="sm:hidden">GÜNDEM</span>
          </span>
          <span className="rounded bg-[var(--card)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--card-muted)] border border-[var(--border)] hidden md:inline">
            {currentNews.tag}
          </span>
        </div>

        {/* Center Headline */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <Link
            href={currentNews.link}
            className="group flex items-center gap-2 truncate text-[var(--foreground)] hover:text-[#2962FF] transition-colors"
          >
            <span className="truncate font-medium">{currentNews.title}</span>
            {currentNews.highlight && (
              <span className="hidden lg:inline text-[var(--card-muted)] font-mono text-[11px] truncate">
                — {currentNews.highlight}
              </span>
            )}
            <ExternalLink className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#2962FF]" />
          </Link>
        </div>

        {/* Right Date & Controls */}
        <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-[var(--card-muted)]">
          <span className="hidden sm:inline text-[11px] font-semibold">{currentNews.date}</span>
          <div className="flex items-center gap-0.5 border-l border-[var(--border)] pl-2">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + news.length) % news.length)}
              className="p-1 rounded hover:bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Önceki haber"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <span className="text-[10px] font-bold px-1">
              {currentIndex + 1}/{news.length}
            </span>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
              className="p-1 rounded hover:bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Sonraki haber"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
