export interface Guide {
	slug: string;
	title: string;
	summary: string;
	category: string;
	readTime: string;
	reviewedAt: string;
	content: string;
	relatedToolSlug?: string;
}

export const guidesData: Guide[] = [
	{
		slug: "yanlis-aga-gonderilen-kripto-ilk-10-dakika",
		title: "Yanlış Ağa Gönderilen Kripto İçin İlk 10 Dakika Rehberi",
		summary: "Transferiniz yanlış ağa gittiğinde panik yapmadan önce izlemeniz gereken acil eylem planı ve kurtarma olasılıkları.",
		category: "Sorun Çözümü",
		readTime: "6 dk",
		reviewedAt: "2026-02-15",
		relatedToolSlug: "yanlis-aga-gonderdim",
		content: `
## 1. Panik Yapmayın ve Dolandırıcılardan Korunun

Kripto para transferlerinde yanlış ağ seçimi en yaygın kullanıcı hatalarından biridir. Ancak en kritik kural şudur: **Blokzincirde token'lar buharlaşıp yok olmaz.** Yanlış ağa gönderilen bir bakiye, gönderilen o ağ üzerinde hedef adresin kontrolünde kalır.

Telegram veya X (Twitter) üzerinden 'özel anahtarınızı verin, paranızı kurtaralım' diyen hiç kimseye inanmayın. Bu kişilerin tamamı dolandırıcıdır.

## 2. Alıcı Adres Kime Ait?

Kurtarılabilirlik durumunu belirleyen temel ayrım alıcı adresin mülkiyetidir:

- **Eğer alıcı kendi kişisel cüzdanınızsa (MetaMask, Trust Wallet, Rabby):** Kurtarılabilirlik şansı neredeyse kesindir. Çünkü özel anahtar (private key) sizdedir. Cüzdanınıza parayı gönderdiğiniz ağı (örneğin BNB Smart Chain veya Polygon) RPC olarak ekleyip ilgili token sözleşme adresini içe aktardığınızda bakiyeniz görünecektir.
- **Eğer alıcı bir merkezi borsa ise (BtcTurk, Paribu, Binance):** Özel anahtarlar borsanın kontrolündedir. Borsa o token'ı o ağda listelemiyorsa bakiye borsa havuzuna ulaşmış ancak kullanıcı hesabınıza yansımamış olur. Bu durumda borsa destek merkezine resmi 'Hatalı Ağ Yatırma İadesi' başvurusu yapılması gerekir.

## 3. İlk 10 Dakikada Yapılması Gerekenler

1. **TXID (İşlem Kodu) Kaydedin:** Çıkış yaptığınız borsa veya cüzdandan transferin işlem hash'ini kopyalayın.
2. **Blok Gezgininde Durumu Teyit Edin:** BscScan, Etherscan veya Tronscan üzerinden transferin başarıyla sonuçlanıp sonuçlanmadığını kontrol edin.
3. **Kriptonik Yanlış Ağa Gönderdim Sihirbazını Çalıştırın:** Adres formatı ve ağ kombinasyonuna göre kişiselleştirilmiş kurtarma yönergelerini ve resmi destek mesaj şablonunu oluşturun.
		`
	},
	{
		slug: "metamask-takilan-islem-hizlandirma-iptal",
		title: "MetaMask'ta Takılan İşlemi Hızlandırma ve İptal Etme",
		summary: "Düşük gas nedeniyle saatlerce 'Pending' kalan Ethereum ve EVM işlemlerini Nonce mantığıyla iptal etme veya hızlandırma.",
		category: "EVM & Cüzdan",
		readTime: "5 dk",
		reviewedAt: "2026-02-18",
		relatedToolSlug: "takilan-islem",
		content: `
## Nonce Mantığı Neden İşlemleri Kilitler?

Ethereum ve EVM blokzincirlerinde bir adresten çıkan işlemler sırayla (0, 1, 2...) işlenir. Bu ardışık sayıya **Nonce** denir. Eğer 14 numaralı işleminizin gas ücreti ağ yoğunluğu nedeniyle yetersiz kalırsa, arkasından gönderdiğiniz 15 ve 16 numaralı işlemler ne kadar yüksek gas öderse ödesin 14 numara onaylanmadan işlenemez.

## Çözüm 1: MetaMask İçi "Hızlandır" Butonu

MetaMask cüzdanında bekleyen işlemin altında bulunan **Hızlandır (Speed Up)** butonuna bastığınızda, MetaMask aynı Nonce numarası ile yaklaşık %10-25 daha yüksek bir öncelik ücreti (priority fee) tanımlar. Madenciler yeni işlemi fark edip bloğa dahil eder.

## Çözüm 2: Özel Nonce ile 0 ETH Göndererek İptal Etme

Eğer işlem hızlandırılamıyorsa veya işlemi tamamen iptal etmek istiyorsanız:

1. MetaMask Ayarlar -> Gelişmiş -> **Özel İşlem Nonce'ı (Customize transaction nonce)** seçeneğini açın.
2. Takılan işlemin üzerine tıklayıp Nonce numarasını not edin (Örn: Nonce 14).
3. Kendi cüzdan adresinize 0 ETH tutarında yeni bir transfer başlatın.
4. Nonce kutusuna takılan işlemin numarasını (14) yazın.
5. Gas ayarını 'Agresif / Yüksek' olarak belirleyin ve imzalayın.
6. Bu 0 ETH işlemi onaylandığında, madenciler aynı nonce'a sahip takılan eski işlemi ağdan düşürür.
		`
	},
	{
		slug: "bitcoin-islemi-onaylanmiyorsa-ne-yapilir",
		title: "Bitcoin İşlemi Onaylanmıyorsa Ne Yapılır? (RBF ve CPFP Rehberi)",
		summary: "Mempool kuyruğunda bekleyen Bitcoin transferlerini RBF ile hızlandırma veya CPFP ile çekme kılavuzu.",
		category: "Bitcoin",
		readTime: "7 dk",
		reviewedAt: "2026-02-20",
		relatedToolSlug: "takilan-islem",
		content: `
## Bitcoin Transferleri Neden Takılır?

Bitcoin ağında blok büyüklüğü sınırlıdır (yaklaşık 4 MB / 1 milyon vB). Her 10 dakikada sadece bir blok kazılabilir. Ağdaki transfer sayısı arttığında madenciler en yüksek sat/vB (satoshi / sanal bayt) ücreti teklif eden transferleri önceliklendirir. Düşük ücretli işlemler mempool kuyruğunda beklemeye başlar.

## 1. RBF (Replace-by-Fee) Yöntemi

Gönderim yaptığınız cüzdanda RBF aktifse:
- Cüzdanınızda bekleyen işleme tıklayın ve 'Ücreti Artır (Increase Fee)' seçeneğini seçin.
- Güncel mempool temizlenme oranından daha yüksek bir sat/vB belirleyin (Örn: 12 yerine 25 sat/vB).
- Cüzdan aynı UTXO girdilerini kullanarak daha yüksek ücretli yeni bir işlem üretir ve eskisinin yerine geçer.

## 2. CPFP (Child-Pays-For-Parent) Yöntemi

Eğer transferin alıcısı sizseniz ve gönderici RBF açmadıysa:
- Henüz onaylanmamış bu gelen parayı (UTXO) yeni bir transferde harcayın.
- Yeni transfere çok yüksek bir madenci komisyonu koyun.
- Madenciler yüksek ücretli bu yeni 'çocuk' işlemi onaylayabilmek için mecburen bekleyen 'ana' işlemi de aynı bloğa almak zorunda kalır.
		`
	},
	{
		slug: "trc20-erc20-bep20-farki-ve-kullanimi",
		title: "TRC20, ERC20 ve BEP20 Farkı: Hangisi Ne Zaman Seçilmeli?",
		summary: "Tether (USDT) transferlerinde karşılaşılan ağ protokollerinin hız, komisyon, güvenlik ve borsa uyumluluk kıyaslaması.",
		category: "Blokzincir",
		readTime: "6 dk",
		reviewedAt: "2026-02-22",
		relatedToolSlug: "adres-ag-eslestirici",
		content: `
## Ağ Standartları Neden Birbirinden Farklıdır?

Tether (USDT) tek başına bir blokzincir değildir; farklı blokzincirler üzerinde akıllı sözleşmeler aracılığıyla basılan bir sabit kripto paradır.

### 1. TRC-20 (Tron Ağı)
- **Adres Biçimi:** 'T' harfiyle başlar (Örn: TR7NHqje...).
- **Ortalama Maliyet:** ~1.5$ - 3.5$ (Enerji durumuna göre).
- **Hız:** 1-2 dakika.
- **Kullanım Alanı:** Türk borsaları ve küresel borsalar arasındaki hızlı ve ucuz USDT taşımalarında en yaygın protokoldür.

### 2. ERC-20 (Ethereum Mainnet)
- **Adres Biçimi:** '0x' ile başlar.
- **Ortalama Maliyet:** 3$ - 15$ (Gas yoğunluğuna göre).
- **Hız:** 3-5 dakika.
- **Kullanım Alanı:** En yüksek kurumsal güvenlik standardıdır; kurumsal saklama kuruluşları ve DeFi borç verme protokollerinde tercih edilir.

### 3. BEP-20 (BNB Smart Chain)
- **Adres Biçimi:** '0x' ile başlar.
- **Ortalama Maliyet:** <0.15$.
- **Hız:** 3-5 saniye.
- **Kullanım Alanı:** Bireysel cüzdanlar ve Binance ekosistemi içinde son derece düşük maliyetli transferler.
		`
	},
	{
		slug: "usdt-tl-cevirmenin-gercek-maliyeti",
		title: "USDT'yi TL'ye Çevirmenin Gerçek Maliyeti ve Komisyon Tuzakları",
		summary: "Borsaların sıfır komisyon yanılgısı, alış-satış spreadi (makas farkı) ve banka çekim masraflarının matematiksel analizi.",
		category: "Finans & Borsa",
		readTime: "5 dk",
		reviewedAt: "2026-02-24",
		relatedToolSlug: "maliyet-karsilastirici",
		content: `
## Reklamı Yapılan %0 Komisyon Gerçek mi?

Birçok kripto borsası 'TRY çiftlerinde sıfır komisyon' kampanyaları düzenler. Ancak borsaların ana gelir kaynağı yalnızca komisyon yüzdeleri değildir.

### 1. Alış-Satış Makas Farkı (Spread)
Piyasa derinliği sığ olan tahtalarda alış ve satış fiyatı arasında %0.3 ile %1.5 arasında gizli bir makas bulunur. Piyasa emriyle işlem yaptığınızda doğrudan bu makas farkını borsa kârı olarak ödersiniz.

### 2. Ağ Transfer ve Çekim Masrafları
Global borsadan yerel borsaya USDT aktarırken ödenen TRC20/ERC20 çekim bedelleri küçük tutarlarda efektif maliyeti ciddi şekilde artırır.

### En Ucuz TL Çevrim Rotası
1. Limit emir (maker) kullanarak işlem yapın.
2. Transfer ağlarında sabit çekim ücreti en düşük olan ağı tercih edin.
3. Kriptonik Gerçek Maliyet Kıyaslayıcı ile anlık net elinize geçecek tutarı hesaplayın.
		`
	},
	{
		slug: "borsa-depozito-adresini-dogrulama",
		title: "Borsa Depozito Adresini Doğrulama ve Güvenli Transfer Rehberi",
		summary: "Adres zehirleme (poisoning) saldırıları, clipper trojan virüsleri ve borsa yatırma ekranlarındaki dikkat edilmesi gereken noktalar.",
		category: "Güvenlik",
		readTime: "6 dk",
		reviewedAt: "2026-02-25",
		relatedToolSlug: "adres-ag-eslestirici",
		content: `
## Adres Kopyalarken Karşılaşılan En Büyük Tehlikeler

### 1. Clipper Trojan Virüsleri
Bilgisayarınıza veya telefonunuza sızan zararlı yazılımlar panonuzu (clipboard) izler. Siz bir kripto adresi kopyaladığınızda, panodaki adresi saldırganın aynı karakterlerle başlayan benzer bir adresiyle saniyesinde değiştirir.

### 2. Adres Zehirleme (Address Poisoning)
Saldırganlar cüzdanınıza 0 tutarlı işlemler göndererek işlem geçmişinizi sizin adresinize çok benzeyen (ilk 4 ve son 4 karakteri aynı) sahte adreslerle doldurur. Geçmişten adres kopyalamak varlık kaybına yol açabilir.

### Güvenli Doğrulama Adımları:
- Adresin yalnızca ilk ve son karakterlerini değil, ortasındaki en az 6 karakteri de gözle teyit edin.
- Büyük tutarlı bir gönderim yapmadan önce her zaman sembolik 1-2 dolarlık test transferi gönderin.
		`
	},
	{
		slug: "memo-tag-nedir-unutursan-ne-olur",
		title: "Memo ve Destination Tag Nedir? Unutulursa Ne Olur?",
		summary: "XRP, XLM, TON ve Cosmos ağlarında borsalara para yatırırken kullanılan ortak havuz etiketinin önemi ve kurtarma süreci.",
		category: "Transfer",
		readTime: "5 dk",
		reviewedAt: "2026-02-26",
		relatedToolSlug: "yanlis-aga-gonderdim",
		content: `
## Neden Bazı Kripto Paralar Memo / Tag İster?

Bitcoin veya Ethereum ağlarında borsalar her kullanıcıya özel bağımsız bir cüzdan adresi tanımlayabilir. Ancak XRP, Stellar (XLM) veya TON gibi ağlarda hesap açma maliyetlerini ve defter yükünü azaltmak amacıyla borsa tek bir devasa ana cüzdan kullanır.

Bu ana cüzdana gelen paranın hangi kullanıcıya ait olduğunu ayırt eden tek şey **Memo / Destination Tag** numarasıdır.

## Memo Yazmayı Unutursanız Ne Olur?
Para borsanın ana cüzdanına başarıyla ulaşır ancak kimin hesabına yükleneceği bilinemediği için havuzda askıda kalır.

### Kurtarma Adımları:
1. Borsanın müşteri destek paneline gidin.
2. 'Unutulan Tag / Memo İle Yatırma İncelemesi' talebi açın.
3. Transferin TXID kodunu ve kaynak cüzdan ekran görüntüsünü yükleyin.
4. Çoğu borsa küçük bir işlem ücreti karşılığında veya ücretsiz olarak 24-72 saat içinde bakiyeyi hesabınıza manuel olarak tanımlar.
		`
	},
	{
		slug: "cuzdan-guvenligi-temelleri",
		title: "Kripto Cüzdan Güvenliğinin 10 Altın Kuralı",
		summary: "Tohum kelimelerin fiziksel saklanması, donanım cüzdan ayrımı ve Web3 izin hijyeni rehberi.",
		category: "Güvenlik",
		readTime: "8 dk",
		reviewedAt: "2026-02-27",
		relatedToolSlug: "cuzdan-guvenlik-kontrolu",
		content: `
## Kripto Güvenliğinde En Zayıf Halka İnsandır

Blokzincir şifrelemesi matematiksel olarak kırılamaz; saldırganların hedefi doğrudan kullanıcıların dikkatsizliğidir.

1. **Dijital Yedekleme Yapmayın:** Tohum kelimelerinizi (seed phrase) telefon galerisinde, bulutta (iCloud, Google Drive) veya şifresiz notlarda ASLA tutmayın.
2. **Metal Plaka Kullanın:** Yangın ve su baskınına dayanıklı paslanmaz çelik plakalar kağıt yedeklere göre çok daha güvenlidir.
3. **Sıcak ve Soğuk Cüzdanı Ayırın:** Günlük dApp etkileşimleri ve airdrop işlemleri için 'yakıcı (burner)' cüzdan kullanın; ana birikiminizi dApp'lere asla bağlamayın.
4. **2FA Güvenliği:** Kripto borsalarında SMS 2FA yerine donanım anahtarı (YubiKey) veya Authenticator uygulaması kullanın.
		`
	},
	{
		slug: "phishing-ve-sahte-airdrop-kaliplari",
		title: "Phishing ve Sahte Airdrop Tuzakları Nasıl Anlaşılır?",
		summary: "Web3 drainer yazılımları, eth_sign onayları ve sahte sosyal medya çekilişlerini tanıma rehberi.",
		category: "Güvenlik",
		readTime: "6 dk",
		reviewedAt: "2026-02-28",
		relatedToolSlug: "cuzdan-guvenlik-kontrolu",
		content: `
## Tipik Sahte Airdrop Senaryosu

Twitter/X üzerinde mavi tikli sahte bir hesap, tanınmış bir projenin (örneğin Arbitrum veya Blur) resmi hesabını taklit ederek acil bir airdrop duyurusu yapar: 'Son 2 saat! Hak ettiğiniz tokenları almak için cüzdanınızı bağlayın.'

Siteye girdiğinizde karşınıza çıkan sözleşme imzası standart bir mesaj gibi görünür ancak arka planda bir **Wallet Drainer (Cüzdan Boşaltıcı)** çalışmaktadır.

### Dikkat Edilmesi Gereken İpuçları:
- Cüzdanınız 'eth_sign' veya 'Permit' gibi sınırsız harcama yetkisi istiyorsa derhal pencereyi kapatın.
- Discord veya Telegram üzerinden gelen özel yardım mesajlarına asla yanıt vermeyin.
- Web sitesi URL adresinin resmi alan adıyla harfi harfine uyuştuğunu teyit edin.
		`
	},
	{
		slug: "kurtarma-dolandiriciliklari",
		title: "Kayıp Kripto Kurtarma Dolandırıcılıkları (Recovery Scams)",
		summary: "'Çalınan veya yanlış ağa giden parayı geri getiririz' vaadiyle mağdurları ikinci kez soyan sahte kurtarma uzmanları.",
		category: "Güvenlik",
		readTime: "5 dk",
		reviewedAt: "2026-03-01",
		relatedToolSlug: "yanlis-aga-gonderdim",
		content: `
## Çift Mağduriyet Tuzağı

Kripto parasını çaldıran veya yanlış adrese gönderen kullanıcılar panikle arama motorlarında veya sosyal medyada çözüm arar. Bu platformların yorum bölümlerinde botlar tarafından yazılmış şu tarz mesajlar yer alır: 'Ben de paramı kaybetmiştim, Instagram'daki @kurtarma_uzmani sayesinde 1 saatte geri aldım.'

### Gerçekler:
- Blokzincir üzerindeki transferler matematiksel olarak tek taraflı geri döndürülemez.
- Hiçbir şahıs veya hacker blokzincire girip giden parayı zorla geri alamaz.
- Sizden ön ödeme, komisyon veya cüzdan kelimelerinizi isteyen bu sözde uzmanlar dolandırıcıdır.
		`
	},
	{
		slug: "dca-nedir-nasil-test-edilir",
		title: "DCA (Dolar Maliyet Ortalaması) Stratejisi Nedir ve Nasıl Uygulanır?",
		summary: "Piyasa zamanlaması yapmadan düzenli alım yapmanın matematiksel avantajları ve psikolojik faydaları.",
		category: "Yatırım Stratejisi",
		readTime: "6 dk",
		reviewedAt: "2026-03-02",
		relatedToolSlug: "dca-simulator",
		content: `
## Piyasanın Dibini Yakalamak Neden İmkansızdır?

Kripto para piyasalarında en çok kayıp yaşayan yatırımcılar genellikle 'tam dipten alıp tam tepeden satmaya' çalışanlardır. DCA (Dollar Cost Averaging) stratejisi bu duygusal stresi tamamen ortadan kaldırır.

### DCA Nasıl Çalışır?
Fiyat ister 90.000$ olsun ister 60.000$, her ay sabit bir bütçeyle (örneğin 100$) alım yaparsınız. Fiyat düştüğünde daha fazla coin, yükseldiğinde daha az coin alarak ortalama maliyetinizi piyasanın altına çekersiniz.

Kriptonik DCA Simülatörü ile geçmiş 3-5 yıldaki düzenli alımların getirisini test edebilirsiniz.
		`
	},
	{
		slug: "kaldiracta-likidasyon-nasil-hesaplanir",
		title: "Kaldıraçlı İşlemlerde Likidasyon Fiyatı Nasıl Hesaplanır?",
		summary: "İzole ve çapraz marjin farkı, bakım teminatı oranı (MMR) ve tasfiye riskini sıfıra indirme yöntemleri.",
		category: "Finans & Türev",
		readTime: "7 dk",
		reviewedAt: "2026-03-03",
		relatedToolSlug: "kaldirac-likidasyon",
		content: `
## Kaldıraç Çift Taraflı Bir Kılıçtır

10x kaldıraç kullandığınızda %10'luk bir yükseliş paranızı ikiye katlar; ancak %10'luk bir düşüş tüm sermayenizi sıfırlar.

### Likidasyon Formülü
Long pozisyon için yaklaşık likidasyon seviyesi:
\`\`\`
Likidasyon Fiyatı = Giriş Fiyatı × (1 - 1/Kaldıraç + Bakım Teminatı Oranı)
\`\`\`
Örneğin 80.000$ fiyattan 20x kaldıraçla açılan bir Long pozisyon, fiyat %4.5 düştüğünde (~76.400$) likidasyona uğrar.

### Risk Yönetimi İpuçları:
- Pozisyon büyüklüğünüzü sermayenizin küçük bir bölümüyle sınırlandırın.
- Her zaman zorunlu 'Stop-Loss (Zarar Durdur)' emri kullanın.
		`
	},
	{
		slug: "stablecoin-depeginde-ne-olur",
		title: "Stablecoin Depeg Yaşadığında Ne Olur? Panik Satışından Kaçınma",
		summary: "1.00$ çıpasından sapan kripto paralarda itfa mekanizması, arbitraj dengesi ve portföy risk dağıtımı.",
		category: "DeFi",
		readTime: "6 dk",
		reviewedAt: "2026-03-04",
		relatedToolSlug: "depeg-monitoru",
		content: `
## Depeg Durumu Her Zaman İflas Anlamına mı Gelir?

Bir stablecoin'in fiyatı ikincil borsalarda 0.98$ veya 0.95$ seviyesine indiğinde yatırımcılar panikle satışa geçebilir. Ancak depegin niteliği önemlidir:

- **Geçici Likidite Sıkışması:** İhraççının rezervleri sağlam olmasına rağmen anlık satış baskısı nedeniyle DEX havuzları dengesizleşmişse, kurumsal arbitrajcılar piyasayı kısa sürede 1.00$ seviyesine geri taşır.
- **Yapısal Teminat Kaybı:** Algoritmik mekanizmaların çökmesi (Terra LUNA UST gibi) geri dönülemez bir ölüm sarmalı yaratabilir.

### Ne Yapılmalıdır?
Tek bir stablecoin'e tüm nakit varlığınızı bağlamayın; rezervlerinizi USDT, USDC gibi farklı regülasyonlara tabi varlıklar arasında dağıtın.
		`
	},
	{
		slug: "gas-ucreti-nasil-dusurulur",
		title: "Ethereum ve Blokzincir Gas Ücretleri Nasıl Düşürülür?",
		summary: "En ucuz transfer saatleri, Layer-2 rollup kullanımı ve EIP-1559 bahşiş optimizasyonu rehberi.",
		category: "Optimizasyon",
		readTime: "5 dk",
		reviewedAt: "2026-03-05",
		relatedToolSlug: "gas-ucret-takip",
		content: `
## Komisyonları %90 Düşürmenin Yolları

1. **Hafta Sonu ve Gece Saatlerini Tercih Edin:** Türkiye saatiyle cumartesi-pazar sabah saatlerinde (04:00 - 08:00) küresel işlem hacmi düşer ve Ethereum gas ücretleri dip seviyeleri görür.
2. **Layer-2 Katmanlarını Kullanın:** Arbitrum, Optimism ve Base ağları Ethereum güvenliğini paylaşırken işlem maliyetlerini birkaç kuruşa indirir.
3. **Öncelik Ücretini (Priority Fee) Optimize Edin:** Acil olmayan transferlerde MetaMask gelişmiş gas ayarlarından öncelik bahşişini 1 Gwei seviyesine çekebilirsiniz.
		`
	},
	{
		slug: "sinirsiz-token-izni-nasil-iptal-edilir",
		title: "Sınırsız Token Harcama İzinleri (Approval) Nasıl İptal Edilir?",
		summary: "DEX ve NFT pazar yerlerine verilen harcama yetkilerinin oluşturduğu güvenlik açıkları ve Revoke araçları.",
		category: "Güvenlik",
		readTime: "5 dk",
		reviewedAt: "2026-03-06",
		relatedToolSlug: "cuzdan-guvenlik-kontrolu",
		content: `
## Sınırsız İzin Neden Tehlikelidir?

Bir DeFi platformunda (örneğin Uniswap veya SushiSwap) token takası yaparken platform sizden 'USDT harcama izni' ister. Çoğu kullanıcı her seferinde gas ödememek için varsayılan 'Sınırsız (Unlimited)' seçeneğini onaylar.

Eğer o akıllı sözleşmede bir gün bir güvenlik açığı keşfedilirse, bilgisayar korsanları cüzdanınızdaki tüm USDT'leri sizin haberiniz olmadan çekebilir.

### İzinleri İptal Etme Adımları:
1. Resmi güvenilir bir izin denetleme platformuna (örneğin Etherscan Token Approval veya Revoke.cash) cüzdanınızı bağlayın.
2. Cüzdanınızdaki aktif sözleşme izinlerini listeleyin.
3. Artık kullanmadığınız veya şüpheli gördüğünüz platformların izinlerini 'Revoke (İptal)' ederek sıfırlayın.
		`
	}
];
