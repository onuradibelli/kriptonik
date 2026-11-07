import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getKacTlItems, LIVE_CURRENCY_RATES } from '../../lib/data';
import KacTlConverter from '../../components/KacTlConverter';
import { Calculator, ArrowRight, HelpCircle, TrendingUp, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kaç TL? Canlı Dolar, USDT, Bitcoin ve Kripto Türk Lirası Çevirici',
  description: '1 Dolar kaç TL? 1 USDT Tether kaç TL? 1 Bitcoin kaç TL? TCMB, serbest piyasa ve Binance TR canlı kurlarıyla anında Türk Lirası hesaplama ve dönüştürücü aracı.',
  keywords: [
    '1 dolar kaç tl',
    'dolar kaç tl',
    '1 usdt kaç tl',
    'tether kaç tl',
    '1 btc kaç tl',
    'bitcoin kaç tl',
    '1 eth kaç tl',
    'ethereum kaç tl',
    'kripto kaç tl',
    'canlı döviz kuru tl'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/kac-tl/'
  }
};

export default function KacTlHubPage() {
  const items = getKacTlItems();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Kaç TL? Canlı Çevirici', item: 'https://kriptonik.com/kac-tl/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '1 Dolar kaç TL?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `1 Amerikan Doları anlık serbest piyasada yaklaşık ${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} TL seviyesindedir.`
            }
          },
          {
            '@type': 'Question',
            name: '1 USDT (Tether) kaç TL?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `1 USDT Tether kripto para borsalarında ${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} TL bandında işlem görmektedir.`
            }
          },
          {
            '@type': 'Question',
            name: '1 Bitcoin (BTC) kaç TL?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `1 Bitcoin güncel spot fiyat ve dolar kuruyla yaklaşık ${(75728 * LIVE_CURRENCY_RATES.USDT_TRY).toLocaleString('tr-TR')} Türk Lirası değerindedir.`
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
        <span className="text-[var(--foreground)] font-semibold">Kaç TL? Canlı Çevirici</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087]">
            <Calculator className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Kaç TL? Canlı Dolar, USDT, Bitcoin ve Altcoin Çevirici
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Türkiye'de Google aramalarında en çok sorgulanan "1 Dolar kaç TL?", "1 USDT kaç TL?", "1 Bitcoin kaç TL?" sorularına anlık, gecikmesiz ve üç farklı veri kaynağından (TCMB, Kapalıçarşı ve Binance TR) teyitli yanıtlar.
        </p>
      </div>

      {/* Interactive Converter */}
      <KacTlConverter initialSlug="1-dolar-kac-tl" />

      {/* High-Intent SEO Cards Grid */}
      <div className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)]">En Çok Aranan Canlı TL Karşılıkları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/kac-tl/${it.slug}/`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#00C087] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--foreground)] text-sm group-hover:text-[#00C087] transition-colors">
                    {it.unitAmount} {it.symbol} Kaç TL?
                  </span>
                  <span className={`font-mono text-xs font-bold ${it.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    {it.change24h >= 0 ? '+' : ''}{it.change24h.toFixed(2)}%
                  </span>
                </div>
                <div className="text-[11px] text-[var(--card-muted)] mt-0.5">{it.name}</div>

                <div className="mt-3 font-mono text-lg font-black text-[var(--foreground)]">
                  {it.rateTry > 10 ? it.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : it.rateTry.toFixed(4)} ₺
                </div>

                <div className="mt-1 text-[11px] font-mono text-[var(--card-muted)]">
                  ${it.rateUsd.toLocaleString('tr-TR')} USD
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[var(--border)] text-[11px] font-semibold text-[#00C087] flex items-center justify-between">
                <span>Canlı Çeviriyi Aç</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Editorial Explanations */}
      <section className="panel-card p-6 space-y-4 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <h3 className="text-base font-bold text-[var(--foreground)]">Dolar, Tether ve Kripto Paraların Türk Lirası Karşılığı Nasıl Hesaplanır?</h3>
        <p>
          Kripto para piyasalarında ve serbest piyasada Türk Lirası fiyatlaması yapılırken iki ana kanal dikkate alınır: bankalar arası resmi kur (TCMB) ve serbest piyasa / kripto borsası likidite havuzu (Binance TR). Bankalarda makas aralığı açıkken, kripto borsalarında 7/24 kesintisiz şekilde USDT/TRY tahtası üzerinden işlem yapılabilmektedir.
        </p>
        <p>
          Kriptonik'te sunulan tüm döviz ve kripto Türk Lirası çevirileri doğrudan borsaların canlı emir defterlerinden ve küresel spot API'lerden saniyelik olarak çekilmektedir.
        </p>
      </section>
    </div>
  );
}
