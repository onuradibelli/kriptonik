import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, Info, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda — Kriptonik Finansal Teşhis Terminali',
  description: 'Kriptonik platformunun misyonu, veri ilkeleri, teknik mimarisi ve bağımsız kripto türev analiz vizyonu.',
  alternates: {
    canonical: 'https://kriptonik.com/hakkimizda/'
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <nav className="flex items-center gap-2 text-xs text-[var(--card-muted)] font-mono">
        <Link href="/" className="hover:text-[var(--foreground)]">Kriptonik</Link>
        <span>/</span>
        <span className="text-[var(--foreground)] font-semibold">Hakkımızda</span>
      </nav>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] font-bold">
            <Compass className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">Hakkımızda</h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--card-muted)]">Sıfır gürültü, maksimum analitik sinyal vizyonuyla inşa edilen bağımsız kripto terminali.</p>
      </div>

      <div className="panel-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold text-[var(--foreground)]">Misyonumuz</h2>
          <p>
            Kriptonik, karmaşık kripto türev verilerini, borsa fonlama oranlarını, likidasyon ısı haritalarını ve kurumsal sermaye hareketlerini temiz, modern ve hızlı bir Türkçe finansal gösterge panelinde sunmak amacıyla geliştirilmiştir.
          </p>
          <p>
            Amacımız, bireysel ve kurumsal yatırımcıların piyasadaki likidite havuzlarını, sermaye rotasyonunu ve türev piyasası risklerini objektif verilere dayanarak gözlemlemesini sağlamaktır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[var(--foreground)]">İlkelerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="font-bold text-[var(--foreground)] block">1. Şeffaflık & Dürüstlük</span>
              <p className="text-xs">Uydurma veri üretilmez. Model tahminleri ile canlı borsa akışları açıkça birbirinden ayrılır.</p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="font-bold text-[var(--foreground)] block">2. Sıfır İstenmeyen Veri Toplama</span>
              <p className="text-xs">Kullanıcılardan cüzdan anahtarı istenmez, izinsiz takip çerezleri yüklenmez.</p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="font-bold text-[var(--foreground)] block">3. Yüksek Hız ve Erişilebilirlik</span>
              <p className="text-xs">Edge CDN mimarisiyle sıfır bekleme süresi, tam mobil uyumluluk ve düşük veri tüketimi hedeflenir.</p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="font-bold text-[var(--foreground)] block">4. Bağımsız Analitik Duruş</span>
              <p className="text-xs">Kriptonik herhangi bir kripto borsasının mülkiyetinde değildir; tarafsız veri ilkeleriyle çalışır.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
