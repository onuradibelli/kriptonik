'use client';

import React, { useState } from 'react';
import { WhaleTransaction } from '../lib/types';
import { ShieldAlert, ArrowDownRight, ArrowUpRight, ArrowRight, Filter } from 'lucide-react';

interface WhaleTrackerProps {
  transactions: WhaleTransaction[];
}

export default function WhaleTracker({ transactions }: WhaleTrackerProps) {
  const [filterType, setFilterType] = useState<'ALL' | 'INFLOW' | 'OUTFLOW'>('ALL');
  const [symbolFilter, setSymbolFilter] = useState<string>('ALL');

  const filtered = transactions.filter((tx) => {
    if (filterType !== 'ALL' && tx.type !== filterType) return false;
    if (symbolFilter !== 'ALL' && tx.symbol !== symbolFilter) return false;
    return true;
  });

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087] border border-[#00C087]/25">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>Balina ve Büyük Cüzdan Transfer Radarı</span>
              <span className="rounded bg-[#00C087]/15 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">ANLIK AKIŞ</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            $10.000.000 USD üzeri borsa giriş/çıkışları ve kurumsal saklama cüzdanı hareketleri.
          </p>
        </div>

        {/* Dual Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Coin Selector */}
          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono">
            {['ALL', 'BTC', 'ETH', 'SOL', 'USDT'].map((sym) => (
              <button
                key={sym}
                onClick={() => setSymbolFilter(sym)}
                className={`rounded px-2 py-0.5 font-bold transition-all ${
                  symbolFilter === sym
                    ? 'bg-[#00C087] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {sym}
              </button>
            ))}
          </div>

          {/* Flow Direction Filter buttons */}
          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-mono">
            {(['ALL', 'INFLOW', 'OUTFLOW'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`rounded px-2.5 py-1 font-semibold transition-all ${
                  filterType === t ? 'bg-[#2962FF] text-white shadow-xs' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {t === 'ALL' ? 'TÜMÜ' : t === 'INFLOW' ? 'GİRİŞ' : 'ÇIKIŞ'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-2.5 font-mono text-xs">
        {filtered.map((tx) => {
          const isInflow = tx.type === 'INFLOW';
          const isOutflow = tx.type === 'OUTFLOW';

          return (
            <div
              key={tx.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-3 hover:border-[#2962FF] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    isInflow
                      ? 'bg-[#F6465D]/15 text-[#F6465D]'
                      : isOutflow
                      ? 'bg-[#00C087]/15 text-[#00C087]'
                      : 'bg-[#2962FF]/15 text-[#2962FF]'
                  }`}
                >
                  {isInflow ? (
                    <ArrowDownRight className="h-4 w-4" />
                  ) : isOutflow ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--foreground)] text-sm">
                      {tx.amount.toLocaleString('tr-TR')} {tx.symbol}
                    </span>
                    <span className="text-[var(--card-muted)]">
                      (${ (tx.amountUsd / 1_000_000).toFixed(2) }M)
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9px] font-bold uppercase ${
                        isInflow
                          ? 'bg-[#F6465D]/15 text-[#F6465D]'
                          : isOutflow
                          ? 'bg-[#00C087]/15 text-[#00C087]'
                          : 'bg-[#2962FF]/15 text-[#2962FF]'
                      }`}
                    >
                      {isInflow ? 'Borsa Girişi (Satış Riski)' : isOutflow ? 'Borsa Çıkışı (Birikim)' : 'Cüzdan Transferi'}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[11px] text-[var(--card-muted)]">
                    <span className="text-[var(--foreground)] font-medium">{tx.fromName}</span>
                    <ArrowRight className="h-3 w-3 text-[#2962FF]" />
                    <span className="text-[var(--foreground)] font-medium">{tx.toName}</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-[11px] text-[var(--card-muted)]">
                <div>{tx.timestamp}</div>
                <div className="text-[10px] text-[#2962FF] hover:underline cursor-pointer font-bold">
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
