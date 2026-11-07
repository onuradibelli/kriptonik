# Kriptonik (kriptonik.com)

> Sıfır Gürültü, Maksimum Sinyal — Canlı Kripto Para Veri, Likidasyon Isı Haritası ve On-Chain Türev Analiz Terminali.

## Özellikler

- **Canlı Kripto Piyasası & Isı Şeması (Crypto Heatmap)**: TradingView & Finviz modelinde squarified treemap görselleştirmesi.
- **Canlı Tasfiye Isı Haritası (Liquidation Heatmap)**: Vadeli işlemler kaldıraçlı tasfiye havuzları ve borsa dağılımları.
- **Borsalar Arası Fonlama Oranları (Funding Rate)**: Binance ve Bybit spot/vadeli fonlama oranları ve arbitraj sinyalleri.
- **Spot ETF Takibi**: Bitcoin, Ethereum ve Solana spot ETF kurumsal net akışları (IBIT, FBTC vb.).
- **Canlı Dolar & USDT / TRY Çevirici**: TCMB ve serbest piyasa kurlarıyla USDT arbitraj primi takibi.
- **Zincir Üstü Mempool Radarı**: Doğrulanmış büyük Bitcoin transferleri (mempool.space).
- **SEO & Performans**: %100 statik export, optimize bundle, dinamik sitemap (`/sitemap.xml`) ve 301 yönlendirme haritası.

## Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# TypeScript tip kontrolü
npm run typecheck

# Yerel geliştirme sunucusu
npm run dev

# Üretim derlemesi (Static Export)
npm run build
```

## Dağıtım

Platform Cloudflare Pages üzerinde statik HTML olarak barındırılmaktadır. Her `main` dalı commit'inde GitHub Actions üzerinden otomatik derlenir ve yayınlanır.

## Lisans

MIT © 2026 Kriptonik
