# Kriptonik Sürüm Değişiklik Günlüğü (CHANGELOG)

Tüm önemli değişiklikler bu dosyada belgelenmektedir. Proje [Semantik Sürümleme](https://semver.org/lang/tr/) prensiplerine uymaktadır.

---

## [2.0.0] - 2026-11-06 (Master Sürüm Lansmanı)

Kriptonik: Master Geliştirme Spesifikasyonu (v2) doğrultusunda sıfırdan inşa edilen tam üretim sürümü.

### Modül 1 - İskelet & Temel Kütüphaneler
- Sıkı CSP (Content-Security-Policy), HSTS ve Permissions-Policy başlıkları (`public/_headers`).
- Cloudflare D1, KV, R2 ve Workers AI bağlamaları (`wrangler.json`).
- Sayısal finansal hassasiyet kütüphanesi (`src/lib/decimal.ts` / SafeDecimal).
- Türkçe sayı ve kripto para formatlayıcıları (`src/lib/format.ts`).
- URL durum senkronizasyon ve paylaşım yardımcısı (`src/lib/url-state.ts`).
- Çerezsiz, gizlilik odaklı olay sayacı (`src/lib/events.ts`).

### Modül 2 - Tasarım Sistemi & UI
- Açık/Koyu/Sistem renk tokenları (`src/styles/tokens.css`).
- FOUC önleyici satır içi script (`src/components/BaseHead.astro`).
- Üç durumlu segment kontrolü (`src/components/ThemeToggle.astro`).
- Komut paleti (`Ctrl+K` modalı - `src/components/CommandPalette.astro`).
- Hata sayfaları (`/404`, `/500`), servis sağlık sayfası (`/durum`), rapor ve itiraz formu (`/rapor`).

### Modül 3 - Veritabanı ve Tohum Verileri
- 27 tabloluk tam D1 SQLite veritabanı şeması (`db/migrations/0001_init.sql`).
- 21 araç, ağlar, token kontratları, resmi borsa alan adları tohum verisi (`db/seed/0001_seed.sql`).

### Modül 4 - Worker API Çekirdeği
- `/api/v1/health`: Servis sağlık ve versiyon durumu.
- `/api/v1/market/ticker`: Cloudflare KV önbellekli BTC, ETH, SOL ve USDT/TRY kurları.
- `/api/v1/fng`: Alternative.me Korku & Açgözlülük endeksi proxy ve Türkçe sınıflandırma.
- `/api/v1/tx/lookup`: Mempool.space ve EVM paralel işlem durumu teşhisi.
- `/api/v1/event`: Çerezsiz anonim kullanım sayacı.
- `/api/v1/report`: Turnstile korumalı kullanıcı bildirim ve itiraz servisi.

### Modül 5 - Ana Sayfa & Çözüm Akışı
- Bölüm 4.3 master kurgusuna uygun arama kutusu ve 4 eylem çipi.
- "Şimdi ne yapmak istiyorsun?" 3 ana çözüm kümesi (Sorun Çöz, Hesapla, Takip Et).
- Canlı piyasa bandı ve dürüst veri gizliliği taahhüdü.
- Schema.org FAQPage yapılandırılmış verisi.

### Modül 6 - Araçlar I (Tarayıcıda Çalışan Araçlar)
- Adres Doğrulayıcı ve Ağ Eşleştirici (`/araclar/adres-ag-eslestirici`): EIP-55 checksum, Bech32m, Base58Check ve kontrat adresi uyarısı.
- Birim Çevirici (`/araclar/birim-cevirici`): BTC/sat, ETH/gwei/wei, TRX/sun, SOL/lamport kayıpsız dönüştürücü.
- Kâr/Zarar Hesaplayıcı (`/araclar/kar-zarar-hesaplama`): Ortalama maliyet ve FIFO muhasebesi.
- Kaldıraç ve Likidasyon (`/araclar/kaldirac-likidasyon`): Long/Short formülü ve MMR bakımı.
- Staking Getiri (`/araclar/staking-getiri`): APR ve APY bileşik faiz simülatörü.
- Cüzdan Güvenlik Kontrolü (`/araclar/cuzdan-guvenlik-kontrolu`): 24 maddelik interaktif check-up ve acil eylem planı.

### Modül 7 - Araçlar II (Veri Araçları)
- Kripto Dönüştürücü (`/araclar/kripto-donusturucu`): 250+ coin, çoklu para birimi görünümü.
- Programatik Çift Sayfaları (`/araclar/donusturucu/[pair]`): btc-try, eth-try, sol-try vb.
- Gas & Ağ Ücreti Takipçisi (`/araclar/gas-ucret-takip`): EVM transfer/swap, BTC sat/vB ve Tron maliyeti.
- Stablecoin Depeg Monitörü (`/araclar/depeg-monitoru`): USDT, USDC, DAI, FDUSD, USDe, PYUSD bps sapma radarı.
- Korku ve Açgözlülük Endeksi (`/araclar/korku-acgozluluk-endeksi`): Yarım daire gösterge ve tarihsel kıyaslama.
- Bitcoin Halving Sayacı (`/araclar/bitcoin-halving`): Blok 1.050.000 canlı geri sayımı ve geçmiş ödül tablosu.

### Modül 8 - Araçlar III (Zincir Araçları)
- Takılan İşlem Teşhisi (`/araclar/takilan-islem`): RBF tespiti, CPFP hesaplama ve EVM Nonce kuyruğu çözüm adımları.
- Yanlış Ağa Gönderdim Sihirbazı (`/araclar/yanlis-aga-gonderdim`): Karar ağacı motoru, Türkçe ve İngilizce hazır borsa destek biletleri.

### Modül 9 - Araçlar IV (Maliyet & Madencilik)
- Gerçek Maliyet Kıyaslayıcı (`/araclar/maliyet-karsilastirici`): Borsa komisyonu, spread ve çekim bedeli dahil net USDT karşılaştırması.
- DCA Geri Test Simülatörü (`/araclar/dca-simulator`): Geçmiş düzenli alım kâr/zarar ve XIRR getirisi.
- Madencilik Kârlılık (`/araclar/madencilik-karlilik`): 4. Halving sonrası 3.125 BTC ödülüyle başa baş elektrik fiyatı hesabı.

### Modül 10 - Admin Paneli
- `/admin` yönetim merkezi: KPI kartları, araç açma/kapama ve acil kill-switch, veri kaynakları p50/p95 gecikme göstergeleri, kullanıcı rapor gelen kutusu.

### Modül 11 - İçerik Kütüphanesi
- 100 terimli kripto ve blokzincir sözlüğü (`/sozluk` ve `/sozluk/[slug]`).
- 15 kapsamlı sorun çözme ve güvenlik rehberi (`/rehber` ve `/rehber/[slug]`).
- Hukuki ve şeffaflık sayfaları: `/hakkimizda`, `/metodoloji`, `/gizlilik`, `/kullanim-sartlari`, `/risk-uyarisi`, `/affiliate-aciklamasi`.

### Modül 12 - SEO & Performans
- Dinamik `/sitemap.xml` rotası.
- Güvenli `robots.txt` yapılandırması.
- SoftwareApplication ve FAQPage JSON-LD şemaları.

### Modül 13 - Faz 2 Araçları
- Link ve Token Güvenlik Sinyali (`/araclar/guvenlik-kontrolu`): Homograf taklit linkler ve honeypot tespiti.
- Kripto İşlem Çevirmeni (`/araclar/islem-cevirmeni`): EVM transfer, approve ve swap loglarının sade Türkçe özeti.
- Borsa CSV Portföy Analizi (`/araclar/csv-portfoy-analizi`): Tarayıcıda yerel FileReader ile kâr/zarar ve komisyon analizi.

### Modül 14 - Kalite Kapısı
- Dürüst İfade Kuralı (Kural 0.7) denetimi: "sıfır sunucu", "garanti", "kurtarırız", "PRO" yasaklı kelimeleri kaldırıldı; dürüst bilgilendirme metinleri eklendi.
- Canlı Cloudflare Pages & Workers doğrulaması (`https://kriptonik.com` HTTP/2 200 OK).
