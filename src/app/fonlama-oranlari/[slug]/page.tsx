import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, getCoinBySlug, generateProgrammaticAnalysis } from '../../../lib/data';
import { DollarSign, ArrowLeft, HelpCircle, Zap, TrendingUp } from 'lucide-react';

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
    title: `${coin.name} (${coin.symbol}) Fonlama Oranı (Funding Rate) Canlı Takip | Kriptonik`,
    description: `Binance, Bybit ve OKX ${coin.name} (${coin.symbol}) anlık fonlama oranları, geçmiş fonlama verileri, arbitraj getirisi ve ağırlıklı piyasa ortalaması.`,
    alternates: {
      canonical: `https://kriptonik.com/fonlama-oranlari/${coin.slug}/`
    }
  };
}

export default async function CoinFundingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    notFound();
  }

  const analysis = generateProgrammaticAnalysis(coin, 'fonlama');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Fonlama Oranları', item: 'https://kriptonik.com/fonlama-oranlari/' },
          { '@type': 'ListItem', position: 3, name: coin.name, item: `https://kriptonik.com/fonlama-oranlari/${coin.slug}/` }
        ]
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

  const binanceRate = coin.fundingRates.binance;
  const bybitRate = coin.fundingRates.bybit;
  const okxRate = coin.fundingRates.okx;
  const predictedRate = coin.fundingRates.predicted;

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <Link href="/fonlama-oranlari/" className="hover:text-white">Fonlama Oranları</Link>
        <span>/</span>
        <span className="text-white font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222938] font-mono font-bold text-sm text-white">
            {coin.symbol.slice(0, 3)}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              {coin.name} ({coin.symbol}) Fonlama Oranı (Funding Rate)
            </h1>
            <div className="flex items-center gap-3 text-xs text-[#848E9C] mt-0.5 font-mono">
              <span>Spot: ${coin.price.toLocaleString('tr-TR')}</span>
              <span>•</span>
              <span>Sıradaki Fonlama: {coin.fundingRates.nextFundingTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/likidasyon/${coin.slug}/`}
            className="rounded-lg border border-[#222938] bg-[#151A23] px-3 py-1.5 text-xs font-semibold text-[#CBD5E1] hover:text-white hover:border-[#334055] transition-colors"
          >
            Likidasyon Haritası →
          </Link>
          <Link
            href={`/kripto/${coin.slug}/`}
            className="rounded-lg bg-[#2962FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1E4BD8] transition-colors"
          >
            360° Terminal
          </Link>
        </div>
      </div>

      {/* Multi-Exchange Funding Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[#848E9C] font-mono">Binance Futures</div>
          <div className={`text-xl font-mono font-bold ${binanceRate >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {binanceRate >= 0 ? '+' : ''}{(binanceRate * 100).toFixed(4)}%
          </div>
          <div className="text-[11px] text-[#848E9C]">Periyot: 8 Saatlik</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[#848E9C] font-mono">Bybit Linear</div>
          <div className={`text-xl font-mono font-bold ${bybitRate >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {bybitRate >= 0 ? '+' : ''}{(bybitRate * 100).toFixed(4)}%
          </div>
          <div className="text-[11px] text-[#848E9C]">Periyot: 8 Saatlik</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[#848E9C] font-mono">OKX Swap</div>
          <div className={`text-xl font-mono font-bold ${okxRate >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {okxRate >= 0 ? '+' : ''}{(okxRate * 100).toFixed(4)}%
          </div>
          <div className="text-[11px] text-[#848E9C]">Periyot: 8 Saatlik</div>
        </div>

        <div className="panel-card p-4 space-y-1">
          <div className="text-xs text-[#848E9C] font-mono">Tahmini Bir Sonraki Oran</div>
          <div className="text-xl font-mono font-bold text-[#2962FF]">
            {predictedRate >= 0 ? '+' : ''}{(predictedRate * 100).toFixed(4)}%
          </div>
          <div className="text-[11px] text-[#848E9C]">Kriptonik Algoritması</div>
        </div>
      </div>

      {/* Programmatic Analysis Paragraphs */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Zap className="h-4 w-4 text-[#00C087]" />
          <span>{analysis.title}</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
          {analysis.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="panel-card p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          <span>Sıkça Sorulan Sorular — {coin.name} Fonlama</span>
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
