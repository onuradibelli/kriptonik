import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'Kriptonik platformu kullanım şartları, hizmet kapsamı, fikri mülkiyet hakları ve kullanıcı yükümlülükleri.',
  alternates: {
    canonical: 'https://kriptonik.com/kullanim-kosullari/'
  }
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Kullanım Koşulları</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] font-bold">
            <FileText className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">Kullanım Koşulları</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">Son güncelleme: 7 Kasım 2026</p>
      </div>

      <div className="panel-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">1. Hizmetin Niteliği ve Kapsamı</h2>
          <p>
            Kriptonik (kriptonik.com), kripto para piyasalarına ait halka açık piyasa verilerini, türev göstergelerini ve zincir üstü (on-chain) istatistikleri görselleştiren bağımsız bir analiz ve teşhis arayüzüdür.
          </p>
          <p>
            Platform üzerinde yer alan hiçbir veri, grafik, oran veya gösterge <strong>yatırım tavsiyesi, portföy yöneticiliği veya alım-satım yönlendirmesi niteliği taşımamaktadır</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">2. Veri Doğruluğu ve Sorumluluk Sınırı</h2>
          <p>
            Platformdaki tüm fiyat, fonlama oranı, tasfiye ve hacim verileri üçüncü taraf borsaların halka açık API ve WebSocket ağlarından derlenmektedir. Kriptonik, üçüncü taraf veri sağlayıcılarının teknik arızalarından, gecikmelerinden veya veri kesintilerinden sorumlu tutulamaz.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">3. Fikri Mülkiyet Hakları</h2>
          <p>
            Kriptonik web sitesinde sunulan tasarım, arayüz şablonları, hesaplama algoritmaları ve derlenmiş içeriklerin tüm telif hakları Kriptonik’e aittir. Önceden yazılı izin alınmaksızın otomatik botlarla veri kazınması (scraping) ve ticari amaçla kopyalanması yasaktır.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">4. Değişiklik Hakkı</h2>
          <p>
            Kriptonik, bu kullanım koşullarını dilediği zaman güncelleme hakkını saklı tutar. Değişiklikler sitede yayımlandığı andan itibaren yürürlüğe girer.
          </p>
        </section>
      </div>
    </div>
  );
}
