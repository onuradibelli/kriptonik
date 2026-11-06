'use client';

import React, { useState, useEffect } from 'react';
import { COINS_DATA } from '../lib/data';
import { useBinanceTickers } from '../lib/useBinanceTickers';
import { Calculator, AlertTriangle, ShieldCheck, TrendingUp, TrendingDown, DollarSign, Percent, ArrowRightLeft, RefreshCw, Info, Radio } from 'lucide-react';

export default function LeverageCalculator() {
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const [side, setSide] = useState<'LONG' | 'SHORT'>('LONG');
  const [leverage, setLeverage] = useState<number>(20);
  const [margin, setMargin] = useState<number>(1000); // $1000 USDT
  const [liveSync, setLiveSync] = useState(false);

  const selectedCoin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];

  const defaultTickers = {
    BTCUSDT: { price: 75728.00, change24h: -0.11 },
    ETHUSDT: { price: 2227.60, change24h: -0.85 },
    SOLUSDT: { price: 90.50, change24h: 0.85 },
    BNBUSDT: { price: 695.50, change24h: 1.04 },
    XRPUSDT: { price: 1.185, change24h: -4.63 },
    DOGEUSDT: { price: 0.0729, change24h: 1.87 },
    SUIUSDT: { price: 0.871, change24h: 2.85 }
  };

  const { tickers, isConnected } = useBinanceTickers(defaultTickers);

  const currentLivePrice =
    tickers[selectedCoin.binanceSymbol]?.price || selectedCoin.price;

  const [entryPrice, setEntryPrice] = useState<number>(selectedCoin.price);
  const [exitPrice, setExitPrice] = useState<number>(selectedCoin.price * 1.05); // Default +5% target

  // Live price auto-sync if toggled
  useEffect(() => {
    if (liveSync && currentLivePrice > 0) {
      setEntryPrice(currentLivePrice);
      setExitPrice(side === 'LONG' ? currentLivePrice * 1.05 : currentLivePrice * 0.95);
    }
  }, [currentLivePrice, liveSync, side]);

  // When coin changes, update entry and exit prices
  const handleCoinChange = (slug: string) => {
    setSelectedCoinSlug(slug);
    const coin = COINS_DATA.find((c) => c.slug === slug);
    if (coin) {
      setEntryPrice(coin.price);
      setExitPrice(side === 'LONG' ? coin.price * 1.05 : coin.price * 0.95);
    }
  };

  // Maintenance margin rate (MMR) approximation (0.4% - 0.5% standard for tier 1)
  const mmr = 0.004;

  // Position Calculations
  const notionalSize = margin * leverage;
  const quantity = entryPrice > 0 ? notionalSize / entryPrice : 0;

  // Liquidation Price calculation
  // Long Liq: Entry * (1 - 1/leverage + mmr)
  // Short Liq: Entry * (1 + 1/leverage - mmr)
  const liquidationPrice =
    side === 'LONG'
      ? Math.max(0, entryPrice * (1 - 1 / leverage + mmr))
      : entryPrice * (1 + 1 / leverage - mmr);

  const distanceToLiqPercent =
    entryPrice > 0
      ? Math.abs(((liquidationPrice - entryPrice) / entryPrice) * 100)
      : 0;

  // PnL & ROE
  const pnl =
    side === 'LONG'
      ? quantity * (exitPrice - entryPrice)
      : quantity * (entryPrice - exitPrice);

  const roePercent = margin > 0 ? (pnl / margin) * 100 : 0;

  // Estimated Fee (0.05% taker for opening and closing)
  const estimatedFee = notionalSize * 0.0005 * 2;
  const netPnl = pnl - estimatedFee;

  // Risk Rating
  let riskBadge = { text: 'Düşük Risk', color: 'text-[#00C087] bg-[#00C087]/15 border-[#00C087]/30' };
  if (distanceToLiqPercent < 2) {
    riskBadge = { text: 'Aşırı Yüksek Risk (Anında Likidasyon)', color: 'text-[#F6465D] bg-[#F6465D]/20 border-[#F6465D]/40' };
  } else if (distanceToLiqPercent < 5) {
    riskBadge = { text: 'Yüksek Risk', color: 'text-[#F6465D] bg-[#F6465D]/15 border-[#F6465D]/30' };
  } else if (distanceToLiqPercent < 12) {
    riskBadge = { text: 'Orta Risk', color: 'text-[#D97706] dark:text-[#F2C14E] bg-[#F2C14E]/15 border-[#F2C14E]/30' };
  }

  // Pre-configured Scenarios (-15%, -10%, -5%, -2%, +2%, +5%, +10%, +15%)
  const scenarios = [-15, -10, -5, -2, 2, 5, 10, 15];

  return (
    <div className="space-y-6">
      {/* 1. Header info */}
      <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--card-subtle)] p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2962FF]/15 px-2.5 py-0.5 text-xs font-bold text-[#2962FF] border border-[#2962FF]/30">
              <Calculator className="h-3.5 w-3.5" />
              <span>Vadeli İşlem Risk & Tasfiye Simülatörü</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
              Kaldıraç & Likidasyon Fiyatı Hesaplayıcı
            </h2>
            <p className="text-xs text-[var(--card-muted)]">
              Pozisyon büyüklüğünüzü, tahmini likidasyon seviyenizi ve komisyon sonrası net kâr/zarar senaryolarını anında hesaplayın.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                const next = !liveSync;
                setLiveSync(next);
                if (next && currentLivePrice > 0) {
                  setEntryPrice(currentLivePrice);
                }
              }}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                liveSync
                  ? 'border-[#00C087] bg-[#00C087]/15 text-[#00C087]'
                  : 'border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Radio className={`h-3.5 w-3.5 ${liveSync ? 'animate-pulse text-[#00C087]' : ''}`} />
              {liveSync ? 'Canlı Senkronize Açık' : 'Canlı Fiyatı Senkronize Et'}
            </button>

            <button
              onClick={() => {
                setLiveSync(false);
                setEntryPrice(currentLivePrice);
                setExitPrice(side === 'LONG' ? currentLivePrice * 1.05 : currentLivePrice * 0.95);
              }}
              className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5 text-[#2962FF]" />
              Güncel Fiyatı Çek (${currentLivePrice > 10 ? currentLivePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : currentLivePrice.toFixed(4)})
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider font-mono flex items-center gap-2">
            <span>⚙️</span> Pozisyon Parametreleri
          </h3>

          {/* Coin Selector */}
          <div>
            <label className="text-xs font-semibold text-[var(--card-muted)] block mb-1.5">
              İşlem Yapılacak Varlık
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {COINS_DATA.slice(0, 5).map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCoinChange(c.slug)}
                  className={`flex flex-col items-center justify-center rounded-xl p-2.5 font-mono text-xs transition-all ${
                    selectedCoinSlug === c.slug
                      ? 'bg-[#2962FF] text-white font-bold shadow-md shadow-[#2962FF]/20'
                      : 'border border-[var(--border)] bg-[var(--card-subtle)] text-[var(--foreground)] hover:border-[#2962FF]/50'
                  }`}
                >
                  <span className="font-extrabold">{c.symbol}</span>
                  <span className="text-[10px] opacity-80 mt-0.5">
                    ${c.price > 10 ? c.price.toLocaleString('tr-TR') : c.price.toFixed(4)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Long / Short Switch */}
          <div>
            <label className="text-xs font-semibold text-[var(--card-muted)] block mb-1.5">
              Pozisyon Yönü
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setSide('LONG');
                  setExitPrice(entryPrice * 1.05);
                }}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-extrabold uppercase transition-all ${
                  side === 'LONG'
                    ? 'bg-[#00C087] text-white shadow-md shadow-[#00C087]/25'
                    : 'border border-[var(--border)] bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[#00C087]'
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                LONG (Alış / Yükseliş)
              </button>

              <button
                onClick={() => {
                  setSide('SHORT');
                  setExitPrice(entryPrice * 0.95);
                }}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-extrabold uppercase transition-all ${
                  side === 'SHORT'
                    ? 'bg-[#F6465D] text-white shadow-md shadow-[#F6465D]/25'
                    : 'border border-[var(--border)] bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[#F6465D]'
                }`}
              >
                <TrendingDown className="h-4 w-4" />
                SHORT (Satış / Düşüş)
              </button>
            </div>
          </div>

          {/* Leverage Selector & Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--card-muted)]">Kaldıraç Oranı:</span>
              <span className="font-mono text-base font-black text-[#2962FF]">{leverage}x</span>
            </div>

            <input
              type="range"
              min="1"
              max="125"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full accent-[#2962FF] cursor-pointer"
            />

            <div className="flex items-center justify-between gap-1.5 pt-1 overflow-x-auto no-scrollbar">
              {[2, 5, 10, 20, 25, 50, 75, 100, 125].map((lev) => (
                <button
                  key={lev}
                  onClick={() => setLeverage(lev)}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-colors ${
                    leverage === lev
                      ? 'bg-[#2962FF] text-white'
                      : 'border border-[var(--border)] bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {lev}x
                </button>
              ))}
            </div>
          </div>

          {/* Price & Margin Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-[var(--card-muted)] block mb-1">
                Giriş Fiyatı ($ USDT)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="any"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 font-mono text-sm font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
                />
                <span className="absolute right-3 top-2.5 font-mono text-xs text-[var(--card-muted)]">$</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[var(--card-muted)] block mb-1">
                Yatırılan Teminat (Margin $ USDT)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="any"
                  value={margin}
                  onChange={(e) => setMargin(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 font-mono text-sm font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
                />
                <span className="absolute right-3 top-2.5 font-mono text-xs text-[var(--card-muted)]">$</span>
              </div>
            </div>
          </div>

          {/* Exit Target Price */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <label className="font-semibold text-[var(--card-muted)]">
                Hedef Çıkış Fiyatı ($ USDT)
              </label>
              <span className="font-mono text-[11px] text-[var(--card-muted)]">
                Fark: {(((exitPrice - entryPrice) / entryPrice) * 100).toFixed(2)}%
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="any"
                value={exitPrice}
                onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 font-mono text-sm font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
              />
              <span className="absolute right-3 top-2.5 font-mono text-xs text-[var(--card-muted)]">$</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Results Cockpit (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Liquidation Radar Card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--card-muted)] uppercase tracking-wider font-mono">
                TASFİYE EŞİĞİ
              </span>
              <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-extrabold border ${riskBadge.color}`}>
                {riskBadge.text}
              </span>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-center">
              <div className="text-xs text-[var(--card-muted)] font-medium">Tahmini Likidasyon Fiyatı</div>
              <div className="mt-1 font-mono text-2xl sm:text-3xl font-black text-[#F6465D]">
                ${liquidationPrice > 10 ? liquidationPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : liquidationPrice.toFixed(4)}
              </div>
              <div className="mt-1 text-xs font-mono text-[var(--card-muted)]">
                Mevcut Fiyata Mesafe:{' '}
                <strong className={distanceToLiqPercent < 5 ? 'text-[#F6465D]' : 'text-[var(--foreground)]'}>
                  %{distanceToLiqPercent.toFixed(2)}
                </strong>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Toplam Pozisyon Hacmi</div>
                <div className="mt-1 text-sm font-bold text-[var(--foreground)]">
                  ${notionalSize.toLocaleString('tr-TR')}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">
                  {quantity.toFixed(4)} {selectedCoin.symbol}
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Tahmini Taker Komisyon</div>
                <div className="mt-1 text-sm font-bold text-[var(--foreground)]">
                  ${estimatedFee.toFixed(2)}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">Giriş + Çıkış</div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Hedef Kâr / Zarar (PnL)</div>
                <div className={`mt-1 text-sm font-bold ${pnl >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {pnl >= 0 ? '+' : ''}${pnl.toFixed(2)}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">
                  Net: {netPnl >= 0 ? '+' : ''}${netPnl.toFixed(2)}
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Tahmini ROE %</div>
                <div className={`mt-1 text-sm font-black ${roePercent >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {roePercent >= 0 ? '+' : ''}{roePercent.toFixed(2)}%
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">
                  Teminat Getirisi
                </div>
              </div>
            </div>
          </div>

          {/* Quick Warning Notice */}
          <div className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 text-xs text-[var(--card-muted)] leading-relaxed">
            <Info className="h-4 w-4 text-[#2962FF] shrink-0 mt-0.5" />
            <p>
              Hesaplanan likidasyon fiyatı Binance/Bybit standart %0.4 Bakım Teminat Oranı (MMR) baz alınarak simüle edilmiştir. Aşırı volatil piyasa koşullarında borsa fonlama kesintileri tasfiye seviyesini etkileyebilir.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Scenario Simulation Matrix Table */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 space-y-4">
        <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider font-mono">
          📊 Fiyat Değişim Senaryoları & Net Getiri Matrisi
        </h3>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[var(--border)] text-[var(--card-muted)] text-[10px] uppercase">
                <th className="py-2.5 px-3">Fiyat Değişimi</th>
                <th className="py-2.5 px-3">Simüle Fiyat</th>
                <th className="py-2.5 px-3">Net Kâr / Zarar ($)</th>
                <th className="py-2.5 px-3">ROE (%)</th>
                <th className="py-2.5 px-3 text-right">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {scenarios.map((delta) => {
                const simPrice = entryPrice * (1 + delta / 100);
                const simPnl = side === 'LONG' ? quantity * (simPrice - entryPrice) : quantity * (entryPrice - simPrice);
                const simRoe = margin > 0 ? (simPnl / margin) * 100 : 0;
                const isLiquidated =
                  side === 'LONG' ? simPrice <= liquidationPrice : simPrice >= liquidationPrice;

                return (
                  <tr
                    key={delta}
                    className={`transition-colors ${
                      isLiquidated
                        ? 'bg-[#F6465D]/10 text-[#F6465D]'
                        : 'hover:bg-[var(--hover-bg)]'
                    }`}
                  >
                    <td className="py-2.5 px-3 font-bold">
                      <span className={delta >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}>
                        {delta >= 0 ? '+' : ''}{delta}%
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-[var(--foreground)]">
                      ${simPrice > 10 ? simPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : simPrice.toFixed(4)}
                    </td>
                    <td className="py-2.5 px-3 font-bold">
                      {isLiquidated ? (
                        <span className="text-[#F6465D]">-${margin.toFixed(2)} (Tasfiye)</span>
                      ) : (
                        <span className={simPnl >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}>
                          {simPnl >= 0 ? '+' : ''}${simPnl.toFixed(2)}
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-black">
                      {isLiquidated ? (
                        <span className="text-[#F6465D]">-%100.00</span>
                      ) : (
                        <span className={simRoe >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}>
                          {simRoe >= 0 ? '+' : ''}{simRoe.toFixed(2)}%
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      {isLiquidated ? (
                        <span className="rounded bg-[#F6465D]/20 px-2 py-0.5 text-[10px] font-bold text-[#F6465D]">
                          LİKİDASYON
                        </span>
                      ) : simPnl > 0 ? (
                        <span className="rounded bg-[#00C087]/20 px-2 py-0.5 text-[10px] font-bold text-[#00C087]">
                          KÂRDA
                        </span>
                      ) : (
                        <span className="rounded bg-[var(--card-subtle)] px-2 py-0.5 text-[10px] text-[var(--card-muted)]">
                          ZARARDA
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
