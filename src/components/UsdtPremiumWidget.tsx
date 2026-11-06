'use client';

import React from 'react';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { ArrowRightLeft, DollarSign, TrendingUp, AlertCircle, Scale, ShieldCheck } from 'lucide-react';

export default function UsdtPremiumWidget() {
  const tcmb = LIVE_CURRENCY_RATES.TCMB_USD;
  const kapalicarsi = LIVE_CURRENCY_RATES.KAPALICARSI_USD;
  const usdt = LIVE_CURRENCY_RATES.USDT_TRY;

  // Tether Premium vs Kapalicarsi Physical Dollar
  // Positive = USDT is more expensive than cash dollar (crypto demand high)
  // Negative = USDT is cheaper than cash dollar (cash demand high / crypto discount)
  const tetherPremiumPercent = ((usdt - kapalicarsi) / kapalicarsi) * 100;
  const bankSpreadPercent = ((kapalicarsi - tcmb) / tcmb) * 100;

  const isPremium = tetherPremiumPercent > 0.05;
  const isDiscount = tetherPremiumPercent < -0.05;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-[#2962FF]" />
            <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider font-mono">
              Tether (USDT) Arbitraj Primi & Döviz Makası
            </h3>
          </div>
          <p className="text-xs text-[var(--card-muted)]">
            Serbest piyasa fiziki doları ile kripto doları (USDT) arasındaki canlı fiyat farkı ve arbitraj sinyali.
          </p>
        </div>

        {/* Premium / Discount Status Badge */}
        <div className="flex items-center gap-2">
          {isPremium ? (
            <span className="rounded-full bg-[#00C087]/15 px-3 py-1 font-mono text-xs font-black text-[#00C087] border border-[#00C087]/30 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00C087] animate-pulse" />
              USDT PRİMLİ (+%{tetherPremiumPercent.toFixed(2)})
            </span>
          ) : isDiscount ? (
            <span className="rounded-full bg-[#2962FF]/15 px-3 py-1 font-mono text-xs font-black text-[#2962FF] border border-[#2962FF]/30 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#2962FF] animate-pulse" />
              USDT İSKONTOLU (%{tetherPremiumPercent.toFixed(2)})
            </span>
          ) : (
            <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 font-mono text-xs font-black text-[var(--foreground)] border border-[var(--border)]">
              DENGEDE (%0.00)
            </span>
          )}
        </div>
      </div>

      {/* 3 Comparative Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* TCMB */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5">
          <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)]">
            <span>TCMB Gösterge Kuru</span>
            <span className="font-mono text-[10px] rounded bg-[var(--card)] px-1.5 py-0.2 border border-[var(--border)]">Resmi</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[var(--foreground)]">
            ₺{tcmb.toFixed(2)}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)]">
            Bankalararası merkez kur
          </div>
        </div>

        {/* Kapalicarsi */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5">
          <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)]">
            <span>Serbest Piyasa (Fiziki Dolar)</span>
            <span className="font-mono text-[10px] rounded bg-[var(--card)] px-1.5 py-0.2 border border-[var(--border)]">Kapalıçarşı</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[var(--foreground)]">
            ₺{kapalicarsi.toFixed(2)}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            Banka Makası: <strong className="text-[#00C087]">+{bankSpreadPercent.toFixed(2)}%</strong>
          </div>
        </div>

        {/* USDT Binance TR */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)]">
            <span>Tether (USDT/TRY)</span>
            <span className="font-mono text-[10px] rounded bg-[#2962FF]/15 text-[#2962FF] px-1.5 py-0.2 border border-[#2962FF]/30 font-bold">Kripto</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[#2962FF]">
            ₺{usdt.toFixed(2)}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            Net Prim/Fark:{' '}
            <strong className={tetherPremiumPercent >= 0 ? 'text-[#00C087]' : 'text-[#2962FF]'}>
              {tetherPremiumPercent >= 0 ? '+' : ''}{tetherPremiumPercent.toFixed(2)}%
            </strong>
          </div>
        </div>
      </div>

      {/* Strategic Investor Note */}
      <div className="rounded-xl border border-[var(--border)] bg-gradient-to-r from-[var(--card-subtle)] to-[var(--card)] p-3 text-xs text-[var(--card-muted)] flex items-start gap-2.5">
        <AlertCircle className="h-4 w-4 text-[#2962FF] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[var(--foreground)]">Yatırımcı Strateji Notu: </span>
          {isDiscount ? (
            <span>
              Tether (USDT), serbest piyasa fiziki nakit dolara kıyasla <strong>%{Math.abs(tetherPremiumPercent).toFixed(2)} daha ucuz (iskontolu)</strong> işlem görüyor. Bu durum TL ile kripto para veya stablecoin almak isteyenler için maliyet avantajı sunar.
            </span>
          ) : isPremium ? (
            <span>
              Tether (USDT), serbest piyasaya göre <strong>%{tetherPremiumPercent.toFixed(2)} primli</strong> satılıyor. Kripto varlıklarını nakit TL&apos;ye çeviren yatırımcılar döviz bürolarına göre kur avantajı elde eder.
            </span>
          ) : (
            <span>
              Kripto doları (USDT) ile fiziki serbest piyasa doları birebir dengede işlem görüyor. Arbitraj makası bulunmamaktadır.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
