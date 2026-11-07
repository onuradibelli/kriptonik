import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Taahhüdü ve KVKK Aydınlatma Metni',
  description: 'Kriptonik gizlilik politikası, veri güvenliği taahhüdü ve 6698 sayılı KVKK kapsamında aydınlatma metni.',
  alternates: {
    canonical: 'https://kriptonik.com/gizlilik/'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Gizlilik & KVKK</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00E699]/15 text-[#00E699] font-bold">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">Gizlilik Taahhüdü ve KVKK</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">Son güncelleme: 7 Kasım 2026</p>
      </div>

      <div className="panel-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">1. Sıfır Hassas Veri Prensibi</h2>
          <p>
            Kriptonik, kullanıcılarından <strong>asla kripto cüzdan özel anahtarları (private key), seed phrase veya şifre talep etmez ve saklamaz</strong>.
          </p>
          <p>
            Platformu kullanmak için üyelik, oturum açma veya kimlik doğrulaması gerekmez. Kullanıcıların takip listeleri (watchlist) gibi tercihleri yalnızca kullanıcının kendi tarayıcısının yerel hafızasında (localStorage) saklanır.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">2. 6698 Sayılı KVKK Kapsamında Aydınlatma</h2>
          <p>
            Platformumuz doğrudan kişisel kimlik verisi toplamamaktadır. Web sitesi ziyaretiniz sırasında, bilgi güvenliğinin sağlanması ve teknik hataların tespiti amacıyla yalnızca standart sunucu logları (IP adresi, istek zamanı, kullanıcı tarayıcı bilgisi) Cloudflare altyapısında mevzuata uygun sürelerle tutulmaktadır.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">3. Üçüncü Taraf Ağ Bağlantıları</h2>
          <p>
            Canlı fiyatların ve grafiklerin görüntülenebilmesi için tarayıcınız doğrudan Binance WebSocket/REST ağlarına, TradingView kütüphanesine veya Mempool.space halka açık düğümlerine bağlanır. Bu bağlantılar sırasında ilgili üçüncü taraf servislerin kendi gizlilik sözleşmeleri geçerlidir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[var(--foreground)]">4. İletişim</h2>
          <p>
            Gizlilik haklarınızla veya veri işleme süreçleriyle ilgili sorularınız için <Link href="/iletisim/" className="text-[#2962FF] underline">İletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
