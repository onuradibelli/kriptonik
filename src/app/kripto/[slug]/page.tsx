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

  return {
    title: `${coin.name} (${coin.symbol}) Canlı Fiyat, Likidasyon Haritası ve On-Chain Analiz Terminali | Kriptonik`,
    description: `${coin.name} (${coin.symbol}) için anlık WebSocket fiyatı, 24 saatlik likidasyon ısı haritası, borsalar arası fonlama oranları (funding rate), açık pozisyon (OI) ve teknik analiz göstergeleri.`,
    keywords: [
      `${coin.name.toLowerCase()} canlı fiyat`,
      `${coin.symbol.toLowerCase()} usdt`,
      `${coin.symbol.toLowerCase()} kaç tl`,
      `${coin.name.toLowerCase()} likidasyon haritası`,
      `${coin.symbol.toLowerCase()} fonlama oranı`,
      `${coin.name.toLowerCase()} analiz terminali`,
      `${coin.symbol.toLowerCase()} teknik grafik`
    ],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${coin.name} (${coin.symbol})`,
    description: `${coin.name} canlı türev ve on-chain analiz raporu.`,
    url: `https://kriptonik.com/kripto/${coin.slug}/`,
    offers: {
      '@type': 'Offer',
      price: coin.price,
      priceCurrency: 'USD'
    }
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoinTerminalClient coin={coin} />
    </div>
  );
}
