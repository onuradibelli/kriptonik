import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import EtfTracker from '../../components/EtfTracker';
import { BarChart3, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Spot Bitcoin ve Ethereum ETF Giriş/Çıkış Akışları (Net Flows) | Kriptonik',
  description: 'BlackRock (IBIT), Fidelity (FBTC), Grayscale ve tüm kurumsal ETF ihraççılarının günlük net sermaye akışları, SoSoValue konsolide giriş/çıkış bilançosu ve AUM rezervleri.',
  keywords: [
    'spot etf akışları',
    'bitcoin etf girişleri',
    'ethereum spot etf',
    'sosovalue etf türkçe',
    'ibit net flow',
    'fbtc para girişi',
    'kripto etf verileri',
    'blackrock bitcoin rezervi'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/etf/'
  }
};

export default function EtfHubPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Spot Bitcoin ETF Net Giriş/Çıkış (Net Inflow/Outflow) Ne Anlama Gelir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Net giriş, kurumsal yatırımcıların fon payı satın almak için nakit getirdiğini ve ihraççı fonun (BlackRock, Fidelity vb.) piyasadan gerçek Bitcoin satın aldığını gösterir. Net çıkış ise fon paylarının satılarak rezervdeki Bitcoinlerin bozdurulduğunu ifade eder.'
        }
      },
      {
        '@type': 'Question',
        name: 'SoSoValue ETF verileri ne zaman güncellenir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ABD spot ETF akışları New York borsa seans kapanışından sonra (TSİ gece yarısı ve sabah saatlerinde) fon ihraççılarının günlük beyanlarıyla konsolide edilir.'
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
        <span className="text-[var(--foreground)] font-semibold">Spot ETF Akışları</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Spot Bitcoin & Ethereum ETF Kurumsal Akışları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Wall Street fonlarının spot kripto piyasasına getirdiği taze sermaye akışlarını anlık takip edin. Her işlem günü sonunda BlackRock, Fidelity ve Grayscale dahil 11 fonun net alım/satım bilançoları burada güncellenir.
        </p>
      </div>

      <EtfTracker />
    </div>
  );
}
