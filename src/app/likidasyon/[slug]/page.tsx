import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, getCoinBySlug, generateProgrammaticAnalysis } from '../../../lib/data';
import LiquidationHeatmap from '../../../components/LiquidationHeatmap';
import { Flame, ArrowLeft, HelpCircle } from 'lucide-react';

export async function generateStaticParams() {
  return COINS_DATA.map((coin) => ({
    slug: coin.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);
  if (!coin) return { title: 'Varlık Bulunamadı | Kriptonik' };

  return {
    title: `${coin.name} (${coin.symbol}) Canlı Likidasyon Isı Haritası ve Tasfiye Seviyeleri | Kriptonik`,
    description: `${coin.name} (${coin.symbol}) için son 24 saatte gerçekleşen anlık tasfiyeler, long/short likidasyon duvarları ve açık pozisyon ısı haritası verileri.`,
    alternates: {
      canonical: `https://kriptonik.com/likidasyon/${coin.slug}/`
    }
  };
}

export default async function CoinLiquidationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    notFound();
  }

  const analysis = generateProgrammaticAnalysis(coin, 'likidasyon');

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Likidasyon Haritası', item: 'https://kriptonik.com/likidasyon/' },
          { '@type': 'ListItem', position: 3, name: coin.name, item: `https://kriptonik.com/likidasyon/${coin.slug}/` }
        ]
      },
      {
        '@type': 'FinancialProduct',
        name: `${coin.name} (${coin.symbol}) Türev ve Likidasyon Verisi`,
        description: `${coin.name} anlık kaldıraçlı tasfiye havuzları ve fonlama verisi.`,
        provider: { '@type': 'Organization', name: 'Kriptonik' }
      },
      {
        '@type': 'FAQPage',
        mainEntity: analysis.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <Link href="/likidasyon/" className="hover:text-white">Likidasyon</Link>
        <span>/</span>
        <span className="text-white font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Page Title & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222938] font-mono font-bold text-sm text-white">
              {coin.symbol.slice(0, 3)}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                {coin.name} ({coin.symbol}) Canlı Likidasyon Isı Haritası
              </h1>
              <div className="flex items-center gap-3 text-xs text-[#848E9C] mt-0.5">
                <span>Piyasa Değeri Sırası: #{coin.marketCapRank}</span>
                <span>•</span>
                <span className="font-mono text-white font-semibold">
                  Spot: ${coin.price > 10 ? coin.price.toLocaleString('tr-TR') : coin.price.toFixed(4)}
                </span>
                <span>•</span>
                <span className={`font-mono font-bold ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action pills */}
        <div className="flex items-center gap-2">
          <Link
            href={`/fonlama-oranlari/${coin.slug}/`}
            className="rounded-lg border border-[#222938] bg-[#151A23] px-3 py-1.5 text-xs font-semibold text-[#CBD5E1] hover:text-white hover:border-[#334055] transition-colors"
          >
            Fonlama Oranı →
          </Link>
          <Link
            href={`/kripto/${coin.slug}/`}
            className="rounded-lg bg-[#2962FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1E4BD8] transition-colors"
          >
            360° Analiz Terminali
          </Link>
        </div>
      </div>

      {/* Live Liquidation Heatmap Component */}
      <LiquidationHeatmap coin={coin} />

      {/* Programmatic Rich Content (Google Thin-Content Barrier Breaker) */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#F6465D]" />
          <span>{analysis.title}</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
          {analysis.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* FAQ Schema Accordions */}
      <section className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          <span>Sıkça Sorulan Sorular (SSS) — {coin.name} Likidasyon</span>
        </h3>
        <div className="space-y-3">
          {analysis.faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-[#222938] bg-[#0D121A] p-4 text-xs">
              <h4 className="font-bold text-white text-sm">{faq.q}</h4>
              <p className="mt-1.5 text-[#848E9C] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
