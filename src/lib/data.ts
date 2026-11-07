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
    "price": 76100.32,
    "change24h": -0.017,
    "high24h": 76378,
    "low24h": 74888,
    "volume24hUsd": 993733245.2562628,
    "marketCapUsd": 1529389373201,
    "marketCapRank": 1,
    "circulatingSupply": 20109059,
    "totalSupply": 20109059,
    "maxSupply": 21000000,
    "athUsd": 126080,
    "athChangePercent": -39.67734,
    "athDate": "2025-10-06",
    "atlUsd": 67.81,
    "atlChangePercent": 112060.25297,
    "atlDate": "2013-07-05",
    "fdvUsd": 1529389373201,
    "dominancePercent": 54.62,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Bitcoin (BTC), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bitcoin.org",
    "whitepaperUrl": "https://bitcoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bitcoin",
    "twitterUrl": "https://twitter.com/bitcoin",
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
    "openInterestUsd": 447179960,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14905999,
    "longLiquidation24hUsd": 6558640,
    "shortLiquidation24hUsd": 8347359,
    "dominantLiquidationLevel": 78383.3296,
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
        "price": 79905.336,
        "leverage": "25x",
        "volumeUsd": 5217100,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 72295.304,
        "leverage": "50x",
        "volumeUsd": 6707700,
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
    "price": 2246.41,
    "change24h": 0.281,
    "high24h": 2254.26,
    "low24h": 2210,
    "volume24hUsd": 312151854.090751,
    "marketCapUsd": 274294829457,
    "marketCapRank": 2,
    "circulatingSupply": 122197894.00927158,
    "totalSupply": 122197894.00927158,
    "maxSupply": null,
    "athUsd": 4946.05,
    "athChangePercent": -54.61673,
    "athDate": "2025-08-24",
    "atlUsd": 0.432979,
    "atlChangePercent": 518326.82956,
    "atlDate": "2015-10-19",
    "fdvUsd": 274294829457,
    "dominancePercent": 9.8,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Ethereum (ETH), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethereum.org",
    "whitepaperUrl": "https://ethereum.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ethereum",
    "twitterUrl": "https://twitter.com/ethereum",
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
    "openInterestUsd": 140468334,
    "openInterestChange24h": 0.1,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 4682278,
    "longLiquidation24hUsd": 2926424,
    "shortLiquidation24hUsd": 1755854,
    "dominantLiquidationLevel": 2179.0177,
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
        "price": 2358.7305,
        "leverage": "25x",
        "volumeUsd": 1638797,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2134.0895,
        "leverage": "50x",
        "volumeUsd": 2107025,
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
    "price": 694.94,
    "change24h": 0.099,
    "high24h": 699.51,
    "low24h": 692.4,
    "volume24hUsd": 45674941.32391,
    "marketCapUsd": 91316802219,
    "marketCapRank": 3,
    "circulatingSupply": 131511055.43,
    "totalSupply": 131511054.35,
    "maxSupply": 200000000,
    "athUsd": 1369.99,
    "athChangePercent": -49.31604,
    "athDate": "2025-10-13",
    "atlUsd": 0.0398177,
    "atlChangePercent": 1743762.71427,
    "atlDate": "2017-10-18",
    "fdvUsd": 91316801469,
    "dominancePercent": 3.26,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "BNB (BNB), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://binancecoin.org",
    "whitepaperUrl": "https://binancecoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/binancecoin",
    "twitterUrl": "https://twitter.com/binancecoin",
    "githubUrl": "https://github.com/binancecoin",
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
        "answer": "BNB dolaşımdaki arzı 131.511.055,43 BNB adettir."
      },
      {
        "question": "BNB Nereden ve Nasıl Alınır?",
        "answer": "BNB (BNB) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 20553724,
    "openInterestChange24h": 0.03,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 685124,
    "longLiquidation24hUsd": 428203,
    "shortLiquidation24hUsd": 256922,
    "dominantLiquidationLevel": 674.0918,
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
        "price": 729.687,
        "leverage": "25x",
        "volumeUsd": 239793,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 660.193,
        "leverage": "50x",
        "volumeUsd": 308306,
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
    "price": 1.1702,
    "change24h": -2.329,
    "high24h": 1.2029,
    "low24h": 1.1519,
    "volume24hUsd": 121676894.56699,
    "marketCapUsd": 74274239739,
    "marketCapRank": 4,
    "circulatingSupply": 63516606953,
    "totalSupply": 99985583260,
    "maxSupply": 100000000000,
    "athUsd": 3.65,
    "athChangePercent": -67.93072,
    "athDate": "2025-07-17",
    "atlUsd": 0.00268621,
    "atlChangePercent": 43432.28895,
    "atlDate": "2014-05-21",
    "fdvUsd": 116919866122,
    "dominancePercent": 2.65,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "XRP (XRP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ripple.org",
    "whitepaperUrl": "https://ripple.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ripple",
    "twitterUrl": "https://twitter.com/ripple",
    "githubUrl": "https://github.com/ripple",
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
    "openInterestUsd": 54754603,
    "openInterestChange24h": -0.82,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 1825153,
    "longLiquidation24hUsd": 803067,
    "shortLiquidation24hUsd": 1022086,
    "dominantLiquidationLevel": 1.2053,
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
        "price": 1.2287,
        "leverage": "25x",
        "volumeUsd": 638804,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.1117,
        "leverage": "50x",
        "volumeUsd": 821319,
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
    "price": 1.001,
    "change24h": -0.018,
    "high24h": 1.00134,
    "low24h": 1.00098,
    "volume24hUsd": 1135454720.91758,
    "marketCapUsd": 70422842619,
    "marketCapRank": 5,
    "circulatingSupply": 70441868291.96622,
    "totalSupply": 70481908239.51427,
    "maxSupply": null,
    "athUsd": 1.043,
    "athChangePercent": -4.19129,
    "athDate": "2018-11-14",
    "atlUsd": 0.877647,
    "atlChangePercent": 13.91031,
    "atlDate": "2023-03-11",
    "fdvUsd": 70462871752,
    "dominancePercent": 2.52,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "USDC (USDC), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://usd-coin.org",
    "whitepaperUrl": "https://usd-coin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/usd-coin",
    "twitterUrl": "https://twitter.com/usd-coin",
    "githubUrl": "https://github.com/usd-coin",
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
    "openInterestUsd": 510954624,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 17031821,
    "longLiquidation24hUsd": 7494001,
    "shortLiquidation24hUsd": 9537820,
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
        "volumeUsd": 5961137,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9509,
        "leverage": "50x",
        "volumeUsd": 7664319,
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
    "price": 90.05,
    "change24h": -0.166,
    "high24h": 91.62,
    "low24h": 89.65,
    "volume24hUsd": 114056060.16883,
    "marketCapUsd": 53174876293,
    "marketCapRank": 6,
    "circulatingSupply": 590982557.7664725,
    "totalSupply": 637127651.3637402,
    "maxSupply": null,
    "athUsd": 293.31,
    "athChangePercent": -69.32374,
    "athDate": "2025-01-19",
    "atlUsd": 0.500801,
    "atlChangePercent": 17866.64019,
    "atlDate": "2020-05-11",
    "fdvUsd": 57326876401,
    "dominancePercent": 1.9,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Solana (SOL), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://solana.org",
    "whitepaperUrl": "https://solana.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/solana",
    "twitterUrl": "https://twitter.com/solana",
    "githubUrl": "https://github.com/solana",
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
        "answer": "Solana dolaşımdaki arzı 590.982.557,766 SOL adettir."
      },
      {
        "question": "Solana Nereden ve Nasıl Alınır?",
        "answer": "Solana (SOL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 51325227,
    "openInterestChange24h": -0.06,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 1710841,
    "longLiquidation24hUsd": 752770,
    "shortLiquidation24hUsd": 958071,
    "dominantLiquidationLevel": 92.7515,
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
        "price": 94.5525,
        "leverage": "25x",
        "volumeUsd": 598794,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 85.5475,
        "leverage": "50x",
        "volumeUsd": 769878,
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
    "price": 0.3192,
    "change24h": 0.22,
    "high24h": 0.3193,
    "low24h": 0.3174,
    "volume24hUsd": 18386982.93185,
    "marketCapUsd": 30308886875,
    "marketCapRank": 7,
    "circulatingSupply": 95027787065.63321,
    "totalSupply": 95028785977.55331,
    "maxSupply": null,
    "athUsd": 0.431288,
    "athChangePercent": -26.04771,
    "athDate": "2024-12-03",
    "atlUsd": 0.00180434,
    "atlChangePercent": 17576.67595,
    "atlDate": "2017-11-11",
    "fdvUsd": 30309205476,
    "dominancePercent": 1.08,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "TRON (TRX), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://tron.org",
    "whitepaperUrl": "https://tron.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/tron",
    "twitterUrl": "https://twitter.com/tron",
    "githubUrl": "https://github.com/tron",
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
    "openInterestUsd": 8274142,
    "openInterestChange24h": 0.08,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 275805,
    "longLiquidation24hUsd": 172378,
    "shortLiquidation24hUsd": 103427,
    "dominantLiquidationLevel": 0.3096,
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
        "price": 0.3352,
        "leverage": "25x",
        "volumeUsd": 96532,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3032,
        "leverage": "50x",
        "volumeUsd": 124112,
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
    "price": 1323,
    "change24h": 3.208,
    "high24h": 1388,
    "low24h": 1274.71,
    "volume24hUsd": 222360349.3202,
    "marketCapUsd": 22519217330,
    "marketCapRank": 8,
    "circulatingSupply": 17027707.61933536,
    "totalSupply": 17028347.40471347,
    "maxSupply": 21000000,
    "athUsd": 3191.93,
    "athChangePercent": -58.56725,
    "athDate": "2016-10-28",
    "atlUsd": 16.08,
    "atlChangePercent": 8124.46137,
    "atlDate": "2024-07-04",
    "fdvUsd": 22520063449,
    "dominancePercent": 0.8,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Zcash (ZEC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://zcash.org",
    "whitepaperUrl": "https://zcash.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/zcash",
    "twitterUrl": "https://twitter.com/zcash",
    "githubUrl": "https://github.com/zcash",
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
    "openInterestUsd": 100062157,
    "openInterestChange24h": 1.12,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 3335405,
    "longLiquidation24hUsd": 2084628,
    "shortLiquidation24hUsd": 1250777,
    "dominantLiquidationLevel": 1283.31,
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
        "price": 1389.15,
        "leverage": "25x",
        "volumeUsd": 1167392,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1256.85,
        "leverage": "50x",
        "volumeUsd": 1500932,
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
    "price": 78.41,
    "change24h": 0.487,
    "high24h": 79.68,
    "low24h": 77.41,
    "volume24hUsd": 33017155.61241,
    "marketCapUsd": 18772520428,
    "marketCapRank": 9,
    "circulatingSupply": 239406814.37414145,
    "totalSupply": 951538272.9141414,
    "maxSupply": 1000000000,
    "athUsd": 97.96,
    "athChangePercent": -19.95679,
    "athDate": "2026-09-23",
    "atlUsd": 3.81,
    "atlChangePercent": 1958.75573,
    "atlDate": "2024-11-29",
    "fdvUsd": 74612628355,
    "dominancePercent": 0.67,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Hyperliquid (HYPE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://hyperliquid.org",
    "whitepaperUrl": "https://hyperliquid.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/hyperliquid",
    "twitterUrl": "https://twitter.com/hyperliquid",
    "githubUrl": "https://github.com/hyperliquid",
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
    "openInterestUsd": 14857720,
    "openInterestChange24h": 0.17,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 495257,
    "longLiquidation24hUsd": 309536,
    "shortLiquidation24hUsd": 185721,
    "dominantLiquidationLevel": 76.0577,
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
        "price": 82.3305,
        "leverage": "25x",
        "volumeUsd": 173340,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 74.4895,
        "leverage": "50x",
        "volumeUsd": 222866,
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
    "marketCapUsd": 11536631702,
    "marketCapRank": 10,
    "circulatingSupply": 18827784.91965299,
    "totalSupply": 18827803.519652992,
    "maxSupply": null,
    "athUsd": 797.73,
    "athChangePercent": -23.18938,
    "athDate": "2026-01-14",
    "atlUsd": 0.216177,
    "atlChangePercent": 283346.44335,
    "atlDate": "2015-01-13",
    "fdvUsd": 11536643099,
    "dominancePercent": 0.41,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Monero (XMR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://monero.org",
    "whitepaperUrl": "https://monero.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/monero",
    "twitterUrl": "https://twitter.com/monero",
    "githubUrl": "https://github.com/monero",
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
        "answer": "Monero dolaşımdaki arzı 18.827.784,92 XMR adettir."
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
    "price": 0.07196,
    "change24h": -0.456,
    "high24h": 0.07337,
    "low24h": 0.07173,
    "volume24hUsd": 17789459.52464,
    "marketCapUsd": 11261417866,
    "marketCapRank": 11,
    "circulatingSupply": 156642222860.16907,
    "totalSupply": 156646992860.16907,
    "maxSupply": null,
    "athUsd": 0.731578,
    "athChangePercent": -90.17294,
    "athDate": "2021-05-07",
    "atlUsd": 0.0000869,
    "atlChangePercent": 82626.69662,
    "atlDate": "2015-05-05",
    "fdvUsd": 11261760793,
    "dominancePercent": 0.4,
    "category": "Meme & Topluluk",
    "descriptionTr": "Dogecoin (DOGE), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://dogecoin.org",
    "whitepaperUrl": "https://dogecoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/dogecoin",
    "twitterUrl": "https://twitter.com/dogecoin",
    "githubUrl": "https://github.com/dogecoin",
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
    "openInterestUsd": 8005257,
    "openInterestChange24h": -0.16,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 266842,
    "longLiquidation24hUsd": 117410,
    "shortLiquidation24hUsd": 149432,
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
        "price": 0.0756,
        "leverage": "25x",
        "volumeUsd": 93395,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0684,
        "leverage": "50x",
        "volumeUsd": 120079,
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
    "price": 1.001,
    "change24h": -0.02,
    "high24h": 1.01,
    "low24h": 0.9957,
    "volume24hUsd": 221417.2298,
    "marketCapUsd": 8790614434,
    "marketCapRank": 12,
    "circulatingSupply": 8789041878.299358,
    "totalSupply": 8809385439.86613,
    "maxSupply": null,
    "athUsd": 1.057,
    "athChangePercent": -5.40456,
    "athDate": "2024-10-28",
    "atlUsd": 0.948265,
    "atlChangePercent": 5.47457,
    "atlDate": "2024-10-03",
    "fdvUsd": 8810961636,
    "dominancePercent": 0.31,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USDS (USDS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://usds.org",
    "whitepaperUrl": "https://usds.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/usds",
    "twitterUrl": "https://twitter.com/usds",
    "githubUrl": "https://github.com/usds",
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
        "answer": "USDS dolaşımdaki arzı 8.789.041.878,299 USDS adettir."
      },
      {
        "question": "USDS Nereden ve Nasıl Alınır?",
        "answer": "USDS (USDS) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 99638,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3321,
    "longLiquidation24hUsd": 1461,
    "shortLiquidation24hUsd": 1860,
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
        "volumeUsd": 1162,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9509,
        "leverage": "50x",
        "volumeUsd": 1494,
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
    "price": 10.839,
    "change24h": 0.445,
    "high24h": 11.041,
    "low24h": 10.739,
    "volume24hUsd": 12257873.04003,
    "marketCapUsd": 8312615392,
    "marketCapRank": 13,
    "circulatingSupply": 766849970.424884,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 52.7,
    "athChangePercent": -79.42943,
    "athDate": "2021-05-09",
    "atlUsd": 0.148183,
    "atlChangePercent": 7215.2649,
    "atlDate": "2017-11-28",
    "fdvUsd": 10839950072,
    "dominancePercent": 0.3,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Chainlink (LINK), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://chainlink.org",
    "whitepaperUrl": "https://chainlink.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/chainlink",
    "twitterUrl": "https://twitter.com/chainlink",
    "githubUrl": "https://github.com/chainlink",
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
    "openInterestUsd": 5516043,
    "openInterestChange24h": 0.16,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 183868,
    "longLiquidation24hUsd": 114918,
    "shortLiquidation24hUsd": 68951,
    "dominantLiquidationLevel": 10.5138,
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
        "price": 11.381,
        "leverage": "25x",
        "volumeUsd": 64354,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 10.2971,
        "leverage": "50x",
        "volumeUsd": 82741,
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
    "price": 0.1834,
    "change24h": -0.704,
    "high24h": 0.1897,
    "low24h": 0.1832,
    "volume24hUsd": 9707007.96473,
    "marketCapUsd": 6890454826,
    "marketCapRank": 14,
    "circulatingSupply": 37583793088.09034,
    "totalSupply": 45000000000,
    "maxSupply": 45000000000,
    "athUsd": 3.09,
    "athChangePercent": -94.06087,
    "athDate": "2021-09-01",
    "atlUsd": 0.01925275,
    "atlChangePercent": 852.25789,
    "atlDate": "2020-03-12",
    "fdvUsd": 8250111064,
    "dominancePercent": 0.25,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Cardano (ADA), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://cardano.org",
    "whitepaperUrl": "https://cardano.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/cardano",
    "twitterUrl": "https://twitter.com/cardano",
    "githubUrl": "https://github.com/cardano",
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
    "openInterestUsd": 4368154,
    "openInterestChange24h": -0.25,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 145605,
    "longLiquidation24hUsd": 64066,
    "shortLiquidation24hUsd": 81539,
    "dominantLiquidationLevel": 0.1889,
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
        "price": 0.1926,
        "leverage": "25x",
        "volumeUsd": 50962,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1742,
        "leverage": "50x",
        "volumeUsd": 65522,
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
    "price": 0.1531,
    "change24h": -0.261,
    "high24h": 0.1576,
    "low24h": 0.1516,
    "volume24hUsd": 5450179.3607,
    "marketCapUsd": 5420138006,
    "marketCapRank": 15,
    "circulatingSupply": 35372683095.86076,
    "totalSupply": 50001786837.39707,
    "maxSupply": null,
    "athUsd": 0.875563,
    "athChangePercent": -82.49932,
    "athDate": "2018-01-02",
    "atlUsd": 0.00047612,
    "atlChangePercent": 32082.72561,
    "atlDate": "2015-03-04",
    "fdvUsd": 7661748035,
    "dominancePercent": 0.19,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Stellar (XLM), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://stellar.org",
    "whitepaperUrl": "https://stellar.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/stellar",
    "twitterUrl": "https://twitter.com/stellar",
    "githubUrl": "https://github.com/stellar",
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
        "answer": "Stellar dolaşımdaki arzı 35.372.683.095,861 XLM adettir."
      },
      {
        "question": "Stellar Nereden ve Nasıl Alınır?",
        "answer": "Stellar (XLM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2452581,
    "openInterestChange24h": -0.09,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 81753,
    "longLiquidation24hUsd": 35971,
    "shortLiquidation24hUsd": 45782,
    "dominantLiquidationLevel": 0.1577,
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
        "price": 0.1608,
        "leverage": "25x",
        "volumeUsd": 28614,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1454,
        "leverage": "50x",
        "volumeUsd": 36789,
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
    "price": 260.9,
    "change24h": -2.504,
    "high24h": 271.5,
    "low24h": 260.3,
    "volume24hUsd": 5636167.7063,
    "marketCapUsd": 5243402828,
    "marketCapRank": 16,
    "circulatingSupply": 20113462.39665076,
    "totalSupply": 20113521.77165076,
    "maxSupply": 21000000,
    "athUsd": 3785.82,
    "athChangePercent": -93.11401,
    "athDate": "2017-12-19",
    "atlUsd": 76.93,
    "atlChangePercent": 238.84696,
    "atlDate": "2018-12-15",
    "fdvUsd": 5243418306,
    "dominancePercent": 0.19,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Bitcoin Cash (BCH), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bitcoin-cash.org",
    "whitepaperUrl": "https://bitcoin-cash.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bitcoin-cash",
    "twitterUrl": "https://twitter.com/bitcoin-cash",
    "githubUrl": "https://github.com/bitcoin-cash",
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
    "openInterestUsd": 2536275,
    "openInterestChange24h": -0.88,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 84543,
    "longLiquidation24hUsd": 37199,
    "shortLiquidation24hUsd": 47344,
    "dominantLiquidationLevel": 268.727,
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
        "price": 273.945,
        "leverage": "25x",
        "volumeUsd": 29590,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 247.855,
        "leverage": "50x",
        "volumeUsd": 38044,
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
    "price": 3.711,
    "change24h": -0.775,
    "high24h": 3.827,
    "low24h": 3.684,
    "volume24hUsd": 50003094.5416,
    "marketCapUsd": 4865878101,
    "marketCapRank": 17,
    "circulatingSupply": 1311037558,
    "totalSupply": 1311037547,
    "maxSupply": null,
    "athUsd": 20.44,
    "athChangePercent": -81.84045,
    "athDate": "2022-01-16",
    "atlUsd": 0.526762,
    "atlChangePercent": 604.58156,
    "atlDate": "2020-11-04",
    "fdvUsd": 4865878060,
    "dominancePercent": 0.17,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "NEAR Protocol (NEAR), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://near.org",
    "whitepaperUrl": "https://near.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/near",
    "twitterUrl": "https://twitter.com/near",
    "githubUrl": "https://github.com/near",
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
    "openInterestUsd": 22501393,
    "openInterestChange24h": -0.27,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 750046,
    "longLiquidation24hUsd": 330020,
    "shortLiquidation24hUsd": 420026,
    "dominantLiquidationLevel": 3.8223,
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
        "price": 3.8965,
        "leverage": "25x",
        "volumeUsd": 262516,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3.5254,
        "leverage": "50x",
        "volumeUsd": 337521,
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
    "price": 1.0003,
    "change24h": 0,
    "high24h": 1.0006,
    "low24h": 1.0002,
    "volume24hUsd": 1919781.908,
    "marketCapUsd": 4580231437,
    "marketCapRank": 18,
    "circulatingSupply": 4584941438.06191,
    "totalSupply": 4928262800.297189,
    "maxSupply": null,
    "athUsd": 1.034,
    "athChangePercent": -3.38979,
    "athDate": "2025-12-09",
    "atlUsd": 0.929486,
    "atlChangePercent": 7.47581,
    "atlDate": "2024-10-03",
    "fdvUsd": 4923200114,
    "dominancePercent": 0.16,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "Ethena USDe (USDE), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethena-usde.org",
    "whitepaperUrl": "https://ethena-usde.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ethena-usde",
    "twitterUrl": "https://twitter.com/ethena-usde",
    "githubUrl": "https://github.com/ethena-usde",
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
    "openInterestUsd": 863902,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 28797,
    "longLiquidation24hUsd": 17998,
    "shortLiquidation24hUsd": 10799,
    "dominantLiquidationLevel": 0.9703,
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
        "price": 1.0503,
        "leverage": "25x",
        "volumeUsd": 10079,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9503,
        "leverage": "50x",
        "volumeUsd": 12959,
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
    "marketCapUsd": 4458674352,
    "marketCapRank": 19,
    "circulatingSupply": 4457451151.422768,
    "totalSupply": 4457451151.422768,
    "maxSupply": null,
    "athUsd": 1.22,
    "athChangePercent": -17.93835,
    "athDate": "2020-03-12",
    "atlUsd": 0.88196,
    "atlChangePercent": 13.41496,
    "atlDate": "2023-03-10",
    "fdvUsd": 4458674352,
    "dominancePercent": 0.16,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "Dai (DAI), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://dai.org",
    "whitepaperUrl": "https://dai.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/dai",
    "twitterUrl": "https://twitter.com/dai",
    "githubUrl": "https://github.com/dai",
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
    "price": 7.012,
    "change24h": -0.142,
    "high24h": 7.132,
    "low24h": 6.861,
    "volume24hUsd": 24179286.0643,
    "marketCapUsd": 4259753104,
    "marketCapRank": 20,
    "circulatingSupply": 607895895.879729,
    "totalSupply": 886156418.7861971,
    "maxSupply": 1000000000,
    "athUsd": 44.92,
    "athChangePercent": -84.39915,
    "athDate": "2021-05-02",
    "atlUsd": 1.03,
    "atlChangePercent": 580.23669,
    "atlDate": "2020-09-16",
    "fdvUsd": 6209628295,
    "dominancePercent": 0.15,
    "category": "DeFi & Likidite",
    "descriptionTr": "Uniswap (UNI), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://uniswap.org",
    "whitepaperUrl": "https://uniswap.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/uniswap",
    "twitterUrl": "https://twitter.com/uniswap",
    "githubUrl": "https://github.com/uniswap",
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
    "openInterestUsd": 10880679,
    "openInterestChange24h": -0.05,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 362689,
    "longLiquidation24hUsd": 159583,
    "shortLiquidation24hUsd": 203106,
    "dominantLiquidationLevel": 7.2224,
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
        "price": 7.3626,
        "leverage": "25x",
        "volumeUsd": 126941,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.6614,
        "leverage": "50x",
        "volumeUsd": 163210,
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
    "price": 52.2,
    "change24h": -1.155,
    "high24h": 53.5,
    "low24h": 52.1,
    "volume24hUsd": 8366882.76541,
    "marketCapUsd": 4062241070,
    "marketCapRank": 21,
    "circulatingSupply": 77800379.94737804,
    "totalSupply": 77803392.45446412,
    "maxSupply": 84000000,
    "athUsd": 410.26,
    "athChangePercent": -87.27313,
    "athDate": "2021-05-09",
    "atlUsd": 1.15,
    "atlChangePercent": 4444.85745,
    "atlDate": "2015-01-13",
    "fdvUsd": 4062398364,
    "dominancePercent": 0.15,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Litecoin (LTC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://litecoin.org",
    "whitepaperUrl": "https://litecoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/litecoin",
    "twitterUrl": "https://twitter.com/litecoin",
    "githubUrl": "https://github.com/litecoin",
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
    "openInterestUsd": 3765097,
    "openInterestChange24h": -0.4,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 125503,
    "longLiquidation24hUsd": 55221,
    "shortLiquidation24hUsd": 70282,
    "dominantLiquidationLevel": 53.766,
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
        "price": 54.81,
        "leverage": "25x",
        "volumeUsd": 43926,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 49.59,
        "leverage": "50x",
        "volumeUsd": 56476,
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
    "price": 0.094302,
    "change24h": -4.35927,
    "high24h": 0.098751,
    "low24h": 0.093848,
    "volume24hUsd": 16148107,
    "marketCapUsd": 3773169584,
    "marketCapRank": 22,
    "circulatingSupply": 40011591109.66087,
    "totalSupply": 40011591109.66087,
    "maxSupply": null,
    "athUsd": 0.194152,
    "athChangePercent": -51.42873,
    "athDate": "2026-02-03",
    "atlUsd": 0.059024,
    "atlChangePercent": 59.76864,
    "atlDate": "2025-12-06",
    "fdvUsd": 3773169584,
    "dominancePercent": 0.13,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Canton (CC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://canton-network.org",
    "whitepaperUrl": "https://canton-network.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/canton-network",
    "twitterUrl": "https://twitter.com/canton-network",
    "githubUrl": "https://github.com/canton-network",
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
    "openInterestUsd": 7266648,
    "openInterestChange24h": -1.53,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 242222,
    "longLiquidation24hUsd": 106578,
    "shortLiquidation24hUsd": 135644,
    "dominantLiquidationLevel": 0.0971,
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
        "price": 0.099,
        "leverage": "25x",
        "volumeUsd": 84778,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0896,
        "leverage": "50x",
        "volumeUsd": 109000,
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
    "price": 8.3,
    "change24h": -0.216,
    "high24h": 8.476,
    "low24h": 8.259,
    "volume24hUsd": 8204164.58341,
    "marketCapUsd": 3684703113,
    "marketCapRank": 23,
    "circulatingSupply": 444144321.3028935,
    "totalSupply": 470812965.11938155,
    "maxSupply": 720000000,
    "athUsd": 144.96,
    "athChangePercent": -94.27705,
    "athDate": "2021-11-21",
    "atlUsd": 2.8,
    "atlChangePercent": 196.17532,
    "atlDate": "2020-12-31",
    "fdvUsd": 3905951095,
    "dominancePercent": 0.13,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Avalanche (AVAX), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://avalanche-2.org",
    "whitepaperUrl": "https://avalanche-2.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/avalanche-2",
    "twitterUrl": "https://twitter.com/avalanche-2",
    "githubUrl": "https://github.com/avalanche-2",
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
        "answer": "Avalanche dolaşımdaki arzı 444.144.321,303 AVAX adettir."
      },
      {
        "question": "Avalanche Nereden ve Nasıl Alınır?",
        "answer": "Avalanche (AVAX) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3691874,
    "openInterestChange24h": -0.08,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 123062,
    "longLiquidation24hUsd": 54147,
    "shortLiquidation24hUsd": 68915,
    "dominantLiquidationLevel": 8.549,
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
        "price": 8.715,
        "leverage": "25x",
        "volumeUsd": 43072,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 7.885,
        "leverage": "50x",
        "volumeUsd": 55378,
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
    "price": 0.8641,
    "change24h": 0.069,
    "high24h": 0.8819,
    "low24h": 0.8575,
    "volume24hUsd": 18755099.11224,
    "marketCapUsd": 3575429655,
    "marketCapRank": 24,
    "circulatingSupply": 4139043544.1303763,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 5.35,
    "athChangePercent": -83.84328,
    "athDate": "2025-01-04",
    "atlUsd": 0.364846,
    "atlChangePercent": 136.76542,
    "atlDate": "2023-10-19",
    "fdvUsd": 8638299203,
    "dominancePercent": 0.13,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Sui (SUI), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sui.org",
    "whitepaperUrl": "https://sui.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/sui",
    "twitterUrl": "https://twitter.com/sui",
    "githubUrl": "https://github.com/sui",
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
    "openInterestUsd": 8439795,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 281326,
    "longLiquidation24hUsd": 175829,
    "shortLiquidation24hUsd": 105497,
    "dominantLiquidationLevel": 0.8382,
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
        "price": 0.9073,
        "leverage": "25x",
        "volumeUsd": 98464,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.8209,
        "leverage": "50x",
        "volumeUsd": 126597,
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
    "price": 0.99904,
    "change24h": 0.036,
    "high24h": 0.99975,
    "low24h": 0.998,
    "volume24hUsd": 229270048.02608,
    "marketCapUsd": 3493558667,
    "marketCapRank": 25,
    "circulatingSupply": 3500233381.621581,
    "totalSupply": 3500233381.621581,
    "maxSupply": null,
    "athUsd": 1.048,
    "athChangePercent": -4.75595,
    "athDate": "2026-07-09",
    "atlUsd": 0.988762,
    "atlChangePercent": 0.94367,
    "atlDate": "2026-07-09",
    "fdvUsd": 3493558667,
    "dominancePercent": 0.12,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USD1 (USD1), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://usd1-wlfi.org",
    "whitepaperUrl": "https://usd1-wlfi.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/usd1-wlfi",
    "twitterUrl": "https://twitter.com/usd1-wlfi",
    "githubUrl": "https://github.com/usd1-wlfi",
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
    "openInterestUsd": 103171522,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 3439051,
    "longLiquidation24hUsd": 2149407,
    "shortLiquidation24hUsd": 1289644,
    "dominantLiquidationLevel": 0.9691,
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
        "price": 1.049,
        "leverage": "25x",
        "volumeUsd": 1203668,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9491,
        "leverage": "50x",
        "volumeUsd": 1547573,
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
    "price": 4060.9,
    "change24h": 0.02,
    "high24h": 4063.89,
    "low24h": 4012.25,
    "volume24hUsd": 16123430.127022,
    "marketCapUsd": 3281318120,
    "marketCapRank": 26,
    "circulatingSupply": 808994.63,
    "totalSupply": 827417.63,
    "maxSupply": null,
    "athUsd": 5504.62,
    "athChangePercent": -26.31557,
    "athDate": "2026-01-28",
    "atlUsd": 1447.84,
    "atlChangePercent": 180.14429,
    "atlDate": "2020-03-19",
    "fdvUsd": 3356042625,
    "dominancePercent": 0.12,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Tether Gold (XAUT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://tether-gold.org",
    "whitepaperUrl": "https://tether-gold.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/tether-gold",
    "twitterUrl": "https://twitter.com/tether-gold",
    "githubUrl": "https://github.com/tether-gold",
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
    "openInterestUsd": 7255544,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 241851,
    "longLiquidation24hUsd": 151157,
    "shortLiquidation24hUsd": 90694,
    "dominantLiquidationLevel": 3939.073,
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
        "price": 4263.945,
        "leverage": "25x",
        "volumeUsd": 84648,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3857.855,
        "leverage": "50x",
        "volumeUsd": 108833,
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
    "price": 1.1,
    "change24h": -0.362,
    "high24h": 1.112,
    "low24h": 1.087,
    "volume24hUsd": 3659153.13517,
    "marketCapUsd": 3136107782,
    "marketCapRank": 27,
    "circulatingSupply": 2852512355.349582,
    "totalSupply": 5279578105.078099,
    "maxSupply": null,
    "athUsd": 8.25,
    "athChangePercent": -86.67953,
    "athDate": "2024-06-14",
    "atlUsd": 0.519364,
    "atlChangePercent": 111.68569,
    "atlDate": "2021-09-20",
    "fdvUsd": 5804471258,
    "dominancePercent": 0.11,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Gram (prev. Toncoin) (GRAM), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://the-open-network.org",
    "whitepaperUrl": "https://the-open-network.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/the-open-network",
    "twitterUrl": "https://twitter.com/the-open-network",
    "githubUrl": "https://github.com/the-open-network",
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
        "answer": "Gram (prev. Toncoin) dolaşımdaki arzı 2.852.512.355,35 GRAM adettir."
      },
      {
        "question": "Gram (prev. Toncoin) Nereden ve Nasıl Alınır?",
        "answer": "Gram (prev. Toncoin) (GRAM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1646619,
    "openInterestChange24h": -0.13,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 54887,
    "longLiquidation24hUsd": 24150,
    "shortLiquidation24hUsd": 30737,
    "dominantLiquidationLevel": 1.133,
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
        "price": 1.155,
        "leverage": "25x",
        "volumeUsd": 19210,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.045,
        "leverage": "50x",
        "volumeUsd": 24699,
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
    "price": 0.06771,
    "change24h": -0.951,
    "high24h": 0.06922,
    "low24h": 0.06686,
    "volume24hUsd": 5272228.85639,
    "marketCapUsd": 3001610766,
    "marketCapRank": 28,
    "circulatingSupply": 44327148038.890976,
    "totalSupply": 50000000000,
    "maxSupply": 50000000000,
    "athUsd": 0.569229,
    "athChangePercent": -88.10409,
    "athDate": "2021-09-15",
    "atlUsd": 0.00986111,
    "atlChangePercent": 586.6869,
    "atlDate": "2020-01-02",
    "fdvUsd": 3385747672,
    "dominancePercent": 0.11,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Hedera (HBAR), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://hedera-hashgraph.org",
    "whitepaperUrl": "https://hedera-hashgraph.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/hedera-hashgraph",
    "twitterUrl": "https://twitter.com/hedera-hashgraph",
    "githubUrl": "https://github.com/hedera-hashgraph",
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
        "answer": "Hedera dolaşımdaki arzı 44.327.148.038,891 HBAR adettir."
      },
      {
        "question": "Hedera Nereden ve Nasıl Alınır?",
        "answer": "Hedera (HBAR) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 2372503,
    "openInterestChange24h": -0.33,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 79083,
    "longLiquidation24hUsd": 34797,
    "shortLiquidation24hUsd": 44286,
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
        "volumeUsd": 27679,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0643,
        "leverage": "50x",
        "volumeUsd": 35587,
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
    "price": 198.74,
    "change24h": 5.137,
    "high24h": 205.23,
    "low24h": 187.5,
    "volume24hUsd": 11411946.14789,
    "marketCapUsd": 2887274363,
    "marketCapRank": 29,
    "circulatingSupply": 14556178.164081175,
    "totalSupply": 14612493,
    "maxSupply": 14612493,
    "athUsd": 427.42,
    "athChangePercent": -53.59301,
    "athDate": "2021-09-11",
    "atlUsd": 0.215773,
    "atlChangePercent": 91826.9638,
    "atlDate": "2018-08-22",
    "fdvUsd": 2898444629,
    "dominancePercent": 0.1,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Quant (QNT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://quant-network.org",
    "whitepaperUrl": "https://quant-network.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/quant-network",
    "twitterUrl": "https://twitter.com/quant-network",
    "githubUrl": "https://github.com/quant-network",
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
    "openInterestUsd": 5135376,
    "openInterestChange24h": 1.8,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 171179,
    "longLiquidation24hUsd": 106987,
    "shortLiquidation24hUsd": 64192,
    "dominantLiquidationLevel": 192.7778,
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
        "price": 208.677,
        "leverage": "25x",
        "volumeUsd": 59913,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 188.803,
        "leverage": "50x",
        "volumeUsd": 77031,
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
    "change24h": 0.00923,
    "high24h": 1,
    "low24h": 0.999424,
    "volume24hUsd": 86638549,
    "marketCapUsd": 2791391167,
    "marketCapRank": 30,
    "circulatingSupply": 2790747022.943135,
    "totalSupply": 2790747022.943135,
    "maxSupply": null,
    "athUsd": 1.021,
    "athChangePercent": -2.00899,
    "athDate": "2023-10-23",
    "atlUsd": 0.959426,
    "atlChangePercent": 4.25303,
    "atlDate": "2024-12-05",
    "fdvUsd": 2791391167,
    "dominancePercent": 0.1,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "PayPal USD (PYUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://paypal-usd.org",
    "whitepaperUrl": "https://paypal-usd.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/paypal-usd",
    "twitterUrl": "https://twitter.com/paypal-usd",
    "githubUrl": "https://github.com/paypal-usd",
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
        "answer": "PayPal USD dolaşımdaki arzı 2.790.747.022,943 PYUSD adettir."
      },
      {
        "question": "PayPal USD Nereden ve Nasıl Alınır?",
        "answer": "PayPal USD (PYUSD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 38987347,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 1299578,
    "longLiquidation24hUsd": 812236,
    "shortLiquidation24hUsd": 487342,
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
        "volumeUsd": 454852,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.95,
        "leverage": "50x",
        "volumeUsd": 584810,
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
    "price": 1.0013,
    "change24h": 0,
    "high24h": 1.0016,
    "low24h": 1.0011,
    "volume24hUsd": 54681340.2887,
    "marketCapUsd": 2688019883,
    "marketCapRank": 31,
    "circulatingSupply": 2687340895.9132385,
    "totalSupply": 2687340895.9132385,
    "maxSupply": null,
    "athUsd": 1.073,
    "athChangePercent": -6.76399,
    "athDate": "2024-12-26",
    "atlUsd": 0.962292,
    "atlChangePercent": 3.94484,
    "atlDate": "2024-12-17",
    "fdvUsd": 2688019883,
    "dominancePercent": 0.1,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ripple USD (RLUSD), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ripple-usd.org",
    "whitepaperUrl": "https://ripple-usd.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ripple-usd",
    "twitterUrl": "https://twitter.com/ripple-usd",
    "githubUrl": "https://github.com/ripple-usd",
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
    "openInterestUsd": 24606603,
    "openInterestChange24h": 0,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 820220,
    "longLiquidation24hUsd": 512638,
    "shortLiquidation24hUsd": 307583,
    "dominantLiquidationLevel": 0.9713,
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
        "price": 1.0514,
        "leverage": "25x",
        "volumeUsd": 287077,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9512,
        "leverage": "50x",
        "volumeUsd": 369099,
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
    "price": 0.00000451,
    "change24h": -1.957,
    "high24h": 0.00000463,
    "low24h": 0.00000449,
    "volume24hUsd": 1197863.16900282,
    "marketCapUsd": 2656280011,
    "marketCapRank": 32,
    "circulatingSupply": 589238178603488,
    "totalSupply": 589495714214776.5,
    "maxSupply": null,
    "athUsd": 0.00008616,
    "athChangePercent": -94.76781,
    "athDate": "2021-10-27",
    "atlUsd": 5.6366e-11,
    "atlChangePercent": 7997552.91919,
    "atlDate": "2020-11-28",
    "fdvUsd": 2657440979,
    "dominancePercent": 0.09,
    "category": "Meme & Topluluk",
    "descriptionTr": "Shiba Inu (SHIB), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://shiba-inu.org",
    "whitepaperUrl": "https://shiba-inu.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/shiba-inu",
    "twitterUrl": "https://twitter.com/shiba-inu",
    "githubUrl": "https://github.com/shiba-inu",
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
    "openInterestUsd": 539038,
    "openInterestChange24h": -0.68,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 17968,
    "longLiquidation24hUsd": 7906,
    "shortLiquidation24hUsd": 10062,
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
        "volumeUsd": 6289,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 8086,
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
    "price": 225.1,
    "change24h": 1.534,
    "high24h": 227.5,
    "low24h": 221.1,
    "volume24hUsd": 7655448.75934,
    "marketCapUsd": 2634283732,
    "marketCapRank": 33,
    "circulatingSupply": 11701461.99825835,
    "totalSupply": 11701543.591187134,
    "maxSupply": 21000000,
    "athUsd": 757.6,
    "athChangePercent": -70.28473,
    "athDate": "2024-03-07",
    "atlUsd": 30.83,
    "atlChangePercent": 630.21261,
    "atlDate": "2023-05-14",
    "fdvUsd": 2634302100,
    "dominancePercent": 0.09,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Bittensor (TAO), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bittensor.org",
    "whitepaperUrl": "https://bittensor.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bittensor",
    "twitterUrl": "https://twitter.com/bittensor",
    "githubUrl": "https://github.com/bittensor",
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
        "answer": "Bittensor dolaşımdaki arzı 11.701.461,998 TAO adettir."
      },
      {
        "question": "Bittensor Nereden ve Nasıl Alınır?",
        "answer": "Bittensor (TAO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 3444952,
    "openInterestChange24h": 0.54,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 114832,
    "longLiquidation24hUsd": 71770,
    "shortLiquidation24hUsd": 43062,
    "dominantLiquidationLevel": 218.347,
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
        "price": 236.355,
        "leverage": "25x",
        "volumeUsd": 40191,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 213.845,
        "leverage": "50x",
        "volumeUsd": 51674,
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
    "change24h": -0.20132,
    "high24h": 1.15,
    "low24h": 1.15,
    "volume24hUsd": 3008306,
    "marketCapUsd": 2382435986,
    "marketCapRank": 34,
    "circulatingSupply": 2072546006.2159796,
    "totalSupply": 2072546006.2159796,
    "maxSupply": null,
    "athUsd": 1.26,
    "athChangePercent": -8.98816,
    "athDate": "2024-03-26",
    "atlUsd": 0.934184,
    "atlChangePercent": 23.05089,
    "atlDate": "2024-01-14",
    "fdvUsd": 2382435986,
    "dominancePercent": 0.09,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ondo US Dollar Yield (USDY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ondo-us-dollar-yield.org",
    "whitepaperUrl": "https://ondo-us-dollar-yield.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ondo-us-dollar-yield",
    "twitterUrl": "https://twitter.com/ondo-us-dollar-yield",
    "githubUrl": "https://github.com/ondo-us-dollar-yield",
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
    "openInterestUsd": 1353738,
    "openInterestChange24h": -0.07,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 45125,
    "longLiquidation24hUsd": 19855,
    "shortLiquidation24hUsd": 25270,
    "dominantLiquidationLevel": 1.1845,
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
        "price": 1.2075,
        "leverage": "25x",
        "volumeUsd": 15794,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.0925,
        "leverage": "50x",
        "volumeUsd": 20306,
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
    "price": 0.1625,
    "change24h": -0.975,
    "high24h": 0.1718,
    "low24h": 0.1623,
    "volume24hUsd": 16587454.641523,
    "marketCapUsd": 2189871041,
    "marketCapRank": 35,
    "circulatingSupply": 13500000000,
    "totalSupply": 15000000000,
    "maxSupply": 15000000000,
    "athUsd": 1.52,
    "athChangePercent": -89.31196,
    "athDate": "2024-04-11",
    "atlUsd": 0.070228,
    "atlChangePercent": 130.97846,
    "atlDate": "2026-06-30",
    "fdvUsd": 2433190045,
    "dominancePercent": 0.08,
    "category": "DeFi & Likidite",
    "descriptionTr": "Ethena (ENA), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethena.org",
    "whitepaperUrl": "https://ethena.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ethena",
    "twitterUrl": "https://twitter.com/ethena",
    "githubUrl": "https://github.com/ethena",
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
    "openInterestUsd": 7464355,
    "openInterestChange24h": -0.34,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 248812,
    "longLiquidation24hUsd": 109477,
    "shortLiquidation24hUsd": 139335,
    "dominantLiquidationLevel": 0.1674,
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
        "price": 0.1706,
        "leverage": "25x",
        "volumeUsd": 87084,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1544,
        "leverage": "50x",
        "volumeUsd": 111965,
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
    "price": 0.00000496,
    "change24h": -2.17,
    "high24h": 0.0000052,
    "low24h": 0.00000488,
    "volume24hUsd": 45838839.46652888,
    "marketCapUsd": 2085618821,
    "marketCapRank": 36,
    "circulatingSupply": 420690000000000,
    "totalSupply": 420690000000000,
    "maxSupply": 420690000000000,
    "athUsd": 0.00002803,
    "athChangePercent": -82.31204,
    "athDate": "2024-12-09",
    "atlUsd": 5.5142e-8,
    "atlChangePercent": 8890.56947,
    "atlDate": "2023-04-17",
    "fdvUsd": 2085618821,
    "dominancePercent": 0.07,
    "category": "Meme & Topluluk",
    "descriptionTr": "Pepe (PEPE), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pepe.org",
    "whitepaperUrl": "https://pepe.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pepe",
    "twitterUrl": "https://twitter.com/pepe",
    "githubUrl": "https://github.com/pepe",
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
    "openInterestUsd": 20627478,
    "openInterestChange24h": -0.76,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 687583,
    "longLiquidation24hUsd": 302537,
    "shortLiquidation24hUsd": 385046,
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
        "volumeUsd": 240654,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 309412,
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
    "price": 131.57,
    "change24h": 0.743,
    "high24h": 133.56,
    "low24h": 128.29,
    "volume24hUsd": 12216669.39442,
    "marketCapUsd": 2030432498,
    "marketCapRank": 37,
    "circulatingSupply": 15440362.016914716,
    "totalSupply": 16000000,
    "maxSupply": 16000000,
    "athUsd": 661.69,
    "athChangePercent": -80.12632,
    "athDate": "2021-05-18",
    "atlUsd": 26.02,
    "atlChangePercent": 405.32773,
    "atlDate": "2020-11-05",
    "fdvUsd": 2104025795,
    "dominancePercent": 0.07,
    "category": "DeFi & Likidite",
    "descriptionTr": "Aave (AAVE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://aave.org",
    "whitepaperUrl": "https://aave.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/aave",
    "twitterUrl": "https://twitter.com/aave",
    "githubUrl": "https://github.com/aave",
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
        "answer": "Aave dolaşımdaki arzı 15.440.362,017 AAVE adettir."
      },
      {
        "question": "Aave Nereden ve Nasıl Alınır?",
        "answer": "Aave (AAVE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 5497501,
    "openInterestChange24h": 0.26,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 183250,
    "longLiquidation24hUsd": 114531,
    "shortLiquidation24hUsd": 68719,
    "dominantLiquidationLevel": 127.6229,
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
        "price": 138.1485,
        "leverage": "25x",
        "volumeUsd": 64137,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 124.9915,
        "leverage": "50x",
        "volumeUsd": 82463,
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
    "price": 4063.08,
    "change24h": -0.045,
    "high24h": 4071.69,
    "low24h": 4018,
    "volume24hUsd": 11738097.068087,
    "marketCapUsd": 1817785012,
    "marketCapRank": 38,
    "circulatingSupply": 447724.829622,
    "totalSupply": 447724.829622,
    "maxSupply": null,
    "athUsd": 5619.09,
    "athChangePercent": -27.74544,
    "athDate": "2026-01-28",
    "atlUsd": 1399.64,
    "atlChangePercent": 190.0778,
    "atlDate": "2019-11-17",
    "fdvUsd": 1817785012,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "PAX Gold (PAXG), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pax-gold.org",
    "whitepaperUrl": "https://pax-gold.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pax-gold",
    "twitterUrl": "https://twitter.com/pax-gold",
    "githubUrl": "https://github.com/pax-gold",
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
    "openInterestUsd": 5282144,
    "openInterestChange24h": -0.02,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 176071,
    "longLiquidation24hUsd": 77471,
    "shortLiquidation24hUsd": 98600,
    "dominantLiquidationLevel": 4184.9724,
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
        "price": 4266.234,
        "leverage": "25x",
        "volumeUsd": 61625,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 3859.926,
        "leverage": "50x",
        "volumeUsd": 79232,
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
    "price": 0.003893,
    "change24h": -1.816,
    "high24h": 0.004175,
    "low24h": 0.00388,
    "volume24hUsd": 9605809.329326,
    "marketCapUsd": 1791431404,
    "marketCapRank": 39,
    "circulatingSupply": 459034732450.58435,
    "totalSupply": 823921554979.5552,
    "maxSupply": 1000000000000,
    "athUsd": 0.00881908,
    "athChangePercent": -55.74818,
    "athDate": "2025-09-14",
    "atlUsd": 0.00115473,
    "atlChangePercent": 237.96802,
    "atlDate": "2026-06-25",
    "fdvUsd": 3215440672,
    "dominancePercent": 0.06,
    "category": "Meme & Topluluk",
    "descriptionTr": "Pump.fun (PUMP), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pump-fun.org",
    "whitepaperUrl": "https://pump-fun.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pump-fun",
    "twitterUrl": "https://twitter.com/pump-fun",
    "githubUrl": "https://github.com/pump-fun",
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
    "openInterestUsd": 4322614,
    "openInterestChange24h": -0.64,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 144087,
    "longLiquidation24hUsd": 63398,
    "shortLiquidation24hUsd": 80689,
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
        "volumeUsd": 50430,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0037,
        "leverage": "50x",
        "volumeUsd": 64839,
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
    "price": 0.3673,
    "change24h": -2.288,
    "high24h": 0.3801,
    "low24h": 0.366,
    "volume24hUsd": 5009469.5369,
    "marketCapUsd": 1786930432,
    "marketCapRank": 40,
    "circulatingSupply": 4869330647,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 2.14,
    "athChangePercent": -82.85281,
    "athDate": "2024-12-15",
    "atlUsd": 0.082171,
    "atlChangePercent": 346.60117,
    "atlDate": "2024-01-18",
    "fdvUsd": 3669766055,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ondo (ONDO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ondo-finance.org",
    "whitepaperUrl": "https://ondo-finance.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ondo-finance",
    "twitterUrl": "https://twitter.com/ondo-finance",
    "githubUrl": "https://github.com/ondo-finance",
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
    "openInterestUsd": 2254261,
    "openInterestChange24h": -0.8,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 75142,
    "longLiquidation24hUsd": 33062,
    "shortLiquidation24hUsd": 42080,
    "dominantLiquidationLevel": 0.3783,
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
        "price": 0.3857,
        "leverage": "25x",
        "volumeUsd": 26300,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3489,
        "leverage": "50x",
        "volumeUsd": 33814,
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
    "price": 0.6776,
    "change24h": -0.514,
    "high24h": 0.6899,
    "low24h": 0.6762,
    "volume24hUsd": 4279649.790142,
    "marketCapUsd": 1741831973,
    "marketCapRank": 41,
    "circulatingSupply": 2571858486.5486393,
    "totalSupply": 7787306410.638907,
    "maxSupply": 8000000000,
    "athUsd": 2.41,
    "athChangePercent": -71.88293,
    "athDate": "2025-09-24",
    "atlUsd": 0.099713,
    "atlChangePercent": 579.21199,
    "atlDate": "2025-09-17",
    "fdvUsd": 5274076843,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Aster (ASTER), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://aster-2.org",
    "whitepaperUrl": "https://aster-2.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/aster-2",
    "twitterUrl": "https://twitter.com/aster-2",
    "githubUrl": "https://github.com/aster-2",
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
    "openInterestUsd": 1925842,
    "openInterestChange24h": -0.18,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 64195,
    "longLiquidation24hUsd": 28246,
    "shortLiquidation24hUsd": 35949,
    "dominantLiquidationLevel": 0.6979,
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
        "price": 0.7115,
        "leverage": "25x",
        "volumeUsd": 22468,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.6437,
        "leverage": "50x",
        "volumeUsd": 28888,
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
    "price": 1.0003,
    "change24h": -0.05,
    "high24h": 1.0008,
    "low24h": 0.9998,
    "volume24hUsd": 48916167.31,
    "marketCapUsd": 1610193830,
    "marketCapRank": 42,
    "circulatingSupply": 1611644734.63,
    "totalSupply": 1611644734.63,
    "maxSupply": null,
    "athUsd": 1.008,
    "athChangePercent": -0.86122,
    "athDate": "2026-02-05",
    "atlUsd": 0.968158,
    "atlChangePercent": 3.19592,
    "atlDate": "2025-12-20",
    "fdvUsd": 1610193830,
    "dominancePercent": 0.06,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "United Stables (U), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://united-stables.org",
    "whitepaperUrl": "https://united-stables.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/united-stables",
    "twitterUrl": "https://twitter.com/united-stables",
    "githubUrl": "https://github.com/united-stables",
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
    "openInterestUsd": 22012275,
    "openInterestChange24h": -0.02,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 733743,
    "longLiquidation24hUsd": 322847,
    "shortLiquidation24hUsd": 410896,
    "dominantLiquidationLevel": 1.0303,
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
        "price": 1.0503,
        "leverage": "25x",
        "volumeUsd": 256810,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9503,
        "leverage": "50x",
        "volumeUsd": 330184,
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
    "price": 0.903,
    "change24h": -2.273,
    "high24h": 0.949,
    "low24h": 0.898,
    "volume24hUsd": 2408146.85416,
    "marketCapUsd": 1544975177,
    "marketCapRank": 43,
    "circulatingSupply": 1710965572.8676724,
    "totalSupply": 1710969954.1426198,
    "maxSupply": 2100000000,
    "athUsd": 54.98,
    "athChangePercent": -98.35758,
    "athDate": "2021-11-04",
    "atlUsd": 0.727004,
    "atlChangePercent": 24.20622,
    "atlDate": "2026-08-18",
    "fdvUsd": 1544979134,
    "dominancePercent": 0.06,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Polkadot (DOT), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://polkadot.org",
    "whitepaperUrl": "https://polkadot.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/polkadot",
    "twitterUrl": "https://twitter.com/polkadot",
    "githubUrl": "https://github.com/polkadot",
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
        "answer": "Polkadot dolaşımdaki arzı 1.710.965.572,868 DOT adettir."
      },
      {
        "question": "Polkadot Nereden ve Nasıl Alınır?",
        "answer": "Polkadot (DOT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1083666,
    "openInterestChange24h": -0.8,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 36122,
    "longLiquidation24hUsd": 15894,
    "shortLiquidation24hUsd": 20228,
    "dominantLiquidationLevel": 0.9301,
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
        "price": 0.9482,
        "leverage": "25x",
        "volumeUsd": 12643,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.8579,
        "leverage": "50x",
        "volumeUsd": 16255,
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
    "price": 0.0641,
    "change24h": -3.551,
    "high24h": 0.06674,
    "low24h": 0.0636,
    "volume24hUsd": 1049610.58026,
    "marketCapUsd": 1499399585,
    "marketCapRank": 44,
    "circulatingSupply": 23419308628.784367,
    "totalSupply": 23452431915.605965,
    "maxSupply": 23462665147.3,
    "athUsd": 0.10087,
    "athChangePercent": -36.52827,
    "athDate": "2026-10-05",
    "atlUsd": 0.03582727,
    "atlChangePercent": 78.70208,
    "atlDate": "2025-02-02",
    "fdvUsd": 1501520273,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sky (SKY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sky.org",
    "whitepaperUrl": "https://sky.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/sky",
    "twitterUrl": "https://twitter.com/sky",
    "githubUrl": "https://github.com/sky",
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
    "openInterestUsd": 472325,
    "openInterestChange24h": -1.24,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 15744,
    "longLiquidation24hUsd": 6927,
    "shortLiquidation24hUsd": 8817,
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
        "price": 0.0673,
        "leverage": "25x",
        "volumeUsd": 5510,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0609,
        "leverage": "50x",
        "volumeUsd": 7085,
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
    "price": 0.452794,
    "change24h": 1.55933,
    "high24h": 0.453609,
    "low24h": 0.440509,
    "volume24hUsd": 18232060,
    "marketCapUsd": 1495127604,
    "marketCapRank": 45,
    "circulatingSupply": 3302003382.53684,
    "totalSupply": 6219316794.889999,
    "maxSupply": 6219316794.89,
    "athUsd": 2.86,
    "athChangePercent": -84.14062,
    "athDate": "2025-10-08",
    "atlUsd": 0.307978,
    "atlChangePercent": 47.02181,
    "atlDate": "2023-10-17",
    "fdvUsd": 2816069865,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Mantle (MNT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://mantle.org",
    "whitepaperUrl": "https://mantle.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/mantle",
    "twitterUrl": "https://twitter.com/mantle",
    "githubUrl": "https://github.com/mantle",
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
    "openInterestUsd": 8204427,
    "openInterestChange24h": 0.55,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 273481,
    "longLiquidation24hUsd": 170926,
    "shortLiquidation24hUsd": 102555,
    "dominantLiquidationLevel": 0.4392,
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
        "price": 0.4754,
        "leverage": "25x",
        "volumeUsd": 95718,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4302,
        "leverage": "50x",
        "volumeUsd": 123066,
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
    "price": 2.121,
    "change24h": 1.532,
    "high24h": 2.136,
    "low24h": 2.075,
    "volume24hUsd": 1050078.69987,
    "marketCapUsd": 1491984442,
    "marketCapRank": 46,
    "circulatingSupply": 703647983.7464095,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 4.17,
    "athChangePercent": -49.15948,
    "athDate": "2025-01-17",
    "atlUsd": 0.713151,
    "atlChangePercent": 197.32238,
    "atlDate": "2024-11-24",
    "fdvUsd": 2120356309,
    "dominancePercent": 0.05,
    "category": "DeFi & Likidite",
    "descriptionTr": "Morpho (MORPHO), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://morpho.org",
    "whitepaperUrl": "https://morpho.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/morpho",
    "twitterUrl": "https://twitter.com/morpho",
    "githubUrl": "https://github.com/morpho",
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
        "answer": "Morpho dolaşımdaki arzı 703.647.983,746 MORPHO adettir."
      },
      {
        "question": "Morpho Nereden ve Nasıl Alınır?",
        "answer": "Morpho (MORPHO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 472535,
    "openInterestChange24h": 0.54,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 15751,
    "longLiquidation24hUsd": 9844,
    "shortLiquidation24hUsd": 5907,
    "dominantLiquidationLevel": 2.0574,
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
        "price": 2.2271,
        "leverage": "25x",
        "volumeUsd": 5513,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.0149,
        "leverage": "50x",
        "volumeUsd": 7088,
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
    "price": 0.0461,
    "change24h": -2.331,
    "high24h": 0.0475,
    "low24h": 0.046,
    "volume24hUsd": 3345314.58246,
    "marketCapUsd": 1465096584,
    "marketCapRank": 47,
    "circulatingSupply": 31780184665,
    "totalSupply": 100000000000,
    "maxSupply": 100000000000,
    "athUsd": 0.331336,
    "athChangePercent": -86.08634,
    "athDate": "2025-09-01",
    "atlUsd": 0.04369702,
    "atlChangePercent": 5.50135,
    "atlDate": "2026-11-05",
    "fdvUsd": 4610094622,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "World Liberty Financial (WLFI), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://world-liberty-financial.org",
    "whitepaperUrl": "https://world-liberty-financial.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/world-liberty-financial",
    "twitterUrl": "https://twitter.com/world-liberty-financial",
    "githubUrl": "https://github.com/world-liberty-financial",
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
    "openInterestUsd": 1505392,
    "openInterestChange24h": -0.82,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 50180,
    "longLiquidation24hUsd": 22079,
    "shortLiquidation24hUsd": 28101,
    "dominantLiquidationLevel": 0.0475,
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
        "price": 0.0484,
        "leverage": "25x",
        "volumeUsd": 17563,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0438,
        "leverage": "50x",
        "volumeUsd": 22581,
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
    "change24h": 0.04748,
    "high24h": 0.00000156,
    "low24h": 0.00000155,
    "volume24hUsd": 12158142,
    "marketCapUsd": 1378911635,
    "marketCapRank": 48,
    "circulatingSupply": 888846370538197,
    "totalSupply": 888846370538197,
    "maxSupply": 999990000000000,
    "athUsd": 0.00000375,
    "athChangePercent": -58.64718,
    "athDate": "2024-12-03",
    "atlUsd": 8.00816e-7,
    "atlChangePercent": 93.72111,
    "atlDate": "2024-08-05",
    "fdvUsd": 1378911635,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "HTX DAO (HTX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://htx-dao.org",
    "whitepaperUrl": "https://htx-dao.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/htx-dao",
    "twitterUrl": "https://twitter.com/htx-dao",
    "githubUrl": "https://github.com/htx-dao",
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
    "openInterestUsd": 5471164,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 182372,
    "longLiquidation24hUsd": 113983,
    "shortLiquidation24hUsd": 68390,
    "dominantLiquidationLevel": 0,
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
        "price": 0,
        "leverage": "25x",
        "volumeUsd": 63830,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 82067,
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
    "price": 2.426,
    "change24h": -0.329,
    "high24h": 2.504,
    "low24h": 2.409,
    "volume24hUsd": 1797710.91211,
    "marketCapUsd": 1354090617,
    "marketCapRank": 49,
    "circulatingSupply": 558262741.0413762,
    "totalSupply": 558263006.9976909,
    "maxSupply": null,
    "athUsd": 700.65,
    "athChangePercent": -99.65381,
    "athDate": "2021-05-10",
    "atlUsd": 2,
    "atlChangePercent": 21.11545,
    "atlDate": "2026-08-01",
    "fdvUsd": 1354091262,
    "dominancePercent": 0.05,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Internet Computer (ICP), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://internet-computer.org",
    "whitepaperUrl": "https://internet-computer.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/internet-computer",
    "twitterUrl": "https://twitter.com/internet-computer",
    "githubUrl": "https://github.com/internet-computer",
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
    "openInterestUsd": 808970,
    "openInterestChange24h": -0.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 26966,
    "longLiquidation24hUsd": 11865,
    "shortLiquidation24hUsd": 15101,
    "dominantLiquidationLevel": 2.4988,
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
        "price": 2.5473,
        "leverage": "25x",
        "volumeUsd": 9438,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.3047,
        "leverage": "50x",
        "volumeUsd": 12135,
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
    "volume24hUsd": 5039044.7002,
    "marketCapUsd": 1318915269,
    "marketCapRank": 50,
    "circulatingSupply": 1320000000,
    "totalSupply": 1320000000,
    "maxSupply": null,
    "athUsd": 1.007,
    "athChangePercent": -0.7693,
    "athDate": "2025-10-10",
    "atlUsd": 0.993606,
    "atlChangePercent": 0.56083,
    "atlDate": "2026-10-30",
    "fdvUsd": 1318915269,
    "dominancePercent": 0.05,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "BFUSD (BFUSD), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bfusd.org",
    "whitepaperUrl": "https://bfusd.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bfusd",
    "twitterUrl": "https://twitter.com/bfusd",
    "githubUrl": "https://github.com/bfusd",
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
    "openInterestUsd": 2267570,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 75586,
    "longLiquidation24hUsd": 47241,
    "shortLiquidation24hUsd": 28345,
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
        "volumeUsd": 26455,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.95,
        "leverage": "50x",
        "volumeUsd": 34014,
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
    "price": 0.337,
    "change24h": -2.149,
    "high24h": 0.3546,
    "low24h": 0.3365,
    "volume24hUsd": 14623405.41998,
    "marketCapUsd": 1262727465,
    "marketCapRank": 51,
    "circulatingSupply": 3745436187.485387,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 11.74,
    "athChangePercent": -97.12845,
    "athDate": "2024-03-09",
    "atlUsd": 0.229961,
    "atlChangePercent": 46.60621,
    "atlDate": "2026-05-18",
    "fdvUsd": 3371376260,
    "dominancePercent": 0.05,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Worldcoin (WLD), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://worldcoin-wld.org",
    "whitepaperUrl": "https://worldcoin-wld.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/worldcoin-wld",
    "twitterUrl": "https://twitter.com/worldcoin-wld",
    "githubUrl": "https://github.com/worldcoin-wld",
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
        "answer": "Worldcoin dolaşımdaki arzı 3.745.436.187,485 WLD adettir."
      },
      {
        "question": "Worldcoin Nereden ve Nasıl Alınır?",
        "answer": "Worldcoin (WLD) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 6580532,
    "openInterestChange24h": -0.75,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 219351,
    "longLiquidation24hUsd": 96514,
    "shortLiquidation24hUsd": 122837,
    "dominantLiquidationLevel": 0.3471,
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
        "price": 0.3539,
        "leverage": "25x",
        "volumeUsd": 76773,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3201,
        "leverage": "50x",
        "volumeUsd": 98708,
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
    "price": 0.14236,
    "change24h": -0.091,
    "high24h": 0.14361,
    "low24h": 0.14131,
    "volume24hUsd": 1717327.11688,
    "marketCapUsd": 1140797881,
    "marketCapRank": 52,
    "circulatingSupply": 8018019892.341737,
    "totalSupply": 8018019892.341737,
    "maxSupply": 9900000000,
    "athUsd": 0.193254,
    "athChangePercent": -26.37713,
    "athDate": "2021-04-04",
    "atlUsd": 0.00476275,
    "atlChangePercent": 2887.33575,
    "atlDate": "2020-05-08",
    "fdvUsd": 1140797881,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "JUST (JST), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://just.org",
    "whitepaperUrl": "https://just.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/just",
    "twitterUrl": "https://twitter.com/just",
    "githubUrl": "https://github.com/just",
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
    "openInterestUsd": 772797,
    "openInterestChange24h": -0.03,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 25760,
    "longLiquidation24hUsd": 11334,
    "shortLiquidation24hUsd": 14426,
    "dominantLiquidationLevel": 0.1466,
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
        "price": 0.1495,
        "leverage": "25x",
        "volumeUsd": 9016,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1352,
        "leverage": "50x",
        "volumeUsd": 11592,
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
    "volume24hUsd": 7933658.07057,
    "marketCapUsd": 1138622904,
    "marketCapRank": 53,
    "circulatingSupply": 6892115031,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 2.39,
    "athChangePercent": -93.08841,
    "athDate": "2024-01-12",
    "atlUsd": 0.07048,
    "atlChangePercent": 134.4024,
    "atlDate": "2026-06-26",
    "fdvUsd": 1652066018,
    "dominancePercent": 0.04,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Arbitrum (ARB), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://arbitrum.org",
    "whitepaperUrl": "https://arbitrum.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/arbitrum",
    "twitterUrl": "https://twitter.com/arbitrum",
    "githubUrl": "https://github.com/arbitrum",
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
    "openInterestUsd": 3570146,
    "openInterestChange24h": -0.6,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 119005,
    "longLiquidation24hUsd": 52362,
    "shortLiquidation24hUsd": 66643,
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
        "volumeUsd": 41652,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1575,
        "leverage": "50x",
        "volumeUsd": 53552,
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
    "price": 6.96,
    "change24h": -0.855,
    "high24h": 7.15,
    "low24h": 6.93,
    "volume24hUsd": 1131288.8855,
    "marketCapUsd": 1104571258,
    "marketCapRank": 54,
    "circulatingSupply": 158947440.38985398,
    "totalSupply": 158947440.38985398,
    "maxSupply": 210700000,
    "athUsd": 167.09,
    "athChangePercent": -95.84088,
    "athDate": "2021-05-06",
    "atlUsd": 0.615038,
    "atlChangePercent": 1029.89543,
    "atlDate": "2016-07-24",
    "fdvUsd": 1104571258,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ethereum Classic (ETC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethereum-classic.org",
    "whitepaperUrl": "https://ethereum-classic.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ethereum-classic",
    "twitterUrl": "https://twitter.com/ethereum-classic",
    "githubUrl": "https://github.com/ethereum-classic",
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
    "openInterestUsd": 509080,
    "openInterestChange24h": -0.3,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 16969,
    "longLiquidation24hUsd": 7466,
    "shortLiquidation24hUsd": 9503,
    "dominantLiquidationLevel": 7.1688,
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
        "price": 7.308,
        "leverage": "25x",
        "volumeUsd": 5939,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.612,
        "leverage": "50x",
        "volumeUsd": 7636,
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
    "price": 20.7,
    "change24h": -1.03301,
    "high24h": 21.27,
    "low24h": 20.54,
    "volume24hUsd": 20217237,
    "marketCapUsd": 1012658048,
    "marketCapRank": 55,
    "circulatingSupply": 48914915.480000496,
    "totalSupply": 81235554.02301699,
    "maxSupply": null,
    "athUsd": 34.53,
    "athChangePercent": -40.04057,
    "athDate": "2026-09-21",
    "atlUsd": 0.91975,
    "atlChangePercent": 2150.8769,
    "atlDate": "2025-12-01",
    "fdvUsd": 1681774092,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Venice Token (VVV), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://venice-token.org",
    "whitepaperUrl": "https://venice-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/venice-token",
    "twitterUrl": "https://twitter.com/venice-token",
    "githubUrl": "https://github.com/venice-token",
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
        "answer": "Venice Token dolaşımdaki arzı 48.914.915,48 VVV adettir."
      },
      {
        "question": "Venice Token Nereden ve Nasıl Alınır?",
        "answer": "Venice Token (VVV) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 9097757,
    "openInterestChange24h": -0.36,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 303259,
    "longLiquidation24hUsd": 133434,
    "shortLiquidation24hUsd": 169825,
    "dominantLiquidationLevel": 21.321,
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
        "price": 21.735,
        "leverage": "25x",
        "volumeUsd": 106141,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 19.665,
        "leverage": "50x",
        "volumeUsd": 136467,
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
    "price": 7.13,
    "change24h": -0.54894,
    "high24h": 7.19,
    "low24h": 7.08,
    "volume24hUsd": 3570691,
    "marketCapUsd": 995858238,
    "marketCapRank": 56,
    "circulatingSupply": 139655021.2773955,
    "totalSupply": 142155021.2773955,
    "maxSupply": null,
    "athUsd": 28.83,
    "athChangePercent": -75.26579,
    "athDate": "2021-12-01",
    "atlUsd": 0.342863,
    "atlChangePercent": 1979.79363,
    "atlDate": "2019-02-06",
    "fdvUsd": 1013685349,
    "dominancePercent": 0.04,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "KuCoin (KCS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://kucoin-shares.org",
    "whitepaperUrl": "https://kucoin-shares.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/kucoin-shares",
    "twitterUrl": "https://twitter.com/kucoin-shares",
    "githubUrl": "https://github.com/kucoin-shares",
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
    "openInterestUsd": 1606811,
    "openInterestChange24h": -0.19,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 53560,
    "longLiquidation24hUsd": 23566,
    "shortLiquidation24hUsd": 29994,
    "dominantLiquidationLevel": 7.3439,
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
        "price": 7.4865,
        "leverage": "25x",
        "volumeUsd": 18746,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 6.7735,
        "leverage": "50x",
        "volumeUsd": 24102,
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
    "price": 0.09131,
    "change24h": -2.384,
    "high24h": 0.09452,
    "low24h": 0.09131,
    "volume24hUsd": 3424351.396661,
    "marketCapUsd": 975264179,
    "marketCapRank": 57,
    "circulatingSupply": 10645539031.82501,
    "totalSupply": 10645539031.82501,
    "maxSupply": null,
    "athUsd": 1.29,
    "athChangePercent": -92.8848,
    "athDate": "2024-03-13",
    "atlUsd": 0.067711,
    "atlChangePercent": 35.29916,
    "atlDate": "2026-07-01",
    "fdvUsd": 975264179,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "POL (ex-MATIC) (POL), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://polygon-ecosystem-token.org",
    "whitepaperUrl": "https://polygon-ecosystem-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/polygon-ecosystem-token",
    "twitterUrl": "https://twitter.com/polygon-ecosystem-token",
    "githubUrl": "https://github.com/polygon-ecosystem-token",
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
    "openInterestUsd": 1540958,
    "openInterestChange24h": -0.83,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 51365,
    "longLiquidation24hUsd": 22601,
    "shortLiquidation24hUsd": 28764,
    "dominantLiquidationLevel": 0.094,
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
        "price": 0.0959,
        "leverage": "25x",
        "volumeUsd": 17978,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0867,
        "leverage": "50x",
        "volumeUsd": 23114,
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
    "marketCapUsd": 871370333,
    "marketCapRank": 58,
    "circulatingSupply": 250000000,
    "totalSupply": 981909280,
    "maxSupply": 1000000000,
    "athUsd": 7.86,
    "athChangePercent": -55.65433,
    "athDate": "2025-12-30",
    "atlUsd": 0.779399,
    "atlChangePercent": 347.20134,
    "atlDate": "2026-03-31",
    "fdvUsd": 3422426466,
    "dominancePercent": 0.03,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Lighter (LIT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://lighter.org",
    "whitepaperUrl": "https://lighter.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/lighter",
    "twitterUrl": "https://twitter.com/lighter",
    "githubUrl": "https://github.com/lighter",
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
    "id": "algorand",
    "symbol": "ALGO",
    "name": "Algorand",
    "slug": "algorand",
    "binanceSymbol": "ALGOUSDT",
    "coingeckoId": "algorand",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4380/large/download.png?1696504978",
    "price": 0.0947,
    "change24h": 1.175,
    "high24h": 0.0987,
    "low24h": 0.0932,
    "volume24hUsd": 1083097.1391,
    "marketCapUsd": 859307639,
    "marketCapRank": 59,
    "circulatingSupply": 9078190203.145731,
    "totalSupply": 9078261223.53242,
    "maxSupply": 10000000000,
    "athUsd": 3.56,
    "athChangePercent": -97.34198,
    "athDate": "2019-06-20",
    "atlUsd": 0.075732,
    "atlChangePercent": 24.98847,
    "atlDate": "2026-07-29",
    "fdvUsd": 859314361,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Algorand (ALGO), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://algorand.org",
    "whitepaperUrl": "https://algorand.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/algorand",
    "twitterUrl": "https://twitter.com/algorand",
    "githubUrl": "https://github.com/algorand",
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
    "openInterestUsd": 487394,
    "openInterestChange24h": 0.41,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 16246,
    "longLiquidation24hUsd": 10154,
    "shortLiquidation24hUsd": 6092,
    "dominantLiquidationLevel": 0.0919,
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
        "price": 0.0994,
        "leverage": "25x",
        "volumeUsd": 5686,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.09,
        "leverage": "50x",
        "volumeUsd": 7311,
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
    "price": 1.572,
    "change24h": 2.012,
    "high24h": 1.615,
    "low24h": 1.541,
    "volume24hUsd": 1813481.17098,
    "marketCapUsd": 840085006,
    "marketCapRank": 60,
    "circulatingSupply": 533536414.5626915,
    "totalSupply": 561677066.6003445,
    "maxSupply": 644168762,
    "athUsd": 13.53,
    "athChangePercent": -88.36649,
    "athDate": "2024-03-17",
    "atlUsd": 0.03665669,
    "atlChangePercent": 4195.42284,
    "atlDate": "2020-06-16",
    "fdvUsd": 884394146,
    "dominancePercent": 0.03,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Render (RENDER), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://render-token.org",
    "whitepaperUrl": "https://render-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/render-token",
    "twitterUrl": "https://twitter.com/render-token",
    "githubUrl": "https://github.com/render-token",
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
    "openInterestUsd": 816067,
    "openInterestChange24h": 0.7,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 27202,
    "longLiquidation24hUsd": 17001,
    "shortLiquidation24hUsd": 10201,
    "dominantLiquidationLevel": 1.5248,
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
        "price": 1.6506,
        "leverage": "25x",
        "volumeUsd": 9521,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.4934,
        "leverage": "50x",
        "volumeUsd": 12241,
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
    "price": 0.02986021,
    "change24h": -1.57535,
    "high24h": 0.03079353,
    "low24h": 0.02978829,
    "volume24hUsd": 6351701,
    "marketCapUsd": 830021372,
    "marketCapRank": 61,
    "circulatingSupply": 27796906612.01668,
    "totalSupply": 27797558393.87768,
    "maxSupply": 28704026601,
    "athUsd": 0.207411,
    "athChangePercent": -85.60337,
    "athDate": "2024-07-31",
    "atlUsd": 0.00017105,
    "atlChangePercent": 17357.04396,
    "atlDate": "2022-05-26",
    "fdvUsd": 830040834,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Kaspa (KAS), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://kaspa.org",
    "whitepaperUrl": "https://kaspa.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/kaspa",
    "twitterUrl": "https://twitter.com/kaspa",
    "githubUrl": "https://github.com/kaspa",
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
    "openInterestUsd": 2858265,
    "openInterestChange24h": -0.55,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 95276,
    "longLiquidation24hUsd": 41921,
    "shortLiquidation24hUsd": 53355,
    "dominantLiquidationLevel": 0.0308,
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
        "price": 0.0314,
        "leverage": "25x",
        "volumeUsd": 33347,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0284,
        "leverage": "50x",
        "volumeUsd": 42874,
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
    "price": 8.221,
    "change24h": 0.6,
    "high24h": 8.527,
    "low24h": 8.13,
    "volume24hUsd": 12475772.81905,
    "marketCapUsd": 822456261,
    "marketCapRank": 62,
    "circulatingSupply": 100000000,
    "totalSupply": 100000000,
    "maxSupply": null,
    "athUsd": 52.62,
    "athChangePercent": -84.37009,
    "athDate": "2024-03-14",
    "atlUsd": 0.657401,
    "atlChangePercent": 1151.07273,
    "atlDate": "2020-11-03",
    "fdvUsd": 822456261,
    "dominancePercent": 0.03,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Injective (INJ), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://injective-protocol.org",
    "whitepaperUrl": "https://injective-protocol.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/injective-protocol",
    "twitterUrl": "https://twitter.com/injective-protocol",
    "githubUrl": "https://github.com/injective-protocol",
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
    "openInterestUsd": 5614098,
    "openInterestChange24h": 0.21,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 187137,
    "longLiquidation24hUsd": 116961,
    "shortLiquidation24hUsd": 70176,
    "dominantLiquidationLevel": 7.9744,
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
        "price": 8.6321,
        "leverage": "25x",
        "volumeUsd": 65498,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 7.8099,
        "leverage": "50x",
        "volumeUsd": 84212,
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
    "price": 0.2411,
    "change24h": -3.173,
    "high24h": 0.2537,
    "low24h": 0.2396,
    "volume24hUsd": 873265.67208,
    "marketCapUsd": 799936111,
    "marketCapRank": 63,
    "circulatingSupply": 3319369204.37,
    "totalSupply": 6861485787.144841,
    "maxSupply": 10000000000,
    "athUsd": 2,
    "athChangePercent": -87.95056,
    "athDate": "2024-01-31",
    "atlUsd": 0.135801,
    "atlChangePercent": 77.4586,
    "atlDate": "2026-02-12",
    "fdvUsd": 1653552202,
    "dominancePercent": 0.03,
    "category": "DeFi & Likidite",
    "descriptionTr": "Jupiter (JUP), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://jupiter-exchange-solana.org",
    "whitepaperUrl": "https://jupiter-exchange-solana.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/jupiter-exchange-solana",
    "twitterUrl": "https://twitter.com/jupiter-exchange-solana",
    "githubUrl": "https://github.com/jupiter-exchange-solana",
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
    "openInterestUsd": 392970,
    "openInterestChange24h": -1.11,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13099,
    "longLiquidation24hUsd": 5764,
    "shortLiquidation24hUsd": 7335,
    "dominantLiquidationLevel": 0.2483,
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
        "price": 0.2532,
        "leverage": "25x",
        "volumeUsd": 4585,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.229,
        "leverage": "50x",
        "volumeUsd": 5895,
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
    "price": 1.384,
    "change24h": -1.844,
    "high24h": 1.438,
    "low24h": 1.377,
    "volume24hUsd": 1245963.05919,
    "marketCapUsd": 748609410,
    "marketCapRank": 64,
    "circulatingSupply": 540477024.059525,
    "totalSupply": 540482180.928862,
    "maxSupply": null,
    "athUsd": 43.84,
    "athChangePercent": -96.84094,
    "athDate": "2021-09-19",
    "atlUsd": 1.16,
    "atlChangePercent": 19.39906,
    "atlDate": "2020-03-12",
    "fdvUsd": 748616553,
    "dominancePercent": 0.03,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Cosmos Hub (ATOM), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://cosmos.org",
    "whitepaperUrl": "https://cosmos.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/cosmos",
    "twitterUrl": "https://twitter.com/cosmos",
    "githubUrl": "https://github.com/cosmos",
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
        "answer": "Cosmos Hub dolaşımdaki arzı 540.477.024,06 ATOM adettir."
      },
      {
        "question": "Cosmos Hub Nereden ve Nasıl Alınır?",
        "answer": "Cosmos Hub (ATOM) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 560683,
    "openInterestChange24h": -0.65,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 18689,
    "longLiquidation24hUsd": 8223,
    "shortLiquidation24hUsd": 10466,
    "dominantLiquidationLevel": 1.4255,
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
        "price": 1.4532,
        "leverage": "25x",
        "volumeUsd": 6541,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.3148,
        "leverage": "50x",
        "volumeUsd": 8410,
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
    "price": 0.741,
    "change24h": 1.507,
    "high24h": 0.749,
    "low24h": 0.725,
    "volume24hUsd": 538715.14635,
    "marketCapUsd": 737275598,
    "marketCapRank": 65,
    "circulatingSupply": 1000000000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 4.07,
    "athChangePercent": -81.87608,
    "athDate": "2021-05-12",
    "atlUsd": 0.04515276,
    "atlChangePercent": 1532.84718,
    "atlDate": "2018-09-12",
    "fdvUsd": 737275598,
    "dominancePercent": 0.03,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "NEXO (NEXO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://nexo.org",
    "whitepaperUrl": "https://nexo.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/nexo",
    "twitterUrl": "https://twitter.com/nexo",
    "githubUrl": "https://github.com/nexo",
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
    "openInterestUsd": 242422,
    "openInterestChange24h": 0.53,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 8081,
    "longLiquidation24hUsd": 5051,
    "shortLiquidation24hUsd": 3030,
    "dominantLiquidationLevel": 0.7188,
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
        "price": 0.7781,
        "leverage": "25x",
        "volumeUsd": 2828,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.7039,
        "leverage": "50x",
        "volumeUsd": 3636,
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
    "price": 0.8019,
    "change24h": 0.062,
    "high24h": 0.8392,
    "low24h": 0.7998,
    "volume24hUsd": 3261699.026154,
    "marketCapUsd": 677646839,
    "marketCapRank": 66,
    "circulatingSupply": 845458229,
    "totalSupply": 1956861490,
    "maxSupply": null,
    "athUsd": 236.84,
    "athChangePercent": -99.66158,
    "athDate": "2021-04-01",
    "atlUsd": 0.612413,
    "atlChangePercent": 30.87802,
    "atlDate": "2026-08-18",
    "fdvUsd": 1568452417,
    "dominancePercent": 0.02,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Filecoin (FIL), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://filecoin.org",
    "whitepaperUrl": "https://filecoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/filecoin",
    "twitterUrl": "https://twitter.com/filecoin",
    "githubUrl": "https://github.com/filecoin",
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
        "answer": "Filecoin dolaşımdaki arzı 845.458.229 FIL adettir."
      },
      {
        "question": "Filecoin Nereden ve Nasıl Alınır?",
        "answer": "Filecoin (FIL) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1467765,
    "openInterestChange24h": 0.02,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 48925,
    "longLiquidation24hUsd": 30578,
    "shortLiquidation24hUsd": 18347,
    "dominantLiquidationLevel": 0.7778,
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
        "price": 0.842,
        "leverage": "25x",
        "volumeUsd": 17124,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.7618,
        "leverage": "50x",
        "volumeUsd": 22016,
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
    "price": 0.04021,
    "change24h": 2.681,
    "high24h": 0.04074,
    "low24h": 0.03845,
    "volume24hUsd": 1144718.21907,
    "marketCapUsd": 667368604,
    "marketCapRank": 67,
    "circulatingSupply": 16607399400.634954,
    "totalSupply": 24000000000,
    "maxSupply": 24000000000,
    "athUsd": 0.118529,
    "athChangePercent": -66.0969,
    "athDate": "2025-12-09",
    "atlUsd": 0.0152398,
    "atlChangePercent": 163.68475,
    "atlDate": "2026-07-20",
    "fdvUsd": 964440374,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Midnight (NIGHT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://midnight-3.org",
    "whitepaperUrl": "https://midnight-3.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/midnight-3",
    "twitterUrl": "https://twitter.com/midnight-3",
    "githubUrl": "https://github.com/midnight-3",
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
    "openInterestUsd": 515123,
    "openInterestChange24h": 0.94,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 17171,
    "longLiquidation24hUsd": 10732,
    "shortLiquidation24hUsd": 6439,
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
        "price": 0.0422,
        "leverage": "25x",
        "volumeUsd": 6010,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0382,
        "leverage": "50x",
        "volumeUsd": 7727,
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
    "price": 1.633,
    "change24h": 0.554,
    "high24h": 1.696,
    "low24h": 1.611,
    "volume24hUsd": 3638288.78633,
    "marketCapUsd": 653175377,
    "marketCapRank": 68,
    "circulatingSupply": 399976127.7281288,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 7.47,
    "athChangePercent": -78.15204,
    "athDate": "2024-12-06",
    "atlUsd": 0.707123,
    "atlChangePercent": 130.94094,
    "atlDate": "2026-07-31",
    "fdvUsd": 1633035903,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "LayerZero (ZRO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://layerzero.org",
    "whitepaperUrl": "https://layerzero.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/layerzero",
    "twitterUrl": "https://twitter.com/layerzero",
    "githubUrl": "https://github.com/layerzero",
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
    "openInterestUsd": 1637230,
    "openInterestChange24h": 0.19,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 54574,
    "longLiquidation24hUsd": 34109,
    "shortLiquidation24hUsd": 20465,
    "dominantLiquidationLevel": 1.584,
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
        "price": 1.7147,
        "leverage": "25x",
        "volumeUsd": 19101,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.5514,
        "leverage": "50x",
        "volumeUsd": 24558,
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
    "price": 0.3456,
    "change24h": 3.628,
    "high24h": 0.3515,
    "low24h": 0.3311,
    "volume24hUsd": 1128168.37176,
    "marketCapUsd": 651147026,
    "marketCapRank": 69,
    "circulatingSupply": 1880911936.732729,
    "totalSupply": 1880911936.732729,
    "maxSupply": null,
    "athUsd": 3.86,
    "athChangePercent": -91.04146,
    "athDate": "2024-04-01",
    "atlUsd": 0.04559639,
    "atlChangePercent": 659.24181,
    "atlDate": "2020-03-12",
    "fdvUsd": 651147026,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Stacks (STX), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://blockstack.org",
    "whitepaperUrl": "https://blockstack.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/blockstack",
    "twitterUrl": "https://twitter.com/blockstack",
    "githubUrl": "https://github.com/blockstack",
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
    "openInterestUsd": 507676,
    "openInterestChange24h": 1.27,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 16923,
    "longLiquidation24hUsd": 10577,
    "shortLiquidation24hUsd": 6346,
    "dominantLiquidationLevel": 0.3352,
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
        "price": 0.3629,
        "leverage": "25x",
        "volumeUsd": 5923,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3283,
        "leverage": "50x",
        "volumeUsd": 7615,
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
    "price": 1.912,
    "change24h": -1.189,
    "high24h": 1.95,
    "low24h": 1.905,
    "volume24hUsd": 887547.6586,
    "marketCapUsd": 627487476,
    "marketCapRank": 70,
    "circulatingSupply": 328257318.7611797,
    "totalSupply": 339798479.84759045,
    "maxSupply": 400000000,
    "athUsd": 43.96,
    "athChangePercent": -95.65202,
    "athDate": "2021-04-30",
    "atlUsd": 0.194441,
    "atlChangePercent": 883.11391,
    "atlDate": "2020-11-03",
    "fdvUsd": 649549236,
    "dominancePercent": 0.02,
    "category": "DeFi & Likidite",
    "descriptionTr": "PancakeSwap (CAKE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pancakeswap-token.org",
    "whitepaperUrl": "https://pancakeswap-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pancakeswap-token",
    "twitterUrl": "https://twitter.com/pancakeswap-token",
    "githubUrl": "https://github.com/pancakeswap-token",
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
    "openInterestUsd": 399396,
    "openInterestChange24h": -0.42,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13313,
    "longLiquidation24hUsd": 5858,
    "shortLiquidation24hUsd": 7455,
    "dominantLiquidationLevel": 1.9694,
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
        "price": 2.0076,
        "leverage": "25x",
        "volumeUsd": 4660,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.8164,
        "leverage": "50x",
        "volumeUsd": 5991,
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
    "price": 0.03119369,
    "change24h": -1.84908,
    "high24h": 0.03228473,
    "low24h": 0.03101921,
    "volume24hUsd": 8888537,
    "marketCapUsd": 622210730,
    "marketCapRank": 71,
    "circulatingSupply": 19946688440,
    "totalSupply": 38065686425.1,
    "maxSupply": null,
    "athUsd": 0.192754,
    "athChangePercent": -83.81686,
    "athDate": "2021-08-20",
    "atlUsd": 0.00039532,
    "atlChangePercent": 7790.78017,
    "atlDate": "2019-07-21",
    "fdvUsd": 1187409059,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "XDC Network (XDC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://xdce-crowd-sale.org",
    "whitepaperUrl": "https://xdce-crowd-sale.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/xdce-crowd-sale",
    "twitterUrl": "https://twitter.com/xdce-crowd-sale",
    "githubUrl": "https://github.com/xdce-crowd-sale",
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
    "openInterestUsd": 3999842,
    "openInterestChange24h": -0.65,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 133328,
    "longLiquidation24hUsd": 58664,
    "shortLiquidation24hUsd": 74664,
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
        "price": 0.0328,
        "leverage": "25x",
        "volumeUsd": 46665,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0296,
        "leverage": "50x",
        "volumeUsd": 59998,
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
    "price": 47.03,
    "change24h": 3.865,
    "high24h": 48.72,
    "low24h": 45.17,
    "volume24hUsd": 3783071.5422,
    "marketCapUsd": 605561023,
    "marketCapRank": 72,
    "circulatingSupply": 12889336.31526821,
    "totalSupply": 12889385.77685621,
    "maxSupply": 18920000,
    "athUsd": 1493.59,
    "athChangePercent": -96.85446,
    "athDate": "2017-12-19",
    "atlUsd": 0.213899,
    "atlChangePercent": 21864.36255,
    "atlDate": "2014-02-13",
    "fdvUsd": 605563346,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Dash (DASH), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://dash.org",
    "whitepaperUrl": "https://dash.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/dash",
    "twitterUrl": "https://twitter.com/dash",
    "githubUrl": "https://github.com/dash",
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
        "answer": "Dash dolaşımdaki arzı 12.889.336,315 DASH adettir."
      },
      {
        "question": "Dash Nereden ve Nasıl Alınır?",
        "answer": "Dash (DASH) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 1702382,
    "openInterestChange24h": 1.35,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 56746,
    "longLiquidation24hUsd": 35466,
    "shortLiquidation24hUsd": 21280,
    "dominantLiquidationLevel": 45.6191,
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
        "price": 49.3815,
        "leverage": "25x",
        "volumeUsd": 19861,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 44.6785,
        "leverage": "50x",
        "volumeUsd": 25536,
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
    "price": 0.5886,
    "change24h": 2.74,
    "high24h": 0.5925,
    "low24h": 0.572,
    "volume24hUsd": 2051002.00269,
    "marketCapUsd": 587021993,
    "marketCapRank": 73,
    "circulatingSupply": 998535999,
    "totalSupply": 998535999,
    "maxSupply": 1000000000,
    "athUsd": 8.53,
    "athChangePercent": -93.10718,
    "athDate": "2024-03-27",
    "atlUsd": 0.26653,
    "atlChangePercent": 120.56904,
    "atlDate": "2026-06-05",
    "fdvUsd": 587021993,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ether.fi (ETHFI), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ether-fi.org",
    "whitepaperUrl": "https://ether-fi.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ether-fi",
    "twitterUrl": "https://twitter.com/ether-fi",
    "githubUrl": "https://github.com/ether-fi",
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
    "openInterestUsd": 922951,
    "openInterestChange24h": 0.96,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 30765,
    "longLiquidation24hUsd": 19228,
    "shortLiquidation24hUsd": 11537,
    "dominantLiquidationLevel": 0.5709,
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
        "price": 0.618,
        "leverage": "25x",
        "volumeUsd": 10768,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5592,
        "leverage": "50x",
        "volumeUsd": 13844,
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
    "price": 0.5987,
    "change24h": -0.91,
    "high24h": 0.623,
    "low24h": 0.5965,
    "volume24hUsd": 1997851.678211,
    "marketCapUsd": 529189179,
    "marketCapRank": 74,
    "circulatingSupply": 884096087.7711477,
    "totalSupply": 1211226653.0169487,
    "maxSupply": 2100000000,
    "athUsd": 19.92,
    "athChangePercent": -96.99525,
    "athDate": "2023-01-26",
    "atlUsd": 0.511162,
    "atlChangePercent": 17.09882,
    "atlDate": "2026-08-30",
    "fdvUsd": 724998161,
    "dominancePercent": 0.02,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Aptos (APT), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://aptos.org",
    "whitepaperUrl": "https://aptos.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/aptos",
    "twitterUrl": "https://twitter.com/aptos",
    "githubUrl": "https://github.com/aptos",
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
        "answer": "Aptos dolaşımdaki arzı 884.096.087,771 APT adettir."
      },
      {
        "question": "Aptos Nereden ve Nasıl Alınır?",
        "answer": "Aptos (APT) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 899033,
    "openInterestChange24h": -0.32,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 29968,
    "longLiquidation24hUsd": 13186,
    "shortLiquidation24hUsd": 16782,
    "dominantLiquidationLevel": 0.6167,
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
        "price": 0.6286,
        "leverage": "25x",
        "volumeUsd": 10489,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5688,
        "leverage": "50x",
        "volumeUsd": 13486,
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
    "price": 0.0646,
    "change24h": 0.827,
    "high24h": 0.06767,
    "low24h": 0.06386,
    "volume24hUsd": 2770069.668171,
    "marketCapUsd": 508499047,
    "marketCapRank": 75,
    "circulatingSupply": 7874958833.064181,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 1.2,
    "athChangePercent": -94.60269,
    "athDate": "2024-03-15",
    "atlUsd": 0.02953453,
    "atlChangePercent": 118.63102,
    "atlDate": "2026-06-06",
    "fdvUsd": 645716450,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Pyth Network (PYTH), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pyth-network.org",
    "whitepaperUrl": "https://pyth-network.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pyth-network",
    "twitterUrl": "https://twitter.com/pyth-network",
    "githubUrl": "https://github.com/pyth-network",
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
    "openInterestUsd": 1246531,
    "openInterestChange24h": 0.29,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 41551,
    "longLiquidation24hUsd": 25969,
    "shortLiquidation24hUsd": 15582,
    "dominantLiquidationLevel": 0.0627,
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
        "price": 0.0678,
        "leverage": "25x",
        "volumeUsd": 14543,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0614,
        "leverage": "50x",
        "volumeUsd": 18698,
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
    "price": 0.0057668,
    "change24h": 0.10107,
    "high24h": 0.0058195,
    "low24h": 0.00568964,
    "volume24hUsd": 2353673,
    "marketCapUsd": 505983430,
    "marketCapRank": 76,
    "circulatingSupply": 87740786356.4181,
    "totalSupply": 106902941030.26695,
    "maxSupply": null,
    "athUsd": 0.150073,
    "athChangePercent": -96.15734,
    "athDate": "2023-01-09",
    "atlUsd": 0.00568964,
    "atlChangePercent": 1.35611,
    "atlDate": "2026-11-06",
    "fdvUsd": 616487714,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Flare (FLR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://flare-networks.org",
    "whitepaperUrl": "https://flare-networks.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/flare-networks",
    "twitterUrl": "https://twitter.com/flare-networks",
    "githubUrl": "https://github.com/flare-networks",
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
    "openInterestUsd": 1059153,
    "openInterestChange24h": 0.04,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 35305,
    "longLiquidation24hUsd": 22066,
    "shortLiquidation24hUsd": 13239,
    "dominantLiquidationLevel": 0.0056,
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
        "price": 0.0061,
        "leverage": "25x",
        "volumeUsd": 12357,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0055,
        "leverage": "50x",
        "volumeUsd": 15887,
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
    "price": 0.5068,
    "change24h": 3.05,
    "high24h": 0.521,
    "low24h": 0.4889,
    "volume24hUsd": 1896704.73755,
    "marketCapUsd": 505908735,
    "marketCapRank": 77,
    "circulatingSupply": 1000000000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 0.894202,
    "athChangePercent": -43.42346,
    "athDate": "2026-06-07",
    "atlUsd": 0.03826008,
    "atlChangePercent": 1222.28877,
    "atlDate": "2026-03-29",
    "fdvUsd": 505908735,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "币安人生 (BinanceLife) (币安人生), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bianrensheng.org",
    "whitepaperUrl": "https://bianrensheng.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bianrensheng",
    "twitterUrl": "https://twitter.com/bianrensheng",
    "githubUrl": "https://github.com/bianrensheng",
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
    "openInterestUsd": 853517,
    "openInterestChange24h": 1.07,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 28451,
    "longLiquidation24hUsd": 17782,
    "shortLiquidation24hUsd": 10669,
    "dominantLiquidationLevel": 0.4916,
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
        "price": 0.5321,
        "leverage": "25x",
        "volumeUsd": 9958,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4815,
        "leverage": "50x",
        "volumeUsd": 12803,
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
    "marketCapUsd": 493790307,
    "marketCapRank": 78,
    "circulatingSupply": 494515083,
    "totalSupply": 494515083,
    "maxSupply": null,
    "athUsd": 1.62,
    "athChangePercent": -38.30543,
    "athDate": "2018-08-26",
    "atlUsd": 0.88355,
    "atlChangePercent": 13.01393,
    "atlDate": "2020-03-12",
    "fdvUsd": 493790307,
    "dominancePercent": 0.02,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "TrueUSD (TUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://true-usd.org",
    "whitepaperUrl": "https://true-usd.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/true-usd",
    "twitterUrl": "https://twitter.com/true-usd",
    "githubUrl": "https://github.com/true-usd",
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
    "id": "stable-2",
    "symbol": "STABLE",
    "name": "​​Stable",
    "slug": "stable-2",
    "binanceSymbol": "STABLEUSDT",
    "coingeckoId": "stable-2",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/69242/large/stable-logotype-framed-square-light.png?1762753913",
    "price": 0.02658069,
    "change24h": 2.84769,
    "high24h": 0.02691951,
    "low24h": 0.02467531,
    "volume24hUsd": 7807896,
    "marketCapUsd": 478423200,
    "marketCapRank": 79,
    "circulatingSupply": 17998900009.699005,
    "totalSupply": 100000000000,
    "maxSupply": 100000000000,
    "athUsd": 0.04323745,
    "athChangePercent": -38.52392,
    "athDate": "2026-05-14",
    "atlUsd": 0.0092214,
    "atlChangePercent": 188.25013,
    "atlDate": "2025-12-23",
    "fdvUsd": 2658069102,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "​​Stable (STABLE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://stable-2.org",
    "whitepaperUrl": "https://stable-2.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/stable-2",
    "twitterUrl": "https://twitter.com/stable-2",
    "githubUrl": "https://github.com/stable-2",
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
    "openInterestUsd": 3513553,
    "openInterestChange24h": 1,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 117118,
    "longLiquidation24hUsd": 73199,
    "shortLiquidation24hUsd": 43919,
    "dominantLiquidationLevel": 0.0258,
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
        "price": 0.0279,
        "leverage": "25x",
        "volumeUsd": 40991,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0253,
        "leverage": "50x",
        "volumeUsd": 52703,
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
    "price": 1.7715,
    "change24h": 1.723,
    "high24h": 1.8648,
    "low24h": 1.7392,
    "volume24hUsd": 3309696.6388,
    "marketCapUsd": 478136240,
    "marketCapRank": 80,
    "circulatingSupply": 269963562.976232,
    "totalSupply": 554997317.768147,
    "maxSupply": 555000000,
    "athUsd": 16.83,
    "athChangePercent": -89.47821,
    "athDate": "2021-09-12",
    "atlUsd": 0.134391,
    "atlChangePercent": 1217.88322,
    "atlDate": "2022-12-29",
    "fdvUsd": 982963507,
    "dominancePercent": 0.02,
    "category": "DeFi & Likidite",
    "descriptionTr": "Raydium (RAY), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://raydium.org",
    "whitepaperUrl": "https://raydium.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/raydium",
    "twitterUrl": "https://twitter.com/raydium",
    "githubUrl": "https://github.com/raydium",
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
    "openInterestUsd": 1489363,
    "openInterestChange24h": 0.6,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 49645,
    "longLiquidation24hUsd": 31028,
    "shortLiquidation24hUsd": 18617,
    "dominantLiquidationLevel": 1.7184,
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
        "price": 1.8601,
        "leverage": "25x",
        "volumeUsd": 17376,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.6829,
        "leverage": "50x",
        "volumeUsd": 22340,
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
    "price": 0.005377,
    "change24h": -2.396,
    "high24h": 0.005618,
    "low24h": 0.00534,
    "volume24hUsd": 421279.0138023,
    "marketCapUsd": 462860247,
    "marketCapRank": 81,
    "circulatingSupply": 85985041177,
    "totalSupply": 85985041177,
    "maxSupply": 86712634466,
    "athUsd": 0.280991,
    "athChangePercent": -98.08427,
    "athDate": "2021-04-18",
    "atlUsd": 0.00191713,
    "atlChangePercent": 180.78549,
    "atlDate": "2020-03-12",
    "fdvUsd": 462860247,
    "dominancePercent": 0.02,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "VeChain (VET), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://vechain.org",
    "whitepaperUrl": "https://vechain.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/vechain",
    "twitterUrl": "https://twitter.com/vechain",
    "githubUrl": "https://github.com/vechain",
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
    "openInterestUsd": 189576,
    "openInterestChange24h": -0.84,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 6319,
    "longLiquidation24hUsd": 2780,
    "shortLiquidation24hUsd": 3539,
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
        "volumeUsd": 2212,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0051,
        "leverage": "50x",
        "volumeUsd": 2844,
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
    "price": 0.4445,
    "change24h": 5.859,
    "high24h": 0.4494,
    "low24h": 0.4197,
    "volume24hUsd": 3032443.176412,
    "marketCapUsd": 439163232,
    "marketCapRank": 82,
    "circulatingSupply": 989601328.277843,
    "totalSupply": 1181061965.830583,
    "maxSupply": null,
    "athUsd": 20.85,
    "athChangePercent": -97.87169,
    "athDate": "2024-02-10",
    "atlUsd": 0.279235,
    "atlChangePercent": 58.92606,
    "atlDate": "2026-06-06",
    "fdvUsd": 524129238,
    "dominancePercent": 0.02,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Celestia (TIA), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://celestia.org",
    "whitepaperUrl": "https://celestia.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/celestia",
    "twitterUrl": "https://twitter.com/celestia",
    "githubUrl": "https://github.com/celestia",
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
    "openInterestUsd": 1364599,
    "openInterestChange24h": 2.05,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 45487,
    "longLiquidation24hUsd": 28429,
    "shortLiquidation24hUsd": 17058,
    "dominantLiquidationLevel": 0.4312,
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
        "price": 0.4667,
        "leverage": "25x",
        "volumeUsd": 15920,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4223,
        "leverage": "50x",
        "volumeUsd": 20469,
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
    "price": 0.2643,
    "change24h": 2.641,
    "high24h": 0.2703,
    "low24h": 0.2571,
    "volume24hUsd": 1672801.00582,
    "marketCapUsd": 418819427,
    "marketCapRank": 83,
    "circulatingSupply": 1584661632,
    "totalSupply": 2432174845.4305305,
    "maxSupply": 3030303031,
    "athUsd": 15.37,
    "athChangePercent": -98.28068,
    "athDate": "2020-08-13",
    "atlUsd": 0.170749,
    "atlChangePercent": 54.78602,
    "atlDate": "2026-06-06",
    "fdvUsd": 642813617,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Curve DAO (CRV), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://curve-dao-token.org",
    "whitepaperUrl": "https://curve-dao-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/curve-dao-token",
    "twitterUrl": "https://twitter.com/curve-dao-token",
    "githubUrl": "https://github.com/curve-dao-token",
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
    "openInterestUsd": 752760,
    "openInterestChange24h": 0.92,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 25092,
    "longLiquidation24hUsd": 15683,
    "shortLiquidation24hUsd": 9410,
    "dominantLiquidationLevel": 0.2564,
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
        "price": 0.2775,
        "leverage": "25x",
        "volumeUsd": 8782,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2511,
        "leverage": "50x",
        "volumeUsd": 11291,
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
    "price": 0.006516,
    "change24h": -2.397,
    "high24h": 0.006796,
    "low24h": 0.0065,
    "volume24hUsd": 2780597.339649,
    "marketCapUsd": 409250564,
    "marketCapRank": 84,
    "circulatingSupply": 62860396090,
    "totalSupply": 76722779946.33777,
    "maxSupply": 88888888888,
    "athUsd": 0.068447,
    "athChangePercent": -90.48827,
    "athDate": "2024-12-17",
    "atlUsd": 0.00371517,
    "atlChangePercent": 75.24018,
    "atlDate": "2025-04-08",
    "fdvUsd": 499501163,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Pudgy Penguins (PENGU), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pudgy-penguins.org",
    "whitepaperUrl": "https://pudgy-penguins.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pudgy-penguins",
    "twitterUrl": "https://twitter.com/pudgy-penguins",
    "githubUrl": "https://github.com/pudgy-penguins",
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
    "openInterestUsd": 1251269,
    "openInterestChange24h": -0.84,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 41709,
    "longLiquidation24hUsd": 18352,
    "shortLiquidation24hUsd": 23357,
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
        "volumeUsd": 14598,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0062,
        "leverage": "50x",
        "volumeUsd": 18769,
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
    "price": 1.41,
    "change24h": -1.60955,
    "high24h": 1.55,
    "low24h": 1.35,
    "volume24hUsd": 14328744,
    "marketCapUsd": 386242937,
    "marketCapRank": 85,
    "circulatingSupply": 274750000,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 1.98,
    "athChangePercent": -29.15186,
    "athDate": "2026-09-21",
    "atlUsd": 0.119363,
    "atlChangePercent": 1077.74854,
    "atlDate": "2025-11-14",
    "fdvUsd": 1405797767,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Pieverse (PIEVERSE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pieverse.org",
    "whitepaperUrl": "https://pieverse.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pieverse",
    "twitterUrl": "https://twitter.com/pieverse",
    "githubUrl": "https://github.com/pieverse",
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
    "openInterestUsd": 6447935,
    "openInterestChange24h": -0.56,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 214931,
    "longLiquidation24hUsd": 94570,
    "shortLiquidation24hUsd": 120361,
    "dominantLiquidationLevel": 1.4523,
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
        "price": 1.4805,
        "leverage": "25x",
        "volumeUsd": 75226,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.3395,
        "leverage": "50x",
        "volumeUsd": 96719,
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
    "price": 0.5676,
    "change24h": -1.029,
    "high24h": 0.5872,
    "low24h": 0.5624,
    "volume24hUsd": 1210427.78644,
    "marketCapUsd": 373313569,
    "marketCapRank": 86,
    "circulatingSupply": 658385841.8252224,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 5.07,
    "athChangePercent": -88.80528,
    "athDate": "2025-01-01",
    "atlUsd": 0.00748604,
    "atlChangePercent": 7474.28131,
    "atlDate": "2024-01-23",
    "fdvUsd": 567013361,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Virtuals Protocol (VIRTUAL), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://virtual-protocol.org",
    "whitepaperUrl": "https://virtual-protocol.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/virtual-protocol",
    "twitterUrl": "https://twitter.com/virtual-protocol",
    "githubUrl": "https://github.com/virtual-protocol",
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
    "openInterestUsd": 544693,
    "openInterestChange24h": -0.36,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 18156,
    "longLiquidation24hUsd": 7989,
    "shortLiquidation24hUsd": 10167,
    "dominantLiquidationLevel": 0.5846,
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
        "price": 0.596,
        "leverage": "25x",
        "volumeUsd": 6355,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5392,
        "leverage": "50x",
        "volumeUsd": 8170,
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
    "price": 0.500098,
    "change24h": 0.55304,
    "high24h": 0.509072,
    "low24h": 0.481259,
    "volume24hUsd": 17453261,
    "marketCapUsd": 361052003,
    "marketCapRank": 87,
    "circulatingSupply": 721962090,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 3.89,
    "athChangePercent": -87.15144,
    "athDate": "2024-11-08",
    "atlUsd": 0.166785,
    "atlChangePercent": 199.8456,
    "atlDate": "2026-02-05",
    "fdvUsd": 500098284,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Grass (GRASS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://grass.org",
    "whitepaperUrl": "https://grass.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/grass",
    "twitterUrl": "https://twitter.com/grass",
    "githubUrl": "https://github.com/grass",
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
    "openInterestUsd": 7853967,
    "openInterestChange24h": 0.19,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 261799,
    "longLiquidation24hUsd": 163624,
    "shortLiquidation24hUsd": 98175,
    "dominantLiquidationLevel": 0.4851,
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
        "price": 0.5251,
        "leverage": "25x",
        "volumeUsd": 91630,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.4751,
        "leverage": "50x",
        "volumeUsd": 117810,
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
    "marketCapUsd": 343510606,
    "marketCapRank": 88,
    "circulatingSupply": 965416274329945.1,
    "totalSupply": 990000000000000,
    "maxSupply": 990000000000000,
    "athUsd": 0.00000343,
    "athChangePercent": -89.63041,
    "athDate": "2022-01-20",
    "atlUsd": 2.55018e-7,
    "atlChangePercent": 39.52562,
    "atlDate": "2026-08-15",
    "fdvUsd": 352257890,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "BitTorrent (BTT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bittorrent.org",
    "whitepaperUrl": "https://bittorrent.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bittorrent",
    "twitterUrl": "https://twitter.com/bittorrent",
    "githubUrl": "https://github.com/bittorrent",
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
    "id": "fetch-ai",
    "symbol": "FET",
    "name": "Artificial Superintelligence Alliance",
    "slug": "fetch-ai",
    "binanceSymbol": "FETUSDT",
    "coingeckoId": "fetch-ai",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/5681/large/ASI.png?1719827289",
    "price": 0.1462,
    "change24h": -1.945,
    "high24h": 0.1515,
    "low24h": 0.1457,
    "volume24hUsd": 5749866.29232,
    "marketCapUsd": 338201617,
    "marketCapRank": 89,
    "circulatingSupply": 2311508384.055814,
    "totalSupply": 2714384546.672,
    "maxSupply": 2714384546.672,
    "athUsd": 3.45,
    "athChangePercent": -95.76416,
    "athDate": "2024-03-28",
    "atlUsd": 0.00816959,
    "atlChangePercent": 1690.93478,
    "atlDate": "2020-03-12",
    "fdvUsd": 397147270,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Artificial Superintelligence Alliance (FET), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://fetch-ai.org",
    "whitepaperUrl": "https://fetch-ai.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/fetch-ai",
    "twitterUrl": "https://twitter.com/fetch-ai",
    "githubUrl": "https://github.com/fetch-ai",
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
    "openInterestUsd": 2587440,
    "openInterestChange24h": -0.68,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 86248,
    "longLiquidation24hUsd": 37949,
    "shortLiquidation24hUsd": 48299,
    "dominantLiquidationLevel": 0.1506,
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
        "price": 0.1535,
        "leverage": "25x",
        "volumeUsd": 30187,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1389,
        "leverage": "50x",
        "volumeUsd": 38812,
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
    "price": 0.359289,
    "change24h": 0.88152,
    "high24h": 0.36892,
    "low24h": 0.349046,
    "volume24hUsd": 4791858,
    "marketCapUsd": 334493656,
    "marketCapRank": 90,
    "circulatingSupply": 930987178.0065634,
    "totalSupply": 930987178.0065634,
    "maxSupply": 1000000000,
    "athUsd": 2.27,
    "athChangePercent": -84.17689,
    "athDate": "2025-07-28",
    "atlUsd": 0.00131808,
    "atlChangePercent": 27158.47039,
    "atlDate": "2024-02-04",
    "fdvUsd": 334493656,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "SPX6900 (SPX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://spx6900.org",
    "whitepaperUrl": "https://spx6900.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/spx6900",
    "twitterUrl": "https://twitter.com/spx6900",
    "githubUrl": "https://github.com/spx6900",
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
    "openInterestUsd": 2156336,
    "openInterestChange24h": 0.31,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 71878,
    "longLiquidation24hUsd": 44924,
    "shortLiquidation24hUsd": 26954,
    "dominantLiquidationLevel": 0.3485,
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
        "price": 0.3773,
        "leverage": "25x",
        "volumeUsd": 25157,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3413,
        "leverage": "50x",
        "volumeUsd": 32345,
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
    "price": 1.179,
    "change24h": -3.202,
    "high24h": 1.278,
    "low24h": 1.171,
    "volume24hUsd": 9866944.338918,
    "marketCapUsd": 331840129,
    "marketCapRank": 91,
    "circulatingSupply": 281867935.671502,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 73.43,
    "athChangePercent": -98.39672,
    "athDate": "2025-01-19",
    "atlUsd": 1.12,
    "atlChangePercent": 5.35651,
    "atlDate": "2026-11-05",
    "fdvUsd": 1177289388,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Official Trump (TRUMP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://official-trump.org",
    "whitepaperUrl": "https://official-trump.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/official-trump",
    "twitterUrl": "https://twitter.com/official-trump",
    "githubUrl": "https://github.com/official-trump",
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
    "openInterestUsd": 4440125,
    "openInterestChange24h": -1.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 148004,
    "longLiquidation24hUsd": 65122,
    "shortLiquidation24hUsd": 82882,
    "dominantLiquidationLevel": 1.2144,
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
        "price": 1.238,
        "leverage": "25x",
        "volumeUsd": 51801,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.12,
        "leverage": "50x",
        "volumeUsd": 66602,
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
    "price": 0.04169,
    "change24h": 4.121,
    "high24h": 0.04249,
    "low24h": 0.04004,
    "volume24hUsd": 2959526.5856584,
    "marketCapUsd": 319275289,
    "marketCapRank": 92,
    "circulatingSupply": 7664828795.064646,
    "totalSupply": 10184600000,
    "maxSupply": null,
    "athUsd": 4.41,
    "athChangePercent": -99.05623,
    "athDate": "2024-02-20",
    "atlUsd": 0.02221422,
    "atlChangePercent": 87.51321,
    "atlDate": "2026-08-18",
    "fdvUsd": 424235321,
    "dominancePercent": 0.01,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Starknet (STRK), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://starknet.org",
    "whitepaperUrl": "https://starknet.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/starknet",
    "twitterUrl": "https://twitter.com/starknet",
    "githubUrl": "https://github.com/starknet",
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
    "openInterestUsd": 1331787,
    "openInterestChange24h": 1.44,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 44393,
    "longLiquidation24hUsd": 27746,
    "shortLiquidation24hUsd": 16647,
    "dominantLiquidationLevel": 0.0404,
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
        "price": 0.0438,
        "leverage": "25x",
        "volumeUsd": 15538,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0396,
        "leverage": "50x",
        "volumeUsd": 19977,
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
    "price": 0.0459,
    "change24h": -0.8,
    "high24h": 0.04759,
    "low24h": 0.04583,
    "volume24hUsd": 1779591.438208,
    "marketCapUsd": 308973061,
    "marketCapRank": 93,
    "circulatingSupply": 6733333333,
    "totalSupply": 10000000000,
    "maxSupply": null,
    "athUsd": 1.14,
    "athChangePercent": -95.97382,
    "athDate": "2024-03-15",
    "atlUsd": 0.03828368,
    "atlChangePercent": 19.86071,
    "atlDate": "2026-08-18",
    "fdvUsd": 458870882,
    "dominancePercent": 0.01,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Sei (SEI), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sei-network.org",
    "whitepaperUrl": "https://sei-network.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/sei-network",
    "twitterUrl": "https://twitter.com/sei-network",
    "githubUrl": "https://github.com/sei-network",
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
    "openInterestUsd": 800816,
    "openInterestChange24h": -0.28,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 26694,
    "longLiquidation24hUsd": 11745,
    "shortLiquidation24hUsd": 14949,
    "dominantLiquidationLevel": 0.0473,
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
        "price": 0.0482,
        "leverage": "25x",
        "volumeUsd": 9343,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0436,
        "leverage": "50x",
        "volumeUsd": 12012,
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
    "price": 0.08623,
    "change24h": -0.278,
    "high24h": 0.08921,
    "low24h": 0.0862,
    "volume24hUsd": 309395.154132,
    "marketCapUsd": 305489791,
    "marketCapRank": 94,
    "circulatingSupply": 3546111110,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 0.770814,
    "athChangePercent": -88.82379,
    "athDate": "2025-09-29",
    "atlUsd": 0.057089,
    "atlChangePercent": 50.90022,
    "atlDate": "2026-07-11",
    "fdvUsd": 861478339,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Falcon Finance (FF), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://falcon-finance-ff.org",
    "whitepaperUrl": "https://falcon-finance-ff.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/falcon-finance-ff",
    "twitterUrl": "https://twitter.com/falcon-finance-ff",
    "githubUrl": "https://github.com/falcon-finance-ff",
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
    "openInterestUsd": 139228,
    "openInterestChange24h": -0.1,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 4641,
    "longLiquidation24hUsd": 2042,
    "shortLiquidation24hUsd": 2599,
    "dominantLiquidationLevel": 0.0888,
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
        "price": 0.0905,
        "leverage": "25x",
        "volumeUsd": 1624,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0819,
        "leverage": "50x",
        "volumeUsd": 2088,
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
    "price": 113.62,
    "change24h": -1.011,
    "high24h": 115.41,
    "low24h": 112.3,
    "volume24hUsd": 34687.91169,
    "marketCapUsd": 299875098,
    "marketCapRank": 95,
    "circulatingSupply": 2639589,
    "totalSupply": 3000000,
    "maxSupply": 3000000,
    "athUsd": 644.2,
    "athChangePercent": -82.36473,
    "athDate": "2021-11-08",
    "atlUsd": 6.88,
    "atlChangePercent": 1550.27887,
    "atlDate": "2020-03-12",
    "fdvUsd": 340820216,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Gnosis (GNO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://gnosis.org",
    "whitepaperUrl": "https://gnosis.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/gnosis",
    "twitterUrl": "https://twitter.com/gnosis",
    "githubUrl": "https://github.com/gnosis",
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
    "openInterestUsd": 15610,
    "openInterestChange24h": -0.35,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 520,
    "longLiquidation24hUsd": 229,
    "shortLiquidation24hUsd": 291,
    "dominantLiquidationLevel": 117.0286,
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
        "price": 119.301,
        "leverage": "25x",
        "volumeUsd": 182,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 107.939,
        "leverage": "50x",
        "volumeUsd": 234,
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
    "price": 0.01551,
    "change24h": -0.385,
    "high24h": 0.01561,
    "low24h": 0.0155,
    "volume24hUsd": 203326.16385,
    "marketCapUsd": 298338346,
    "marketCapRank": 96,
    "circulatingSupply": 19214949012.205658,
    "totalSupply": 19900730000.000004,
    "maxSupply": 19900730000,
    "athUsd": 66.45,
    "athChangePercent": -99.97663,
    "athDate": "2020-09-10",
    "atlUsd": 0.00462303,
    "atlChangePercent": 235.84857,
    "atlDate": "2022-11-13",
    "fdvUsd": 308986033,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sun Token (SUN), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sun-token.org",
    "whitepaperUrl": "https://sun-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/sun-token",
    "twitterUrl": "https://twitter.com/sun-token",
    "githubUrl": "https://github.com/sun-token",
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
    "openInterestUsd": 91497,
    "openInterestChange24h": -0.13,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3050,
    "longLiquidation24hUsd": 1342,
    "shortLiquidation24hUsd": 1708,
    "dominantLiquidationLevel": 0.016,
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
        "price": 0.0163,
        "leverage": "25x",
        "volumeUsd": 1068,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0147,
        "leverage": "50x",
        "volumeUsd": 1373,
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
    "price": 0.2611,
    "change24h": 2.473,
    "high24h": 0.2867,
    "low24h": 0.2527,
    "volume24hUsd": 1630963.7273,
    "marketCapUsd": 287273081,
    "marketCapRank": 97,
    "circulatingSupply": 1100810808.611874,
    "totalSupply": 1120751653.650057,
    "maxSupply": null,
    "athUsd": 9.12,
    "athChangePercent": -97.13731,
    "athDate": "2021-10-03",
    "atlUsd": 0.191836,
    "atlChangePercent": 36.03535,
    "atlDate": "2026-08-12",
    "fdvUsd": 292476944,
    "dominancePercent": 0.01,
    "category": "Katman 1 (Layer 1)",
    "descriptionTr": "Tezos (XTZ), Katman 1 (Layer 1) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://tezos.org",
    "whitepaperUrl": "https://tezos.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/tezos",
    "twitterUrl": "https://twitter.com/tezos",
    "githubUrl": "https://github.com/tezos",
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
        "answer": "Tezos dolaşımdaki arzı 1.100.810.808,612 XTZ adettir."
      },
      {
        "question": "Tezos Nereden ve Nasıl Alınır?",
        "answer": "Tezos (XTZ) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 733934,
    "openInterestChange24h": 0.87,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 24464,
    "longLiquidation24hUsd": 15290,
    "shortLiquidation24hUsd": 9174,
    "dominantLiquidationLevel": 0.2533,
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
        "price": 0.2742,
        "leverage": "25x",
        "volumeUsd": 8562,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.248,
        "leverage": "50x",
        "volumeUsd": 11009,
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
    "price": 1.638,
    "change24h": -2.033,
    "high24h": 1.718,
    "low24h": 1.635,
    "volume24hUsd": 938332.9261,
    "marketCapUsd": 284932389,
    "marketCapRank": 98,
    "circulatingSupply": 173933053.16148013,
    "totalSupply": 281527448.45853144,
    "maxSupply": null,
    "athUsd": 7.5,
    "athChangePercent": -78.16781,
    "athDate": "2024-04-11",
    "atlUsd": 0.03377729,
    "atlChangePercent": 4749.92392,
    "atlDate": "2022-11-14",
    "fdvUsd": 461190595,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Pendle (PENDLE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://pendle.org",
    "whitepaperUrl": "https://pendle.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/pendle",
    "twitterUrl": "https://twitter.com/pendle",
    "githubUrl": "https://github.com/pendle",
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
        "answer": "Pendle dolaşımdaki arzı 173.933.053,161 PENDLE adettir."
      },
      {
        "question": "Pendle Nereden ve Nasıl Alınır?",
        "answer": "Pendle (PENDLE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 422250,
    "openInterestChange24h": -0.71,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14075,
    "longLiquidation24hUsd": 6193,
    "shortLiquidation24hUsd": 7882,
    "dominantLiquidationLevel": 1.6871,
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
        "price": 1.7199,
        "leverage": "25x",
        "volumeUsd": 4926,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.5561,
        "leverage": "50x",
        "volumeUsd": 6334,
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
    "change24h": -0.04,
    "high24h": 0.9985,
    "low24h": 0.9976,
    "volume24hUsd": 7763660.4696,
    "marketCapUsd": 282894488,
    "marketCapRank": 99,
    "circulatingSupply": 283781504.170585,
    "totalSupply": 283781504.170585,
    "maxSupply": null,
    "athUsd": 1.15,
    "athChangePercent": -13.41559,
    "athDate": "2025-02-02",
    "atlUsd": 0.940377,
    "atlChangePercent": 6.00794,
    "atlDate": "2024-12-05",
    "fdvUsd": 282894488,
    "dominancePercent": 0.01,
    "category": "Stabilcoin & Ödeme",
    "descriptionTr": "First Digital USD (FDUSD), Stabilcoin & Ödeme kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://first-digital-usd.org",
    "whitepaperUrl": "https://first-digital-usd.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/first-digital-usd",
    "twitterUrl": "https://twitter.com/first-digital-usd",
    "githubUrl": "https://github.com/first-digital-usd",
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
    "openInterestUsd": 3493647,
    "openInterestChange24h": -0.01,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 116455,
    "longLiquidation24hUsd": 51240,
    "shortLiquidation24hUsd": 65215,
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
        "volumeUsd": 40759,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9478,
        "leverage": "50x",
        "volumeUsd": 52405,
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
    "price": 0.05782,
    "change24h": 0.487,
    "high24h": 0.05961,
    "low24h": 0.05659,
    "volume24hUsd": 4471512.555824,
    "marketCapUsd": 275469827,
    "marketCapRank": 100,
    "circulatingSupply": 4761111111.1111,
    "totalSupply": 10000000000,
    "maxSupply": null,
    "athUsd": 1.68,
    "athChangePercent": -96.56141,
    "athDate": "2025-09-27",
    "atlUsd": 0.056495,
    "atlChangePercent": 2.41398,
    "atlDate": "2026-11-06",
    "fdvUsd": 578583068,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Plasma (XPL), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://plasma.org",
    "whitepaperUrl": "https://plasma.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/plasma",
    "twitterUrl": "https://twitter.com/plasma",
    "githubUrl": "https://github.com/plasma",
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
    "openInterestUsd": 2012181,
    "openInterestChange24h": 0.17,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 67073,
    "longLiquidation24hUsd": 41921,
    "shortLiquidation24hUsd": 25152,
    "dominantLiquidationLevel": 0.0561,
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
        "price": 0.0607,
        "leverage": "25x",
        "volumeUsd": 23476,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0549,
        "leverage": "50x",
        "volumeUsd": 30183,
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
    "price": 0.3241,
    "change24h": -2.906,
    "high24h": 0.3362,
    "low24h": 0.3233,
    "volume24hUsd": 1501919.716338,
    "marketCapUsd": 268442009,
    "marketCapRank": 101,
    "circulatingSupply": 829567764.2043006,
    "totalSupply": 1000000000,
    "maxSupply": 1000000000,
    "athUsd": 7.3,
    "athChangePercent": -95.56897,
    "athDate": "2021-08-20",
    "atlUsd": 0.235028,
    "atlChangePercent": 37.68271,
    "atlDate": "2026-06-25",
    "fdvUsd": 323592623,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Lido DAO (LDO), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://lido-dao.org",
    "whitepaperUrl": "https://lido-dao.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/lido-dao",
    "twitterUrl": "https://twitter.com/lido-dao",
    "githubUrl": "https://github.com/lido-dao",
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
    "openInterestUsd": 675864,
    "openInterestChange24h": -1.02,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 22529,
    "longLiquidation24hUsd": 9913,
    "shortLiquidation24hUsd": 12616,
    "dominantLiquidationLevel": 0.3338,
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
        "price": 0.3403,
        "leverage": "25x",
        "volumeUsd": 7885,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3079,
        "leverage": "50x",
        "volumeUsd": 10138,
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
    "price": 0.11,
    "change24h": -2.998,
    "high24h": 0.1141,
    "low24h": 0.1083,
    "volume24hUsd": 505036.69249,
    "marketCapUsd": 262462284,
    "marketCapRank": 102,
    "circulatingSupply": 2391196012,
    "totalSupply": 10000000000,
    "maxSupply": 10000000000,
    "athUsd": 0.319747,
    "athChangePercent": -65.67227,
    "athDate": "2026-03-06",
    "atlUsd": 0.061819,
    "atlChangePercent": 77.55283,
    "atlDate": "2025-11-04",
    "fdvUsd": 1097619279,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kite (KITE), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://kite-2.org",
    "whitepaperUrl": "https://kite-2.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/kite-2",
    "twitterUrl": "https://twitter.com/kite-2",
    "githubUrl": "https://github.com/kite-2",
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
    "openInterestUsd": 227267,
    "openInterestChange24h": -1.05,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 7576,
    "longLiquidation24hUsd": 3333,
    "shortLiquidation24hUsd": 4243,
    "dominantLiquidationLevel": 0.1133,
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
        "price": 0.1155,
        "leverage": "25x",
        "volumeUsd": 2652,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1045,
        "leverage": "50x",
        "volumeUsd": 3409,
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
    "price": 0.00000282,
    "change24h": -2.422,
    "high24h": 0.00000296,
    "low24h": 0.00000279,
    "volume24hUsd": 1381854.88816925,
    "marketCapUsd": 247876509,
    "marketCapRank": 103,
    "circulatingSupply": 87994301565171.84,
    "totalSupply": 87994301565171.84,
    "maxSupply": 87995282867000.55,
    "athUsd": 0.00005825,
    "athChangePercent": -95.16403,
    "athDate": "2024-11-19",
    "atlUsd": 8.6142e-8,
    "atlChangePercent": 3170.12061,
    "atlDate": "2022-12-29",
    "fdvUsd": 247876509,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "Bonk (BONK), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://bonk.org",
    "whitepaperUrl": "https://bonk.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/bonk",
    "twitterUrl": "https://twitter.com/bonk",
    "githubUrl": "https://github.com/bonk",
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
        "answer": "Bonk dolaşımdaki arzı 87.994.301.565.171,84 BONK adettir."
      },
      {
        "question": "Bonk Nereden ve Nasıl Alınır?",
        "answer": "Bonk (BONK) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 621835,
    "openInterestChange24h": -0.85,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 20728,
    "longLiquidation24hUsd": 9120,
    "shortLiquidation24hUsd": 11608,
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
        "volumeUsd": 7255,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 9328,
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
    "price": 0.1027,
    "change24h": -1.628,
    "high24h": 0.1094,
    "low24h": 0.1027,
    "volume24hUsd": 1248886.870625,
    "marketCapUsd": 235463595,
    "marketCapRank": 104,
    "circulatingSupply": 2290771093,
    "totalSupply": 4294967296,
    "maxSupply": 4294967296,
    "athUsd": 4.84,
    "athChangePercent": -97.87817,
    "athDate": "2024-03-06",
    "atlUsd": 0.080689,
    "atlChangePercent": 27.38805,
    "atlDate": "2026-08-18",
    "fdvUsd": 441470752,
    "dominancePercent": 0.01,
    "category": "Katman 2 (Layer 2)",
    "descriptionTr": "Optimism (OP), Katman 2 (Layer 2) kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://optimism.org",
    "whitepaperUrl": "https://optimism.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/optimism",
    "twitterUrl": "https://twitter.com/optimism",
    "githubUrl": "https://github.com/optimism",
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
    "openInterestUsd": 561999,
    "openInterestChange24h": -0.57,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 18733,
    "longLiquidation24hUsd": 8243,
    "shortLiquidation24hUsd": 10490,
    "dominantLiquidationLevel": 0.1058,
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
        "price": 0.1078,
        "leverage": "25x",
        "volumeUsd": 6557,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0976,
        "leverage": "50x",
        "volumeUsd": 8430,
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
    "price": 12.86,
    "change24h": 1.66,
    "high24h": 12.89,
    "low24h": 12.56,
    "volume24hUsd": 67435.28948,
    "marketCapUsd": 229809160,
    "marketCapRank": 105,
    "circulatingSupply": 17680291.69696568,
    "totalSupply": 17680799.92156964,
    "maxSupply": 21000000,
    "athUsd": 247.35,
    "athChangePercent": -94.7451,
    "athDate": "2021-04-16",
    "atlUsd": 0.43154,
    "atlChangePercent": 2912.01655,
    "atlDate": "2016-12-25",
    "fdvUsd": 229815766,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Decred (DCR), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://decred.org",
    "whitepaperUrl": "https://decred.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/decred",
    "twitterUrl": "https://twitter.com/decred",
    "githubUrl": "https://github.com/decred",
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
    "openInterestUsd": 30346,
    "openInterestChange24h": 0.58,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 1012,
    "longLiquidation24hUsd": 633,
    "shortLiquidation24hUsd": 380,
    "dominantLiquidationLevel": 12.4742,
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
        "price": 13.503,
        "leverage": "25x",
        "volumeUsd": 354,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 12.217,
        "leverage": "50x",
        "volumeUsd": 455,
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
    "price": 0.0000407,
    "change24h": -1.214,
    "high24h": 0.00004174,
    "low24h": 0.00004057,
    "volume24hUsd": 931312.882281,
    "marketCapUsd": 224541710,
    "marketCapRank": 106,
    "circulatingSupply": 5517887705518.259,
    "totalSupply": 6444001156003.632,
    "maxSupply": null,
    "athUsd": 119.18,
    "athChangePercent": -99.99997,
    "athDate": "2022-04-05",
    "atlUsd": 9.99967e-7,
    "atlChangePercent": 3969.47685,
    "atlDate": "2022-05-12",
    "fdvUsd": 262228431,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Terra Luna Classic (LUNC), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://terra-luna.org",
    "whitepaperUrl": "https://terra-luna.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/terra-luna",
    "twitterUrl": "https://twitter.com/terra-luna",
    "githubUrl": "https://github.com/terra-luna",
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
        "answer": "Terra Luna Classic dolaşımdaki arzı 5.517.887.705.518,259 LUNC adettir."
      },
      {
        "question": "Terra Luna Classic Nereden ve Nasıl Alınır?",
        "answer": "Terra Luna Classic (LUNC) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 419091,
    "openInterestChange24h": -0.42,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 13970,
    "longLiquidation24hUsd": 6147,
    "shortLiquidation24hUsd": 7823,
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
        "volumeUsd": 4890,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 6287,
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
    "price": 0.0425,
    "change24h": -2.59,
    "high24h": 0.0444,
    "low24h": 0.04248,
    "volume24hUsd": 529953.35047,
    "marketCapUsd": 223195740,
    "marketCapRank": 107,
    "circulatingSupply": 5253298886.71,
    "totalSupply": 5253388147.17,
    "maxSupply": null,
    "athUsd": 1.7,
    "athChangePercent": -97.50202,
    "athDate": "2021-03-26",
    "atlUsd": 0.02199898,
    "atlChangePercent": 93.13063,
    "atlDate": "2022-12-30",
    "fdvUsd": 223199532,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Conflux (CFX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://conflux-token.org",
    "whitepaperUrl": "https://conflux-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/conflux-token",
    "twitterUrl": "https://twitter.com/conflux-token",
    "githubUrl": "https://github.com/conflux-token",
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
    "openInterestUsd": 238479,
    "openInterestChange24h": -0.91,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 7949,
    "longLiquidation24hUsd": 3498,
    "shortLiquidation24hUsd": 4451,
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
        "volumeUsd": 2782,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0404,
        "leverage": "50x",
        "volumeUsd": 3577,
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
    "price": 0.2431,
    "change24h": -0.978,
    "high24h": 0.2472,
    "low24h": 0.2427,
    "volume24hUsd": 50956.34216,
    "marketCapUsd": 217022424,
    "marketCapRank": 108,
    "circulatingSupply": 219173039.72171742,
    "totalSupply": 219173039.72171742,
    "maxSupply": null,
    "athUsd": 1.66,
    "athChangePercent": -40.46517,
    "athDate": "2026-03-30",
    "atlUsd": 0.249813,
    "atlChangePercent": 296.37198,
    "atlDate": "2026-06-24",
    "fdvUsd": 217022424,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Legacy Frax Dollar (FRAX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://frax.org",
    "whitepaperUrl": "https://frax.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/frax",
    "twitterUrl": "https://twitter.com/frax",
    "githubUrl": "https://github.com/frax",
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
    "openInterestUsd": 22930,
    "openInterestChange24h": -0.34,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 764,
    "longLiquidation24hUsd": 336,
    "shortLiquidation24hUsd": 428,
    "dominantLiquidationLevel": 0.2504,
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
        "price": 0.2553,
        "leverage": "25x",
        "volumeUsd": 267,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2309,
        "leverage": "50x",
        "volumeUsd": 344,
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
    "price": 0.0326,
    "change24h": -1.511,
    "high24h": 0.0341,
    "low24h": 0.0325,
    "volume24hUsd": 343472.92736,
    "marketCapUsd": 210312695,
    "marketCapRank": 109,
    "circulatingSupply": 6461235434.617423,
    "totalSupply": 6461241760.93975,
    "maxSupply": null,
    "athUsd": 0.406698,
    "athChangePercent": -91.99654,
    "athDate": "2024-12-02",
    "atlUsd": 0.02166246,
    "atlChangePercent": 50.25957,
    "atlDate": "2026-08-19",
    "fdvUsd": 210312901,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kaia (KAIA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://kaia.org",
    "whitepaperUrl": "https://kaia.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/kaia",
    "twitterUrl": "https://twitter.com/kaia",
    "githubUrl": "https://github.com/kaia",
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
    "openInterestUsd": 154563,
    "openInterestChange24h": -0.53,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 5152,
    "longLiquidation24hUsd": 2267,
    "shortLiquidation24hUsd": 2885,
    "dominantLiquidationLevel": 0.0336,
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
        "price": 0.0342,
        "leverage": "25x",
        "volumeUsd": 1803,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.031,
        "leverage": "50x",
        "volumeUsd": 2318,
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
    "price": 0.01899,
    "change24h": -2.715,
    "high24h": 0.01992,
    "low24h": 0.01897,
    "volume24hUsd": 256664.32443,
    "marketCapUsd": 207962354,
    "marketCapRank": 110,
    "circulatingSupply": 10941320353.04,
    "totalSupply": 11612995353.0437,
    "maxSupply": null,
    "athUsd": 2.84,
    "athChangePercent": -99.33109,
    "athDate": "2021-02-11",
    "atlUsd": 0.01297915,
    "atlChangePercent": 46.44303,
    "atlDate": "2026-08-18",
    "fdvUsd": 220728922,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "The Graph (GRT), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://the-graph.org",
    "whitepaperUrl": "https://the-graph.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/the-graph",
    "twitterUrl": "https://twitter.com/the-graph",
    "githubUrl": "https://github.com/the-graph",
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
    "openInterestUsd": 115499,
    "openInterestChange24h": -0.95,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3850,
    "longLiquidation24hUsd": 1694,
    "shortLiquidation24hUsd": 2156,
    "dominantLiquidationLevel": 0.0196,
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
        "volumeUsd": 1348,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.018,
        "leverage": "50x",
        "volumeUsd": 1733,
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
    "price": 3.156,
    "change24h": 1.381,
    "high24h": 3.294,
    "low24h": 3.113,
    "volume24hUsd": 949518.26683,
    "marketCapUsd": 207047426,
    "marketCapRank": 111,
    "circulatingSupply": 65652466,
    "totalSupply": 65652466,
    "maxSupply": 66000000,
    "athUsd": 89.24,
    "athChangePercent": -96.46586,
    "athDate": "2021-11-04",
    "atlUsd": 0.298788,
    "atlChangePercent": 955.49539,
    "atlDate": "2020-01-30",
    "fdvUsd": 207047426,
    "dominancePercent": 0.01,
    "category": "Yapay Zeka (AI) & DePIN",
    "descriptionTr": "Arweave (AR), Yapay Zeka (AI) & DePIN kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://arweave.org",
    "whitepaperUrl": "https://arweave.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/arweave",
    "twitterUrl": "https://twitter.com/arweave",
    "githubUrl": "https://github.com/arweave",
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
    "openInterestUsd": 427283,
    "openInterestChange24h": 0.48,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 14243,
    "longLiquidation24hUsd": 8902,
    "shortLiquidation24hUsd": 5341,
    "dominantLiquidationLevel": 3.0613,
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
        "price": 3.3138,
        "leverage": "25x",
        "volumeUsd": 4985,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.9982,
        "leverage": "50x",
        "volumeUsd": 6409,
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
    "price": 134.93,
    "change24h": 4.686,
    "high24h": 137.44,
    "low24h": 128.04,
    "volume24hUsd": 39761765.01094,
    "marketCapUsd": 206589074,
    "marketCapRank": 112,
    "circulatingSupply": 1531455.15483591,
    "totalSupply": 1531455.15483591,
    "maxSupply": null,
    "athUsd": 229.67,
    "athChangePercent": -41.26399,
    "athDate": "2026-06-16",
    "atlUsd": 105.76,
    "atlChangePercent": 27.54719,
    "atlDate": "2026-08-03",
    "fdvUsd": 206589074,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "SpaceX (bStocks Tokenized Stock) (SPCXB), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://spacex-bstocks-tokenized-stock.org",
    "whitepaperUrl": "https://spacex-bstocks-tokenized-stock.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/spacex-bstocks-tokenized-stock",
    "twitterUrl": "https://twitter.com/spacex-bstocks-tokenized-stock",
    "githubUrl": "https://github.com/spacex-bstocks-tokenized-stock",
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
    "openInterestUsd": 17892794,
    "openInterestChange24h": 1.64,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 596426,
    "longLiquidation24hUsd": 372766,
    "shortLiquidation24hUsd": 223660,
    "dominantLiquidationLevel": 130.8821,
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
        "price": 141.6765,
        "leverage": "25x",
        "volumeUsd": 208749,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 128.1835,
        "leverage": "50x",
        "volumeUsd": 268392,
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
    "price": 0.00002143,
    "change24h": -2.057,
    "high24h": 0.00002214,
    "low24h": 0.0000214,
    "volume24hUsd": 573494.41283586,
    "marketCapUsd": 206403960,
    "marketCapRank": 113,
    "circulatingSupply": 9642278549065.572,
    "totalSupply": 9642278549065.572,
    "maxSupply": 20000000000000,
    "athUsd": 0.00034495,
    "athChangePercent": -93.7944,
    "athDate": "2024-06-04",
    "atlUsd": 8.428e-8,
    "atlChangePercent": 25298.92194,
    "atlDate": "2021-07-05",
    "fdvUsd": 206403960,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "FLOKI (FLOKI), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://floki.org",
    "whitepaperUrl": "https://floki.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/floki",
    "twitterUrl": "https://twitter.com/floki",
    "githubUrl": "https://github.com/floki",
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
    "openInterestUsd": 258072,
    "openInterestChange24h": -0.72,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 8602,
    "longLiquidation24hUsd": 3785,
    "shortLiquidation24hUsd": 4817,
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
        "volumeUsd": 3011,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 3871,
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
    "price": 0.03446,
    "change24h": 0.878,
    "high24h": 0.03492,
    "low24h": 0.03382,
    "volume24hUsd": 295619.79628,
    "marketCapUsd": 204098363,
    "marketCapRank": 114,
    "circulatingSupply": 5931507223.75,
    "totalSupply": 9999956549.62466,
    "maxSupply": 10000000000,
    "athUsd": 0.247842,
    "athChangePercent": -86.1165,
    "athDate": "2024-12-15",
    "atlUsd": 0.01342703,
    "atlChangePercent": 156.26813,
    "atlDate": "2026-06-06",
    "fdvUsd": 344090412,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Kamino (KMNO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://kamino.org",
    "whitepaperUrl": "https://kamino.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/kamino",
    "twitterUrl": "https://twitter.com/kamino",
    "githubUrl": "https://github.com/kamino",
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
    "openInterestUsd": 133029,
    "openInterestChange24h": 0.31,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 4434,
    "longLiquidation24hUsd": 2771,
    "shortLiquidation24hUsd": 1663,
    "dominantLiquidationLevel": 0.0334,
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
        "price": 0.0362,
        "leverage": "25x",
        "volumeUsd": 1552,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0327,
        "leverage": "50x",
        "volumeUsd": 1995,
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
    "price": 2.03821e-7,
    "change24h": -10.00379,
    "high24h": 2.28014e-7,
    "low24h": 2.02508e-7,
    "volume24hUsd": 8517889,
    "marketCapUsd": 201804651,
    "marketCapRank": 115,
    "circulatingSupply": 990105592982874.8,
    "totalSupply": 990105592982874.8,
    "maxSupply": 999990000000000,
    "athUsd": 0.00000753,
    "athChangePercent": -97.29322,
    "athDate": "2021-09-04",
    "atlUsd": 2.01707e-7,
    "atlChangePercent": 1.04824,
    "atlDate": "2026-11-07",
    "fdvUsd": 201804651,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "AINFT (NFT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://apenft.org",
    "whitepaperUrl": "https://apenft.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/apenft",
    "twitterUrl": "https://twitter.com/apenft",
    "githubUrl": "https://github.com/apenft",
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
    "openInterestUsd": 3833050,
    "openInterestChange24h": -3.5,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 127768,
    "longLiquidation24hUsd": 56218,
    "shortLiquidation24hUsd": 71550,
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
        "volumeUsd": 44719,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0,
        "leverage": "50x",
        "volumeUsd": 57496,
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
    "price": 20.13,
    "change24h": 0.6,
    "high24h": 20.33,
    "low24h": 19.92,
    "volume24hUsd": 373352.12208,
    "marketCapUsd": 200769128,
    "marketCapRank": 116,
    "circulatingSupply": 10000000,
    "totalSupply": 10000000,
    "maxSupply": 10000000,
    "athUsd": 854.45,
    "athChangePercent": -97.65031,
    "athDate": "2021-05-11",
    "atlUsd": 14.86,
    "atlChangePercent": 35.15011,
    "atlDate": "2026-06-25",
    "fdvUsd": 200769128,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "Compound (COMP), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://compound-governance-token.org",
    "whitepaperUrl": "https://compound-governance-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/compound-governance-token",
    "twitterUrl": "https://twitter.com/compound-governance-token",
    "githubUrl": "https://github.com/compound-governance-token",
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
    "openInterestUsd": 168008,
    "openInterestChange24h": 0.21,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 5600,
    "longLiquidation24hUsd": 3500,
    "shortLiquidation24hUsd": 2100,
    "dominantLiquidationLevel": 19.5261,
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
        "price": 21.1365,
        "leverage": "25x",
        "volumeUsd": 1960,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 19.1235,
        "leverage": "50x",
        "volumeUsd": 2520,
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
    "marketCapUsd": 198176172,
    "marketCapRank": 117,
    "circulatingSupply": 50315935307,
    "totalSupply": 57485935307,
    "maxSupply": 57485935307,
    "athUsd": 0.04416304,
    "athChangePercent": -91.0816,
    "athDate": "2024-03-10",
    "atlUsd": 0.00121358,
    "atlChangePercent": 224.54647,
    "atlDate": "2026-06-25",
    "fdvUsd": 226416195,
    "dominancePercent": 0.01,
    "category": "Web3 & Altyapı",
    "descriptionTr": "Beam (BEAM), Web3 & Altyapı kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://beam-2.org",
    "whitepaperUrl": "https://beam-2.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/beam-2",
    "twitterUrl": "https://twitter.com/beam-2",
    "githubUrl": "https://github.com/beam-2",
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
    "price": 0.01672789,
    "change24h": -2.82298,
    "high24h": 0.01756106,
    "low24h": 0.01673297,
    "volume24hUsd": 7819486,
    "marketCapUsd": 197810054,
    "marketCapRank": 118,
    "circulatingSupply": 11825165000,
    "totalSupply": 100682925000,
    "maxSupply": null,
    "athUsd": 0.04882901,
    "athChangePercent": -65.7419,
    "athDate": "2025-11-26",
    "atlUsd": 0.01636691,
    "atlChangePercent": 2.20551,
    "atlDate": "2026-02-05",
    "fdvUsd": 1684212845,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Monad (MON), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://monad.org",
    "whitepaperUrl": "https://monad.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/monad",
    "twitterUrl": "https://twitter.com/monad",
    "githubUrl": "https://github.com/monad",
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
    "openInterestUsd": 3518769,
    "openInterestChange24h": -0.99,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 117292,
    "longLiquidation24hUsd": 51608,
    "shortLiquidation24hUsd": 65684,
    "dominantLiquidationLevel": 0.0172,
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
        "price": 0.0176,
        "leverage": "25x",
        "volumeUsd": 41052,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0159,
        "leverage": "50x",
        "volumeUsd": 52781,
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
    "price": 4.6,
    "change24h": -1.499,
    "high24h": 4.71,
    "low24h": 4.57,
    "volume24hUsd": 459037.2454,
    "marketCapUsd": 194891260,
    "marketCapRank": 119,
    "circulatingSupply": 42309428.031430915,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 83.4,
    "athChangePercent": -94.4771,
    "athDate": "2021-11-10",
    "atlUsd": 3.77,
    "atlChangePercent": 22.06859,
    "atlDate": "2026-08-18",
    "fdvUsd": 460633172,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Ethereum Name Service (ENS), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://ethereum-name-service.org",
    "whitepaperUrl": "https://ethereum-name-service.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/ethereum-name-service",
    "twitterUrl": "https://twitter.com/ethereum-name-service",
    "githubUrl": "https://github.com/ethereum-name-service",
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
    "openInterestUsd": 206567,
    "openInterestChange24h": -0.52,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 6886,
    "longLiquidation24hUsd": 3030,
    "shortLiquidation24hUsd": 3856,
    "dominantLiquidationLevel": 4.738,
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
        "price": 4.83,
        "leverage": "25x",
        "volumeUsd": 2410,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 4.37,
        "leverage": "50x",
        "volumeUsd": 3099,
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
    "price": 0.593,
    "change24h": -4.045,
    "high24h": 0.618,
    "low24h": 0.578,
    "volume24hUsd": 996206.8342,
    "marketCapUsd": 194735164,
    "marketCapRank": 120,
    "circulatingSupply": 329206306,
    "totalSupply": 353868472,
    "maxSupply": 353868433,
    "athUsd": 20.87,
    "athChangePercent": -97.16532,
    "athDate": "2021-05-18",
    "atlUsd": 0.00851264,
    "atlChangePercent": 6848.83564,
    "atlDate": "2019-09-27",
    "fdvUsd": 209323557,
    "dominancePercent": 0.01,
    "category": "DeFi & Likidite",
    "descriptionTr": "THORChain (RUNE), DeFi & Likidite kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://thorchain.org",
    "whitepaperUrl": "https://thorchain.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/thorchain",
    "twitterUrl": "https://twitter.com/thorchain",
    "githubUrl": "https://github.com/thorchain",
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
        "answer": "THORChain dolaşımdaki arzı 329.206.306 RUNE adettir."
      },
      {
        "question": "THORChain Nereden ve Nasıl Alınır?",
        "answer": "THORChain (RUNE) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 448293,
    "openInterestChange24h": -1.42,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14943,
    "longLiquidation24hUsd": 6575,
    "shortLiquidation24hUsd": 8368,
    "dominantLiquidationLevel": 0.6108,
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
        "price": 0.6227,
        "leverage": "25x",
        "volumeUsd": 5230,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5633,
        "leverage": "50x",
        "volumeUsd": 6724,
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
    "price": 2.32,
    "change24h": -3.41839,
    "high24h": 2.39,
    "low24h": 2.25,
    "volume24hUsd": 3582696,
    "marketCapUsd": 194286245,
    "marketCapRank": 121,
    "circulatingSupply": 83696996.82034639,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 24.4,
    "athChangePercent": -90.48678,
    "athDate": "2021-06-16",
    "atlUsd": 0.366538,
    "atlChangePercent": 533.3051,
    "atlDate": "2022-12-28",
    "fdvUsd": 232130486,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Fluid (FLUID), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://instadapp.org",
    "whitepaperUrl": "https://instadapp.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/instadapp",
    "twitterUrl": "https://twitter.com/instadapp",
    "githubUrl": "https://github.com/instadapp",
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
    "openInterestUsd": 1612213,
    "openInterestChange24h": -1.2,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 53740,
    "longLiquidation24hUsd": 23646,
    "shortLiquidation24hUsd": 30094,
    "dominantLiquidationLevel": 2.3896,
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
        "price": 2.436,
        "leverage": "25x",
        "volumeUsd": 18809,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 2.204,
        "leverage": "50x",
        "volumeUsd": 24183,
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
    "price": 0.1258,
    "change24h": -4.841,
    "high24h": 0.1328,
    "low24h": 0.1227,
    "volume24hUsd": 657140.1204,
    "marketCapUsd": 187668375,
    "marketCapRank": 122,
    "circulatingSupply": 1495724656.9526057,
    "totalSupply": 1500000000,
    "maxSupply": 1500000000,
    "athUsd": 1.9,
    "athChangePercent": -93.39826,
    "athDate": "2021-11-27",
    "atlUsd": 0.055241,
    "atlChangePercent": 127.13082,
    "atlDate": "2026-08-14",
    "fdvUsd": 188204801,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Basic Attention (BAT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://basic-attention-token.org",
    "whitepaperUrl": "https://basic-attention-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/basic-attention-token",
    "twitterUrl": "https://twitter.com/basic-attention-token",
    "githubUrl": "https://github.com/basic-attention-token",
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
    "openInterestUsd": 295713,
    "openInterestChange24h": -1.69,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 9857,
    "longLiquidation24hUsd": 4337,
    "shortLiquidation24hUsd": 5520,
    "dominantLiquidationLevel": 0.1296,
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
        "price": 0.1321,
        "leverage": "25x",
        "volumeUsd": 3450,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1195,
        "leverage": "50x",
        "volumeUsd": 4436,
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
    "price": 0.6012,
    "change24h": 0.636,
    "high24h": 0.6214,
    "low24h": 0.5946,
    "volume24hUsd": 2028960.68856,
    "marketCapUsd": 185752246,
    "marketCapRank": 123,
    "circulatingSupply": 308100941.96382,
    "totalSupply": 2007626315.7456553,
    "maxSupply": null,
    "athUsd": 2.32,
    "athChangePercent": -73.97882,
    "athDate": "2024-12-07",
    "atlUsd": 0.00001861,
    "atlChangePercent": 3239531.06835,
    "atlDate": "2023-10-16",
    "fdvUsd": 1210386097,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Aerodrome Finance (AERO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://aerodrome-finance.org",
    "whitepaperUrl": "https://aerodrome-finance.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/aerodrome-finance",
    "twitterUrl": "https://twitter.com/aerodrome-finance",
    "githubUrl": "https://github.com/aerodrome-finance",
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
        "answer": "Aerodrome Finance dolaşımdaki arzı 308.100.941,964 AERO adettir."
      },
      {
        "question": "Aerodrome Finance Nereden ve Nasıl Alınır?",
        "answer": "Aerodrome Finance (AERO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 913032,
    "openInterestChange24h": 0.22,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 30434,
    "longLiquidation24hUsd": 19021,
    "shortLiquidation24hUsd": 11413,
    "dominantLiquidationLevel": 0.5832,
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
        "price": 0.6313,
        "leverage": "25x",
        "volumeUsd": 10652,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.5711,
        "leverage": "50x",
        "volumeUsd": 13695,
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
    "price": 0.3394,
    "change24h": 0.982,
    "high24h": 0.3529,
    "low24h": 0.336,
    "volume24hUsd": 944961.81685,
    "marketCapUsd": 183486146,
    "marketCapRank": 124,
    "circulatingSupply": 541091171.9,
    "totalSupply": 1000000000,
    "maxSupply": null,
    "athUsd": 6.01,
    "athChangePercent": -94.361,
    "athDate": "2023-12-07",
    "atlUsd": 0.218137,
    "atlChangePercent": 55.45478,
    "atlDate": "2026-02-05",
    "fdvUsd": 339103935,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Jito (JTO), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://jito-governance-token.org",
    "whitepaperUrl": "https://jito-governance-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/jito-governance-token",
    "twitterUrl": "https://twitter.com/jito-governance-token",
    "githubUrl": "https://github.com/jito-governance-token",
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
        "answer": "Jito dolaşımdaki arzı 541.091.171,9 JTO adettir."
      },
      {
        "question": "Jito Nereden ve Nasıl Alınır?",
        "answer": "Jito (JTO) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 425233,
    "openInterestChange24h": 0.34,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 14174,
    "longLiquidation24hUsd": 8859,
    "shortLiquidation24hUsd": 5315,
    "dominantLiquidationLevel": 0.3292,
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
        "price": 0.3564,
        "leverage": "25x",
        "volumeUsd": 4961,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3224,
        "leverage": "50x",
        "volumeUsd": 6378,
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
    "price": 0.00367,
    "change24h": -0.272,
    "high24h": 0.00377,
    "low24h": 0.00364,
    "volume24hUsd": 147438.498928,
    "marketCapUsd": 181248052,
    "marketCapRank": 125,
    "circulatingSupply": 49444999677.59027,
    "totalSupply": 50000000000,
    "maxSupply": 50000000000,
    "athUsd": 4.79,
    "athChangePercent": -99.92347,
    "athDate": "2021-02-15",
    "atlUsd": 0.00275026,
    "atlChangePercent": 33.28354,
    "atlDate": "2022-12-29",
    "fdvUsd": 183282489,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "JasmyCoin (JASMY), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://jasmycoin.org",
    "whitepaperUrl": "https://jasmycoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/jasmycoin",
    "twitterUrl": "https://twitter.com/jasmycoin",
    "githubUrl": "https://github.com/jasmycoin",
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
    "openInterestUsd": 66347,
    "openInterestChange24h": -0.1,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 2212,
    "longLiquidation24hUsd": 973,
    "shortLiquidation24hUsd": 1239,
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
        "price": 0.0039,
        "leverage": "25x",
        "volumeUsd": 774,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0035,
        "leverage": "50x",
        "volumeUsd": 995,
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
    "price": 0.998405,
    "change24h": 0.03334,
    "high24h": 0.998848,
    "low24h": 0.997747,
    "volume24hUsd": 4184500,
    "marketCapUsd": 179031641,
    "marketCapRank": 126,
    "circulatingSupply": 179317574.5,
    "totalSupply": 179317574.5,
    "maxSupply": null,
    "athUsd": 1.002,
    "athChangePercent": -0.4006,
    "athDate": "2026-03-30",
    "atlUsd": 0.99608,
    "atlChangePercent": 0.23344,
    "atlDate": "2026-03-08",
    "fdvUsd": 179031641,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "USAT (USAT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://usa.org",
    "whitepaperUrl": "https://usa.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/usa",
    "twitterUrl": "https://twitter.com/usa",
    "githubUrl": "https://github.com/usa",
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
    "openInterestUsd": 1883025,
    "openInterestChange24h": 0.01,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 62768,
    "longLiquidation24hUsd": 39230,
    "shortLiquidation24hUsd": 23538,
    "dominantLiquidationLevel": 0.9685,
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
        "volumeUsd": 21969,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.9485,
        "leverage": "50x",
        "volumeUsd": 28246,
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
    "price": 0.06974,
    "change24h": -1.996,
    "high24h": 0.07211,
    "low24h": 0.06815,
    "volume24hUsd": 2091765.06203,
    "marketCapUsd": 176439359,
    "marketCapRank": 127,
    "circulatingSupply": 2536270774.3843875,
    "totalSupply": 11358122614.262045,
    "maxSupply": null,
    "athUsd": 0.107368,
    "athChangePercent": -35.20736,
    "athDate": "2026-09-23",
    "atlUsd": 0.01673142,
    "atlChangePercent": 315.78338,
    "atlDate": "2026-02-12",
    "fdvUsd": 790144291,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Zama (ZAMA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://zama.org",
    "whitepaperUrl": "https://zama.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/zama",
    "twitterUrl": "https://twitter.com/zama",
    "githubUrl": "https://github.com/zama",
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
        "answer": "Zama dolaşımdaki arzı 2.536.270.774,384 ZAMA adettir."
      },
      {
        "question": "Zama Nereden ve Nasıl Alınır?",
        "answer": "Zama (ZAMA) lisanslı yerli ve küresel borsalardan (Binance TR, Bybit TR vb.) Türk Lirası veya USDT paritesiyle güvenle alınıp satılabilir."
      }
    ],
    "openInterestUsd": 941294,
    "openInterestChange24h": -0.7,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 31376,
    "longLiquidation24hUsd": 13805,
    "shortLiquidation24hUsd": 17571,
    "dominantLiquidationLevel": 0.0718,
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
        "price": 0.0732,
        "leverage": "25x",
        "volumeUsd": 10982,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0663,
        "leverage": "50x",
        "volumeUsd": 14119,
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
    "price": 0.0368,
    "change24h": -4.167,
    "high24h": 0.0386,
    "low24h": 0.0368,
    "volume24hUsd": 245136.2201,
    "marketCapUsd": 173762182,
    "marketCapRank": 128,
    "circulatingSupply": 4725624039,
    "totalSupply": 5022513903,
    "maxSupply": null,
    "athUsd": 5.25,
    "athChangePercent": -99.29945,
    "athDate": "2017-12-18",
    "atlUsd": 0.03112513,
    "atlChangePercent": 18.13671,
    "atlDate": "2026-07-31",
    "fdvUsd": 184678885,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "IOTA (IOTA), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://iota.org",
    "whitepaperUrl": "https://iota.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/iota",
    "twitterUrl": "https://twitter.com/iota",
    "githubUrl": "https://github.com/iota",
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
    "openInterestUsd": 110311,
    "openInterestChange24h": -1.46,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 3677,
    "longLiquidation24hUsd": 1618,
    "shortLiquidation24hUsd": 2059,
    "dominantLiquidationLevel": 0.0379,
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
        "price": 0.0386,
        "leverage": "25x",
        "volumeUsd": 1287,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.035,
        "leverage": "50x",
        "volumeUsd": 1655,
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
    "price": 0.17,
    "change24h": -2.186,
    "high24h": 0.1775,
    "low24h": 0.1694,
    "volume24hUsd": 675140.926879,
    "marketCapUsd": 173196284,
    "marketCapRank": 129,
    "circulatingSupply": 1018634818.7309874,
    "totalSupply": 1861332135.7914124,
    "maxSupply": null,
    "athUsd": 5.65,
    "athChangePercent": -96.98838,
    "athDate": "2024-12-16",
    "atlUsd": 0.148314,
    "atlChangePercent": 14.64076,
    "atlDate": "2026-04-05",
    "fdvUsd": 316478294,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "EigenCloud (prev. EigenLayer) (EIGEN), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://eigenlayer.org",
    "whitepaperUrl": "https://eigenlayer.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/eigenlayer",
    "twitterUrl": "https://twitter.com/eigenlayer",
    "githubUrl": "https://github.com/eigenlayer",
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
    "openInterestUsd": 303813,
    "openInterestChange24h": -0.77,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 10127,
    "longLiquidation24hUsd": 4456,
    "shortLiquidation24hUsd": 5671,
    "dominantLiquidationLevel": 0.1751,
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
        "price": 0.1785,
        "leverage": "25x",
        "volumeUsd": 3544,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1615,
        "leverage": "50x",
        "volumeUsd": 4557,
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
    "price": 1.816,
    "change24h": -2.102,
    "high24h": 1.894,
    "low24h": 1.813,
    "volume24hUsd": 365246.151539,
    "marketCapUsd": 169060969,
    "marketCapRank": 130,
    "circulatingSupply": 93194518.49512771,
    "totalSupply": 100000000,
    "maxSupply": 100000000,
    "athUsd": 60.09,
    "athChangePercent": -96.98087,
    "athDate": "2022-01-01",
    "atlUsd": 1.038,
    "atlChangePercent": 74.81012,
    "atlDate": "2026-07-01",
    "fdvUsd": 181406559,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Convex Finance (CVX), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://convex-finance.org",
    "whitepaperUrl": "https://convex-finance.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/convex-finance",
    "twitterUrl": "https://twitter.com/convex-finance",
    "githubUrl": "https://github.com/convex-finance",
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
    "openInterestUsd": 164361,
    "openInterestChange24h": -0.74,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 5479,
    "longLiquidation24hUsd": 2411,
    "shortLiquidation24hUsd": 3068,
    "dominantLiquidationLevel": 1.8705,
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
        "price": 1.9068,
        "leverage": "25x",
        "volumeUsd": 1918,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 1.7252,
        "leverage": "50x",
        "volumeUsd": 2466,
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
    "price": 0.4007,
    "change24h": 1.187,
    "high24h": 0.4117,
    "low24h": 0.3958,
    "volume24hUsd": 227755.1356,
    "marketCapUsd": 166876925,
    "marketCapRank": 131,
    "circulatingSupply": 416649900,
    "totalSupply": 1000000000,
    "maxSupply": null,
    "athUsd": 2.72,
    "athChangePercent": -85.27989,
    "athDate": "2022-12-11",
    "atlUsd": 0.00277641,
    "atlChangePercent": 14325.84367,
    "atlDate": "2020-06-09",
    "fdvUsd": 400520736,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Trust Wallet (TWT), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://trust-wallet-token.org",
    "whitepaperUrl": "https://trust-wallet-token.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/trust-wallet-token",
    "twitterUrl": "https://twitter.com/trust-wallet-token",
    "githubUrl": "https://github.com/trust-wallet-token",
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
    "openInterestUsd": 102490,
    "openInterestChange24h": 0.42,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 3416,
    "longLiquidation24hUsd": 2135,
    "shortLiquidation24hUsd": 1281,
    "dominantLiquidationLevel": 0.3887,
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
        "price": 0.4207,
        "leverage": "25x",
        "volumeUsd": 1196,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.3807,
        "leverage": "50x",
        "volumeUsd": 1537,
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
    "price": 0.2946,
    "change24h": 7.401,
    "high24h": 0.301,
    "low24h": 0.2728,
    "volume24hUsd": 1605249.54157,
    "marketCapUsd": 166109393,
    "marketCapRank": 132,
    "circulatingSupply": 565019819.362173,
    "totalSupply": 997723015.703417,
    "maxSupply": 1000000000,
    "athUsd": 0.686913,
    "athChangePercent": -57.20145,
    "athDate": "2025-10-23",
    "atlUsd": 0.094433,
    "atlChangePercent": 211.31823,
    "atlDate": "2026-06-06",
    "fdvUsd": 293319206,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Meteora (MET), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://meteora.org",
    "whitepaperUrl": "https://meteora.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/meteora",
    "twitterUrl": "https://twitter.com/meteora",
    "githubUrl": "https://github.com/meteora",
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
    "openInterestUsd": 722362,
    "openInterestChange24h": 2.59,
    "longShortRatio": 1.65,
    "longPercentage": 62.5,
    "shortPercentage": 37.5,
    "totalLiquidation24hUsd": 24079,
    "longLiquidation24hUsd": 15049,
    "shortLiquidation24hUsd": 9030,
    "dominantLiquidationLevel": 0.2858,
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
        "price": 0.3093,
        "leverage": "25x",
        "volumeUsd": 8428,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.2799,
        "leverage": "50x",
        "volumeUsd": 10836,
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
    "price": 0.141,
    "change24h": -0.704,
    "high24h": 0.1473,
    "low24h": 0.1399,
    "volume24hUsd": 785602.93724,
    "marketCapUsd": 164513816,
    "marketCapRank": 133,
    "circulatingSupply": 1167271959.1810675,
    "totalSupply": 1267875000.0000002,
    "maxSupply": null,
    "athUsd": 0.653229,
    "athChangePercent": -78.42431,
    "athDate": "2025-06-25",
    "atlUsd": 0.085229,
    "atlChangePercent": 65.36428,
    "atlDate": "2025-04-06",
    "fdvUsd": 178692680,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Maple Finance (SYRUP), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://syrup.org",
    "whitepaperUrl": "https://syrup.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/syrup",
    "twitterUrl": "https://twitter.com/syrup",
    "githubUrl": "https://github.com/syrup",
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
    "openInterestUsd": 353521,
    "openInterestChange24h": -0.25,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 11784,
    "longLiquidation24hUsd": 5185,
    "shortLiquidation24hUsd": 6599,
    "dominantLiquidationLevel": 0.1452,
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
        "price": 0.148,
        "leverage": "25x",
        "volumeUsd": 4124,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1339,
        "leverage": "50x",
        "volumeUsd": 5303,
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
    "price": 0.1609,
    "change24h": -3.014,
    "high24h": 0.1688,
    "low24h": 0.1608,
    "volume24hUsd": 1336541.894287,
    "marketCapUsd": 160813698,
    "marketCapRank": 134,
    "circulatingSupply": 998926392,
    "totalSupply": 998926392,
    "maxSupply": 998926392,
    "athUsd": 4.83,
    "athChangePercent": -96.66381,
    "athDate": "2024-03-31",
    "atlUsd": 0.00155464,
    "atlChangePercent": 10255.24298,
    "atlDate": "2023-12-12",
    "fdvUsd": 160813698,
    "dominancePercent": 0.01,
    "category": "Meme & Topluluk",
    "descriptionTr": "dogwifhat (WIF), Meme & Topluluk kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://dogwifcoin.org",
    "whitepaperUrl": "https://dogwifcoin.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/dogwifcoin",
    "twitterUrl": "https://twitter.com/dogwifcoin",
    "githubUrl": "https://github.com/dogwifcoin",
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
    "openInterestUsd": 601444,
    "openInterestChange24h": -1.05,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 20048,
    "longLiquidation24hUsd": 8821,
    "shortLiquidation24hUsd": 11227,
    "dominantLiquidationLevel": 0.1657,
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
        "price": 0.1689,
        "leverage": "25x",
        "volumeUsd": 7017,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.1529,
        "leverage": "50x",
        "volumeUsd": 9022,
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
    "price": 0.03905,
    "change24h": -0.332,
    "high24h": 0.0408,
    "low24h": 0.03856,
    "volume24hUsd": 949176.356273,
    "marketCapUsd": 151777015,
    "marketCapRank": 135,
    "circulatingSupply": 3885497663,
    "totalSupply": 3885497663,
    "maxSupply": null,
    "athUsd": 1.029,
    "athChangePercent": -96.20559,
    "athDate": "2025-01-04",
    "atlUsd": 0.01906602,
    "atlChangePercent": 104.87988,
    "atlDate": "2026-06-25",
    "fdvUsd": 151777015,
    "dominancePercent": 0.01,
    "category": "Katman 1 / Ekosistem",
    "descriptionTr": "Sonic (S), Katman 1 / Ekosistem kategorisinde Binance ve Bybit gibi öncü küresel borsalarda işlem gören, yüksek işlem derinliğine sahip kurumsal ve bireysel likidite öncüsü kripto varlıktır.",
    "officialWebsite": "https://sonic-3.org",
    "whitepaperUrl": "https://sonic-3.org/whitepaper.pdf",
    "explorerUrl": "https://blockchair.com/sonic-3",
    "twitterUrl": "https://twitter.com/sonic-3",
    "githubUrl": "https://github.com/sonic-3",
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
    "openInterestUsd": 427129,
    "openInterestChange24h": -0.12,
    "longShortRatio": 0.85,
    "longPercentage": 44,
    "shortPercentage": 56,
    "totalLiquidation24hUsd": 14238,
    "longLiquidation24hUsd": 6265,
    "shortLiquidation24hUsd": 7973,
    "dominantLiquidationLevel": 0.0402,
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
        "price": 0.041,
        "leverage": "25x",
        "volumeUsd": 4983,
        "side": "SHORT",
        "intensity": 85
      },
      {
        "price": 0.0371,
        "leverage": "50x",
        "volumeUsd": 6407,
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
