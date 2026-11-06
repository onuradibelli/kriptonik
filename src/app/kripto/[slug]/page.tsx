import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA } from '../../../lib/data';
import CoinTerminalClient from '../../../components/CoinTerminalClient';

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  COINS_DATA.forEach((coin) => {
    params.push({ slug: coin.slug });
    if (coin.symbol.toLowerCase() !== coin.slug.toLowerCase()) {
      params.push({ slug: coin.symbol.toLowerCase() });
    }
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );
  if (!coin) return { title: 'Coin Bulunamadı | Kriptonik' };

  const ath = coin.athUsd ? `$${coin.athUsd.toLocaleString('tr-TR')}` : 'Tüm zamanların zirvesi';

  return {
    title: `${coin.name} (${coin.symbol}) Canlı Fiyatı, Kaç TL, Likidasyon Haritası ve Analiz Terminali | Kriptonik`,
    description: `${coin.name} (${coin.symbol}) anlık canlı fiyatı, TL karşılığı, ATH (${ath}), 24s likidasyon ısı haritası derinliği, fonlama arbitrajı, açık pozisyon ve teknik analiz göstergeleri.`,
    keywords: [
      `${coin.name.toLowerCase()} canlı fiyat`,
      `${coin.symbol.toLowerCase()} kaç tl`,
      `${coin.symbol.toLowerCase()} usdt`,
      `${coin.name.toLowerCase()} likidasyon haritası`,
      `${coin.symbol.toLowerCase()} fonlama oranı`,
      `${coin.name.toLowerCase()} analiz terminali`,
      `${coin.symbol.toLowerCase()} grafik`,
      `${coin.name.toLowerCase()} ath`,
      `${coin.name.toLowerCase()} nedir`,
      `${coin.name.toLowerCase()} yorum`,
      `${coin.symbol.toLowerCase()} arzı`,
      `binance tr ${coin.symbol.toLowerCase()}`
    ],
    openGraph: {
      title: `${coin.name} (${coin.symbol}) Canlı Fiyat ve Likidasyon Terminali`,
      description: `${coin.name} için anlık fiyat, ₺ çevirici, ATH verileri ve Coinglass standartlarında likidasyon derinlik haritası.`,
      url: `https://kriptonik.com/kripto/${coin.slug}/`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${coin.name} (${coin.symbol}) Canlı Analiz Terminali | Kriptonik`,
      description: `${coin.name} canlı türev ve spot piyasa analizleri.`
    },
    alternates: {
      canonical: `https://kriptonik.com/kripto/${coin.slug}/`
    }
  };
}

export default async function CoinTerminalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = COINS_DATA.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.symbol.toLowerCase() === slug.toLowerCase()
  );

  if (!coin) {
    notFound();
  }

  // Schema.org Financial Product Structured Data
  const financialLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${coin.name} (${coin.symbol})`,
    description: `${coin.name} canlı türev, likidasyon ve on-chain analiz terminali.`,
    url: `https://kriptonik.com/kripto/${coin.slug}/`,
    offers: {
      '@type': 'Offer',
      price: coin.price,
      priceCurrency: 'USD'
    }
  };

  // Schema.org FAQPage Structured Data for Google Rich Snippets
  const faqs = coin.faqs || [
    {
      question: `1 ${coin.name} (${coin.symbol}) Kaç TL?`,
      answer: `1 ${coin.name} (${coin.symbol}) anlık serbest piyasa ve Binance TR canlı kurlarıyla hesaplanmaktadır.`
    },
    {
      question: `${coin.name} En Yüksek Kaç Doları (ATH) Gördü?`,
      answer: `${coin.name} (${coin.symbol}) tüm zamanların en yüksek fiyatına (ATH) $${coin.athUsd ? coin.athUsd.toLocaleString('tr-TR') : coin.price} seviyesinde ulaşmıştır.`
    }
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <CoinTerminalClient coin={coin} />
    </div>
  );
}
