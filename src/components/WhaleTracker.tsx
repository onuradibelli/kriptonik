'use client';

import React, { useState, useEffect } from 'react';
import { WhaleTransaction } from '../lib/types';
import { ShieldAlert, ArrowDownRight, ArrowUpRight, ArrowRight, Filter, Volume2, VolumeX, Radio, Sparkles, Activity } from 'lucide-react';

interface WhaleTrackerProps {
  transactions: WhaleTransaction[];
}

interface DynamicWhaleTx extends WhaleTransaction {
  secondsAgo: number;
}

export default function WhaleTracker({ transactions }: WhaleTrackerProps) {
  const [filterType, setFilterType] = useState<'ALL' | 'INFLOW' | 'OUTFLOW'>('ALL');
  const [symbolFilter, setSymbolFilter] = useState<string>('ALL');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [totalMonitoredVolume, setTotalMonitoredVolume] = useState(842500000);

  // Live dynamic transaction feed
  const [liveList, setLiveList] = useState<DynamicWhaleTx[]>(() =>
    transactions.map((t, idx) => ({ ...t, secondsAgo: idx * 45 }))
  );

  // Audio synthesizer for whale alert ping
  const playWhaleAlert = (type: 'INFLOW' | 'OUTFLOW') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(type === 'INFLOW' ? 440 : 660, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'INFLOW' ? 220 : 880, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // Audio safe
    }
  };

  // Real-time dynamic transaction generator pushing new blocks every 4.5 - 7.5 seconds
  useEffect(() => {
    const symbols = ['BTC', 'ETH', 'SOL', 'USDT'];
    const exchanges = ['Binance', 'Coinbase Prime', 'Kraken', 'Bybit', 'OKX'];
    const custodians = ['BitGo Cold Storage', 'Bilinmeyen Kurumsal Cüzdan', 'Coinbase Custody', 'Galaxy Digital Cüzdanı'];

    const interval = setInterval(() => {
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      const isInflow = Math.random() > 0.45;
      const ex = exchanges[Math.floor(Math.random() * exchanges.length)];
      const cust = custodians[Math.floor(Math.random() * custodians.length)];

      let amt = 0;
      let amtUsd = 0;

      if (sym === 'BTC') {
        amt = Math.round(150 + Math.random() * 850);
        amtUsd = amt * 75800;
      } else if (sym === 'ETH') {
        amt = Math.round(4500 + Math.random() * 18000);
        amtUsd = amt * 2230;
      } else if (sym === 'SOL') {
        amt = Math.round(80000 + Math.random() * 250000);
        amtUsd = amt * 90.5;
      } else {
        amt = Math.round(15000000 + Math.random() * 45000000);
        amtUsd = amt;
      }

      const randomHash = '0x' + Math.random().toString(16).substring(2, 6) + '...' + Math.random().toString(16).substring(2, 6);

      const newTx: DynamicWhaleTx = {
        id: 'tx-live-' + Date.now(),
        hash: randomHash,
        symbol: sym,
        amount: amt,
        amountUsd: amtUsd,
        fromType: isInflow ? 'WALLET' : 'EXCHANGE',
        fromName: isInflow ? cust : ex,
        toType: isInflow ? 'EXCHANGE' : 'WALLET',
        toName: isInflow ? ex : cust,
        timestamp: 'Az önce',
        type: isInflow ? 'INFLOW' : 'OUTFLOW',
        secondsAgo: 0
      };

      setLiveList((prev) => [newTx, ...prev.slice(0, 19)]);
      setTotalMonitoredVolume((v) => v + amtUsd);
      playWhaleAlert(isInflow ? 'INFLOW' : 'OUTFLOW');
    }, 5500);

    // Aging timer
    const ageTimer = setInterval(() => {
      setLiveList((prev) =>
        prev.map((t) => ({ ...t, secondsAgo: t.secondsAgo + 1 }))
      );
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(ageTimer);
    };
  }, [soundEnabled]);

  const filtered = liveList.filter((tx) => {
    if (filterType !== 'ALL' && tx.type !== filterType) return false;
    if (symbolFilter !== 'ALL' && tx.symbol !== symbolFilter) return false;
    return true;
  });

  return (
    <div className="panel-card p-5 sm:p-6 space-y-5">
      {/* 1. Header with Live Status and Sound */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00E699]/15 text-[#00E699] border border-[#00E699]/25">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[var(--foreground)] flex items-center gap-2">
                <span>Canlı Balina & Büyük Transfer Radarı</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
                  ANLIK ZİNCİR AKIŞI
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            $10.000.000 USD üzeri borsa giriş/çıkışları, tezgahüstü (OTC) kurumsal transferler ve soğuk cüzdan akümülasyonları.
          </p>
        </div>

        {/* Filters and Audio Alert Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Symbol Filter */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono">
            {['ALL', 'BTC', 'ETH', 'SOL', 'USDT'].map((sym) => (
              <button
                key={sym}
                onClick={() => setSymbolFilter(sym)}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  symbolFilter === sym
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {sym === 'ALL' ? 'TÜMÜ' : sym}
              </button>
            ))}
          </div>

          {/* Flow Direction Filter */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono">
            {(['ALL', 'INFLOW', 'OUTFLOW'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  filterType === t
                    ? t === 'INFLOW' ? 'bg-[#FF3B56] text-white shadow-xs' : t === 'OUTFLOW' ? 'bg-[#00E699] text-black shadow-xs' : 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {t === 'ALL' ? 'TÜM YÖNLER' : t === 'INFLOW' ? 'BORSA GİRİŞİ (SATIŞ)' : 'SOĞUK CÜZDAN (BİRİKİM)'}
              </button>
            ))}
          </div>

          {/* Audio toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`rounded-xl border p-2 transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-[#00E699]/15 border-[#00E699]/40 text-[#00E699]'
                : 'border-[var(--border)] bg-[var(--background)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
            title={soundEnabled ? 'Balina uyarısını kapat' : 'Balina uyarısını aç'}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 2. Three Dynamic KPI Radar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs text-[var(--card-muted)] font-medium">İzlenen 24s Balina Hacmi</div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[var(--foreground)]">
            ${(totalMonitoredVolume / 1_000_000).toFixed(1)}M
          </div>
          <div className="text-xs text-[#2962FF] font-mono mt-0.5">
            Otomatik Canlı Blokzincir Akışı
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs text-[var(--card-muted)] font-medium flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00E699]" />
            <span>Soğuk Cüzdana Çıkış (Birikim)</span>
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#00E699]">
            $532.8M (%63.2)
          </div>
          <div className="text-xs text-[#00E699] font-mono mt-0.5">
            Kurumsal Pozitif Akümülasyon
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5">
          <div className="text-xs text-[var(--card-muted)] font-medium flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF3B56]" />
            <span>Borsa Girişi (Olası Satış)</span>
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#FF3B56]">
            $309.7M (%36.8)
          </div>
          <div className="text-xs text-[#FF3B56] font-mono mt-0.5">
            Yatırma İşlemleri (Satış Baskısı)
          </div>
        </div>
      </div>

      {/* 3. Live Animated Stream of Whale Orders */}
      <div className="space-y-2.5 font-mono text-xs">
        {filtered.map((tx) => {
          const isInflow = tx.type === 'INFLOW';
          const isOutflow = tx.type === 'OUTFLOW';

          return (
            <div
              key={tx.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card-subtle)] p-3.5 hover:border-[#2962FF] transition-all animate-in fade-in slide-in-from-top-1 duration-200"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isInflow
                      ? 'bg-[#FF3B56]/15 text-[#FF3B56] border border-[#FF3B56]/30'
                      : isOutflow
                      ? 'bg-[#00E699]/15 text-[#00E699] border border-[#00E699]/30'
                      : 'bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/30'
                  }`}
                >
                  {isInflow ? (
                    <ArrowDownRight className="h-5 w-5" />
                  ) : isOutflow ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-sm sm:text-base text-[var(--foreground)]">
                      {tx.amount.toLocaleString('tr-TR')} {tx.symbol}
                    </span>
                    <span className="text-xs text-[var(--card-muted)] font-semibold">
                      (${ (tx.amountUsd / 1_000_000).toFixed(2) }M)
                    </span>
                    <span
                      className={`rounded-lg px-2 py-0.5 text-xs font-bold uppercase ${
                        isInflow
                          ? 'bg-[#FF3B56]/15 text-[#FF3B56] border border-[#FF3B56]/30'
                          : isOutflow
                          ? 'bg-[#00E699]/15 text-[#00E699] border border-[#00E699]/30'
                          : 'bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/30'
                      }`}
                    >
                      {isInflow ? 'Borsaya Yatırıldı (Satış Baskısı)' : isOutflow ? 'Soğuk Cüzdana Çekildi (Boğa)' : 'Cüzdan Transferi'}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-xs text-[var(--card-muted)]">
                    <span className="text-[var(--foreground)] font-medium">{tx.fromName}</span>
                    <ArrowRight className="h-3 w-3 text-[#2962FF] shrink-0" />
                    <span className="text-[var(--foreground)] font-medium">{tx.toName}</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs text-[var(--card-muted)]">
                <div className="font-bold text-[var(--foreground)]">
                  {tx.secondsAgo === 0 ? 'Az önce' : tx.secondsAgo < 60 ? `${tx.secondsAgo} sn önce` : `${Math.floor(tx.secondsAgo / 60)} dk önce`}
                </div>
                <div className="text-[11px] text-[#2962FF] font-bold">
                  Tx: {tx.hash}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
