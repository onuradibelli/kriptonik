import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import FundingMatrix from '../../components/FundingMatrix';
import { DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Borsalar Arası Canlı Fonlama Oranları (Funding Rate) ve Arbitraj Matrisi',
  description: 'Binance, Bybit ve OKX canlı fonlama oranları, geçmiş fonlama verileri, arbitraj spread takibi, delta-nötr getiri fırsatları ve ağırlıklı piyasa ortalaması.',
  keywords: [
    'kripto fonlama oranları',
    'funding rate',
    'binance funding rate',
    'bybit fonlama oranı',
    'fonlama arbitrajı',
    'delta nötr arbitraj',
    'funding fee hesaplama',
    'vadeli fonlama oranları'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/fonlama-oranlari/'
  }
};

export default function FundingHubPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kriptoda Fonlama Oranı (Funding Rate) Nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sürekli vadeli işlem (perpetual futures) fiyatının spot fiyata yakın kalmasını sağlayan periyodik ödemedir. Pozitif oranda Long pozisyonlar Short pozisyonlara, negatif oranda ise Short pozisyonlar Long pozisyonlara ödeme yapar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Fonlama Arbitrajı (Funding Arbitrage) Nasıl Yapılır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Farklı borsalarda (örneğin Binance ve Bybit) aynı varlık için farklı fonlama oranları oluştuğunda; yüksek fonlama ödeyen borsada short, düşük olan borsada long açılarak fiyattan bağımsız risksiz faiz geliri elde edilir.'
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
        <span className="text-[var(--foreground)] font-semibold">Fonlama Oranları</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <DollarSign className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
            Borsalar Arası Fonlama Oranları & Arbitraj Matrisi
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
          Tüm büyük türev borsalarında (Binance, Bybit, OKX) 8 saatlik fonlama oranlarını canlı kıyaslayın. Pozitif oranlarda boğa primini, negatif oranlarda ayı baskısını ve delta-nötr fonlama arbitraj fırsatlarını keşfedin.
        </p>
      </div>

      {/* Main Funding Matrix Component */}
      <FundingMatrix coins={COINS_DATA} />

      {/* Directory Cards */}
      <div className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-[var(--foreground)]">Varlık Bazlı Fonlama Detayları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COINS_DATA.map((coin) => (
            <Link
              key={coin.id}
              href={`/fonlama-oranlari/${coin.slug}/`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 hover:border-[#00C087] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--foreground)] group-hover:text-[#00C087] transition-colors">
                    {coin.name} ({coin.symbol})
                  </span>
                  <span className={`font-mono text-xs font-bold ${coin.fundingRates.binance >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    {coin.fundingRates.binance >= 0 ? '+' : ''}{(coin.fundingRates.binance * 100).toFixed(4)}%
                  </span>
                </div>
                <div className="mt-2 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>Bybit:</span>
                  <strong className="text-[var(--foreground)]">{(coin.fundingRates.bybit * 100).toFixed(4)}%</strong>
                </div>
                <div className="mt-1 text-xs text-[var(--card-muted)] flex justify-between font-mono">
                  <span>OKX:</span>
                  <strong className="text-[var(--foreground)]">{(coin.fundingRates.okx * 100).toFixed(4)}%</strong>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[var(--border)] text-[11px] font-semibold text-[#00C087] flex items-center justify-between">
                <span>Fonlama Raporunu Aç</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
