import React from 'react';
import { FEAR_AND_GREED } from '../lib/data';
import { Compass, TrendingUp, TrendingDown } from 'lucide-react';

export default function FearGreedWidget() {
  const fg = FEAR_AND_GREED;

  return (
    <div className="panel-card p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-[#222938] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00C087]/15 text-[#00C087] border border-[#00C087]/25">
            <Compass className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Korku ve Açgözlülük İndeksi</h3>
        </div>
        <span className="font-mono text-[10px] text-[#848E9C]">GÜNLÜK HESAPLAMA</span>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Big Score Display */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C087]/20 to-[#2962FF]/20 border border-[#00C087]/30 text-2xl font-black font-mono text-[#00C087]">
            {fg.value}
          </div>
          <div>
            <div className="text-xs font-semibold text-white">{fg.classification}</div>
            <div className="text-[11px] text-[#848E9C] mt-0.5">Piyasa duyarlılığı aşırı iyimser seviyede</div>
          </div>
        </div>

        {/* Historical Comparisons */}
        <div className="space-y-1.5 text-xs font-mono text-right">
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Dün:</span>
            <strong className="text-white">{fg.yesterday}</strong>
          </div>
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Geçen Hafta:</span>
            <strong className="text-white">{fg.lastWeek}</strong>
          </div>
          <div className="flex items-center justify-end gap-2 text-[#848E9C]">
            <span>Geçen Ay:</span>
            <strong className="text-white">{fg.lastMonth}</strong>
          </div>
        </div>
      </div>

      {/* Progress gradient bar */}
      <div className="space-y-1">
        <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#F6465D] via-[#F2C14E] to-[#00C087] relative">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-3.5 w-1.5 rounded-full bg-white shadow-md border border-black"
            style={{ left: `${fg.value}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#848E9C]">
          <span>0 (Aşırı Korku)</span>
          <span>50 (Nötr)</span>
          <span>100 (Aşırı Açgözlülük)</span>
        </div>
      </div>
    </div>
  );
}
