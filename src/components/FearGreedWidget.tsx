'use client';

import React, { useState } from 'react';
import { FEAR_AND_GREED } from '../lib/data';
import { Compass, TrendingDown, Clock, ChevronDown, ChevronUp, Activity, BarChart2 } from 'lucide-react';

export default function FearGreedWidget() {
  const fg = FEAR_AND_GREED;
  const [showHistory, setShowHistory] = useState(false);

  // Calculate gauge needle angle: 0 = -90 deg, 50 = 0 deg, 100 = 90 deg
  const needleAngle = -90 + (fg.value / 100) * 180;

  return (
    <div className="panel-card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F6465D]/15 text-[#F6465D] border border-[#F6465D]/25">
            <Compass className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-[var(--foreground)]">Korku ve Açgözlülük Göstergesi</h3>
        </div>
        <span className="font-mono text-[10px] text-[#00C087] flex items-center gap-1 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C087] pulse-bull" />
          CANLI VERİ
        </span>
      </div>

      {/* Speedometer Gauge Graphic + Score */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
        {/* SVG Half-Circle Speedometer */}
        <div className="relative flex flex-col items-center justify-center">
          <svg className="w-40 h-24 overflow-visible" viewBox="0 0 160 90">
            {/* Background Arc */}
            <path
              d="M 15 80 A 65 65 0 0 1 145 80"
              fill="none"
              stroke="var(--border)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Gradient Arc: Red to Yellow to Green */}
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F6465D" />
                <stop offset="50%" stopColor="#F2C14E" />
                <stop offset="100%" stopColor="#00C087" />
              </linearGradient>
            </defs>
            <path
              d="M 15 80 A 65 65 0 0 1 145 80"
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Needle */}
            <g transform={`translate(80, 80) rotate(${needleAngle})`}>
              <line x1="0" y1="0" x2="0" y2="-55" stroke="var(--foreground)" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="0" cy="0" r="6" fill="#2962FF" stroke="var(--background)" strokeWidth="2" />
            </g>
          </svg>

          {/* Value Display */}
          <div className="text-center mt-[-10px]">
            <div className="font-mono text-3xl font-black text-[#F6465D]">
              {fg.value}
            </div>
            <div className="text-xs font-bold text-[var(--foreground)]">{fg.classification}</div>
          </div>
        </div>

        {/* Historical Context Comparison */}
        <div className="space-y-2 text-xs font-mono w-full sm:w-auto">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-1.5 text-[var(--card-muted)]">
            <span>Dün:</span>
            <strong className="text-[var(--foreground)]">{fg.yesterday} (Nötr)</strong>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-1.5 text-[var(--card-muted)]">
            <span>Geçen Hafta:</span>
            <strong className="text-[#F6465D]">{fg.lastWeek} (Korku)</strong>
          </div>
          <div className="flex items-center justify-between gap-4 text-[var(--card-muted)]">
            <span>Geçen Ay:</span>
            <strong className="text-[#00C087]">{fg.lastMonth} (Açgözlülük)</strong>
          </div>
        </div>
      </div>

      {/* Visual Sentiment Trajectory Trend Mini-Chart (Last 14 days) */}
      <div className="space-y-1.5 pt-1 border-t border-[var(--border)]">
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--card-muted)]">
          <span className="flex items-center gap-1">
            <BarChart2 className="h-3.5 w-3.5 text-[#2962FF]" />
            <span>Son 14 Günlük Duyarlılık Trendi</span>
          </span>
          <span className="text-[10px]">28 → 64</span>
        </div>

        {/* Mini Bars */}
        <div className="h-10 w-full flex items-end gap-1 rounded bg-[var(--background)] p-1.5 border border-[var(--border)]">
          {fg.history30Days.slice(0, 14).reverse().map((day, idx) => {
            const heightPercent = Math.max(15, day.value);
            const isGreen = day.value >= 55;
            const isYellow = day.value >= 45 && day.value < 55;
            const isRed = day.value < 45;
            return (
              <div
                key={idx}
                title={`${day.date}: ${day.value} (${day.classification})`}
                className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer"
              >
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full rounded-t transition-all ${
                    isGreen ? 'bg-[#00C087]' : isYellow ? 'bg-[#F2C14E]' : 'bg-[#F6465D]'
                  } group-hover:opacity-80`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 30-Day History Toggle Accordion */}
      <div className="border-t border-[var(--border)] pt-2">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between text-xs text-[#2962FF] hover:underline font-mono font-semibold"
        >
          <span>{showHistory ? 'Geçmiş Tabloyu Gizle' : 'Tüm 30 Günlük Geçmişi Gör'}</span>
          {showHistory ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        {showHistory && (
          <div className="mt-3 max-h-48 overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--background)] p-2 divide-y divide-[var(--border)] text-xs font-mono">
            {fg.history30Days.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5 px-2 hover:bg-[var(--hover-bg)]">
                <span className="text-[var(--card-muted)]">{item.date}</span>
                <span className={`font-bold ${item.value >= 55 ? 'text-[#00C087]' : item.value <= 35 ? 'text-[#F6465D]' : 'text-[#F2C14E]'}`}>
                  {item.value} / 100 ({item.classification})
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
