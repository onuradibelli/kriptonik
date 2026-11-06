'use client';

import React, { useState, useMemo } from 'react';
import { DollarSign, Percent, ArrowRightLeft, ShieldCheck, HelpCircle, CheckCircle2, TrendingUp, Info } from 'lucide-react';

interface ExchangeTier {
  id: string;
  name: string;
  logoText: string;
  makerRate: number; // e.g. 0.001 = %0.10
  takerRate: number; // e.g. 0.0012 = %0.12
  bnbDiscount?: boolean;
  notes: string;
}

const EXCHANGES: ExchangeTier[] = [
  {
    id: 'binancetr',
    name: 'Binance TR',
    logoText: 'B-TR',
    makerRate: 0.0008, // %0.08
    takerRate: 0.0010, // %0.10
    bnbDiscount: true,
    notes: 'BNB ile %25 komisyon indirimi uygulanabilir'
  },
  {
    id: 'btcturk',
    name: 'BtcTurk Pro',
    logoText: 'BTC-T',
    makerRate: 0.0010, // %0.10
    takerRate: 0.0018, // %0.18
    bnbDiscount: false,
    notes: 'Kripto-TRY çiftlerinde standart piyasa alıcı oranı'
  },
  {
    id: 'paribu',
    name: 'Paribu',
    logoText: 'PAR',
    makerRate: 0.0025, // %0.25
    takerRate: 0.0035, // %0.35
    bnbDiscount: false,
    notes: 'Standart hacim dilimi komisyon oranı'
  },
  {
    id: 'okxtr',
    name: 'OKX TR',
    logoText: 'OKX',
    makerRate: 0.0008, // %0.08
    takerRate: 0.0010, // %0.10
    bnbDiscount: false,
    notes: 'Yerel banka transferleri ve sıfır TRY yatırma ücreti'
  },
  {
    id: 'binanceglobal',
    name: 'Binance Global (Spot)',
    logoText: 'BIN',
    makerRate: 0.00075, // %0.075 (with BNB)
    takerRate: 0.00075,
    bnbDiscount: true,
    notes: 'FDUSD çiftlerinde %0 maker avantajı'
  }
];

export default function ExchangeFeeCalculator() {
  const [selectedExchangeId, setSelectedExchangeId] = useState<string>('binancetr');
  const [currency, setCurrency] = useState<'TRY' | 'USDT'>('TRY');
  const [tradeAmount, setTradeAmount] = useState<number>(50000); // 50,000 TRY
  const [buyPrice, setBuyPrice] = useState<number>(3150000); // BTC TRY
  const [sellPrice, setSellPrice] = useState<number>(3350000);
  const [orderType, setOrderType] = useState<'taker' | 'maker'>('taker');
  const [useBnbDiscount, setUseBnbDiscount] = useState<boolean>(true);

  const selectedExchange = EXCHANGES.find(e => e.id === selectedExchangeId) || EXCHANGES[0];

  const calculation = useMemo(() => {
    const effectiveMaker = (selectedExchange.bnbDiscount && useBnbDiscount) 
      ? selectedExchange.makerRate * 0.75 
      : selectedExchange.makerRate;
    
    const effectiveTaker = (selectedExchange.bnbDiscount && useBnbDiscount) 
      ? selectedExchange.takerRate * 0.75 
      : selectedExchange.takerRate;

    const rate = orderType === 'maker' ? effectiveMaker : effectiveTaker;

    // Buy side
    const buyFee = tradeAmount * rate;
    const netInvested = tradeAmount - buyFee;
    const coinQuantity = netInvested / (buyPrice || 1);

    // Sell side
    const grossSellValue = coinQuantity * (sellPrice || 1);
    const sellFee = grossSellValue * rate;
    const netSellValue = grossSellValue - sellFee;

    const totalFees = buyFee + sellFee;
    const netProfit = netSellValue - tradeAmount;
    const roiPercentage = ((netProfit / tradeAmount) * 100);

    // Comparisons across all exchanges
    const comparisons = EXCHANGES.map(ex => {
      const exRate = orderType === 'maker' 
        ? ((ex.bnbDiscount && useBnbDiscount) ? ex.makerRate * 0.75 : ex.makerRate)
        : ((ex.bnbDiscount && useBnbDiscount) ? ex.takerRate * 0.75 : ex.takerRate);
      
      const exBuyFee = tradeAmount * exRate;
      const exNetInvested = tradeAmount - exBuyFee;
      const exCoinQty = exNetInvested / (buyPrice || 1);
      const exGrossSell = exCoinQty * (sellPrice || 1);
      const exSellFee = exGrossSell * exRate;
      const exTotalFees = exBuyFee + exSellFee;
      const exNetProfit = (exGrossSell - exSellFee) - tradeAmount;

      return {
        ...ex,
        ratePercent: (exRate * 100).toFixed(3),
        totalFees: exTotalFees,
        netProfit: exNetProfit,
        diffFromSelected: exTotalFees - totalFees
      };
    });

    return {
      ratePercent: (rate * 100).toFixed(3),
      buyFee,
      sellFee,
      totalFees,
      grossProfit: grossSellValue - tradeAmount,
      netProfit,
      roiPercentage,
      comparisons
    };
  }, [selectedExchange, useBnbDiscount, orderType, tradeAmount, buyPrice, sellPrice]);

  return (
    <div className="panel-card p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00E699]/15 text-[#00E699] font-black text-sm">
              ₺
            </span>
            <h2 className="text-xl font-bold text-[var(--foreground)]">
              Türkiye Borsa Komisyon & Net Kâr Simülatörü
            </h2>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Binance TR, BtcTurk, Paribu ve OKX TR borsalarındaki komisyon kesintilerini ve net kârınızı canlı karşılaştırın.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs">
          <button
            onClick={() => {
              setCurrency('TRY');
              if (currency !== 'TRY') {
                setTradeAmount(50000);
                setBuyPrice(3150000);
                setSellPrice(3350000);
              }
            }}
            className={`px-3 py-1 font-bold rounded-lg transition-colors ${
              currency === 'TRY' ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)]'
            }`}
          >
            Türk Lirası (₺)
          </button>
          <button
            onClick={() => {
              setCurrency('USDT');
              if (currency !== 'USDT') {
                setTradeAmount(2000);
                setBuyPrice(88000);
                setSellPrice(94000);
              }
            }}
            className={`px-3 py-1 font-bold rounded-lg transition-colors ${
              currency === 'USDT' ? 'bg-[#00E699] text-black shadow-xs' : 'text-[var(--card-muted)]'
            }`}
          >
            Tether (USDT $)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Parameters (Left Column) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Exchange Selection */}
          <div>
            <label className="block text-xs font-semibold text-[var(--card-muted)] mb-1.5">
              İşlem Yapılan Borsa
            </label>
            <div className="grid grid-cols-2 gap-2">
              {EXCHANGES.map(ex => (
                <button
                  key={ex.id}
                  onClick={() => setSelectedExchangeId(ex.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                    selectedExchangeId === ex.id
                      ? 'border-[#2962FF] bg-[#2962FF]/10 text-[var(--foreground)] font-bold'
                      : 'border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:border-[var(--foreground)]/30'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-[10px] px-1.5 py-0.5 rounded bg-[var(--border)]">
                      {ex.logoText}
                    </span>
                    <span>{ex.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Order Type (Maker vs Taker) */}
          <div>
            <label className="block text-xs font-semibold text-[var(--card-muted)] mb-1.5">
              Emir Türü (Piyasa Yapıcı vs Alıcı)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setOrderType('maker')}
                className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                  orderType === 'maker'
                    ? 'border-[#00E699] bg-[#00E699]/10 text-[#00E699]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)]'
                }`}
              >
                Maker (Limit Emir - Pasif)
              </button>
              <button
                onClick={() => setOrderType('taker')}
                className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                  orderType === 'taker'
                    ? 'border-[#2962FF] bg-[#2962FF]/10 text-[#2962FF]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)]'
                }`}
              >
                Taker (Market Emir - Aktif)
              </button>
            </div>
          </div>

          {/* BNB Discount Toggle if applicable */}
          {selectedExchange.bnbDiscount && (
            <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] text-xs">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">BNB</span>
                <span className="text-[var(--foreground)]">Komisyonları BNB ile Öde (%25 İndirim)</span>
              </div>
              <input
                type="checkbox"
                checked={useBnbDiscount}
                onChange={(e) => setUseBnbDiscount(e.target.checked)}
                className="h-4 w-4 rounded accent-[#2962FF] cursor-pointer"
              />
            </div>
          )}

          {/* Amount and Prices */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[var(--card-muted)] mb-1">
                İşlem Tutarı ({currency === 'TRY' ? '₺' : '$'})
              </label>
              <input
                type="number"
                value={tradeAmount}
                onChange={(e) => setTradeAmount(Number(e.target.value))}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-sm font-mono font-bold text-[var(--foreground)] focus:border-[#2962FF] focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[var(--card-muted)] mb-1">
                  Alış Fiyatı ({currency === 'TRY' ? '₺' : '$'})
                </label>
                <input
                  type="number"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(Number(e.target.value))}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm font-mono font-bold text-[var(--foreground)] focus:border-[#2962FF] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--card-muted)] mb-1">
                  Satış Hedefi ({currency === 'TRY' ? '₺' : '$'})
                </label>
                <input
                  type="number"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm font-mono font-bold text-[var(--foreground)] focus:border-[#2962FF] focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results & Comparison (Right Column) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Uygulanan Komisyon</div>
              <div className="mt-1 font-mono text-lg font-black text-[#2962FF]">
                %{calculation.ratePercent}
              </div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">
                {orderType.toUpperCase()} {useBnbDiscount && selectedExchange.bnbDiscount ? '• %25 İndirimli' : ''}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Toplam Komisyon Kesintisi</div>
              <div className="mt-1 font-mono text-lg font-black text-[#FF3B56]">
                {currency === 'TRY' ? '₺' : '$'}{calculation.totalFees.toFixed(2)}
              </div>
              <div className="text-[10px] text-[var(--card-muted)] mt-0.5">
                Alış: {currency === 'TRY' ? '₺' : '$'}{calculation.buyFee.toFixed(1)} + Satış: {currency === 'TRY' ? '₺' : '$'}{calculation.sellFee.toFixed(1)}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 col-span-2 sm:col-span-1">
              <div className="text-[11px] font-medium text-[var(--card-muted)]">Net Kâr / Zarar (ROI)</div>
              <div className={`mt-1 font-mono text-lg font-black ${
                calculation.netProfit >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'
              }`}>
                {calculation.netProfit >= 0 ? '+' : ''}{currency === 'TRY' ? '₺' : '$'}{calculation.netProfit.toFixed(2)}
              </div>
              <div className={`text-[10px] font-mono font-bold mt-0.5 ${
                calculation.roiPercentage >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'
              }`}>
                %{calculation.roiPercentage.toFixed(2)} Net Getiri
              </div>
            </div>
          </div>

          {/* Exchanges Comparison Table */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-1.5">
                <ArrowRightLeft className="h-3.5 w-3.5 text-[#2962FF]" />
                Tüm Borsalar Arasında Komisyon Kıyaslaması
              </h3>
              <span className="text-[10px] font-mono text-[var(--card-muted)]">Aynı İşlem İçin</span>
            </div>

            <div className="divide-y divide-[var(--border)] text-xs">
              {calculation.comparisons.map(item => {
                const isSelected = item.id === selectedExchangeId;
                return (
                  <div
                    key={item.id}
                    className={`py-2.5 px-2 flex items-center justify-between rounded-lg transition-colors ${
                      isSelected ? 'bg-[#2962FF]/10 font-semibold' : 'hover:bg-[var(--card)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--border)] font-bold">
                        {item.logoText}
                      </span>
                      <div>
                        <div className="text-[var(--foreground)] flex items-center gap-1.5">
                          {item.name}
                          {isSelected && (
                            <span className="text-[9px] bg-[#2962FF] text-white px-1 rounded font-bold">
                              Seçili
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-[var(--card-muted)]">
                          Komisyon: %{item.ratePercent}
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-[var(--foreground)] font-bold">
                        {currency === 'TRY' ? '₺' : '$'}{item.totalFees.toFixed(2)}
                      </div>
                      <div className={`text-[10px] ${
                        item.diffFromSelected > 0 
                          ? 'text-[#FF3B56]' 
                          : item.diffFromSelected < 0 
                            ? 'text-[#00E699]' 
                            : 'text-[var(--card-muted)]'
                      }`}>
                        {item.diffFromSelected === 0 
                          ? 'Mevcut' 
                          : item.diffFromSelected > 0 
                            ? `+${currency === 'TRY' ? '₺' : '$'}${item.diffFromSelected.toFixed(2)} Fazla`
                            : `${currency === 'TRY' ? '₺' : '$'}${Math.abs(item.diffFromSelected).toFixed(2)} Daha Az`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
