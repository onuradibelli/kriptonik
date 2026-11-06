'use client';

import React from 'react';

interface SparklineProps {
  change24h: number;
  width?: number;
  height?: number;
  data?: number[];
  className?: string;
}

export default function Sparkline({
  change24h,
  width = 96,
  height = 32,
  data,
  className = ''
}: SparklineProps) {
  const isPositive = change24h >= 0;
  const strokeColor = isPositive ? '#00C087' : '#F6465D';
  const fillGradientId = `grad-${isPositive ? 'bull' : 'bear'}-${Math.random().toString(36).substring(2, 7)}`;

  // If data is provided, normalize it. Otherwise generate realistic 10-point wave ending at change24h
  const points = data || generateSyntheticPath(change24h);

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const padding = 2;
  const effectiveHeight = height - padding * 2;
  const stepX = (width - padding * 2) / (points.length - 1);

  const coords = points.map((val, idx) => {
    const x = padding + idx * stepX;
    const y = padding + effectiveHeight - ((val - min) / range) * effectiveHeight;
    return { x, y };
  });

  const pathD = coords.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    // Simple smooth bezier interpolation
    const prev = coords[idx - 1];
    const cpX1 = prev.x + (curr.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (curr.x - prev.x) / 2;
    const cpY2 = curr.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${coords[coords.length - 1].x} ${height} L ${coords[0].x} ${height} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={fillGradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path d={areaD} fill={`url(#${fillGradientId})`} />

      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pulsing end dot */}
      <circle
        cx={coords[coords.length - 1].x}
        cy={coords[coords.length - 1].y}
        r="2.5"
        fill={strokeColor}
      />
    </svg>
  );
}

// Generate realistic 12-point trend based on 24h change
function generateSyntheticPath(change: number): number[] {
  const points = [100];
  let current = 100;
  const drift = change / 11;

  for (let i = 1; i <= 11; i++) {
    const noise = (Math.sin(i * 1.5) + Math.cos(i * 2.3)) * 0.8;
    current += drift + noise;
    points.push(current);
  }
  return points;
}
