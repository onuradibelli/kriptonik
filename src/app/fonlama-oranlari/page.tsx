import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { COINS_DATA } from '../../lib/data';
import FundingMatrix from '../../components/FundingMatrix';
import { DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Borsalar Arası Canlı Fonlama Oranları (Funding Rate) | Kriptonik',
  description: 'Binance, Bybit ve OKX canlı fonlama oranları, geçmiş fonlama verileri, arbitraj spread takibi ve ağırlıklı piyasa ortalaması.'
};

export default function FundingHubPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#848E9C] font-mono">
        <Link href="/" className="hover:text-white">Kriptonik</Link>
        <span>/</span>
        <span className="text-white font-semibold">Fonlama Oranları</span>
      </nav>

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF]">
            <DollarSign className="h-5 w-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Borsalar Arası Fonlama Oranları & Arbitraj Matrisi
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#848E9C] max-w-3xl leading-relaxed">
          Tüm büyük türev borsalarında (Binance, Bybit, OKX) 8 saatlik fonlama oranlarını canlı kıyaslayın. Pozitif oranlarda boğa primini, negatif oranlarda ayı baskısını ve delta-nötr fonlama arbitraj fırsatlarını keşfedin.
        </p>
      </div>

      {/* Main Funding Matrix Component */}
      <FundingMatrix coins={COINS_DATA} />

      {/* Directory Cards */}
      <div className="panel-card p-6 space-y-4">
        <h2 className="text-base font-bold text-white">Varlık Bazlı Fonlama Detayları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COINS_DATA.map((coin) => (
            <Link
              key={coin.id}
              href={`/fonlama-oranlari/${coin.slug}/`}
              className="rounded-xl border border-[#222938] bg-[#0D121A] p-4 hover:border-[#00C087] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white group-hover:text-[#00C087] transition-colors">
                    {coin.name} ({coin.symbol})
                  </span>
                  <span className={`font-mono text-xs font-bold ${coin.fundingRates.binance >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                    {coin.fundingRates.binance >= 0 ? '+' : ''}{(coin.fundingRates.binance * 100).toFixed(4)}%
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#848E9C] flex justify-between font-mono">
                  <span>Bybit:</span>
                  <strong className="text-white">{(coin.fundingRates.bybit * 100).toFixed(4)}%</strong>
                </div>
                <div className="mt-1 text-xs text-[#848E9C] flex justify-between font-mono">
                  <span>OKX:</span>
                  <strong className="text-white">{(coin.fundingRates.okx * 100).toFixed(4)}%</strong>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#1A212D] text-[11px] font-semibold text-[#00C087] flex items-center justify-between">
                <span>Fonlama Raporunu Aç</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
