'use client';

import React, { useState } from 'react';

interface CoinIconProps {
  symbol: string;
  name?: string;
  imageUrl?: string;
  size?: number; // pixel size e.g. 24, 32, 40
  className?: string;
}

export default function CoinIcon({
  symbol,
  name,
  imageUrl,
  size = 28,
  className = ''
}: CoinIconProps) {
  const [errorStage, setErrorStage] = useState<number>(0);
  const cleanSymbol = symbol.toUpperCase();
  const lowerSymbol = symbol.toLowerCase();

  // Multi-tier reliable CDN fallbacks:
  // 1. Primary: Direct CoinGecko imageUrl if provided
  // 2. Secondary: Cryptocurrency Icons CDN (jsdelivr SVG)
  // 3. Tertiary: CoinCap / CoinGecko known static pattern
  const fallbackUrls = [
    imageUrl,
    `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63539be1e3741faef35e2100e1ae6834d16752/svg/color/${lowerSymbol}.svg`,
    `https://assets.coincap.io/assets/icons/${lowerSymbol}@2x.png`
  ].filter(Boolean) as string[];

  const currentSrc = fallbackUrls[errorStage];

  if (!currentSrc || errorStage >= fallbackUrls.length) {
    // Elegant fallback avatar with crypto-colored gradient background
    return (
      <div
        style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}
        className={`flex items-center justify-center rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 text-white font-black text-[11px] border border-white/10 shadow-2xs select-none ${className}`}
        title={`${name || cleanSymbol} (${cleanSymbol})`}
      >
        {cleanSymbol.slice(0, 3)}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={`${name || cleanSymbol} (${cleanSymbol}) Logo`}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setErrorStage((prev) => prev + 1)}
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}
      className={`rounded-full object-cover shrink-0 select-none bg-slate-900/10 dark:bg-white/5 ${className}`}
    />
  );
}
