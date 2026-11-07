import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getKacTlItems } from '../../../lib/data';
import InteractiveKacTlBox from '../../../components/InteractiveKacTlBox';
import { Calculator, HelpCircle, ArrowLeft, TrendingUp, TableProperties, ArrowRight } from 'lucide-react';

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
  if (!item) return { title: 'Dönüştürücü Bulunamadı' };

  return {
    title: `${item.unitAmount} ${item.symbol} Kaç TL? (${item.name})`,
    description: `${item.unitAmount} ${item.symbol} (${item.name}) anlık kaç Türk Lirası? 1, 10, 50, 100, 500, 1000 ${item.symbol} hızlı hesaplama tablosu, TCMB ve serbest piyasa teyitli veriler.`,
    keywords: [
      `${item.unitAmount} ${item.symbol.toLowerCase()} kaç tl`,
      `10 ${item.symbol.toLowerCase()} kaç tl`,
      `100 ${item.symbol.toLowerCase()} kaç tl`,
      `1000 ${item.symbol.toLowerCase()} kaç tl`,
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

  // Pre-calculate conversion tiers
  const isHighValueCrypto = item.symbol === 'BTC' || item.symbol === 'ETH';
  const tiers = isHighValueCrypto
    ? [0.001, 0.005, 0.01, 0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10]
    : [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];

  const formatTry = (val: number) => {
    return val > 10 ? val.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : val.toFixed(4);
  };

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
            name: `1 ${item.symbol} (${item.name}) şu an kaç TL?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `1 ${item.symbol} anlık serbest piyasa ve borsa kuruyla yaklaşık ${formatTry(item.rateTry)} Türk Lirası değerindedir.`
            }
          },
          {
            '@type': 'Question',
            name: `10 ${item.symbol} kaç TL eder?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `10 ${item.symbol} güncel kurla yaklaşık ${formatTry(item.rateTry * 10)} Türk Lirası değerindedir.`
            }
          },
          {
            '@type': 'Question',
            name: `100 ${item.symbol} kaç TL eder?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `100 ${item.symbol} güncel kurla yaklaşık ${formatTry(item.rateTry * 100)} Türk Lirası etmektedir.`
            }
          },
          {
            '@type': 'Question',
            name: `1.000 ${item.symbol} kaç TL eder?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `1.000 ${item.symbol} anlık piyasa fiyatıyla yaklaşık ${formatTry(item.rateTry * 1000)} TL değerindedir.`
            }
          },
          {
            '@type': 'Question',
            name: `${item.symbol} kuru serbest piyasada ve bankalarda farklı mıdır?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Evet, TCMB resmi gösterge kuru ile serbest piyasa ve kripto borsası (Binance TR) makas aralıkları farklılık gösterebilir. Kriptonik üzerinde her üç kaynağın da anlık verileri şeffaf olarak kıyaslanmaktadır.`
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C087]/15 text-[#00C087] font-mono font-bold text-sm border border-[#00C087]/20">
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
            {formatTry(item.rateTry)} ₺
          </div>
          <div className={`text-xs font-semibold ${item.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}% (Son 24s)
          </div>
        </div>
      </div>

      {/* Interactive Custom Amount Converter */}
      <InteractiveKacTlBox
        initialAmount={item.unitAmount}
        symbol={item.symbol}
        name={item.name}
        rateTry={item.rateTry}
        rateUsd={item.rateUsd}
      />

      {/* Programmatic Popular Conversion Tiers Table (SEO Traffic Multiplier) */}
      <section className="panel-card p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2">
            <TableProperties className="h-5 w-5 text-[#2962FF]" />
            <h2 className="text-base font-bold text-[var(--foreground)]">
              {item.name} ({item.symbol}) Hızlı Dönüşüm ve Fiyat Çizelgesi
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--card-muted)]">
            Serbest Piyasa & Binance TR Canlı Tahtası
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--subtle)] text-[11px] text-[var(--card-muted)]">
                <th className="py-2.5 px-3.5">Miktar ({item.symbol})</th>
                <th className="py-2.5 px-3.5">Serbest Piyasa (TRY)</th>
                <th className="py-2.5 px-3.5">TCMB Gösterge (TRY)</th>
                <th className="py-2.5 px-3.5">Binance TR Tahtası (TRY)</th>
                <th className="py-2.5 px-3.5 text-right">Dolar Değeri ($USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
              {tiers.map((amt) => {
                const tryVal = amt * item.rateTry;
                const tcmbVal = amt * item.tcmbTry;
                const btrVal = amt * item.binanceTrTry;
                const usdVal = amt * item.rateUsd;

                return (
                  <tr key={amt} className="hover:bg-[var(--hover-bg)] transition-colors">
                    <td className="py-2.5 px-3.5 font-bold text-[var(--foreground)]">
                      {amt} {item.symbol}
                    </td>
                    <td className="py-2.5 px-3.5 font-bold text-[#00C087]">
                      {formatTry(tryVal)} ₺
                    </td>
                    <td className="py-2.5 px-3.5 text-[var(--card-muted)]">
                      {formatTry(tcmbVal)} ₺
                    </td>
                    <td className="py-2.5 px-3.5 font-semibold text-[var(--foreground)]">
                      {formatTry(btrVal)} ₺
                    </td>
                    <td className="py-2.5 px-3.5 text-right font-semibold text-[var(--card-muted)]">
                      ${usdVal > 10 ? usdVal.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : usdVal.toFixed(4)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Programmatic Editorial Section */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#00C087]" />
          <span>{item.unitAmount} {item.symbol} ({item.name}) Türk Lirası Fiyat Analizi</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
          <p>
            Mevcut piyasa koşullarında <strong>1 {item.symbol}</strong> karşılığı yaklaşık <strong>{formatTry(item.rateTry)} Türk Lirası</strong> seviyesindedir. Uluslararası piyasalarda {item.name} birim fiyatı ${item.rateUsd.toLocaleString('tr-TR')} USD seviyesinde işlem görürken, Türkiye iç piyasasındaki USDT/TRY paritesi üzerinden hesaplanan canlı fiyatlama yukarıdaki hesaplama panelinde yansıtılmaktadır.
          </p>
          <p>
            Yatırımcılar ve transfer yapan kullanıcılar için en önemli konu, bankalardaki döviz makasları ile kripto borsalarındaki spread farkıdır. Kriptonik, TCMB gösterge kuru ({formatTry(item.tcmbTry)} TL) ile Binance TR spot kurunu ({formatTry(item.binanceTrTry)} TL) karşılaştırmalı olarak sunar.
          </p>
        </div>
      </section>

      {/* Expanded FAQs with Rich Schema */}
      <section className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          <span>Sıkça Sorulan Sorular — {item.symbol} / TL Kuru</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">1 {item.symbol} şu anda kaç TL?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              1 {item.symbol} anlık olarak {formatTry(item.rateTry)} TL'ye eşittir.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">100 {item.symbol} kaç TL eder?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              100 {item.symbol} anlık olarak {formatTry(item.rateTry * 100)} TL değerindedir.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Fiyatlar nereden çekilmektedir?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              Fiyatlar doğrudan Binance global spot API'leri, Binance TR tahtası ve uluslararası döviz kurları üzerinden saniyelik teyit edilmektedir.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-xs">
            <h4 className="font-bold text-[var(--foreground)] text-sm">Hafta sonu kurlar güncellenir mi?</h4>
            <p className="mt-1.5 text-[var(--card-muted)] leading-relaxed">
              Kripto para piyasaları 7/24 kesintisiz açık olduğu için Kriptonik üzerindeki fiyatlar hafta sonu da canlı olarak güncellenmeye devam eder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
