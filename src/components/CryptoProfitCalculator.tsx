'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, DollarSign, ArrowRight, Sparkles, Percent, Target, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { LIVE_CURRENCY_RATES } from '../lib/data';

export default function CryptoProfitCalculator() {
  const [entryPrice, setEntryPrice] = useState<number>(75000);
  const [exitPrice, setExitPrice] = useState<number>(85000);
  const [investmentUsd, setInvestmentUsd] = useState<number>(2000);
  const [direction, setDirection] = useState<'LONG' | 'SHORT'>('LONG');
  const [leverage, setLeverage] = useState<number>(1);
  const [feeRatePercent, setFeeRatePercent] = useState<number>(0.05); // Standard 0.05% taker

  const usdtTry = LIVE_CURRENCY_RATES.USDT_TRY; // 50.04

  // Calculations
  const positionSizeUsd = investmentUsd * leverage;
  const coinQuantity = entryPrice > 0 ? positionSizeUsd / entryPrice : 0;

  // Price delta ratio
  const priceChangePercent = entryPrice > 0 ? ((exitPrice - entryPrice) / entryPrice) * 100 : 0;

  // PnL calculation
  let grossPnlUsd = 0;
  if (direction === 'LONG') {
    grossPnlUsd = (exitPrice - entryPrice) * coinQuantity;
  } else {
    grossPnlUsd = (entryPrice - exitPrice) * coinQuantity;
  }

  // Fees (Entry + Exit fee)
  const entryFeeUsd = positionSizeUsd * (feeRatePercent / 100);
  const exitPosSizeUsd = coinQuantity * exitPrice;
  const exitFeeUsd = exitPosSizeUsd * (feeRatePercent / 100);
  const totalFeesUsd = entryFeeUsd + exitFeeUsd;

  // Net Results
  const netPnlUsd = grossPnlUsd - totalFeesUsd;
  const netPnlTry = netPnlUsd * usdtTry;
  const roiPercent = investmentUsd > 0 ? (netPnlUsd / investmentUsd) * 100 : 0;
  const totalReturnUsd = Math.max(0, investmentUsd + netPnlUsd);
  const totalReturnTry = totalReturnUsd * usdtTry;

  // Quick Target Price Presets
  const applyTargetRoi = (targetRoi: number) => {
    // targetRoi = (priceChange% * leverage)
    const requiredPricePct = (targetRoi / leverage) / 100;
    if (direction === 'LONG') {
      setExitPrice(Number((entryPrice * (1 + requiredPricePct)).toFixed(4)));
    } else {
      setExitPrice(Number((entryPrice * (1 - requiredPricePct)).toFixed(4)));
    }
  };

  const isProfit = netPnlUsd >= 0;

  return (
    <div className="panel-card p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#2962FF] to-[#00E699] text-white font-bold shadow-md shadow-[#2962FF]/20">
              <Calculator className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Kripto Kâr/Zarar (PnL) & Hedef Fiyat Simülatörü</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-[10px] font-mono font-bold">
                  SPOT & VADELİ
                </span>
              </h2>
              <p className="text-xs text-[var(--card-muted)] mt-0.5">
                Alış ve hedef satış fiyatınızı girerek net dolar ve Türk Lirası kârınızı, borsa komisyonları düşülmüş olarak simüle edin.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Direction toggle */}
          <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono font-bold">
            <button
              onClick={() => setDirection('LONG')}
              className={`rounded-lg px-3 py-1.5 transition-all ${
                direction === 'LONG'
                  ? 'bg-[#00E699] text-black shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              🟢 Long / Spot Alım
            </button>
            <button
              onClick={() => setDirection('SHORT')}
              className={`rounded-lg px-3 py-1.5 transition-all ${
                direction === 'SHORT'
                  ? 'bg-[#FF3B56] text-white shadow-xs'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              🔴 Short / Açığa Satış
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs vs Real-Time Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Form: Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input 1: Entry Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--foreground)] flex items-center justify-between">
                <span>Alış (Giriş) Fiyatı:</span>
                <span className="font-mono text-[10px] text-[var(--card-muted)]">USD ($)</span>
              </label>
              <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 focus-within:border-[#2962FF] transition-all">
                <span className="text-sm font-bold text-[var(--card-muted)] mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-transparent font-mono text-base font-bold text-[var(--foreground)] outline-none"
                />
              </div>
            </div>

            {/* Input 2: Exit Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--foreground)] flex items-center justify-between">
                <span>Hedef Satış (Çıkış) Fiyatı:</span>
                <span className="font-mono text-[10px] text-[var(--card-muted)]">USD ($)</span>
              </label>
              <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 focus-within:border-[#2962FF] transition-all">
                <span className="text-sm font-bold text-[var(--card-muted)] mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={exitPrice}
                  onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-transparent font-mono text-base font-bold text-[var(--foreground)] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Quick Target ROI presets */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[var(--card-muted)] flex items-center gap-1">
              <Target className="h-3 w-3 text-[#2962FF]" />
              <span>Hızlı Kâr & Zarar Hedefleri:</span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { label: '+%5', roi: 5, color: 'hover:border-[#00E699] text-[#00E699]' },
                { label: '+%10', roi: 10, color: 'hover:border-[#00E699] text-[#00E699]' },
                { label: '+%25', roi: 25, color: 'hover:border-[#00E699] text-[#00E699]' },
                { label: '+%50', roi: 50, color: 'hover:border-[#00E699] text-[#00E699]' },
                { label: '+%100 (2x)', roi: 100, color: 'hover:border-[#00E699] text-[#00E699] font-bold' },
                { label: '-%5 Stop', roi: -5, color: 'hover:border-[#FF3B56] text-[#FF3B56]' },
                { label: '-%10 Stop', roi: -10, color: 'hover:border-[#FF3B56] text-[#FF3B56]' }
              ].map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => applyTargetRoi(preset.roi)}
                  className={`rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs font-mono font-bold transition-all ${preset.color}`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input 3: Investment Amount & Leverage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--foreground)] flex items-center justify-between">
                <span>Yatırılan Ana Para:</span>
                <span className="font-mono text-[10px] text-[var(--card-muted)]">
                  ≈ ₺{(investmentUsd * usdtTry).toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY
                </span>
              </label>
              <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 focus-within:border-[#2962FF] transition-all">
                <span className="text-sm font-bold text-[var(--card-muted)] mr-2">$</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={investmentUsd}
                  onChange={(e) => setInvestmentUsd(parseFloat(e.target.value) || 0)}
                  className="w-full bg-transparent font-mono text-base font-bold text-[var(--foreground)] outline-none"
                />
              </div>
            </div>

            {/* Leverage Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--foreground)]">
                <span>Kaldıraç Katsayısı:</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#2962FF]/15 text-[#2962FF] font-bold">
                  {leverage === 1 ? '1x (Spot)' : `${leverage}x (Vadeli)`}
                </span>
              </div>
              <div className="pt-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={leverage}
                  onChange={(e) => setLeverage(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#2962FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--card-muted)] mt-1">
                  <span>1x (Spot)</span>
                  <span>10x</span>
                  <span>25x</span>
                  <span>50x</span>
                  <span>100x</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick presets for investment */}
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[11px] text-[var(--card-muted)]">Hızlı Tutar:</span>
            {[250, 500, 1000, 2500, 5000, 10000].map((amt) => (
              <button
                key={amt}
                onClick={() => setInvestmentUsd(amt)}
                className={`rounded-lg border px-2 py-0.5 text-[11px] font-mono font-semibold transition-all ${
                  investmentUsd === amt
                    ? 'border-[#2962FF] bg-[#2962FF]/15 text-[#2962FF]'
                    : 'border-[var(--border)] bg-[var(--background)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                ${amt >= 1000 ? `${amt / 1000}k` : amt}
              </button>
            ))}
          </div>

          {/* Fee settings toggle */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-xs flex items-center justify-between">
            <div className="text-[var(--card-muted)]">
              <span>Borsa Taker Komisyonu:</span>
              <span className="ml-1 font-mono font-bold text-[var(--foreground)]">%{feeRatePercent}</span>
              <span className="text-[10px] text-[var(--card-muted)] block">(Binance / Bybit VIP 0 standart)</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px]">
              {[0.02, 0.05, 0.1].map((f) => (
                <button
                  key={f}
                  onClick={() => setFeeRatePercent(f)}
                  className={`rounded px-2 py-0.5 font-bold ${
                    feeRatePercent === f
                      ? 'bg-[#2962FF] text-white'
                      : 'bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  %{f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form: Calculated Net Results Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--background)] p-5 flex flex-col justify-between space-y-4 shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="text-xs font-bold text-[var(--card-muted)] uppercase tracking-wider">
                Simülasyon Sonucu
              </span>
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-mono font-bold ${
                isProfit ? 'bg-[#00E699]/15 text-[#00E699]' : 'bg-[#FF3B56]/15 text-[#FF3B56]'
              }`}>
                {isProfit ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {isProfit ? 'KÂRLI İŞLEM' : 'ZARARLI İŞLEM'}
              </span>
            </div>

            {/* Net Profit Big Display */}
            <div className="mt-4 space-y-1">
              <span className="text-xs font-semibold text-[var(--card-muted)]">Net Kâr / Zarar:</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${
                  isProfit ? 'text-[#00E699]' : 'text-[#FF3B56]'
                }`}>
                  {isProfit ? '+' : ''}${netPnlUsd.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className={`text-base font-bold font-mono ${
                  isProfit ? 'text-[#00E699]' : 'text-[#FF3B56]'
                }`}>
                  ({isProfit ? '+' : ''}{roiPercent.toFixed(2)}% ROI)
                </span>
              </div>
              <div className="text-sm font-mono font-bold text-[var(--foreground)] flex items-center gap-1 pt-0.5">
                <span>Türk Lirası Karşılığı:</span>
                <strong className={isProfit ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
                  {isProfit ? '+' : ''}₺{netPnlTry.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TRY
                </strong>
              </div>
            </div>

            {/* Key Breakdown Metrics Table */}
            <div className="mt-5 space-y-2 pt-3 border-t border-[var(--border)] text-xs font-mono">
              <div className="flex justify-between text-[var(--card-muted)]">
                <span>Toplam Pozisyon Büyüklüğü:</span>
                <span className="font-bold text-[var(--foreground)]">
                  ${positionSizeUsd.toLocaleString('tr-TR')} ({leverage}x)
                </span>
              </div>

              <div className="flex justify-between text-[var(--card-muted)]">
                <span>Coin Miktarı (Adet):</span>
                <span className="font-bold text-[var(--foreground)]">
                  {coinQuantity.toFixed(4)} Adet
                </span>
              </div>

              <div className="flex justify-between text-[var(--card-muted)]">
                <span>Fiyat Değişim Oranı:</span>
                <span className={`font-bold ${priceChangePercent >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
                  {priceChangePercent >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%
                </span>
              </div>

              <div className="flex justify-between text-[var(--card-muted)]">
                <span>Tahmini Borsa Komisyonu (Giriş+Çıkış):</span>
                <span className="font-bold text-[#FF8A00]">
                  -${totalFeesUsd.toFixed(2)} USD
                </span>
              </div>

              <div className="flex justify-between text-[var(--card-muted)] pt-2 border-t border-[var(--border)] text-sm">
                <span className="font-bold text-[var(--foreground)]">Hesaba Geri Geçecek Toplam:</span>
                <span className="font-black text-[var(--foreground)]">
                  ${totalReturnUsd.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-right text-[11px] text-[var(--card-muted)]">
                ≈ ₺{totalReturnTry.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TRY
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#2962FF]/10 border border-[#2962FF]/20 p-2.5 text-[11px] text-[var(--card-muted)] leading-relaxed">
            💡 <strong>İpucu:</strong> Kaldıraçlı işlemlerde komisyonlar ana paranız üzerinden değil, kaldıraçla çarpılmış toplam pozisyon büyüklüğü (${positionSizeUsd.toLocaleString('tr-TR')}) üzerinden hesaplanır.
          </div>
        </div>
      </div>
    </div>
  );
}
