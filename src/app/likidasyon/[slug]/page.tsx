import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, generateProgrammaticAnalysis } from '../../../lib/data';
import LiquidationHeatmap from '../../../components/LiquidationHeatmap';
import { Flame, ArrowLeft, TrendingUp, HelpCircle } from 'lucide-react';

export async function generateStaticParams() {
  return COINS_DATA.map((coin) => ({ slug: coin.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );
  if (!coin) return { title: 'Coin Bulunamadı' };

  return {
    title: `${coin.symbol} Likidasyon Isı Haritası`,
    description: `${coin.name} vadeli işlemlerinde son 24 saatte gerçekleşen tasfiyeler, dominant tasfiye seviyesi $${coin.dominantLiquidationLevel} ve 100x kaldıraç havuzları.`,
    keywords: [
      `${coin.name.toLowerCase()} likidasyon`,
      `${coin.symbol.toLowerCase()} liquidation heatmap`,
      `${coin.symbol.toLowerCase()} tasfiye haritası`,
      `${coin.name.toLowerCase()} kaldıraç analizi`
    ],
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://kriptonik.com/likidasyon/${coin.slug}/`
    }
  };
}

export default async function CoinLiquidationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );

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
          { '@type': 'ListItem', position: 3, name: `${coin.name} Likidasyon`, item: `https://kriptonik.com/likidasyon/${coin.slug}/` }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: analysis.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <Link href="/likidasyon/" className="hover:text-[var(--foreground)]">Likidasyon</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Page Title & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--border)] font-mono font-bold text-sm text-[var(--foreground)]">
              {coin.symbol.slice(0, 3)}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
                {coin.name} ({coin.symbol}) Canlı Likidasyon Isı Haritası
              </h1>
              <div className="flex items-center gap-3 text-xs text-[var(--card-muted)] mt-0.5">
                <span>Piyasa Değeri Sırası: #{coin.marketCapRank}</span>
                <span>•</span>
                <span className="font-mono text-[var(--foreground)] font-semibold">
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
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
          >
            Fonlama Oranı →
          </Link>
          <Link
            href={`/kripto/${coin.slug}/`}
            className="rounded-lg bg-[#2962FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#2563EB] transition-colors"
          >
            360° Analiz Terminali
          </Link>
        </div>
      </div>

      {/* Live Liquidation Heatmap Component */}
      <LiquidationHeatmap coin={coin} />

      {/* Programmatic Rich Content */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#F6465D]" />
          <span>{analysis.title}</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
          {analysis.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* FAQ Schema Accordions */}
      <section className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          <span>Sıkça Sorulan Sorular (SSS) — {coin.name} Likidasyon</span>
        </h3>
        <div className="space-y-3">
          {analysis.faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
              <h4 className="font-bold text-[var(--foreground)] text-sm">{faq.q}</h4>
              <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
