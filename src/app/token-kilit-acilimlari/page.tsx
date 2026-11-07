import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import TokenUnlockCalendar from '../../components/TokenUnlockCalendar';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Token Kilit Açılım Takvimi (Cliff & Linear Unlocks)',
  description: 'Önümüzdeki 30 gün içinde kilitli arzı serbest kalacak tokenlar, satış baskısı risk skorları, dolaşım oranları ve yatırımcı/ekip payları takvimi.',
  keywords: [
    'token kilit açılımı',
    'token unlock takvimi',
    'cliff unlock nedir',
    'tokenomik kilit açılışı',
    'kripto kilitli arz',
    'satış baskısı riski'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/token-kilit-acilimlari/'
  }
};

export default function TokenUnlockHubPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Token Kilit Açılımı (Token Unlock) Nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Erken aşama yatırımcılar, proje ekibi veya ekosistem fonları için önceden kilitlenen tokenların belirli bir takvime göre serbest kalarak transfer edilebilir veya satılabilir hale gelmesidir.'
        }
      }
    ]
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Token Kilit Açılımları</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D97706]/15 text-[#D97706] dark:text-[#F2C14E]">
            <Calendar className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Kripto Token Kilit Açılım Takvimi & Satış Baskısı Radarı
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Kilitli arzların dolaşıma girmesi spot piyasalarda sert dalgalanmalara yol açabilir. Projelerin Cliff (toplu) ve Linear (doğrusal) kilit açılış tarihlerini, dolaşımdaki arza etkisini ve risk skorunu anlık takip edin.
        </p>
      </div>

      {/* Main Calendar Component */}
      <TokenUnlockCalendar coins={COINS_DATA} />
    </div>
  );
}
