// src/data/guides.ts - Verified Cockpit Editorial Guides
export interface Guide {
	slug: string;
	title: string;
	summary: string;
	category: string;
	author: string;
	readTime: string;
	publishedAt: string;
	reviewedAt: string;
	sources: string[];
	content: string;
	relatedToolSlug?: string;
}

export const guidesData: Guide[] = [
	{
		slug: "usdt-yanlis-ag",
		title: "USDT'yi Yanlış Ağa Gönderdim: Kurtarma Yolları",
		summary: "BEP-20, ERC-20 veya TRC-20 üzerinden farklı ağa giden tether transferlerinde izlenecek somut kurtarma prosedürleri ve borsa başvuru adımları.",
		category: "Sorun Çözümü",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "8 dk",
		publishedAt: "2026-01-10",
		reviewedAt: "2026-03-01",
		sources: [
			"Ethereum Improvement Proposal 55 (EIP-55 Mixed-case Checksum)",
			"BIP-0044: Multi-Account Hierarchy for Deterministic Wallets",
			"Binance Official Asset Recovery Policy & Chain Specification"
		],
		relatedToolSlug: "yanlis-aga-gonderdim",
		content: `
## 1. Panik Yapma ve Dolandırıcılara Karşı Uyanık Ol

Kripto para transferlerinde yanlış ağ seçimi en yaygın kullanıcı hatalarından biridir. Ancak en kritik kural şudur: **Blokzincirde token'lar buharlaşıp yok olmaz.** Yanlış ağa gönderilen bir bakiye, gönderilen o ağ üzerinde hedef adresin kontrolünde bekler.

Sana Telegram, X veya WhatsApp üzerinden 'özel anahtarını ver, paranı kurtaralım' diyen hiç kimseye inanma. Bu kişilerin tamamı dolandırıcıdır.

## 2. Alıcı Adres Kime Ait? Temel Ayrım

Kurtarılabilirlik durumunu belirleyen temel kural alıcı adresin mülkiyetidir:

- **Eğer alıcı kendi kişisel cüzdanınsa (MetaMask, Trust Wallet, Rabby):** Kurtarılabilirlik neredeyse kesindir. Çünkü özel anahtar (Private Key) sendedir. Cüzdanına parayı gönderdiğin ağı (örneğin BNB Smart Chain veya Polygon) RPC olarak ekleyip resmi USDT akıllı sözleşme adresini içe aktardığında bakiyen cüzdanında belirecektir.
- **Eğer alıcı bir merkezi borsa ise (BtcTurk, Paribu, Binance):** Özel anahtarlar borsanın kontrolündedir. Borsa o token'ı o ağda listelemiyorsa bakiye borsa havuzuna ulaşmış ancak kullanıcı hesabına yansımamış olur. Bu durumda borsa destek merkezine resmi 'Hatalı Ağ Yatırma İadesi' başvurusu yapman gerekir.

## 3. Adım Adım Kurtarma Kontrol Listesi

1. **TXID (İşlem Kodunu) Kaydet:** Çıkış yaptığın borsa veya cüzdandan transferin işlem hash kodunu kopyala.
2. **Blok Gezgininde Durumu Teyit Et:** BscScan, Etherscan veya Tronscan üzerinden transferin 'Success / Başarılı' sonuçlanıp sonuçlanmadığını doğrula.
3. **Kişisel Cüzdanda Ağı Ekle:** Hedef MetaMask ise Chainlist üzerinden gönderim yapılan ağı cüzdanına ekle ve ilgili ağdaki resmi token kontrat adresini içeri aktar.
4. **Borsa İadesi İçin Destek Bileti Aç:** Hedef borsa ise Kriptonik Yanlış Ağa Gönderdim sihirbazındaki hazır destek şablonunu kopyalayarak borsanın müşteri temsilcisine ilet.
		`
	},
	{
		slug: "yanlis-aga-gonderilen-kripto-ilk-10-dakika",
		title: "Yanlış Ağa Gönderilen Kripto İçin İlk 10 Dakika Rehberi",
		summary: "Transferiniz yanlış ağa gittiğinde panik yapmadan önce izlemeniz gereken acil eylem planı ve kurtarma olasılıkları.",
		category: "Sorun Çözümü",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "6 dk",
		publishedAt: "2026-01-15",
		reviewedAt: "2026-02-15",
		sources: [
			"EIP-55 Mixed-case Checksum Specification",
			"BIP-44 Multi-Account Hierarchy"
		],
		relatedToolSlug: "yanlis-aga-gonderdim",
		content: `
## 1. Panik Yapmayın ve Dolandırıcılardan Korunun

Kripto para transferlerinde yanlış ağ seçimi en yaygın kullanıcı hatalarından biridir. Ancak en kritik kural şudur: **Blokzincirde token'lar buharlaşıp yok olmaz.** Yanlış ağa gönderilen bir bakiye, gönderilen o ağ üzerinde hedef adresin kontrolünde kalır.

Telegram veya X (Twitter) üzerinden 'özel anahtarınızı verin, paranızı kurtaralım' diyen hiç kimseye inanmayın. Bu kişilerin tamamı dolandırıcıdır.

## 2. Alıcı Adres Kime Ait?

Kurtarılabilirlik durumunu belirleyen temel ayrım alıcı adresin mülkiyetidir:

- **Eğer alıcı kendi kişisel cüzdanınızsa (MetaMask, Trust Wallet, Rabby):** Kurtarılabilirlik şansı neredeyse kesindir. Cüzdanınıza parayı gönderdiğiniz ağı RPC olarak ekleyip ilgili token sözleşme adresini içe aktardığınızda bakiyeniz görünecektir.
- **Eğer alıcı bir merkezi borsa ise (BtcTurk, Paribu, Binance):** Borsa destek merkezine resmi 'Hatalı Ağ Yatırma İadesi' başvurusu yapılması gerekir.
		`
	},
	{
		slug: "metamask-takilan-islem",
		title: "MetaMask'ta Takılan İşlemi İptal Etme (Aynı Nonce Yöntemi)",
		summary: "Düşük gas nedeniyle saatlerce 'Pending' kalan Ethereum ve EVM işlemlerini aynı Nonce numarasıyla 0 ETH göndererek sıfırlama veya hızlandırma.",
		category: "EVM & Cüzdan",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "7 dk",
		publishedAt: "2026-01-18",
		reviewedAt: "2026-03-01",
		sources: [
			"Ethereum Yellow Paper: Transaction Execution Specification",
			"EIP-1559: Fee market change for ETH 1.0 chain",
			"MetaMask Engineering: How to cancel a pending transaction"
		],
		relatedToolSlug: "takilan-islem",
		content: `
## Nonce Mantığı Neden İşlemleri Kilitler?

Ethereum ve EVM blokzincirlerinde bir adresten çıkan işlemler sırayla (0, 1, 2...) işlenir. Bu ardışık sayaç numarasına **Nonce** denir. Eğer 14 numaralı işleminin gas ücreti ağ yoğunluğu nedeniyle yetersiz kalırsa, arkasından gönderdiğin 15 ve 16 numaralı işlemler ne kadar yüksek gas öderse ödesin 14 numara onaylanmadan işlenemez.

## Çözüm 1: Cüzdan İçi "Hızlandır" Butonu

MetaMask veya Rabby cüzdanında bekleyen işlemin altında bulunan **Hızlandır (Speed Up)** butonuna bastığında, cüzdan aynı Nonce numarası ile yaklaşık %10-25 daha yüksek bir öncelik ücreti (priority fee) tanımlar. Madenciler yeni işlemi fark edip bloğa dahil eder.

## Çözüm 2: Özel Nonce ile 0 ETH Göndererek İptal Etme

Eğer işlem hızlandırılamıyorsa veya işlemi tamamen iptal etmek istiyorsan:

1. **Özel Nonce Ayarını Aç:** MetaMask Ayarlar -> Gelişmiş -> **Özel İşlem Nonce'ı (Customize transaction nonce)** seçeneğini aktif et.
2. **Takılan Nonce Numarasını Not Et:** Takılan işleme tıkla ve ayrıntılardaki Nonce değerini öğren (Örn: Nonce 14).
3. **Kendi Adresine 0 ETH Gönder:** Transfer başlat, alıcı kutusuna kendi cüzdan adresini yapıştır, tutara 0 yaz.
4. **Aynı Nonce Numarasını Gir:** Nonce alanına takılan işlemin numarasını (14) yaz.
5. **Gas Ücretini Agresif Yap:** Taban gas ücretini piyasanın üzerinde belirle ve işlemi onayla.
6. **Sonuç:** Bu 0 ETH işlemi onaylandığında, madenciler aynı nonce'a sahip bekleyen eski işlemi bellekten düşürür.
		`
	},
	{
		slug: "metamask-takilan-islem-hizlandirma-iptal",
		title: "MetaMask'ta Takılan İşlemi Hızlandırma ve İptal Etme",
		summary: "Düşük gas nedeniyle saatlerce 'Pending' kalan Ethereum ve EVM işlemlerini Nonce mantığıyla iptal etme veya hızlandırma.",
		category: "EVM & Cüzdan",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "5 dk",
		publishedAt: "2026-02-18",
		reviewedAt: "2026-02-18",
		sources: ["Ethereum Yellow Paper", "EIP-1559"],
		relatedToolSlug: "takilan-islem",
		content: `
## Nonce Mantığı Neden İşlemleri Kilitler?

Ethereum ve EVM blokzincirlerinde bir adresten çıkan işlemler sırayla (0, 1, 2...) işlenir. Bu ardışık sayıya **Nonce** denir.
		`
	},
	{
		slug: "trc20-mi-bep20-mi",
		title: "TRC20 mi BEP20 mi? Hangisi Daha Ucuz ve Güvenli?",
		summary: "Tether (USDT) transferlerinde karşılaşılan Tron (TRC20) ve BNB Chain (BEP20) protokollerinin hız, komisyon ve borsa desteği açısından karşılaştırması.",
		category: "Protokol Kıyası",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "6 dk",
		publishedAt: "2026-01-22",
		reviewedAt: "2026-03-01",
		sources: [
			"Tron Protocol Specification & Energy Model Documentation",
			"BNB Chain Whitepaper & Gas Fee Mechanism",
			"Tether Transparency Reports: Multi-chain Distribution"
		],
		relatedToolSlug: "maliyet-karsilastirici",
		content: `
## İki Popüler Transfer Ağı: Temel Farklar

Tether (USDT) taşırken en sık tercih edilen iki ağ Tron (TRC-20) ve BNB Smart Chain (BEP-20) protokolleridir. Her iki ağın güçlü ve zayıf yönleri:

### 1. Transfer Maliyeti ve Komisyonlar
- **BEP-20:** Genellikle 0.10$ - 0.30$ arasında son derece düşük transfer ücreti sunar.
- **TRC-20:** Tron ağında enerji mekanizması nedeniyle cüzdandan cüzdana transfer ücreti 1.5$ - 3.5$ civarına yükselebilir. Borsa çekim ücretleri ise genellikle 1$ seviyesindedir.

### 2. Borsa Desteği ve Likidite
- **TRC-20:** Türkiye'deki tüm yerel borsalarda (BtcTurk, Paribu) ve küresel platformlarda en yüksek kabul oranına sahip standarttır.
- **BEP-20:** Binance ekosisteminde varsayılan ağdır; ancak bazı yerli borsalar BEP-20 USDT yatırma seçeneğini desteklemeyebilir.

### Özet Karar Tablosu
- **Yerel Türk Borsaları Arasında:** TRC-20 en güvenli ve yaygın seçimdir.
- **Binance ve Kişisel Cüzdanlar Arasında:** BEP-20 işlem başına en düşük komisyonu sağlar.
		`
	},
	{
		slug: "trc20-erc20-bep20-farki-ve-kullanimi",
		title: "TRC20, ERC20 ve BEP20 Farkı: Hangisi Ne Zaman Seçilmeli?",
		summary: "Tether (USDT) transferlerinde karşılaşılan ağ protokollerinin hız, komisyon, güvenlik ve borsa uyumluluk kıyaslaması.",
		category: "Blokzincir",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "6 dk",
		publishedAt: "2026-02-22",
		reviewedAt: "2026-02-22",
		sources: ["Tether Multi-chain Architecture", "Tron Energy Model"],
		relatedToolSlug: "adres-ag-eslestirici",
		content: `
## Ağ Standartları Neden Birbirinden Farklıdır?

Tether (USDT) tek başına bir blokzincir değildir; farklı blokzincirler üzerinde akıllı sözleşmeler aracılığıyla basılan bir sabit kripto paradır.
		`
	},
	{
		slug: "seed-phrase-guvenligi",
		title: "Seed Phrase Güvenliği: 12 Kelimeyi Nasıl Saklamalısın?",
		summary: "Gizli kurtarma kelimelerinin dijital ortamlarda tutulmasının ölümcül riskleri, metal plaka kullanımı ve soğuk saklama prensipleri.",
		category: "Güvenlik",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "9 dk",
		publishedAt: "2026-01-28",
		reviewedAt: "2026-03-01",
		sources: [
			"BIP-0039: Mnemonic code for generating deterministic keys",
			"National Institute of Standards and Technology (NIST) Key Management Guidelines",
			"Ledger Security Research: Physical Seed Backup Resilience Tests"
		],
		relatedToolSlug: "cuzdan-guvenlik-kontrolu",
		content: `
## Kripto Güvenliğinde En Zayıf Halka İnsandır

Blokzincir kriptografisi matematiksel olarak kırılamaz; saldırganların hedefi doğrudan kullanıcıların dikkatsizliğidir. 12 veya 24 kelimelik kurtarma ifaden (Seed Phrase), cüzdanındaki tüm fonların ana anahtarıdır.

### ASLA Yapılmaması Gerekenler:
1. **Fotoğrafını Çekme:** Telefon kameraları, galeri bulut senkronizasyonları (iCloud, Google Photos) siber saldırganların ilk hedefidir.
2. **Dijital Not Tutma:** WhatsApp kendine mesaj, şifresiz metin belgesi, e-posta taslağı gibi yerlerde kelimeleri tutmak cüzdanın boşaltılmasına davetiye çıkarır.
3. **Kelimeleri Kimseye Verme:** Destek personeli, borsa yetkilisi veya cüzdan güncellemesi adıyla kelimelerini isteyen herkes dolandırıcıdır.

### Güvenli Saklama Standartları:
- **Paslanmaz Çelik Metal Plaka:** Yangın, sel ve fiziksel aşınmalara karşı dayanıklı metal plakalar kağıt notlardan kat be kat güvenlidir.
- **Coğrafi Ayrım:** Yedekleri tek bir lokasyonda değil, deprem ve yangın riskine karşı farklı güvenli fiziksel noktalarda sakla.
		`
	},
	{
		slug: "cuzdan-guvenligi-temelleri",
		title: "Kripto Cüzdan Güvenliğinin 10 Altın Kuralı",
		summary: "Tohum kelimelerin fiziksel saklanması, donanım cüzdan ayrımı ve Web3 izin hijyeni rehberi.",
		category: "Güvenlik",
		author: "Kriptonik Teknik Saha Ekibi",
		readTime: "8 dk",
		publishedAt: "2026-02-27",
		reviewedAt: "2026-02-27",
		sources: ["BIP-0039 Standard", "NIST Guidelines"],
		relatedToolSlug: "cuzdan-guvenlik-kontrolu",
		content: `
## Kripto Güvenliğinde En Zayıf Halka İnsandır

Blokzincir şifrelemesi matematiksel olarak kırılamaz; saldırganların hedefi doğrudan kullanıcıların dikkatsizliğidir.
		`
	}
];
