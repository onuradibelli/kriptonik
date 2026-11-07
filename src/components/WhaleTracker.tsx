'use client';

import React, { useState, useEffect } from 'react';
import { WhaleTransaction } from '../lib/types';
import { useTickers } from '../context/TickerContext';
import { formatUsd, formatLargeUsd } from '../lib/format';
import { ShieldAlert, ArrowRight, Volume2, VolumeX, Copy, Check, ExternalLink, Activity } from 'lucide-react';

interface WhaleTrackerProps {
  transactions: WhaleTransaction[];
}

interface DynamicWhaleTx {
  id: string;
  hash: string;
  fullHash: string;
  symbol: string;
  amount: number;
  amountUsd: number;
  fromName: string;
  toName: string;
  timestamp: string;
  secondsAgo: number;
}

export default function WhaleTracker({ transactions }: WhaleTrackerProps) {
  const { tickers } = useTickers();
  const btcPrice = tickers['BTCUSDT']?.price || 76000;

  const [minAmountFilter, setMinAmountFilter] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  // Live dynamic transaction feed starting with verified historical records
  const [liveList, setLiveList] = useState<DynamicWhaleTx[]>(() =>
    transactions.map((t, idx) => ({
      id: t.id,
      hash: t.hash,
      fullHash: t.hash.length > 20 ? t.hash : `mempool-${t.id}`,
      symbol: t.symbol,
      amount: t.amount,
      amountUsd: t.amountUsd,
      fromName: 'Bilinmeyen Cüzdan',
      toName: 'Bilinmeyen Cüzdan',
      timestamp: t.timestamp,
      secondsAgo: (idx + 1) * 120
    }))
  );

  // Audio synthesizer for large transaction ping
  const playAlert = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio safe
    }
  };

  // Real on-chain Bitcoin mempool transaction fetcher
  useEffect(() => {
    let isSubscribed = true;

    const fetchRealMempoolTx = async () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
      try {
        const res = await fetch('https://mempool.space/api/mempool/recent', {
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && isSubscribed && data.length > 0) {
          const currentBtcPrice = btcPrice > 1000 ? btcPrice : 76000;
          const newEntries: DynamicWhaleTx[] = [];

          for (const item of data.slice(0, 5)) {
            const btcAmount = item.value ? item.value / 1e8 : 0;
            const usdVal = btcAmount * currentBtcPrice;
            if (usdVal < 50000) continue; // Only surface significant transfers > $50K

            const shortHash = item.txid ? `${item.txid.slice(0, 6)}...${item.txid.slice(-4)}` : 'Mempool';

            newEntries.push({
              id: item.txid || `btc-${Date.now()}`,
              hash: shortHash,
              fullHash: item.txid || '',
              symbol: 'BTC',
              amount: parseFloat(btcAmount.toFixed(2)),
              amountUsd: Math.round(usdVal),
              fromName: 'Bilinmeyen Cüzdan',
              toName: 'Bilinmeyen Cüzdan',
              timestamp: 'Az önce',
              secondsAgo: 0
            });
          }

          if (newEntries.length > 0) {
            setLiveList((prev) => {
              const existingIds = new Set(prev.map((p) => p.id));
              const fresh = newEntries.filter((e) => !existingIds.has(e.id));
              if (fresh.length > 0 && soundEnabled) {
                playAlert();
              }
              return [...fresh, ...prev].slice(0, 30);
            });
          }
        }
      } catch {
        // Fallback gracefully without fake data
      }
    };

    fetchRealMempoolTx();
    const interval = setInterval(fetchRealMempoolTx, 15000);

    // Aging timer
    const ageTimer = setInterval(() => {
      setLiveList((prev) =>
        prev.map((t) => ({ ...t, secondsAgo: t.secondsAgo + 1 }))
      );
    }, 1000);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
      clearInterval(ageTimer);
    };
  }, [soundEnabled, btcPrice]);

  const handleCopyHash = (hash: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hash);
      setCopiedHash(hash);
      setTimeout(() => setCopiedHash(null), 2000);
    }
  };

  const filtered = liveList.filter((tx) => {
    if (minAmountFilter > 0 && tx.amountUsd < minAmountFilter) return false;
    return true;
  });

  const totalVolumeDetected = liveList.reduce((acc, t) => acc + t.amountUsd, 0);
  const totalBtcDetected = liveList.reduce((acc, t) => acc + t.amount, 0);

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
                <span>Büyük Transfer Radarı (Zincir Üstü Mempool)</span>
                <span className="rounded bg-[#00E699]/15 text-[#00E699] px-2 py-0.5 text-xs font-mono font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E699] pulse-bull" />
                  MEMPOOL CANLI AKIŞ
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-1 text-xs text-[var(--card-muted)]">
            Mempool.space açık Bitcoin düğümleri üzerinden canlı yakalanan onaysız (0-konfirmasyon) büyük transferler.
          </p>
        </div>

        {/* Audio Alert Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`rounded-xl border p-2 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
              soundEnabled
                ? 'bg-[#00E699]/15 border-[#00E699]/40 text-[#00E699]'
                : 'border-[var(--border)] bg-[var(--background)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
            }`}
            title={soundEnabled ? 'Sesli uyarıyı kapat' : 'Sesli uyarıyı aç'}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <span>{soundEnabled ? 'Ses Açık' : 'Ses Kapalı'}</span>
          </button>
        </div>
      </div>

      {/* 2. Honest Radar KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 space-y-1">
          <span className="text-[var(--card-muted)] font-mono">İzlenen Büyük Transfer Hacmi</span>
          <div className="text-lg font-black font-mono text-[var(--foreground)]">
            {formatLargeUsd(totalVolumeDetected)}
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">Son 30 işlem toplamı</div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 space-y-1">
          <span className="text-[var(--card-muted)] font-mono">Toplam Bitcoin Miktarı</span>
          <div className="text-lg font-black font-mono text-[#F0B90B]">
            {totalBtcDetected.toFixed(1)} BTC
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">Canlı BTC kuru: {formatUsd(btcPrice)}</div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 space-y-1">
          <span className="text-[var(--card-muted)] font-mono">Veri Kaynağı & Doğrulama</span>
          <div className="text-sm font-black font-mono text-[#00E699] flex items-center gap-1.5">
            <Activity className="h-4 w-4" />
            <span>Mempool.space API</span>
          </div>
          <div className="text-[11px] text-[var(--card-muted)]">
            0-Konfirmasyon Onaysız Havuz
          </div>
        </div>
      </div>

      {/* 3. Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-[var(--card-muted)] font-bold">Minimum Tutar:</span>
          {[0, 100000, 250000, 500000, 1000000].map((amt) => (
            <button
              key={amt}
              onClick={() => setMinAmountFilter(amt)}
              className={`rounded-lg px-2.5 py-1 font-mono font-bold transition-all cursor-pointer ${
                minAmountFilter === amt
                  ? 'bg-[#2962FF] text-white shadow-xs'
                  : 'border border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {amt === 0 ? 'Tümü' : `>${formatLargeUsd(amt)}`}
            </button>
          ))}
        </div>

        <div className="text-[11px] font-mono text-[var(--card-muted)]">
          Gösterilen: <strong className="text-[var(--foreground)]">{filtered.length}</strong> / {liveList.length} İşlem
        </div>
      </div>

      {/* 4. Live Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--border)] text-[var(--card-muted)] font-mono text-[11px]">
              <th className="pb-2.5 font-bold">Zaman</th>
              <th className="pb-2.5 font-bold">Varlık</th>
              <th className="pb-2.5 font-bold">Miktar / Değer</th>
              <th className="pb-2.5 font-bold">Transfer Akışı</th>
              <th className="pb-2.5 font-bold">İşlem Özeti (Hash)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] font-mono">
            {filtered.map((tx) => (
              <tr key={tx.id} className="hover:bg-[var(--card-subtle)] transition-colors">
                <td className="py-3 text-[var(--card-muted)] text-[11px]">
                  {tx.secondsAgo < 60 ? `${tx.secondsAgo} sn önce` : `${Math.floor(tx.secondsAgo / 60)} dk önce`}
                </td>
                <td className="py-3 font-bold text-[var(--foreground)]">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0B90B]/20 text-[#F0B90B] text-[10px] font-black">
                      ₿
                    </span>
                    <span>{tx.symbol}</span>
                  </div>
                </td>
                <td className="py-3">
                  <div className="font-black text-[var(--foreground)]">
                    {tx.amount.toLocaleString('tr-TR')} {tx.symbol}
                  </div>
                  <div className="text-[11px] text-[var(--card-muted)]">
                    ≈ {formatLargeUsd(tx.amountUsd)}
                  </div>
                </td>
                <td className="py-3 text-[11px]">
                  <div className="flex items-center gap-1.5 text-[var(--card-muted)]">
                    <span>{tx.fromName}</span>
                    <ArrowRight className="h-3 w-3 text-[var(--card-muted)]" />
                    <span>{tx.toName}</span>
                  </div>
                  <span className="text-[10px] text-amber-500/80">0-Konfirmasyon Mempool</span>
                </td>
                <td className="py-3 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[var(--card-muted)]">{tx.hash}</span>
                    {tx.fullHash && (
                      <a
                        href={`https://mempool.space/tx/${tx.fullHash}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#2962FF] hover:underline flex items-center gap-0.5"
                        title="Mempool.space üzerinde görüntüle"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <button
                      onClick={() => handleCopyHash(tx.fullHash || tx.hash)}
                      className="text-[var(--card-muted)] hover:text-[var(--foreground)] p-1 rounded"
                      title="TxID kopyala"
                    >
                      {copiedHash === (tx.fullHash || tx.hash) ? (
                        <Check className="h-3 w-3 text-[#00E699]" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
