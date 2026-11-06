import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, getCoinBySlug } from '../../../lib/data';
import LiquidationHeatmap from '../../../components/LiquidationHeatmap';
import { Activity, Flame, DollarSign, Calendar, Compass, ArrowRight } from 'lucide-react';

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
    title: `${coin.name} (${coin.symbol}) 360° On-Chain ve Türev Veri Terminali | Kriptonik`,
    description: `${coin.name} (${coin.symbol}) canlı likidasyon ısı haritası, fonlama oranları, açık pozisyon büyüklüğü ve kilit açılım raporu.`,
    alternates: {
      canonical: `https://kriptonik.com/kripto/${coin.slug}/`
    }
  };
}

export default async function CoinMasterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${coin.name} (${coin.symbol}) 360 Analiz Terminali`,
    description: `${coin.name} kapsamlı türev ve on-chain finansal verileri.`,
    provider: { '@type': 'Organization', name: 'Kriptonik' }
  };

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
        <span className="text-white font-semibold">Kripto Terminali</span>
        <span>/</span>
        <span className="text-[#2962FF] font-semibold">{coin.name} ({coin.symbol})</span>
      </nav>

      {/* Hero Bar */}
      <div className="panel-card p-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#222938] font-mono font-black text-xl text-white shadow-lg">
            {coin.symbol.slice(0, 3)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">{coin.name}</h1>
              <span className="rounded bg-[#222938] px-2 py-0.5 font-mono text-xs font-bold text-[#CBD5E1]">
                {coin.symbol}
              </span>
              <span className="rounded bg-[#2962FF]/20 px-2 py-0.5 text-xs font-bold text-[#2962FF]">
                Sıra #{coin.marketCapRank}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-[#848E9C]">
              <span>Binance Vadeli: <strong>{coin.binanceSymbol}</strong></span>
              <span>•</span>
              <span>Piyasa Değeri: <strong>${(coin.marketCapUsd / 1_000_000_000).toFixed(2)}B</strong></span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-mono font-black text-white">
            ${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : coin.price.toFixed(4)}
          </div>
          <div className={`text-sm font-mono font-bold flex items-center justify-end gap-1 ${coin.change24h >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
            {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}% (24s)
          </div>
        </div>
      </div>

      {/* 4 Core Metric Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <Link
          href={`/likidasyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#F6465D] transition-colors group"
        >
          <div className="flex items-center justify-between text-[#848E9C]">
            <span>24s Toplam Tasfiye</span>
            <Flame className="h-4 w-4 text-[#F6465D]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-white group-hover:text-[#F6465D] transition-colors">
            ${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Isı Haritası →
          </div>
        </Link>

        <Link
          href={`/fonlama-oranlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#00C087] transition-colors group"
        >
          <div className="flex items-center justify-between text-[#848E9C]">
            <span>Binance Fonlama</span>
            <DollarSign className="h-4 w-4 text-[#00C087]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-white group-hover:text-[#00C087] transition-colors">
            {(coin.fundingRates.binance * 100).toFixed(4)}%
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Fonlama Matrisi →
          </div>
        </Link>

        <Link
          href={`/acik-pozisyon/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#2962FF] transition-colors group"
        >
          <div className="flex items-center justify-between text-[#848E9C]">
            <span>Açık Pozisyon (OI)</span>
            <Compass className="h-4 w-4 text-[#2962FF]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-white group-hover:text-[#2962FF] transition-colors">
            ${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            OI Sinyalleri →
          </div>
        </Link>

        <Link
          href={`/token-kilit-acilimlari/${coin.slug}/`}
          className="panel-card p-4 hover:border-[#F2C14E] transition-colors group"
        >
          <div className="flex items-center justify-between text-[#848E9C]">
            <span>Kilit Açılım Riski</span>
            <Calendar className="h-4 w-4 text-[#F2C14E]" />
          </div>
          <div className="mt-2 text-lg font-mono font-bold text-white group-hover:text-[#F2C14E] transition-colors">
            {coin.tokenUnlock ? `${coin.tokenUnlock.riskScore}/100` : 'Yok'}
          </div>
          <div className="mt-1 text-[11px] text-[#2962FF] flex items-center gap-1 font-semibold">
            Kilit Takvimi →
          </div>
        </Link>
      </div>

      {/* Embedded Heatmap */}
      <LiquidationHeatmap coin={coin} />
    </div>
  );
}
