'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createChart, CandlestickSeries, AreaSeries, ColorType } from 'lightweight-charts';
import { BarChart2, CandlestickChart, Activity, RefreshCw } from 'lucide-react';

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
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartType, setChartType] = useState<'candle' | 'area'>('candle');
  const [timeframe, setTimeframe] = useState<'15m' | '1h' | '4h' | '1d'>('1h');
  const [isDark, setIsDark] = useState(true);

  // Detect current theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Generate synthetic but realistic historical candle data around the current price
  const generateData = () => {
    const data = [];
    const candleCount = 60;
    const now = Math.floor(Date.now() / 1000);
    const stepSeconds =
      timeframe === '15m' ? 900 : timeframe === '1h' ? 3600 : timeframe === '4h' ? 14400 : 86400;

    let base = price * (1 - (change24h / 100) * 0.8);
    const volatility = price * 0.008;

    for (let i = candleCount; i >= 0; i--) {
      const time = (now - i * stepSeconds) as any;
      const progress = (candleCount - i) / candleCount;
      const target = base + (price - base) * progress;
      const delta = (Math.sin(i * 0.5) * volatility + (Math.random() - 0.48) * volatility);
      
      const open = target + delta;
      const close = i === 0 ? price : open + (Math.random() - 0.49) * volatility * 1.2;
      const high = Math.max(open, close) + Math.random() * volatility * 0.8;
      const low = Math.min(open, close) - Math.random() * volatility * 0.8;

      data.push({
        time,
        open,
        high,
        low,
        close,
        value: close, // For area series
      });
    }

    return data;
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const container = chartContainerRef.current;
    container.innerHTML = '';

    const backgroundColor = isDark ? '#151A23' : '#FFFFFF';
    const textColor = isDark ? '#848E9C' : '#64748B';
    const gridColor = isDark ? '#222938' : '#F1F5F9';

    const chart = createChart(container, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
        fontSize: 11,
        fontFamily: 'monospace',
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      width: container.clientWidth || 600,
      height: 380,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: gridColor,
      },
      rightPriceScale: {
        borderColor: gridColor,
      },
      crosshair: {
        vertLine: { color: '#2962FF', width: 1, style: 2 },
        horzLine: { color: '#2962FF', width: 1, style: 2 },
      },
    });

    const data = generateData();

    if (chartType === 'candle') {
      const series = chart.addSeries(CandlestickSeries, {
        upColor: '#00C087',
        downColor: '#F6465D',
        borderVisible: false,
        wickUpColor: '#00C087',
        wickDownColor: '#F6465D',
      });
      series.setData(data as any);
    } else {
      const series = chart.addSeries(AreaSeries, {
        topColor: 'rgba(41, 98, 255, 0.4)',
        bottomColor: 'rgba(41, 98, 255, 0.0)',
        lineColor: '#2962FF',
        lineWidth: 2,
      });
      series.setData(data as any);
    }

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (container) {
        chart.applyOptions({ width: container.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [symbol, price, chartType, timeframe, isDark]);

  return (
    <div className="panel-card overflow-hidden">
      {/* Chart Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--card)] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-sm font-black text-[var(--foreground)]">
            <span className="text-[#2962FF]">{symbol}</span>
            <span className="text-[10px] text-[var(--card-muted)]">/ USDT</span>
          </div>

          <div className="h-4 w-px bg-[var(--border)]" />

          {/* Timeframe Buttons */}
          <div className="flex items-center gap-1 font-mono text-xs">
            {(['15m', '1h', '4h', '1d'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`rounded-md px-2 py-0.5 font-bold uppercase transition-colors ${
                  timeframe === tf
                    ? 'bg-[#2962FF] text-white'
                    : 'text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Type Toggle & Status */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-subtle)] p-0.5">
            <button
              onClick={() => setChartType('candle')}
              title="Mum Grafiği"
              className={`rounded-md p-1.5 transition-colors ${
                chartType === 'candle'
                  ? 'bg-[#2962FF] text-white'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <CandlestickChart className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setChartType('area')}
              title="Çizgi / Alan Grafiği"
              className={`rounded-md p-1.5 transition-colors ${
                chartType === 'area'
                  ? 'bg-[#2962FF] text-white'
                  : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
            </button>
          </div>

          <span className="flex items-center gap-1 font-mono text-[10px] text-[#00C087] rounded bg-[#00C087]/10 px-2 py-1 border border-[#00C087]/20 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C087] animate-pulse" />
            TRADINGVIEW MOTORU
          </span>
        </div>
      </div>

      {/* Chart Canvas Container */}
      <div className="relative w-full" style={{ minHeight: '380px' }}>
        <div ref={chartContainerRef} className="w-full" />
      </div>

      {/* Chart Footer Ticker Data */}
      <div className="flex flex-wrap items-center justify-between border-t border-[var(--border)] bg-[var(--card-subtle)] px-4 py-2 font-mono text-[11px] text-[var(--card-muted)]">
        <div className="flex items-center gap-4">
          <span>24s Yüksek: <strong className="text-[var(--foreground)]">${high24h.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}</strong></span>
          <span>24s Düşük: <strong className="text-[var(--foreground)]">${low24h.toLocaleString('tr-TR', { maximumFractionDigits: 2 })}</strong></span>
        </div>
        <div className="text-[10px]">
          İnteraktif yakınlaştırma için fare tekerleğini, kaydırma için sürüklemeyi kullanın.
        </div>
      </div>
    </div>
  );
}
