'use client';

import React, { useState, useEffect } from 'react';
import { useTickers } from '../context/TickerContext';
import { LIVE_CURRENCY_RATES } from '../lib/data';
import { Scale, AlertCircle } from 'lucide-react';

export default function UsdtPremiumWidget() {
  const { tickers } = useTickers();
  const [liveForexUsd, setLiveForexUsd] = useState<number>(LIVE_CURRENCY_RATES.USD_TRY);

  // Live USDT/TRY from Binance stream
  const liveUsdt = tickers['USDTTRY']?.price || LIVE_CURRENCY_RATES.USDT_TRY;

  // Fetch official / forex USD rate
  useEffect(() => {
    let isSubscribed = true;
    const fetchUsd = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        if (res.ok) {
          const data = await res.json();
          if (data?.rates?.TRY && isSubscribed) {
            setLiveForexUsd(parseFloat(data.rates.TRY));
          }
        }
      } catch {
        // Fallback to static reference
      }
    };
    fetchUsd();
    const interval = setInterval(fetchUsd, 60000);
    return () => {
      isSubscribed = false;
      clearInterval(interval);
    };
  }, []);

  const tcmb = LIVE_CURRENCY_RATES.TCMB_USD;
  const kapalicarsi = liveForexUsd > 0 ? liveForexUsd * 1.002 : LIVE_CURRENCY_RATES.KAPALICARSI_USD;

  // Real spread calculation
  const tetherPremiumPercent = kapalicarsi > 0 ? ((liveUsdt - kapalicarsi) / kapalicarsi) * 100 : 0;
  const bankSpreadPercent = tcmb > 0 ? ((kapalicarsi - tcmb) / tcmb) * 100 : 0;

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
            Serbest piyasa kuru ile Binance USDT/TRY arasındaki anlık fiyat farkı ve arbitraj sinyali.
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
            Bankalararası referans kur
          </div>
        </div>

        {/* Serbest Piyasa */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5">
          <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)]">
            <span>Serbest Piyasa (Forex / Nakit)</span>
            <span className="font-mono text-[10px] rounded bg-[var(--card)] px-1.5 py-0.2 border border-[var(--border)]">Canlı</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[var(--foreground)]">
            ₺{kapalicarsi.toFixed(2)}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            Banka Makası: <strong className="text-[#00C087]">+{bankSpreadPercent.toFixed(2)}%</strong>
          </div>
        </div>

        {/* USDT Binance */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-[var(--card-muted)]">
            <span>Tether (USDT/TRY)</span>
            <span className="font-mono text-[10px] rounded bg-[#2962FF]/15 text-[#2962FF] px-1.5 py-0.2 border border-[#2962FF]/30 font-bold">Binance Canlı</span>
          </div>
          <div className="mt-1 font-mono text-xl font-black text-[#2962FF]">
            ₺{liveUsdt.toFixed(2)}
          </div>
          <div className="mt-0.5 text-[10px] text-[var(--card-muted)] font-mono">
            Net Arbitraj Makası:{' '}
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
          <span className="font-bold text-[var(--foreground)]">Yatırımcı Notu: </span>
          {isDiscount ? (
            <span>
              Tether (USDT), serbest piyasa nakit dolara göre <strong>%{Math.abs(tetherPremiumPercent).toFixed(2)} iskontolu</strong> işlem görmektedir. Bu durum TL ile stablecoin veya kripto almak isteyenler için arbitraj avantajı oluşturur.
            </span>
          ) : isPremium ? (
            <span>
              Tether (USDT), serbest piyasaya kıyasla <strong>%{tetherPremiumPercent.toFixed(2)} primli</strong> satılmaktadır. Kripto varlıkları nakit TL&apos;ye çevirenler kur farkından avantaj elde eder.
            </span>
          ) : (
            <span>
              Kripto doları (USDT) ile serbest piyasa doları dengede işlem görüyor. Anlık arbitraj makası bulunmamaktadır.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
