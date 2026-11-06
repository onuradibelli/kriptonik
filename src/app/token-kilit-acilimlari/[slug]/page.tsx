import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { COINS_DATA, getCoinBySlug, generateProgrammaticAnalysis } from '../../../lib/data';
import { Calendar, Clock, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

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
    title: `${coin.name} (${coin.symbol}) Kilit Açılım Tarihleri ve Kilitli Arz Takvimi | Kriptonik`,
    description: `${coin.name} bir sonraki kilit açılımı ne zaman? Dolaşıma girecek token miktarı, arz oranı ve satış baskısı analiz raporu.`,
    alternates: {
      canonical: `https://kriptonik.com/token-kilit-acilimlari/${coin.slug}/`
    }
  };
}

export default async function CoinUnlockDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    notFound();
  }

  const analysis = generateProgrammaticAnalysis(coin, 'unlock');
  const unlock = coin.tokenUnlock;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kriptonik', item: 'https://kriptonik.com' },
          { '@type': 'ListItem', position: 2, name: 'Kilit Açılımları', item: 'https://kriptonik.com/token-kilit-acilimlari/' },
          { '@type': 'ListItem', position: 3, name: coin.name, item: `https://kriptonik.com/token-kilit-acilimlari/${coin.slug}/` }
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
        <Link href="/token-kilit-acilimlari/" className="hover:text-white">Kilit Açılımları</Link>
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
              {coin.name} ({coin.symbol}) Kilit Açılım Takvimi
            </h1>
            <div className="flex items-center gap-3 text-xs text-[#848E9C] mt-0.5 font-mono">
              <span>Toplam Arz: {coin.totalSupply.toLocaleString('tr-TR')} {coin.symbol}</span>
              <span>•</span>
              <span>Dolaşımdaki Arz: {coin.circulatingSupply.toLocaleString('tr-TR')} {coin.symbol}</span>
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

      {/* KPI Cards */}
      {unlock ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[#848E9C]">Sıradaki Kilit Açılış Tarihi</div>
            <div className="text-lg font-mono font-bold text-white flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#2962FF]" />
              {new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR')}
            </div>
            <div className="text-[11px] text-[#848E9C]">Tür: {unlock.unlockType} UNLOCK</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[#848E9C]">Açılacak Varlık Değeri</div>
            <div className="text-lg font-mono font-bold text-[#F6465D]">
              ${(unlock.unlockValueUsd / 1_000_000).toFixed(1)}M
            </div>
            <div className="text-[11px] text-[#848E9C]">{unlock.unlockedTokens.toLocaleString('tr-TR')} {coin.symbol}</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[#848E9C]">Dolaşıma Oranı</div>
            <div className="text-lg font-mono font-bold text-[#F2C14E]">
              %{unlock.unlockedPercent}
            </div>
            <div className="text-[11px] text-[#848E9C]">Dolaşımdaki toplam arza kıyasla</div>
          </div>

          <div className="panel-card p-4 space-y-1">
            <div className="text-xs text-[#848E9C]">Satış Baskısı Risk Skoru</div>
            <div className={`text-lg font-mono font-bold ${unlock.riskScore > 70 ? 'text-[#F6465D]' : 'text-[#00C087]'}`}>
              {unlock.riskScore}/100
            </div>
            <div className="text-[11px] text-[#848E9C]">{unlock.riskScore > 70 ? 'Yüksek Risk' : 'Orta / Düşük Risk'}</div>
          </div>
        </div>
      ) : (
        <div className="panel-card p-6 text-center text-xs text-[#848E9C]">
          {coin.name} ({coin.symbol}) için önümüzdeki 60 gün içinde planlanmış büyük bir kilit açılımı bulunmamaktadır.
        </div>
      )}

      {/* Programmatic Analysis Content */}
      <section className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[#F2C14E]" />
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
          <span>Sıkça Sorulan Sorular — {coin.name} Kilit Açılımı</span>
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
