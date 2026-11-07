import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import LiquidationHubClient from '../../components/LiquidationHubClient';
import { Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Kripto Likidasyon Isı Haritası',
  description:
    'Binance, Bybit ve OKX vadeli işlemlerinde 10x, 25x, 50x, 100x kaldıraçlı tasfiye havuzları, canlı likidasyon ısı haritası ve short squeeze sinyalleri.',
  keywords: [
    'kripto likidasyon haritası',
    'liquidation heatmap',
    'coinglass liquidations',
    'bitcoin likidasyon seviyeleri',
    'tasfiye haritası',
    'short squeeze analizi',
    'long cascade',
    'binance futures likidasyon'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/likidasyon/'
  }
};

export default function LiquidationHubPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Likidasyon Isı Haritası (Liquidation Heatmap) Nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vadeli kripto para borsalarında açılan yüksek kaldıraçlı (10x, 25x, 50x, 100x) pozisyonların zorunlu tasfiye edileceği kritik fiyat bölgelerini görselleştiren derinlik analiz aracıdır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Short Squeeze ve Long Cascade Nasıl Gerçekleşir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fiyat yoğun short tasfiye kümelerinin bulunduğu seviyeye ulaştığında, borsalar otomatik piyasa alım emirleri gönderir. Bu zincirleme alımlar fiyatı aniden yukarı fırlatarak Short Squeeze yaratır.'
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
        <span className="text-[var(--foreground)] font-semibold">Türev Piyasası</span>
        <span>/</span>
        <span className="text-[#FF3B56] font-semibold">Likidasyon Isı Haritası</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF3B56]/15 text-[#FF3B56] border border-[#FF3B56]/25">
            <Flame className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
            Canlı Likidasyon Isı Haritası & Tasfiye Havuzları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Kaldıraçlı vadeli işlem piyasalarında yüksek yoğunluklu tasfiye seviyeleri (10x, 25x, 50x, 100x kaldıraç duvarları), emir defteri derinliği ve zincirleme tasfiye tetiklenme noktalarını canlı izleyin.
        </p>
      </div>

      <LiquidationHubClient coins={COINS_DATA} />
    </div>
  );
}
