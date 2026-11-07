import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, generateProgrammaticAnalysis } from '../../../lib/data';
import { Calendar, ArrowLeft, Clock, AlertTriangle, HelpCircle } from 'lucide-react';

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  COINS_DATA.filter((coin) => coin.tokenUnlock !== undefined).forEach((coin) => {
    params.push({ slug: coin.slug });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );
  if (!coin) return { title: 'Coin Bulunamadı' };

  return {
    title: `${coin.name} (${coin.symbol}) Token Kilit Açılımı`,
    description: `${coin.name} için bir sonraki kilit açılış tarihi, açılacak token adedi, satış baskısı riski ve dolaşıma etki oranı.`,
    keywords: [
      `${coin.name.toLowerCase()} token kilit açılımı`,
      `${coin.symbol.toLowerCase()} token unlock`,
      `${coin.symbol.toLowerCase()} kilit açılış takvimi`,
      `${coin.name.toLowerCase()} dolaşımdaki arz`
    ],
    alternates: {
      canonical: `https://kriptonik.com/token-kilit-acilimlari/${coin.slug}/`
    }
  };
}

export default async function CoinTokenUnlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );

  if (!coin) {
    notFound();
  }

  const analysis = generateProgrammaticAnalysis(coin, 'unlock');
  const unlock = coin.tokenUnlock;

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Token Kilit Açılımları', item: 'https://kriptonik.com/token-kilit-acilimlari/' },
          { '@type': 'ListItem', position: 3, name: `${coin.name} Kilit Açılımı`, item: `https://kriptonik.com/token-kilit-acilimlari/${coin.slug}/` }
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
        <Link href="/token-kilit-acilimlari/" className="hover:text-[var(--foreground)]">Kilit Açılımları</Link>
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
              {coin.name} ({coin.symbol}) Kilit Açılım Takvimi
            </h1>
            <div className="flex items-center gap-3 text-xs text-[var(--card-muted)] mt-0.5 font-mono">
              <span>Toplam Arz: {coin.totalSupply.toLocaleString('tr-TR')} {coin.symbol}</span>
              <span>•</span>
              <span>Dolaşımdaki Arz: {coin.circulatingSupply.toLocaleString('tr-TR')} {coin.symbol}</span>
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
      {unlock ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)]">Sıradaki Kilit Açılış Tarihi</div>
            <div className="text-lg font-mono font-bold text-[var(--foreground)] flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#2962FF]" />
              {new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR')}
            </div>
            <div className="text-[11px] text-[var(--card-muted)]">Tür: {unlock.unlockType} UNLOCK</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)]">Açılacak Varlık Değeri</div>
            <div className="text-lg font-mono font-bold text-[#F6465D]">
              ${(unlock.unlockValueUsd / 1_000_000).toFixed(1)}M
            </div>
            <div className="text-[11px] text-[var(--card-muted)]">{unlock.unlockedTokens.toLocaleString('tr-TR')} {coin.symbol}</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)]">Dolaşıma Oranı</div>
            <div className="text-lg font-mono font-bold text-[#D97706] dark:text-[#F2C14E]">
              %{unlock.unlockedPercent}
            </div>
            <div className="text-[11px] text-[var(--card-muted)]">Dolaşımdaki toplam arza kıyasla</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[var(--card-muted)]">Satış Baskısı Risk Skoru</div>
            <div className={`text-lg font-mono font-bold ${unlock.riskScore > 70 ? 'text-[#F6465D]' : 'text-[#00C087]'}`}>
              {unlock.riskScore}/100
            </div>
            <div className="text-[11px] text-[var(--card-muted)]">{unlock.riskScore > 70 ? 'Yüksek Risk' : 'Orta / Düşük Risk'}</div>
          </div>
        </div>
      ) : (
        <div className="panel-card p-6 text-center text-xs text-[var(--card-muted)]">
          {coin.name} ({coin.symbol}) için önümüzdeki 60 gün içinde planlanmış büyük bir kilit açılımı bulunmamaktadır.
        </div>
      )}

      {/* Programmatic Analysis Content */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[#D97706] dark:text-[#F2C14E]" />
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
          <span>Sıkça Sorulan Sorular (SSS) — {coin.name} Kilit Açılımı</span>
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
