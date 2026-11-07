import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import MarketHeatmapPageClient from './MarketHeatmapPageClient';
import { LayoutGrid, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Market Isı Şeması (Crypto Heatmap) — Canlı 24s Hacim & Getiri Haritası',
  description:
    'Bitcoin, Ethereum, Solana ve 60+ kripto paranın canlı 24 saatlik getiri, hacim ağırlıklı market ısı şeması (Crypto Heatmap). Ayı ve boğa piyasası renk ve likidite dağılımı.',
  keywords: [
    'kripto market ısı şeması',
    'crypto heatmap türkçe',
    'kripto para ısı haritası',
    'bitcoin heatmap',
    'canlı kripto treemap',
    'altcoin getiri haritası',
    'coinglass stocks heatmap',
    'kripto piyasa haritası'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/market-isi-semasi/'
  }
};

export default function MarketHeatmapPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kripto Market Isı Şeması (Crypto Heatmap) Nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kripto market ısı şeması, yüzlerce kripto paranın 24 saatlik fiyat değişimlerini ve işlem hacimlerini tek bir görsel kare/dikdörtgen şema (treemap) üzerinde yeşil ve kırmızı renk tonlarıyla gösteren canlı piyasa haritasıdır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Isı şemasındaki blokların büyüklüğü neyi temsil eder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blokların yüzey büyüklüğü varlığın 24 saatlik işlem hacmi veya toplam piyasa değeri büyüklüğünü temsil eder. Bitcoin ve Ethereum en yüksek pazar payına sahip olduğu için en geniş blokları kaplar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Isı şemasında renkler nasıl belirlenir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Renkler son 24 saatlik net getiri yüzdesine göre sabitlenir. %5 ve üzeri yükselişler derin zümrüt yeşili, %0-%5 arası yükselişler açık yeşil, %0 nötr gri, %0 ile -%5 arası düzeltmeler açık kırmızı, -%5 ve üzeri düşüşler ise koyu kırmızı ile gösterilir.'
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

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
          Kriptonik
        </Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Market Isı Şeması</span>
      </nav>

      {/* Hero Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
              Canlı Kripto Market Isı Şeması (Crypto Heatmap)
            </h1>
            <p className="text-xs sm:text-sm text-[var(--card-muted)] mt-0.5 max-w-3xl leading-relaxed">
              Piyasadaki sermaye rotasyonunu tek bakışta keşfedin. Hacim ağırlıklı treemap blokları, 24 saatlik net getiri baremleri ve Binance canlı WebSocket fiyat hattı.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Client Component */}
      <MarketHeatmapPageClient coins={COINS_DATA} />

      {/* SEO Educational Guide & SSS Section */}
      <section className="panel-card p-6 space-y-6">
        <div className="space-y-2 border-b border-[var(--border)] pb-4">
          <h2 className="text-lg font-black text-[var(--foreground)] flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#2962FF]" />
            <span>Kripto Market Isı Haritası Nasıl Okunur?</span>
          </h2>
          <p className="text-xs text-[var(--card-muted)]">
            Kurumsal fon yöneticileri ve profesyonel traderların piyasa genelindeki sermaye akışını okuma yöntemleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-[var(--card-muted)] leading-relaxed">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-2">
            <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00E699]" />
              <span>1. Blok Boyutları (Hacim Ağırlığı)</span>
            </h3>
            <p>
              Isı haritasında her karo, varlığın 24 saatlik küresel işlem hacmine ve likiditesine göre boyutlandırılır. Bitcoin ve Ethereum pastadaki en büyük dilimi oluştururken, altcoinlerin görece büyüklüğü o günkü sermaye ilgisini yansıtır.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-2">
            <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2962FF]" />
              <span>2. Sabit 24 Saatlik Renk Baremleri</span>
            </h3>
            <p>
              Anlık fiyat hareketlerinde karoların sürekli yanıp sönmesi gözü yorar. Kriptonik Isı Şemasında blok arkaplan renkleri 24 saatlik net getiriye göre sabitlenmiştir. Yalnızca fiyat güncellemeleri akıcı olarak yansıtılır.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-2">
            <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF8A00]" />
              <span>3. Sektörel Ayrışma Tespiti</span>
            </h3>
            <p>
              Büyük varlıklar (BTC, ETH) yatay seyrederken belirli sektörlerin (AI, DeFi, Meme veya Katman-1) yeşile bürünmesi, piyasada sektörel bir rallinin (rotasyon) başladığına işaret eder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
