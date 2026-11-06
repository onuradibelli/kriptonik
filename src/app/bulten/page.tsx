import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Newspaper, Flame, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Piyasa Raporları ve On-Chain Bülten | Kriptonik',
  description: 'Otomatik üretilen on-chain tasfiye patlamaları, yaklaşan büyük token kilit açılışları ve haftalık türev piyasası değerlendirme bültenleri.'
};

export default function BulletinPage() {
  const articles = [
    {
      id: 'btc-tasfiye-rekoru',
      title: 'Bitcoin $92.000 Direncini Zorlarken Son 24 Saatte $184M Short Tasfiye Oldu',
      excerpt: 'Türev piyasasında 100x kaldıraçlı short pozisyonların süpürülmesiyle yukarı yönlü sert bir squeeze yaşandı. Kritik likidite kümelenmesi $93.450 seviyesinde bulunuyor.',
      date: 'Bugün, 14:30',
      category: 'TASFİYE RAPORU',
      readTime: '3 dk'
    },
    {
      id: 'arbitrum-kilit-acilimi',
      title: 'Arbitrum (ARB) Önümüzdeki Hafta $78M Değerinde Token Serbest Bırakıyor: Satış Baskısı Riski %84',
      excerpt: 'Ekip ve erken yatırımcılara ait 92.6 milyon adet ARB dolaşıma giriyor. Kriptonik risk motoru, satış baskısı skorunu 84/100 (Yüksek Risk) olarak işaretledi.',
      date: 'Bugün, 11:15',
      category: 'KİLİT AÇILIMI',
      readTime: '4 dk'
    },
    {
      id: 'fonlama-arbitraji-firsati',
      title: 'Borsalar Arası Fonlama Farkı Fırladı: Sui (SUI) ve Ripple (XRP) İçin Yıllık %40+ Delta-Nötr Arbitraj Fırsatı',
      excerpt: 'Binance ve Bybit arasındaki fonlama marjı rekor seviyeye çıktı. Delta-nötr pozisyon alarak piyasa yönünden bağımsız getiri elde etmenin formülü.',
      date: 'Dün, 18:00',
      category: 'FONLAMA ARBİTRAJI',
      readTime: '5 dk'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <span className="text-white font-semibold">Bülten</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <Newspaper className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Kriptonik Piyasa Raporları ve On-Chain Gelişmeleri
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#848E9C] max-w-3xl leading-relaxed">
          Kriptonik Veri Motoru tarafından on-chain anomaliler tetiklendiğinde otomatik olarak derlenen analizler, derin piyasa raporları ve kurumsal bültenler.
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <article
            key={art.id}
            className="rounded-xl border border-[#222938] bg-[#151A23] p-5 flex flex-col justify-between hover:border-[#2962FF] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#848E9C] border-b border-[#222938] pb-3">
                <span className="rounded bg-[#222938] px-2 py-0.5 text-[10px] font-bold text-[#2962FF]">
                  {art.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {art.readTime}
                </span>
              </div>

              <h2 className="mt-3 font-bold text-white text-base leading-snug hover:text-[#2962FF] transition-colors">
                {art.title}
              </h2>

              <p className="mt-2 text-xs text-[#848E9C] leading-relaxed">
                {art.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#222938] flex items-center justify-between text-xs text-[#848E9C]">
              <span>{art.date}</span>
              <span className="text-[#2962FF] font-semibold flex items-center gap-1">
                Raporu Oku <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
