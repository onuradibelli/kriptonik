import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Çerez (Cookie) Politikası',
  description: 'Kriptonik platformunda kullanılan teknik ve tercih çerezlerine ilişkin aydınlatma metni.',
  alternates: {
    canonical: 'https://kriptonik.com/cerez-politikasi/'
  }
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Çerez Politikası</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] font-bold">
            <Cookie className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">Çerez (Cookie) Politikası</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">Son güncelleme: 7 Kasım 2026</p>
      </div>

      <div className="panel-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">1. Çerez Nedir?</h2>
          <p>
            Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">2. Kriptonik'te Kullanılan Çerez Türleri</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Zorunlu ve Teknik Çerezler:</strong> Sitenin güvenliğini ve Cloudflare DDoS korumasını sağlamak amacıyla kullanılan çerezlerdir.
            </li>
            <li>
              <strong>Tercih ve Fonksiyonellik (Yerel Depolama):</strong> Aydınlık/karanlık tema tercihiniz ve takip listenize eklediğiniz kripto paralar yalnızca tarayıcınızın <code>localStorage</code> alanında tutulur, sunucularımıza iletilmez.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p>
            Tarayıcınızın ayarlar menüsünden dilediğiniz zaman tüm çerezleri silebilir veya engelleyebilirsiniz. Ancak zorunlu çerezlerin kapatılması sitenin bazı görsel temalarının sıfırlanmasına sebep olabilir.
          </p>
        </section>
      </div>
    </div>
  );
}
