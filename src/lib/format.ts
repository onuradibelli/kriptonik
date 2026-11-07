/**
 * Standardized Crypto & Financial Formatting Utilities
 * Prevents $0.0000 truncation for micro-cap & meme tokens (PEPE, SHIB, BONK)
 */

export function formatUsd(price: number | undefined | null): string {
  if (price === undefined || price === null || isNaN(price)) return '$0.00';
  if (price === 0) return '$0.00';

  if (price >= 1000) {
    return '$' + price.toLocaleString('tr-TR', { maximumFractionDigits: 2 });
  }
  if (price >= 1) {
    return '$' + price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (price >= 0.1) {
    return '$' + price.toFixed(4);
  }
  if (price >= 0.001) {
    return '$' + price.toFixed(5);
  }
  if (price >= 0.00001) {
    return '$' + price.toFixed(7);
  }
  return '$' + price.toFixed(9);
}

export function formatTry(priceInTry: number | undefined | null): string {
  if (priceInTry === undefined || priceInTry === null || isNaN(priceInTry)) return '₺0,00';
  if (priceInTry === 0) return '₺0,00';

  if (priceInTry >= 1000) {
    return '₺' + priceInTry.toLocaleString('tr-TR', { maximumFractionDigits: 2 });
  }
  if (priceInTry >= 1) {
    return '₺' + priceInTry.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (priceInTry >= 0.01) {
    return '₺' + priceInTry.toFixed(4);
  }
  if (priceInTry >= 0.0001) {
    return '₺' + priceInTry.toFixed(6);
  }
  return '₺' + priceInTry.toFixed(8);
}

export function formatLargeUsd(val: number | undefined | null): string {
  if (val === undefined || val === null || isNaN(val)) return '$0';
  const abs = Math.abs(val);
  const sign = val < 0 ? '-' : '';

  if (abs >= 1e12) return `${sign}$${(abs / 1e12).toFixed(2)}T`;
  if (abs >= 1e9) return `${sign}$${(abs / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(2)}M`;
  if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(1)}K`;
  return `${sign}$${abs.toFixed(0)}`;
}

export function formatPercent(pct: number | undefined | null): string {
  if (pct === undefined || pct === null || isNaN(pct)) return '%0.00';
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(2)}%`;
}
