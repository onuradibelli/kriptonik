import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim & Geri Bildirim',
  description: 'Kriptonik geliştirici ekibine ulaşın; geri bildirim, veri düzeltme, hata bildirimleri ve kurumsal iş birlikleri.',
  alternates: {
    canonical: 'https://kriptonik.com/iletisim/'
  }
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">İletişim</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] font-bold">
            <Mail className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">İletişim & Geri Bildirim</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">Hata bildirimi, veri uyuşmazlığı tespiti ve görüşleriniz için doğrudan ekibimizle iletişime geçin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="panel-card p-6 space-y-4 text-xs sm:text-sm text-[var(--card-muted)]">
          <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#2962FF]" />
            <span>E-Posta İletişim Hattı</span>
          </h2>
          <p>
            Teknik geri bildirimler, veri düzeltme talepleri veya genel sorularınız için bize e-posta ile ulaşabilirsiniz:
          </p>
          <a
            href="mailto:destek@kriptonik.com"
            className="inline-block font-mono font-bold text-sm text-[#2962FF] hover:underline"
          >
            destek@kriptonik.com
          </a>
          <p className="text-[11px]">
            * Gönderilen tüm teknik ve veri bildirimleri 24-48 saat içerisinde incelenmektedir.
          </p>
        </div>

        <div className="panel-card p-6 space-y-4 text-xs sm:text-sm text-[var(--card-muted)]">
          <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#00E699]" />
            <span>Açık Kaynak & GitHub</span>
          </h2>
          <p>
            Hata raporları (bug report) ve özellik talepleri (feature request) için GitHub deponun Issues bölümünden topluluk bildirimi oluşturabilirsiniz.
          </p>
          <a
            href="https://github.com/onuradibelli/kriptonik"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 font-mono font-bold text-xs text-[var(--foreground)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 rounded-xl hover:border-[#2962FF] transition-colors"
          >
            <span>GitHub Deposu & Katkı</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
