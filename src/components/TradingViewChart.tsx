'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Activity, ExternalLink, Maximize2, RefreshCw } from 'lucide-react';

interface TradingViewChartProps {
  symbol: string;
  price: number;
  change24h: number;
  high24h?: number;
  low24h?: number;
}

export default function TradingViewChart({
  symbol,
  price,
  change24h,
  high24h = price * 1.02,
  low24h = price * 0.98,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeframe, setTimeframe] = useState<'15' | '60' | '240' | 'D'>('60');
  const [isDark, setIsDark] = useState(true);
  const [chartKey, setChartKey] = useState(0);

  // Clean symbol to standard format
  const cleanSymbol = symbol.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const tvSymbol = `BINANCE:${cleanSymbol}USDT`;

  // Detect current theme (dark/light)
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Initialize or re-render TradingView widget
  useEffect(() => {
    const containerId = `tv_chart_${cleanSymbol}_${timeframe}`;
    if (!containerRef.current) return;

    // Load official TradingView embed script dynamically if not present
    let script = document.getElementById('tradingview-widget-script') as HTMLScriptElement | null;
    
    const initWidget = () => {
      if ((window as any).TradingView && containerRef.current) {
        containerRef.current.innerHTML = `<div id="${containerId}" style="height: 480px; width: 100%;"></div>`;
        try {
          new (window as any).TradingView.widget({
            autosize: true,
            symbol: tvSymbol,
            interval: timeframe,
            timezone: 'Europe/Istanbul',
            theme: isDark ? 'dark' : 'light',
            style: '1',
            locale: 'tr',
            toolbar_bg: isDark ? '#0C111C' : '#FFFFFF',
            enable_publishing: false,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: containerId,
            save_image: false,
            studies: [
              'Volume@tv-basicstudies',
              'MASimple@tv-basicstudies'
            ],
            overrides: {
              'mainSeriesProperties.candleStyle.upColor': '#00C087',
              'mainSeriesProperties.candleStyle.downColor': '#F6465D',
              'mainSeriesProperties.candleStyle.drawWick': true,
              'mainSeriesProperties.candleStyle.drawBorder': true,
              'mainSeriesProperties.candleStyle.borderColor': '#374151',
              'mainSeriesProperties.candleStyle.borderUpColor': '#00C087',
              'mainSeriesProperties.candleStyle.borderDownColor': '#F6465D',
              'mainSeriesProperties.candleStyle.wickUpColor': '#00C087',
              'mainSeriesProperties.candleStyle.wickDownColor': '#F6465D'
            }
          });
        } catch (e) {
          console.error('TradingView widget initialization error:', e);
        }
      }
    };

    if (!(window as any).TradingView) {
      if (!script) {
        script = document.createElement('script');
        script.id = 'tradingview-widget-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = initWidget;
        document.head.appendChild(script);
      } else {
        script.addEventListener('load', initWidget);
      }
    } else {
      initWidget();
    }
  }, [cleanSymbol, tvSymbol, timeframe, isDark, chartKey]);

  return (
    <div className="panel-card overflow-hidden">
      {/* Chart Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--card)] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-sm font-black text-[var(--foreground)]">
            <span className="text-[#2962FF]">{cleanSymbol}</span>
            <span className="text-[10px] text-[var(--card-muted)]">/ USDT</span>
            <span className="rounded bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] px-2 py-0.5 text-[10px] font-mono font-bold ml-1">
              CANLI TİCK
            </span>
          </div>

          <div className="h-4 w-px bg-[var(--border)]" />

          {/* Timeframe Buttons */}
          <div className="flex items-center gap-1 font-mono text-xs">
            {[
              { id: '15', label: '15D' },
              { id: '60', label: '1S' },
              { id: '240', label: '4S' },
              { id: 'D', label: '1G' }
            ].map((tf) => (
              <button
                key={tf.id}
                onClick={() => setTimeframe(tf.id as any)}
                className={`rounded-md px-2.5 py-1 font-bold uppercase transition-all cursor-pointer ${
                  timeframe === tf.id
                    ? 'bg-[#2962FF] text-white shadow-xs'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real-Time Engine Badge & Reload */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setChartKey((k) => k + 1)}
            title="Grafiği Yenile"
            className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] px-2 py-1 text-[11px] font-mono text-[var(--card-muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <RefreshCw className="h-3 w-3" />
            <span className="hidden sm:inline">Yenile</span>
          </button>

          <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#00C087] rounded-lg bg-[#00C087]/10 px-2.5 py-1 border border-[#00C087]/25 font-bold">
            <span className="h-2 w-2 rounded-full bg-[#00C087] animate-pulse" />
            TRADINGVIEW ADVANCED MOTORU
          </span>
        </div>
      </div>

      {/* Real TradingView Canvas */}
      <div className="relative w-full bg-[var(--background)]" style={{ minHeight: '480px' }}>
        <div ref={containerRef} className="w-full h-[480px]" />
      </div>

      {/* Chart Footer Ticker Data */}
      <div className="flex flex-wrap items-center justify-between border-t border-[var(--border)] bg-[var(--card-subtle)] px-4 py-2 font-mono text-[11px] text-[var(--card-muted)]">
        <div className="flex items-center gap-4">
          <span>
            24s Yüksek:{' '}
            <strong className="text-[var(--foreground)]">
              ${high24h.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
            </strong>
          </span>
          <span>
            24s Düşük:{' '}
            <strong className="text-[var(--foreground)]">
              ${low24h.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}
            </strong>
          </span>
          <span>
            24s Değişim:{' '}
            <strong className={change24h >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}>
              {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
            </strong>
          </span>
        </div>
        <div className="text-[10px] hidden md:block">
          Grafik araç çubuğundan göstergeleri (RSI, MA, MACD) ekleyebilir veya tam ekrana geçebilirsiniz.
        </div>
      </div>
    </div>
  );
}
