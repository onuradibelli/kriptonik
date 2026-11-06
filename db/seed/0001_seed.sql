-- db/seed/0001_seed.sql
-- Kriptonik Başlangıç Tohum Verisi

-- 1. Araçlar (21 adet, durumlar spesifikasyon Bölüm 6.1'e göre)
INSERT OR REPLACE INTO tools (slug, category, title_tr, summary_tr, status, sort, pinned) VALUES
('kripto-donusturucu', 'calc', 'Kripto Dönüştürücü', 'Anlık canlı kurlarla kripto ve fiat para dönüştürme.', 'live', 10, 1),
('maliyet-karsilastirici', 'calc', 'USDT/TRY Borsa Kıyaslama ve Gerçek Maliyet', 'Komisyon, spread ve ağ çekim ücreti dahil net maliyet karşılaştırması.', 'live', 20, 1),
('adres-ag-eslestirici', 'security', 'Adres Doğrulayıcı ve Ağ Eşleştirici', 'Cüzdan adresinin hangi ağları desteklediğini ve formatını doğrulama.', 'live', 30, 1),
('takilan-islem', 'urgent', 'İşlem Durumu ve Takılan İşlem Teşhisi', 'Mempool analizi, RBF ve Nonce hızlandırma/iptal rehberi.', 'live', 40, 1),
('yanlis-aga-gonderdim', 'urgent', 'Yanlış Ağa Gönderdim Sihirbazı', 'Kurtarılabilirlik tespiti ve otomatik borsa destek talep metni.', 'live', 50, 1),
('kar-zarar-hesaplama', 'calc', 'Kâr/Zarar ve Ortalama Maliyet', 'Çoklu alım desteği, gerçekleşen/gerçekleşmeyen kâr ve başa baş fiyat.', 'live', 60, 0),
('dca-simulator', 'calc', 'DCA Geri Test Simülatörü', 'Düzenli alım stratejisi ile geçmiş kâr/zarar ve XIRR getirisi.', 'live', 70, 0),
('kaldirac-likidasyon', 'calc', 'Kaldıraç ve Likidasyon Hesaplayıcı', 'İzole vadeli işlemler için tahmini likidasyon fiyatı ve marjin riski.', 'live', 80, 0),
('gas-ucret-takip', 'market', 'Gas ve Ağ Ücreti Takipçisi', 'EVM zincirleri, Bitcoin ve TRON transfer maliyetleri ve ucuz saatler.', 'live', 90, 0),
('depeg-monitoru', 'market', 'Stablecoin Depeg Monitörü', 'USDT, USDC, DAI ve diğer stablecoinlerin 1$ çıpasından sapma takibi.', 'live', 100, 0),
('korku-acgozluluk-endeksi', 'market', 'Korku ve Açgözlülük Endeksi', 'Piyasa duyarlılığı, geçmiş veriler ve duygu göstergesi.', 'live', 110, 0),
('birim-cevirici', 'calc', 'Birim Çevirici (BTC/sat, ETH/gwei)', 'Satoshi, Gwei, Wei, Lamport kayıpsız birim dönüştürücü.', 'live', 120, 0),
('bitcoin-halving', 'market', 'Bitcoin Halving Sayacı', 'Blok yüksekliğine dayalı sonraki yarılanma geri sayımı ve ödül takvimi.', 'live', 130, 0),
('staking-getiri', 'calc', 'Staking ve Bileşik Getiri', 'APR/APY dönüşümü ve dönemlik bileşik getiri projeksiyonu.', 'live', 140, 0),
('madencilik-karlilik', 'calc', 'Madencilik Karlılık Hesaplayıcı', 'Elektrik tüketimi, zorluk derecesi ve başabaş BTC fiyatı hesabı.', 'live', 150, 0),
('cuzdan-guvenlik-kontrolu', 'security', 'Cüzdan Güvenlik Check-up', '24 maddelik kişisel güvenlik denetimi ve eylem listesi.', 'live', 160, 0),
('guvenlik-kontrolu', 'security', 'Link ve Token Güvenlik Sinyali', 'URL homograf, kara liste ve GoPlus token risk analizi.', 'soon', 200, 0),
('islem-cevirmeni', 'urgent', 'İşlem Çevirmeni (Workers AI)', 'EVM işlem loglarını ve transfer detaylarını sade Türkçe ile özetleme.', 'soon', 210, 0),
('csv-portfoy-analizi', 'calc', 'Borsa CSV Portföy Analizi', 'Tarayıcı içinde borsa işlem dökümlerinden portföy analizi.', 'soon', 220, 0),
('token-yetki-kontrolu', 'security', 'Token Yetki (Approval) Kontrolü', 'Cüzdanın geçmişte verdiği sınırsız akıllı sözleşme izinlerini denetleme.', 'soon', 230, 0),
('token-unlock-takvimi', 'market', 'Token Unlock Takvimi', 'Doğrulanmış token kilit açılım tarihleri ve arz baskısı takvimi.', 'soon', 240, 0);

-- 2. Ağlar
INSERT OR REPLACE INTO networks (id, name, family, native_symbol, explorer_tx_url, avg_confirm_seconds, requires_memo) VALUES
('ethereum', 'Ethereum Mainnet', 'evm', 'ETH', 'https://etherscan.io/tx/', 12, 0),
('bsc', 'BNB Smart Chain (BEP-20)', 'evm', 'BNB', 'https://bscscan.com/tx/', 3, 0),
('polygon', 'Polygon PoS', 'evm', 'POL', 'https://polygonscan.com/tx/', 2, 0),
('arbitrum', 'Arbitrum One', 'evm', 'ETH', 'https://arbiscan.io/tx/', 1, 0),
('optimism', 'Optimism (OP Mainnet)', 'evm', 'ETH', 'https://optimistic.etherscan.io/tx/', 2, 0),
('base', 'Base', 'evm', 'ETH', 'https://basescan.org/tx/', 2, 0),
('avalanche-c', 'Avalanche C-Chain', 'evm', 'AVAX', 'https://snowtrace.io/tx/', 2, 0),
('tron', 'TRON (TRC-20)', 'tron', 'TRX', 'https://tronscan.org/#/transaction/', 3, 0),
('solana', 'Solana', 'solana', 'SOL', 'https://solscan.io/tx/', 1, 0),
('bitcoin', 'Bitcoin', 'utxo', 'BTC', 'https://mempool.space/tx/', 600, 0),
('litecoin', 'Litecoin', 'utxo', 'LTC', 'https://blockchair.com/litecoin/transaction/', 150, 0),
('dogecoin', 'Dogecoin', 'utxo', 'DOGE', 'https://dogechain.info/tx/', 60, 0),
('ripple', 'XRP Ledger', 'ripple', 'XRP', 'https://xrpscan.com/tx/', 4, 1),
('ton', 'The Open Network (TON)', 'ton', 'TON', 'https://tonscan.org/tx/', 5, 1);

-- 3. Token Kontratları (Spesifikasyon 6.7 doğrulanmış veriler)
INSERT OR REPLACE INTO token_contracts (token, network_id, address, decimals, verified_at, source_url) VALUES
('USDT', 'ethereum', '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, '2026-11-06', 'https://etherscan.io/token/0xdAC17F958D2ee523a2206206994597C13D831ec7'),
('USDT', 'tron', 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 6, '2026-11-06', 'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'),
('USDT', 'bsc', '0x55d398326f99059fF775485246999027B3197955', 18, '2026-11-06', 'https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955'),
('USDC', 'ethereum', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, '2026-11-06', 'https://etherscan.io/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'),
('USDC', 'bsc', '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, '2026-11-06', 'https://bscscan.com/token/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d');

-- 4. Doğrulanmış Resmi Marka Alan Adları (Phishing / Homograf tespiti için)
INSERT OR REPLACE INTO brands (domain, name, kind) VALUES
('binance.com', 'Binance', 'exchange'),
('trbinance.com', 'Binance TR', 'exchange'),
('btcturk.com', 'BtcTurk', 'exchange'),
('paribu.com', 'Paribu', 'exchange'),
('okx.com', 'OKX', 'exchange'),
('bybit.com', 'Bybit', 'exchange'),
('coinbase.com', 'Coinbase', 'exchange'),
('gate.io', 'Gate.io', 'exchange'),
('mexc.com', 'MEXC', 'exchange'),
('kucoin.com', 'KuCoin', 'exchange'),
('metamask.io', 'MetaMask', 'wallet'),
('phantom.app', 'Phantom', 'wallet'),
('trustwallet.com', 'Trust Wallet', 'wallet'),
('ledger.com', 'Ledger', 'hardware_wallet'),
('trezor.io', 'Trezor', 'hardware_wallet');

-- 5. Açık Veri Sağlayıcıları
INSERT OR REPLACE INTO data_sources (id, name, base_url, attribution, enabled) VALUES
('coingecko', 'CoinGecko API', 'https://api.coingecko.com/api/v3', 'Veriler: CoinGecko', 1),
('mempool', 'mempool.space', 'https://mempool.space/api', 'Veriler: mempool.space', 1),
('defillama', 'DefiLlama Stablecoins', 'https://stablecoins.llama.fi', 'Veriler: DefiLlama', 1),
('alternative_fng', 'Alternative.me Korku Endeksi', 'https://api.alternative.me/fng', 'Veriler: alternative.me', 1);

-- 6. Site Ayarları
INSERT OR REPLACE INTO settings (key, value_json) VALUES
('depeg_thresholds_bps', '{"normal": 20, "watch": 50, "warning": 100}'),
('announcement', '{"enabled": false, "message": "", "level": "info"}');
