import React from 'react';
import type { Metadata } from 'next';
import CalculatorSuite from '../../components/CalculatorSuite';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Kaldıraç, Likidasyon ve Borsa Komisyon Hesaplayıcı',
  description:
    'Binance TR, Bybit TR, BtcTurk, Paribu komisyon kıyaslama, 1x-125x kaldıraç likidasyon fiyatı, DCA ortalama maliyet düşürme ve net kâr (PnL) simülatörü.',
  keywords: [
    'kripto kaldıraç hesaplama',
    'likidasyon fiyatı hesaplayıcı',
    'binance tr komisyon hesaplama',
    'bybit tr komisyon oranları',
    'btcturk komisyon hesaplama',
    'paribu komisyon oranları',
    'dca hesaplayıcı',
    'maliyet düşürme hesaplama',
    'futures pnl calculator',
    'kripto kâr hesaplama'
  ],
  alternates: {
    canonical: 'https://kriptonik.com/hesaplayici/'
  }
};

export default function CalculatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kripto vadeli işlemlerde likidasyon fiyatı nasıl hesaplanır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Likidasyon fiyatı; açılan pozisyon yönü (Long/Short), kullanılan kaldıraç katsayısı, yatırılan teminat ve borsanın zorunlu Bakım Teminat Oranına (MMR) göre belirlenir. Zararınız teminatınızı aştığında borsa pozisyonu otomatik kapatır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kaldıraç oranı arttıkça likidasyon riski nasıl değişir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kaldıraç arttıkça likidasyon fiyatı giriş fiyatına yaklaşır. Örneğin 10x kaldıraçta piyasanın %10 ters gitmesi likidasyona yol açarken, 50x kaldıraçta yalnızca %2 ters hareket tüm teminatın erimesine neden olur.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kriptonik kaldıraç hesaplayıcı komisyonları dahil eder mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evet, hesaplayıcımız hem giriş hem çıkış için standart borsa taker komisyonlarını (%0.05 x 2) düşerek gerçek net kâr/zararınızı simüle eder.'
        }
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--card-muted)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1">
          <ArrowLeft className="h-3 w-3" />
          Terminal Ana Sayfa
        </Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-bold">Kaldıraç & Likidasyon Hesaplayıcı</span>
      </div>

      {/* Main Interactive Tool Suite */}
      <CalculatorSuite />

      {/* Educational & SEO FAQ Section */}
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-[#2962FF]" />
          Kaldıraç ve Likidasyon Hakkında Sıkça Sorulan Sorular
        </h3>

        <div className="space-y-4 text-xs text-[var(--card-muted)] leading-relaxed">
          <div>
            <h4 className="font-bold text-[var(--foreground)] text-sm mb-1">
              Likidasyon (Tasfiye) tam olarak nedir?
            </h4>
            <p>
              Vadeli kripto işlemlerinde (Binance Futures, Bybit vb.), piyasa pozisyonunuzun tersine hareket ettiğinde ve teminatınız borsanın minimum şart koştuğu bakım marjının altına indiğinde borsa pozisyonunuzu piyasa emriyle kapatır. Buna tasfiye (likidasyon) denir.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--foreground)] text-sm mb-1">
              Cross Margin (Çapraz) ile Isolated Margin (İzole) farkı nedir?
            </h4>
            <p>
              İzole marjinde yalnızca o pozisyona tahsis ettiğiniz teminat risk altındadır. Çapraz marjinde ise cüzdanınızdaki tüm kullanılabilir bakiye teminat olarak sayılır; bu likidasyonu uzaklaştırsa da ters bir sert iğnede tüm bakiyenizi kaybetme riski yaratır.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--foreground)] text-sm mb-1">
              Funding Rate (Fonlama Oranı) likidasyonu etkiler mi?
            </h4>
            <p>
              Evet. Açık tuttuğunuz pozisyonda 8 saatte bir fonlama primi ödüyorsanız, bu ödeme teminatınızdan eksileceği için likidasyon fiyatınız zamanla giriş fiyatınıza doğru yaklaşabilir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
