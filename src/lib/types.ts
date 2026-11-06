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
  longShortRatio: number;
  longPercentage: number;
  shortPercentage: number;
  totalLiquidation24hUsd: number;
  longLiquidation24hUsd: number;
  shortLiquidation24hUsd: number;
  dominantLiquidationLevel: number;
  dominantSide: 'LONG' | 'SHORT';
  fundingRates: {
    binance: number;
    bybit: number;
    okx: number;
    predicted: number;
    nextFundingTime: string;
  };
  tokenUnlock?: {
    nextUnlockDate: string;
    unlockedTokens: number;
    unlockedPercent: number;
    unlockValueUsd: number;
    unlockType: 'CLIFF' | 'LINEAR';
    targetAudience: string;
    riskScore: number;
  };
  liquidationClusters: Array<{
    price: number;
    leverage: string;
    volumeUsd: number;
    side: 'LONG' | 'SHORT';
    intensity: number;
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
  classification: string;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  history30Days: Array<{
    date: string;
    value: number;
    classification: string;
  }>;
}

export interface EtfFundData {
  ticker: string;
  fundName: string;
  issuer: string;
  netFlowUsd24h: number; // e.g. +142.5M
  totalAumUsd: number; // AUM
  feePercent: number;
  holdingsCoins: number;
}

export interface EtfSummaryData {
  type: 'BTC' | 'ETH';
  assetName: string;
  totalAumUsd: number;
  cumulativeNetInflowUsd: number;
  lastDayNetFlowUsd: number;
  funds: EtfFundData[];
  recentDailyFlows: Array<{
    date: string;
    netInflowUsd: number; // in millions
    btcPriceAtDate: number;
  }>;
}

export interface CurrencyRate {
  pair: string;
  rate: number;
  change24h: number;
  updatedAt: string;
  tcmbRate: number;
  binanceTrRate: number;
}
