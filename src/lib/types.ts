export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  binanceSymbol: string;
  coingeckoId: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24hUsd: number;
  marketCapUsd: number;
  marketCapRank: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
  openInterestUsd: number;
  openInterestChange24h: number;
  longShortRatio: number; // e.g. 1.25
  longPercentage: number; // e.g. 55.6%
  shortPercentage: number; // e.g. 44.4%
  totalLiquidation24hUsd: number;
  longLiquidation24hUsd: number;
  shortLiquidation24hUsd: number;
  dominantLiquidationLevel: number; // Price with max liquidation pool
  dominantSide: 'LONG' | 'SHORT';
  fundingRates: {
    binance: number; // % e.g. 0.0100
    bybit: number;
    okx: number;
    predicted: number;
    nextFundingTime: string;
  };
  tokenUnlock?: {
    nextUnlockDate: string; // ISO string
    unlockedTokens: number;
    unlockedPercent: number; // % of circ supply
    unlockValueUsd: number;
    unlockType: 'CLIFF' | 'LINEAR';
    targetAudience: string;
    riskScore: number; // 1 - 100
  };
  liquidationClusters: Array<{
    price: number;
    leverage: string; // "100x", "50x", "25x", "10x"
    volumeUsd: number;
    side: 'LONG' | 'SHORT';
    intensity: number; // 0 to 1
  }>;
}

export interface WhaleTransaction {
  id: string;
  hash: string;
  symbol: string;
  amount: number;
  amountUsd: number;
  fromType: 'EXCHANGE' | 'WALLET';
  fromName: string;
  toType: 'EXCHANGE' | 'WALLET';
  toName: string;
  timestamp: string;
  type: 'INFLOW' | 'OUTFLOW' | 'TRANSFER';
}

export interface FearAndGreedData {
  value: number;
  classification: 'Aşırı Korku' | 'Korku' | 'Nötr' | 'Açgözlülük' | 'Aşırı Açgözlülük';
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
}
