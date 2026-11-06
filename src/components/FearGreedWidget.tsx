'use client';

import React, { useState } from 'react';
import { FEAR_AND_GREED } from '../lib/data';
import { Compass, TrendingDown, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function FearGreedWidget() {
  const fg = FEAR_AND_GREED;
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#222938] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F6465D]/15 text-[#F6465D] border border-[#F6465D]/25">
            <Compass className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Korku ve Açgözlülük İndeksi</h3>
        </div>
        <span className="font-mono text-[10px] text-[#00C087] flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C087] pulse-bull" />
          CANLI API (Alternative.me)
        </span>
      </div>

      {/* Main Score and Classification */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6465D]/20 to-[#F2C14E]/20 border border-[#F6465D]/40 text-3xl font-black font-mono text-[#F6465D]">
            {fg.value}
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{fg.classification}</span>
            </div>
            <div className="text-[11px] text-[#848E9C] mt-0.5">
              Piyasa duyarlılığı temkinli ve satış baskısı ağırlıklı
            </div>
          </div>
        </div>

        {/* Comparison History */}
        <div className="space-y-1.5 text-xs font-mono text-right">
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Dün:</span>
            <strong className="text-white">{fg.yesterday} (Nötr)</strong>
          </div>
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Geçen Hafta:</span>
            <strong className="text-[#F6465D]">{fg.lastWeek} (Korku)</strong>
          </div>
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Geçen Ay:</span>
            <strong className="text-[#00C087]">{fg.lastMonth} (Açgözlülük)</strong>
          </div>
        </div>
      </div>

      {/* Progress Bar with Indicator */}
      <div className="space-y-1">
        <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-[#F6465D] via-[#F2C14E] to-[#00C087] relative">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-4 w-2 rounded-full bg-white shadow-lg border-2 border-black"
            style={{ left: `${fg.value}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#848E9C]">
          <span>0 (Aşırı Korku)</span>
          <span>50 (Nötr)</span>
          <span>100 (Aşırı Açgözlülük)</span>
        </div>
      </div>

      {/* 30-Day History Toggle */}
      <div className="border-t border-[#222938] pt-3">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between text-xs text-[#2962FF] hover:underline font-mono"
        >
          <span>30 Günlük Geçmiş Veri Çizelgesi</span>
          {showHistory ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {showHistory && (
          <div className="mt-3 max-h-48 overflow-y-auto space-y-1 font-mono text-xs pr-1">
            {fg.history30Days.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-1 px-2 rounded bg-[#0B0E14] text-[11px]"
              >
                <span className="text-[#848E9C]">{item.date}</span>
                <span className={`font-bold ${item.value >= 60 ? 'text-[#00C087]' : item.value <= 35 ? 'text-[#F6465D]' : 'text-[#F2C14E]'}`}>
                  {item.value} ({item.classification})
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
