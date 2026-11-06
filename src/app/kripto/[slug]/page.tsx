import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA } from '../../../lib/data';
import CoinTerminalTabs from '../../../components/CoinTerminalTabs';
import Sparkline from '../../../components/Sparkline';
import { Flame, DollarSign, Compass, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

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
    title: `${coin.name} (${coin.symbol}) Canlı On-Chain ve Türev İstihbarat Terminali | Kriptonik`,
    description: `${coin.name} için canlı likidasyon ısı haritası, borsalar arası fonlama oranları, açık pozisyon ve kilit açılım risk analizleri.`,
    keywords: [
      `${coin.name.toLowerCase()} analiz`,
      `${coin.symbol.toLowerCase()} onchain`,
      `${coin.symbol.toLowerCase()} grafik`,
      `${coin.name.toLowerCase()} likidasyon ve fonlama`
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

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${coin.name} (${coin.symbol})`,
    description: `${coin.name} canlı türev ve on-chain analiz raporu.`,
    offers: {
      '@type': 'Offer',
      price: coin.price,
      priceCurrency: 'USD'
    }
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
        <span className="text-[var(--foreground)] font-semibold">Kripto Terminali</span>
        <span>/</span>
        <span className="text-[#2962FF] font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Hero Bar */}
      <div className="panel-card p-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--border)] font-mono font-black text-xl text-[var(--foreground)] shadow-sm">
            {coin.symbol.slice(0, 3)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-[var(--foreground)]">{coin.name}</h1>
              <span className="rounded bg-[var(--border)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--foreground)]">
                {coin.symbol}
              </span>
              <span className="rounded bg-[#2962FF]/15 px-2 py-0.5 text-xs font-bold text-[#2962FF]">
                Sıra #{coin.marketCapRank}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--card-muted)]">
              <span>Binance Vadeli: <strong className="text-[var(--foreground)]">{coin.binanceSymbol}</strong></span>
              <span>•</span>
              <span>Piyasa Değeri: <strong className="text-[var(--foreground)]">${(coin.marketCapUsd / 1_000_000_000).toFixed(2)}B</strong></span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Sparkline change24h={coin.change24h} width={130} height={36} />
          <div className="text-right">
            <div className="text-2xl font-mono font-black text-[var(--foreground)]">
              ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
            </div>
            <div className={`text-sm font-mono font-bold flex items-center justify-end gap-1 ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
              {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}% (24s)
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Metric Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <Link
          href={`/likidasyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#F6465D] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span>24s Toplam Tasfiye</span>
            <Flame className="h-4 w-4 text-[#F6465D]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-[var(--foreground)] group-hover:text-[#F6465D] transition-colors">
            ${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Isı Haritası →
          </div>
        </Link>

        <Link
          href={`/fonlama-oranlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#00C087] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span>Binance Fonlama</span>
            <DollarSign className="h-4 w-4 text-[#00C087]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-[var(--foreground)] group-hover:text-[#00C087] transition-colors">
            {(coin.fundingRates.binance * 100).toFixed(4)}%
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Fonlama Matrisi →
          </div>
        </Link>

        <Link
          href={`/acik-pozisyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#2962FF] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span>Açık Pozisyon (OI)</span>
            <Compass className="h-4 w-4 text-[#2962FF]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors">
            ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            OI Sinyalleri →
          </div>
        </Link>

        <Link
          href={`/token-kilit-acilimlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#D97706] transition-all group"
        >
          <div className="flex items-center justify-between text-[var(--card-muted)]">
            <span>Kilit Açılım Riski</span>
            <Calendar className="h-4 w-4 text-[#D97706] dark:text-[#F2C14E]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-[var(--foreground)] group-hover:text-[#D97706] transition-colors">
            {coin.tokenUnlock ? `${coin.tokenUnlock.riskScore}/100` : 'Yok'}
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Kilit Takvimi →
          </div>
        </Link>
      </div>

      {/* Embedded Chart & Heatmap Suite */}
      <CoinTerminalTabs coin={coin} />
    </div>
  );
}
