import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kripto Varlıklar Risk Bildirimi ve Yasal Uyarı',
  description: 'Kaldıraçlı işlemler, türev kontratlar ve kripto varlık alım satımına ilişkin risk bildirimi ve yasal uyarı metni.',
  alternates: {
    canonical: 'https://kriptonik.com/risk-bildirimi/'
  }
};

export default function RiskDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Risk Bildirimi</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500 font-bold">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">Kripto Varlıklar Risk Bildirimi</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">SPK ve Küresel Türev Piyasaları Düzenlemeleri Işığında Önemli Hatırlatma</p>
      </div>

      <div className="panel-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-600 dark:text-amber-400 font-medium">
          ⚠️ <strong>Yatırım Tavsiyesi Değildir (YTD):</strong> Kriptonik platformunda yer alan hiçbir grafik, veri, likidasyon seviyesi, fonlama oranı veya hesaplayıcı çıktısı Sermaye Piyasası Kurulu (SPK) mevzuatı kapsamında yatırım danışmanlığı faaliyeti teşkil etmez.
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">1. Yüksek Volatilite ve Sermaye Kaybı Riski</h2>
          <p>
            Kripto para piyasaları geleneksel finansal varlıklara kıyasla aşırı fiyat dalgalanmalarına (volatilite) açıktır. Piyasa koşullarına bağlı olarak yatırılan sermayenin tamamı kısa süre içerisinde kaybedilebilir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">2. Kaldıraçlı ve Türev İşlem Riskleri</h2>
          <p>
            Vadeli işlemler (futures), marjin ticareti ve kaldıraçlı pozisyonlar yüksek getiri potansiyelinin yanında <strong>toplam tasfiye (likidasyon) riski</strong> barındırır. Küçük fiyat hareketleri bile marjin teminatının tamamen tükenmesine yol açabilir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">3. Likidasyon ve Tasfiye Modelleri</h2>
          <p>
            Kriptonik arayüzünde sunulan likidasyon ısı haritaları ve tasfiye kümeleri, piyasa genelindeki açık kontratlar üzerinden hesaplanan <strong>tahmini modellerdir</strong>. Borsaların gerçek tasfiye motorları emir defteri kaymaları (slippage), sigorta fonu ve piyasa yapıcı spreadlerine göre farklı seviyelerde emir eşleştirebilir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">4. Kullanıcı Kararları</h2>
          <p>
            Kullanıcılar alım, satım ve pozisyon açma kararlarını yalnızca kendi hür iradeleri ve bağımsız araştırmaları (DYOR) neticesinde vermelidir. Oluşabilecek kâr veya zararlardan Kriptonik sorumlu tutulamaz.
          </p>
        </section>
      </div>
    </div>
  );
}
