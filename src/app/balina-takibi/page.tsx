import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { WHALE_TRANSACTIONS } from '../../lib/data';
import WhaleTracker from '../../components/WhaleTracker';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canlı Kripto Balina Takibi ve Büyük Cüzdan Transfer Radarı | Kriptonik',
  description: 'Milyonlarca dolarlık Bitcoin, Ethereum, Solana ve altcoin balina hareketleri, soğuk cüzdan transferleri ve borsa giriş/çıkış akışları.'
};

export default function WhaleTrackerPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <span className="text-white font-semibold">Balina Takibi</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087]">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Canlı Balina Takibi & Kurumsal Cüzdan Akışları
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#848E9C] max-w-3xl leading-relaxed">
          Piyasa yapıcıların, madencilerin ve balinaların borsalara yatırdığı (Inflow) ve soğuk cüzdanlara çektiği (Outflow) büyük hacimli on-chain transferleri saniyelik olarak yakalayın.
        </p>
      </div>

      <WhaleTracker transactions={WHALE_TRANSACTIONS} />
    </div>
  );
}
