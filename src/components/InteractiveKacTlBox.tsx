'use client';

import React, { useState } from 'react';
import { Copy, Check, Calculator, ArrowRightLeft } from 'lucide-react';

interface InteractiveKacTlBoxProps {
  initialAmount?: number;
  symbol: string;
  name: string;
  rateTry: number;
  rateUsd?: number;
}

export default function InteractiveKacTlBox({
  initialAmount = 1,
  symbol,
  name,
  rateTry,
  rateUsd
}: InteractiveKacTlBoxProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [copied, setCopied] = useState(false);

  const totalTry = (amount || 0) * rateTry;
  const totalUsd = rateUsd ? (amount || 0) * rateUsd : null;

  const handleCopy = () => {
    const textToCopy = `${amount} ${symbol} = ₺${totalTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetAmounts = [1, 5, 10, 50, 100, 500, 1000];

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 space-y-4 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#2962FF]" />
          <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider font-mono">
            Canlı Miktar Dönüştürücü
          </h3>
        </div>
        <span className="font-mono text-[11px] text-[var(--card-muted)]">
          1 {symbol} = ₺{rateTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
        </span>
      </div>

      {/* Input and Result Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left: Input */}
        <div className="md:col-span-5 space-y-1.5">
          <label className="text-xs font-semibold text-[var(--card-muted)] block">
            Çevrilecek Miktar ({symbol})
          </label>
          <div className="relative">
            <input
              type="number"
              step="any"
              min="0"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-lg font-black text-[var(--foreground)] outline-none focus:border-[#2962FF]"
              placeholder="Miktar girin..."
            />
            <span className="absolute right-3.5 top-3 font-mono text-xs font-bold text-[#2962FF] rounded bg-[#2962FF]/10 px-2 py-0.5 border border-[#2962FF]/20">
              {symbol}
            </span>
          </div>
        </div>

        {/* Center: Arrow */}
        <div className="md:col-span-1 flex justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-subtle)] border border-[var(--border)] text-[#2962FF]">
            <ArrowRightLeft className="h-4 w-4" />
          </div>
        </div>

        {/* Right: Calculated Result */}
        <div className="md:col-span-6 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] p-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-[var(--card-muted)]">
              {amount} {name} Karşılığı (TL)
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#00C087] mt-0.5">
              ₺{totalTry.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            {totalUsd && symbol !== 'USD' && (
              <div className="text-[11px] font-mono text-[var(--card-muted)] mt-0.5">
                Dolar Eşdeğeri: ${totalUsd.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
              </div>
            )}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] hover:text-[#2962FF] transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#00C087]" />
                <span className="text-[#00C087]">Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preset Amount Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        <span className="text-[11px] font-mono text-[var(--card-muted)]">Hızlı Seç:</span>
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`rounded-lg px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
              amount === preset
                ? 'bg-[#2962FF] text-white'
                : 'border border-[var(--border)] bg-[var(--card-subtle)] text-[var(--card-muted)] hover:text-[var(--foreground)] hover:border-[#2962FF]/50'
            }`}
          >
            {preset} {symbol}
          </button>
        ))}
      </div>
    </div>
  );
}
