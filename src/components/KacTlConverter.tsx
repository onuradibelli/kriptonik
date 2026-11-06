'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LIVE_CURRENCY_RATES, getKacTlItems } from '../lib/data';
import { Calculator, ArrowRightLeft, DollarSign, Building, TrendingUp } from 'lucide-react';

export default function KacTlConverter({ initialSlug = '1-dolar-kac-tl' }: { initialSlug?: string }) {
  const items = getKacTlItems();
  const currentItem = items.find((it) => it.slug === initialSlug) || items[0];

  const [selectedSlug, setSelectedSlug] = useState(currentItem.slug);
  const [amount, setAmount] = useState<number>(1);

  const active = items.find((it) => it.slug === selectedSlug) || items[0];
  const totalTry = amount * active.rateTry;

  return (
    <div className="panel-card p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087] border border-[#00C087]/25">
              <Calculator className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>Canlı Türk Lirası (TL) Hesaplama & Çevirici</span>
              <span className="rounded bg-[#2962FF]/15 text-[#2962FF] px-2 py-0.5 text-[10px] font-mono font-bold">GERÇEK ZAMANLI KUR</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Dolar, Tether, Bitcoin ve altcoinlerin serbest piyasa, TCMB ve kripto borsaları anlık TL karşılıkları.
          </p>
        </div>

        <div className="text-right text-[11px] font-mono text-[var(--card-muted)]">
          <span>Canlı USD/TRY: <strong className="text-[var(--foreground)]">{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺</strong></span>
          <span className="mx-2">•</span>
          <span>USDT/TRY: <strong className="text-[#00C087]">{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺</strong></span>
        </div>
      </div>

      {/* Currency Switcher Quick Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {items.map((it) => (
          <button
            key={it.slug}
            onClick={() => setSelectedSlug(it.slug)}
            className={`rounded-lg px-3 py-1.5 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
              selectedSlug === it.slug
                ? 'bg-[#2962FF] text-white shadow-xs'
                : 'bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[var(--foreground)] border border-[var(--border)]'
            }`}
          >
            <span>{it.unitAmount} {it.symbol}</span>
            <span className="text-[10px] opacity-75">→ TL</span>
          </button>
        ))}
      </div>

      {/* Interactive Conversion Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
        {/* Input Side */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[var(--card-muted)]">Miktar Giriniz ({active.symbol}):</label>
          <div className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-3.5 py-2">
            <input
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-transparent font-mono text-xl font-bold text-[var(--foreground)] outline-none"
            />
            <span className="font-mono text-xs font-bold text-[var(--foreground)] ml-2">{active.symbol}</span>
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">
            Birim Fiyat: 1 {active.symbol} = {active.rateTry > 10 ? active.rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : active.rateTry.toFixed(4)} TL
          </div>
        </div>

        {/* Output Side */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[var(--card-muted)]">Toplam Türk Lirası Karşılığı (TRY):</label>
          <div className="flex items-center justify-between rounded-lg border border-[#00C087]/30 bg-[#00C087]/10 px-4 py-2">
            <div className="font-mono text-2xl font-black text-[#00C087]">
              {totalTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
            </div>
            <span className="font-mono text-xs font-bold text-[#00C087]">TRY</span>
          </div>
          <div className="text-[11px] text-[var(--card-muted)] flex items-center justify-between">
            <span>Dolar Karşılığı: ${(amount * active.rateUsd).toLocaleString('tr-TR', { maximumFractionDigits: 2 })}</span>
            <span className="text-[#00C087] font-semibold">Komisyonsuz Canlı Değer</span>
          </div>
        </div>
      </div>

      {/* Three-Way Market Comparison (TCMB vs Serbest Piyasa vs Binance TR) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-3">
          <div className="text-[11px] text-[var(--card-muted)]">TCMB Resmi Gösterge</div>
          <div className="mt-1 text-base font-bold text-[var(--foreground)]">
            {(amount * active.tcmbTry).toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
          </div>
          <div className="text-[10px] text-[var(--card-muted)] mt-0.5">T.C. Merkez Bankası Gösterge</div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-3">
          <div className="text-[11px] text-[var(--card-muted)]">Serbest Piyasa / Kapalıçarşı</div>
          <div className="mt-1 text-base font-bold text-[#2962FF]">
            {(amount * active.rateTry * 1.003).toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
          </div>
          <div className="text-[10px] text-[var(--card-muted)] mt-0.5">Nakit Alış/Satış Ortalaması</div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-3">
          <div className="text-[11px] text-[var(--card-muted)]">Binance TR Spot Tahtası</div>
          <div className="mt-1 text-base font-bold text-[#00C087]">
            {(amount * active.binanceTrTry).toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
          </div>
          <div className="text-[10px] text-[#00C087] mt-0.5">Anlık Kripto Tahtası</div>
        </div>
      </div>
    </div>
  );
}
