import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import EtfTracker from '../../components/EtfTracker';
import { BarChart3, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Spot Bitcoin ve Ethereum ETF Giriş/Çıkış Akışları (Net Flows) | Kriptonik',
  description: 'BlackRock (IBIT), Fidelity (FBTC), Grayscale ve tüm kurumsal ETF ihraççılarının günlük net sermaye akışları, kümülatif girişler ve AUM rezervleri.'
};

export default function EtfHubPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <span className="text-white font-semibold">Spot ETF Akışları</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Spot Bitcoin & Ethereum ETF Kurumsal Akışları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#848E9C] max-w-3xl leading-relaxed">
          Wall Street fonlarının spot kripto piyasasına getirdiği taze sermaye akışlarını anlık takip edin. Her işlem günü sonunda BlackRock, Fidelity ve Grayscale dahil 11 fonun net alım/satım bilançoları burada güncellenir.
        </p>
      </div>

      <EtfTracker />
    </div>
  );
}
