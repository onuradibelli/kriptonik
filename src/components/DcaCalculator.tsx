'use client';

import React, { useState } from 'react';
import { COINS_DATA } from '../lib/data';
import { Layers, Plus, Trash2, Calculator, TrendingUp, DollarSign, Target, RefreshCw, CheckCircle2 } from 'lucide-react';

interface BuyEntry {
  id: string;
  amount: number;
  price: number;
}

export default function DcaCalculator() {
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const selectedCoin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];

  const [buys, setBuys] = useState<BuyEntry[]>([
    { id: '1', amount: 0.25, price: selectedCoin.price * 1.04 },
    { id: '2', amount: 0.35, price: selectedCoin.price },
    { id: '3', amount: 0.50, price: selectedCoin.price * 0.95 },
  ]);

  const [targetExitPrice, setTargetExitPrice] = useState<number>(selectedCoin.price * 1.15);

  const handleCoinChange = (slug: string) => {
    setSelectedCoinSlug(slug);
    const coin = COINS_DATA.find((c) => c.slug === slug);
    if (coin) {
      setBuys([
        { id: '1', amount: 0.25, price: coin.price * 1.04 },
        { id: '2', amount: 0.35, price: coin.price },
        { id: '3', amount: 0.50, price: coin.price * 0.95 },
      ]);
      setTargetExitPrice(coin.price * 1.15);
    }
  };

  const addBuyEntry = () => {
    const lastPrice = buys[buys.length - 1]?.price || selectedCoin.price;
    setBuys([
      ...buys,
      { id: Date.now().toString(), amount: 0.2, price: lastPrice * 0.95 },
    ]);
  };

  const removeBuyEntry = (id: string) => {
    if (buys.length <= 1) return;
    setBuys(buys.filter((b) => b.id !== id));
  };

  const updateBuy = (id: string, field: 'amount' | 'price', value: number) => {
    setBuys(
      buys.map((b) => (b.id === id ? { ...b, [field]: Math.max(0, value) } : b))
    );
  };

  // Calculations
  const totalCoins = buys.reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const totalInvestedUsd = buys.reduce(
    (acc, curr) => acc + (curr.amount || 0) * (curr.price || 0),
    0
  );
  const averagePrice = totalCoins > 0 ? totalInvestedUsd / totalCoins : 0;
  const initialFirstBuyPrice = buys[0]?.price || averagePrice;
  const costReductionPercent =
    initialFirstBuyPrice > 0
      ? ((initialFirstBuyPrice - averagePrice) / initialFirstBuyPrice) * 100
      : 0;

  const valueAtTarget = totalCoins * targetExitPrice;
  const netProfit = valueAtTarget - totalInvestedUsd;
  const roiPercent = totalInvestedUsd > 0 ? (netProfit / totalInvestedUsd) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--card-subtle)] p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00C087]/15 px-2.5 py-0.5 text-xs font-bold text-[#00C087] border border-[#00C087]/30">
              <Layers className="h-3.5 w-3.5" />
              <span>Kademeli Alım & Maliyet Düşürme Aracı</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
              DCA & Ortalama Maliyet Hesaplayıcı
            </h2>
            <p className="text-xs text-[var(--card-muted)]">
              Farklı fiyatlardan yaptığınız spot veya vadeli alımların ağırlıklı birim maliyetini ve hedef satış kârınızı hesaplayın.
            </p>
          </div>

          {/* Coin Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {COINS_DATA.slice(0, 5).map((c) => (
              <button
                key={c.id}
                onClick={() => handleCoinChange(c.slug)}
                className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold transition-all ${
                  selectedCoinSlug === c.slug
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'border border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {c.symbol}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Alım Kademeleri Girişi (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider font-mono flex items-center gap-2">
              <span>📝</span> Kademeli Alım İşlemleri ({selectedCoin.symbol})
            </h3>
            <button
              onClick={addBuyEntry}
              className="flex items-center gap-1 rounded-lg bg-[#2962FF] px-2.5 py-1 text-xs font-bold text-white hover:bg-[#1E4BD8] transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              Yeni Kademe Ekle
            </button>
          </div>

          {/* List of Entries */}
          <div className="space-y-3">
            {buys.map((buy, idx) => (
              <div
                key={buy.id}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--border)] font-mono text-xs font-bold text-[var(--foreground)]">
                  #{idx + 1}
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-[var(--card-muted)] block mb-1">
                      Miktar ({selectedCoin.symbol})
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={buy.amount}
                      onChange={(e) => updateBuy(buy.id, 'amount', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-xs font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[var(--card-muted)] block mb-1">
                      Alış Fiyatı ($ USDT)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={buy.price}
                      onChange={(e) => updateBuy(buy.id, 'price', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-xs font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
                    />
                  </div>
                </div>

                <div className="text-right font-mono text-xs min-w-[70px]">
                  <div className="text-[10px] text-[var(--card-muted)]">Ara Toplam</div>
                  <div className="font-bold text-[var(--foreground)]">
                    ${((buy.amount || 0) * (buy.price || 0)).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                  </div>
                </div>

                <button
                  onClick={() => removeBuyEntry(buy.id)}
                  disabled={buys.length <= 1}
                  className="rounded-lg p-1.5 text-[var(--card-muted)] hover:text-[#F6465D] hover:bg-[#F6465D]/10 disabled:opacity-30 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Target Exit Price */}
          <div className="pt-2 border-t border-[var(--border)]">
            <label className="text-xs font-semibold text-[var(--card-muted)] block mb-1.5 flex items-center justify-between">
              <span>Hedef Satış / Çıkış Fiyatı ($ USDT)</span>
              <span className="font-mono text-[11px] text-[#00C087]">
                Maliyete Göre: +{averagePrice > 0 ? (((targetExitPrice - averagePrice) / averagePrice) * 100).toFixed(1) : 0}%
              </span>
            </label>
            <div className="relative">
              <input
                type="number"
                step="any"
                value={targetExitPrice}
                onChange={(e) => setTargetExitPrice(parseFloat(e.target.value) || 0)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 font-mono text-sm font-bold text-[var(--foreground)] outline-none focus:border-[#2962FF]"
              />
              <span className="absolute right-3.5 top-2.5 font-mono text-xs text-[var(--card-muted)]">$</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sonuç Göstergeleri (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 space-y-4">
            <span className="text-xs font-bold text-[var(--card-muted)] uppercase tracking-wider font-mono">
              AĞIRLIKLI ORTALAMA SONUCU
            </span>

            {/* Average Cost Big Box */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 text-center">
              <div className="text-xs text-[var(--card-muted)] font-medium">Yeni Birim Maliyetiniz</div>
              <div className="mt-1 font-mono text-2xl sm:text-3xl font-black text-[#2962FF]">
                ${averagePrice > 10 ? averagePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : averagePrice.toFixed(4)}
              </div>
              {costReductionPercent > 0 && (
                <div className="mt-1 text-xs font-mono text-[#00C087] font-semibold">
                  İlk alıma kıyasla %{costReductionPercent.toFixed(2)} maliyet avantajı sağlandı!
                </div>
              )}
            </div>

            {/* 4 Key Metrics */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Toplam Yatırılan Tutar</div>
                <div className="mt-1 text-sm font-bold text-[var(--foreground)]">
                  ${totalInvestedUsd.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">{buys.length} kademe alım</div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Toplam Varlık Miktarı</div>
                <div className="mt-1 text-sm font-bold text-[var(--foreground)]">
                  {totalCoins.toFixed(4)} {selectedCoin.symbol}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">Kümülatif pozisyon</div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Hedef Net Kâr ($)</div>
                <div className={`mt-1 text-sm font-black ${netProfit >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {netProfit >= 0 ? '+' : ''}${netProfit.toLocaleString('tr-TR', { maximumFractionDigits: 1 })}
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">Hedefte toplam kâr</div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3">
                <div className="text-[10px] text-[var(--card-muted)]">Hedef ROI (%)</div>
                <div className={`mt-1 text-sm font-black ${roiPercent >= 0 ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>
                  {roiPercent >= 0 ? '+' : ''}{roiPercent.toFixed(2)}%
                </div>
                <div className="text-[9px] text-[var(--card-muted)] mt-0.5">Sermaye büyümesi</div>
              </div>
            </div>

            {/* Strategic Advice */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 text-xs text-[var(--card-muted)] leading-relaxed flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#00C087] shrink-0 mt-0.5" />
              <p>
                DCA (Dollar-Cost Averaging) stratejisi, volatilite dönemlerinde tek fiyattan tüm sermayeyi yatırma riskini elimine eder. Başabaş noktanız <strong>${averagePrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}</strong> seviyesindedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
