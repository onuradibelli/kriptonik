import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { WHALE_TRANSACTIONS } from '../../lib/data';
import WhaleTracker from '../../components/WhaleTracker';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Kripto Balina Takibi ve Büyük Cüzdan Transfer Radarı',
  description: 'Milyonlarca dolarlık Bitcoin, Ethereum, Solana ve altcoin balina hareketleri, soğuk cüzdan transferleri, borsa giriş/çıkış akışları ve whale alert sinyalleri.',
  keywords: [
    'kripto balina takibi',
    'whale alert türkçe',
    'bitcoin balina hareketleri',
    'büyük cüzdan transferleri',
    'onchain transfer takibi',
    'borsa para girişi inflow',
    'soğuk cüzdan outflow'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/balina-takibi/'
  }
};

export default function WhaleTrackerPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kriptoda Balina Transferleri (Whale Alert) Neden Önemlidir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Borsalara yapılan büyük miktarda coin transferleri (Inflow) genellikle satış baskısı yaratabilecek potansiyel satış hazırlığını; borsalardan soğuk cüzdanlara çekilen miktarlar (Outflow) ise uzun vadeli biriktirmeyi ve piyasadaki arzın azaldığını gösterir.'
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
        <span className="text-[var(--foreground)] font-semibold">Balina Takibi</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087]">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Canlı Balina Takibi & Kurumsal Cüzdan Akışları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Piyasa yapıcıların, madencilerin ve balinaların borsalara yatırdığı (Inflow) ve soğuk cüzdanlara çektiği (Outflow) büyük hacimli on-chain transferleri saniyelik olarak yakalayın.
        </p>
      </div>

      <WhaleTracker transactions={WHALE_TRANSACTIONS} />
    </div>
  );
}
