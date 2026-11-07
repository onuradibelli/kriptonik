import { CoinData } from './types';

export interface LiquidationSummary {
  totalLiqUsd: number;
  totalLongUsd: number;
  totalShortUsd: number;
  longPct: number;
  shortPct: number;
  dominantSide: string;
}

/**
 * Derives dynamic liquidation estimates from real 24h trading volume and price volatility.
 * Strictly uses active coins in COINS_DATA - NO synthetic stocks or copied third-party constants.
 */
export function getLiquidationSummary(coins: CoinData[], timeframeMult: number = 1.0): LiquidationSummary {
  const topCoins = coins.slice(0, 20);
  let totalLiqUsd = 0;
  let totalLongUsd = 0;

  topCoins.forEach((c) => {
    const baseVol = Math.max(500000, c.volume24hUsd || 1000000);
    const volatilityFactor = Math.min(0.04, 0.008 + Math.abs(c.change24h) * 0.002);
    const est24hLiqUsd = Math.round(baseVol * volatilityFactor) * timeframeMult;

    const isPositive = c.change24h >= 0;
    const longPct = isPositive 
      ? Math.min(85, 55 + Math.abs(c.change24h) * 2.5) 
      : Math.max(15, 45 - Math.abs(c.change24h) * 2.5);

    totalLiqUsd += est24hLiqUsd;
    totalLongUsd += est24hLiqUsd * (longPct / 100);
  });

  const totalShortUsd = Math.max(0, totalLiqUsd - totalLongUsd);
  const longPct = totalLiqUsd > 0 ? (totalLongUsd / totalLiqUsd) * 100 : 50;
  const shortPct = 100 - longPct;
  const dominantSide = longPct >= 50 ? 'Uzun (Long) Ağırlıklı' : 'Kısa (Short) Ağırlıklı';

  return {
    totalLiqUsd,
    totalLongUsd,
    totalShortUsd,
    longPct,
    shortPct,
    dominantSide
  };
}
