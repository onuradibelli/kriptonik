import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, generateProgrammaticAnalysis } from '../../../lib/data';
import { Compass, ArrowLeft, TrendingUp, TrendingDown, HelpCircle } from 'lucide-react';

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
    title: `${coin.symbol} Açık Pozisyon (OI)`,
    description: `${coin.name} vadeli işlemlerinde açık pozisyon kontrat büyüklüğü $${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B, long/short rasyosu ve piyasa yönü analizi.`,
    keywords: [
      `${coin.name.toLowerCase()} open interest`,
      `${coin.symbol.toLowerCase()} açık pozisyon`,
      `${coin.symbol.toLowerCase()} oi analizi`,
      `${coin.name.toLowerCase()} vadeli hacim`
    ],
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://kriptonik.com/acik-pozisyon/${coin.slug}/`
    }
  };
}

export default async function CoinOpenInterestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );

  if (!coin) {
    notFound();
  }

  const analysis = generateProgrammaticAnalysis(coin, 'oi');
  const isOiUp = coin.openInterestChange24h >= 0;

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Açık Pozisyon', item: 'https://kriptonik.com/acik-pozisyon/' },
          { '@type': 'ListItem', position: 3, name: `${coin.name} Açık Pozisyon`, item: `https://kriptonik.com/acik-pozisyon/${coin.slug}/` }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <Link href="/acik-pozisyon/" className="hover:text-[var(--foreground)]">Açık Pozisyon</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--border)] font-mono font-bold text-sm text-[var(--foreground)]">
            {coin.symbol.slice(0, 3)}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
              {coin.name} ({coin.symbol}) Açık Pozisyon (Open Interest)
            </h1>
            <div className="flex items-center gap-3 text-xs text-[var(--card-muted)] mt-0.5 font-mono">
              <span>Spot Fiyat: ${coin.price.toLocaleString('tr-TR')}</span>
              <span>•</span>
              <span className={`font-bold ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/likidasyon/${coin.slug}/`}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
          >
            Likidasyon Haritası →
          </Link>
          <Link
            href={`/kripto/${coin.slug}/`}
            className="rounded-lg bg-[#2962FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#2563EB] transition-colors"
          >
            360° Terminal
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[var(--card-muted)]">Toplam Açık Pozisyon (OI)</div>
          <div className="text-xl font-mono font-bold text-[var(--foreground)]">
            ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">Tüm türev borsaları</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[var(--card-muted)]">24s OI Değişimi</div>
          <div className={`text-xl font-mono font-bold flex items-center gap-1.5 ${isOiUp ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {isOiUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {isOiUp ? '+' : ''}{coin.openInterestChange24h.toFixed(2)}%
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">Sermaye Akış Yönü</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[var(--card-muted)]">Long / Short Oranı</div>
          <div className="text-xl font-mono font-bold text-[#2962FF]">
            {coin.longShortRatio.toFixed(2)}
          </div>
          <div className="text-[11px] text-[var(--card-muted)] font-mono">%{coin.longPercentage.toFixed(1)} Long • %{coin.shortPercentage.toFixed(1)} Short</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[var(--card-muted)]">24s Vadeli İşlem Hacmi</div>
          <div className="text-xl font-mono font-bold text-[var(--foreground)]">
            ${(coin.volume24hUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">Yüksek Likidite</div>
        </div>
      </div>

      {/* Programmatic Paragraphs */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <Compass className="h-4 w-4 text-[#2962FF]" />
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
          <span>Sıkça Sorulan Sorular (SSS) — {coin.name} Açık Pozisyon</span>
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
