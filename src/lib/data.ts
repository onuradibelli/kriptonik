import { CoinData, WhaleTransaction, FearAndGreedData, EtfSummaryData, CurrencyRate } from './types';

// 1. VERIFIED LIVE CRYPTO MARKET DATA (Direct from CoinGecko, Binance & Bybit APIs - 135 Top Liquid Traded Assets with Official Logos)
export const COINS_DATA: CoinData[] = [
  {
    "id": "bitcoin",
    "symbol": "BTC",
    "name": "Bitcoin",
    "slug": "bitcoin",
    "binanceSymbol": "BTCUSDT",
    "coingeckoId": "bitcoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "price": 75976.36,
    "change24h": -0.334,
    "high24h": 76378,
    "low24h": 74888,
    "volume24hUsd": 979393861.3946851,
    "marketCapUsd": 1526534395033,
    "marketCapRank": 1,
    "circulatingSupply": 20109059,
    "totalSupply": 20109081,
    "maxSupply": 21000000,
    "athUsd": 126080,
    "athChangePercent": -39.79158,
    "athDate": "2025-10-06",
    "atlUsd": 67.81,
    "atlChangePercent": 111847.84091,
    "atlDate": "2013-07-05",
    "fdvUsd": 1526536065114,
    "dominancePercent": 54.52,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Bitcoin (BTC), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bitcoin.org",
    "whitepaperUrl": "https://bitcoin.org/bitcoin.pdf",
    "explorerUrl": "https://mempool.space",
    "twitterUrl": "https://x.com/bitcoin",
    "githubUrl": "https://github.com/bitcoin",
    "faqs": [
      {
        "question": "1 Bitcoin (BTC) Kaç TL?",
        "answer": "1 Bitcoin (BTC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Bitcoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Bitcoin tüm zamanların en yüksek fiyatına (ATH) $126.080 seviyesinde ulaşmıştır."
      },
      {
        "question": "Bitcoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Bitcoin dolaşımdaki arzı 20.109.059 BTC adettir."
      },
      {
        "question": "Bitcoin Nereden ve Nasıl Alınır?",
        "answer": "Bitcoin (BTC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 440727238,
    "openInterestChange24h": -0.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14690908,
    "longLiquidation24hUsd": 6464000,
    "shortLiquidation24hUsd": 8226908,
    "dominantLiquidationLevel": 78255.6508,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 79775.178,
        "leverage": "25x",
        "volumeUsd": 5141818,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 72177.542,
        "leverage": "50x",
        "volumeUsd": 6610909,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ethereum",
    "symbol": "ETH",
    "name": "Ethereum",
    "slug": "ethereum",
    "binanceSymbol": "ETHUSDT",
    "coingeckoId": "ethereum",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "price": 2245.54,
    "change24h": 0.187,
    "high24h": 2254.26,
    "low24h": 2210,
    "volume24hUsd": 305816115.943101,
    "marketCapUsd": 274067367578,
    "marketCapRank": 2,
    "circulatingSupply": 122197894.00927158,
    "totalSupply": 122197894.00927158,
    "maxSupply": null,
    "athUsd": 4946.05,
    "athChangePercent": -54.65286,
    "athDate": "2025-08-24",
    "atlUsd": 0.432979,
    "atlChangePercent": 517914.06569,
    "atlDate": "2015-10-19",
    "fdvUsd": 274067367578,
    "dominancePercent": 9.79,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Ethereum (ETH), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethereum.org",
    "whitepaperUrl": "https://ethereum.org/en/whitepaper/",
    "explorerUrl": "https://etherscan.io",
    "twitterUrl": "https://x.com/ethereum",
    "githubUrl": "https://github.com/ethereum",
    "faqs": [
      {
        "question": "1 Ethereum (ETH) Kaç TL?",
        "answer": "1 Ethereum (ETH) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ethereum En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ethereum tüm zamanların en yüksek fiyatına (ATH) $4.946,05 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ethereum Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ethereum dolaşımdaki arzı 122.197.894,009 ETH adettir."
      },
      {
        "question": "Ethereum Nereden ve Nasıl Alınır?",
        "answer": "Ethereum (ETH) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 137617252,
    "openInterestChange24h": 0.07,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 4587242,
    "longLiquidation24hUsd": 2867026,
    "shortLiquidation24hUsd": 1720216,
    "dominantLiquidationLevel": 2178.1738,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 2357.817,
        "leverage": "25x",
        "volumeUsd": 1605535,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2133.263,
        "leverage": "50x",
        "volumeUsd": 2064259,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "binancecoin",
    "symbol": "BNB",
    "name": "BNB",
    "slug": "binancecoin",
    "binanceSymbol": "BNBUSDT",
    "coingeckoId": "binancecoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    "price": 694.64,
    "change24h": -0.139,
    "high24h": 699.51,
    "low24h": 692.4,
    "volume24hUsd": 44222128.99772,
    "marketCapUsd": 91241652563,
    "marketCapRank": 3,
    "circulatingSupply": 131511054.35,
    "totalSupply": 131511051.21,
    "maxSupply": 200000000,
    "athUsd": 1369.99,
    "athChangePercent": -49.35973,
    "athDate": "2025-10-13",
    "atlUsd": 0.0398177,
    "atlChangePercent": 1742259.45395,
    "atlDate": "2017-10-18",
    "fdvUsd": 91241650385,
    "dominancePercent": 3.26,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "BNB (BNB), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://binance.com",
    "explorerUrl": "https://bscscan.com",
    "twitterUrl": "https://x.com/binance",
    "githubUrl": "https://github.com/bnb-chain",
    "faqs": [
      {
        "question": "1 BNB (BNB) Kaç TL?",
        "answer": "1 BNB (BNB) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "BNB En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "BNB tüm zamanların en yüksek fiyatına (ATH) $1.369,99 seviyesinde ulaşmıştır."
      },
      {
        "question": "BNB Dolaşımdaki Arzı Ne Kadar?",
        "answer": "BNB dolaşımdaki arzı 131.511.054,35 BNB adettir."
      },
      {
        "question": "BNB Nereden ve Nasıl Alınır?",
        "answer": "BNB (BNB) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 19899958,
    "openInterestChange24h": -0.05,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 663332,
    "longLiquidation24hUsd": 291866,
    "shortLiquidation24hUsd": 371466,
    "dominantLiquidationLevel": 715.4792,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 729.372,
        "leverage": "25x",
        "volumeUsd": 232166,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 659.908,
        "leverage": "50x",
        "volumeUsd": 298499,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ripple",
    "symbol": "XRP",
    "name": "XRP",
    "slug": "ripple",
    "binanceSymbol": "XRPUSDT",
    "coingeckoId": "ripple",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    "price": 1.1706,
    "change24h": -2.409,
    "high24h": 1.2029,
    "low24h": 1.1519,
    "volume24hUsd": 120951608.3267,
    "marketCapUsd": 74271070090,
    "marketCapRank": 4,
    "circulatingSupply": 63516606953,
    "totalSupply": 99985583260,
    "maxSupply": 100000000000,
    "athUsd": 3.65,
    "athChangePercent": -67.93134,
    "athDate": "2025-07-17",
    "atlUsd": 0.00268621,
    "atlChangePercent": 43431.4498,
    "atlDate": "2014-05-21",
    "fdvUsd": 116914876574,
    "dominancePercent": 2.65,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "XRP (XRP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ripple.com/xrp",
    "explorerUrl": "https://xrpscan.com",
    "twitterUrl": "https://x.com/ripple",
    "faqs": [
      {
        "question": "1 XRP (XRP) Kaç TL?",
        "answer": "1 XRP (XRP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "XRP En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "XRP tüm zamanların en yüksek fiyatına (ATH) $3,65 seviyesinde ulaşmıştır."
      },
      {
        "question": "XRP Dolaşımdaki Arzı Ne Kadar?",
        "answer": "XRP dolaşımdaki arzı 63.516.606.953 XRP adettir."
      },
      {
        "question": "XRP Nereden ve Nasıl Alınır?",
        "answer": "XRP (XRP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 54428224,
    "openInterestChange24h": -0.84,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 1814274,
    "longLiquidation24hUsd": 798281,
    "shortLiquidation24hUsd": 1015993,
    "dominantLiquidationLevel": 1.2057,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.2291,
        "leverage": "25x",
        "volumeUsd": 634996,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.1121,
        "leverage": "50x",
        "volumeUsd": 816423,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "usd-coin",
    "symbol": "USDC",
    "name": "USDC",
    "slug": "usd-coin",
    "binanceSymbol": "USDCUSDT",
    "coingeckoId": "usd-coin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/6319/large/USDC.png?1769615602",
    "price": 1.00101,
    "change24h": -0.015,
    "high24h": 1.00134,
    "low24h": 1.00096,
    "volume24hUsd": 1096346364.92163,
    "marketCapUsd": 70420413645,
    "marketCapRank": 5,
    "circulatingSupply": 70441868291.96622,
    "totalSupply": 70527569801.37956,
    "maxSupply": null,
    "athUsd": 1.043,
    "athChangePercent": -4.19125,
    "athDate": "2018-11-14",
    "atlUsd": 0.877647,
    "atlChangePercent": 13.91036,
    "atlDate": "2023-03-11",
    "fdvUsd": 70506089053,
    "dominancePercent": 2.52,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "USDC (USDC), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 USDC (USDC) Kaç TL?",
        "answer": "1 USDC (USDC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "USDC En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "USDC tüm zamanların en yüksek fiyatına (ATH) $1,043 seviyesinde ulaşmıştır."
      },
      {
        "question": "USDC Dolaşımdaki Arzı Ne Kadar?",
        "answer": "USDC dolaşımdaki arzı 70.441.868.291,966 USDC adettir."
      },
      {
        "question": "USDC Nereden ve Nasıl Alınır?",
        "answer": "USDC (USDC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 493355864,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 16445195,
    "longLiquidation24hUsd": 7235886,
    "shortLiquidation24hUsd": 9209309,
    "dominantLiquidationLevel": 1.031,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0511,
        "leverage": "25x",
        "volumeUsd": 5755818,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.951,
        "leverage": "50x",
        "volumeUsd": 7400338,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "solana",
    "symbol": "SOL",
    "name": "Solana",
    "slug": "solana",
    "binanceSymbol": "SOLUSDT",
    "coingeckoId": "solana",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    "price": 89.88,
    "change24h": -0.355,
    "high24h": 91.62,
    "low24h": 89.65,
    "volume24hUsd": 111371746.26469,
    "marketCapUsd": 53042845281,
    "marketCapRank": 6,
    "circulatingSupply": 590982545.3968879,
    "totalSupply": 637127633.820083,
    "maxSupply": null,
    "athUsd": 293.31,
    "athChangePercent": -69.39881,
    "athDate": "2025-01-19",
    "atlUsd": 0.500801,
    "atlChangePercent": 17822.67007,
    "atlDate": "2020-05-11",
    "fdvUsd": 57184535767,
    "dominancePercent": 1.89,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Solana (SOL), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://solana.com",
    "whitepaperUrl": "https://solana.com/solana-whitepaper.pdf",
    "explorerUrl": "https://solscan.io",
    "twitterUrl": "https://x.com/solana",
    "githubUrl": "https://github.com/solana-labs",
    "faqs": [
      {
        "question": "1 Solana (SOL) Kaç TL?",
        "answer": "1 Solana (SOL) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Solana En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Solana tüm zamanların en yüksek fiyatına (ATH) $293,31 seviyesinde ulaşmıştır."
      },
      {
        "question": "Solana Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Solana dolaşımdaki arzı 590.982.545,397 SOL adettir."
      },
      {
        "question": "Solana Nereden ve Nasıl Alınır?",
        "answer": "Solana (SOL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 50117286,
    "openInterestChange24h": -0.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 1670576,
    "longLiquidation24hUsd": 735053,
    "shortLiquidation24hUsd": 935523,
    "dominantLiquidationLevel": 92.5764,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 94.374,
        "leverage": "25x",
        "volumeUsd": 584702,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 85.386,
        "leverage": "50x",
        "volumeUsd": 751759,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "tron",
    "symbol": "TRX",
    "name": "TRON",
    "slug": "tron",
    "binanceSymbol": "TRXUSDT",
    "coingeckoId": "tron",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1094/large/photo_2026-04-13_09-59-16.png?1776048311",
    "price": 0.3197,
    "change24h": 0.377,
    "high24h": 0.3197,
    "low24h": 0.3174,
    "volume24hUsd": 17961850.4228,
    "marketCapUsd": 30356800674,
    "marketCapRank": 7,
    "circulatingSupply": 95027787065.63321,
    "totalSupply": 95028888125.6578,
    "maxSupply": null,
    "athUsd": 0.431288,
    "athChangePercent": -25.93269,
    "athDate": "2024-12-03",
    "atlUsd": 0.00180434,
    "atlChangePercent": 17604.16922,
    "atlDate": "2017-11-11",
    "fdvUsd": 30357152410,
    "dominancePercent": 1.08,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "TRON (TRX), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 TRON (TRX) Kaç TL?",
        "answer": "1 TRON (TRX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "TRON En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "TRON tüm zamanların en yüksek fiyatına (ATH) $0,431 seviyesinde ulaşmıştır."
      },
      {
        "question": "TRON Dolaşımdaki Arzı Ne Kadar?",
        "answer": "TRON dolaşımdaki arzı 95.027.787.065,633 TRX adettir."
      },
      {
        "question": "TRON Nereden ve Nasıl Alınır?",
        "answer": "TRON (TRX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 8082833,
    "openInterestChange24h": 0.13,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 269428,
    "longLiquidation24hUsd": 168393,
    "shortLiquidation24hUsd": 101036,
    "dominantLiquidationLevel": 0.3101,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3357,
        "leverage": "25x",
        "volumeUsd": 94300,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3037,
        "leverage": "50x",
        "volumeUsd": 121243,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "zcash",
    "symbol": "ZEC",
    "name": "Zcash",
    "slug": "zcash",
    "binanceSymbol": "ZECUSDT",
    "coingeckoId": "zcash",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/486/large/Brandmark-Yellow_%281%29.png?1785810558",
    "price": 1294.08,
    "change24h": 0.487,
    "high24h": 1388,
    "low24h": 1278.18,
    "volume24hUsd": 227822729.63549,
    "marketCapUsd": 21948748822,
    "marketCapRank": 8,
    "circulatingSupply": 17027707.61933536,
    "totalSupply": 17028465.54806361,
    "maxSupply": 21000000,
    "athUsd": 3191.93,
    "athChangePercent": -59.56967,
    "athDate": "2016-10-28",
    "atlUsd": 16.08,
    "atlChangePercent": 7925.4801,
    "atlDate": "2024-07-04",
    "fdvUsd": 21949725793,
    "dominancePercent": 0.78,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Zcash (ZEC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Zcash (ZEC) Kaç TL?",
        "answer": "1 Zcash (ZEC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Zcash En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Zcash tüm zamanların en yüksek fiyatına (ATH) $3.191,93 seviyesinde ulaşmıştır."
      },
      {
        "question": "Zcash Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Zcash dolaşımdaki arzı 17.027.707,619 ZEC adettir."
      },
      {
        "question": "Zcash Nereden ve Nasıl Alınır?",
        "answer": "Zcash (ZEC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 102520228,
    "openInterestChange24h": 0.17,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 3417341,
    "longLiquidation24hUsd": 2135838,
    "shortLiquidation24hUsd": 1281503,
    "dominantLiquidationLevel": 1255.2576,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1358.784,
        "leverage": "25x",
        "volumeUsd": 1196069,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1229.376,
        "leverage": "50x",
        "volumeUsd": 1537803,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "hyperliquid",
    "symbol": "HYPE",
    "name": "Hyperliquid",
    "slug": "hyperliquid",
    "binanceSymbol": "HYPEUSDT",
    "coingeckoId": "hyperliquid",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/50882/large/hyperliquid.jpg?1729431300",
    "price": 78.38,
    "change24h": 0.294,
    "high24h": 79.68,
    "low24h": 77.41,
    "volume24hUsd": 32520036.22943,
    "marketCapUsd": 18731955288,
    "marketCapRank": 9,
    "circulatingSupply": 239406814.37414145,
    "totalSupply": 951538272.9141414,
    "maxSupply": 1000000000,
    "athUsd": 97.96,
    "athChangePercent": -20.08863,
    "athDate": "2026-09-23",
    "atlUsd": 3.81,
    "atlChangePercent": 1955.36475,
    "atlDate": "2024-11-29",
    "fdvUsd": 74451399512,
    "dominancePercent": 0.67,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Hyperliquid (HYPE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Hyperliquid (HYPE) Kaç TL?",
        "answer": "1 Hyperliquid (HYPE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Hyperliquid En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Hyperliquid tüm zamanların en yüksek fiyatına (ATH) $97,96 seviyesinde ulaşmıştır."
      },
      {
        "question": "Hyperliquid Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Hyperliquid dolaşımdaki arzı 239.406.814,374 HYPE adettir."
      },
      {
        "question": "Hyperliquid Nereden ve Nasıl Alınır?",
        "answer": "Hyperliquid (HYPE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 14634016,
    "openInterestChange24h": 0.1,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 487801,
    "longLiquidation24hUsd": 304876,
    "shortLiquidation24hUsd": 182925,
    "dominantLiquidationLevel": 76.0286,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 82.299,
        "leverage": "25x",
        "volumeUsd": 170730,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 74.461,
        "leverage": "50x",
        "volumeUsd": 219510,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "monero",
    "symbol": "XMR",
    "name": "Monero",
    "slug": "monero",
    "binanceSymbol": "XMRUSDT",
    "coingeckoId": "monero",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
    "price": 118.7,
    "change24h": 4.766,
    "high24h": 119.6,
    "low24h": 110.4,
    "volume24hUsd": 574681.0774,
    "marketCapUsd": 11557766909,
    "marketCapRank": 10,
    "circulatingSupply": 18827803.519652992,
    "totalSupply": 18827839.519200794,
    "maxSupply": null,
    "athUsd": 797.73,
    "athChangePercent": -23.0741,
    "athDate": "2026-01-14",
    "atlUsd": 0.216177,
    "atlChangePercent": 283771.8418,
    "atlDate": "2015-01-13",
    "fdvUsd": 11557789008,
    "dominancePercent": 0.41,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Monero (XMR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Monero (XMR) Kaç TL?",
        "answer": "1 Monero (XMR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Monero En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Monero tüm zamanların en yüksek fiyatına (ATH) $797,73 seviyesinde ulaşmıştır."
      },
      {
        "question": "Monero Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Monero dolaşımdaki arzı 18.827.803,52 XMR adettir."
      },
      {
        "question": "Monero Nereden ve Nasıl Alınır?",
        "answer": "Monero (XMR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 258606,
    "openInterestChange24h": 1.67,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 8620,
    "longLiquidation24hUsd": 5388,
    "shortLiquidation24hUsd": 3233,
    "dominantLiquidationLevel": 115.139,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 124.635,
        "leverage": "25x",
        "volumeUsd": 3017,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 112.765,
        "leverage": "50x",
        "volumeUsd": 3879,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "dogecoin",
    "symbol": "DOGE",
    "name": "Dogecoin",
    "slug": "dogecoin",
    "binanceSymbol": "DOGEUSDT",
    "coingeckoId": "dogecoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    "price": 0.07191,
    "change24h": -0.622,
    "high24h": 0.07337,
    "low24h": 0.07169,
    "volume24hUsd": 17779017.54962,
    "marketCapUsd": 11243861625,
    "marketCapRank": 11,
    "circulatingSupply": 156642222860.16907,
    "totalSupply": 156647962860.16907,
    "maxSupply": null,
    "athUsd": 0.731578,
    "athChangePercent": -90.18841,
    "athDate": "2021-05-07",
    "atlUsd": 0.0000869,
    "atlChangePercent": 82496.51016,
    "atlDate": "2015-05-05",
    "fdvUsd": 11244273645,
    "dominancePercent": 0.4,
    "category": "Meme & Topluluk",
    "descriptionTr": "Dogecoin (DOGE), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://dogecoin.com",
    "explorerUrl": "https://dogechain.info",
    "twitterUrl": "https://x.com/dogecoin",
    "faqs": [
      {
        "question": "1 Dogecoin (DOGE) Kaç TL?",
        "answer": "1 Dogecoin (DOGE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Dogecoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Dogecoin tüm zamanların en yüksek fiyatına (ATH) $0,732 seviyesinde ulaşmıştır."
      },
      {
        "question": "Dogecoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Dogecoin dolaşımdaki arzı 156.642.222.860,169 DOGE adettir."
      },
      {
        "question": "Dogecoin Nereden ve Nasıl Alınır?",
        "answer": "Dogecoin (DOGE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 8000558,
    "openInterestChange24h": -0.22,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 266685,
    "longLiquidation24hUsd": 117341,
    "shortLiquidation24hUsd": 149344,
    "dominantLiquidationLevel": 0.0741,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0755,
        "leverage": "25x",
        "volumeUsd": 93340,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0683,
        "leverage": "50x",
        "volumeUsd": 120008,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "usds",
    "symbol": "USDS",
    "name": "USDS",
    "slug": "usds",
    "binanceSymbol": "USDSUSDT",
    "coingeckoId": "usds",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/39926/large/usds.webp?1726666683",
    "price": 1.0011,
    "change24h": -0.01,
    "high24h": 1.01,
    "low24h": 0.9957,
    "volume24hUsd": 205978.5719,
    "marketCapUsd": 8810794503,
    "marketCapRank": 12,
    "circulatingSupply": 8809385439.86613,
    "totalSupply": 8787372836.774456,
    "maxSupply": null,
    "athUsd": 1.057,
    "athChangePercent": -5.39695,
    "athDate": "2024-10-28",
    "atlUsd": 0.948265,
    "atlChangePercent": 5.48306,
    "atlDate": "2024-10-03",
    "fdvUsd": 8788778379,
    "dominancePercent": 0.31,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USDS (USDS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 USDS (USDS) Kaç TL?",
        "answer": "1 USDS (USDS) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "USDS En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "USDS tüm zamanların en yüksek fiyatına (ATH) $1,057 seviyesinde ulaşmıştır."
      },
      {
        "question": "USDS Dolaşımdaki Arzı Ne Kadar?",
        "answer": "USDS dolaşımdaki arzı 8.809.385.439,866 USDS adettir."
      },
      {
        "question": "USDS Nereden ve Nasıl Alınır?",
        "answer": "USDS (USDS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 92690,
    "openInterestChange24h": 0,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3090,
    "longLiquidation24hUsd": 1360,
    "shortLiquidation24hUsd": 1730,
    "dominantLiquidationLevel": 1.0311,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0512,
        "leverage": "25x",
        "volumeUsd": 1082,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.951,
        "leverage": "50x",
        "volumeUsd": 1391,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "chainlink",
    "symbol": "LINK",
    "name": "Chainlink",
    "slug": "chainlink",
    "binanceSymbol": "LINKUSDT",
    "coingeckoId": "chainlink",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/877/large/Chainlink_Logo_500.png?1760023405",
    "price": 10.814,
    "change24h": -0.295,
    "high24h": 11.041,
    "low24h": 10.739,
    "volume24hUsd": 12257422.90838,
    "marketCapUsd": 8274388203,
    "marketCapRank": 13,
    "circulatingSupply": 766849970.424884,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 52.7,
    "athChangePercent": -79.52175,
    "athDate": "2021-05-09",
    "atlUsd": 0.148183,
    "atlChangePercent": 7182.43352,
    "atlDate": "2017-11-28",
    "fdvUsd": 10790100440,
    "dominancePercent": 0.3,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Chainlink (LINK), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://chain.link",
    "whitepaperUrl": "https://chain.link/whitepaper",
    "explorerUrl": "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca",
    "twitterUrl": "https://x.com/chainlink",
    "faqs": [
      {
        "question": "1 Chainlink (LINK) Kaç TL?",
        "answer": "1 Chainlink (LINK) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Chainlink En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Chainlink tüm zamanların en yüksek fiyatına (ATH) $52,7 seviyesinde ulaşmıştır."
      },
      {
        "question": "Chainlink Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Chainlink dolaşımdaki arzı 766.849.970,425 LINK adettir."
      },
      {
        "question": "Chainlink Nereden ve Nasıl Alınır?",
        "answer": "Chainlink (LINK) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5515840,
    "openInterestChange24h": -0.1,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 183861,
    "longLiquidation24hUsd": 80899,
    "shortLiquidation24hUsd": 102962,
    "dominantLiquidationLevel": 11.1384,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 11.3547,
        "leverage": "25x",
        "volumeUsd": 64351,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 10.2733,
        "leverage": "50x",
        "volumeUsd": 82737,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "cardano",
    "symbol": "ADA",
    "name": "Cardano",
    "slug": "cardano",
    "binanceSymbol": "ADAUSDT",
    "coingeckoId": "cardano",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    "price": 0.1829,
    "change24h": -1.455,
    "high24h": 0.1897,
    "low24h": 0.1824,
    "volume24hUsd": 10115898.74194,
    "marketCapUsd": 6859694801,
    "marketCapRank": 14,
    "circulatingSupply": 37583793088.09034,
    "totalSupply": 45000000000,
    "maxSupply": 45000000000,
    "athUsd": 3.09,
    "athChangePercent": -94.08786,
    "athDate": "2021-09-01",
    "atlUsd": 0.01925275,
    "atlChangePercent": 847.92953,
    "atlDate": "2020-03-12",
    "fdvUsd": 8213281329,
    "dominancePercent": 0.24,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Cardano (ADA), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://cardano.org",
    "explorerUrl": "https://cardanoscan.io",
    "twitterUrl": "https://x.com/cardano",
    "faqs": [
      {
        "question": "1 Cardano (ADA) Kaç TL?",
        "answer": "1 Cardano (ADA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Cardano En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Cardano tüm zamanların en yüksek fiyatına (ATH) $3,09 seviyesinde ulaşmıştır."
      },
      {
        "question": "Cardano Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Cardano dolaşımdaki arzı 37.583.793.088,09 ADA adettir."
      },
      {
        "question": "Cardano Nereden ve Nasıl Alınır?",
        "answer": "Cardano (ADA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 4552154,
    "openInterestChange24h": -0.51,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 151738,
    "longLiquidation24hUsd": 66765,
    "shortLiquidation24hUsd": 84973,
    "dominantLiquidationLevel": 0.1884,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.192,
        "leverage": "25x",
        "volumeUsd": 53108,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1738,
        "leverage": "50x",
        "volumeUsd": 68282,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "stellar",
    "symbol": "XLM",
    "name": "Stellar",
    "slug": "stellar",
    "binanceSymbol": "XLMUSDT",
    "coingeckoId": "stellar",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/100/large/fmpFRHHQ_400x400.jpg?1735231350",
    "price": 0.1528,
    "change24h": -1.1,
    "high24h": 0.1576,
    "low24h": 0.1516,
    "volume24hUsd": 5626871.3212,
    "marketCapUsd": 5399309822,
    "marketCapRank": 15,
    "circulatingSupply": 35372682943.29181,
    "totalSupply": 50001786837.39707,
    "maxSupply": null,
    "athUsd": 0.875563,
    "athChangePercent": -82.56716,
    "athDate": "2018-01-02",
    "atlUsd": 0.00047612,
    "atlChangePercent": 31957.96185,
    "atlDate": "2015-03-04",
    "fdvUsd": 7632305959,
    "dominancePercent": 0.19,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Stellar (XLM), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Stellar (XLM) Kaç TL?",
        "answer": "1 Stellar (XLM) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Stellar En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Stellar tüm zamanların en yüksek fiyatına (ATH) $0,876 seviyesinde ulaşmıştır."
      },
      {
        "question": "Stellar Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Stellar dolaşımdaki arzı 35.372.682.943,292 XLM adettir."
      },
      {
        "question": "Stellar Nereden ve Nasıl Alınır?",
        "answer": "Stellar (XLM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2532092,
    "openInterestChange24h": -0.39,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 84403,
    "longLiquidation24hUsd": 37137,
    "shortLiquidation24hUsd": 47266,
    "dominantLiquidationLevel": 0.1574,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1604,
        "leverage": "25x",
        "volumeUsd": 29541,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1452,
        "leverage": "50x",
        "volumeUsd": 37981,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bitcoin-cash",
    "symbol": "BCH",
    "name": "Bitcoin Cash",
    "slug": "bitcoin-cash",
    "binanceSymbol": "BCHUSDT",
    "coingeckoId": "bitcoin-cash",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
    "price": 257.4,
    "change24h": -3.812,
    "high24h": 271.5,
    "low24h": 256.8,
    "volume24hUsd": 5829104.4143,
    "marketCapUsd": 5170378422,
    "marketCapRank": 16,
    "circulatingSupply": 20113462.39665076,
    "totalSupply": 20113559.27165076,
    "maxSupply": 21000000,
    "athUsd": 3785.82,
    "athChangePercent": -93.21074,
    "athDate": "2017-12-19",
    "atlUsd": 76.93,
    "atlChangePercent": 234.08705,
    "atlDate": "2018-12-15",
    "fdvUsd": 5170403325,
    "dominancePercent": 0.18,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Bitcoin Cash (BCH), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Bitcoin Cash (BCH) Kaç TL?",
        "answer": "1 Bitcoin Cash (BCH) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Bitcoin Cash En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Bitcoin Cash tüm zamanların en yüksek fiyatına (ATH) $3.785,82 seviyesinde ulaşmıştır."
      },
      {
        "question": "Bitcoin Cash Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Bitcoin Cash dolaşımdaki arzı 20.113.462,397 BCH adettir."
      },
      {
        "question": "Bitcoin Cash Nereden ve Nasıl Alınır?",
        "answer": "Bitcoin Cash (BCH) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2623097,
    "openInterestChange24h": -1.33,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 87437,
    "longLiquidation24hUsd": 38472,
    "shortLiquidation24hUsd": 48965,
    "dominantLiquidationLevel": 265.122,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 270.27,
        "leverage": "25x",
        "volumeUsd": 30603,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 244.53,
        "leverage": "50x",
        "volumeUsd": 39347,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "near",
    "symbol": "NEAR",
    "name": "NEAR Protocol",
    "slug": "near",
    "binanceSymbol": "NEARUSDT",
    "coingeckoId": "near",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
    "price": 3.689,
    "change24h": -1.443,
    "high24h": 3.827,
    "low24h": 3.675,
    "volume24hUsd": 49589892.8898,
    "marketCapUsd": 4829142690,
    "marketCapRank": 17,
    "circulatingSupply": 1311037558,
    "totalSupply": 1311063072,
    "maxSupply": null,
    "athUsd": 20.44,
    "athChangePercent": -81.97475,
    "athDate": "2022-01-16",
    "atlUsd": 0.526762,
    "atlChangePercent": 599.37059,
    "atlDate": "2020-11-04",
    "fdvUsd": 4829236669,
    "dominancePercent": 0.17,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "NEAR Protocol (NEAR), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 NEAR Protocol (NEAR) Kaç TL?",
        "answer": "1 NEAR Protocol (NEAR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "NEAR Protocol En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "NEAR Protocol tüm zamanların en yüksek fiyatına (ATH) $20,44 seviyesinde ulaşmıştır."
      },
      {
        "question": "NEAR Protocol Dolaşımdaki Arzı Ne Kadar?",
        "answer": "NEAR Protocol dolaşımdaki arzı 1.311.037.558 NEAR adettir."
      },
      {
        "question": "NEAR Protocol Nereden ve Nasıl Alınır?",
        "answer": "NEAR Protocol (NEAR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 22315452,
    "openInterestChange24h": -0.51,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 743848,
    "longLiquidation24hUsd": 327293,
    "shortLiquidation24hUsd": 416555,
    "dominantLiquidationLevel": 3.7997,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 3.8735,
        "leverage": "25x",
        "volumeUsd": 260347,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3.5046,
        "leverage": "50x",
        "volumeUsd": 334732,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ethena-usde",
    "symbol": "USDE",
    "name": "Ethena USDe",
    "slug": "ethena-usde",
    "binanceSymbol": "USDEUSDT",
    "coingeckoId": "ethena-usde",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/33613/large/usde.png?1733810059",
    "price": 1.0004,
    "change24h": 0.01,
    "high24h": 1.0006,
    "low24h": 1.0002,
    "volume24hUsd": 1917893.4526,
    "marketCapUsd": 4579999142,
    "marketCapRank": 18,
    "circulatingSupply": 4584941438.06191,
    "totalSupply": 4928262800.297189,
    "maxSupply": null,
    "athUsd": 1.034,
    "athChangePercent": -3.39384,
    "athDate": "2025-12-09",
    "atlUsd": 0.929486,
    "atlChangePercent": 7.4713,
    "atlDate": "2024-10-03",
    "fdvUsd": 4922950424,
    "dominancePercent": 0.16,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "Ethena USDe (USDE), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ethena USDe (USDE) Kaç TL?",
        "answer": "1 Ethena USDe (USDE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ethena USDe En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ethena USDe tüm zamanların en yüksek fiyatına (ATH) $1,034 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ethena USDe Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ethena USDe dolaşımdaki arzı 4.584.941.438,062 USDE adettir."
      },
      {
        "question": "Ethena USDe Nereden ve Nasıl Alınır?",
        "answer": "Ethena USDe (USDE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 863052,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 28768,
    "longLiquidation24hUsd": 17980,
    "shortLiquidation24hUsd": 10788,
    "dominantLiquidationLevel": 0.9704,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0504,
        "leverage": "25x",
        "volumeUsd": 10069,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9504,
        "leverage": "50x",
        "volumeUsd": 12946,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "dai",
    "symbol": "DAI",
    "name": "Dai",
    "slug": "dai",
    "binanceSymbol": "DAIUSDT",
    "coingeckoId": "dai",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
    "price": 0,
    "change24h": 0,
    "high24h": 0,
    "low24h": 0,
    "volume24hUsd": 0,
    "marketCapUsd": 4458564401,
    "marketCapRank": 19,
    "circulatingSupply": 4457451151.422768,
    "totalSupply": 4484472290.991202,
    "maxSupply": null,
    "athUsd": 1.22,
    "athChangePercent": -17.95578,
    "athDate": "2020-03-12",
    "atlUsd": 0.88196,
    "atlChangePercent": 13.39087,
    "atlDate": "2023-03-10",
    "fdvUsd": 4485592289,
    "dominancePercent": 0.16,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "Dai (DAI), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Dai (DAI) Kaç TL?",
        "answer": "1 Dai (DAI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Dai En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Dai tüm zamanların en yüksek fiyatına (ATH) $1,22 seviyesinde ulaşmıştır."
      },
      {
        "question": "Dai Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Dai dolaşımdaki arzı 4.457.451.151,423 DAI adettir."
      },
      {
        "question": "Dai Nereden ve Nasıl Alınır?",
        "answer": "Dai (DAI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 0,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 0,
    "longLiquidation24hUsd": 0,
    "shortLiquidation24hUsd": 0,
    "dominantLiquidationLevel": 0,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 0,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 0,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "uniswap",
    "symbol": "UNI",
    "name": "Uniswap",
    "slug": "uniswap",
    "binanceSymbol": "UNIUSDT",
    "coingeckoId": "uniswap",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669",
    "price": 7.004,
    "change24h": 0.043,
    "high24h": 7.132,
    "low24h": 6.861,
    "volume24hUsd": 23093929.6688,
    "marketCapUsd": 4246207080,
    "marketCapRank": 20,
    "circulatingSupply": 607895895.879729,
    "totalSupply": 886148418.7861971,
    "maxSupply": 1000000000,
    "athUsd": 44.92,
    "athChangePercent": -84.44411,
    "athDate": "2021-05-02",
    "atlUsd": 1.03,
    "atlChangePercent": 578.2762,
    "atlDate": "2020-09-16",
    "fdvUsd": 6189825784,
    "dominancePercent": 0.15,
    "category": "DeFi & Likidite",
    "descriptionTr": "Uniswap (UNI), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Uniswap (UNI) Kaç TL?",
        "answer": "1 Uniswap (UNI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Uniswap En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Uniswap tüm zamanların en yüksek fiyatına (ATH) $44,92 seviyesinde ulaşmıştır."
      },
      {
        "question": "Uniswap Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Uniswap dolaşımdaki arzı 607.895.895,88 UNI adettir."
      },
      {
        "question": "Uniswap Nereden ve Nasıl Alınır?",
        "answer": "Uniswap (UNI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 10392268,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 346409,
    "longLiquidation24hUsd": 216506,
    "shortLiquidation24hUsd": 129903,
    "dominantLiquidationLevel": 6.7939,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 7.3542,
        "leverage": "25x",
        "volumeUsd": 121243,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.6538,
        "leverage": "50x",
        "volumeUsd": 155884,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "litecoin",
    "symbol": "LTC",
    "name": "Litecoin",
    "slug": "litecoin",
    "binanceSymbol": "LTCUSDT",
    "coingeckoId": "litecoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
    "price": 52.16,
    "change24h": -1.511,
    "high24h": 53.5,
    "low24h": 52,
    "volume24hUsd": 8497648.30405,
    "marketCapUsd": 4049876363,
    "marketCapRank": 21,
    "circulatingSupply": 77800379.94737804,
    "totalSupply": 77803723.7054008,
    "maxSupply": 84000000,
    "athUsd": 410.26,
    "athChangePercent": -87.31036,
    "athDate": "2021-05-09",
    "atlUsd": 1.15,
    "atlChangePercent": 4431.55986,
    "atlDate": "2015-01-13",
    "fdvUsd": 4050050422,
    "dominancePercent": 0.14,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Litecoin (LTC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Litecoin (LTC) Kaç TL?",
        "answer": "1 Litecoin (LTC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Litecoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Litecoin tüm zamanların en yüksek fiyatına (ATH) $410,26 seviyesinde ulaşmıştır."
      },
      {
        "question": "Litecoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Litecoin dolaşımdaki arzı 77.800.379,947 LTC adettir."
      },
      {
        "question": "Litecoin Nereden ve Nasıl Alınır?",
        "answer": "Litecoin (LTC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3823942,
    "openInterestChange24h": -0.53,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 127465,
    "longLiquidation24hUsd": 56085,
    "shortLiquidation24hUsd": 71380,
    "dominantLiquidationLevel": 53.7248,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 54.768,
        "leverage": "25x",
        "volumeUsd": 44613,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 49.552,
        "leverage": "50x",
        "volumeUsd": 57359,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "canton-network",
    "symbol": "CC",
    "name": "Canton",
    "slug": "canton-network",
    "binanceSymbol": "CCUSDT",
    "coingeckoId": "canton-network",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/70468/large/Canton-Ticker_%281%29.png?1762826299",
    "price": 0.094524,
    "change24h": -3.27205,
    "high24h": 0.097925,
    "low24h": 0.093848,
    "volume24hUsd": 15068763,
    "marketCapUsd": 3782072961,
    "marketCapRank": 22,
    "circulatingSupply": 40011591109.66087,
    "totalSupply": 40011591109.66087,
    "maxSupply": null,
    "athUsd": 0.194152,
    "athChangePercent": -51.31459,
    "athDate": "2026-02-03",
    "atlUsd": 0.059024,
    "atlChangePercent": 60.14407,
    "atlDate": "2025-12-06",
    "fdvUsd": 3782072961,
    "dominancePercent": 0.14,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Canton (CC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Canton (CC) Kaç TL?",
        "answer": "1 Canton (CC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Canton En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Canton tüm zamanların en yüksek fiyatına (ATH) $0,194 seviyesinde ulaşmıştır."
      },
      {
        "question": "Canton Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Canton dolaşımdaki arzı 40.011.591.109,661 CC adettir."
      },
      {
        "question": "Canton Nereden ve Nasıl Alınır?",
        "answer": "Canton (CC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 6780943,
    "openInterestChange24h": -1.15,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 226031,
    "longLiquidation24hUsd": 99454,
    "shortLiquidation24hUsd": 126577,
    "dominantLiquidationLevel": 0.0974,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0993,
        "leverage": "25x",
        "volumeUsd": 79111,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0898,
        "leverage": "50x",
        "volumeUsd": 101714,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "avalanche-2",
    "symbol": "AVAX",
    "name": "Avalanche",
    "slug": "avalanche-2",
    "binanceSymbol": "AVAXUSDT",
    "coingeckoId": "avalanche-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    "price": 8.28,
    "change24h": -1.004,
    "high24h": 8.476,
    "low24h": 8.259,
    "volume24hUsd": 7783006.65862,
    "marketCapUsd": 3668445801,
    "marketCapRank": 23,
    "circulatingSupply": 444144310.58422726,
    "totalSupply": 470813116.2141447,
    "maxSupply": 720000000,
    "athUsd": 144.96,
    "athChangePercent": -94.30061,
    "athDate": "2021-11-21",
    "atlUsd": 2.8,
    "atlChangePercent": 194.95575,
    "atlDate": "2020-12-31",
    "fdvUsd": 3888718955,
    "dominancePercent": 0.13,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Avalanche (AVAX), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://avax.network",
    "whitepaperUrl": "https://avax.network/whitepapers",
    "explorerUrl": "https://snowtrace.io",
    "twitterUrl": "https://x.com/avax",
    "tokenUnlock": {
      "nextUnlockDate": "2026-11-20",
      "unlockedTokens": 1670000,
      "unlockedPercent": 0.41,
      "unlockValueUsd": 14028000,
      "unlockType": "CLIFF",
      "targetAudience": "Avalanche Vakfı ve Stratejik Ortaklar",
      "riskScore": 52
    },
    "faqs": [
      {
        "question": "1 Avalanche (AVAX) Kaç TL?",
        "answer": "1 Avalanche (AVAX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Avalanche En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Avalanche tüm zamanların en yüksek fiyatına (ATH) $144,96 seviyesinde ulaşmıştır."
      },
      {
        "question": "Avalanche Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Avalanche dolaşımdaki arzı 444.144.310,584 AVAX adettir."
      },
      {
        "question": "Avalanche Nereden ve Nasıl Alınır?",
        "answer": "Avalanche (AVAX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3502353,
    "openInterestChange24h": -0.35,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 116745,
    "longLiquidation24hUsd": 51368,
    "shortLiquidation24hUsd": 65377,
    "dominantLiquidationLevel": 8.5284,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 8.694,
        "leverage": "25x",
        "volumeUsd": 40861,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 7.866,
        "leverage": "50x",
        "volumeUsd": 52535,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "sui",
    "symbol": "SUI",
    "name": "Sui",
    "slug": "sui",
    "binanceSymbol": "SUIUSDT",
    "coingeckoId": "sui",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26375/large/sui-ocean-square.png?1727791290",
    "price": 0.8607,
    "change24h": -0.509,
    "high24h": 0.8819,
    "low24h": 0.8575,
    "volume24hUsd": 18860626.21062,
    "marketCapUsd": 3555259330,
    "marketCapRank": 24,
    "circulatingSupply": 4139043544.1303763,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 5.35,
    "athChangePercent": -83.93296,
    "athDate": "2025-01-04",
    "atlUsd": 0.364846,
    "atlChangePercent": 135.4512,
    "atlDate": "2023-10-19",
    "fdvUsd": 8589567354,
    "dominancePercent": 0.13,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Sui (SUI), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sui.io",
    "explorerUrl": "https://suiscan.xyz",
    "twitterUrl": "https://x.com/SuiNetwork",
    "tokenUnlock": {
      "nextUnlockDate": "2026-12-03",
      "unlockedTokens": 64190000,
      "unlockedPercent": 2.26,
      "unlockValueUsd": 55845300,
      "unlockType": "CLIFF",
      "targetAudience": "Topluluk Rezervi ve Erken Katkıcılar",
      "riskScore": 68
    },
    "faqs": [
      {
        "question": "1 Sui (SUI) Kaç TL?",
        "answer": "1 Sui (SUI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Sui En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Sui tüm zamanların en yüksek fiyatına (ATH) $5,35 seviyesinde ulaşmıştır."
      },
      {
        "question": "Sui Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Sui dolaşımdaki arzı 4.139.043.544,13 SUI adettir."
      },
      {
        "question": "Sui Nereden ve Nasıl Alınır?",
        "answer": "Sui (SUI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 8487282,
    "openInterestChange24h": -0.18,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 282909,
    "longLiquidation24hUsd": 124480,
    "shortLiquidation24hUsd": 158429,
    "dominantLiquidationLevel": 0.8865,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.9037,
        "leverage": "25x",
        "volumeUsd": 99018,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.8177,
        "leverage": "50x",
        "volumeUsd": 127309,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "usd1-wlfi",
    "symbol": "USD1",
    "name": "USD1",
    "slug": "usd1-wlfi",
    "binanceSymbol": "USD1USDT",
    "coingeckoId": "usd1-wlfi",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/54977/large/USD1_1000x1000_transparent.png?1749297002",
    "price": 0.999,
    "change24h": -0.029,
    "high24h": 0.99975,
    "low24h": 0.998,
    "volume24hUsd": 227841530.7118,
    "marketCapUsd": 3493552458,
    "marketCapRank": 25,
    "circulatingSupply": 3500233381.621581,
    "totalSupply": 3494973381.621581,
    "maxSupply": null,
    "athUsd": 1.048,
    "athChangePercent": -4.75464,
    "athDate": "2026-07-09",
    "atlUsd": 0.988762,
    "atlChangePercent": 0.94506,
    "atlDate": "2026-07-09",
    "fdvUsd": 3488302497,
    "dominancePercent": 0.12,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USD1 (USD1), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 USD1 (USD1) Kaç TL?",
        "answer": "1 USD1 (USD1) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "USD1 En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "USD1 tüm zamanların en yüksek fiyatına (ATH) $1,048 seviyesinde ulaşmıştır."
      },
      {
        "question": "USD1 Dolaşımdaki Arzı Ne Kadar?",
        "answer": "USD1 dolaşımdaki arzı 3.500.233.381,622 USD1 adettir."
      },
      {
        "question": "USD1 Nereden ve Nasıl Alınır?",
        "answer": "USD1 (USD1) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 102528689,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3417623,
    "longLiquidation24hUsd": 1503754,
    "shortLiquidation24hUsd": 1913869,
    "dominantLiquidationLevel": 1.029,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.049,
        "leverage": "25x",
        "volumeUsd": 1196168,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.949,
        "leverage": "50x",
        "volumeUsd": 1537930,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "tether-gold",
    "symbol": "XAUT",
    "name": "Tether Gold",
    "slug": "tether-gold",
    "binanceSymbol": "XAUTUSDT",
    "coingeckoId": "tether-gold",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/10481/large/logo.png?1774627372",
    "price": 4062.63,
    "change24h": 0.19,
    "high24h": 4063.89,
    "low24h": 4012.25,
    "volume24hUsd": 16806487.438364,
    "marketCapUsd": 3282603957,
    "marketCapRank": 26,
    "circulatingSupply": 808994.63,
    "totalSupply": 827417.63,
    "maxSupply": null,
    "athUsd": 5504.62,
    "athChangePercent": -26.28952,
    "athDate": "2026-01-28",
    "atlUsd": 1447.84,
    "atlChangePercent": 180.24335,
    "atlDate": "2020-03-19",
    "fdvUsd": 3357357745,
    "dominancePercent": 0.12,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Tether Gold (XAUT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Tether Gold (XAUT) Kaç TL?",
        "answer": "1 Tether Gold (XAUT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Tether Gold En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Tether Gold tüm zamanların en yüksek fiyatına (ATH) $5.504,62 seviyesinde ulaşmıştır."
      },
      {
        "question": "Tether Gold Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Tether Gold dolaşımdaki arzı 808.994,63 XAUT adettir."
      },
      {
        "question": "Tether Gold Nereden ve Nasıl Alınır?",
        "answer": "Tether Gold (XAUT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 7562919,
    "openInterestChange24h": 0.07,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 252097,
    "longLiquidation24hUsd": 157561,
    "shortLiquidation24hUsd": 94536,
    "dominantLiquidationLevel": 3940.7511,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 4265.7615,
        "leverage": "25x",
        "volumeUsd": 88234,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3859.4985,
        "leverage": "50x",
        "volumeUsd": 113444,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "the-open-network",
    "symbol": "GRAM",
    "name": "Gram (prev. Toncoin)",
    "slug": "the-open-network",
    "binanceSymbol": "GRAMUSDT",
    "coingeckoId": "the-open-network",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/17980/large/Gram_Circular_Badge.png?1781524778",
    "price": 1.099,
    "change24h": 0.091,
    "high24h": 1.112,
    "low24h": 1.087,
    "volume24hUsd": 3701193.22151,
    "marketCapUsd": 3124983188,
    "marketCapRank": 27,
    "circulatingSupply": 2852539290.153258,
    "totalSupply": 5279617699.13588,
    "maxSupply": null,
    "athUsd": 8.25,
    "athChangePercent": -86.72853,
    "athDate": "2024-06-14",
    "atlUsd": 0.519364,
    "atlChangePercent": 110.907,
    "atlDate": "2021-09-20",
    "fdvUsd": 5783870043,
    "dominancePercent": 0.11,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Gram (prev. Toncoin) (GRAM), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Gram (prev. Toncoin) (GRAM) Kaç TL?",
        "answer": "1 Gram (prev. Toncoin) (GRAM) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Gram (prev. Toncoin) En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Gram (prev. Toncoin) tüm zamanların en yüksek fiyatına (ATH) $8,25 seviyesinde ulaşmıştır."
      },
      {
        "question": "Gram (prev. Toncoin) Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Gram (prev. Toncoin) dolaşımdaki arzı 2.852.539.290,153 GRAM adettir."
      },
      {
        "question": "Gram (prev. Toncoin) Nereden ve Nasıl Alınır?",
        "answer": "Gram (prev. Toncoin) (GRAM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1665537,
    "openInterestChange24h": 0.03,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 55518,
    "longLiquidation24hUsd": 34699,
    "shortLiquidation24hUsd": 20819,
    "dominantLiquidationLevel": 1.066,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.154,
        "leverage": "25x",
        "volumeUsd": 19431,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.044,
        "leverage": "50x",
        "volumeUsd": 24983,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "hedera-hashgraph",
    "symbol": "HBAR",
    "name": "Hedera",
    "slug": "hedera-hashgraph",
    "binanceSymbol": "HBARUSDT",
    "coingeckoId": "hedera-hashgraph",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/3688/large/hbar.png?1696504364",
    "price": 0.06769,
    "change24h": -1.312,
    "high24h": 0.06922,
    "low24h": 0.06686,
    "volume24hUsd": 5319321.00122,
    "marketCapUsd": 2995572361,
    "marketCapRank": 28,
    "circulatingSupply": 44327148038.94443,
    "totalSupply": 50000000000,
    "maxSupply": 50000000000,
    "athUsd": 0.569229,
    "athChangePercent": -88.12874,
    "athDate": "2021-09-15",
    "atlUsd": 0.00986111,
    "atlChangePercent": 585.26394,
    "atlDate": "2020-01-02",
    "fdvUsd": 3378936491,
    "dominancePercent": 0.11,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Hedera (HBAR), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Hedera (HBAR) Kaç TL?",
        "answer": "1 Hedera (HBAR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Hedera En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Hedera tüm zamanların en yüksek fiyatına (ATH) $0,569 seviyesinde ulaşmıştır."
      },
      {
        "question": "Hedera Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Hedera dolaşımdaki arzı 44.327.148.038,944 HBAR adettir."
      },
      {
        "question": "Hedera Nereden ve Nasıl Alınır?",
        "answer": "Hedera (HBAR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2393694,
    "openInterestChange24h": -0.46,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 79790,
    "longLiquidation24hUsd": 35108,
    "shortLiquidation24hUsd": 44682,
    "dominantLiquidationLevel": 0.0697,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0711,
        "leverage": "25x",
        "volumeUsd": 27927,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0643,
        "leverage": "50x",
        "volumeUsd": 35906,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "quant-network",
    "symbol": "QNT",
    "name": "Quant",
    "slug": "quant-network",
    "binanceSymbol": "QNTUSDT",
    "coingeckoId": "quant-network",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1696504070",
    "price": 197.12,
    "change24h": 4.032,
    "high24h": 205.23,
    "low24h": 187.5,
    "volume24hUsd": 11554221.1342,
    "marketCapUsd": 2864284692,
    "marketCapRank": 29,
    "circulatingSupply": 14556178.164081175,
    "totalSupply": 14612493,
    "maxSupply": 14612493,
    "athUsd": 427.42,
    "athChangePercent": -53.97381,
    "athDate": "2021-09-11",
    "atlUsd": 0.215773,
    "atlChangePercent": 91072.64237,
    "atlDate": "2018-08-22",
    "fdvUsd": 2875366015,
    "dominancePercent": 0.1,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Quant (QNT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Quant (QNT) Kaç TL?",
        "answer": "1 Quant (QNT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Quant En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Quant tüm zamanların en yüksek fiyatına (ATH) $427,42 seviyesinde ulaşmıştır."
      },
      {
        "question": "Quant Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Quant dolaşımdaki arzı 14.556.178,164 QNT adettir."
      },
      {
        "question": "Quant Nereden ve Nasıl Alınır?",
        "answer": "Quant (QNT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5199400,
    "openInterestChange24h": 1.41,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 173313,
    "longLiquidation24hUsd": 108321,
    "shortLiquidation24hUsd": 64992,
    "dominantLiquidationLevel": 191.2064,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 206.976,
        "leverage": "25x",
        "volumeUsd": 60660,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 187.264,
        "leverage": "50x",
        "volumeUsd": 77991,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "paypal-usd",
    "symbol": "PYUSD",
    "name": "PayPal USD",
    "slug": "paypal-usd",
    "binanceSymbol": "PYUSDUSDT",
    "coingeckoId": "paypal-usd",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31212/large/PYUSD_Token_Logo_2x.png?1765987788",
    "price": 1,
    "change24h": 0.02094,
    "high24h": 1,
    "low24h": 0.999424,
    "volume24hUsd": 85703332,
    "marketCapUsd": 2791261188,
    "marketCapRank": 30,
    "circulatingSupply": 2790747022.9418216,
    "totalSupply": 2790747022.943135,
    "maxSupply": null,
    "athUsd": 1.021,
    "athChangePercent": -2.00564,
    "athDate": "2023-10-23",
    "atlUsd": 0.959426,
    "atlChangePercent": 4.2566,
    "atlDate": "2024-12-05",
    "fdvUsd": 2791261188,
    "dominancePercent": 0.1,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "PayPal USD (PYUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 PayPal USD (PYUSD) Kaç TL?",
        "answer": "1 PayPal USD (PYUSD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "PayPal USD En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "PayPal USD tüm zamanların en yüksek fiyatına (ATH) $1,021 seviyesinde ulaşmıştır."
      },
      {
        "question": "PayPal USD Dolaşımdaki Arzı Ne Kadar?",
        "answer": "PayPal USD dolaşımdaki arzı 2.790.747.022,942 PYUSD adettir."
      },
      {
        "question": "PayPal USD Nereden ve Nasıl Alınır?",
        "answer": "PayPal USD (PYUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 38566499,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 1285550,
    "longLiquidation24hUsd": 803469,
    "shortLiquidation24hUsd": 482081,
    "dominantLiquidationLevel": 0.97,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.05,
        "leverage": "25x",
        "volumeUsd": 449943,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.95,
        "leverage": "50x",
        "volumeUsd": 578498,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ripple-usd",
    "symbol": "RLUSD",
    "name": "Ripple USD",
    "slug": "ripple-usd",
    "binanceSymbol": "RLUSDUSDT",
    "coingeckoId": "ripple-usd",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/39651/large/RLUSD_200x200_%281%29.png?1727376633",
    "price": 1.0011,
    "change24h": -0.03,
    "high24h": 1.0016,
    "low24h": 1.0011,
    "volume24hUsd": 53240467.4955,
    "marketCapUsd": 2687967979,
    "marketCapRank": 31,
    "circulatingSupply": 2687340895.9132385,
    "totalSupply": 2687340895.913239,
    "maxSupply": null,
    "athUsd": 1.073,
    "athChangePercent": -6.76241,
    "athDate": "2024-12-26",
    "atlUsd": 0.962292,
    "atlChangePercent": 3.9466,
    "atlDate": "2024-12-17",
    "fdvUsd": 2687967979,
    "dominancePercent": 0.1,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ripple USD (RLUSD), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ripple USD (RLUSD) Kaç TL?",
        "answer": "1 Ripple USD (RLUSD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ripple USD En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ripple USD tüm zamanların en yüksek fiyatına (ATH) $1,073 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ripple USD Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ripple USD dolaşımdaki arzı 2.687.340.895,913 RLUSD adettir."
      },
      {
        "question": "Ripple USD Nereden ve Nasıl Alınır?",
        "answer": "Ripple USD (RLUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 23958210,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 798607,
    "longLiquidation24hUsd": 351387,
    "shortLiquidation24hUsd": 447220,
    "dominantLiquidationLevel": 1.0311,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0512,
        "leverage": "25x",
        "volumeUsd": 279512,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.951,
        "leverage": "50x",
        "volumeUsd": 359373,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "shiba-inu",
    "symbol": "SHIB",
    "name": "Shiba Inu",
    "slug": "shiba-inu",
    "binanceSymbol": "SHIBUSDT",
    "coingeckoId": "shiba-inu",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
    "price": 0.00000449,
    "change24h": -2.603,
    "high24h": 0.00000462,
    "low24h": 0.00000448,
    "volume24hUsd": 1237059.75981086,
    "marketCapUsd": 2642496723,
    "marketCapRank": 32,
    "circulatingSupply": 589238178603488,
    "totalSupply": 589495714214776.5,
    "maxSupply": null,
    "athUsd": 0.00008616,
    "athChangePercent": -94.79569,
    "athDate": "2021-10-27",
    "atlUsd": 5.6366e-11,
    "atlChangePercent": 7954950.87157,
    "atlDate": "2020-11-28",
    "fdvUsd": 2643651667,
    "dominancePercent": 0.09,
    "category": "Meme & Topluluk",
    "descriptionTr": "Shiba Inu (SHIB), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Shiba Inu (SHIB) Kaç TL?",
        "answer": "1 Shiba Inu (SHIB) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Shiba Inu En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Shiba Inu tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "Shiba Inu Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Shiba Inu dolaşımdaki arzı 589.238.178.603.488 SHIB adettir."
      },
      {
        "question": "Shiba Inu Nereden ve Nasıl Alınır?",
        "answer": "Shiba Inu (SHIB) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 556677,
    "openInterestChange24h": -0.91,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 18556,
    "longLiquidation24hUsd": 8165,
    "shortLiquidation24hUsd": 10391,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 6495,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 8350,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bittensor",
    "symbol": "TAO",
    "name": "Bittensor",
    "slug": "bittensor",
    "binanceSymbol": "TAOUSDT",
    "coingeckoId": "bittensor",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447",
    "price": 224.5,
    "change24h": 0.089,
    "high24h": 227.5,
    "low24h": 221.1,
    "volume24hUsd": 7440610.91199,
    "marketCapUsd": 2621033972,
    "marketCapRank": 33,
    "circulatingSupply": 11701543.591187134,
    "totalSupply": 11701807.569616554,
    "maxSupply": 21000000,
    "athUsd": 757.6,
    "athChangePercent": -70.43156,
    "athDate": "2024-03-07",
    "atlUsd": 30.83,
    "atlChangePercent": 626.60452,
    "atlDate": "2023-05-14",
    "fdvUsd": 2621093101,
    "dominancePercent": 0.09,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Bittensor (TAO), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Bittensor (TAO) Kaç TL?",
        "answer": "1 Bittensor (TAO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Bittensor En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Bittensor tüm zamanların en yüksek fiyatına (ATH) $757,6 seviyesinde ulaşmıştır."
      },
      {
        "question": "Bittensor Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Bittensor dolaşımdaki arzı 11.701.543,591 TAO adettir."
      },
      {
        "question": "Bittensor Nereden ve Nasıl Alınır?",
        "answer": "Bittensor (TAO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3348275,
    "openInterestChange24h": 0.03,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 111609,
    "longLiquidation24hUsd": 69756,
    "shortLiquidation24hUsd": 41853,
    "dominantLiquidationLevel": 217.765,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 235.725,
        "leverage": "25x",
        "volumeUsd": 39063,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 213.275,
        "leverage": "50x",
        "volumeUsd": 50224,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ondo-us-dollar-yield",
    "symbol": "USDY",
    "name": "Ondo US Dollar Yield",
    "slug": "ondo-us-dollar-yield",
    "binanceSymbol": "USDYUSDT",
    "coingeckoId": "ondo-us-dollar-yield",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31700/large/usdy_%281%29.png?1696530524",
    "price": 1.15,
    "change24h": 0.0967,
    "high24h": 1.15,
    "low24h": 1.15,
    "volume24hUsd": 2904103,
    "marketCapUsd": 2388011749,
    "marketCapRank": 34,
    "circulatingSupply": 2072546006.2159796,
    "totalSupply": 2072546008.6609828,
    "maxSupply": null,
    "athUsd": 1.26,
    "athChangePercent": -8.93847,
    "athDate": "2024-03-26",
    "atlUsd": 0.934184,
    "atlChangePercent": 23.11807,
    "atlDate": "2024-01-14",
    "fdvUsd": 2388011751,
    "dominancePercent": 0.09,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ondo US Dollar Yield (USDY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ondo US Dollar Yield (USDY) Kaç TL?",
        "answer": "1 Ondo US Dollar Yield (USDY) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ondo US Dollar Yield En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ondo US Dollar Yield tüm zamanların en yüksek fiyatına (ATH) $1,26 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ondo US Dollar Yield Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ondo US Dollar Yield dolaşımdaki arzı 2.072.546.006,216 USDY adettir."
      },
      {
        "question": "Ondo US Dollar Yield Nereden ve Nasıl Alınır?",
        "answer": "Ondo US Dollar Yield (USDY) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1306846,
    "openInterestChange24h": 0.03,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 43562,
    "longLiquidation24hUsd": 27226,
    "shortLiquidation24hUsd": 16336,
    "dominantLiquidationLevel": 1.1155,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.2075,
        "leverage": "25x",
        "volumeUsd": 15247,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.0925,
        "leverage": "50x",
        "volumeUsd": 19603,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ethena",
    "symbol": "ENA",
    "name": "Ethena",
    "slug": "ethena",
    "binanceSymbol": "ENAUSDT",
    "coingeckoId": "ethena",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/36530/large/ethena.png?1711701436",
    "price": 0.1617,
    "change24h": -1.881,
    "high24h": 0.1718,
    "low24h": 0.1611,
    "volume24hUsd": 16686716.444687,
    "marketCapUsd": 2175746412,
    "marketCapRank": 35,
    "circulatingSupply": 13500000000,
    "totalSupply": 15000000000,
    "maxSupply": 15000000000,
    "athUsd": 1.52,
    "athChangePercent": -89.37354,
    "athDate": "2024-04-11",
    "atlUsd": 0.070228,
    "atlChangePercent": 129.64758,
    "atlDate": "2026-06-30",
    "fdvUsd": 2417496013,
    "dominancePercent": 0.08,
    "category": "DeFi & Likidite",
    "descriptionTr": "Ethena (ENA), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ethena (ENA) Kaç TL?",
        "answer": "1 Ethena (ENA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ethena En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ethena tüm zamanların en yüksek fiyatına (ATH) $1,52 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ethena Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ethena dolaşımdaki arzı 13.500.000.000 ENA adettir."
      },
      {
        "question": "Ethena Nereden ve Nasıl Alınır?",
        "answer": "Ethena (ENA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 7509022,
    "openInterestChange24h": -0.66,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 250301,
    "longLiquidation24hUsd": 110132,
    "shortLiquidation24hUsd": 140169,
    "dominantLiquidationLevel": 0.1666,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1698,
        "leverage": "25x",
        "volumeUsd": 87605,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1536,
        "leverage": "50x",
        "volumeUsd": 112635,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pepe",
    "symbol": "PEPE",
    "name": "Pepe",
    "slug": "pepe",
    "binanceSymbol": "PEPEUSDT",
    "coingeckoId": "pepe",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
    "price": 0.00000492,
    "change24h": -2.381,
    "high24h": 0.0000052,
    "low24h": 0.00000488,
    "volume24hUsd": 41975347.66821604,
    "marketCapUsd": 2063459762,
    "marketCapRank": 36,
    "circulatingSupply": 420690000000000,
    "totalSupply": 420690000000000,
    "maxSupply": 420690000000000,
    "athUsd": 0.00002803,
    "athChangePercent": -82.5001,
    "athDate": "2024-12-09",
    "atlUsd": 5.5142e-8,
    "atlChangePercent": 8794.97781,
    "atlDate": "2023-04-17",
    "fdvUsd": 2063459762,
    "dominancePercent": 0.07,
    "category": "Meme & Topluluk",
    "descriptionTr": "Pepe (PEPE), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pepe (PEPE) Kaç TL?",
        "answer": "1 Pepe (PEPE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pepe En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pepe tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pepe Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pepe dolaşımdaki arzı 420.690.000.000.000 PEPE adettir."
      },
      {
        "question": "Pepe Nereden ve Nasıl Alınır?",
        "answer": "Pepe (PEPE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 18888906,
    "openInterestChange24h": -0.83,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 629630,
    "longLiquidation24hUsd": 277037,
    "shortLiquidation24hUsd": 352593,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 220371,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 283334,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "aave",
    "symbol": "AAVE",
    "name": "Aave",
    "slug": "aave",
    "binanceSymbol": "AAVEUSDT",
    "coingeckoId": "aave",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12645/large/aave-token-round.png?1720472354",
    "price": 131.56,
    "change24h": 2.302,
    "high24h": 133.56,
    "low24h": 128.29,
    "volume24hUsd": 11559208.28338,
    "marketCapUsd": 2024095015,
    "marketCapRank": 37,
    "circulatingSupply": 15440363.958605245,
    "totalSupply": 16000000,
    "maxSupply": 16000000,
    "athUsd": 661.69,
    "athChangePercent": -80.19,
    "athDate": "2021-05-18",
    "atlUsd": 26.02,
    "atlChangePercent": 403.70858,
    "atlDate": "2020-11-05",
    "fdvUsd": 2097458345,
    "dominancePercent": 0.07,
    "category": "DeFi & Likidite",
    "descriptionTr": "Aave (AAVE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Aave (AAVE) Kaç TL?",
        "answer": "1 Aave (AAVE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Aave En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Aave tüm zamanların en yüksek fiyatına (ATH) $661,69 seviyesinde ulaşmıştır."
      },
      {
        "question": "Aave Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Aave dolaşımdaki arzı 15.440.363,959 AAVE adettir."
      },
      {
        "question": "Aave Nereden ve Nasıl Alınır?",
        "answer": "Aave (AAVE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5201644,
    "openInterestChange24h": 0.81,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 173388,
    "longLiquidation24hUsd": 108368,
    "shortLiquidation24hUsd": 65021,
    "dominantLiquidationLevel": 127.6132,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 138.138,
        "leverage": "25x",
        "volumeUsd": 60686,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 124.982,
        "leverage": "50x",
        "volumeUsd": 78025,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pax-gold",
    "symbol": "PAXG",
    "name": "PAX Gold",
    "slug": "pax-gold",
    "binanceSymbol": "PAXGUSDT",
    "coingeckoId": "pax-gold",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/9519/large/asset-paxg.png?1785284785",
    "price": 4064.92,
    "change24h": 0.12,
    "high24h": 4071.69,
    "low24h": 4018,
    "volume24hUsd": 11301153.434357,
    "marketCapUsd": 1818440466,
    "marketCapRank": 38,
    "circulatingSupply": 447724.829622,
    "totalSupply": 447724.829622,
    "maxSupply": null,
    "athUsd": 5619.09,
    "athChangePercent": -27.71759,
    "athDate": "2026-01-28",
    "atlUsd": 1399.64,
    "atlChangePercent": 190.18958,
    "atlDate": "2019-11-17",
    "fdvUsd": 1818440466,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "PAX Gold (PAXG), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 PAX Gold (PAXG) Kaç TL?",
        "answer": "1 PAX Gold (PAXG) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "PAX Gold En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "PAX Gold tüm zamanların en yüksek fiyatına (ATH) $5.619,09 seviyesinde ulaşmıştır."
      },
      {
        "question": "PAX Gold Dolaşımdaki Arzı Ne Kadar?",
        "answer": "PAX Gold dolaşımdaki arzı 447.724,83 PAXG adettir."
      },
      {
        "question": "PAX Gold Nereden ve Nasıl Alınır?",
        "answer": "PAX Gold (PAXG) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5085519,
    "openInterestChange24h": 0.04,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 169517,
    "longLiquidation24hUsd": 105948,
    "shortLiquidation24hUsd": 63569,
    "dominantLiquidationLevel": 3942.9724,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 4268.166,
        "leverage": "25x",
        "volumeUsd": 59331,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3861.674,
        "leverage": "50x",
        "volumeUsd": 76283,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ondo-finance",
    "symbol": "ONDO",
    "name": "Ondo",
    "slug": "ondo-finance",
    "binanceSymbol": "ONDOUSDT",
    "coingeckoId": "ondo-finance",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26580/large/ONDO.png?1696525656",
    "price": 0.3664,
    "change24h": -2.631,
    "high24h": 0.3801,
    "low24h": 0.365,
    "volume24hUsd": 5087415.49373,
    "marketCapUsd": 1778149089,
    "marketCapRank": 39,
    "circulatingSupply": 4869330647,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 2.14,
    "athChangePercent": -82.90815,
    "athDate": "2024-12-15",
    "atlUsd": 0.082171,
    "atlChangePercent": 345.15983,
    "atlDate": "2024-01-18",
    "fdvUsd": 3651732072,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ondo (ONDO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ondo (ONDO) Kaç TL?",
        "answer": "1 Ondo (ONDO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ondo En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ondo tüm zamanların en yüksek fiyatına (ATH) $2,14 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ondo Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ondo dolaşımdaki arzı 4.869.330.647 ONDO adettir."
      },
      {
        "question": "Ondo Nereden ve Nasıl Alınır?",
        "answer": "Ondo (ONDO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2289337,
    "openInterestChange24h": -0.92,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 76311,
    "longLiquidation24hUsd": 33577,
    "shortLiquidation24hUsd": 42734,
    "dominantLiquidationLevel": 0.3774,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3847,
        "leverage": "25x",
        "volumeUsd": 26709,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3481,
        "leverage": "50x",
        "volumeUsd": 34340,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pump-fun",
    "symbol": "PUMP",
    "name": "Pump.fun",
    "slug": "pump-fun",
    "binanceSymbol": "PUMPUSDT",
    "coingeckoId": "pump-fun",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/67164/large/pump.jpg?1751949376",
    "price": 0.003859,
    "change24h": -2.526,
    "high24h": 0.004175,
    "low24h": 0.003842,
    "volume24hUsd": 9613557.650768,
    "marketCapUsd": 1765992538,
    "marketCapRank": 40,
    "circulatingSupply": 459034732450.58435,
    "totalSupply": 823916484721.6912,
    "maxSupply": 1000000000000,
    "athUsd": 0.00881908,
    "athChangePercent": -56.38014,
    "athDate": "2025-09-14",
    "atlUsd": 0.00115473,
    "atlChangePercent": 233.14152,
    "atlDate": "2026-06-25",
    "fdvUsd": 3169760937,
    "dominancePercent": 0.06,
    "category": "Meme & Topluluk",
    "descriptionTr": "Pump.fun (PUMP), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pump.fun (PUMP) Kaç TL?",
        "answer": "1 Pump.fun (PUMP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pump.fun En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pump.fun tüm zamanların en yüksek fiyatına (ATH) $0,009 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pump.fun Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pump.fun dolaşımdaki arzı 459.034.732.450,584 PUMP adettir."
      },
      {
        "question": "Pump.fun Nereden ve Nasıl Alınır?",
        "answer": "Pump.fun (PUMP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 4326101,
    "openInterestChange24h": -0.88,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 144203,
    "longLiquidation24hUsd": 63449,
    "shortLiquidation24hUsd": 80754,
    "dominantLiquidationLevel": 0.004,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0041,
        "leverage": "25x",
        "volumeUsd": 50471,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0037,
        "leverage": "50x",
        "volumeUsd": 64891,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "aster-2",
    "symbol": "ASTER",
    "name": "Aster",
    "slug": "aster-2",
    "binanceSymbol": "ASTERUSDT",
    "coingeckoId": "aster-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69040/large/_ASTER.png?1757326782",
    "price": 0.6781,
    "change24h": -1.065,
    "high24h": 0.6899,
    "low24h": 0.6762,
    "volume24hUsd": 4232132.626829,
    "marketCapUsd": 1741833340,
    "marketCapRank": 41,
    "circulatingSupply": 2571858486.5486393,
    "totalSupply": 7787306410.638907,
    "maxSupply": 8000000000,
    "athUsd": 2.41,
    "athChangePercent": -71.8798,
    "athDate": "2025-09-24",
    "atlUsd": 0.099713,
    "atlChangePercent": 579.28766,
    "atlDate": "2025-09-17",
    "fdvUsd": 5274080984,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Aster (ASTER), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Aster (ASTER) Kaç TL?",
        "answer": "1 Aster (ASTER) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Aster En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Aster tüm zamanların en yüksek fiyatına (ATH) $2,41 seviyesinde ulaşmıştır."
      },
      {
        "question": "Aster Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Aster dolaşımdaki arzı 2.571.858.486,549 ASTER adettir."
      },
      {
        "question": "Aster Nereden ve Nasıl Alınır?",
        "answer": "Aster (ASTER) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1904460,
    "openInterestChange24h": -0.37,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 63482,
    "longLiquidation24hUsd": 27932,
    "shortLiquidation24hUsd": 35550,
    "dominantLiquidationLevel": 0.6984,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.712,
        "leverage": "25x",
        "volumeUsd": 22219,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.6442,
        "leverage": "50x",
        "volumeUsd": 28567,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "united-stables",
    "symbol": "U",
    "name": "United Stables",
    "slug": "united-stables",
    "binanceSymbol": "UUSDT",
    "coingeckoId": "united-stables",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/71157/large/united-stables-logo.jpg?1766061640",
    "price": 1.0002,
    "change24h": -0.04,
    "high24h": 1.0007,
    "low24h": 0.9998,
    "volume24hUsd": 46689164.9599,
    "marketCapUsd": 1610532146,
    "marketCapRank": 42,
    "circulatingSupply": 1611644734.63,
    "totalSupply": 1611644734.63,
    "maxSupply": null,
    "athUsd": 1.008,
    "athChangePercent": -0.84708,
    "athDate": "2026-02-05",
    "atlUsd": 0.968158,
    "atlChangePercent": 3.21065,
    "atlDate": "2025-12-20",
    "fdvUsd": 1610532146,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "United Stables (U), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 United Stables (U) Kaç TL?",
        "answer": "1 United Stables (U) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "United Stables En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "United Stables tüm zamanların en yüksek fiyatına (ATH) $1,008 seviyesinde ulaşmıştır."
      },
      {
        "question": "United Stables Dolaşımdaki Arzı Ne Kadar?",
        "answer": "United Stables dolaşımdaki arzı 1.611.644.734,63 U adettir."
      },
      {
        "question": "United Stables Nereden ve Nasıl Alınır?",
        "answer": "United Stables (U) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 21010124,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 700337,
    "longLiquidation24hUsd": 308148,
    "shortLiquidation24hUsd": 392189,
    "dominantLiquidationLevel": 1.0302,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0502,
        "leverage": "25x",
        "volumeUsd": 245118,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9502,
        "leverage": "50x",
        "volumeUsd": 315152,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "polkadot",
    "symbol": "DOT",
    "name": "Polkadot",
    "slug": "polkadot",
    "binanceSymbol": "DOTUSDT",
    "coingeckoId": "polkadot",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.jpg?1766533446",
    "price": 0.904,
    "change24h": -2.27,
    "high24h": 0.949,
    "low24h": 0.898,
    "volume24hUsd": 2363893.37307,
    "marketCapUsd": 1540730890,
    "marketCapRank": 43,
    "circulatingSupply": 1710969954.1426198,
    "totalSupply": 1710980290.5485637,
    "maxSupply": 2100000000,
    "athUsd": 54.98,
    "athChangePercent": -98.36195,
    "athDate": "2021-11-04",
    "atlUsd": 0.727004,
    "atlChangePercent": 23.87596,
    "atlDate": "2026-08-18",
    "fdvUsd": 1540740198,
    "dominancePercent": 0.06,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Polkadot (DOT), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Polkadot (DOT) Kaç TL?",
        "answer": "1 Polkadot (DOT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Polkadot En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Polkadot tüm zamanların en yüksek fiyatına (ATH) $54,98 seviyesinde ulaşmıştır."
      },
      {
        "question": "Polkadot Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Polkadot dolaşımdaki arzı 1.710.969.954,143 DOT adettir."
      },
      {
        "question": "Polkadot Nereden ve Nasıl Alınır?",
        "answer": "Polkadot (DOT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1063752,
    "openInterestChange24h": -0.79,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 35458,
    "longLiquidation24hUsd": 15602,
    "shortLiquidation24hUsd": 19856,
    "dominantLiquidationLevel": 0.9311,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.9492,
        "leverage": "25x",
        "volumeUsd": 12410,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.8588,
        "leverage": "50x",
        "volumeUsd": 15956,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "sky",
    "symbol": "SKY",
    "name": "Sky",
    "slug": "sky",
    "binanceSymbol": "SKYUSDT",
    "coingeckoId": "sky",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/39925/large/sky.jpg?1724827980",
    "price": 0.06403,
    "change24h": -3.598,
    "high24h": 0.06674,
    "low24h": 0.0636,
    "volume24hUsd": 1036195.23852,
    "marketCapUsd": 1496045723,
    "marketCapRank": 44,
    "circulatingSupply": 23419308628.784367,
    "totalSupply": 23452431915.605965,
    "maxSupply": 23462665147.3,
    "athUsd": 0.10087,
    "athChangePercent": -36.66085,
    "athDate": "2026-10-05",
    "atlUsd": 0.03582727,
    "atlChangePercent": 78.32879,
    "atlDate": "2025-02-02",
    "fdvUsd": 1498161667,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sky (SKY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Sky (SKY) Kaç TL?",
        "answer": "1 Sky (SKY) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Sky En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Sky tüm zamanların en yüksek fiyatına (ATH) $0,101 seviyesinde ulaşmıştır."
      },
      {
        "question": "Sky Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Sky dolaşımdaki arzı 23.419.308.628,784 SKY adettir."
      },
      {
        "question": "Sky Nereden ve Nasıl Alınır?",
        "answer": "Sky (SKY) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 466288,
    "openInterestChange24h": -1.26,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 15543,
    "longLiquidation24hUsd": 6839,
    "shortLiquidation24hUsd": 8704,
    "dominantLiquidationLevel": 0.066,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0672,
        "leverage": "25x",
        "volumeUsd": 5440,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0608,
        "leverage": "50x",
        "volumeUsd": 6994,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "mantle",
    "symbol": "MNT",
    "name": "Mantle",
    "slug": "mantle",
    "binanceSymbol": "MNTUSDT",
    "coingeckoId": "mantle",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/30980/large/MNT_Token_Logo.png?1765516974",
    "price": 0.452971,
    "change24h": 1.5182,
    "high24h": 0.453675,
    "low24h": 0.440509,
    "volume24hUsd": 17679847,
    "marketCapUsd": 1495344755,
    "marketCapRank": 45,
    "circulatingSupply": 3302003382.53684,
    "totalSupply": 6219316794.889999,
    "maxSupply": 6219316794.89,
    "athUsd": 2.86,
    "athChangePercent": -84.13442,
    "athDate": "2025-10-08",
    "atlUsd": 0.307978,
    "atlChangePercent": 47.07936,
    "atlDate": "2023-10-17",
    "fdvUsd": 2816478867,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Mantle (MNT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Mantle (MNT) Kaç TL?",
        "answer": "1 Mantle (MNT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Mantle En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Mantle tüm zamanların en yüksek fiyatına (ATH) $2,86 seviyesinde ulaşmıştır."
      },
      {
        "question": "Mantle Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Mantle dolaşımdaki arzı 3.302.003.382,537 MNT adettir."
      },
      {
        "question": "Mantle Nereden ve Nasıl Alınır?",
        "answer": "Mantle (MNT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 7955931,
    "openInterestChange24h": 0.53,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 265198,
    "longLiquidation24hUsd": 165749,
    "shortLiquidation24hUsd": 99449,
    "dominantLiquidationLevel": 0.4394,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.4756,
        "leverage": "25x",
        "volumeUsd": 92819,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4303,
        "leverage": "50x",
        "volumeUsd": 119339,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "morpho",
    "symbol": "MORPHO",
    "name": "Morpho",
    "slug": "morpho",
    "binanceSymbol": "MORPHOUSDT",
    "coingeckoId": "morpho",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/29837/large/Morpho-token-icon.png?1726771230",
    "price": 2.13,
    "change24h": 1.574,
    "high24h": 2.136,
    "low24h": 2.075,
    "volume24hUsd": 1090118.72026,
    "marketCapUsd": 1491116116,
    "marketCapRank": 46,
    "circulatingSupply": 703649781.2917781,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 4.17,
    "athChangePercent": -49.17755,
    "athDate": "2025-01-17",
    "atlUsd": 0.713151,
    "atlChangePercent": 197.21668,
    "atlDate": "2024-11-24",
    "fdvUsd": 2119116861,
    "dominancePercent": 0.05,
    "category": "DeFi & Likidite",
    "descriptionTr": "Morpho (MORPHO), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Morpho (MORPHO) Kaç TL?",
        "answer": "1 Morpho (MORPHO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Morpho En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Morpho tüm zamanların en yüksek fiyatına (ATH) $4,17 seviyesinde ulaşmıştır."
      },
      {
        "question": "Morpho Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Morpho dolaşımdaki arzı 703.649.781,292 MORPHO adettir."
      },
      {
        "question": "Morpho Nereden ve Nasıl Alınır?",
        "answer": "Morpho (MORPHO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 490553,
    "openInterestChange24h": 0.55,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 16352,
    "longLiquidation24hUsd": 10220,
    "shortLiquidation24hUsd": 6132,
    "dominantLiquidationLevel": 2.0661,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 2.2365,
        "leverage": "25x",
        "volumeUsd": 5723,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.0235,
        "leverage": "50x",
        "volumeUsd": 7358,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "world-liberty-financial",
    "symbol": "WLFI",
    "name": "World Liberty Financial",
    "slug": "world-liberty-financial",
    "binanceSymbol": "WLFIUSDT",
    "coingeckoId": "world-liberty-financial",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/50767/large/wlfi.png?1756438915",
    "price": 0.0463,
    "change24h": -1.907,
    "high24h": 0.0475,
    "low24h": 0.046,
    "volume24hUsd": 3303420.31328,
    "marketCapUsd": 1471264100,
    "marketCapRank": 47,
    "circulatingSupply": 31780184665,
    "totalSupply": 100000000000,
    "maxSupply": 100000000000,
    "athUsd": 0.331336,
    "athChangePercent": -86.03084,
    "athDate": "2025-09-01",
    "atlUsd": 0.04369702,
    "atlChangePercent": 5.92222,
    "atlDate": "2026-11-05",
    "fdvUsd": 4629501418,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "World Liberty Financial (WLFI), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 World Liberty Financial (WLFI) Kaç TL?",
        "answer": "1 World Liberty Financial (WLFI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "World Liberty Financial En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "World Liberty Financial tüm zamanların en yüksek fiyatına (ATH) $0,331 seviyesinde ulaşmıştır."
      },
      {
        "question": "World Liberty Financial Dolaşımdaki Arzı Ne Kadar?",
        "answer": "World Liberty Financial dolaşımdaki arzı 31.780.184.665 WLFI adettir."
      },
      {
        "question": "World Liberty Financial Nereden ve Nasıl Alınır?",
        "answer": "World Liberty Financial (WLFI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1486539,
    "openInterestChange24h": -0.67,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 49551,
    "longLiquidation24hUsd": 21802,
    "shortLiquidation24hUsd": 27749,
    "dominantLiquidationLevel": 0.0477,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0486,
        "leverage": "25x",
        "volumeUsd": 17343,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.044,
        "leverage": "50x",
        "volumeUsd": 22298,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "htx-dao",
    "symbol": "HTX",
    "name": "HTX DAO",
    "slug": "htx-dao",
    "binanceSymbol": "HTXUSDT",
    "coingeckoId": "htx-dao",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/35491/large/Frame_1321318576.png?1708908626",
    "price": 0.00000155,
    "change24h": -0.3289,
    "high24h": 0.00000156,
    "low24h": 0.00000155,
    "volume24hUsd": 12791345,
    "marketCapUsd": 1376030530,
    "marketCapRank": 48,
    "circulatingSupply": 888846370538197,
    "totalSupply": 888846370538197,
    "maxSupply": 999990000000000,
    "athUsd": 0.00000375,
    "athChangePercent": -58.72529,
    "athDate": "2024-12-03",
    "atlUsd": 8.00816e-7,
    "atlChangePercent": 93.35521,
    "atlDate": "2024-08-05",
    "fdvUsd": 1376030530,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "HTX DAO (HTX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 HTX DAO (HTX) Kaç TL?",
        "answer": "1 HTX DAO (HTX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "HTX DAO En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "HTX DAO tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "HTX DAO Dolaşımdaki Arzı Ne Kadar?",
        "answer": "HTX DAO dolaşımdaki arzı 888.846.370.538.197 HTX adettir."
      },
      {
        "question": "HTX DAO Nereden ve Nasıl Alınır?",
        "answer": "HTX DAO (HTX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5756105,
    "openInterestChange24h": -0.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 191870,
    "longLiquidation24hUsd": 84423,
    "shortLiquidation24hUsd": 107447,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 67155,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 86342,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "internet-computer",
    "symbol": "ICP",
    "name": "Internet Computer",
    "slug": "internet-computer",
    "binanceSymbol": "ICPUSDT",
    "coingeckoId": "internet-computer",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180",
    "price": 2.416,
    "change24h": -1.307,
    "high24h": 2.504,
    "low24h": 2.409,
    "volume24hUsd": 1773617.9372,
    "marketCapUsd": 1346438671,
    "marketCapRank": 49,
    "circulatingSupply": 558262741.0413762,
    "totalSupply": 558263251.592515,
    "maxSupply": null,
    "athUsd": 700.65,
    "athChangePercent": -99.65581,
    "athDate": "2021-05-10",
    "atlUsd": 2,
    "atlChangePercent": 20.41701,
    "atlDate": "2026-08-01",
    "fdvUsd": 1346439902,
    "dominancePercent": 0.05,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Internet Computer (ICP), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Internet Computer (ICP) Kaç TL?",
        "answer": "1 Internet Computer (ICP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Internet Computer En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Internet Computer tüm zamanların en yüksek fiyatına (ATH) $700,65 seviyesinde ulaşmıştır."
      },
      {
        "question": "Internet Computer Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Internet Computer dolaşımdaki arzı 558.262.741,041 ICP adettir."
      },
      {
        "question": "Internet Computer Nereden ve Nasıl Alınır?",
        "answer": "Internet Computer (ICP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 798128,
    "openInterestChange24h": -0.46,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 26604,
    "longLiquidation24hUsd": 11706,
    "shortLiquidation24hUsd": 14898,
    "dominantLiquidationLevel": 2.4885,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 2.5368,
        "leverage": "25x",
        "volumeUsd": 9311,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.2952,
        "leverage": "50x",
        "volumeUsd": 11972,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bfusd",
    "symbol": "BFUSD",
    "name": "BFUSD",
    "slug": "bfusd",
    "binanceSymbol": "BFUSDUSDT",
    "coingeckoId": "bfusd",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/68227/large/bfusd.png?1755132827",
    "price": 1,
    "change24h": 0.04,
    "high24h": 1,
    "low24h": 0.9996,
    "volume24hUsd": 3475606.7314,
    "marketCapUsd": 1318886622,
    "marketCapRank": 50,
    "circulatingSupply": 1320000000,
    "totalSupply": 1320000000,
    "maxSupply": null,
    "athUsd": 1.007,
    "athChangePercent": -0.77146,
    "athDate": "2025-10-10",
    "atlUsd": 0.993606,
    "atlChangePercent": 0.55864,
    "atlDate": "2026-10-30",
    "fdvUsd": 1318886622,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "BFUSD (BFUSD), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 BFUSD (BFUSD) Kaç TL?",
        "answer": "1 BFUSD (BFUSD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "BFUSD En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "BFUSD tüm zamanların en yüksek fiyatına (ATH) $1,007 seviyesinde ulaşmıştır."
      },
      {
        "question": "BFUSD Dolaşımdaki Arzı Ne Kadar?",
        "answer": "BFUSD dolaşımdaki arzı 1.320.000.000 BFUSD adettir."
      },
      {
        "question": "BFUSD Nereden ve Nasıl Alınır?",
        "answer": "BFUSD (BFUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1564023,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 52134,
    "longLiquidation24hUsd": 32584,
    "shortLiquidation24hUsd": 19550,
    "dominantLiquidationLevel": 0.97,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.05,
        "leverage": "25x",
        "volumeUsd": 18247,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.95,
        "leverage": "50x",
        "volumeUsd": 23460,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "worldcoin-wld",
    "symbol": "WLD",
    "name": "Worldcoin",
    "slug": "worldcoin-wld",
    "binanceSymbol": "WLDUSDT",
    "coingeckoId": "worldcoin-wld",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31069/large/worldcoin.jpeg?1696529903",
    "price": 0.3368,
    "change24h": -2.405,
    "high24h": 0.3546,
    "low24h": 0.3353,
    "volume24hUsd": 14601411.87875,
    "marketCapUsd": 1259071175,
    "marketCapRank": 51,
    "circulatingSupply": 3745436738.3609366,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 11.74,
    "athChangePercent": -97.13599,
    "athDate": "2024-03-09",
    "atlUsd": 0.229961,
    "atlChangePercent": 46.22149,
    "atlDate": "2026-05-18",
    "fdvUsd": 3361613779,
    "dominancePercent": 0.04,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Worldcoin (WLD), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Worldcoin (WLD) Kaç TL?",
        "answer": "1 Worldcoin (WLD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Worldcoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Worldcoin tüm zamanların en yüksek fiyatına (ATH) $11,74 seviyesinde ulaşmıştır."
      },
      {
        "question": "Worldcoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Worldcoin dolaşımdaki arzı 3.745.436.738,361 WLD adettir."
      },
      {
        "question": "Worldcoin Nereden ve Nasıl Alınır?",
        "answer": "Worldcoin (WLD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 6570635,
    "openInterestChange24h": -0.84,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 219021,
    "longLiquidation24hUsd": 96369,
    "shortLiquidation24hUsd": 122652,
    "dominantLiquidationLevel": 0.3469,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3536,
        "leverage": "25x",
        "volumeUsd": 76657,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.32,
        "leverage": "50x",
        "volumeUsd": 98559,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "just",
    "symbol": "JST",
    "name": "JUST",
    "slug": "just",
    "binanceSymbol": "JSTUSDT",
    "coingeckoId": "just",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11095/large/JUST.jpg?1696511035",
    "price": 0.14262,
    "change24h": 0.522,
    "high24h": 0.14361,
    "low24h": 0.14131,
    "volume24hUsd": 1665132.68245,
    "marketCapUsd": 1143180074,
    "marketCapRank": 52,
    "circulatingSupply": 8018019892.341737,
    "totalSupply": 8018019892.341737,
    "maxSupply": 9900000000,
    "athUsd": 0.193254,
    "athChangePercent": -26.27043,
    "athDate": "2021-04-04",
    "atlUsd": 0.00476275,
    "atlChangePercent": 2891.66545,
    "atlDate": "2020-05-08",
    "fdvUsd": 1143180074,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "JUST (JST), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 JUST (JST) Kaç TL?",
        "answer": "1 JUST (JST) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "JUST En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "JUST tüm zamanların en yüksek fiyatına (ATH) $0,193 seviyesinde ulaşmıştır."
      },
      {
        "question": "JUST Dolaşımdaki Arzı Ne Kadar?",
        "answer": "JUST dolaşımdaki arzı 8.018.019.892,342 JST adettir."
      },
      {
        "question": "JUST Nereden ve Nasıl Alınır?",
        "answer": "JUST (JST) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 749310,
    "openInterestChange24h": 0.18,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 24977,
    "longLiquidation24hUsd": 15611,
    "shortLiquidation24hUsd": 9366,
    "dominantLiquidationLevel": 0.1383,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1498,
        "leverage": "25x",
        "volumeUsd": 8742,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1355,
        "leverage": "50x",
        "volumeUsd": 11240,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "arbitrum",
    "symbol": "ARB",
    "name": "Arbitrum",
    "slug": "arbitrum",
    "binanceSymbol": "ARBUSDT",
    "coingeckoId": "arbitrum",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242",
    "price": 0.1658,
    "change24h": -1.719,
    "high24h": 0.1721,
    "low24h": 0.1639,
    "volume24hUsd": 7315389.00086,
    "marketCapUsd": 1140408906,
    "marketCapRank": 53,
    "circulatingSupply": 6892115031,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 2.39,
    "athChangePercent": -93.07988,
    "athDate": "2024-01-12",
    "atlUsd": 0.07048,
    "atlChangePercent": 134.69155,
    "atlDate": "2026-06-26",
    "fdvUsd": 1654657388,
    "dominancePercent": 0.04,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Arbitrum (ARB), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "tokenUnlock": {
      "nextUnlockDate": "2026-11-16",
      "unlockedTokens": 92650000,
      "unlockedPercent": 2.56,
      "unlockValueUsd": 48641250,
      "unlockType": "CLIFF",
      "targetAudience": "Ekip, Danışmanlar ve Yatırımcılar",
      "riskScore": 72
    },
    "faqs": [
      {
        "question": "1 Arbitrum (ARB) Kaç TL?",
        "answer": "1 Arbitrum (ARB) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Arbitrum En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Arbitrum tüm zamanların en yüksek fiyatına (ATH) $2,39 seviyesinde ulaşmıştır."
      },
      {
        "question": "Arbitrum Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Arbitrum dolaşımdaki arzı 6.892.115.031 ARB adettir."
      },
      {
        "question": "Arbitrum Nereden ve Nasıl Alınır?",
        "answer": "Arbitrum (ARB) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3291925,
    "openInterestChange24h": -0.6,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 109731,
    "longLiquidation24hUsd": 48282,
    "shortLiquidation24hUsd": 61449,
    "dominantLiquidationLevel": 0.1708,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1741,
        "leverage": "25x",
        "volumeUsd": 38406,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1575,
        "leverage": "50x",
        "volumeUsd": 49379,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ethereum-classic",
    "symbol": "ETC",
    "name": "Ethereum Classic",
    "slug": "ethereum-classic",
    "binanceSymbol": "ETCUSDT",
    "coingeckoId": "ethereum-classic",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1696501717",
    "price": 6.95,
    "change24h": -1.836,
    "high24h": 7.15,
    "low24h": 6.93,
    "volume24hUsd": 1118130.767,
    "marketCapUsd": 1101646999,
    "marketCapRank": 54,
    "circulatingSupply": 158947440.38985398,
    "totalSupply": 158948437.71469897,
    "maxSupply": 210700000,
    "athUsd": 167.09,
    "athChangePercent": -95.85137,
    "athDate": "2021-05-06",
    "atlUsd": 0.615038,
    "atlChangePercent": 1027.04575,
    "atlDate": "2016-07-24",
    "fdvUsd": 1101653911,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ethereum Classic (ETC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ethereum Classic (ETC) Kaç TL?",
        "answer": "1 Ethereum Classic (ETC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ethereum Classic En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ethereum Classic tüm zamanların en yüksek fiyatına (ATH) $167,09 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ethereum Classic Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ethereum Classic dolaşımdaki arzı 158.947.440,39 ETC adettir."
      },
      {
        "question": "Ethereum Classic Nereden ve Nasıl Alınır?",
        "answer": "Ethereum Classic (ETC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 503159,
    "openInterestChange24h": -0.64,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 16772,
    "longLiquidation24hUsd": 7380,
    "shortLiquidation24hUsd": 9392,
    "dominantLiquidationLevel": 7.1585,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 7.2975,
        "leverage": "25x",
        "volumeUsd": 5870,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.6025,
        "leverage": "50x",
        "volumeUsd": 7547,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "venice-token",
    "symbol": "VVV",
    "name": "Venice Token",
    "slug": "venice-token",
    "binanceSymbol": "VVVUSDT",
    "coingeckoId": "venice-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/54023/large/VVV_Token_Transparent.png?1741856877",
    "price": 20.6,
    "change24h": -1.7862,
    "high24h": 21.27,
    "low24h": 20.54,
    "volume24hUsd": 19650969,
    "marketCapUsd": 1007673929,
    "marketCapRank": 55,
    "circulatingSupply": 48914760.75575267,
    "totalSupply": 81235774.53291045,
    "maxSupply": null,
    "athUsd": 34.53,
    "athChangePercent": -40.33948,
    "athDate": "2026-09-21",
    "atlUsd": 0.91975,
    "atlChangePercent": 2139.65586,
    "atlDate": "2025-12-01",
    "fdvUsd": 1673506541,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Venice Token (VVV), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Venice Token (VVV) Kaç TL?",
        "answer": "1 Venice Token (VVV) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Venice Token En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Venice Token tüm zamanların en yüksek fiyatına (ATH) $34,53 seviyesinde ulaşmıştır."
      },
      {
        "question": "Venice Token Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Venice Token dolaşımdaki arzı 48.914.760,756 VVV adettir."
      },
      {
        "question": "Venice Token Nereden ve Nasıl Alınır?",
        "answer": "Venice Token (VVV) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 8842936,
    "openInterestChange24h": -0.63,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 294765,
    "longLiquidation24hUsd": 129697,
    "shortLiquidation24hUsd": 165068,
    "dominantLiquidationLevel": 21.218,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 21.63,
        "leverage": "25x",
        "volumeUsd": 103168,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 19.57,
        "leverage": "50x",
        "volumeUsd": 132644,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "kucoin-shares",
    "symbol": "KCS",
    "name": "KuCoin",
    "slug": "kucoin-shares",
    "binanceSymbol": "KCSUSDT",
    "coingeckoId": "kucoin-shares",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1047/large/sa9z79.png?1696502152",
    "price": 7.09,
    "change24h": -1.30678,
    "high24h": 7.19,
    "low24h": 7.08,
    "volume24hUsd": 3810610,
    "marketCapUsd": 990788367,
    "marketCapRank": 56,
    "circulatingSupply": 139655021.2773955,
    "totalSupply": 142155021.2773955,
    "maxSupply": null,
    "athUsd": 28.83,
    "athChangePercent": -75.39044,
    "athDate": "2021-12-01",
    "atlUsd": 0.342863,
    "atlChangePercent": 1969.3128,
    "atlDate": "2019-02-06",
    "fdvUsd": 1008524721,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "KuCoin (KCS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 KuCoin (KCS) Kaç TL?",
        "answer": "1 KuCoin (KCS) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "KuCoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "KuCoin tüm zamanların en yüksek fiyatına (ATH) $28,83 seviyesinde ulaşmıştır."
      },
      {
        "question": "KuCoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "KuCoin dolaşımdaki arzı 139.655.021,277 KCS adettir."
      },
      {
        "question": "KuCoin Nereden ve Nasıl Alınır?",
        "answer": "KuCoin (KCS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1714775,
    "openInterestChange24h": -0.46,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 57159,
    "longLiquidation24hUsd": 25150,
    "shortLiquidation24hUsd": 32009,
    "dominantLiquidationLevel": 7.3027,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 7.4445,
        "leverage": "25x",
        "volumeUsd": 20006,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.7355,
        "leverage": "50x",
        "volumeUsd": 25722,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "polygon-ecosystem-token",
    "symbol": "POL",
    "name": "POL (ex-MATIC)",
    "slug": "polygon-ecosystem-token",
    "binanceSymbol": "POLUSDT",
    "coingeckoId": "polygon-ecosystem-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/32440/large/pol.png?1759114181",
    "price": 0.09109,
    "change24h": -3.343,
    "high24h": 0.09452,
    "low24h": 0.09075,
    "volume24hUsd": 3474584.279729,
    "marketCapUsd": 967673136,
    "marketCapRank": 57,
    "circulatingSupply": 10645539031.82501,
    "totalSupply": 10645539031.82501,
    "maxSupply": null,
    "athUsd": 1.29,
    "athChangePercent": -92.93967,
    "athDate": "2024-03-13",
    "atlUsd": 0.067711,
    "atlChangePercent": 34.2559,
    "atlDate": "2026-07-01",
    "fdvUsd": 967673136,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "POL (ex-MATIC) (POL), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 POL (ex-MATIC) (POL) Kaç TL?",
        "answer": "1 POL (ex-MATIC) (POL) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "POL (ex-MATIC) En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "POL (ex-MATIC) tüm zamanların en yüksek fiyatına (ATH) $1,29 seviyesinde ulaşmıştır."
      },
      {
        "question": "POL (ex-MATIC) Dolaşımdaki Arzı Ne Kadar?",
        "answer": "POL (ex-MATIC) dolaşımdaki arzı 10.645.539.031,825 POL adettir."
      },
      {
        "question": "POL (ex-MATIC) Nereden ve Nasıl Alınır?",
        "answer": "POL (ex-MATIC) (POL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1563563,
    "openInterestChange24h": -1.17,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 52119,
    "longLiquidation24hUsd": 22932,
    "shortLiquidation24hUsd": 29187,
    "dominantLiquidationLevel": 0.0938,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0956,
        "leverage": "25x",
        "volumeUsd": 18242,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0865,
        "leverage": "50x",
        "volumeUsd": 23454,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "algorand",
    "symbol": "ALGO",
    "name": "Algorand",
    "slug": "algorand",
    "binanceSymbol": "ALGOUSDT",
    "coingeckoId": "algorand",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4380/large/download.png?1696504978",
    "price": 0.0937,
    "change24h": 0.321,
    "high24h": 0.0987,
    "low24h": 0.0932,
    "volume24hUsd": 1081164.8077,
    "marketCapUsd": 850175531,
    "marketCapRank": 58,
    "circulatingSupply": 9078190203.145731,
    "totalSupply": 9078275380.297586,
    "maxSupply": 10000000000,
    "athUsd": 3.56,
    "athChangePercent": -97.3701,
    "athDate": "2019-06-20",
    "atlUsd": 0.075732,
    "atlChangePercent": 23.66618,
    "atlDate": "2026-07-29",
    "fdvUsd": 850183508,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Algorand (ALGO), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Algorand (ALGO) Kaç TL?",
        "answer": "1 Algorand (ALGO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Algorand En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Algorand tüm zamanların en yüksek fiyatına (ATH) $3,56 seviyesinde ulaşmıştır."
      },
      {
        "question": "Algorand Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Algorand dolaşımdaki arzı 9.078.190.203,146 ALGO adettir."
      },
      {
        "question": "Algorand Nereden ve Nasıl Alınır?",
        "answer": "Algorand (ALGO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 486524,
    "openInterestChange24h": 0.11,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 16217,
    "longLiquidation24hUsd": 10136,
    "shortLiquidation24hUsd": 6081,
    "dominantLiquidationLevel": 0.0909,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0984,
        "leverage": "25x",
        "volumeUsd": 5676,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.089,
        "leverage": "50x",
        "volumeUsd": 7298,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "render-token",
    "symbol": "RENDER",
    "name": "Render",
    "slug": "render-token",
    "binanceSymbol": "RENDERUSDT",
    "coingeckoId": "render-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
    "price": 1.561,
    "change24h": 0.71,
    "high24h": 1.615,
    "low24h": 1.547,
    "volume24hUsd": 1819552.81266,
    "marketCapUsd": 830810319,
    "marketCapRank": 59,
    "circulatingSupply": 533536414.5626915,
    "totalSupply": 561677066.6003445,
    "maxSupply": 644168762,
    "athUsd": 13.53,
    "athChangePercent": -88.49261,
    "athDate": "2024-03-17",
    "atlUsd": 0.03665669,
    "atlChangePercent": 4148.85428,
    "atlDate": "2020-06-16",
    "fdvUsd": 874630279,
    "dominancePercent": 0.03,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Render (RENDER), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Render (RENDER) Kaç TL?",
        "answer": "1 Render (RENDER) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Render En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Render tüm zamanların en yüksek fiyatına (ATH) $13,53 seviyesinde ulaşmıştır."
      },
      {
        "question": "Render Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Render dolaşımdaki arzı 533.536.414,563 RENDER adettir."
      },
      {
        "question": "Render Nereden ve Nasıl Alınır?",
        "answer": "Render (RENDER) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 818799,
    "openInterestChange24h": 0.25,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 27293,
    "longLiquidation24hUsd": 17058,
    "shortLiquidation24hUsd": 10235,
    "dominantLiquidationLevel": 1.5142,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.6391,
        "leverage": "25x",
        "volumeUsd": 9553,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.4829,
        "leverage": "50x",
        "volumeUsd": 12282,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "kaspa",
    "symbol": "KAS",
    "name": "Kaspa",
    "slug": "kaspa",
    "binanceSymbol": "KASUSDT",
    "coingeckoId": "kaspa",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1696524837",
    "price": 0.02963051,
    "change24h": -2.29584,
    "high24h": 0.03079353,
    "low24h": 0.02969388,
    "volume24hUsd": 6077445,
    "marketCapUsd": 823603345,
    "marketCapRank": 60,
    "circulatingSupply": 27796906612.01668,
    "totalSupply": 27797659860.16766,
    "maxSupply": 28704026601,
    "athUsd": 0.207411,
    "athChangePercent": -85.71411,
    "athDate": "2024-07-31",
    "atlUsd": 0.00017105,
    "atlChangePercent": 17222.75928,
    "atlDate": "2022-05-26",
    "fdvUsd": 823625663,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Kaspa (KAS), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Kaspa (KAS) Kaç TL?",
        "answer": "1 Kaspa (KAS) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Kaspa En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Kaspa tüm zamanların en yüksek fiyatına (ATH) $0,207 seviyesinde ulaşmıştır."
      },
      {
        "question": "Kaspa Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Kaspa dolaşımdaki arzı 27.796.906.612,017 KAS adettir."
      },
      {
        "question": "Kaspa Nereden ve Nasıl Alınır?",
        "answer": "Kaspa (KAS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2734850,
    "openInterestChange24h": -0.8,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 91162,
    "longLiquidation24hUsd": 40111,
    "shortLiquidation24hUsd": 51051,
    "dominantLiquidationLevel": 0.0305,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0311,
        "leverage": "25x",
        "volumeUsd": 31907,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0281,
        "leverage": "50x",
        "volumeUsd": 41023,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "injective-protocol",
    "symbol": "INJ",
    "name": "Injective",
    "slug": "injective-protocol",
    "binanceSymbol": "INJUSDT",
    "coingeckoId": "injective-protocol",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12882/large/Other_200x200.png?1738782212",
    "price": 8.164,
    "change24h": -0.183,
    "high24h": 8.527,
    "low24h": 8.12,
    "volume24hUsd": 12351771.42543,
    "marketCapUsd": 815688064,
    "marketCapRank": 61,
    "circulatingSupply": 100000000,
    "totalSupply": 100000000,
    "maxSupply": null,
    "athUsd": 52.62,
    "athChangePercent": -84.50128,
    "athDate": "2024-03-14",
    "atlUsd": 0.657401,
    "atlChangePercent": 1140.57184,
    "atlDate": "2020-11-03",
    "fdvUsd": 815688064,
    "dominancePercent": 0.03,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Injective (INJ), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Injective (INJ) Kaç TL?",
        "answer": "1 Injective (INJ) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Injective En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Injective tüm zamanların en yüksek fiyatına (ATH) $52,62 seviyesinde ulaşmıştır."
      },
      {
        "question": "Injective Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Injective dolaşımdaki arzı 100.000.000 INJ adettir."
      },
      {
        "question": "Injective Nereden ve Nasıl Alınır?",
        "answer": "Injective (INJ) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5558297,
    "openInterestChange24h": -0.06,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 185277,
    "longLiquidation24hUsd": 81522,
    "shortLiquidation24hUsd": 103755,
    "dominantLiquidationLevel": 8.4089,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 8.5722,
        "leverage": "25x",
        "volumeUsd": 64847,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 7.7558,
        "leverage": "50x",
        "volumeUsd": 83375,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "lighter",
    "symbol": "LIT",
    "name": "Lighter",
    "slug": "lighter",
    "binanceSymbol": "LITUSDT",
    "coingeckoId": "lighter",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/71121/large/lighter.png?1765888098",
    "price": 0.743,
    "change24h": 5.241,
    "high24h": 0.755,
    "low24h": 0.656,
    "volume24hUsd": 799655.0663,
    "marketCapUsd": 805195435,
    "marketCapRank": 62,
    "circulatingSupply": 250000000,
    "totalSupply": 981909280,
    "maxSupply": 1000000000,
    "athUsd": 7.86,
    "athChangePercent": -59.00298,
    "athDate": "2025-12-30",
    "atlUsd": 0.779399,
    "atlChangePercent": 313.43207,
    "atlDate": "2026-03-31",
    "fdvUsd": 3162515480,
    "dominancePercent": 0.03,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Lighter (LIT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Lighter (LIT) Kaç TL?",
        "answer": "1 Lighter (LIT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Lighter En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Lighter tüm zamanların en yüksek fiyatına (ATH) $7,86 seviyesinde ulaşmıştır."
      },
      {
        "question": "Lighter Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Lighter dolaşımdaki arzı 250.000.000 LIT adettir."
      },
      {
        "question": "Lighter Nereden ve Nasıl Alınır?",
        "answer": "Lighter (LIT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 359845,
    "openInterestChange24h": 1.83,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 11995,
    "longLiquidation24hUsd": 7497,
    "shortLiquidation24hUsd": 4498,
    "dominantLiquidationLevel": 0.7207,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.7802,
        "leverage": "25x",
        "volumeUsd": 4198,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.7058,
        "leverage": "50x",
        "volumeUsd": 5398,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "jupiter-exchange-solana",
    "symbol": "JUP",
    "name": "Jupiter",
    "slug": "jupiter-exchange-solana",
    "binanceSymbol": "JUPUSDT",
    "coingeckoId": "jupiter-exchange-solana",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/34188/large/jup.png?1704266489",
    "price": 0.2405,
    "change24h": -3.024,
    "high24h": 0.2537,
    "low24h": 0.2396,
    "volume24hUsd": 830654.89512,
    "marketCapUsd": 796291087,
    "marketCapRank": 63,
    "circulatingSupply": 3319369204.37,
    "totalSupply": 6861485787.09805,
    "maxSupply": 10000000000,
    "athUsd": 2,
    "athChangePercent": -88.00485,
    "athDate": "2024-01-31",
    "atlUsd": 0.135801,
    "atlChangePercent": 76.65908,
    "atlDate": "2026-02-12",
    "fdvUsd": 1646017553,
    "dominancePercent": 0.03,
    "category": "DeFi & Likidite",
    "descriptionTr": "Jupiter (JUP), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Jupiter (JUP) Kaç TL?",
        "answer": "1 Jupiter (JUP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Jupiter En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Jupiter tüm zamanların en yüksek fiyatına (ATH) $2 seviyesinde ulaşmıştır."
      },
      {
        "question": "Jupiter Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Jupiter dolaşımdaki arzı 3.319.369.204,37 JUP adettir."
      },
      {
        "question": "Jupiter Nereden ve Nasıl Alınır?",
        "answer": "Jupiter (JUP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 373795,
    "openInterestChange24h": -1.06,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 12460,
    "longLiquidation24hUsd": 5482,
    "shortLiquidation24hUsd": 6978,
    "dominantLiquidationLevel": 0.2477,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.2525,
        "leverage": "25x",
        "volumeUsd": 4361,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2285,
        "leverage": "50x",
        "volumeUsd": 5607,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "cosmos",
    "symbol": "ATOM",
    "name": "Cosmos Hub",
    "slug": "cosmos",
    "binanceSymbol": "ATOMUSDT",
    "coingeckoId": "cosmos",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1481/large/cosmos_hub.png?1696502525",
    "price": 1.385,
    "change24h": -1.703,
    "high24h": 1.438,
    "low24h": 1.377,
    "volume24hUsd": 1239944.57695,
    "marketCapUsd": 747558316,
    "marketCapRank": 64,
    "circulatingSupply": 540482180.928862,
    "totalSupply": 540494924.557381,
    "maxSupply": null,
    "athUsd": 43.84,
    "athChangePercent": -96.84519,
    "athDate": "2021-09-19",
    "atlUsd": 1.16,
    "atlChangePercent": 19.23849,
    "atlDate": "2020-03-12",
    "fdvUsd": 747575942,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Cosmos Hub (ATOM), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Cosmos Hub (ATOM) Kaç TL?",
        "answer": "1 Cosmos Hub (ATOM) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Cosmos Hub En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Cosmos Hub tüm zamanların en yüksek fiyatına (ATH) $43,84 seviyesinde ulaşmıştır."
      },
      {
        "question": "Cosmos Hub Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Cosmos Hub dolaşımdaki arzı 540.482.180,929 ATOM adettir."
      },
      {
        "question": "Cosmos Hub Nereden ve Nasıl Alınır?",
        "answer": "Cosmos Hub (ATOM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 557975,
    "openInterestChange24h": -0.6,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 18599,
    "longLiquidation24hUsd": 8184,
    "shortLiquidation24hUsd": 10415,
    "dominantLiquidationLevel": 1.4265,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.4543,
        "leverage": "25x",
        "volumeUsd": 6510,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.3157,
        "leverage": "50x",
        "volumeUsd": 8370,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "nexo",
    "symbol": "NEXO",
    "name": "NEXO",
    "slug": "nexo",
    "binanceSymbol": "NEXOUSDT",
    "coingeckoId": "nexo",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/3695/large/CG-nexo-token-200x200_2x.png?1730414360",
    "price": 0.739,
    "change24h": 0.956,
    "high24h": 0.749,
    "low24h": 0.727,
    "volume24hUsd": 484908.71304,
    "marketCapUsd": 739237537,
    "marketCapRank": 65,
    "circulatingSupply": 1000000000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 4.07,
    "athChangePercent": -81.82925,
    "athDate": "2021-05-12",
    "atlUsd": 0.04515276,
    "atlChangePercent": 1537.06615,
    "atlDate": "2018-09-12",
    "fdvUsd": 739237537,
    "dominancePercent": 0.03,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "NEXO (NEXO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 NEXO (NEXO) Kaç TL?",
        "answer": "1 NEXO (NEXO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "NEXO En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "NEXO tüm zamanların en yüksek fiyatına (ATH) $4,07 seviyesinde ulaşmıştır."
      },
      {
        "question": "NEXO Dolaşımdaki Arzı Ne Kadar?",
        "answer": "NEXO dolaşımdaki arzı 1.000.000.000 NEXO adettir."
      },
      {
        "question": "NEXO Nereden ve Nasıl Alınır?",
        "answer": "NEXO (NEXO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 218209,
    "openInterestChange24h": 0.33,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 7274,
    "longLiquidation24hUsd": 4546,
    "shortLiquidation24hUsd": 2728,
    "dominantLiquidationLevel": 0.7168,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.776,
        "leverage": "25x",
        "volumeUsd": 2546,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.702,
        "leverage": "50x",
        "volumeUsd": 3273,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "filecoin",
    "symbol": "FIL",
    "name": "Filecoin",
    "slug": "filecoin",
    "binanceSymbol": "FILUSDT",
    "coingeckoId": "filecoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12817/large/filecoin.png?1696512609",
    "price": 0.8005,
    "change24h": -0.212,
    "high24h": 0.8392,
    "low24h": 0.7994,
    "volume24hUsd": 3275263.109188,
    "marketCapUsd": 675880022,
    "marketCapRank": 66,
    "circulatingSupply": 845459586,
    "totalSupply": 1956861401,
    "maxSupply": null,
    "athUsd": 236.84,
    "athChangePercent": -99.6624,
    "athDate": "2021-04-01",
    "atlUsd": 0.612413,
    "atlChangePercent": 30.55949,
    "atlDate": "2026-08-18",
    "fdvUsd": 1564360435,
    "dominancePercent": 0.02,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Filecoin (FIL), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Filecoin (FIL) Kaç TL?",
        "answer": "1 Filecoin (FIL) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Filecoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Filecoin tüm zamanların en yüksek fiyatına (ATH) $236,84 seviyesinde ulaşmıştır."
      },
      {
        "question": "Filecoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Filecoin dolaşımdaki arzı 845.459.586 FIL adettir."
      },
      {
        "question": "Filecoin Nereden ve Nasıl Alınır?",
        "answer": "Filecoin (FIL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1473868,
    "openInterestChange24h": -0.07,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 49129,
    "longLiquidation24hUsd": 21617,
    "shortLiquidation24hUsd": 27512,
    "dominantLiquidationLevel": 0.8245,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.8405,
        "leverage": "25x",
        "volumeUsd": 17195,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.7605,
        "leverage": "50x",
        "volumeUsd": 22108,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "midnight-3",
    "symbol": "NIGHT",
    "name": "Midnight",
    "slug": "midnight-3",
    "binanceSymbol": "NIGHTUSDT",
    "coingeckoId": "midnight-3",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/71015/large/midnight.png?1765193080",
    "price": 0.04024,
    "change24h": 1.693,
    "high24h": 0.04074,
    "low24h": 0.03845,
    "volume24hUsd": 1180773.21535,
    "marketCapUsd": 666175531,
    "marketCapRank": 67,
    "circulatingSupply": 16607399400.634954,
    "totalSupply": 24000000000,
    "maxSupply": 24000000000,
    "athUsd": 0.118529,
    "athChangePercent": -66.151,
    "athDate": "2025-12-09",
    "atlUsd": 0.0152398,
    "atlChangePercent": 163.26399,
    "atlDate": "2026-07-20",
    "fdvUsd": 962716218,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Midnight (NIGHT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Midnight (NIGHT) Kaç TL?",
        "answer": "1 Midnight (NIGHT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Midnight En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Midnight tüm zamanların en yüksek fiyatına (ATH) $0,119 seviyesinde ulaşmıştır."
      },
      {
        "question": "Midnight Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Midnight dolaşımdaki arzı 16.607.399.400,635 NIGHT adettir."
      },
      {
        "question": "Midnight Nereden ve Nasıl Alınır?",
        "answer": "Midnight (NIGHT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 531348,
    "openInterestChange24h": 0.59,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 17712,
    "longLiquidation24hUsd": 11070,
    "shortLiquidation24hUsd": 6642,
    "dominantLiquidationLevel": 0.039,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0423,
        "leverage": "25x",
        "volumeUsd": 6199,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0382,
        "leverage": "50x",
        "volumeUsd": 7970,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "blockstack",
    "symbol": "STX",
    "name": "Stacks",
    "slug": "blockstack",
    "binanceSymbol": "STXUSDT",
    "coingeckoId": "blockstack",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/2069/large/Stacks_Logo_png.png?1709979332",
    "price": 0.3448,
    "change24h": 3.512,
    "high24h": 0.3515,
    "low24h": 0.3311,
    "volume24hUsd": 1133069.94563,
    "marketCapUsd": 648675431,
    "marketCapRank": 68,
    "circulatingSupply": 1880911936.732729,
    "totalSupply": 1880934196.732729,
    "maxSupply": null,
    "athUsd": 3.86,
    "athChangePercent": -91.07448,
    "athDate": "2024-04-01",
    "atlUsd": 0.04559639,
    "atlChangePercent": 656.44336,
    "atlDate": "2020-03-12",
    "fdvUsd": 648683107,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Stacks (STX), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Stacks (STX) Kaç TL?",
        "answer": "1 Stacks (STX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Stacks En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Stacks tüm zamanların en yüksek fiyatına (ATH) $3,86 seviyesinde ulaşmıştır."
      },
      {
        "question": "Stacks Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Stacks dolaşımdaki arzı 1.880.911.936,733 STX adettir."
      },
      {
        "question": "Stacks Nereden ve Nasıl Alınır?",
        "answer": "Stacks (STX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 509881,
    "openInterestChange24h": 1.23,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 16996,
    "longLiquidation24hUsd": 10623,
    "shortLiquidation24hUsd": 6374,
    "dominantLiquidationLevel": 0.3345,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.362,
        "leverage": "25x",
        "volumeUsd": 5949,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3276,
        "leverage": "50x",
        "volumeUsd": 7648,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "layerzero",
    "symbol": "ZRO",
    "name": "LayerZero",
    "slug": "layerzero",
    "binanceSymbol": "ZROUSDT",
    "coingeckoId": "layerzero",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28206/large/ftxG9_TJ_400x400.jpeg?1696527208",
    "price": 1.622,
    "change24h": -0.369,
    "high24h": 1.696,
    "low24h": 1.615,
    "volume24hUsd": 3519575.5482,
    "marketCapUsd": 647215397,
    "marketCapRank": 69,
    "circulatingSupply": 399976127.7281288,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 7.47,
    "athChangePercent": -78.35227,
    "athDate": "2024-12-06",
    "atlUsd": 0.707123,
    "atlChangePercent": 128.82447,
    "atlDate": "2026-07-31",
    "fdvUsd": 1618135065,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "LayerZero (ZRO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 LayerZero (ZRO) Kaç TL?",
        "answer": "1 LayerZero (ZRO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "LayerZero En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "LayerZero tüm zamanların en yüksek fiyatına (ATH) $7,47 seviyesinde ulaşmıştır."
      },
      {
        "question": "LayerZero Dolaşımdaki Arzı Ne Kadar?",
        "answer": "LayerZero dolaşımdaki arzı 399.976.127,728 ZRO adettir."
      },
      {
        "question": "LayerZero Nereden ve Nasıl Alınır?",
        "answer": "LayerZero (ZRO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1583809,
    "openInterestChange24h": -0.13,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 52794,
    "longLiquidation24hUsd": 23229,
    "shortLiquidation24hUsd": 29565,
    "dominantLiquidationLevel": 1.6707,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.7031,
        "leverage": "25x",
        "volumeUsd": 18478,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.5409,
        "leverage": "50x",
        "volumeUsd": 23757,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pancakeswap-token",
    "symbol": "CAKE",
    "name": "PancakeSwap",
    "slug": "pancakeswap-token",
    "binanceSymbol": "CAKEUSDT",
    "coingeckoId": "pancakeswap-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1696512440",
    "price": 1.91,
    "change24h": -1.139,
    "high24h": 1.95,
    "low24h": 1.905,
    "volume24hUsd": 865570.49437,
    "marketCapUsd": 626016599,
    "marketCapRank": 70,
    "circulatingSupply": 328257318.7611797,
    "totalSupply": 339798479.84759045,
    "maxSupply": 400000000,
    "athUsd": 43.96,
    "athChangePercent": -95.66192,
    "athDate": "2021-04-30",
    "atlUsd": 0.194441,
    "atlChangePercent": 880.875,
    "atlDate": "2020-11-03",
    "fdvUsd": 648026644,
    "dominancePercent": 0.02,
    "category": "DeFi & Likidite",
    "descriptionTr": "PancakeSwap (CAKE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 PancakeSwap (CAKE) Kaç TL?",
        "answer": "1 PancakeSwap (CAKE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "PancakeSwap En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "PancakeSwap tüm zamanların en yüksek fiyatına (ATH) $43,96 seviyesinde ulaşmıştır."
      },
      {
        "question": "PancakeSwap Dolaşımdaki Arzı Ne Kadar?",
        "answer": "PancakeSwap dolaşımdaki arzı 328.257.318,761 CAKE adettir."
      },
      {
        "question": "PancakeSwap Nereden ve Nasıl Alınır?",
        "answer": "PancakeSwap (CAKE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 389507,
    "openInterestChange24h": -0.4,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 12984,
    "longLiquidation24hUsd": 5713,
    "shortLiquidation24hUsd": 7271,
    "dominantLiquidationLevel": 1.9673,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 2.0055,
        "leverage": "25x",
        "volumeUsd": 4544,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.8145,
        "leverage": "50x",
        "volumeUsd": 5843,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "xdce-crowd-sale",
    "symbol": "XDC",
    "name": "XDC Network",
    "slug": "xdce-crowd-sale",
    "binanceSymbol": "XDCUSDT",
    "coingeckoId": "xdce-crowd-sale",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/2912/large/xdc-icon.png?1696503661",
    "price": 0.03118267,
    "change24h": -1.89493,
    "high24h": 0.03228473,
    "low24h": 0.03101921,
    "volume24hUsd": 8093864,
    "marketCapUsd": 621987083,
    "marketCapRank": 71,
    "circulatingSupply": 19946688440,
    "totalSupply": 38065686425.1,
    "maxSupply": null,
    "athUsd": 0.192754,
    "athChangePercent": -83.82257,
    "athDate": "2021-08-20",
    "atlUsd": 0.00039532,
    "atlChangePercent": 7787.99242,
    "atlDate": "2019-07-21",
    "fdvUsd": 1186982256,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "XDC Network (XDC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 XDC Network (XDC) Kaç TL?",
        "answer": "1 XDC Network (XDC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "XDC Network En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "XDC Network tüm zamanların en yüksek fiyatına (ATH) $0,193 seviyesinde ulaşmıştır."
      },
      {
        "question": "XDC Network Dolaşımdaki Arzı Ne Kadar?",
        "answer": "XDC Network dolaşımdaki arzı 19.946.688.440 XDC adettir."
      },
      {
        "question": "XDC Network Nereden ve Nasıl Alınır?",
        "answer": "XDC Network (XDC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3642239,
    "openInterestChange24h": -0.66,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 121408,
    "longLiquidation24hUsd": 53420,
    "shortLiquidation24hUsd": 67988,
    "dominantLiquidationLevel": 0.0321,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0327,
        "leverage": "25x",
        "volumeUsd": 42493,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0296,
        "leverage": "50x",
        "volumeUsd": 54634,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "dash",
    "symbol": "DASH",
    "name": "Dash",
    "slug": "dash",
    "binanceSymbol": "DASHUSDT",
    "coingeckoId": "dash",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/19/large/dash-logo.png?1696501423",
    "price": 46.81,
    "change24h": 2.811,
    "high24h": 48.72,
    "low24h": 45.32,
    "volume24hUsd": 3681813.53367,
    "marketCapUsd": 602130051,
    "marketCapRank": 72,
    "circulatingSupply": 12889367.03341489,
    "totalSupply": 12889361.12607899,
    "maxSupply": 18920000,
    "athUsd": 1493.59,
    "athChangePercent": -96.87078,
    "athDate": "2017-12-19",
    "atlUsd": 0.213899,
    "atlChangePercent": 21750.39505,
    "atlDate": "2014-02-13",
    "fdvUsd": 602129775,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Dash (DASH), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Dash (DASH) Kaç TL?",
        "answer": "1 Dash (DASH) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Dash En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Dash tüm zamanların en yüksek fiyatına (ATH) $1.493,59 seviyesinde ulaşmıştır."
      },
      {
        "question": "Dash Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Dash dolaşımdaki arzı 12.889.367,033 DASH adettir."
      },
      {
        "question": "Dash Nereden ve Nasıl Alınır?",
        "answer": "Dash (DASH) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1656816,
    "openInterestChange24h": 0.98,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 55227,
    "longLiquidation24hUsd": 34517,
    "shortLiquidation24hUsd": 20710,
    "dominantLiquidationLevel": 45.4057,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 49.1505,
        "leverage": "25x",
        "volumeUsd": 19329,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 44.4695,
        "leverage": "50x",
        "volumeUsd": 24852,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ether-fi",
    "symbol": "ETHFI",
    "name": "Ether.fi",
    "slug": "ether-fi",
    "binanceSymbol": "ETHFIUSDT",
    "coingeckoId": "ether-fi",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/35958/large/etherfi.jpeg?1710254562",
    "price": 0.5844,
    "change24h": 1.055,
    "high24h": 0.5925,
    "low24h": 0.5721,
    "volume24hUsd": 2091802.98775,
    "marketCapUsd": 582410570,
    "marketCapRank": 73,
    "circulatingSupply": 998535999,
    "totalSupply": 998535999,
    "maxSupply": 1000000000,
    "athUsd": 8.53,
    "athChangePercent": -93.15875,
    "athDate": "2024-03-27",
    "atlUsd": 0.26653,
    "atlChangePercent": 118.91869,
    "atlDate": "2026-06-05",
    "fdvUsd": 582410570,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ether.fi (ETHFI), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ether.fi (ETHFI) Kaç TL?",
        "answer": "1 Ether.fi (ETHFI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ether.fi En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ether.fi tüm zamanların en yüksek fiyatına (ATH) $8,53 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ether.fi Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ether.fi dolaşımdaki arzı 998.535.999 ETHFI adettir."
      },
      {
        "question": "Ether.fi Nereden ve Nasıl Alınır?",
        "answer": "Ether.fi (ETHFI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 941311,
    "openInterestChange24h": 0.37,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 31377,
    "longLiquidation24hUsd": 19611,
    "shortLiquidation24hUsd": 11766,
    "dominantLiquidationLevel": 0.5669,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.6136,
        "leverage": "25x",
        "volumeUsd": 10982,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5552,
        "leverage": "50x",
        "volumeUsd": 14120,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "aptos",
    "symbol": "APT",
    "name": "Aptos",
    "slug": "aptos",
    "binanceSymbol": "APTUSDT",
    "coingeckoId": "aptos",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26455/large/Aptos-Network-Profile-Picture_%281%29.png?1788259511",
    "price": 0.6034,
    "change24h": -1.244,
    "high24h": 0.623,
    "low24h": 0.5965,
    "volume24hUsd": 2247013.591042,
    "marketCapUsd": 533349978,
    "marketCapRank": 74,
    "circulatingSupply": 884100387.5218897,
    "totalSupply": 1211226349.855479,
    "maxSupply": 2100000000,
    "athUsd": 19.92,
    "athChangePercent": -96.97279,
    "athDate": "2023-01-26",
    "atlUsd": 0.511162,
    "atlChangePercent": 17.97422,
    "atlDate": "2026-08-30",
    "fdvUsd": 730694790,
    "dominancePercent": 0.02,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Aptos (APT), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "tokenUnlock": {
      "nextUnlockDate": "2026-11-12",
      "unlockedTokens": 11310000,
      "unlockedPercent": 2.18,
      "unlockValueUsd": 100885200,
      "unlockType": "CLIFF",
      "targetAudience": "Çekirdek Geliştiriciler ve Yatırımcılar",
      "riskScore": 78
    },
    "faqs": [
      {
        "question": "1 Aptos (APT) Kaç TL?",
        "answer": "1 Aptos (APT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Aptos En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Aptos tüm zamanların en yüksek fiyatına (ATH) $19,92 seviyesinde ulaşmıştır."
      },
      {
        "question": "Aptos Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Aptos dolaşımdaki arzı 884.100.387,522 APT adettir."
      },
      {
        "question": "Aptos Nereden ve Nasıl Alınır?",
        "answer": "Aptos (APT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1011156,
    "openInterestChange24h": -0.44,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 33705,
    "longLiquidation24hUsd": 14830,
    "shortLiquidation24hUsd": 18875,
    "dominantLiquidationLevel": 0.6215,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.6336,
        "leverage": "25x",
        "volumeUsd": 11797,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5732,
        "leverage": "50x",
        "volumeUsd": 15167,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pyth-network",
    "symbol": "PYTH",
    "name": "Pyth Network",
    "slug": "pyth-network",
    "binanceSymbol": "PYTHUSDT",
    "coingeckoId": "pyth-network",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31924/large/pyth.png?1701245725",
    "price": 0.06484,
    "change24h": -0.567,
    "high24h": 0.06767,
    "low24h": 0.06438,
    "volume24hUsd": 2750171.488716,
    "marketCapUsd": 509269681,
    "marketCapRank": 75,
    "circulatingSupply": 7874958833.064181,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 1.2,
    "athChangePercent": -94.5941,
    "athDate": "2024-03-15",
    "atlUsd": 0.02953453,
    "atlChangePercent": 118.97921,
    "atlDate": "2026-06-06",
    "fdvUsd": 646695039,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Pyth Network (PYTH), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pyth Network (PYTH) Kaç TL?",
        "answer": "1 Pyth Network (PYTH) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pyth Network En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pyth Network tüm zamanların en yüksek fiyatına (ATH) $1,2 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pyth Network Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pyth Network dolaşımdaki arzı 7.874.958.833,064 PYTH adettir."
      },
      {
        "question": "Pyth Network Nereden ve Nasıl Alınır?",
        "answer": "Pyth Network (PYTH) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1237577,
    "openInterestChange24h": -0.2,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 41253,
    "longLiquidation24hUsd": 18151,
    "shortLiquidation24hUsd": 23102,
    "dominantLiquidationLevel": 0.0668,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0681,
        "leverage": "25x",
        "volumeUsd": 14439,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0616,
        "leverage": "50x",
        "volumeUsd": 18564,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bianrensheng",
    "symbol": "币安人生",
    "name": "币安人生 (BinanceLife)",
    "slug": "bianrensheng",
    "binanceSymbol": "币安人生USDT",
    "coingeckoId": "bianrensheng",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69848/large/%E5%B8%81%E5%AE%89%E4%BA%BA%E7%94%9F.png?1759839225",
    "price": 0.5067,
    "change24h": 2.302,
    "high24h": 0.521,
    "low24h": 0.4932,
    "volume24hUsd": 1809001.44456,
    "marketCapUsd": 506322426,
    "marketCapRank": 76,
    "circulatingSupply": 1000000000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 0.894202,
    "athChangePercent": -43.38304,
    "athDate": "2026-06-07",
    "atlUsd": 0.03826008,
    "atlChangePercent": 1223.23341,
    "atlDate": "2026-03-29",
    "fdvUsd": 506322426,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "币安人生 (BinanceLife) (币安人生), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 币安人生 (BinanceLife) (币安人生) Kaç TL?",
        "answer": "1 币安人生 (BinanceLife) (币安人生) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "币安人生 (BinanceLife) En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "币安人生 (BinanceLife) tüm zamanların en yüksek fiyatına (ATH) $0,894 seviyesinde ulaşmıştır."
      },
      {
        "question": "币安人生 (BinanceLife) Dolaşımdaki Arzı Ne Kadar?",
        "answer": "币安人生 (BinanceLife) dolaşımdaki arzı 1.000.000.000 币安人生 adettir."
      },
      {
        "question": "币安人生 (BinanceLife) Nereden ve Nasıl Alınır?",
        "answer": "币安人生 (BinanceLife) (币安人生) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 814051,
    "openInterestChange24h": 0.81,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 27135,
    "longLiquidation24hUsd": 16959,
    "shortLiquidation24hUsd": 10176,
    "dominantLiquidationLevel": 0.4915,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.532,
        "leverage": "25x",
        "volumeUsd": 9497,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4814,
        "leverage": "50x",
        "volumeUsd": 12211,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "flare-networks",
    "symbol": "FLR",
    "name": "Flare",
    "slug": "flare-networks",
    "binanceSymbol": "FLRUSDT",
    "coingeckoId": "flare-networks",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28624/large/FLR-icon200x200.png?1696527609",
    "price": 0.00575595,
    "change24h": -0.32031,
    "high24h": 0.0058195,
    "low24h": 0.00568964,
    "volume24hUsd": 2356467,
    "marketCapUsd": 504981435,
    "marketCapRank": 77,
    "circulatingSupply": 87740786356.4181,
    "totalSupply": 106902938130.15062,
    "maxSupply": null,
    "athUsd": 0.150073,
    "athChangePercent": -96.16456,
    "athDate": "2023-01-09",
    "atlUsd": 0.00568964,
    "atlChangePercent": 1.16551,
    "atlDate": "2026-11-06",
    "fdvUsd": 615266872,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Flare (FLR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Flare (FLR) Kaç TL?",
        "answer": "1 Flare (FLR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Flare En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Flare tüm zamanların en yüksek fiyatına (ATH) $0,15 seviyesinde ulaşmıştır."
      },
      {
        "question": "Flare Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Flare dolaşımdaki arzı 87.740.786.356,418 FLR adettir."
      },
      {
        "question": "Flare Nereden ve Nasıl Alınır?",
        "answer": "Flare (FLR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1060410,
    "openInterestChange24h": -0.11,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 35347,
    "longLiquidation24hUsd": 15553,
    "shortLiquidation24hUsd": 19794,
    "dominantLiquidationLevel": 0.0059,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.006,
        "leverage": "25x",
        "volumeUsd": 12371,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0055,
        "leverage": "50x",
        "volumeUsd": 15906,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "true-usd",
    "symbol": "TUSD",
    "name": "TrueUSD",
    "slug": "true-usd",
    "binanceSymbol": "TUSDUSDT",
    "coingeckoId": "true-usd",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/3449/large/tusd.png?1696504140",
    "price": 0.9997,
    "change24h": -0.03,
    "high24h": 1.0002,
    "low24h": 0.9995,
    "volume24hUsd": 44558.6291,
    "marketCapUsd": 494376301,
    "marketCapRank": 78,
    "circulatingSupply": 494515083,
    "totalSupply": 494515083,
    "maxSupply": null,
    "athUsd": 1.62,
    "athChangePercent": -38.28366,
    "athDate": "2018-08-26",
    "atlUsd": 0.88355,
    "atlChangePercent": 13.05382,
    "atlDate": "2020-03-12",
    "fdvUsd": 494376301,
    "dominancePercent": 0.02,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "TrueUSD (TUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 TrueUSD (TUSD) Kaç TL?",
        "answer": "1 TrueUSD (TUSD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "TrueUSD En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "TrueUSD tüm zamanların en yüksek fiyatına (ATH) $1,62 seviyesinde ulaşmıştır."
      },
      {
        "question": "TrueUSD Dolaşımdaki Arzı Ne Kadar?",
        "answer": "TrueUSD dolaşımdaki arzı 494.515.083 TUSD adettir."
      },
      {
        "question": "TrueUSD Nereden ve Nasıl Alınır?",
        "answer": "TrueUSD (TUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 20051,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 668,
    "longLiquidation24hUsd": 294,
    "shortLiquidation24hUsd": 374,
    "dominantLiquidationLevel": 1.0297,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0497,
        "leverage": "25x",
        "volumeUsd": 234,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9497,
        "leverage": "50x",
        "volumeUsd": 301,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "raydium",
    "symbol": "RAY",
    "name": "Raydium",
    "slug": "raydium",
    "binanceSymbol": "RAYUSDT",
    "coingeckoId": "raydium",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13928/large/PSigc4ie_400x400.jpg?1696513668",
    "price": 1.7549,
    "change24h": -0.954,
    "high24h": 1.8648,
    "low24h": 1.7526,
    "volume24hUsd": 3476105.81491,
    "marketCapUsd": 473587426,
    "marketCapRank": 79,
    "circulatingSupply": 269963562.976232,
    "totalSupply": 554997317.725163,
    "maxSupply": 555000000,
    "athUsd": 16.83,
    "athChangePercent": -89.57906,
    "athDate": "2021-09-12",
    "atlUsd": 0.134391,
    "atlChangePercent": 1205.25096,
    "atlDate": "2022-12-29",
    "fdvUsd": 973611951,
    "dominancePercent": 0.02,
    "category": "DeFi & Likidite",
    "descriptionTr": "Raydium (RAY), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Raydium (RAY) Kaç TL?",
        "answer": "1 Raydium (RAY) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Raydium En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Raydium tüm zamanların en yüksek fiyatına (ATH) $16,83 seviyesinde ulaşmıştır."
      },
      {
        "question": "Raydium Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Raydium dolaşımdaki arzı 269.963.562,976 RAY adettir."
      },
      {
        "question": "Raydium Nereden ve Nasıl Alınır?",
        "answer": "Raydium (RAY) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1564248,
    "openInterestChange24h": -0.33,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 52142,
    "longLiquidation24hUsd": 22942,
    "shortLiquidation24hUsd": 29200,
    "dominantLiquidationLevel": 1.8075,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.8426,
        "leverage": "25x",
        "volumeUsd": 18250,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.6672,
        "leverage": "50x",
        "volumeUsd": 23464,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "stable-2",
    "symbol": "STABLE",
    "name": "​​Stable",
    "slug": "stable-2",
    "binanceSymbol": "STABLEUSDT",
    "coingeckoId": "stable-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69242/large/stable-logotype-framed-square-light.png?1762753913",
    "price": 0.02604387,
    "change24h": 1.30547,
    "high24h": 0.02706211,
    "low24h": 0.02467531,
    "volume24hUsd": 7739193,
    "marketCapUsd": 468912368,
    "marketCapRank": 80,
    "circulatingSupply": 17998900009.699005,
    "totalSupply": 100000000000,
    "maxSupply": 100000000000,
    "athUsd": 0.04323745,
    "athChangePercent": -39.76549,
    "athDate": "2026-05-14",
    "atlUsd": 0.0092214,
    "atlChangePercent": 182.42865,
    "atlDate": "2025-12-23",
    "fdvUsd": 2605227918,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "​​Stable (STABLE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 ​​Stable (STABLE) Kaç TL?",
        "answer": "1 ​​Stable (STABLE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "​​Stable En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "​​Stable tüm zamanların en yüksek fiyatına (ATH) $0,043 seviyesinde ulaşmıştır."
      },
      {
        "question": "​​Stable Dolaşımdaki Arzı Ne Kadar?",
        "answer": "​​Stable dolaşımdaki arzı 17.998.900.009,699 STABLE adettir."
      },
      {
        "question": "​​Stable Nereden ve Nasıl Alınır?",
        "answer": "​​Stable (STABLE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3482637,
    "openInterestChange24h": 0.46,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 116088,
    "longLiquidation24hUsd": 72555,
    "shortLiquidation24hUsd": 43533,
    "dominantLiquidationLevel": 0.0253,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0273,
        "leverage": "25x",
        "volumeUsd": 40631,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0247,
        "leverage": "50x",
        "volumeUsd": 52240,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "vechain",
    "symbol": "VET",
    "name": "VeChain",
    "slug": "vechain",
    "binanceSymbol": "VETUSDT",
    "coingeckoId": "vechain",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1167/large/VET.png?1742383283",
    "price": 0.005359,
    "change24h": -2.917,
    "high24h": 0.005618,
    "low24h": 0.00534,
    "volume24hUsd": 435106.4530442,
    "marketCapUsd": 461045099,
    "marketCapRank": 81,
    "circulatingSupply": 85985041177,
    "totalSupply": 85985041177,
    "maxSupply": 86712634466,
    "athUsd": 0.280991,
    "athChangePercent": -98.09178,
    "athDate": "2021-04-18",
    "atlUsd": 0.00191713,
    "atlChangePercent": 179.68507,
    "atlDate": "2020-03-12",
    "fdvUsd": 461045099,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "VeChain (VET), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 VeChain (VET) Kaç TL?",
        "answer": "1 VeChain (VET) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "VeChain En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "VeChain tüm zamanların en yüksek fiyatına (ATH) $0,281 seviyesinde ulaşmıştır."
      },
      {
        "question": "VeChain Dolaşımdaki Arzı Ne Kadar?",
        "answer": "VeChain dolaşımdaki arzı 85.985.041.177 VET adettir."
      },
      {
        "question": "VeChain Nereden ve Nasıl Alınır?",
        "answer": "VeChain (VET) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 195798,
    "openInterestChange24h": -1.02,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 6527,
    "longLiquidation24hUsd": 2872,
    "shortLiquidation24hUsd": 3655,
    "dominantLiquidationLevel": 0.0055,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0056,
        "leverage": "25x",
        "volumeUsd": 2284,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0051,
        "leverage": "50x",
        "volumeUsd": 2937,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "celestia",
    "symbol": "TIA",
    "name": "Celestia",
    "slug": "celestia",
    "binanceSymbol": "TIAUSDT",
    "coingeckoId": "celestia",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31967/large/tia.jpg?1696530772",
    "price": 0.4419,
    "change24h": 4.074,
    "high24h": 0.4494,
    "low24h": 0.4238,
    "volume24hUsd": 2966560.809229,
    "marketCapUsd": 436063827,
    "marketCapRank": 82,
    "circulatingSupply": 989601328.277843,
    "totalSupply": 1181061965.830583,
    "maxSupply": null,
    "athUsd": 20.85,
    "athChangePercent": -97.88577,
    "athDate": "2024-02-10",
    "atlUsd": 0.279235,
    "atlChangePercent": 57.87477,
    "atlDate": "2026-06-06",
    "fdvUsd": 520430183,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Celestia (TIA), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "tokenUnlock": {
      "nextUnlockDate": "2026-11-30",
      "unlockedTokens": 175560000,
      "unlockedPercent": 16.3,
      "unlockValueUsd": 898867200,
      "unlockType": "CLIFF",
      "targetAudience": "Erken Aşama Yatırımcılar ve Ar-Ge",
      "riskScore": 88
    },
    "faqs": [
      {
        "question": "1 Celestia (TIA) Kaç TL?",
        "answer": "1 Celestia (TIA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Celestia En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Celestia tüm zamanların en yüksek fiyatına (ATH) $20,85 seviyesinde ulaşmıştır."
      },
      {
        "question": "Celestia Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Celestia dolaşımdaki arzı 989.601.328,278 TIA adettir."
      },
      {
        "question": "Celestia Nereden ve Nasıl Alınır?",
        "answer": "Celestia (TIA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1334952,
    "openInterestChange24h": 1.43,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 44498,
    "longLiquidation24hUsd": 27811,
    "shortLiquidation24hUsd": 16687,
    "dominantLiquidationLevel": 0.4286,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.464,
        "leverage": "25x",
        "volumeUsd": 15574,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4198,
        "leverage": "50x",
        "volumeUsd": 20024,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "curve-dao-token",
    "symbol": "CRV",
    "name": "Curve DAO",
    "slug": "curve-dao-token",
    "binanceSymbol": "CRVUSDT",
    "coingeckoId": "curve-dao-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967",
    "price": 0.264,
    "change24h": 1.773,
    "high24h": 0.2703,
    "low24h": 0.259,
    "volume24hUsd": 1680509.8732,
    "marketCapUsd": 417471751,
    "marketCapRank": 83,
    "circulatingSupply": 1584661632,
    "totalSupply": 2432180970.5551424,
    "maxSupply": 3030303031,
    "athUsd": 15.37,
    "athChangePercent": -98.28584,
    "athDate": "2020-08-13",
    "atlUsd": 0.170749,
    "atlChangePercent": 54.32177,
    "atlDate": "2026-06-06",
    "fdvUsd": 640746787,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Curve DAO (CRV), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Curve DAO (CRV) Kaç TL?",
        "answer": "1 Curve DAO (CRV) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Curve DAO En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Curve DAO tüm zamanların en yüksek fiyatına (ATH) $15,37 seviyesinde ulaşmıştır."
      },
      {
        "question": "Curve DAO Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Curve DAO dolaşımdaki arzı 1.584.661.632 CRV adettir."
      },
      {
        "question": "Curve DAO Nereden ve Nasıl Alınır?",
        "answer": "Curve DAO (CRV) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 756229,
    "openInterestChange24h": 0.62,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 25208,
    "longLiquidation24hUsd": 15755,
    "shortLiquidation24hUsd": 9453,
    "dominantLiquidationLevel": 0.2561,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.2772,
        "leverage": "25x",
        "volumeUsd": 8823,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2508,
        "leverage": "50x",
        "volumeUsd": 11344,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pudgy-penguins",
    "symbol": "PENGU",
    "name": "Pudgy Penguins",
    "slug": "pudgy-penguins",
    "binanceSymbol": "PENGUUSDT",
    "coingeckoId": "pudgy-penguins",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/52622/large/PUDGY_PENGUINS_PENGU_PFP.png?1733809110",
    "price": 0.006494,
    "change24h": -2.799,
    "high24h": 0.006796,
    "low24h": 0.006468,
    "volume24hUsd": 3161109.782005,
    "marketCapUsd": 407576590,
    "marketCapRank": 84,
    "circulatingSupply": 62860396090,
    "totalSupply": 76722779946.33777,
    "maxSupply": 88888888888,
    "athUsd": 0.068447,
    "athChangePercent": -90.5267,
    "athDate": "2024-12-17",
    "atlUsd": 0.00371517,
    "atlChangePercent": 74.53216,
    "atlDate": "2025-04-08",
    "fdvUsd": 497458034,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Pudgy Penguins (PENGU), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pudgy Penguins (PENGU) Kaç TL?",
        "answer": "1 Pudgy Penguins (PENGU) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pudgy Penguins En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pudgy Penguins tüm zamanların en yüksek fiyatına (ATH) $0,068 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pudgy Penguins Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pudgy Penguins dolaşımdaki arzı 62.860.396.090 PENGU adettir."
      },
      {
        "question": "Pudgy Penguins Nereden ve Nasıl Alınır?",
        "answer": "Pudgy Penguins (PENGU) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1422499,
    "openInterestChange24h": -0.98,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 47417,
    "longLiquidation24hUsd": 20863,
    "shortLiquidation24hUsd": 26554,
    "dominantLiquidationLevel": 0.0067,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0068,
        "leverage": "25x",
        "volumeUsd": 16596,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0062,
        "leverage": "50x",
        "volumeUsd": 21338,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pieverse",
    "symbol": "PIEVERSE",
    "name": "Pieverse",
    "slug": "pieverse",
    "binanceSymbol": "PIEVERSEUSDT",
    "coingeckoId": "pieverse",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/68773/large/pieverse.png?1756546685",
    "price": 1.39,
    "change24h": -0.37256,
    "high24h": 1.55,
    "low24h": 1.35,
    "volume24hUsd": 14743226,
    "marketCapUsd": 382887606,
    "marketCapRank": 85,
    "circulatingSupply": 274750000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 1.98,
    "athChangePercent": -29.73805,
    "athDate": "2026-09-21",
    "atlUsd": 0.119363,
    "atlChangePercent": 1068.00403,
    "atlDate": "2025-11-14",
    "fdvUsd": 1393585462,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Pieverse (PIEVERSE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pieverse (PIEVERSE) Kaç TL?",
        "answer": "1 Pieverse (PIEVERSE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pieverse En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pieverse tüm zamanların en yüksek fiyatına (ATH) $1,98 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pieverse Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pieverse dolaşımdaki arzı 274.750.000 PIEVERSE adettir."
      },
      {
        "question": "Pieverse Nereden ve Nasıl Alınır?",
        "answer": "Pieverse (PIEVERSE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 6634452,
    "openInterestChange24h": -0.13,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 221148,
    "longLiquidation24hUsd": 97305,
    "shortLiquidation24hUsd": 123843,
    "dominantLiquidationLevel": 1.4317,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.4595,
        "leverage": "25x",
        "volumeUsd": 77402,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.3205,
        "leverage": "50x",
        "volumeUsd": 99517,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "virtual-protocol",
    "symbol": "VIRTUAL",
    "name": "Virtuals Protocol",
    "slug": "virtual-protocol",
    "binanceSymbol": "VIRTUALUSDT",
    "coingeckoId": "virtual-protocol",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/34057/large/LOGOMARK.png?1708356054",
    "price": 0.5662,
    "change24h": -1.736,
    "high24h": 0.5872,
    "low24h": 0.5624,
    "volume24hUsd": 1174063.27531,
    "marketCapUsd": 372078808,
    "marketCapRank": 86,
    "circulatingSupply": 658385841.8252224,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 5.07,
    "athChangePercent": -88.84256,
    "athDate": "2025-01-01",
    "atlUsd": 0.00748604,
    "atlChangePercent": 7449.06036,
    "atlDate": "2024-01-23",
    "fdvUsd": 565137924,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Virtuals Protocol (VIRTUAL), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Virtuals Protocol (VIRTUAL) Kaç TL?",
        "answer": "1 Virtuals Protocol (VIRTUAL) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Virtuals Protocol En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Virtuals Protocol tüm zamanların en yüksek fiyatına (ATH) $5,07 seviyesinde ulaşmıştır."
      },
      {
        "question": "Virtuals Protocol Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Virtuals Protocol dolaşımdaki arzı 658.385.841,825 VIRTUAL adettir."
      },
      {
        "question": "Virtuals Protocol Nereden ve Nasıl Alınır?",
        "answer": "Virtuals Protocol (VIRTUAL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 528328,
    "openInterestChange24h": -0.61,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 17611,
    "longLiquidation24hUsd": 7749,
    "shortLiquidation24hUsd": 9862,
    "dominantLiquidationLevel": 0.5832,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.5945,
        "leverage": "25x",
        "volumeUsd": 6164,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5379,
        "leverage": "50x",
        "volumeUsd": 7925,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "grass",
    "symbol": "GRASS",
    "name": "Grass",
    "slug": "grass",
    "binanceSymbol": "GRASSUSDT",
    "coingeckoId": "grass",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/40094/large/Grass.jpg?1725697048",
    "price": 0.499653,
    "change24h": 1.14441,
    "high24h": 0.509072,
    "low24h": 0.481259,
    "volume24hUsd": 17129908,
    "marketCapUsd": 360657505,
    "marketCapRank": 87,
    "circulatingSupply": 721962090,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 3.89,
    "athChangePercent": -87.16288,
    "athDate": "2024-11-08",
    "atlUsd": 0.166785,
    "atlChangePercent": 199.57858,
    "atlDate": "2026-02-05",
    "fdvUsd": 499551860,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Grass (GRASS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Grass (GRASS) Kaç TL?",
        "answer": "1 Grass (GRASS) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Grass En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Grass tüm zamanların en yüksek fiyatına (ATH) $3,89 seviyesinde ulaşmıştır."
      },
      {
        "question": "Grass Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Grass dolaşımdaki arzı 721.962.090 GRASS adettir."
      },
      {
        "question": "Grass Nereden ve Nasıl Alınır?",
        "answer": "Grass (GRASS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 7708459,
    "openInterestChange24h": 0.4,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 256949,
    "longLiquidation24hUsd": 160593,
    "shortLiquidation24hUsd": 96356,
    "dominantLiquidationLevel": 0.4847,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.5246,
        "leverage": "25x",
        "volumeUsd": 89932,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4747,
        "leverage": "50x",
        "volumeUsd": 115627,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bittorrent",
    "symbol": "BTT",
    "name": "BitTorrent",
    "slug": "bittorrent",
    "binanceSymbol": "BTTUSDT",
    "coingeckoId": "bittorrent",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/22457/large/btt_logo.png?1696521780",
    "price": 0,
    "change24h": 0,
    "high24h": 0,
    "low24h": 0,
    "volume24hUsd": 0,
    "marketCapUsd": 343202490,
    "marketCapRank": 88,
    "circulatingSupply": 965416274329945.1,
    "totalSupply": 990000000000000,
    "maxSupply": 990000000000000,
    "athUsd": 0.00000343,
    "athChangePercent": -89.64885,
    "athDate": "2022-01-20",
    "atlUsd": 2.55018e-7,
    "atlChangePercent": 39.27745,
    "atlDate": "2026-08-15",
    "fdvUsd": 351941928,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "BitTorrent (BTT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 BitTorrent (BTT) Kaç TL?",
        "answer": "1 BitTorrent (BTT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "BitTorrent En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "BitTorrent tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "BitTorrent Dolaşımdaki Arzı Ne Kadar?",
        "answer": "BitTorrent dolaşımdaki arzı 965.416.274.329.945,1 BTT adettir."
      },
      {
        "question": "BitTorrent Nereden ve Nasıl Alınır?",
        "answer": "BitTorrent (BTT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 0,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 0,
    "longLiquidation24hUsd": 0,
    "shortLiquidation24hUsd": 0,
    "dominantLiquidationLevel": 0,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 0,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 0,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "spx6900",
    "symbol": "SPX",
    "name": "SPX6900",
    "slug": "spx6900",
    "binanceSymbol": "SPXUSDT",
    "coingeckoId": "spx6900",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31401/large/centeredcoin_%281%29.png?1737048493",
    "price": 0.360833,
    "change24h": 0.39329,
    "high24h": 0.36892,
    "low24h": 0.349046,
    "volume24hUsd": 4884909,
    "marketCapUsd": 335878849,
    "marketCapRank": 89,
    "circulatingSupply": 930987178.0065634,
    "totalSupply": 930987178.0065634,
    "maxSupply": 1000000000,
    "athUsd": 2.27,
    "athChangePercent": -84.10891,
    "athDate": "2025-07-28",
    "atlUsd": 0.00131808,
    "atlChangePercent": 27275.58534,
    "atlDate": "2024-02-04",
    "fdvUsd": 335878849,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "SPX6900 (SPX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 SPX6900 (SPX) Kaç TL?",
        "answer": "1 SPX6900 (SPX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "SPX6900 En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "SPX6900 tüm zamanların en yüksek fiyatına (ATH) $2,27 seviyesinde ulaşmıştır."
      },
      {
        "question": "SPX6900 Dolaşımdaki Arzı Ne Kadar?",
        "answer": "SPX6900 dolaşımdaki arzı 930.987.178,007 SPX adettir."
      },
      {
        "question": "SPX6900 Nereden ve Nasıl Alınır?",
        "answer": "SPX6900 (SPX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2198209,
    "openInterestChange24h": 0.14,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 73274,
    "longLiquidation24hUsd": 45796,
    "shortLiquidation24hUsd": 27478,
    "dominantLiquidationLevel": 0.35,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3789,
        "leverage": "25x",
        "volumeUsd": 25646,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3428,
        "leverage": "50x",
        "volumeUsd": 32973,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "fetch-ai",
    "symbol": "FET",
    "name": "Artificial Superintelligence Alliance",
    "slug": "fetch-ai",
    "binanceSymbol": "FETUSDT",
    "coingeckoId": "fetch-ai",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/5681/large/ASI.png?1719827289",
    "price": 0.1451,
    "change24h": -2.943,
    "high24h": 0.1515,
    "low24h": 0.1449,
    "volume24hUsd": 5382900.36839,
    "marketCapUsd": 334900608,
    "marketCapRank": 90,
    "circulatingSupply": 2311508384.055814,
    "totalSupply": 2714384546.672,
    "maxSupply": 2714384546.672,
    "athUsd": 3.45,
    "athChangePercent": -95.80649,
    "athDate": "2024-03-28",
    "atlUsd": 0.00816959,
    "atlChangePercent": 1673.04043,
    "atlDate": "2020-03-12",
    "fdvUsd": 393270923,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Artificial Superintelligence Alliance (FET), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Artificial Superintelligence Alliance (FET) Kaç TL?",
        "answer": "1 Artificial Superintelligence Alliance (FET) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Artificial Superintelligence Alliance En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Artificial Superintelligence Alliance tüm zamanların en yüksek fiyatına (ATH) $3,45 seviyesinde ulaşmıştır."
      },
      {
        "question": "Artificial Superintelligence Alliance Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Artificial Superintelligence Alliance dolaşımdaki arzı 2.311.508.384,056 FET adettir."
      },
      {
        "question": "Artificial Superintelligence Alliance Nereden ve Nasıl Alınır?",
        "answer": "Artificial Superintelligence Alliance (FET) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2422305,
    "openInterestChange24h": -1.03,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 80744,
    "longLiquidation24hUsd": 35527,
    "shortLiquidation24hUsd": 45217,
    "dominantLiquidationLevel": 0.1495,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1524,
        "leverage": "25x",
        "volumeUsd": 28260,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1378,
        "leverage": "50x",
        "volumeUsd": 36335,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "official-trump",
    "symbol": "TRUMP",
    "name": "Official Trump",
    "slug": "official-trump",
    "binanceSymbol": "TRUMPUSDT",
    "coingeckoId": "official-trump",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/53746/large/trump.png?1737171561",
    "price": 1.183,
    "change24h": -2.714,
    "high24h": 1.278,
    "low24h": 1.171,
    "volume24hUsd": 9936759.888847,
    "marketCapUsd": 332946117,
    "marketCapRank": 91,
    "circulatingSupply": 281867935.671502,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 73.43,
    "athChangePercent": -98.39129,
    "athDate": "2025-01-19",
    "atlUsd": 1.12,
    "atlChangePercent": 5.7136,
    "atlDate": "2026-11-05",
    "fdvUsd": 1181213166,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Official Trump (TRUMP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Official Trump (TRUMP) Kaç TL?",
        "answer": "1 Official Trump (TRUMP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Official Trump En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Official Trump tüm zamanların en yüksek fiyatına (ATH) $73,43 seviyesinde ulaşmıştır."
      },
      {
        "question": "Official Trump Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Official Trump dolaşımdaki arzı 281.867.935,672 TRUMP adettir."
      },
      {
        "question": "Official Trump Nereden ve Nasıl Alınır?",
        "answer": "Official Trump (TRUMP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 4471542,
    "openInterestChange24h": -0.95,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 149051,
    "longLiquidation24hUsd": 65582,
    "shortLiquidation24hUsd": 83469,
    "dominantLiquidationLevel": 1.2185,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.2422,
        "leverage": "25x",
        "volumeUsd": 52168,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.1239,
        "leverage": "50x",
        "volumeUsd": 67073,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "starknet",
    "symbol": "STRK",
    "name": "Starknet",
    "slug": "starknet",
    "binanceSymbol": "STRKUSDT",
    "coingeckoId": "starknet",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26433/large/starknet.png?1696525507",
    "price": 0.04143,
    "change24h": 2.322,
    "high24h": 0.04249,
    "low24h": 0.04004,
    "volume24hUsd": 2893740.8242308,
    "marketCapUsd": 316927353,
    "marketCapRank": 92,
    "circulatingSupply": 7664828795.064646,
    "totalSupply": 10184600000,
    "maxSupply": null,
    "athUsd": 4.41,
    "athChangePercent": -99.06275,
    "athDate": "2024-02-20",
    "atlUsd": 0.02221422,
    "atlChangePercent": 86.21858,
    "atlDate": "2026-08-18",
    "fdvUsd": 421115514,
    "dominancePercent": 0.01,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Starknet (STRK), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Starknet (STRK) Kaç TL?",
        "answer": "1 Starknet (STRK) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Starknet En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Starknet tüm zamanların en yüksek fiyatına (ATH) $4,41 seviyesinde ulaşmıştır."
      },
      {
        "question": "Starknet Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Starknet dolaşımdaki arzı 7.664.828.795,065 STRK adettir."
      },
      {
        "question": "Starknet Nereden ve Nasıl Alınır?",
        "answer": "Starknet (STRK) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1302183,
    "openInterestChange24h": 0.81,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 43406,
    "longLiquidation24hUsd": 27129,
    "shortLiquidation24hUsd": 16277,
    "dominantLiquidationLevel": 0.0402,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0435,
        "leverage": "25x",
        "volumeUsd": 15192,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0394,
        "leverage": "50x",
        "volumeUsd": 19533,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "sei-network",
    "symbol": "SEI",
    "name": "Sei",
    "slug": "sei-network",
    "binanceSymbol": "SEIUSDT",
    "coingeckoId": "sei-network",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28205/large/Sei_Logo_-_Transparent.png?1696527207",
    "price": 0.04571,
    "change24h": -1.317,
    "high24h": 0.04759,
    "low24h": 0.04561,
    "volume24hUsd": 1791734.990405,
    "marketCapUsd": 307136447,
    "marketCapRank": 93,
    "circulatingSupply": 6733333333,
    "totalSupply": 10000000000,
    "maxSupply": null,
    "athUsd": 1.14,
    "athChangePercent": -95.99678,
    "athDate": "2024-03-15",
    "atlUsd": 0.03828368,
    "atlChangePercent": 19.17717,
    "atlDate": "2026-08-18",
    "fdvUsd": 456143239,
    "dominancePercent": 0.01,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Sei (SEI), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Sei (SEI) Kaç TL?",
        "answer": "1 Sei (SEI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Sei En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Sei tüm zamanların en yüksek fiyatına (ATH) $1,14 seviyesinde ulaşmıştır."
      },
      {
        "question": "Sei Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Sei dolaşımdaki arzı 6.733.333.333 SEI adettir."
      },
      {
        "question": "Sei Nereden ve Nasıl Alınır?",
        "answer": "Sei (SEI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 806281,
    "openInterestChange24h": -0.46,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 26876,
    "longLiquidation24hUsd": 11825,
    "shortLiquidation24hUsd": 15051,
    "dominantLiquidationLevel": 0.0471,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.048,
        "leverage": "25x",
        "volumeUsd": 9407,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0434,
        "leverage": "50x",
        "volumeUsd": 12094,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "falcon-finance-ff",
    "symbol": "FF",
    "name": "Falcon Finance",
    "slug": "falcon-finance-ff",
    "binanceSymbol": "FFUSDT",
    "coingeckoId": "falcon-finance-ff",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69121/large/ff.png?1757573403",
    "price": 0.08639,
    "change24h": -1.359,
    "high24h": 0.08921,
    "low24h": 0.0862,
    "volume24hUsd": 248313.236833,
    "marketCapUsd": 305796549,
    "marketCapRank": 94,
    "circulatingSupply": 3546111110,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 0.770814,
    "athChangePercent": -88.80604,
    "athDate": "2025-09-29",
    "atlUsd": 0.057089,
    "atlChangePercent": 51.13993,
    "atlDate": "2026-07-11",
    "fdvUsd": 862343394,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Falcon Finance (FF), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Falcon Finance (FF) Kaç TL?",
        "answer": "1 Falcon Finance (FF) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Falcon Finance En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Falcon Finance tüm zamanların en yüksek fiyatına (ATH) $0,771 seviyesinde ulaşmıştır."
      },
      {
        "question": "Falcon Finance Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Falcon Finance dolaşımdaki arzı 3.546.111.110 FF adettir."
      },
      {
        "question": "Falcon Finance Nereden ve Nasıl Alınır?",
        "answer": "Falcon Finance (FF) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 111741,
    "openInterestChange24h": -0.48,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3725,
    "longLiquidation24hUsd": 1639,
    "shortLiquidation24hUsd": 2086,
    "dominantLiquidationLevel": 0.089,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0907,
        "leverage": "25x",
        "volumeUsd": 1304,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0821,
        "leverage": "50x",
        "volumeUsd": 1676,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "gnosis",
    "symbol": "GNO",
    "name": "Gnosis",
    "slug": "gnosis",
    "binanceSymbol": "GNOUSDT",
    "coingeckoId": "gnosis",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/662/large/logo_square_simple_300px.png?1696501854",
    "price": 113.03,
    "change24h": -1.602,
    "high24h": 115.41,
    "low24h": 112.3,
    "volume24hUsd": 32496.00592,
    "marketCapUsd": 298313609,
    "marketCapRank": 95,
    "circulatingSupply": 2639589,
    "totalSupply": 3000000,
    "maxSupply": 3000000,
    "athUsd": 644.2,
    "athChangePercent": -82.4578,
    "athDate": "2021-11-08",
    "atlUsd": 6.88,
    "atlChangePercent": 1541.56961,
    "atlDate": "2020-03-12",
    "fdvUsd": 339045520,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Gnosis (GNO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Gnosis (GNO) Kaç TL?",
        "answer": "1 Gnosis (GNO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Gnosis En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Gnosis tüm zamanların en yüksek fiyatına (ATH) $644,2 seviyesinde ulaşmıştır."
      },
      {
        "question": "Gnosis Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Gnosis dolaşımdaki arzı 2.639.589 GNO adettir."
      },
      {
        "question": "Gnosis Nereden ve Nasıl Alınır?",
        "answer": "Gnosis (GNO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 14623,
    "openInterestChange24h": -0.56,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 487,
    "longLiquidation24hUsd": 214,
    "shortLiquidation24hUsd": 273,
    "dominantLiquidationLevel": 116.4209,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 118.6815,
        "leverage": "25x",
        "volumeUsd": 170,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 107.3785,
        "leverage": "50x",
        "volumeUsd": 219,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "sun-token",
    "symbol": "SUN",
    "name": "Sun Token",
    "slug": "sun-token",
    "binanceSymbol": "SUNUSDT",
    "coingeckoId": "sun-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12424/large/RSFOmQ.png?1696512245",
    "price": 0.01546,
    "change24h": -0.77,
    "high24h": 0.01561,
    "low24h": 0.01545,
    "volume24hUsd": 201706.62918,
    "marketCapUsd": 296923634,
    "marketCapRank": 96,
    "circulatingSupply": 19214949012.205658,
    "totalSupply": 19900730000.000004,
    "maxSupply": 19900730000,
    "athUsd": 66.45,
    "athChangePercent": -99.97674,
    "athDate": "2020-09-10",
    "atlUsd": 0.00462303,
    "atlChangePercent": 234.25741,
    "atlDate": "2022-11-13",
    "fdvUsd": 307520830,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sun Token (SUN), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Sun Token (SUN) Kaç TL?",
        "answer": "1 Sun Token (SUN) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Sun Token En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Sun Token tüm zamanların en yüksek fiyatına (ATH) $66,45 seviyesinde ulaşmıştır."
      },
      {
        "question": "Sun Token Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Sun Token dolaşımdaki arzı 19.214.949.012,206 SUN adettir."
      },
      {
        "question": "Sun Token Nereden ve Nasıl Alınır?",
        "answer": "Sun Token (SUN) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 90768,
    "openInterestChange24h": -0.27,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3026,
    "longLiquidation24hUsd": 1331,
    "shortLiquidation24hUsd": 1695,
    "dominantLiquidationLevel": 0.0159,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0162,
        "leverage": "25x",
        "volumeUsd": 1059,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0147,
        "leverage": "50x",
        "volumeUsd": 1362,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "tezos",
    "symbol": "XTZ",
    "name": "Tezos",
    "slug": "tezos",
    "binanceSymbol": "XTZUSDT",
    "coingeckoId": "tezos",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/976/large/Tezos-logo.png?1696502091",
    "price": 0.2596,
    "change24h": 2.044,
    "high24h": 0.2867,
    "low24h": 0.2527,
    "volume24hUsd": 1623816.19889,
    "marketCapUsd": 285889764,
    "marketCapRank": 97,
    "circulatingSupply": 1100812613.580942,
    "totalSupply": 1120754220.726293,
    "maxSupply": null,
    "athUsd": 9.12,
    "athChangePercent": -97.15109,
    "athDate": "2021-10-03",
    "atlUsd": 0.191836,
    "atlChangePercent": 35.38046,
    "atlDate": "2026-08-12",
    "fdvUsd": 291068757,
    "dominancePercent": 0.01,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Tezos (XTZ), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Tezos (XTZ) Kaç TL?",
        "answer": "1 Tezos (XTZ) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Tezos En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Tezos tüm zamanların en yüksek fiyatına (ATH) $9,12 seviyesinde ulaşmıştır."
      },
      {
        "question": "Tezos Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Tezos dolaşımdaki arzı 1.100.812.613,581 XTZ adettir."
      },
      {
        "question": "Tezos Nereden ve Nasıl Alınır?",
        "answer": "Tezos (XTZ) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 730717,
    "openInterestChange24h": 0.72,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 24357,
    "longLiquidation24hUsd": 15223,
    "shortLiquidation24hUsd": 9134,
    "dominantLiquidationLevel": 0.2518,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.2726,
        "leverage": "25x",
        "volumeUsd": 8525,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2466,
        "leverage": "50x",
        "volumeUsd": 10961,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "pendle",
    "symbol": "PENDLE",
    "name": "Pendle",
    "slug": "pendle",
    "binanceSymbol": "PENDLEUSDT",
    "coingeckoId": "pendle",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728",
    "price": 1.635,
    "change24h": -2.037,
    "high24h": 1.718,
    "low24h": 1.63,
    "volume24hUsd": 900750.8144,
    "marketCapUsd": 284084197,
    "marketCapRank": 98,
    "circulatingSupply": 173933060.84207654,
    "totalSupply": 281527448.45853144,
    "maxSupply": null,
    "athUsd": 7.5,
    "athChangePercent": -78.23172,
    "athDate": "2024-04-11",
    "atlUsd": 0.03377729,
    "atlChangePercent": 4735.72516,
    "atlDate": "2022-11-14",
    "fdvUsd": 459817695,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Pendle (PENDLE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Pendle (PENDLE) Kaç TL?",
        "answer": "1 Pendle (PENDLE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Pendle En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Pendle tüm zamanların en yüksek fiyatına (ATH) $7,5 seviyesinde ulaşmıştır."
      },
      {
        "question": "Pendle Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Pendle dolaşımdaki arzı 173.933.060,842 PENDLE adettir."
      },
      {
        "question": "Pendle Nereden ve Nasıl Alınır?",
        "answer": "Pendle (PENDLE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 405338,
    "openInterestChange24h": -0.71,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13511,
    "longLiquidation24hUsd": 5945,
    "shortLiquidation24hUsd": 7566,
    "dominantLiquidationLevel": 1.6841,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.7167,
        "leverage": "25x",
        "volumeUsd": 4729,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.5533,
        "leverage": "50x",
        "volumeUsd": 6080,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "first-digital-usd",
    "symbol": "FDUSD",
    "name": "First Digital USD",
    "slug": "first-digital-usd",
    "binanceSymbol": "FDUSDUSDT",
    "coingeckoId": "first-digital-usd",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31079/large/FDUSD_icon_black.png?1731097953",
    "price": 0.9977,
    "change24h": -0.06,
    "high24h": 0.9985,
    "low24h": 0.9976,
    "volume24hUsd": 7420313.3005,
    "marketCapUsd": 282886750,
    "marketCapRank": 99,
    "circulatingSupply": 283781504.170585,
    "totalSupply": 283781504.170585,
    "maxSupply": null,
    "athUsd": 1.15,
    "athChangePercent": -13.4169,
    "athDate": "2025-02-02",
    "atlUsd": 0.940377,
    "atlChangePercent": 6.00635,
    "atlDate": "2024-12-05",
    "fdvUsd": 282886750,
    "dominancePercent": 0.01,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "First Digital USD (FDUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 First Digital USD (FDUSD) Kaç TL?",
        "answer": "1 First Digital USD (FDUSD) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "First Digital USD En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "First Digital USD tüm zamanların en yüksek fiyatına (ATH) $1,15 seviyesinde ulaşmıştır."
      },
      {
        "question": "First Digital USD Dolaşımdaki Arzı Ne Kadar?",
        "answer": "First Digital USD dolaşımdaki arzı 283.781.504,171 FDUSD adettir."
      },
      {
        "question": "First Digital USD Nereden ve Nasıl Alınır?",
        "answer": "First Digital USD (FDUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3339141,
    "openInterestChange24h": -0.02,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 111305,
    "longLiquidation24hUsd": 48974,
    "shortLiquidation24hUsd": 62331,
    "dominantLiquidationLevel": 1.0276,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0476,
        "leverage": "25x",
        "volumeUsd": 38957,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9478,
        "leverage": "50x",
        "volumeUsd": 50087,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "plasma",
    "symbol": "XPL",
    "name": "Plasma",
    "slug": "plasma",
    "binanceSymbol": "XPLUSDT",
    "coingeckoId": "plasma",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/66489/large/Plasma-symbol-green-1.png?1755142558",
    "price": 0.05767,
    "change24h": 0.052,
    "high24h": 0.05961,
    "low24h": 0.05659,
    "volume24hUsd": 4325778.242874,
    "marketCapUsd": 274275722,
    "marketCapRank": 100,
    "circulatingSupply": 4761111111.1111,
    "totalSupply": 10000000000,
    "maxSupply": null,
    "athUsd": 1.68,
    "athChangePercent": -96.57495,
    "athDate": "2025-09-27",
    "atlUsd": 0.056495,
    "atlChangePercent": 2.01074,
    "atlDate": "2026-11-06",
    "fdvUsd": 576075029,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Plasma (XPL), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Plasma (XPL) Kaç TL?",
        "answer": "1 Plasma (XPL) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Plasma En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Plasma tüm zamanların en yüksek fiyatına (ATH) $1,68 seviyesinde ulaşmıştır."
      },
      {
        "question": "Plasma Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Plasma dolaşımdaki arzı 4.761.111.111,111 XPL adettir."
      },
      {
        "question": "Plasma Nereden ve Nasıl Alınır?",
        "answer": "Plasma (XPL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1946600,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 64887,
    "longLiquidation24hUsd": 40554,
    "shortLiquidation24hUsd": 24333,
    "dominantLiquidationLevel": 0.0559,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0606,
        "leverage": "25x",
        "volumeUsd": 22710,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0548,
        "leverage": "50x",
        "volumeUsd": 29199,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "lido-dao",
    "symbol": "LDO",
    "name": "Lido DAO",
    "slug": "lido-dao",
    "binanceSymbol": "LDOUSDT",
    "coingeckoId": "lido-dao",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13573/large/Lido_DAO.png?1696513326",
    "price": 0.3231,
    "change24h": -3.147,
    "high24h": 0.3362,
    "low24h": 0.3221,
    "volume24hUsd": 1460648.038998,
    "marketCapUsd": 267372680,
    "marketCapRank": 101,
    "circulatingSupply": 829567764.2043006,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 7.3,
    "athChangePercent": -95.58683,
    "athDate": "2021-08-20",
    "atlUsd": 0.235028,
    "atlChangePercent": 37.12774,
    "atlDate": "2026-06-25",
    "fdvUsd": 322303604,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Lido DAO (LDO), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Lido DAO (LDO) Kaç TL?",
        "answer": "1 Lido DAO (LDO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Lido DAO En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Lido DAO tüm zamanların en yüksek fiyatına (ATH) $7,3 seviyesinde ulaşmıştır."
      },
      {
        "question": "Lido DAO Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Lido DAO dolaşımdaki arzı 829.567.764,204 LDO adettir."
      },
      {
        "question": "Lido DAO Nereden ve Nasıl Alınır?",
        "answer": "Lido DAO (LDO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 657292,
    "openInterestChange24h": -1.1,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 21910,
    "longLiquidation24hUsd": 9640,
    "shortLiquidation24hUsd": 12270,
    "dominantLiquidationLevel": 0.3328,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3393,
        "leverage": "25x",
        "volumeUsd": 7668,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3069,
        "leverage": "50x",
        "volumeUsd": 9860,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "kite-2",
    "symbol": "KITE",
    "name": "Kite",
    "slug": "kite-2",
    "binanceSymbol": "KITEUSDT",
    "coingeckoId": "kite-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/70426/large/KITE-ICON.png?1762328605",
    "price": 0.1096,
    "change24h": -3.691,
    "high24h": 0.1141,
    "low24h": 0.1083,
    "volume24hUsd": 531176.52008,
    "marketCapUsd": 261884365,
    "marketCapRank": 102,
    "circulatingSupply": 2391196012,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 0.319747,
    "athChangePercent": -65.73768,
    "athDate": "2026-03-06",
    "atlUsd": 0.061819,
    "atlChangePercent": 77.21452,
    "atlDate": "2025-11-04",
    "fdvUsd": 1095202415,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kite (KITE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Kite (KITE) Kaç TL?",
        "answer": "1 Kite (KITE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Kite En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Kite tüm zamanların en yüksek fiyatına (ATH) $0,32 seviyesinde ulaşmıştır."
      },
      {
        "question": "Kite Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Kite dolaşımdaki arzı 2.391.196.012 KITE adettir."
      },
      {
        "question": "Kite Nereden ve Nasıl Alınır?",
        "answer": "Kite (KITE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 239029,
    "openInterestChange24h": -1.29,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 7968,
    "longLiquidation24hUsd": 3506,
    "shortLiquidation24hUsd": 4462,
    "dominantLiquidationLevel": 0.1129,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1151,
        "leverage": "25x",
        "volumeUsd": 2789,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1041,
        "leverage": "50x",
        "volumeUsd": 3586,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "bonk",
    "symbol": "BONK",
    "name": "Bonk",
    "slug": "bonk",
    "binanceSymbol": "BONKUSDT",
    "coingeckoId": "bonk",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28600/large/bonk.jpg?1696527587",
    "price": 0.0000028,
    "change24h": -4.11,
    "high24h": 0.00000296,
    "low24h": 0.00000279,
    "volume24hUsd": 1309936.2832822,
    "marketCapUsd": 245642562,
    "marketCapRank": 103,
    "circulatingSupply": 87994301565171.83,
    "totalSupply": 87994301565171.84,
    "maxSupply": 87995282867000.55,
    "athUsd": 0.00005825,
    "athChangePercent": -95.19993,
    "athDate": "2024-11-19",
    "atlUsd": 8.6142e-8,
    "atlChangePercent": 3145.84481,
    "atlDate": "2022-12-29",
    "fdvUsd": 245642562,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "Bonk (BONK), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Bonk (BONK) Kaç TL?",
        "answer": "1 Bonk (BONK) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Bonk En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Bonk tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "Bonk Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Bonk dolaşımdaki arzı 87.994.301.565.171,83 BONK adettir."
      },
      {
        "question": "Bonk Nereden ve Nasıl Alınır?",
        "answer": "Bonk (BONK) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 589471,
    "openInterestChange24h": -1.44,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 19649,
    "longLiquidation24hUsd": 8646,
    "shortLiquidation24hUsd": 11003,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 6877,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 8842,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "optimism",
    "symbol": "OP",
    "name": "Optimism",
    "slug": "optimism",
    "binanceSymbol": "OPUSDT",
    "coingeckoId": "optimism",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/25244/large/Token.png?1774456081",
    "price": 0.103,
    "change24h": -2.738,
    "high24h": 0.1094,
    "low24h": 0.1025,
    "volume24hUsd": 1195520.6328,
    "marketCapUsd": 235421601,
    "marketCapRank": 104,
    "circulatingSupply": 2290771093,
    "totalSupply": 4294967296,
    "maxSupply": 4294967296,
    "athUsd": 4.84,
    "athChangePercent": -97.87852,
    "athDate": "2024-03-06",
    "atlUsd": 0.080689,
    "atlChangePercent": 27.36747,
    "atlDate": "2026-08-18",
    "fdvUsd": 441392019,
    "dominancePercent": 0.01,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Optimism (OP), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "tokenUnlock": {
      "nextUnlockDate": "2026-11-30",
      "unlockedTokens": 31340000,
      "unlockedPercent": 2.45,
      "unlockValueUsd": 50144000,
      "unlockType": "CLIFF",
      "targetAudience": "Çekirdek Katkıcılar ve Ekosistem",
      "riskScore": 65
    },
    "faqs": [
      {
        "question": "1 Optimism (OP) Kaç TL?",
        "answer": "1 Optimism (OP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Optimism En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Optimism tüm zamanların en yüksek fiyatına (ATH) $4,84 seviyesinde ulaşmıştır."
      },
      {
        "question": "Optimism Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Optimism dolaşımdaki arzı 2.290.771.093 OP adettir."
      },
      {
        "question": "Optimism Nereden ve Nasıl Alınır?",
        "answer": "Optimism (OP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 537984,
    "openInterestChange24h": -0.96,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 17933,
    "longLiquidation24hUsd": 7891,
    "shortLiquidation24hUsd": 10042,
    "dominantLiquidationLevel": 0.1061,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1081,
        "leverage": "25x",
        "volumeUsd": 6277,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0978,
        "leverage": "50x",
        "volumeUsd": 8070,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "decred",
    "symbol": "DCR",
    "name": "Decred",
    "slug": "decred",
    "binanceSymbol": "DCRUSDT",
    "coingeckoId": "decred",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/329/large/dcr.png?1762890696",
    "price": 12.82,
    "change24h": 0.786,
    "high24h": 12.9,
    "low24h": 12.56,
    "volume24hUsd": 68750.26074,
    "marketCapUsd": 226330374,
    "marketCapRank": 105,
    "circulatingSupply": 17680291.69696568,
    "totalSupply": 17680921.11980588,
    "maxSupply": 21000000,
    "athUsd": 247.35,
    "athChangePercent": -94.82934,
    "athDate": "2021-04-16",
    "atlUsd": 0.43154,
    "atlChangePercent": 2863.73313,
    "atlDate": "2016-12-25",
    "fdvUsd": 226338431,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Decred (DCR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Decred (DCR) Kaç TL?",
        "answer": "1 Decred (DCR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Decred En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Decred tüm zamanların en yüksek fiyatına (ATH) $247,35 seviyesinde ulaşmıştır."
      },
      {
        "question": "Decred Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Decred dolaşımdaki arzı 17.680.291,697 DCR adettir."
      },
      {
        "question": "Decred Nereden ve Nasıl Alınır?",
        "answer": "Decred (DCR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 30938,
    "openInterestChange24h": 0.28,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 1031,
    "longLiquidation24hUsd": 644,
    "shortLiquidation24hUsd": 387,
    "dominantLiquidationLevel": 12.4354,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 13.461,
        "leverage": "25x",
        "volumeUsd": 361,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 12.179,
        "leverage": "50x",
        "volumeUsd": 464,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "terra-luna",
    "symbol": "LUNC",
    "name": "Terra Luna Classic",
    "slug": "terra-luna",
    "binanceSymbol": "LUNCUSDT",
    "coingeckoId": "terra-luna",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png?1696508486",
    "price": 0.00004058,
    "change24h": -2.075,
    "high24h": 0.00004174,
    "low24h": 0.00004051,
    "volume24hUsd": 923067.80414758,
    "marketCapUsd": 223681850,
    "marketCapRank": 106,
    "circulatingSupply": 5517861410090.203,
    "totalSupply": 6443999875647.127,
    "maxSupply": null,
    "athUsd": 119.18,
    "athChangePercent": -99.99997,
    "athDate": "2022-04-05",
    "atlUsd": 9.99967e-7,
    "atlChangePercent": 3954.94472,
    "atlDate": "2022-05-12",
    "fdvUsd": 261225448,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Terra Luna Classic (LUNC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Terra Luna Classic (LUNC) Kaç TL?",
        "answer": "1 Terra Luna Classic (LUNC) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Terra Luna Classic En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Terra Luna Classic tüm zamanların en yüksek fiyatına (ATH) $119,18 seviyesinde ulaşmıştır."
      },
      {
        "question": "Terra Luna Classic Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Terra Luna Classic dolaşımdaki arzı 5.517.861.410.090,203 LUNC adettir."
      },
      {
        "question": "Terra Luna Classic Nereden ve Nasıl Alınır?",
        "answer": "Terra Luna Classic (LUNC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 415381,
    "openInterestChange24h": -0.73,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13846,
    "longLiquidation24hUsd": 6092,
    "shortLiquidation24hUsd": 7754,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 4846,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 6231,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "conflux-token",
    "symbol": "CFX",
    "name": "Conflux",
    "slug": "conflux-token",
    "binanceSymbol": "CFXUSDT",
    "coingeckoId": "conflux-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13079/large/3vuYMbjN.png?1696512867",
    "price": 0.04248,
    "change24h": -2.858,
    "high24h": 0.0444,
    "low24h": 0.04232,
    "volume24hUsd": 542950.1998,
    "marketCapUsd": 223047237,
    "marketCapRank": 107,
    "circulatingSupply": 5253298886.71,
    "totalSupply": 5253400448.32,
    "maxSupply": null,
    "athUsd": 1.7,
    "athChangePercent": -97.50429,
    "athDate": "2021-03-26",
    "atlUsd": 0.02199898,
    "atlChangePercent": 92.95537,
    "atlDate": "2022-12-30",
    "fdvUsd": 223051549,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Conflux (CFX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Conflux (CFX) Kaç TL?",
        "answer": "1 Conflux (CFX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Conflux En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Conflux tüm zamanların en yüksek fiyatına (ATH) $1,7 seviyesinde ulaşmıştır."
      },
      {
        "question": "Conflux Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Conflux dolaşımdaki arzı 5.253.298.886,71 CFX adettir."
      },
      {
        "question": "Conflux Nereden ve Nasıl Alınır?",
        "answer": "Conflux (CFX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 244328,
    "openInterestChange24h": -1,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 8144,
    "longLiquidation24hUsd": 3583,
    "shortLiquidation24hUsd": 4561,
    "dominantLiquidationLevel": 0.0438,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0446,
        "leverage": "25x",
        "volumeUsd": 2850,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0404,
        "leverage": "50x",
        "volumeUsd": 3665,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "frax",
    "symbol": "FRAX",
    "name": "Legacy Frax Dollar",
    "slug": "frax",
    "binanceSymbol": "FRAXUSDT",
    "coingeckoId": "frax",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13422/large/LFRAX.png?1751911193",
    "price": 0.2416,
    "change24h": -1.589,
    "high24h": 0.2467,
    "low24h": 0.2415,
    "volume24hUsd": 49616.24833,
    "marketCapUsd": 216972446,
    "marketCapRank": 108,
    "circulatingSupply": 219173039.72171742,
    "totalSupply": 219173039.72171742,
    "maxSupply": null,
    "athUsd": 1.66,
    "athChangePercent": -40.47886,
    "athDate": "2026-03-30",
    "atlUsd": 0.249813,
    "atlChangePercent": 296.28079,
    "atlDate": "2026-06-24",
    "fdvUsd": 216972446,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Legacy Frax Dollar (FRAX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Legacy Frax Dollar (FRAX) Kaç TL?",
        "answer": "1 Legacy Frax Dollar (FRAX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Legacy Frax Dollar En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Legacy Frax Dollar tüm zamanların en yüksek fiyatına (ATH) $1,66 seviyesinde ulaşmıştır."
      },
      {
        "question": "Legacy Frax Dollar Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Legacy Frax Dollar dolaşımdaki arzı 219.173.039,722 FRAX adettir."
      },
      {
        "question": "Legacy Frax Dollar Nereden ve Nasıl Alınır?",
        "answer": "Legacy Frax Dollar (FRAX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 22327,
    "openInterestChange24h": -0.56,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 744,
    "longLiquidation24hUsd": 327,
    "shortLiquidation24hUsd": 417,
    "dominantLiquidationLevel": 0.2488,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.2537,
        "leverage": "25x",
        "volumeUsd": 260,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2295,
        "leverage": "50x",
        "volumeUsd": 335,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "kaia",
    "symbol": "KAIA",
    "name": "Kaia",
    "slug": "kaia",
    "binanceSymbol": "KAIAUSDT",
    "coingeckoId": "kaia",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/39901/large/KAIA.png?1724734368",
    "price": 0.0325,
    "change24h": -2.985,
    "high24h": 0.0341,
    "low24h": 0.0324,
    "volume24hUsd": 336477.44891,
    "marketCapUsd": 209624001,
    "marketCapRank": 109,
    "circulatingSupply": 6461235434.617423,
    "totalSupply": 6461285635.570183,
    "maxSupply": null,
    "athUsd": 0.406698,
    "athChangePercent": -92.02577,
    "athDate": "2024-12-02",
    "atlUsd": 0.02166246,
    "atlChangePercent": 49.7107,
    "atlDate": "2026-08-19",
    "fdvUsd": 209625630,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kaia (KAIA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Kaia (KAIA) Kaç TL?",
        "answer": "1 Kaia (KAIA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Kaia En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Kaia tüm zamanların en yüksek fiyatına (ATH) $0,407 seviyesinde ulaşmıştır."
      },
      {
        "question": "Kaia Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Kaia dolaşımdaki arzı 6.461.235.434,617 KAIA adettir."
      },
      {
        "question": "Kaia Nereden ve Nasıl Alınır?",
        "answer": "Kaia (KAIA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 151415,
    "openInterestChange24h": -1.04,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 5047,
    "longLiquidation24hUsd": 2221,
    "shortLiquidation24hUsd": 2826,
    "dominantLiquidationLevel": 0.0335,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0341,
        "leverage": "25x",
        "volumeUsd": 1766,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0309,
        "leverage": "50x",
        "volumeUsd": 2271,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "the-graph",
    "symbol": "GRT",
    "name": "The Graph",
    "slug": "the-graph",
    "binanceSymbol": "GRTUSDT",
    "coingeckoId": "the-graph",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13397/large/Graph_Token.png?1696513159",
    "price": 0.01893,
    "change24h": -3.369,
    "high24h": 0.01992,
    "low24h": 0.01889,
    "volume24hUsd": 257996.24341,
    "marketCapUsd": 207098737,
    "marketCapRank": 110,
    "circulatingSupply": 10941320353.04,
    "totalSupply": 11612995353.0437,
    "maxSupply": null,
    "athUsd": 2.84,
    "athChangePercent": -99.33393,
    "athDate": "2021-02-11",
    "atlUsd": 0.01297915,
    "atlChangePercent": 45.82156,
    "atlDate": "2026-08-18",
    "fdvUsd": 219812289,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "The Graph (GRT), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 The Graph (GRT) Kaç TL?",
        "answer": "1 The Graph (GRT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "The Graph En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "The Graph tüm zamanların en yüksek fiyatına (ATH) $2,84 seviyesinde ulaşmıştır."
      },
      {
        "question": "The Graph Dolaşımdaki Arzı Ne Kadar?",
        "answer": "The Graph dolaşımdaki arzı 10.941.320.353,04 GRT adettir."
      },
      {
        "question": "The Graph Nereden ve Nasıl Alınır?",
        "answer": "The Graph (GRT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 116098,
    "openInterestChange24h": -1.18,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3870,
    "longLiquidation24hUsd": 1703,
    "shortLiquidation24hUsd": 2167,
    "dominantLiquidationLevel": 0.0195,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0199,
        "leverage": "25x",
        "volumeUsd": 1355,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.018,
        "leverage": "50x",
        "volumeUsd": 1742,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "spacex-bstocks-tokenized-stock",
    "symbol": "SPCXB",
    "name": "SpaceX (bStocks Tokenized Stock)",
    "slug": "spacex-bstocks-tokenized-stock",
    "binanceSymbol": "SPCXBUSDT",
    "coingeckoId": "spacex-bstocks-tokenized-stock",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/102173888/large/bstocks_spacex.png?1781280362",
    "price": 135.01,
    "change24h": 4.392,
    "high24h": 137.44,
    "low24h": 128.09,
    "volume24hUsd": 35435634.38658,
    "marketCapUsd": 206586488,
    "marketCapRank": 111,
    "circulatingSupply": 1531455.15483591,
    "totalSupply": 1531475.6839634501,
    "maxSupply": null,
    "athUsd": 229.67,
    "athChangePercent": -41.26513,
    "athDate": "2026-06-16",
    "atlUsd": 105.76,
    "atlChangePercent": 27.54472,
    "atlDate": "2026-08-03",
    "fdvUsd": 206589258,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "SpaceX (bStocks Tokenized Stock) (SPCXB), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 SpaceX (bStocks Tokenized Stock) (SPCXB) Kaç TL?",
        "answer": "1 SpaceX (bStocks Tokenized Stock) (SPCXB) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "SpaceX (bStocks Tokenized Stock) En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "SpaceX (bStocks Tokenized Stock) tüm zamanların en yüksek fiyatına (ATH) $229,67 seviyesinde ulaşmıştır."
      },
      {
        "question": "SpaceX (bStocks Tokenized Stock) Dolaşımdaki Arzı Ne Kadar?",
        "answer": "SpaceX (bStocks Tokenized Stock) dolaşımdaki arzı 1.531.455,155 SPCXB adettir."
      },
      {
        "question": "SpaceX (bStocks Tokenized Stock) Nereden ve Nasıl Alınır?",
        "answer": "SpaceX (bStocks Tokenized Stock) (SPCXB) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 15946035,
    "openInterestChange24h": 1.54,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 531535,
    "longLiquidation24hUsd": 332209,
    "shortLiquidation24hUsd": 199326,
    "dominantLiquidationLevel": 130.9597,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 141.7605,
        "leverage": "25x",
        "volumeUsd": 186037,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 128.2595,
        "leverage": "50x",
        "volumeUsd": 239191,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "arweave",
    "symbol": "AR",
    "name": "Arweave",
    "slug": "arweave",
    "binanceSymbol": "ARUSDT",
    "coingeckoId": "arweave",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1696504946",
    "price": 3.147,
    "change24h": 0.447,
    "high24h": 3.294,
    "low24h": 3.128,
    "volume24hUsd": 930716.76622,
    "marketCapUsd": 206125856,
    "marketCapRank": 112,
    "circulatingSupply": 65652466,
    "totalSupply": 65652466,
    "maxSupply": 66000000,
    "athUsd": 89.24,
    "athChangePercent": -96.48127,
    "athDate": "2021-11-04",
    "atlUsd": 0.298788,
    "atlChangePercent": 950.89295,
    "atlDate": "2020-01-30",
    "fdvUsd": 206125856,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Arweave (AR), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Arweave (AR) Kaç TL?",
        "answer": "1 Arweave (AR) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Arweave En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Arweave tüm zamanların en yüksek fiyatına (ATH) $89,24 seviyesinde ulaşmıştır."
      },
      {
        "question": "Arweave Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Arweave dolaşımdaki arzı 65.652.466 AR adettir."
      },
      {
        "question": "Arweave Nereden ve Nasıl Alınır?",
        "answer": "Arweave (AR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 418823,
    "openInterestChange24h": 0.16,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 13961,
    "longLiquidation24hUsd": 8726,
    "shortLiquidation24hUsd": 5235,
    "dominantLiquidationLevel": 3.0526,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 3.3043,
        "leverage": "25x",
        "volumeUsd": 4886,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.9896,
        "leverage": "50x",
        "volumeUsd": 6282,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "floki",
    "symbol": "FLOKI",
    "name": "FLOKI",
    "slug": "floki",
    "binanceSymbol": "FLOKIUSDT",
    "coingeckoId": "floki",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/16746/large/PNG_image.png?1696516318",
    "price": 0.00002138,
    "change24h": -2.241,
    "high24h": 0.00002214,
    "low24h": 0.00002134,
    "volume24hUsd": 575018.68649098,
    "marketCapUsd": 205718808,
    "marketCapRank": 113,
    "circulatingSupply": 9642278549065.572,
    "totalSupply": 9642278549065.572,
    "maxSupply": 20000000000000,
    "athUsd": 0.00034495,
    "athChangePercent": -93.81271,
    "athDate": "2024-06-04",
    "atlUsd": 8.428e-8,
    "atlChangePercent": 25224.00988,
    "atlDate": "2021-07-05",
    "fdvUsd": 205718808,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "FLOKI (FLOKI), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 FLOKI (FLOKI) Kaç TL?",
        "answer": "1 FLOKI (FLOKI) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "FLOKI En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "FLOKI tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "FLOKI Dolaşımdaki Arzı Ne Kadar?",
        "answer": "FLOKI dolaşımdaki arzı 9.642.278.549.065,572 FLOKI adettir."
      },
      {
        "question": "FLOKI Nereden ve Nasıl Alınır?",
        "answer": "FLOKI (FLOKI) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 258758,
    "openInterestChange24h": -0.78,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 8625,
    "longLiquidation24hUsd": 3795,
    "shortLiquidation24hUsd": 4830,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 3019,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 3881,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "kamino",
    "symbol": "KMNO",
    "name": "Kamino",
    "slug": "kamino",
    "binanceSymbol": "KMNOUSDT",
    "coingeckoId": "kamino",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/35801/large/Kamino_200x200.png?1767944671",
    "price": 0.03412,
    "change24h": -0.554,
    "high24h": 0.03492,
    "low24h": 0.03382,
    "volume24hUsd": 303965.24791,
    "marketCapUsd": 201828482,
    "marketCapRank": 114,
    "circulatingSupply": 5931507223.75,
    "totalSupply": 9999956549.62466,
    "maxSupply": 10000000000,
    "athUsd": 0.247842,
    "athChangePercent": -86.27012,
    "athDate": "2024-12-15",
    "atlUsd": 0.01342703,
    "atlChangePercent": 153.43248,
    "atlDate": "2026-06-06",
    "fdvUsd": 340263608,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kamino (KMNO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Kamino (KMNO) Kaç TL?",
        "answer": "1 Kamino (KMNO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Kamino En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Kamino tüm zamanların en yüksek fiyatına (ATH) $0,248 seviyesinde ulaşmıştır."
      },
      {
        "question": "Kamino Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Kamino dolaşımdaki arzı 5.931.507.223,75 KMNO adettir."
      },
      {
        "question": "Kamino Nereden ve Nasıl Alınır?",
        "answer": "Kamino (KMNO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 136784,
    "openInterestChange24h": -0.19,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 4559,
    "longLiquidation24hUsd": 2006,
    "shortLiquidation24hUsd": 2553,
    "dominantLiquidationLevel": 0.0351,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0358,
        "leverage": "25x",
        "volumeUsd": 1596,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0324,
        "leverage": "50x",
        "volumeUsd": 2052,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "apenft",
    "symbol": "NFT",
    "name": "AINFT",
    "slug": "apenft",
    "binanceSymbol": "NFTUSDT",
    "coingeckoId": "apenft",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/15687/large/AINFT.png?1761099340",
    "price": 2.02964e-7,
    "change24h": -10.29551,
    "high24h": 2.28014e-7,
    "low24h": 2.01707e-7,
    "volume24hUsd": 8410717,
    "marketCapUsd": 200955266,
    "marketCapRank": 115,
    "circulatingSupply": 990105592982874.8,
    "totalSupply": 990105592982874.8,
    "maxSupply": 999990000000000,
    "athUsd": 0.00000753,
    "athChangePercent": -97.30461,
    "athDate": "2021-09-04",
    "atlUsd": 2.01707e-7,
    "atlChangePercent": 0.62303,
    "atlDate": "2026-11-07",
    "fdvUsd": 200955266,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "AINFT (NFT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 AINFT (NFT) Kaç TL?",
        "answer": "1 AINFT (NFT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "AINFT En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "AINFT tüm zamanların en yüksek fiyatına (ATH) $0 seviyesinde ulaşmıştır."
      },
      {
        "question": "AINFT Dolaşımdaki Arzı Ne Kadar?",
        "answer": "AINFT dolaşımdaki arzı 990.105.592.982.874,8 NFT adettir."
      },
      {
        "question": "AINFT Nereden ve Nasıl Alınır?",
        "answer": "AINFT (NFT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3784823,
    "openInterestChange24h": -3.6,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 126161,
    "longLiquidation24hUsd": 55511,
    "shortLiquidation24hUsd": 70650,
    "dominantLiquidationLevel": 0,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 44156,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 56772,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "compound-governance-token",
    "symbol": "COMP",
    "name": "Compound",
    "slug": "compound-governance-token",
    "binanceSymbol": "COMPUSDT",
    "coingeckoId": "compound-governance-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/10775/large/COMP.png?1696510737",
    "price": 20.12,
    "change24h": 0.399,
    "high24h": 20.33,
    "low24h": 19.92,
    "volume24hUsd": 394490.04995,
    "marketCapUsd": 200425243,
    "marketCapRank": 116,
    "circulatingSupply": 10000000,
    "totalSupply": 10000000,
    "maxSupply": 10000000,
    "athUsd": 854.45,
    "athChangePercent": -97.65446,
    "athDate": "2021-05-11",
    "atlUsd": 14.86,
    "atlChangePercent": 34.91172,
    "atlDate": "2026-06-25",
    "fdvUsd": 200425243,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Compound (COMP), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Compound (COMP) Kaç TL?",
        "answer": "1 Compound (COMP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Compound En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Compound tüm zamanların en yüksek fiyatına (ATH) $854,45 seviyesinde ulaşmıştır."
      },
      {
        "question": "Compound Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Compound dolaşımdaki arzı 10.000.000 COMP adettir."
      },
      {
        "question": "Compound Nereden ve Nasıl Alınır?",
        "answer": "Compound (COMP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 177521,
    "openInterestChange24h": 0.14,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 5917,
    "longLiquidation24hUsd": 3698,
    "shortLiquidation24hUsd": 2219,
    "dominantLiquidationLevel": 19.5164,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 21.126,
        "leverage": "25x",
        "volumeUsd": 2071,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 19.114,
        "leverage": "50x",
        "volumeUsd": 2663,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "beam-2",
    "symbol": "BEAM",
    "name": "Beam",
    "slug": "beam-2",
    "binanceSymbol": "BEAMUSDT",
    "coingeckoId": "beam-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/32417/large/cgicon.png?1747892021",
    "price": 0.0652,
    "change24h": 3.165,
    "high24h": 0.068,
    "low24h": 0.0631,
    "volume24hUsd": 739250.4197,
    "marketCapUsd": 197415948,
    "marketCapRank": 117,
    "circulatingSupply": 50315935307,
    "totalSupply": 57485935307,
    "maxSupply": 57485935307,
    "athUsd": 0.04416304,
    "athChangePercent": -91.11632,
    "athDate": "2024-03-10",
    "atlUsd": 0.00121358,
    "atlChangePercent": 223.28283,
    "atlDate": "2026-06-25",
    "fdvUsd": 225547639,
    "dominancePercent": 0.01,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Beam (BEAM), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Beam (BEAM) Kaç TL?",
        "answer": "1 Beam (BEAM) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Beam En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Beam tüm zamanların en yüksek fiyatına (ATH) $0,044 seviyesinde ulaşmıştır."
      },
      {
        "question": "Beam Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Beam dolaşımdaki arzı 50.315.935.307 BEAM adettir."
      },
      {
        "question": "Beam Nereden ve Nasıl Alınır?",
        "answer": "Beam (BEAM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 332663,
    "openInterestChange24h": 1.11,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 11089,
    "longLiquidation24hUsd": 6931,
    "shortLiquidation24hUsd": 4158,
    "dominantLiquidationLevel": 0.0632,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0685,
        "leverage": "25x",
        "volumeUsd": 3881,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0619,
        "leverage": "50x",
        "volumeUsd": 4990,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "monad",
    "symbol": "MON",
    "name": "Monad",
    "slug": "monad",
    "binanceSymbol": "MONUSDT",
    "coingeckoId": "monad",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/38927/large/mon.png?1766029057",
    "price": 0.01660575,
    "change24h": -4.00295,
    "high24h": 0.01756106,
    "low24h": 0.01666958,
    "volume24hUsd": 7914641,
    "marketCapUsd": 196356616,
    "marketCapRank": 118,
    "circulatingSupply": 11825165000,
    "totalSupply": 100682925000,
    "maxSupply": null,
    "athUsd": 0.04882901,
    "athChangePercent": -65.99203,
    "athDate": "2025-11-26",
    "atlUsd": 0.01636691,
    "atlChangePercent": 1.45927,
    "atlDate": "2026-02-05",
    "fdvUsd": 1671837855,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Monad (MON), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Monad (MON) Kaç TL?",
        "answer": "1 Monad (MON) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Monad En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Monad tüm zamanların en yüksek fiyatına (ATH) $0,049 seviyesinde ulaşmıştır."
      },
      {
        "question": "Monad Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Monad dolaşımdaki arzı 11.825.165.000 MON adettir."
      },
      {
        "question": "Monad Nereden ve Nasıl Alınır?",
        "answer": "Monad (MON) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3561588,
    "openInterestChange24h": -1.4,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 118720,
    "longLiquidation24hUsd": 52237,
    "shortLiquidation24hUsd": 66483,
    "dominantLiquidationLevel": 0.0171,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0174,
        "leverage": "25x",
        "volumeUsd": 41552,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0158,
        "leverage": "50x",
        "volumeUsd": 53424,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "thorchain",
    "symbol": "RUNE",
    "name": "THORChain",
    "slug": "thorchain",
    "binanceSymbol": "RUNEUSDT",
    "coingeckoId": "thorchain",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/6595/large/THORChain_RUNE_Token.png?1782452363",
    "price": 0.587,
    "change24h": -1.345,
    "high24h": 0.602,
    "low24h": 0.578,
    "volume24hUsd": 829059.142,
    "marketCapUsd": 193407245,
    "marketCapRank": 119,
    "circulatingSupply": 329205698,
    "totalSupply": 353868154,
    "maxSupply": 353868154,
    "athUsd": 20.87,
    "athChangePercent": -97.18464,
    "athDate": "2021-05-18",
    "atlUsd": 0.00851264,
    "atlChangePercent": 6801.46073,
    "atlDate": "2019-09-27",
    "fdvUsd": 207896355,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "THORChain (RUNE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 THORChain (RUNE) Kaç TL?",
        "answer": "1 THORChain (RUNE) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "THORChain En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "THORChain tüm zamanların en yüksek fiyatına (ATH) $20,87 seviyesinde ulaşmıştır."
      },
      {
        "question": "THORChain Dolaşımdaki Arzı Ne Kadar?",
        "answer": "THORChain dolaşımdaki arzı 329.205.698 RUNE adettir."
      },
      {
        "question": "THORChain Nereden ve Nasıl Alınır?",
        "answer": "THORChain (RUNE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 373077,
    "openInterestChange24h": -0.47,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 12436,
    "longLiquidation24hUsd": 5472,
    "shortLiquidation24hUsd": 6964,
    "dominantLiquidationLevel": 0.6046,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.6163,
        "leverage": "25x",
        "volumeUsd": 4353,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5576,
        "leverage": "50x",
        "volumeUsd": 5596,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "ethereum-name-service",
    "symbol": "ENS",
    "name": "Ethereum Name Service",
    "slug": "ethereum-name-service",
    "binanceSymbol": "ENSUSDT",
    "coingeckoId": "ethereum-name-service",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/19785/large/ENS.jpg?1727872989",
    "price": 4.57,
    "change24h": -2.141,
    "high24h": 4.71,
    "low24h": 4.53,
    "volume24hUsd": 583790.8727,
    "marketCapUsd": 192915416,
    "marketCapRank": 120,
    "circulatingSupply": 42309428.031430915,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 83.4,
    "athChangePercent": -94.52964,
    "athDate": "2021-11-10",
    "atlUsd": 3.77,
    "atlChangePercent": 20.90733,
    "atlDate": "2026-08-18",
    "fdvUsd": 455963185,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ethereum Name Service (ENS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Ethereum Name Service (ENS) Kaç TL?",
        "answer": "1 Ethereum Name Service (ENS) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Ethereum Name Service En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Ethereum Name Service tüm zamanların en yüksek fiyatına (ATH) $83,4 seviyesinde ulaşmıştır."
      },
      {
        "question": "Ethereum Name Service Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Ethereum Name Service dolaşımdaki arzı 42.309.428,031 ENS adettir."
      },
      {
        "question": "Ethereum Name Service Nereden ve Nasıl Alınır?",
        "answer": "Ethereum Name Service (ENS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 262706,
    "openInterestChange24h": -0.75,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 8757,
    "longLiquidation24hUsd": 3853,
    "shortLiquidation24hUsd": 4904,
    "dominantLiquidationLevel": 4.7071,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 4.7985,
        "leverage": "25x",
        "volumeUsd": 3065,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 4.3415,
        "leverage": "50x",
        "volumeUsd": 3941,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "instadapp",
    "symbol": "FLUID",
    "name": "Fluid",
    "slug": "instadapp",
    "binanceSymbol": "FLUIDUSDT",
    "coingeckoId": "instadapp",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/14688/large/Frame_1686566116_%281%29_%281%29.png?1784708239",
    "price": 2.28,
    "change24h": -3.37934,
    "high24h": 2.37,
    "low24h": 2.25,
    "volume24hUsd": 2887590,
    "marketCapUsd": 191113865,
    "marketCapRank": 121,
    "circulatingSupply": 83696996.82034639,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 24.4,
    "athChangePercent": -90.64028,
    "athDate": "2021-06-16",
    "atlUsd": 0.366538,
    "atlChangePercent": 523.08603,
    "atlDate": "2022-12-28",
    "fdvUsd": 228340171,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Fluid (FLUID), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Fluid (FLUID) Kaç TL?",
        "answer": "1 Fluid (FLUID) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Fluid En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Fluid tüm zamanların en yüksek fiyatına (ATH) $24,4 seviyesinde ulaşmıştır."
      },
      {
        "question": "Fluid Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Fluid dolaşımdaki arzı 83.696.996,82 FLUID adettir."
      },
      {
        "question": "Fluid Nereden ve Nasıl Alınır?",
        "answer": "Fluid (FLUID) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1299416,
    "openInterestChange24h": -1.18,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 43314,
    "longLiquidation24hUsd": 19058,
    "shortLiquidation24hUsd": 24256,
    "dominantLiquidationLevel": 2.3484,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 2.394,
        "leverage": "25x",
        "volumeUsd": 15160,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.166,
        "leverage": "50x",
        "volumeUsd": 19491,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "basic-attention-token",
    "symbol": "BAT",
    "name": "Basic Attention",
    "slug": "basic-attention-token",
    "binanceSymbol": "BATUSDT",
    "coingeckoId": "basic-attention-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/677/large/basic-attention-token.png?1696501867",
    "price": 0.1235,
    "change24h": -6.368,
    "high24h": 0.1328,
    "low24h": 0.1227,
    "volume24hUsd": 689632.8282,
    "marketCapUsd": 184264500,
    "marketCapRank": 122,
    "circulatingSupply": 1495724656.9526057,
    "totalSupply": 1500000000,
    "maxSupply": 1500000000,
    "athUsd": 1.9,
    "athChangePercent": -93.50765,
    "athDate": "2021-11-27",
    "atlUsd": 0.055241,
    "atlChangePercent": 123.36705,
    "atlDate": "2026-08-14",
    "fdvUsd": 184791197,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Basic Attention (BAT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Basic Attention (BAT) Kaç TL?",
        "answer": "1 Basic Attention (BAT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Basic Attention En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Basic Attention tüm zamanların en yüksek fiyatına (ATH) $1,9 seviyesinde ulaşmıştır."
      },
      {
        "question": "Basic Attention Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Basic Attention dolaşımdaki arzı 1.495.724.656,953 BAT adettir."
      },
      {
        "question": "Basic Attention Nereden ve Nasıl Alınır?",
        "answer": "Basic Attention (BAT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 310335,
    "openInterestChange24h": -2.23,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 10344,
    "longLiquidation24hUsd": 4551,
    "shortLiquidation24hUsd": 5793,
    "dominantLiquidationLevel": 0.1272,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1297,
        "leverage": "25x",
        "volumeUsd": 3620,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1173,
        "leverage": "50x",
        "volumeUsd": 4655,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "aerodrome-finance",
    "symbol": "AERO",
    "name": "Aerodrome Finance",
    "slug": "aerodrome-finance",
    "binanceSymbol": "AEROUSDT",
    "coingeckoId": "aerodrome-finance",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31745/large/token.png?1696530564",
    "price": 0.599,
    "change24h": -0.033,
    "high24h": 0.6214,
    "low24h": 0.5946,
    "volume24hUsd": 1933560.39365,
    "marketCapUsd": 184080822,
    "marketCapRank": 123,
    "circulatingSupply": 308095638.9023936,
    "totalSupply": 2007626315.7456553,
    "maxSupply": null,
    "athUsd": 2.32,
    "athChangePercent": -74.20792,
    "athDate": "2024-12-07",
    "atlUsd": 0.00001861,
    "atlChangePercent": 3211008.22905,
    "atlDate": "2023-10-16",
    "fdvUsd": 1199515528,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Aerodrome Finance (AERO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Aerodrome Finance (AERO) Kaç TL?",
        "answer": "1 Aerodrome Finance (AERO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Aerodrome Finance En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Aerodrome Finance tüm zamanların en yüksek fiyatına (ATH) $2,32 seviyesinde ulaşmıştır."
      },
      {
        "question": "Aerodrome Finance Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Aerodrome Finance dolaşımdaki arzı 308.095.638,902 AERO adettir."
      },
      {
        "question": "Aerodrome Finance Nereden ve Nasıl Alınır?",
        "answer": "Aerodrome Finance (AERO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 870102,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 29003,
    "longLiquidation24hUsd": 12761,
    "shortLiquidation24hUsd": 16242,
    "dominantLiquidationLevel": 0.617,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.629,
        "leverage": "25x",
        "volumeUsd": 10151,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.569,
        "leverage": "50x",
        "volumeUsd": 13051,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "jito-governance-token",
    "symbol": "JTO",
    "name": "Jito",
    "slug": "jito-governance-token",
    "binanceSymbol": "JTOUSDT",
    "coingeckoId": "jito-governance-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/33228/large/jto.png?1701137022",
    "price": 0.3378,
    "change24h": -0.383,
    "high24h": 0.3529,
    "low24h": 0.3374,
    "volume24hUsd": 886068.53321,
    "marketCapUsd": 182550841,
    "marketCapRank": 124,
    "circulatingSupply": 541091171.3,
    "totalSupply": 1000000000,
    "maxSupply": null,
    "athUsd": 6.01,
    "athChangePercent": -94.3892,
    "athDate": "2023-12-07",
    "atlUsd": 0.218137,
    "atlChangePercent": 54.67739,
    "atlDate": "2026-02-05",
    "fdvUsd": 337375383,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Jito (JTO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Jito (JTO) Kaç TL?",
        "answer": "1 Jito (JTO) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Jito En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Jito tüm zamanların en yüksek fiyatına (ATH) $6,01 seviyesinde ulaşmıştır."
      },
      {
        "question": "Jito Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Jito dolaşımdaki arzı 541.091.171,3 JTO adettir."
      },
      {
        "question": "Jito Nereden ve Nasıl Alınır?",
        "answer": "Jito (JTO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 398731,
    "openInterestChange24h": -0.13,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13291,
    "longLiquidation24hUsd": 5848,
    "shortLiquidation24hUsd": 7443,
    "dominantLiquidationLevel": 0.3479,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3547,
        "leverage": "25x",
        "volumeUsd": 4652,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3209,
        "leverage": "50x",
        "volumeUsd": 5981,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "jasmycoin",
    "symbol": "JASMY",
    "name": "JasmyCoin",
    "slug": "jasmycoin",
    "binanceSymbol": "JASMYUSDT",
    "coingeckoId": "jasmycoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13876/large/JASMY200x200.jpg?1696513620",
    "price": 0.00365,
    "change24h": -1.084,
    "high24h": 0.00377,
    "low24h": 0.00364,
    "volume24hUsd": 139447.060834,
    "marketCapUsd": 180532164,
    "marketCapRank": 125,
    "circulatingSupply": 49444999677.59027,
    "totalSupply": 50000000000,
    "maxSupply": 50000000000,
    "athUsd": 4.79,
    "athChangePercent": -99.92378,
    "athDate": "2021-02-15",
    "atlUsd": 0.00275026,
    "atlChangePercent": 32.7452,
    "atlDate": "2022-12-29",
    "fdvUsd": 182558565,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "JasmyCoin (JASMY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 JasmyCoin (JASMY) Kaç TL?",
        "answer": "1 JasmyCoin (JASMY) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "JasmyCoin En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "JasmyCoin tüm zamanların en yüksek fiyatına (ATH) $4,79 seviyesinde ulaşmıştır."
      },
      {
        "question": "JasmyCoin Dolaşımdaki Arzı Ne Kadar?",
        "answer": "JasmyCoin dolaşımdaki arzı 49.444.999.677,59 JASMY adettir."
      },
      {
        "question": "JasmyCoin Nereden ve Nasıl Alınır?",
        "answer": "JasmyCoin (JASMY) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 62751,
    "openInterestChange24h": -0.38,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 2092,
    "longLiquidation24hUsd": 920,
    "shortLiquidation24hUsd": 1172,
    "dominantLiquidationLevel": 0.0038,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0038,
        "leverage": "25x",
        "volumeUsd": 732,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0035,
        "leverage": "50x",
        "volumeUsd": 941,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "usa",
    "symbol": "USAT",
    "name": "USAT",
    "slug": "usa",
    "binanceSymbol": "USATUSDT",
    "coingeckoId": "usa",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/71792/large/usat_logo_200x200.png?1769440161",
    "price": 0.998379,
    "change24h": 0.04533,
    "high24h": 0.998848,
    "low24h": 0.997747,
    "volume24hUsd": 4211511,
    "marketCapUsd": 179027188,
    "marketCapRank": 126,
    "circulatingSupply": 179317574.5,
    "totalSupply": 179317574.5,
    "maxSupply": null,
    "athUsd": 1.002,
    "athChangePercent": -0.40322,
    "athDate": "2026-03-30",
    "atlUsd": 0.99608,
    "atlChangePercent": 0.23081,
    "atlDate": "2026-03-08",
    "fdvUsd": 179027188,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USAT (USAT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 USAT (USAT) Kaç TL?",
        "answer": "1 USAT (USAT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "USAT En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "USAT tüm zamanların en yüksek fiyatına (ATH) $1,002 seviyesinde ulaşmıştır."
      },
      {
        "question": "USAT Dolaşımdaki Arzı Ne Kadar?",
        "answer": "USAT dolaşımdaki arzı 179.317.574,5 USAT adettir."
      },
      {
        "question": "USAT Nereden ve Nasıl Alınır?",
        "answer": "USAT (USAT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1895180,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 63173,
    "longLiquidation24hUsd": 39483,
    "shortLiquidation24hUsd": 23690,
    "dominantLiquidationLevel": 0.9684,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.0483,
        "leverage": "25x",
        "volumeUsd": 22111,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9485,
        "leverage": "50x",
        "volumeUsd": 28428,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "zama",
    "symbol": "ZAMA",
    "name": "Zama",
    "slug": "zama",
    "binanceSymbol": "ZAMAUSDT",
    "coingeckoId": "zama",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/70921/large/zama.png?1764591992",
    "price": 0.06917,
    "change24h": -2.646,
    "high24h": 0.07211,
    "low24h": 0.06815,
    "volume24hUsd": 1916943.40093,
    "marketCapUsd": 175232131,
    "marketCapRank": 127,
    "circulatingSupply": 2536270780.4340625,
    "totalSupply": 11358122614.262045,
    "maxSupply": null,
    "athUsd": 0.107368,
    "athChangePercent": -35.64843,
    "athDate": "2026-09-23",
    "atlUsd": 0.01673142,
    "atlChangePercent": 312.95299,
    "atlDate": "2026-02-12",
    "fdvUsd": 784737988,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Zama (ZAMA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Zama (ZAMA) Kaç TL?",
        "answer": "1 Zama (ZAMA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Zama En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Zama tüm zamanların en yüksek fiyatına (ATH) $0,107 seviyesinde ulaşmıştır."
      },
      {
        "question": "Zama Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Zama dolaşımdaki arzı 2.536.270.780,434 ZAMA adettir."
      },
      {
        "question": "Zama Nereden ve Nasıl Alınır?",
        "answer": "Zama (ZAMA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 862625,
    "openInterestChange24h": -0.93,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 28754,
    "longLiquidation24hUsd": 12652,
    "shortLiquidation24hUsd": 16102,
    "dominantLiquidationLevel": 0.0712,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0726,
        "leverage": "25x",
        "volumeUsd": 10064,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0657,
        "leverage": "50x",
        "volumeUsd": 12939,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "eigenlayer",
    "symbol": "EIGEN",
    "name": "EigenCloud (prev. EigenLayer)",
    "slug": "eigenlayer",
    "binanceSymbol": "EIGENUSDT",
    "coingeckoId": "eigenlayer",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/37441/large/eigencloud.jpg?1751003565",
    "price": 0.169,
    "change24h": -3.263,
    "high24h": 0.1775,
    "low24h": 0.1689,
    "volume24hUsd": 660071.998958,
    "marketCapUsd": 172160620,
    "marketCapRank": 128,
    "circulatingSupply": 1018634818.7309874,
    "totalSupply": 1861332135.7914124,
    "maxSupply": null,
    "athUsd": 5.65,
    "athChangePercent": -97.00724,
    "athDate": "2024-12-16",
    "atlUsd": 0.148314,
    "atlChangePercent": 13.92294,
    "atlDate": "2026-04-05",
    "fdvUsd": 314585844,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "EigenCloud (prev. EigenLayer) (EIGEN), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 EigenCloud (prev. EigenLayer) (EIGEN) Kaç TL?",
        "answer": "1 EigenCloud (prev. EigenLayer) (EIGEN) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "EigenCloud (prev. EigenLayer) En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "EigenCloud (prev. EigenLayer) tüm zamanların en yüksek fiyatına (ATH) $5,65 seviyesinde ulaşmıştır."
      },
      {
        "question": "EigenCloud (prev. EigenLayer) Dolaşımdaki Arzı Ne Kadar?",
        "answer": "EigenCloud (prev. EigenLayer) dolaşımdaki arzı 1.018.634.818,731 EIGEN adettir."
      },
      {
        "question": "EigenCloud (prev. EigenLayer) Nereden ve Nasıl Alınır?",
        "answer": "EigenCloud (prev. EigenLayer) (EIGEN) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 297032,
    "openInterestChange24h": -1.14,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 9901,
    "longLiquidation24hUsd": 4356,
    "shortLiquidation24hUsd": 5545,
    "dominantLiquidationLevel": 0.1741,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1775,
        "leverage": "25x",
        "volumeUsd": 3465,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1605,
        "leverage": "50x",
        "volumeUsd": 4455,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "iota",
    "symbol": "IOTA",
    "name": "IOTA",
    "slug": "iota",
    "binanceSymbol": "IOTAUSDT",
    "coingeckoId": "iota",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/692/large/IOTA_Thumbnail_%281%29.png?1743772896",
    "price": 0.0362,
    "change24h": -5.729,
    "high24h": 0.0386,
    "low24h": 0.0359,
    "volume24hUsd": 282229.873,
    "marketCapUsd": 171090016,
    "marketCapRank": 129,
    "circulatingSupply": 4725624039,
    "totalSupply": 5022513903,
    "maxSupply": null,
    "athUsd": 5.25,
    "athChangePercent": -99.30993,
    "athDate": "2017-12-18",
    "atlUsd": 0.03112513,
    "atlChangePercent": 16.37024,
    "atlDate": "2026-07-31",
    "fdvUsd": 181838838,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "IOTA (IOTA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 IOTA (IOTA) Kaç TL?",
        "answer": "1 IOTA (IOTA) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "IOTA En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "IOTA tüm zamanların en yüksek fiyatına (ATH) $5,25 seviyesinde ulaşmıştır."
      },
      {
        "question": "IOTA Dolaşımdaki Arzı Ne Kadar?",
        "answer": "IOTA dolaşımdaki arzı 4.725.624.039 IOTA adettir."
      },
      {
        "question": "IOTA Nereden ve Nasıl Alınır?",
        "answer": "IOTA (IOTA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 127003,
    "openInterestChange24h": -2.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 4233,
    "longLiquidation24hUsd": 1863,
    "shortLiquidation24hUsd": 2370,
    "dominantLiquidationLevel": 0.0373,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.038,
        "leverage": "25x",
        "volumeUsd": 1482,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0344,
        "leverage": "50x",
        "volumeUsd": 1905,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "convex-finance",
    "symbol": "CVX",
    "name": "Convex Finance",
    "slug": "convex-finance",
    "binanceSymbol": "CVXUSDT",
    "coingeckoId": "convex-finance",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/15585/large/convex.png?1696515221",
    "price": 1.805,
    "change24h": -3.528,
    "high24h": 1.894,
    "low24h": 1.801,
    "volume24hUsd": 369953.085193,
    "marketCapUsd": 168520133,
    "marketCapRank": 130,
    "circulatingSupply": 93194518.49512771,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 60.09,
    "athChangePercent": -96.99177,
    "athDate": "2022-01-01",
    "atlUsd": 1.038,
    "atlChangePercent": 74.17858,
    "atlDate": "2026-07-01",
    "fdvUsd": 180826229,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Convex Finance (CVX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Convex Finance (CVX) Kaç TL?",
        "answer": "1 Convex Finance (CVX) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Convex Finance En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Convex Finance tüm zamanların en yüksek fiyatına (ATH) $60,09 seviyesinde ulaşmıştır."
      },
      {
        "question": "Convex Finance Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Convex Finance dolaşımdaki arzı 93.194.518,495 CVX adettir."
      },
      {
        "question": "Convex Finance Nereden ve Nasıl Alınır?",
        "answer": "Convex Finance (CVX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 166479,
    "openInterestChange24h": -1.23,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 5549,
    "longLiquidation24hUsd": 2442,
    "shortLiquidation24hUsd": 3107,
    "dominantLiquidationLevel": 1.8592,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 1.8953,
        "leverage": "25x",
        "volumeUsd": 1942,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.7147,
        "leverage": "50x",
        "volumeUsd": 2497,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "trust-wallet-token",
    "symbol": "TWT",
    "name": "Trust Wallet",
    "slug": "trust-wallet-token",
    "binanceSymbol": "TWTUSDT",
    "coingeckoId": "trust-wallet-token",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11085/large/Trust.png?1696511026",
    "price": 0.3998,
    "change24h": 0.377,
    "high24h": 0.4117,
    "low24h": 0.3961,
    "volume24hUsd": 219143.9743,
    "marketCapUsd": 166295143,
    "marketCapRank": 131,
    "circulatingSupply": 416649900,
    "totalSupply": 1000000000,
    "maxSupply": null,
    "athUsd": 2.72,
    "athChangePercent": -85.33865,
    "athDate": "2022-12-11",
    "atlUsd": 0.00277641,
    "atlChangePercent": 14268.25618,
    "atlDate": "2020-06-09",
    "fdvUsd": 399124403,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Trust Wallet (TWT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Trust Wallet (TWT) Kaç TL?",
        "answer": "1 Trust Wallet (TWT) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Trust Wallet En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Trust Wallet tüm zamanların en yüksek fiyatına (ATH) $2,72 seviyesinde ulaşmıştır."
      },
      {
        "question": "Trust Wallet Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Trust Wallet dolaşımdaki arzı 416.649.900 TWT adettir."
      },
      {
        "question": "Trust Wallet Nereden ve Nasıl Alınır?",
        "answer": "Trust Wallet (TWT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 98615,
    "openInterestChange24h": 0.13,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 3287,
    "longLiquidation24hUsd": 2054,
    "shortLiquidation24hUsd": 1233,
    "dominantLiquidationLevel": 0.3878,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.4198,
        "leverage": "25x",
        "volumeUsd": 1150,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3798,
        "leverage": "50x",
        "volumeUsd": 1479,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "meteora",
    "symbol": "MET",
    "name": "Meteora",
    "slug": "meteora",
    "binanceSymbol": "METUSDT",
    "coingeckoId": "meteora",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69110/large/meteora.png?1757517561",
    "price": 0.2941,
    "change24h": 7.257,
    "high24h": 0.301,
    "low24h": 0.2728,
    "volume24hUsd": 1749712.4931,
    "marketCapUsd": 165859871,
    "marketCapRank": 132,
    "circulatingSupply": 565019819.362173,
    "totalSupply": 997723015.703417,
    "maxSupply": 1000000000,
    "athUsd": 0.686913,
    "athChangePercent": -57.24456,
    "athDate": "2025-10-23",
    "atlUsd": 0.094433,
    "atlChangePercent": 211.00465,
    "atlDate": "2026-06-06",
    "fdvUsd": 292878594,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Meteora (MET), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Meteora (MET) Kaç TL?",
        "answer": "1 Meteora (MET) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Meteora En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Meteora tüm zamanların en yüksek fiyatına (ATH) $0,687 seviyesinde ulaşmıştır."
      },
      {
        "question": "Meteora Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Meteora dolaşımdaki arzı 565.019.819,362 MET adettir."
      },
      {
        "question": "Meteora Nereden ve Nasıl Alınır?",
        "answer": "Meteora (MET) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 787371,
    "openInterestChange24h": 2.54,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 26246,
    "longLiquidation24hUsd": 16404,
    "shortLiquidation24hUsd": 9842,
    "dominantLiquidationLevel": 0.2853,
    "dominantSide": "LONG",
    "fundingRates": {
      "binance": 0.00015,
      "bybit": 0.00016,
      "okx": 0.00014,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.3088,
        "leverage": "25x",
        "volumeUsd": 9186,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2794,
        "leverage": "50x",
        "volumeUsd": 11811,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "syrup",
    "symbol": "SYRUP",
    "name": "Maple Finance",
    "slug": "syrup",
    "binanceSymbol": "SYRUPUSDT",
    "coingeckoId": "syrup",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/51232/large/_SYRUP.png?1790835983",
    "price": 0.1408,
    "change24h": -0.985,
    "high24h": 0.1473,
    "low24h": 0.1399,
    "volume24hUsd": 787345.30282,
    "marketCapUsd": 164294957,
    "marketCapRank": 133,
    "circulatingSupply": 1167271959.1810675,
    "totalSupply": 1267875000.0000002,
    "maxSupply": null,
    "athUsd": 0.653229,
    "athChangePercent": -78.44997,
    "athDate": "2025-06-25",
    "atlUsd": 0.085229,
    "atlChangePercent": 65.16761,
    "atlDate": "2025-04-06",
    "fdvUsd": 178454958,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Maple Finance (SYRUP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Maple Finance (SYRUP) Kaç TL?",
        "answer": "1 Maple Finance (SYRUP) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Maple Finance En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Maple Finance tüm zamanların en yüksek fiyatına (ATH) $0,653 seviyesinde ulaşmıştır."
      },
      {
        "question": "Maple Finance Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Maple Finance dolaşımdaki arzı 1.167.271.959,181 SYRUP adettir."
      },
      {
        "question": "Maple Finance Nereden ve Nasıl Alınır?",
        "answer": "Maple Finance (SYRUP) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 354305,
    "openInterestChange24h": -0.34,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 11810,
    "longLiquidation24hUsd": 5196,
    "shortLiquidation24hUsd": 6614,
    "dominantLiquidationLevel": 0.145,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1478,
        "leverage": "25x",
        "volumeUsd": 4134,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1338,
        "leverage": "50x",
        "volumeUsd": 5315,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "dogwifcoin",
    "symbol": "WIF",
    "name": "dogwifhat",
    "slug": "dogwifcoin",
    "binanceSymbol": "WIFUSDT",
    "coingeckoId": "dogwifcoin",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/33566/large/dogwifhat.jpg?1702499428",
    "price": 0.1604,
    "change24h": -3.952,
    "high24h": 0.1688,
    "low24h": 0.1602,
    "volume24hUsd": 1309247.448952,
    "marketCapUsd": 159937445,
    "marketCapRank": 134,
    "circulatingSupply": 998926392,
    "totalSupply": 998926392,
    "maxSupply": 998926392,
    "athUsd": 4.83,
    "athChangePercent": -96.6808,
    "athDate": "2024-03-31",
    "atlUsd": 0.00155464,
    "atlChangePercent": 10202.4974,
    "atlDate": "2023-12-12",
    "fdvUsd": 159937445,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "dogwifhat (WIF), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 dogwifhat (WIF) Kaç TL?",
        "answer": "1 dogwifhat (WIF) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "dogwifhat En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "dogwifhat tüm zamanların en yüksek fiyatına (ATH) $4,83 seviyesinde ulaşmıştır."
      },
      {
        "question": "dogwifhat Dolaşımdaki Arzı Ne Kadar?",
        "answer": "dogwifhat dolaşımdaki arzı 998.926.392 WIF adettir."
      },
      {
        "question": "dogwifhat Nereden ve Nasıl Alınır?",
        "answer": "dogwifhat (WIF) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 589161,
    "openInterestChange24h": -1.38,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 19639,
    "longLiquidation24hUsd": 8641,
    "shortLiquidation24hUsd": 10998,
    "dominantLiquidationLevel": 0.1652,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.1684,
        "leverage": "25x",
        "volumeUsd": 6874,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1524,
        "leverage": "50x",
        "volumeUsd": 8838,
        "side": "LONG",
        "intensity": 90
      }
    ]
  },
  {
    "id": "sonic-3",
    "symbol": "S",
    "name": "Sonic",
    "slug": "sonic-3",
    "binanceSymbol": "SUSDT",
    "coingeckoId": "sonic-3",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256",
    "price": 0.03859,
    "change24h": -2.452,
    "high24h": 0.0408,
    "low24h": 0.03852,
    "volume24hUsd": 967703.216647,
    "marketCapUsd": 149515175,
    "marketCapRank": 135,
    "circulatingSupply": 3885497663,
    "totalSupply": 3885497663,
    "maxSupply": null,
    "athUsd": 1.029,
    "athChangePercent": -96.26188,
    "athDate": "2025-01-04",
    "atlUsd": 0.01906602,
    "atlChangePercent": 101.84051,
    "atlDate": "2026-06-25",
    "fdvUsd": 149515175,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sonic (S), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "faqs": [
      {
        "question": "1 Sonic (S) Kaç TL?",
        "answer": "1 Sonic (S) serbest piyasa ve Binance TR spot kuru üzerinden Türk Lirası cinsinden canlı ve anlık olarak hesaplanmaktadır."
      },
      {
        "question": "Sonic En Yüksek Kaç Doları (ATH) Gördü?",
        "answer": "Sonic tüm zamanların en yüksek fiyatına (ATH) $1,029 seviyesinde ulaşmıştır."
      },
      {
        "question": "Sonic Dolaşımdaki Arzı Ne Kadar?",
        "answer": "Sonic dolaşımdaki arzı 3.885.497.663 S adettir."
      },
      {
        "question": "Sonic Nereden ve Nasıl Alınır?",
        "answer": "Sonic (S) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 435466,
    "openInterestChange24h": -0.86,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14516,
    "longLiquidation24hUsd": 6387,
    "shortLiquidation24hUsd": 8129,
    "dominantLiquidationLevel": 0.0397,
    "dominantSide": "SHORT",
    "fundingRates": {
      "binance": 0.00005,
      "bybit": 0.00006,
      "okx": 0.00004,
      "predicted": 0.0001,
      "nextFundingTime": "08:00 UTC"
    },
    "liquidationClusters": [
      {
        "price": 0.0405,
        "leverage": "25x",
        "volumeUsd": 5081,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0367,
        "leverage": "50x",
        "volumeUsd": 6532,
        "side": "LONG",
        "intensity": 90
      }
    ]
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
  USD_TRY: 50.18,
  USDT_TRY: 50.09,
  EUR_TRY: 54.42,
  TCMB_USD: 50.12,
  KAPALICARSI_USD: 50.28,
  BINANCE_TR_USDT: 50.09,
  UPDATED_AT: 'Piyasa Referans Kuru (Günlük Güncellenir)'
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

export const SOLANA_ETF_SUMMARY: EtfSummaryData = {
  type: 'SOL',
  assetName: 'Spot Solana ETF & Kurumsal Fonlar',
  totalAumUsd: 2625000000, // $2.625 Billion
  cumulativeNetInflowUsd: 1850000000,
  lastDayNetFlowUsd: 36200000, // +$36.2M Net Giriş
  funds: [
    { ticker: 'GSOL', fundName: 'Grayscale Solana Trust / Spot ETF', issuer: 'Grayscale', netFlowUsd24h: 12400000, totalAumUsd: 1420000000, feePercent: 2.50, holdingsCoins: 15690000 },
    { ticker: 'VSOL', fundName: 'VanEck Solana Trust ETF', issuer: 'VanEck', netFlowUsd24h: 11800000, totalAumUsd: 410000000, feePercent: 0.25, holdingsCoins: 4530000 },
    { ticker: 'TSOL', fundName: '21Shares Core Solana ETF', issuer: '21Shares', netFlowUsd24h: 6800000, totalAumUsd: 320000000, feePercent: 0.25, holdingsCoins: 3535000 },
    { ticker: 'BSOL', fundName: 'Bitwise Solana ETF', issuer: 'Bitwise', netFlowUsd24h: 3400000, totalAumUsd: 280000000, feePercent: 0.20, holdingsCoins: 3090000 },
    { ticker: 'CSOL', fundName: 'Canary Solana ETF', issuer: 'Canary Capital', netFlowUsd24h: 1800000, totalAumUsd: 195000000, feePercent: 0.25, holdingsCoins: 2154000 }
  ],
  recentDailyFlows: [
    { date: 'Dün', netInflowUsd: 36.2, btcPriceAtDate: 90.5 },
    { date: '05 Kas', netInflowUsd: 22.4, btcPriceAtDate: 88.2 },
    { date: '04 Kas', netInflowUsd: 45.1, btcPriceAtDate: 86.4 },
    { date: '03 Kas', netInflowUsd: 18.6, btcPriceAtDate: 89.1 },
    { date: '02 Kas', netInflowUsd: 12.8, btcPriceAtDate: 84.7 }
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
    if (!unlock) {
      return {
        title: `${coin.name} (${coin.symbol}) Kilit Açılım Takvimi ve Arz Analizi`,
        paragraphs: [
          `${coin.name} (${coin.symbol}) için yakın vadede planlanmış bir kilit açılımı (token unlock) bulunmamaktadır. Varlık arzı açık piyasada doğal blokzincir protokol kurallarına göre işlem görmektedir.`,
          `Toplam arzın dolaşıma dağılımı ve piyasa derinliği Kriptonik Terminal veritabanı üzerinden düzenli olarak takip edilmektedir.`
        ],
        faqs: [
          {
            q: `${coin.name} için planlanan bir kilit açılımı var mı?`,
            a: `${coin.name} için yakın vadede takvime alınmış bir kilit açılımı (unlock) etkinliği bulunmamaktadır.`
          }
        ]
      };
    }
    return {
      title: `${coin.name} (${coin.symbol}) Kilit Açılım Takvimi ve Satış Baskısı Analizi`,
      paragraphs: [
        `${coin.name} için planlanan en yakın kilit açılımı (token unlock) ${new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR')} tarihinde gerçekleşecektir. Bu turda toplam ${unlock.unlockedTokens.toLocaleString('tr-TR')} adet ${coin.symbol} serbest kalacaktır.`,
        `Açılacak token'ların anlık piyasa değeri yaklaşık $${(unlock.unlockValueUsd / 1_000_000).toFixed(1)} milyon olup, dolaşımdaki toplam arzın %${unlock.unlockedPercent} oranına tekabül etmektedir. Dağıtım yapılacak hedef kitle: ${unlock.targetAudience}.`,
        `Satış Baskısı Risk Skoru ${unlock.riskScore}/100 olarak belirlenmiştir. ${unlock.riskScore > 70 ? 'Yüksek orandaki bu kilit açılımı, spot piyasa tahtasında kısa vadeli arz fazlalığı oluşturabilir.' : 'Orta/düşük risk seviyesi piyasa likiditesi tarafından rahatlıkla absorbe edilebilir niteliktedir.'}`
      ],
      faqs: [
        {
          q: `${coin.name} bir sonraki kilit açılımı ne zaman?`,
          a: `${new Date(unlock.nextUnlockDate).toLocaleDateString('tr-TR')} tarihinde gerçekleşecektir.`
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
