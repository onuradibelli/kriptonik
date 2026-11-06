'use client';

import React, { useState } from 'react';
import LeverageCalculator from './LeverageCalculator';
import DcaCalculator from './DcaCalculator';
import ExchangeFeeCalculator from './ExchangeFeeCalculator';
import { Calculator, Layers, Zap, ArrowRightLeft } from 'lucide-react';

export default function CalculatorSuite() {
  const [activeTab, setActiveTab] = useState<'leverage' | 'dca' | 'fees'>('leverage');

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1.5 w-fit">
        <button
          onClick={() => setActiveTab('leverage')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'leverage'
              ? 'bg-[#2962FF] text-white shadow-xs'
              : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
          }`}
        >
          <Zap className="h-4 w-4" />
          <span>Kaldıraç & Likidasyon Simülatörü</span>
        </button>

        <button
          onClick={() => setActiveTab('dca')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'dca'
              ? 'bg-[#00E699] text-black shadow-xs'
              : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
          }`}
        >
          <Layers className="h-4 w-4" />
          <span>DCA & Maliyet Düşürme</span>
        </button>

        <button
          onClick={() => setActiveTab('fees')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'fees'
              ? 'bg-gradient-to-r from-[#2962FF] to-[#00E699] text-white shadow-xs'
              : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
          }`}
        >
          <ArrowRightLeft className="h-4 w-4" />
          <span>Borsa Komisyon & Kâr Kıyaslama</span>
          <span className="rounded bg-white/20 px-1.5 py-0.2 text-[9px] font-mono">YENİ</span>
        </button>
      </div>

      {/* Active Tab View */}
      {activeTab === 'leverage' && <LeverageCalculator />}
      {activeTab === 'dca' && <DcaCalculator />}
      {activeTab === 'fees' && <ExchangeFeeCalculator />}
    </div>
  );
}
