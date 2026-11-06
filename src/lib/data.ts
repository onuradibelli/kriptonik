import { CoinData, WhaleTransaction, FearAndGreedData } from './types';

export const COINS_DATA: CoinData[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    binanceSymbol: 'BTCUSDT',
    coingeckoId: 'bitcoin',
    price: 91420.50,
    change24h: 2.84,
    high24h: 92100.00,
    low24h: 88950.00,
    volume24hUsd: 48920150000,
    marketCapUsd: 1805210000000,
    marketCapRank: 1,
    circulatingSupply: 19780000,
    totalSupply: 19780000,
    maxSupply: 21000000,
    openInterestUsd: 24150000000,
    openInterestChange24h: 4.12,
    longShortRatio: 1.34,
    longPercentage: 57.26,
    shortPercentage: 42.74,
    totalLiquidation24hUsd: 184500000,
    longLiquidation24hUsd: 52100000,
    shortLiquidation24hUsd: 132400000,
    dominantLiquidationLevel: 93450,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0105,
      bybit: 0.0112,
      okx: 0.0098,
      predicted: 0.0118,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 93800, leverage: '100x', volumeUsd: 38200000, side: 'SHORT', intensity: 0.95 },
      { price: 93200, leverage: '50x', volumeUsd: 54100000, side: 'SHORT', intensity: 0.88 },
      { price: 92500, leverage: '25x', volumeUsd: 78900000, side: 'SHORT', intensity: 0.76 },
      { price: 90200, leverage: '100x', volumeUsd: 29400000, side: 'LONG', intensity: 0.65 },
      { price: 89400, leverage: '50x', volumeUsd: 61800000, side: 'LONG', intensity: 0.82 },
      { price: 88100, leverage: '25x', volumeUsd: 94500000, side: 'LONG', intensity: 0.92 },
      { price: 86500, leverage: '10x', volumeUsd: 142000000, side: 'LONG', intensity: 0.99 }
    ]
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    slug: 'ethereum',
    binanceSymbol: 'ETHUSDT',
    coingeckoId: 'ethereum',
    price: 3380.20,
    change24h: 3.65,
    high24h: 3420.00,
    low24h: 3245.10,
    volume24hUsd: 26840000000,
    marketCapUsd: 406850000000,
    marketCapRank: 2,
    circulatingSupply: 120450000,
    totalSupply: 120450000,
    maxSupply: null,
    openInterestUsd: 14200000000,
    openInterestChange24h: 5.85,
    longShortRatio: 1.48,
    longPercentage: 59.68,
    shortPercentage: 40.32,
    totalLiquidation24hUsd: 96800000,
    longLiquidation24hUsd: 28400000,
    shortLiquidation24hUsd: 68400000,
    dominantLiquidationLevel: 3485,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0124,
      bybit: 0.0131,
      okx: 0.0118,
      predicted: 0.0135,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 3490, leverage: '100x', volumeUsd: 22400000, side: 'SHORT', intensity: 0.94 },
      { price: 3450, leverage: '50x', volumeUsd: 38700000, side: 'SHORT', intensity: 0.86 },
      { price: 3310, leverage: '100x', volumeUsd: 19800000, side: 'LONG', intensity: 0.62 },
      { price: 3240, leverage: '50x', volumeUsd: 41200000, side: 'LONG', intensity: 0.85 },
      { price: 3180, leverage: '25x', volumeUsd: 59400000, side: 'LONG', intensity: 0.91 }
    ]
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    slug: 'solana',
    binanceSymbol: 'SOLUSDT',
    coingeckoId: 'solana',
    price: 184.45,
    change24h: 5.12,
    high24h: 189.20,
    low24h: 174.10,
    volume24hUsd: 9140000000,
    marketCapUsd: 86450000000,
    marketCapRank: 4,
    circulatingSupply: 468800000,
    totalSupply: 588000000,
    maxSupply: null,
    openInterestUsd: 4650000000,
    openInterestChange24h: 8.45,
    longShortRatio: 1.62,
    longPercentage: 61.83,
    shortPercentage: 38.17,
    totalLiquidation24hUsd: 44200000,
    longLiquidation24hUsd: 12100000,
    shortLiquidation24hUsd: 32100000,
    dominantLiquidationLevel: 192.50,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0185,
      bybit: 0.0195,
      okx: 0.0170,
      predicted: 0.0210,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-18T00:00:00Z',
      unlockedTokens: 524000,
      unlockedPercent: 0.11,
      unlockValueUsd: 96651800,
      unlockType: 'LINEAR',
      targetAudience: 'Staking Ödülleri & Ekosistem',
      riskScore: 22
    },
    liquidationClusters: [
      { price: 193.5, leverage: '100x', volumeUsd: 14800000, side: 'SHORT', intensity: 0.96 },
      { price: 189.0, leverage: '50x', volumeUsd: 21500000, side: 'SHORT', intensity: 0.84 },
      { price: 179.5, leverage: '100x', volumeUsd: 11200000, side: 'LONG', intensity: 0.68 },
      { price: 173.0, leverage: '50x', volumeUsd: 28900000, side: 'LONG', intensity: 0.89 }
    ]
  },
  {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'BNB',
    slug: 'binancecoin',
    binanceSymbol: 'BNBUSDT',
    coingeckoId: 'binancecoin',
    price: 642.10,
    change24h: 1.45,
    high24h: 651.00,
    low24h: 631.50,
    volume24hUsd: 1850000000,
    marketCapUsd: 93700000000,
    marketCapRank: 5,
    circulatingSupply: 145880000,
    totalSupply: 145880000,
    maxSupply: 200000000,
    openInterestUsd: 980000000,
    openInterestChange24h: -1.20,
    longShortRatio: 1.15,
    longPercentage: 53.49,
    shortPercentage: 46.51,
    totalLiquidation24hUsd: 8400000,
    longLiquidation24hUsd: 3800000,
    shortLiquidation24hUsd: 4600000,
    dominantLiquidationLevel: 655.00,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0095,
      bybit: 0.0092,
      okx: 0.0089,
      predicted: 0.0100,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 656, leverage: '100x', volumeUsd: 3100000, side: 'SHORT', intensity: 0.88 },
      { price: 628, leverage: '100x', volumeUsd: 2900000, side: 'LONG', intensity: 0.74 }
    ]
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'XRP',
    slug: 'ripple',
    binanceSymbol: 'XRPUSDT',
    coingeckoId: 'ripple',
    price: 1.48,
    change24h: 8.74,
    high24h: 1.54,
    low24h: 1.35,
    volume24hUsd: 7420000000,
    marketCapUsd: 84200000000,
    marketCapRank: 6,
    circulatingSupply: 56900000000,
    totalSupply: 99980000000,
    maxSupply: 100000000000,
    openInterestUsd: 3200000000,
    openInterestChange24h: 16.40,
    longShortRatio: 1.82,
    longPercentage: 64.54,
    shortPercentage: 35.46,
    totalLiquidation24hUsd: 38900000,
    longLiquidation24hUsd: 9400000,
    shortLiquidation24hUsd: 29500000,
    dominantLiquidationLevel: 1.58,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0245,
      bybit: 0.0270,
      okx: 0.0230,
      predicted: 0.0290,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-12-01T00:00:00Z',
      unlockedTokens: 1000000000,
      unlockedPercent: 1.75,
      unlockValueUsd: 1480000000,
      unlockType: 'CLIFF',
      targetAudience: 'Ripple Escrow Serbest Bırakma',
      riskScore: 78
    },
    liquidationClusters: [
      { price: 1.58, leverage: '100x', volumeUsd: 18500000, side: 'SHORT', intensity: 0.98 },
      { price: 1.64, leverage: '50x', volumeUsd: 24100000, side: 'SHORT', intensity: 0.89 },
      { price: 1.38, leverage: '50x', volumeUsd: 19800000, side: 'LONG', intensity: 0.82 }
    ]
  },
  {
    id: 'dogecoin',
    symbol: 'DOGE',
    name: 'Dogecoin',
    slug: 'dogecoin',
    binanceSymbol: 'DOGEUSDT',
    coingeckoId: 'dogecoin',
    price: 0.245,
    change24h: 4.15,
    high24h: 0.258,
    low24h: 0.231,
    volume24hUsd: 3650000000,
    marketCapUsd: 35900000000,
    marketCapRank: 7,
    circulatingSupply: 146500000000,
    totalSupply: 146500000000,
    maxSupply: null,
    openInterestUsd: 1850000000,
    openInterestChange24h: 6.80,
    longShortRatio: 1.55,
    longPercentage: 60.78,
    shortPercentage: 39.22,
    totalLiquidation24hUsd: 21500000,
    longLiquidation24hUsd: 6800000,
    shortLiquidation24hUsd: 14700000,
    dominantLiquidationLevel: 0.268,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0165,
      bybit: 0.0180,
      okx: 0.0152,
      predicted: 0.0190,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 0.268, leverage: '100x', volumeUsd: 8400000, side: 'SHORT', intensity: 0.92 },
      { price: 0.224, leverage: '50x', volumeUsd: 7900000, side: 'LONG', intensity: 0.81 }
    ]
  },
  {
    id: 'arbitrum',
    symbol: 'ARB',
    name: 'Arbitrum',
    slug: 'arbitrum',
    binanceSymbol: 'ARBUSDT',
    coingeckoId: 'arbitrum',
    price: 0.845,
    change24h: -2.15,
    high24h: 0.885,
    low24h: 0.825,
    volume24hUsd: 680000000,
    marketCapUsd: 3450000000,
    marketCapRank: 32,
    circulatingSupply: 4080000000,
    totalSupply: 10000000000,
    maxSupply: 10000000000,
    openInterestUsd: 420000000,
    openInterestChange24h: -3.40,
    longShortRatio: 0.88,
    longPercentage: 46.81,
    shortPercentage: 53.19,
    totalLiquidation24hUsd: 7400000,
    longLiquidation24hUsd: 5800000,
    shortLiquidation24hUsd: 1600000,
    dominantLiquidationLevel: 0.812,
    dominantSide: 'LONG',
    fundingRates: {
      binance: -0.0045,
      bybit: -0.0038,
      okx: -0.0052,
      predicted: -0.0060,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-16T13:00:00Z',
      unlockedTokens: 92650000,
      unlockedPercent: 2.27,
      unlockValueUsd: 78289250,
      unlockType: 'CLIFF',
      targetAudience: 'Ekip & Erken Yatırımcılar',
      riskScore: 84
    },
    liquidationClusters: [
      { price: 0.81, leverage: '100x', volumeUsd: 3800000, side: 'LONG', intensity: 0.94 },
      { price: 0.89, leverage: '50x', volumeUsd: 2600000, side: 'SHORT', intensity: 0.72 }
    ]
  },
  {
    id: 'sui',
    symbol: 'SUI',
    name: 'Sui',
    slug: 'sui',
    binanceSymbol: 'SUIUSDT',
    coingeckoId: 'sui',
    price: 3.42,
    change24h: 9.65,
    high24h: 3.55,
    low24h: 3.08,
    volume24hUsd: 2450000000,
    marketCapUsd: 9850000000,
    marketCapRank: 16,
    circulatingSupply: 2880000000,
    totalSupply: 10000000000,
    maxSupply: 10000000000,
    openInterestUsd: 1120000000,
    openInterestChange24h: 21.80,
    longShortRatio: 2.14,
    longPercentage: 68.15,
    shortPercentage: 31.85,
    totalLiquidation24hUsd: 28400000,
    longLiquidation24hUsd: 4900000,
    shortLiquidation24hUsd: 23500000,
    dominantLiquidationLevel: 3.68,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0385,
      bybit: 0.0410,
      okx: 0.0360,
      predicted: 0.0450,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-12-01T00:00:00Z',
      unlockedTokens: 64190000,
      unlockedPercent: 2.23,
      unlockValueUsd: 219529800,
      unlockType: 'CLIFF',
      targetAudience: 'Topluluk & Erken Katkı Sağlayanlar',
      riskScore: 81
    },
    liquidationClusters: [
      { price: 3.68, leverage: '100x', volumeUsd: 12400000, side: 'SHORT', intensity: 0.97 },
      { price: 3.12, leverage: '50x', volumeUsd: 9100000, side: 'LONG', intensity: 0.85 }
    ]
  },
  {
    id: 'aptos',
    symbol: 'APT',
    name: 'Aptos',
    slug: 'aptos',
    binanceSymbol: 'APTUSDT',
    coingeckoId: 'aptos',
    price: 11.20,
    change24h: 1.80,
    high24h: 11.60,
    low24h: 10.95,
    volume24hUsd: 480000000,
    marketCapUsd: 5740000000,
    marketCapRank: 24,
    circulatingSupply: 512000000,
    totalSupply: 1120000000,
    maxSupply: null,
    openInterestUsd: 380000000,
    openInterestChange24h: 2.10,
    longShortRatio: 1.18,
    longPercentage: 54.13,
    shortPercentage: 45.87,
    totalLiquidation24hUsd: 5600000,
    longLiquidation24hUsd: 2400000,
    shortLiquidation24hUsd: 3200000,
    dominantLiquidationLevel: 11.95,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0108,
      bybit: 0.0115,
      okx: 0.0099,
      predicted: 0.0120,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-12T00:00:00Z',
      unlockedTokens: 11310000,
      unlockedPercent: 2.21,
      unlockValueUsd: 126672000,
      unlockType: 'CLIFF',
      targetAudience: 'Vakıf & Temel Katkı Sağlayanlar',
      riskScore: 79
    },
    liquidationClusters: [
      { price: 11.95, leverage: '100x', volumeUsd: 3800000, side: 'SHORT', intensity: 0.91 }
    ]
  },
  {
    id: 'avalanche-2',
    symbol: 'AVAX',
    name: 'Avalanche',
    slug: 'avalanche',
    binanceSymbol: 'AVAXUSDT',
    coingeckoId: 'avalanche-2',
    price: 34.65,
    change24h: 4.82,
    high24h: 35.80,
    low24h: 32.90,
    volume24hUsd: 920000000,
    marketCapUsd: 14100000000,
    marketCapRank: 12,
    circulatingSupply: 407000000,
    totalSupply: 446000000,
    maxSupply: 720000000,
    openInterestUsd: 650000000,
    openInterestChange24h: 7.20,
    longShortRatio: 1.42,
    longPercentage: 58.68,
    shortPercentage: 41.32,
    totalLiquidation24hUsd: 12800000,
    longLiquidation24hUsd: 3600000,
    shortLiquidation24hUsd: 9200000,
    dominantLiquidationLevel: 36.40,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0142,
      bybit: 0.0155,
      okx: 0.0135,
      predicted: 0.0160,
      nextFundingTime: '04:12:35'
    },
    tokenUnlock: {
      nextUnlockDate: '2026-11-20T00:00:00Z',
      unlockedTokens: 1670000,
      unlockedPercent: 0.41,
      unlockValueUsd: 57865500,
      unlockType: 'CLIFF',
      targetAudience: 'Stratejik Ortaklar & Ekip',
      riskScore: 48
    },
    liquidationClusters: [
      { price: 36.4, leverage: '100x', volumeUsd: 4900000, side: 'SHORT', intensity: 0.93 },
      { price: 32.8, leverage: '50x', volumeUsd: 4100000, side: 'LONG', intensity: 0.81 }
    ]
  },
  {
    id: 'chainlink',
    symbol: 'LINK',
    name: 'Chainlink',
    slug: 'chainlink',
    binanceSymbol: 'LINKUSDT',
    coingeckoId: 'chainlink',
    price: 15.20,
    change24h: 3.12,
    high24h: 15.75,
    low24h: 14.65,
    volume24hUsd: 610000000,
    marketCapUsd: 9530000000,
    marketCapRank: 17,
    circulatingSupply: 626800000,
    totalSupply: 1000000000,
    maxSupply: 1000000000,
    openInterestUsd: 490000000,
    openInterestChange24h: 4.80,
    longShortRatio: 1.31,
    longPercentage: 56.71,
    shortPercentage: 43.29,
    totalLiquidation24hUsd: 6200000,
    longLiquidation24hUsd: 1900000,
    shortLiquidation24hUsd: 4300000,
    dominantLiquidationLevel: 16.10,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0110,
      bybit: 0.0118,
      okx: 0.0102,
      predicted: 0.0125,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 16.1, leverage: '100x', volumeUsd: 3400000, side: 'SHORT', intensity: 0.89 }
    ]
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    slug: 'cardano',
    binanceSymbol: 'ADAUSDT',
    coingeckoId: 'cardano',
    price: 0.765,
    change24h: 6.20,
    high24h: 0.795,
    low24h: 0.715,
    volume24hUsd: 1920000000,
    marketCapUsd: 27400000000,
    marketCapRank: 9,
    circulatingSupply: 35770000000,
    totalSupply: 45000000000,
    maxSupply: 45000000000,
    openInterestUsd: 890000000,
    openInterestChange24h: 11.40,
    longShortRatio: 1.68,
    longPercentage: 62.69,
    shortPercentage: 37.31,
    totalLiquidation24hUsd: 14200000,
    longLiquidation24hUsd: 3100000,
    shortLiquidation24hUsd: 11100000,
    dominantLiquidationLevel: 0.815,
    dominantSide: 'SHORT',
    fundingRates: {
      binance: 0.0210,
      bybit: 0.0225,
      okx: 0.0195,
      predicted: 0.0240,
      nextFundingTime: '04:12:35'
    },
    liquidationClusters: [
      { price: 0.815, leverage: '100x', volumeUsd: 6800000, side: 'SHORT', intensity: 0.94 }
    ]
  }
];

export const WHALE_TRANSACTIONS: WhaleTransaction[] = [
  {
    id: 'tx-1',
    hash: '0x3a8f...9d2e',
    symbol: 'BTC',
    amount: 1450,
    amountUsd: 132559725,
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
    amount: 24800,
    amountUsd: 83828960,
    fromType: 'EXCHANGE',
    fromName: 'Coinbase Pro',
    toType: 'WALLET',
    toName: 'Soğuk Cüzdan (0x9482...)',
    timestamp: '7 dakika önce',
    type: 'OUTFLOW'
  },
  {
    id: 'tx-3',
    hash: '0x1e45...a3bc',
    symbol: 'SOL',
    amount: 320000,
    amountUsd: 59024000,
    fromType: 'WALLET',
    fromName: 'Kurumsal Saklama (Kraken Custody)',
    toType: 'WALLET',
    toName: 'Bilinmeyen Balina (5ynK...)',
    timestamp: '14 dakika önce',
    type: 'TRANSFER'
  },
  {
    id: 'tx-4',
    hash: '0x8f99...22dc',
    symbol: 'XRP',
    amount: 45000000,
    amountUsd: 66600000,
    fromType: 'EXCHANGE',
    fromName: 'Bithumb',
    toType: 'WALLET',
    toName: 'Bilinmeyen Cüzdan (rEb8...)',
    timestamp: '22 dakika önce',
    type: 'OUTFLOW'
  },
  {
    id: 'tx-5',
    hash: '0x55aa...66ff',
    symbol: 'BTC',
    amount: 850,
    amountUsd: 77707425,
    fromType: 'WALLET',
    fromName: 'Madenci Cüzdanı (F2Pool)',
    toType: 'EXCHANGE',
    toName: 'OKX',
    timestamp: '31 dakika önce',
    type: 'INFLOW'
  },
  {
    id: 'tx-6',
    hash: '0x99cc...11aa',
    symbol: 'SUI',
    amount: 8500000,
    amountUsd: 29070000,
    fromType: 'WALLET',
    fromName: 'Vakıf Hazine Cüzdanı',
    toType: 'EXCHANGE',
    toName: 'Bybit',
    timestamp: '44 dakika önce',
    type: 'INFLOW'
  }
];

export const FEAR_AND_GREED: FearAndGreedData = {
  value: 78,
  classification: 'Aşırı Açgözlülük',
  yesterday: 75,
  lastWeek: 69,
  lastMonth: 58
};

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
          a: `Parlak sarı ve yeşil bantlar, yüksek kaldıraçlı pozisyonların zorunlu tasfiye noktalarını gösterir. Fiyat genelde bu likidite havuzlarını süpürme eğilimi taşır.`
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
