import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getKacTlItems } from '../../../lib/data';
import KacTlConverter from '../../../components/KacTlConverter';
import { Calculator, HelpCircle, ArrowLeft, TrendingUp } from 'lucide-react';

export async function generateStaticParams() {
  const items = getKacTlItems();
  return items.map((it) => ({
    slug: it.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const items = getKacTlItems();
  const item = items.find((it) => it.slug === slug);
  if (!item) return { title: 'Dönüştürücü Bulunamadı | Kriptonik' };

  return {
    title: `${item.unitAmount} ${item.symbol} Kaç TL? (${item.name} Canlı Fiyatı) | Kriptonik`,
    description: `${item.unitAmount} ${item.symbol} (${item.name}) anlık kaç Türk Lirası? Canlı alış-satış kuru, TCMB ve serbest piyasa teyitli hesaplama tablosu.`,
    keywords: [
      `${item.unitAmount} ${item.symbol.toLowerCase()} kaç tl`,
      `${item.name.toLowerCase()} kaç tl`,
      `${item.symbol.toLowerCase()} tl çevirici`,
      `canlı ${item.symbol.toLowerCase()} kuru`,
      'kripto kaç tl'
    ],
    alternates: {
      canonical: `https://kriptonik.com/kac-tl/${item.slug}/`
    }
  };
}

export default async function KacTlDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const items = getKacTlItems();
  const item = items.find((it) => it.slug === slug);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Kaç TL? Çevirici', item: 'https://kriptonik.com/kac-tl/' },
          { '@type': 'ListItem', position: 3, name: `${item.unitAmount} ${item.symbol} Kaç TL?`, item: `https://kriptonik.com/kac-tl/${item.slug}/` }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `${item.unitAmount} ${item.symbol} (${item.name}) şu an kaç TL?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${item.unitAmount} ${item.symbol} anlık piyasa fiyatıyla yaklaşık ${item.rateTry > 10 ? item.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : item.rateTry.toFixed(4)} Türk Lirası değerindedir.`
            }
          },
          {
            '@type': 'Question',
            name: `${item.symbol} kuru serbest piyasada ve bankalarda farklı mıdır?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Evet, TCMB resmi gösterge kuru ile serbest piyasa / kripto borsası makas aralıkları farklılık gösterebilir. Sayfamızda her üç kaynağın da anlık verileri sunulmaktadır.`
            }
          }
        ]
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
        <Link href="/kac-tl/" className="hover:text-[var(--foreground)]">Kaç TL?</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">{item.unitAmount} {item.symbol} Kaç TL?</span>
      </nav>

      {/* Hero Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C087]/15 text-[#00C087] font-mono font-bold text-sm">
              {item.symbol}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
                {item.unitAmount} {item.symbol} Kaç TL? ({item.name})
              </h1>
              <p className="text-xs text-[var(--card-muted)] mt-0.5 font-mono">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        <div className="text-right font-mono">
          <div className="text-2xl font-black text-[#00C087]">
            {item.rateTry > 10 ? item.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : item.rateTry.toFixed(4)} ₺
          </div>
          <div className={`text-xs font-semibold ${item.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}% (Son 24s)
          </div>
        </div>
      </div>

      {/* Interactive Converter Component */}
      <KacTlConverter initialSlug={item.slug} />

      {/* Programmatic Editorial Section */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#00C087]" />
          <span>{item.unitAmount} {item.symbol} ({item.name}) Türk Lirası Fiyat Analizi</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
          <p>
            Mevcut piyasa koşullarında <strong>1 {item.symbol}</strong> karşılığı yaklaşık <strong>{item.rateTry > 10 ? item.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : item.rateTry.toFixed(4)} Türk Lirası</strong> seviyesindedir. Uluslararası piyasalarda {item.name} birim fiyatı ${item.rateUsd.toLocaleString('tr-TR')} USD seviyesinde işlem görürken, Türkiye iç piyasasındaki USDT/TRY paritesi üzerinden hesaplanan canlı fiyatlama yukarıdaki hesaplama panelinde yansıtılmaktadır.
          </p>
          <p>
            Yatırımcılar ve transfer yapan kullanıcılar için en önemli konu, bankalardaki döviz makasları ile kripto borsalarındaki spread farkıdır. Kriptonik, TCMB gösterge kuru ({item.tcmbTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL) ile Binance TR spot kurunu ({item.binanceTrTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL) karşılaştırmalı olarak sunar.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          <span>Sıkça Sorulan Sorular — {item.symbol} / TL Kuru</span>
        </h3>
        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">1 {item.symbol} şu anda kaç TL?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              1 {item.symbol} anlık olarak {item.rateTry > 10 ? item.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : item.rateTry.toFixed(4)} TL'ye eşittir.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Fiyatlar nereden çekilmektedir?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              Fiyatlar doğrudan Binance global spot API'leri, Binance TR tahtası ve uluslararası döviz kurları üzerinden saniyelik teyit edilmektedir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
