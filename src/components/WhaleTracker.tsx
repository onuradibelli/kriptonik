'use client';

import React, { useState } from 'react';
import { WhaleTransaction } from '../lib/types';
import { ShieldAlert, ArrowDownRight, ArrowUpRight, ArrowRight, Filter } from 'lucide-react';

interface WhaleTrackerProps {
  transactions: WhaleTransaction[];
}

export default function WhaleTracker({ transactions }: WhaleTrackerProps) {
  const [filterType, setFilterType] = useState<'ALL' | 'INFLOW' | 'OUTFLOW'>('ALL');

  const filtered = transactions.filter((tx) => {
    if (filterType === 'ALL') return true;
    return tx.type === filterType;
  });

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087] border border-[#00C087]/25">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Balina ve Büyük Cüzdan Transfer Radarı</span>
              <span className="rounded bg-[#00C087]/20 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">ANLIK AKIŞ</span>
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#848E9C]">
            $10.000.000 USD üzeri borsa giriş/çıkışları ve kurumsal saklama cüzdanı hareketleri.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 rounded-lg border border-[#222938] bg-[#0B0E14] p-1 text-xs font-mono">
          {(['ALL', 'INFLOW', 'OUTFLOW'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`rounded px-2.5 py-1 font-semibold transition-colors ${
                filterType === t ? 'bg-[#2962FF] text-white' : 'text-[#848E9C] hover:text-white'
              }`}
            >
              {t === 'ALL' ? 'TÜMÜ' : t === 'INFLOW' ? 'BORSA GİRİŞİ' : 'BORSA ÇIKIŞI'}
            </button>
          ))}
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
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#222938] bg-[#0D121A] p-3 hover:border-[#334055] transition-colors"
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
                    <span className="font-bold text-white text-sm">
                      {tx.amount.toLocaleString('tr-TR')} {tx.symbol}
                    </span>
                    <span className="text-[#CBD5E1]">
                      (${ (tx.amountUsd / 1_000_000).toFixed(2) }M)
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9px] font-bold uppercase ${
                        isInflow
                          ? 'bg-[#F6465D]/20 text-[#F6465D]'
                          : isOutflow
                          ? 'bg-[#00C087]/20 text-[#00C087]'
                          : 'bg-[#2962FF]/20 text-[#2962FF]'
                      }`}
                    >
                      {isInflow ? 'Borsa Girişi (Satış Riski)' : isOutflow ? 'Borsa Çıkışı (Birikim)' : 'Cüzdan Transferi'}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[11px] text-[#848E9C]">
                    <span className="text-[#CBD5E1]">{tx.fromName}</span>
                    <ArrowRight className="h-3 w-3 text-[#2962FF]" />
                    <span className="text-[#CBD5E1]">{tx.toName}</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-[11px] text-[#848E9C]">
                <div>{tx.timestamp}</div>
                <div className="text-[10px] text-[#2962FF] hover:underline cursor-pointer">
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
