'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap, Bell, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  tag: string;
  title: string;
  time: string;
  link: string;
  highlight?: string;
}

export default function BreakingNewsTicker() {
  const news: NewsItem[] = [
    {
      id: 1,
      tag: 'SPOT ETF',
      title: "Bitcoin ve Ethereum Spot ETF'lerinden dünkü işlem seansında -$506.8M net kurumsal çıkış kaydedildi.",
      highlight: 'Fidelity (FBTC) ve Grayscale çıkışları baskın.',
      time: '15 dk önce',
      link: '/etf/'
    },
    {
      id: 2,
      tag: 'TÜREV TASFİYE',
      title: 'Türev piyasasında son 24 saatte $348.5M kaldıraçlı pozisyon tasfiye edildi.',
      highlight: 'Short pozisyonlar %62 ile tasfiyelerin çoğunluğunu oluşturdu.',
      time: '32 dk önce',
      link: '/likidasyon/'
    },
    {
      id: 3,
      tag: 'PİYASA PSİKOLOJİSİ',
      title: 'Kripto Korku ve Açgözlülük Endeksi 28 (Korku) seviyesine geriledi.',
      highlight: 'Tarihsel olarak kurumsal alım bölgesine işaret ediyor.',
      time: '1 saat önce',
      link: '/'
    },
    {
      id: 4,
      tag: 'DÖVİZ & ARBİTRAJ',
      title: 'USD/TRY serbest piyasada 50,08 ₺, Binance TR USDT kuru ise 50,01 ₺ bandında işlem görüyor.',
      highlight: 'Borsalar arası makas daralıyor.',
      time: '1 saat önce',
      link: '/kac-tl/'
    },
    {
      id: 5,
      tag: 'KİLİT AÇILIMI',
      title: 'Bu ay kripto ekosisteminde toplam $2.45B değerinde kilitli token piyasaya sürülecek.',
      highlight: 'SUI ve ARB için risk uyarısı.',
      time: '2 saat önce',
      link: '/token-kilit-acilimlari/'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, news.length]);

  const activeNews = news[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full border-b border-[var(--border)] bg-[var(--subtle)] px-3 py-2 text-xs transition-colors"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* Left Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-500">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 pulse-red" />
            <span>SON DAKİKA</span>
          </span>
          <span className="hidden sm:inline-block rounded bg-[var(--border)] px-1.5 py-0.5 text-[10px] font-mono font-bold text-[var(--foreground)]">
            {activeNews.tag}
          </span>
        </div>

        {/* Center Animated News Text with Slick Slide & Fade Transition */}
        <div className="flex-1 overflow-hidden min-h-[22px]">
          <div key={activeNews.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out">
            <Link
              href={activeNews.link}
              className="group flex items-center gap-2 truncate transition-colors hover:text-[#2962FF]"
            >
              <span className="font-semibold text-xs text-[var(--foreground)] group-hover:underline truncate">
                {activeNews.title}
              </span>
              <span className="hidden md:inline text-[var(--card-muted)] text-xs truncate">
                {activeNews.highlight}
              </span>
              <span className="hidden lg:inline text-xs font-mono text-[var(--card-muted)] opacity-75">
                ({activeNews.time})
              </span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#2962FF] shrink-0" />
            </Link>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="hidden sm:inline font-mono text-[10px] text-[var(--card-muted)] mr-1">
            {currentIndex + 1} / {news.length}
          </span>
          <button
            onClick={handlePrev}
            aria-label="Önceki Haber"
            className="rounded p-1 text-[var(--card-muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Sonraki Haber"
            className="rounded p-1 text-[var(--card-muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
