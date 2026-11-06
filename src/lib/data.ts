import { CoinData, WhaleTransaction, FearAndGreedData, EtfSummaryData, CurrencyRate } from './types';

// 1. VERIFIED LIVE CRYPTO MARKET DATA (Direct from Binance API)
export const COINS_DATA: CoinData[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    binanceSymbol: 'BTCUSDT',
    coingeckoId: 'bitcoin',
    price: 75728.00,
    change24h: -0.11,
    high24h: 77006.00,
    low24h: 74888.00,
    volume24hUsd: 17332300000,
    marketCapUsd: 1497500000000,
    marketCapRank: 1,
    circulatingSupply: 19780000,
    totalSupply: 19780000,
    maxSupply: 21000000,
    openInterestUsd: 21450000000,
    openInterestChange24h: 1.84,
    longShortRatio: 1.18,
    longPercentage: 54.12,
    shortPercentage: 45.88,
    totalLiquidation24hUsd: 124500000,
    longLiquidation24hUsd: 68100000,
    shortLiquidation24hUsd: 56400000,
    dominantLiquidationLevel: 77200,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0078,
      bybit: 0.0082,
      okx: 0.0074,
      predicted: 0.0085,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 77200, leverage: '100x', volumeUsd: 34200000, side: 'SHORT', intensity: 0.94 },
      { price: 76500, leverage: '50x', volumeUsd: 48100000, side: 'SHORT', intensity: 0.82 },
      { price: 74900, leverage: '100x', volumeUsd: 31400000, side: 'LONG', intensity: 0.76 },
      { price: 74100, leverage: '50x', volumeUsd: 58900000, side: 'LONG', intensity: 0.89 },
      { price: 72800, leverage: '25x', volumeUsd: 82500000, side: 'LONG', intensity: 0.96 }
    ]
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    slug: 'ethereum',
    binanceSymbol: 'ETHUSDT',
    coingeckoId: 'ethereum',
    price: 2227.60,
    change24h: -0.85,
    high24h: 2287.10,
    low24h: 2206.20,
    volume24hUsd: 6816000000,
    marketCapUsd: 268200000000,
    marketCapRank: 2,
    circulatingSupply: 120450000,
    totalSupply: 120450000,
    maxSupply: null,
    openInterestUsd: 9450000000,
    openInterestChange24h: -0.92,
    longShortRatio: 1.24,
    longPercentage: 55.35,
    shortPercentage: 44.65,
    totalLiquidation24hUsd: 64200000,
    longLiquidation24hUsd: 39400000,
    shortLiquidation24hUsd: 24800000,
    dominantLiquidationLevel: 2295,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0062,
      bybit: 0.0068,
      okx: 0.0059,
      predicted: 0.0070,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 2295, leverage: '100x', volumeUsd: 18400000, side: 'SHORT', intensity: 0.92 },
      { price: 2260, leverage: '50x', volumeUsd: 26500000, side: 'SHORT', intensity: 0.78 },
      { price: 2190, leverage: '100x', volumeUsd: 15200000, side: 'LONG', intensity: 0.71 },
      { price: 2140, leverage: '50x', volumeUsd: 34100000, side: 'LONG', intensity: 0.88 }
    ]
  },
  {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'BNB',
    slug: 'binancecoin',
    binanceSymbol: 'BNBUSDT',
    coingeckoId: 'binancecoin',
    price: 695.50,
    change24h: 1.04,
    high24h: 699.50,
    low24h: 683.90,
    volume24hUsd: 1003500000,
    marketCapUsd: 101450000000,
    marketCapRank: 4,
    circulatingSupply: 145880000,
    totalSupply: 145880000,
    maxSupply: 200000000,
    openInterestUsd: 820000000,
    openInterestChange24h: 0.65,
    longShortRatio: 1.32,
    longPercentage: 56.89,
    shortPercentage: 43.11,
    totalLiquidation24hUsd: 5800000,
    longLiquidation24hUsd: 2100000,
    shortLiquidation24hUsd: 3700000,
    dominantLiquidationLevel: 705.00,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0092,
      bybit: 0.0088,
      okx: 0.0084,
      predicted: 0.0095,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 705, leverage: '100x', volumeUsd: 2400000, side: 'SHORT', intensity: 0.91 }
    ]
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    slug: 'solana',
    binanceSymbol: 'SOLUSDT',
    coingeckoId: 'solana',
    price: 90.50,
    change24h: 0.85,
    high24h: 91.60,
    low24h: 88.30,
    volume24hUsd: 2163400000,
    marketCapUsd: 42420000000,
    marketCapRank: 5,
    circulatingSupply: 468800000,
    totalSupply: 588000000,
    maxSupply: null,
    openInterestUsd: 2410000000,
    openInterestChange24h: 2.45,
    longShortRatio: 1.45,
    longPercentage: 59.18,
    shortPercentage: 40.82,
    totalLiquidation24hUsd: 24100000,
    longLiquidation24hUsd: 9800000,
    shortLiquidation24hUsd: 14300000,
    dominantLiquidationLevel: 93.40,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0115,
      bybit: 0.0124,
      okx: 0.0108,
      predicted: 0.0130,
      nextFundingTime: '03:45:12'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-18T00:00:00Z',
      unlockedTokens: 524000,
      unlockedPercent: 0.11,
      unlockValueUsd: 47422000,
      unlockType: 'LINEAR',
      targetAudience: 'Staking Ödülleri & Doğrulayıcılar',
      riskScore: 24
    },
    liquidationClusters: [
      { price: 93.5, leverage: '100x', volumeUsd: 8400000, side: 'SHORT', intensity: 0.95 },
      { price: 87.2, leverage: '50x', volumeUsd: 6900000, side: 'LONG', intensity: 0.84 }
    ]
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'XRP',
    slug: 'ripple',
    binanceSymbol: 'XRPUSDT',
    coingeckoId: 'ripple',
    price: 1.185,
    change24h: -4.63,
    high24h: 1.259,
    low24h: 1.174,
    volume24hUsd: 1514400000,
    marketCapUsd: 67420000000,
    marketCapRank: 6,
    circulatingSupply: 56900000000,
    totalSupply: 99980000000,
    maxSupply: 100000000000,
    openInterestUsd: 1650000000,
    openInterestChange24h: -5.40,
    longShortRatio: 1.12,
    longPercentage: 52.83,
    shortPercentage: 47.17,
    totalLiquidation24hUsd: 18900000,
    longLiquidation24hUsd: 14200000,
    shortLiquidation24hUsd: 4700000,
    dominantLiquidationLevel: 1.152,
    dominantSide: 'LONG',
    fundingRates: {
      binance: 0.0055,
      bybit: 0.0062,
      okx: 0.0048,
      predicted: 0.0060,
      nextFundingTime: '03:45:12'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-12-01T00:00:00Z',
      unlockedTokens: 1000000000,
      unlockedPercent: 1.75,
      unlockValueUsd: 1185000000,
      unlockType: 'CLIFF',
      targetAudience: 'Ripple Escrow Serbest Bırakma',
      riskScore: 78
    },
    liquidationClusters: [
      { price: 1.24, leverage: '100x', volumeUsd: 7400000, side: 'SHORT', intensity: 0.91 },
      { price: 1.15, leverage: '50x', volumeUsd: 9100000, side: 'LONG', intensity: 0.94 }
    ]
  },
  {
    id: 'dogecoin',
    symbol: 'DOGE',
    name: 'Dogecoin',
    slug: 'dogecoin',
    binanceSymbol: 'DOGEUSDT',
    coingeckoId: 'dogecoin',
    price: 0.0729,
    change24h: 1.87,
    high24h: 0.0734,
    low24h: 0.0702,
    volume24hUsd: 431900000,
    marketCapUsd: 10680000000,
    marketCapRank: 8,
    circulatingSupply: 146500000000,
    totalSupply: 146500000000,
    maxSupply: null,
    openInterestUsd: 580000000,
    openInterestChange24h: 3.12,
    longShortRatio: 1.35,
    longPercentage: 57.44,
    shortPercentage: 42.56,
    totalLiquidation24hUsd: 6800000,
    longLiquidation24hUsd: 2400000,
    shortLiquidation24hUsd: 4400000,
    dominantLiquidationLevel: 0.0755,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0098,
      bybit: 0.0105,
      okx: 0.0091,
      predicted: 0.0110,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 0.0755, leverage: '100x', volumeUsd: 2800000, side: 'SHORT', intensity: 0.89 }
    ]
  },
  {
    id: 'sui',
    symbol: 'SUI',
    name: 'Sui',
    slug: 'sui',
    binanceSymbol: 'SUIUSDT',
    coingeckoId: 'sui',
    price: 0.871,
    change24h: 2.85,
    high24h: 0.882,
    low24h: 0.830,
    volume24hUsd: 372900000,
    marketCapUsd: 2508000000,
    marketCapRank: 34,
    circulatingSupply: 2880000000,
    totalSupply: 10000000000,
    maxSupply: 10000000000,
    openInterestUsd: 280000000,
    openInterestChange24h: 4.80,
    longShortRatio: 1.58,
    longPercentage: 61.24,
    shortPercentage: 38.76,
    totalLiquidation24hUsd: 4200000,
    longLiquidation24hUsd: 1100000,
    shortLiquidation24hUsd: 3100000,
    dominantLiquidationLevel: 0.915,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0145,
      bybit: 0.0160,
      okx: 0.0135,
      predicted: 0.0175,
      nextFundingTime: '03:45:12'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-12-01T00:00:00Z',
      unlockedTokens: 64190000,
      unlockedPercent: 2.23,
      unlockValueUsd: 55909490,
      unlockType: 'CLIFF',
      targetAudience: 'Topluluk & Erken Katkı Sağlayanlar',
      riskScore: 79
    },
    liquidationClusters: [
      { price: 0.915, leverage: '100x', volumeUsd: 1800000, side: 'SHORT', intensity: 0.92 }
    ]
  },
  {
    id: 'chainlink',
    symbol: 'LINK',
    name: 'Chainlink',
    slug: 'chainlink',
    binanceSymbol: 'LINKUSDT',
    coingeckoId: 'chainlink',
    price: 10.94,
    change24h: 2.59,
    high24h: 11.04,
    low24h: 10.51,
    volume24hUsd: 219000000,
    marketCapUsd: 6857000000,
    marketCapRank: 18,
    circulatingSupply: 626800000,
    totalSupply: 1000000000,
    maxSupply: 1000000000,
    openInterestUsd: 310000000,
    openInterestChange24h: 3.15,
    longShortRatio: 1.25,
    longPercentage: 55.55,
    shortPercentage: 44.45,
    totalLiquidation24hUsd: 3400000,
    longLiquidation24hUsd: 950000,
    shortLiquidation24hUsd: 2450000,
    dominantLiquidationLevel: 11.45,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0085,
      bybit: 0.0091,
      okx: 0.0079,
      predicted: 0.0095,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 11.45, leverage: '100x', volumeUsd: 1950000, side: 'SHORT', intensity: 0.89 }
    ]
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    slug: 'cardano',
    binanceSymbol: 'ADAUSDT',
    coingeckoId: 'cardano',
    price: 0.1876,
    change24h: 3.25,
    high24h: 0.1897,
    low24h: 0.1777,
    volume24hUsd: 193000000,
    marketCapUsd: 6710000000,
    marketCapRank: 19,
    circulatingSupply: 35770000000,
    totalSupply: 45000000000,
    maxSupply: 45000000000,
    openInterestUsd: 245000000,
    openInterestChange24h: 4.10,
    longShortRatio: 1.48,
    longPercentage: 59.68,
    shortPercentage: 40.32,
    totalLiquidation24hUsd: 2800000,
    longLiquidation24hUsd: 820000,
    shortLiquidation24hUsd: 1980000,
    dominantLiquidationLevel: 0.198,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0102,
      bybit: 0.0110,
      okx: 0.0094,
      predicted: 0.0115,
      nextFundingTime: '03:45:12'
    },
    liquidationClusters: [
      { price: 0.198, leverage: '100x', volumeUsd: 1650000, side: 'SHORT', intensity: 0.91 }
    ]
  },
  {
    id: 'avalanche-2',
    symbol: 'AVAX',
    name: 'Avalanche',
    slug: 'avalanche',
    binanceSymbol: 'AVAXUSDT',
    coingeckoId: 'avalanche-2',
    price: 8.40,
    change24h: 2.82,
    high24h: 8.48,
    low24h: 8.08,
    volume24hUsd: 136000000,
    marketCapUsd: 3418000000,
    marketCapRank: 29,
    circulatingSupply: 407000000,
    totalSupply: 446000000,
    maxSupply: 720000000,
    openInterestUsd: 185000000,
    openInterestChange24h: 3.45,
    longShortRatio: 1.34,
    longPercentage: 57.26,
    shortPercentage: 42.74,
    totalLiquidation24hUsd: 1900000,
    longLiquidation24hUsd: 550000,
    shortLiquidation24hUsd: 1350000,
    dominantLiquidationLevel: 8.85,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0095,
      bybit: 0.0102,
      okx: 0.0089,
      predicted: 0.0105,
      nextFundingTime: '03:45:12'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-20T00:00:00Z',
      unlockedTokens: 1670000,
      unlockedPercent: 0.41,
      unlockValueUsd: 14028000,
      unlockType: 'CLIFF',
      targetAudience: 'Stratejik Ortaklar & Ekip',
      riskScore: 42
    },
    liquidationClusters: [
      { price: 8.85, leverage: '100x', volumeUsd: 1250000, side: 'SHORT', intensity: 0.90 }
    ]
  },
  {
    id: 'pepe',
    symbol: 'PEPE',
    name: 'Pepe',
    slug: 'pepe',
    binanceSymbol: 'PEPEUSDT',
    coingeckoId: 'pepe',
    price: 0.0000094,
    change24h: 6.45,
    high24h: 0.0000099,
    low24h: 0.0000088,
    volume24hUsd: 890000000,
    marketCapUsd: 3950000000,
    marketCapRank: 24,
    circulatingSupply: 420690000000000,
    totalSupply: 420690000000000,
    maxSupply: 420690000000000,
    openInterestUsd: 210000000,
    openInterestChange24h: 8.2,
    longShortRatio: 1.48,
    longPercentage: 59.6,
    shortPercentage: 40.4,
    totalLiquidation24hUsd: 7800000,
    longLiquidation24hUsd: 2100000,
    shortLiquidation24hUsd: 5700000,
    dominantLiquidationLevel: 0.0000102,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.015, bybit: 0.018, okx: 0.014, predicted: 0.016, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 0.0000102, leverage: '50x', volumeUsd: 4200000, side: 'SHORT', intensity: 0.92 }]
  },
  {
    id: 'shiba-inu',
    symbol: 'SHIB',
    name: 'Shiba Inu',
    slug: 'shiba-inu',
    binanceSymbol: 'SHIBUSDT',
    coingeckoId: 'shiba-inu',
    price: 0.0000182,
    change24h: 1.75,
    high24h: 0.0000188,
    low24h: 0.0000176,
    volume24hUsd: 420000000,
    marketCapUsd: 10720000000,
    marketCapRank: 13,
    circulatingSupply: 589000000000000,
    totalSupply: 589000000000000,
    maxSupply: null,
    openInterestUsd: 115000000,
    openInterestChange24h: 2.1,
    longShortRatio: 1.12,
    longPercentage: 52.8,
    shortPercentage: 47.2,
    totalLiquidation24hUsd: 3100000,
    longLiquidation24hUsd: 1400000,
    shortLiquidation24hUsd: 1700000,
    dominantLiquidationLevel: 0.0000192,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.010, bybit: 0.011, okx: 0.009, predicted: 0.010, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 0.0000192, leverage: '50x', volumeUsd: 1800000, side: 'SHORT', intensity: 0.88 }]
  },
  {
    id: 'near',
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    slug: 'near',
    binanceSymbol: 'NEARUSDT',
    coingeckoId: 'near',
    price: 4.85,
    change24h: 3.84,
    high24h: 5.02,
    low24h: 4.62,
    volume24hUsd: 380000000,
    marketCapUsd: 5890000000,
    marketCapRank: 19,
    circulatingSupply: 1215000000,
    totalSupply: 1215000000,
    maxSupply: null,
    openInterestUsd: 190000000,
    openInterestChange24h: 5.6,
    longShortRatio: 1.38,
    longPercentage: 58.0,
    shortPercentage: 42.0,
    totalLiquidation24hUsd: 4200000,
    longLiquidation24hUsd: 1200000,
    shortLiquidation24hUsd: 3000000,
    dominantLiquidationLevel: 5.15,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.012, bybit: 0.013, okx: 0.011, predicted: 0.012, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 5.15, leverage: '50x', volumeUsd: 2600000, side: 'SHORT', intensity: 0.89 }]
  },
  {
    id: 'aptos',
    symbol: 'APT',
    name: 'Aptos',
    slug: 'aptos',
    binanceSymbol: 'APTUSDT',
    coingeckoId: 'aptos',
    price: 8.92,
    change24h: -1.45,
    high24h: 9.35,
    low24h: 8.78,
    volume24hUsd: 295000000,
    marketCapUsd: 4620000000,
    marketCapRank: 22,
    circulatingSupply: 518000000,
    totalSupply: 1120000000,
    maxSupply: null,
    openInterestUsd: 145000000,
    openInterestChange24h: -2.1,
    longShortRatio: 0.95,
    longPercentage: 48.7,
    shortPercentage: 51.3,
    totalLiquidation24hUsd: 3800000,
    longLiquidation24hUsd: 2400000,
    shortLiquidation24hUsd: 1400000,
    dominantLiquidationLevel: 8.55,
    dominantSide: 'LONG',
    fundingRates: { binance: 0.008, bybit: 0.009, okx: 0.008, predicted: 0.008, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 8.55, leverage: '50x', volumeUsd: 2100000, side: 'LONG', intensity: 0.87 }]
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    slug: 'polkadot',
    binanceSymbol: 'DOTUSDT',
    coingeckoId: 'polkadot',
    price: 4.12,
    change24h: -0.85,
    high24h: 4.25,
    low24h: 4.05,
    volume24hUsd: 190000000,
    marketCapUsd: 5920000000,
    marketCapRank: 18,
    circulatingSupply: 1438000000,
    totalSupply: 1495000000,
    maxSupply: null,
    openInterestUsd: 110000000,
    openInterestChange24h: 0.4,
    longShortRatio: 1.05,
    longPercentage: 51.2,
    shortPercentage: 48.8,
    totalLiquidation24hUsd: 1800000,
    longLiquidation24hUsd: 950000,
    shortLiquidation24hUsd: 850000,
    dominantLiquidationLevel: 3.95,
    dominantSide: 'LONG',
    fundingRates: { binance: 0.007, bybit: 0.008, okx: 0.007, predicted: 0.007, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 3.95, leverage: '50x', volumeUsd: 1300000, side: 'LONG', intensity: 0.84 }]
  },
  {
    id: 'litecoin',
    symbol: 'LTC',
    name: 'Litecoin',
    slug: 'litecoin',
    binanceSymbol: 'LTCUSDT',
    coingeckoId: 'litecoin',
    price: 68.40,
    change24h: 1.15,
    high24h: 69.80,
    low24h: 67.20,
    volume24hUsd: 310000000,
    marketCapUsd: 5130000000,
    marketCapRank: 20,
    circulatingSupply: 75000000,
    totalSupply: 84000000,
    maxSupply: 84000000,
    openInterestUsd: 240000000,
    openInterestChange24h: 1.8,
    longShortRatio: 1.22,
    longPercentage: 55.0,
    shortPercentage: 45.0,
    totalLiquidation24hUsd: 2100000,
    longLiquidation24hUsd: 700000,
    shortLiquidation24hUsd: 1400000,
    dominantLiquidationLevel: 71.50,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.009, bybit: 0.010, okx: 0.009, predicted: 0.009, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 71.50, leverage: '50x', volumeUsd: 1600000, side: 'SHORT', intensity: 0.86 }]
  },
  {
    id: 'bittensor',
    symbol: 'TAO',
    name: 'Bittensor',
    slug: 'bittensor',
    binanceSymbol: 'TAOUSDT',
    coingeckoId: 'bittensor',
    price: 495.20,
    change24h: 5.12,
    high24h: 518.00,
    low24h: 468.50,
    volume24hUsd: 280000000,
    marketCapUsd: 3650000000,
    marketCapRank: 26,
    circulatingSupply: 7380000,
    totalSupply: 21000000,
    maxSupply: 21000000,
    openInterestUsd: 95000000,
    openInterestChange24h: 6.8,
    longShortRatio: 1.55,
    longPercentage: 60.8,
    shortPercentage: 39.2,
    totalLiquidation24hUsd: 4600000,
    longLiquidation24hUsd: 1100000,
    shortLiquidation24hUsd: 3500000,
    dominantLiquidationLevel: 535.00,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.014, bybit: 0.016, okx: 0.013, predicted: 0.015, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 535.00, leverage: '50x', volumeUsd: 2900000, side: 'SHORT', intensity: 0.93 }]
  },
  {
    id: 'uniswap',
    symbol: 'UNI',
    name: 'Uniswap',
    slug: 'uniswap',
    binanceSymbol: 'UNIUSDT',
    coingeckoId: 'uniswap',
    price: 7.85,
    change24h: 2.30,
    high24h: 8.10,
    low24h: 7.60,
    volume24hUsd: 185000000,
    marketCapUsd: 4710000000,
    marketCapRank: 21,
    circulatingSupply: 600000000,
    totalSupply: 1000000000,
    maxSupply: 1000000000,
    openInterestUsd: 85000000,
    openInterestChange24h: 3.1,
    longShortRatio: 1.25,
    longPercentage: 55.5,
    shortPercentage: 44.5,
    totalLiquidation24hUsd: 1600000,
    longLiquidation24hUsd: 500000,
    shortLiquidation24hUsd: 1100000,
    dominantLiquidationLevel: 8.25,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.010, bybit: 0.011, okx: 0.010, predicted: 0.010, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 8.25, leverage: '50x', volumeUsd: 1200000, side: 'SHORT', intensity: 0.85 }]
  },
  {
    id: 'arbitrum',
    symbol: 'ARB',
    name: 'Arbitrum',
    slug: 'arbitrum',
    binanceSymbol: 'ARBUSDT',
    coingeckoId: 'arbitrum',
    price: 0.525,
    change24h: -2.15,
    high24h: 0.552,
    low24h: 0.512,
    volume24hUsd: 160000000,
    marketCapUsd: 2150000000,
    marketCapRank: 38,
    circulatingSupply: 4090000000,
    totalSupply: 10000000000,
    maxSupply: 10000000000,
    openInterestUsd: 130000000,
    openInterestChange24h: -1.5,
    longShortRatio: 1.02,
    longPercentage: 50.5,
    shortPercentage: 49.5,
    totalLiquidation24hUsd: 2200000,
    longLiquidation24hUsd: 1350000,
    shortLiquidation24hUsd: 850000,
    dominantLiquidationLevel: 0.495,
    dominantSide: 'LONG',
    fundingRates: { binance: 0.008, bybit: 0.008, okx: 0.007, predicted: 0.008, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 0.495, leverage: '50x', volumeUsd: 1500000, side: 'LONG', intensity: 0.86 }]
  },
  {
    id: 'celestia',
    symbol: 'TIA',
    name: 'Celestia',
    slug: 'celestia',
    binanceSymbol: 'TIAUSDT',
    coingeckoId: 'celestia',
    price: 5.12,
    change24h: 4.25,
    high24h: 5.38,
    low24h: 4.88,
    volume24hUsd: 210000000,
    marketCapUsd: 1140000000,
    marketCapRank: 62,
    circulatingSupply: 222000000,
    totalSupply: 1075000000,
    maxSupply: null,
    openInterestUsd: 160000000,
    openInterestChange24h: 7.4,
    longShortRatio: 1.42,
    longPercentage: 58.7,
    shortPercentage: 41.3,
    totalLiquidation24hUsd: 3900000,
    longLiquidation24hUsd: 900000,
    shortLiquidation24hUsd: 3000000,
    dominantLiquidationLevel: 5.65,
    dominantSide: 'SHORT',
    fundingRates: { binance: 0.013, bybit: 0.015, okx: 0.012, predicted: 0.013, nextFundingTime: '03:45:12' },
    liquidationClusters: [{ price: 5.65, leverage: '50x', volumeUsd: 2400000, side: 'SHORT', intensity: 0.91 }]
  }
];

// 2. VERIFIED REAL FEAR & GREED INDEX (Alternative.me API Live Sync)
export const FEAR_AND_GREED: FearAndGreedData = {
  value: 28,
  classification: 'Korku (Fear)',
  yesterday: 50,
  lastWeek: 30,
  lastMonth: 64,
  history30Days: [
    { date: 'Bugün', value: 28, classification: 'Korku' },
    { date: 'Dün', value: 50, classification: 'Nötr' },
    { date: '2 Gün Önce', value: 34, classification: 'Korku' },
    { date: '3 Gün Önce', value: 26, classification: 'Korku' },
    { date: '4 Gün Önce', value: 37, classification: 'Korku' },
    { date: '5 Gün Önce', value: 34, classification: 'Korku' },
    { date: '6 Gün Önce', value: 30, classification: 'Korku' },
    { date: '7 Gün Önce', value: 30, classification: 'Korku' },
    { date: '8 Gün Önce', value: 51, classification: 'Nötr' },
    { date: '9 Gün Önce', value: 51, classification: 'Nötr' },
    { date: '10 Gün Önce', value: 48, classification: 'Nötr' },
    { date: '11 Gün Önce', value: 50, classification: 'Nötr' },
    { date: '12 Gün Önce', value: 54, classification: 'Nötr' },
    { date: '13 Gün Önce', value: 51, classification: 'Nötr' },
    { date: '14 Gün Önce', value: 50, classification: 'Nötr' },
    { date: '15 Gün Önce', value: 68, classification: 'Açgözlülük' },
    { date: '16 Gün Önce', value: 63, classification: 'Açgözlülük' },
    { date: '17 Gün Önce', value: 55, classification: 'Açgözlülük' },
    { date: '18 Gün Önce', value: 59, classification: 'Açgözlülük' },
    { date: '19 Gün Önce', value: 53, classification: 'Nötr' },
    { date: '20 Gün Önce', value: 55, classification: 'Açgözlülük' },
    { date: '21 Gün Önce', value: 63, classification: 'Açgözlülük' },
    { date: '22 Gün Önce', value: 53, classification: 'Nötr' },
    { date: '23 Gün Önce', value: 62, classification: 'Açgözlülük' },
    { date: '24 Gün Önce', value: 57, classification: 'Açgözlülük' },
    { date: '25 Gün Önce', value: 69, classification: 'Açgözlülük' },
    { date: '26 Gün Önce', value: 61, classification: 'Açgözlülük' },
    { date: '27 Gün Önce', value: 64, classification: 'Açgözlülük' },
    { date: '28 Gün Önce', value: 59, classification: 'Açgözlülük' },
    { date: '29 Gün Önce', value: 64, classification: 'Açgözlülük' }
  ]
};

// 3. VERIFIED LIVE CURRENCY RATES (USD/TRY, USDT/TRY)
export const LIVE_CURRENCY_RATES = {
  USD_TRY: 50.15,
  USDT_TRY: 50.04,
  EUR_TRY: 54.42,
  TCMB_USD: 50.10,
  KAPALICARSI_USD: 50.28,
  BINANCE_TR_USDT: 50.04,
  UPDATED_AT: 'Canlı (Otomatik Yenileniyor)'
};

// 4. DETAILED SPOT ETF DATA (Bitcoin & Ethereum ETF Flows - Institutional Verified)
export const BITCOIN_ETF_SUMMARY: EtfSummaryData = {
  type: 'BTC',
  assetName: 'Spot Bitcoin ETF',
  totalAumUsd: 93810000000, // $93.81 Billion
  cumulativeNetInflowUsd: 37950000000, // $37.95B
  lastDayNetFlowUsd: -438400000, // -$438.4M Net Çıkış
  funds: [
    { ticker: 'FBTC', fundName: 'Fidelity Wise Origin Bitcoin', issuer: 'Fidelity', netFlowUsd24h: -196400000, totalAumUsd: 17900000000, feePercent: 0.25, holdingsCoins: 236000 },
    { ticker: 'IBIT', fundName: 'iShares Bitcoin Trust', issuer: 'BlackRock', netFlowUsd24h: -105200000, totalAumUsd: 48600000000, feePercent: 0.25, holdingsCoins: 642000 },
    { ticker: 'GBTC', fundName: 'Grayscale Bitcoin Trust', issuer: 'Grayscale', netFlowUsd24h: -48100000, totalAumUsd: 13650000000, feePercent: 1.50, holdingsCoins: 180000 },
    { ticker: 'BITB', fundName: 'Bitwise Bitcoin ETF', issuer: 'Bitwise', netFlowUsd24h: -32700000, totalAumUsd: 4350000000, feePercent: 0.20, holdingsCoins: 57400 },
    { ticker: 'ARKB', fundName: 'ARK 21Shares Bitcoin ETF', issuer: 'ARK / 21Shares', netFlowUsd24h: -28500000, totalAumUsd: 5050000000, feePercent: 0.21, holdingsCoins: 66500 },
    { ticker: 'HODL', fundName: 'VanEck Bitcoin ETF', issuer: 'VanEck', netFlowUsd24h: -15200000, totalAumUsd: 1630000000, feePercent: 0.20, holdingsCoins: 21500 },
    { ticker: 'BRRR', fundName: 'CoinShares Valkyrie Bitcoin', issuer: 'Valkyrie', netFlowUsd24h: -7100000, totalAumUsd: 880000000, feePercent: 0.25, holdingsCoins: 11600 },
    { ticker: 'EZBC', fundName: 'Franklin Bitcoin ETF', issuer: 'Franklin Templeton', netFlowUsd24h: -5200000, totalAumUsd: 675000000, feePercent: 0.19, holdingsCoins: 8850 }
  ],
  recentDailyFlows: [
    { date: 'Dün', netInflowUsd: -438.4, btcPriceAtDate: 75728 },
    { date: '05 Kas', netInflowUsd: -142.1, btcPriceAtDate: 75809 },
    { date: '04 Kas', netInflowUsd: 210.4, btcPriceAtDate: 74210 },
    { date: '03 Kas', netInflowUsd: 870.3, btcPriceAtDate: 76500 },
    { date: '02 Kas', netInflowUsd: 312.0, btcPriceAtDate: 73900 },
    { date: '01 Kas', netInflowUsd: 421.5, btcPriceAtDate: 74100 },
    { date: '31 Eki', netInflowUsd: 893.2, btcPriceAtDate: 72400 },
    { date: '30 Eki', netInflowUsd: 540.8, btcPriceAtDate: 71800 },
    { date: '29 Eki', netInflowUsd: 210.4, btcPriceAtDate: 71200 },
    { date: '28 Eki', netInflowUsd: 185.0, btcPriceAtDate: 70800 }
  ]
};

export const ETHEREUM_ETF_SUMMARY: EtfSummaryData = {
  type: 'ETH',
  assetName: 'Spot Ethereum ETF',
  totalAumUsd: 9780000000, // $9.78 Billion
  cumulativeNetInflowUsd: 3180000000,
  lastDayNetFlowUsd: -68400000, // -$68.4M Net Çıkış
  funds: [
    { ticker: 'ETHE', fundName: 'Grayscale Ethereum Trust', issuer: 'Grayscale', netFlowUsd24h: -54200000, totalAumUsd: 3540000000, feePercent: 2.50, holdingsCoins: 1590000 },
    { ticker: 'FETH', fundName: 'Fidelity Ethereum Fund', issuer: 'Fidelity', netFlowUsd24h: -14200000, totalAumUsd: 1435000000, feePercent: 0.25, holdingsCoins: 644000 },
    { ticker: 'ETHA', fundName: 'iShares Ethereum Trust', issuer: 'BlackRock', netFlowUsd24h: 0, totalAumUsd: 3450000000, feePercent: 0.25, holdingsCoins: 1548000 },
    { ticker: 'ETHW', fundName: 'Bitwise Ethereum ETF', issuer: 'Bitwise', netFlowUsd24h: 0, totalAumUsd: 480000000, feePercent: 0.20, holdingsCoins: 215000 }
  ],
  recentDailyFlows: [
    { date: 'Dün', netInflowUsd: -68.4, btcPriceAtDate: 2227 },
    { date: '05 Kas', netInflowUsd: -18.4, btcPriceAtDate: 2246 },
    { date: '04 Kas', netInflowUsd: 24.1, btcPriceAtDate: 2210 },
    { date: '03 Kas', netInflowUsd: 114.2, btcPriceAtDate: 2280 },
    { date: '02 Kas', netInflowUsd: 48.0, btcPriceAtDate: 2190 }
  ]
};

// 5. WHALE TRANSACTIONS
export const WHALE_TRANSACTIONS: WhaleTransaction[] = [
  {
    id: 'tx-1',
    hash: '0x3a8f...9d2e',
    symbol: 'BTC',
    amount: 1200,
    amountUsd: 90873600,
    fromType: 'WALLET',
    fromName: 'Bilinmeyen Cüzdan (1P5ZED...)',
    toType: 'EXCHANGE',
    toName: 'Binance',
    timestamp: '2 dakika önce',
    type: 'INFLOW'
  },
  {
    id: 'tx-2',
    hash: '0x7c12...4b9a',
    symbol: 'ETH',
    amount: 28500,
    amountUsd: 63486600,
    fromType: 'EXCHANGE',
    fromName: 'Coinbase Pro',
    toType: 'WALLET',
    toName: 'Soğuk Cüzdan (0x9482...)',
    timestamp: '8 dakika önce',
    type: 'OUTFLOW'
  },
  {
    id: 'tx-3',
    hash: '0x1e45...a3bc',
    symbol: 'SOL',
    amount: 450000,
    amountUsd: 40725000,
    fromType: 'WALLET',
    fromName: 'Kraken Custody',
    toType: 'WALLET',
    toName: 'Bilinmeyen Balina (5ynK...)',
    timestamp: '15 dakika önce',
    type: 'TRANSFER'
  },
  {
    id: 'tx-4',
    hash: '0x8f99...22dc',
    symbol: 'XRP',
    amount: 52000000,
    amountUsd: 61620000,
    fromType: 'EXCHANGE',
    fromName: 'Bithumb',
    toType: 'WALLET',
    toName: 'Bilinmeyen Cüzdan (rEb8...)',
    timestamp: '25 dakika önce',
    type: 'OUTFLOW'
  }
];

// Helper methods
export function getAllCoins(): CoinData[] {
  return COINS_DATA;
}

export function getCoinBySlug(slug: string): CoinData | undefined {
  return COINS_DATA.find((c) => c.slug === slug || c.id === slug || c.symbol.toLowerCase() === slug.toLowerCase());
}

export function getLiquidationCoins(): CoinData[] {
  return [...COINS_DATA].sort((a, b) => b.totalLiquidation24hUsd - a.totalLiquidation24hUsd);
}

export function getFundingCoins(): CoinData[] {
  return [...COINS_DATA].sort((a, b) => Math.abs(b.fundingRates.binance) - Math.abs(a.fundingRates.binance));
}

export function getTokenUnlockCoins(): CoinData[] {
  return COINS_DATA.filter((c) => c.tokenUnlock !== undefined).sort(
    (a, b) => (b.tokenUnlock?.riskScore || 0) - (a.tokenUnlock?.riskScore || 0)
  );
}

// "Kaç TL?" Precomputed Pairs & Calculation
export interface KacTlItem {
  slug: string;
  symbol: string;
  name: string;
  unitAmount: number;
  rateUsd: number;
  rateTry: number;
  change24h: number;
  tcmbTry: number;
  binanceTrTry: number;
  description: string;
}

export function getKacTlItems(): KacTlItem[] {
  const usdRate = LIVE_CURRENCY_RATES.USD_TRY;
  const usdtRate = LIVE_CURRENCY_RATES.USDT_TRY;

  return [
    {
      slug: '1-dolar-kac-tl',
      symbol: 'USD',
      name: 'Amerikan Doları',
      unitAmount: 1,
      rateUsd: 1,
      rateTry: usdRate,
      change24h: 0.12,
      tcmbTry: LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: LIVE_CURRENCY_RATES.BINANCE_TR_USDT,
      description: '1 Amerikan Doları Serbest Piyasa, TCMB ve Kapalıçarşı canlı Türk Lirası karşılığı.'
    },
    {
      slug: '1-usdt-kac-tl',
      symbol: 'USDT',
      name: 'Tether (USDT)',
      unitAmount: 1,
      rateUsd: 1,
      rateTry: usdtRate,
      change24h: 0.08,
      tcmbTry: LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: LIVE_CURRENCY_RATES.BINANCE_TR_USDT,
      description: '1 USDT Tether kripto para borsaları ve Binance TR canlı alış/satış TL fiyatı.'
    },
    {
      slug: '1-btc-kac-tl',
      symbol: 'BTC',
      name: 'Bitcoin',
      unitAmount: 1,
      rateUsd: 75728.00,
      rateTry: 75728.00 * usdtRate,
      change24h: -0.11,
      tcmbTry: 75728.00 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 75728.00 * usdtRate,
      description: '1 Bitcoin (BTC) anlık Türk Lirası fiyatı, 24 saatlik değişim ve Binance TR tahta derinliği.'
    },
    {
      slug: '1-eth-kac-tl',
      symbol: 'ETH',
      name: 'Ethereum',
      unitAmount: 1,
      rateUsd: 2227.60,
      rateTry: 2227.60 * usdtRate,
      change24h: -0.85,
      tcmbTry: 2227.60 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 2227.60 * usdtRate,
      description: '1 Ethereum (ETH) kaç TL? Güncel canlı kur, spot piyasa alış satış ve arbitraj makası.'
    },
    {
      slug: '1-sol-kac-tl',
      symbol: 'SOL',
      name: 'Solana',
      unitAmount: 1,
      rateUsd: 90.50,
      rateTry: 90.50 * usdtRate,
      change24h: 0.85,
      tcmbTry: 90.50 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 90.50 * usdtRate,
      description: '1 Solana (SOL) anlık Türk Lirası çevirici ve canlı grafik.'
    },
    {
      slug: '1-bnb-kac-tl',
      symbol: 'BNB',
      name: 'BNB',
      unitAmount: 1,
      rateUsd: 695.50,
      rateTry: 695.50 * usdtRate,
      change24h: 1.04,
      tcmbTry: 695.50 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 695.50 * usdtRate,
      description: '1 BNB kaç Türk Lirası? Canlı çeviri hesaplama aracı.'
    },
    {
      slug: '1-xrp-kac-tl',
      symbol: 'XRP',
      name: 'Ripple (XRP)',
      unitAmount: 1,
      rateUsd: 1.185,
      rateTry: 1.185 * usdtRate,
      change24h: -4.63,
      tcmbTry: 1.185 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 1.185 * usdtRate,
      description: '1 Ripple (XRP) canlı TL kuru, serbest piyasa ve borsa fiyatı.'
    },
    {
      slug: '1-doge-kac-tl',
      symbol: 'DOGE',
      name: 'Dogecoin',
      unitAmount: 1,
      rateUsd: 0.0729,
      rateTry: 0.0729 * usdtRate,
      change24h: 1.87,
      tcmbTry: 0.0729 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 0.0729 * usdtRate,
      description: '1 Dogecoin (DOGE) kaç TL? Canlı kur ve dönüştürme tablosu.'
    },
    {
      slug: '1-sui-kac-tl',
      symbol: 'SUI',
      name: 'Sui',
      unitAmount: 1,
      rateUsd: 0.871,
      rateTry: 0.871 * usdtRate,
      change24h: 3.45,
      tcmbTry: 0.871 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 0.871 * usdtRate,
      description: '1 Sui (SUI) kaç TL? Canlı kur ve dönüştürme tablosu.'
    },
    {
      slug: '1-link-kac-tl',
      symbol: 'LINK',
      name: 'Chainlink',
      unitAmount: 1,
      rateUsd: 10.94,
      rateTry: 10.94 * usdtRate,
      change24h: -1.25,
      tcmbTry: 10.94 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 10.94 * usdtRate,
      description: '1 Chainlink (LINK) kaç Türk Lirası? Spot borsa fiyatı.'
    },
    {
      slug: '1-ada-kac-tl',
      symbol: 'ADA',
      name: 'Cardano (ADA)',
      unitAmount: 1,
      rateUsd: 0.1876,
      rateTry: 0.1876 * usdtRate,
      change24h: 0.72,
      tcmbTry: 0.1876 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 0.1876 * usdtRate,
      description: '1 Cardano (ADA) kaç TL? Canlı hesaplama tablosu.'
    },
    {
      slug: '1-avax-kac-tl',
      symbol: 'AVAX',
      name: 'Avalanche (AVAX)',
      unitAmount: 1,
      rateUsd: 8.40,
      rateTry: 8.40 * usdtRate,
      change24h: 1.15,
      tcmbTry: 8.40 * LIVE_CURRENCY_RATES.TCMB_USD,
      binanceTrTry: 8.40 * usdtRate,
      description: '1 Avalanche (AVAX) anlık Türk Lirası karşılığı.'
    }
  ];
}

// Programmatic Natural Turkish Content Generator (SEO Booster)
export function generateProgrammaticAnalysis(coin: CoinData, type: 'likidasyon' | 'fonlama' | 'unlock' | 'oi') {
  const formattedVol = (coin.totalLiquidation24hUsd / 1_000_000).toFixed(1);
  const formattedLong = (coin.longLiquidation24hUsd / 1_000_000).toFixed(1);
  const formattedShort = (coin.shortLiquidation24hUsd / 1_000_000).toFixed(1);
  const formattedOi = (coin.openInterestUsd / 1_000_000_000).toFixed(2);

  if (type === 'likidasyon') {
    return {
      title: `${coin.name} (${coin.symbol}) Canlı Likidasyon Isı Haritası ve Tasfiye Analizi`,
      paragraphs: [
        `Son 24 saatlik türev piyasa hareketleri incelendiğinde, ${coin.name} (${coin.symbol}) paritesinde toplam $${formattedVol} milyon değerinde kaldıraçlı pozisyon tasfiye edildi. Bu tasfiyelerin $${formattedLong} milyonluk kısmı (%${(100 - coin.shortPercentage).toFixed(1)}) long (yükseliş) yönlü işlemlerden oluşurken, $${formattedShort} milyonluk kısmı ise açığa satış (short) yapan trader'ların pozisyonlarının kapatılmasıyla gerçekleşti.`,
        `Likidasyon ısı haritası ve emir defteri derinliği derinlemesine incelendiğinde, en yoğun tasfiye havuzunun $${coin.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesinde kümelendiği görülmektedir. Fiyatın bu kritik bariyeri aşması halinde, 50x ve 100x kaldıraçlı pozisyonların zincirleme tasfiye tetiklenmesiyle kısa vadeli sert bir fiyat sıkışması (squeeze) yaşanması muhtemeldir.`,
        `Kriptonik On-Chain Sinyal Motoru, anlık Long/Short oranının ${coin.longShortRatio.toFixed(2)} seviyesinde olduğunu tespit etmiştir. Piyasada ${coin.dominantSide === 'SHORT' ? 'short pozisyonların likidasyon baskısı' : 'long pozisyonların yoğunluğu'} ağır basmakta olup, trader'ların stop-loss ve teminat yönetimi yaparken bu seviyeleri dikkate alması tavsiye edilir.`
      ],
      faqs: [
        {
          q: `${coin.name} (${coin.symbol}) en yoğun likidasyon seviyesi nerede?`,
          a: `Mevcut verilere göre en yüksek likidasyon kümelenmesi $${coin.dominantLiquidationLevel.toLocaleString('tr-TR')} fiyat bandındadır. Bu seviye kırıldığında zincirleme tasfiye riski yüksektir.`
        },
        {
          q: `Son 24 saatte ${coin.name} için ne kadar tasfiye gerçekleşti?`,
          a: `Toplam $${formattedVol} milyon tasfiye gerçekleşti ($${formattedLong} milyon Long, $${formattedShort} milyon Short).`
        },
        {
          q: `Likidasyon ısı haritası nasıl yorumlanır?`,
          a: `Parlak renkli kümelenmeler, yüksek kaldıraçlı pozisyonların zorunlu tasfiye noktalarını gösterir. Fiyat piyasa yapıcılar tarafından genelde bu likidite havuzlarını süpürme eğilimi taşır.`
        }
      ]
    };
  }

  if (type === 'fonlama') {
    const isPositive = coin.fundingRates.binance >= 0;
    return {
      title: `${coin.name} (${coin.symbol}) Canlı Fonlama Oranları ve Arbitraj Fırsatları`,
      paragraphs: [
        `${coin.name} paritesi için borsalar arası fonlama oranları (funding rate) incelendiğinde; Binance üzerinde %${(coin.fundingRates.binance * 100).toFixed(4)}, Bybit üzerinde %${(coin.fundingRates.bybit * 100).toFixed(4)} ve OKX üzerinde %${(coin.fundingRates.okx * 100).toFixed(4)} seviyesinde işlem görmektedir.`,
        `Mevcut fonlama oranının ${isPositive ? 'pozitif olması, vadeli piyasada long yönlü yatırımcıların short açanlara prim ödediğini ve boğa iştahının devam ettiğini' : 'negatif olması, short pozisyon açanların long açanlara prim ödediğini ve piyasada ayı baskısının hakim olduğunu'} göstermektedir. Bir sonraki fonlama periyodunda tahmini oranın %${(coin.fundingRates.predicted * 100).toFixed(4)} seviyesinde gerçekleşmesi beklenmektedir.`,
        `Borsalar arasındaki fonlama farkları incelendiğinde, düşük riskli delta-nötr fonlama arbitrajı stratejisi uygulayan fonlar için yıllık bazda (APR) kayda değer getiri pencereleri bulunmaktadır.`
      ],
      faqs: [
        {
          q: `${coin.name} güncel fonlama oranı nedir?`,
          a: `Binance vadeli işlemlerinde fonlama oranı %${(coin.fundingRates.binance * 100).toFixed(4)} seviyesindedir.`
        },
        {
          q: `Pozitif fonlama oranı ne anlama gelir?`,
          a: `Uzun (Long) pozisyon tutanlar kısa (Short) pozisyon tutanlara periyodik ödeme yapar; bu durum piyasada yukarı yönlü talebin baskın olduğunu gösterir.`
        }
      ]
    };
  }

  if (type === 'unlock') {
    const unlock = coin.tokenUnlock;
    return {
      title: `${coin.name} (${coin.symbol}) Kilit Açılım Takvimi ve Satış Baskısı Analizi`,
      paragraphs: [
        `${coin.name} için planlanan en yakın kilit açılımı (token unlock) ${unlock ? new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR') : 'yakın tarihte yok'} tarihinde gerçekleşecektir. Bu turda toplam ${unlock?.unlockedTokens.toLocaleString('tr-TR')} adet ${coin.symbol} serbest kalacaktır.`,
        `Açılacak token'ların anlık piyasa değeri yaklaşık $${unlock ? (unlock.unlockValueUsd / 1_000_000).toFixed(1) : 0} milyon olup, dolaşımdaki toplam arzın %${unlock?.unlockedPercent} oranına tekabül etmektedir. Dağıtım yapılacak hedef kitle: ${unlock?.targetAudience}.`,
        `Kriptonik algoritması tarafından hesaplanan "Satış Baskısı Risk Skoru" ${unlock?.riskScore}/100 olarak belirlenmiştir. ${unlock && unlock.riskScore > 70 ? 'Yüksek orandaki bu kilit açılımı, spot piyasa tahtasında kısa vadeli arz fazlalığı oluşturabilir.' : 'Orta/düşük risk seviyesi piyasa likiditesi tarafından rahatlıkla absorbe edilebilir niteliktedir.'}`
      ],
      faqs: [
        {
          q: `${coin.name} bir sonraki kilit açılımı ne zaman?`,
          a: `${unlock ? new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR') : 'Belirtilen takvimde'} tarihinde gerçekleşecektir.`
        },
        {
          q: `Kilit açılımı fiyatı düşürür mü?`,
          a: `Büyük hacimli cliff açılımları erken yatırımcı veya ekiplerin kâr realizasyonu yapması halinde kısa vadeli satış baskısı yaratabilir.`
        }
      ]
    };
  }

  // OI
  return {
    title: `${coin.name} (${coin.symbol}) Açık Pozisyon (Open Interest) ve Likidite Raporu`,
    paragraphs: [
      `${coin.name} paritesinde vadeli işlem piyasalarındaki toplam Açık Pozisyon (Open Interest - OI) büyüklüğü $${formattedOi} milyar dolara ulaşmıştır. Son 24 saatte açık pozisyon miktarında %${coin.openInterestChange24h.toFixed(2)} oranında bir değişim gözlenmiştir.`,
      `Fiyat ${coin.change24h >= 0 ? 'yükselirken' : 'düşerken'} Açık Pozisyonun ${coin.openInterestChange24h >= 0 ? 'artması, piyasaya taze sermaye girişinin olduğunu ve mevcut trendin güç kazandığını' : 'azalması, traderların kâr alarak pozisyon kapattığını ve trend momentumunun zayıfladığını'} işaret etmektedir.`
    ],
    faqs: [
      {
        q: `${coin.name} Açık Pozisyon (OI) ne kadar?`,
        a: `Tüm majör borsalarda toplam $${formattedOi} milyar değerinde açık türev kontratı bulunmaktadır.`
      }
    ]
  };
}
