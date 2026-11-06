export interface Term {
	slug: string;
	title: string;
	category: string;
	definition: string;
	example: string;
	relatedTerms: string[];
	relatedTool?: string;
}

export const termsData: Term[] = [
	{
		slug: "nonce",
		title: "Nonce (Sayısal İşlem Sırası)",
		category: "EVM",
		definition: "Ethereum ve EVM uyumlu blokzincirlerde bir adresten çıkan transferlerin sırasını belirleyen ardışık sayaçtır. Nonce sıfırdan başlar ve her işlemde bir artar. 5 numaralı nonce onaylanmadan 6 numaralı işlem çalışamaz.",
		example: "MetaMask'ta takılan 12 numaralı işlemi iptal etmek için aynı 12 numaralı nonce ile 0 ETH tutarında yüksek gas ücretli yeni bir işlem gönderilir.",
		relatedTerms: ["Gas", "EVM", "Mempool"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "gas",
		title: "Gas (İşlem Yakıtı)",
		category: "EVM",
		definition: "EVM blokzincirlerinde akıllı sözleşmeleri çalıştırmak veya transfer gerçekleştirmek için gereken hesaplama gücünün birimidir.",
		example: "Standart bir ETH transferi 21.000 gas birimi tüketirken, bir Uniswap token takası 150.000 gas tüketebilir.",
		relatedTerms: ["Gwei", "Wei", "Base Fee"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "gwei",
		title: "Gwei (Giga-wei)",
		category: "EVM",
		definition: "Ethereum gas fiyatlarını ifade etmek için kullanılan ölçü birimidir. 1 Gwei = 10^9 Wei = 0.000000001 ETH değerindedir.",
		example: "Gas fiyatı 20 Gwei olduğunda standart 21.000 birimlik ETH transferi 0.00042 ETH (~1.30$) tutar.",
		relatedTerms: ["Gas", "Wei", "Birim Çevirici"],
		relatedTool: "/araclar/birim-cevirici"
	},
	{
		slug: "wei",
		title: "Wei (En Küçük ETH Birimi)",
		category: "EVM",
		definition: "Ethereum'un bölünebileceği en küçük temel birimdir (1 ETH = 10^18 Wei). Adını kriptografi öncüsü Wei Dai'den almıştır.",
		example: "Akıllı sözleşmeler bakiye hesaplamalarını ondalıksız olarak Wei cinsinden tutar.",
		relatedTerms: ["Gwei", "Satoshi", "Birim Çevirici"],
		relatedTool: "/araclar/birim-cevirici"
	},
	{
		slug: "satoshi",
		title: "Satoshi (Sat)",
		category: "Bitcoin",
		definition: "Bitcoin'in en küçük birimidir (1 BTC = 100.000.000 Satoshi). Adını Bitcoin'in yaratıcısı Satoshi Nakamoto'dan alır.",
		example: "Kahve ödemesi veya Lightning Network transferlerinde '0.00005 BTC' demek yerine '5.000 sat' ifadesi kullanılır.",
		relatedTerms: ["Bitcoin", "UTXO", "Birim Çevirici"],
		relatedTool: "/araclar/birim-cevirici"
	},
	{
		slug: "mempool",
		title: "Mempool (Bellek Havuzu)",
		category: "Blokzincir",
		definition: "Düğümlere (node) ulaşmış ancak henüz madenciler veya doğrulayıcılar tarafından onaylanıp bir bloğa eklenmemiş bekleyen transferler kuyruğudur.",
		example: "Ağda volatilite arttığında mempool kuyruğu dolar ve düşük komisyonlu transferler beklemeye geçer.",
		relatedTerms: ["RBF", "Nonce", "Takılan İşlem"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "rbf",
		title: "RBF (Replace-by-Fee)",
		category: "Bitcoin",
		definition: "Bitcoin ağında henüz onay almamış bir işlemin, daha yüksek madenci komisyonu verilerek yeni bir işlemle ezilmesini ve hızlandırılmasını sağlayan standarttır (BIP-125).",
		example: "10 sat/vB ile gönderdiğiniz transfer beklemeye girdiyse, RBF destekleyen cüzdanınızdan 25 sat/vB teklif ederek işlemi bir sonraki bloğa aldırabilirsiniz.",
		relatedTerms: ["CPFP", "Mempool", "Satoshi"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "cpfp",
		title: "CPFP (Child-Pays-For-Parent)",
		category: "Bitcoin",
		definition: "Bekleyen bir Bitcoin transferinin çıktısını (UTXO) alıcının daha yüksek bir ücretle harcayarak, madencileri hem eski (ana) hem yeni (çocuk) işlemi birlikte onaylamaya teşvik etmesi yöntemidir.",
		example: "Size gelen transfer düşük ücret nedeniyle takıldıysa, o parayı yüksek komisyonla harcayarak ana transferin de onaylanmasını sağlarsınız.",
		relatedTerms: ["RBF", "UTXO", "Mempool"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "utxo",
		title: "UTXO (Unspent Transaction Output)",
		category: "Bitcoin",
		definition: "Bitcoin ve benzeri ağlarda henüz harcanmamış transfer çıktılarını ifade eder. Bakiye tek bir havuzda değil, bozuk para gibi ayrı UTXO parçalarında tutulur.",
		example: "Cüzdanınızda 0.5 BTC ve 0.3 BTC olmak üzere iki ayrı UTXO varsa ve 0.6 BTC gönderirseniz, iki UTXO birleşir ve 0.2 BTC para üstü olarak geri döner.",
		relatedTerms: ["Bitcoin", "Satoshi", "CPFP"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "seed-phrase",
		title: "Seed Phrase (Tohum / Kurtarma Cümlesi)",
		category: "Güvenlik",
		definition: "Cüzdandaki tüm özel anahtarları türetmeye yarayan 12 veya 24 adet standart İngilizce kelimeden oluşan kök anahtardır.",
		example: "Telefonunuz bozulsa veya cüzdanınız silinse bile 12 tohum kelimenizi yeni bir cihaza yazarak tüm bakiyenize yeniden erişebilirsiniz.",
		relatedTerms: ["Private Key", "Donanım Cüzdan", "Cüzdan"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "private-key",
		title: "Private Key (Özel Anahtar)",
		category: "Güvenlik",
		definition: "Blokzincir adresindeki varlıkları harcamak ve transfer imzalamak için gereken gizli matematiksel anahtardır.",
		example: "Özel anahtarınızı bilen herkes adresinizdeki tüm kripto parayı tek bir işlemle boşaltabilir.",
		relatedTerms: ["Public Key", "Seed Phrase", "Cüzdan"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "public-key",
		title: "Public Key (Genel Anahtar)",
		category: "Güvenlik",
		definition: "Özel anahtardan matematiksel olarak üretilen, cüzdan adresinizin temelini oluşturan ve herkesle paylaşılabilecek genel anahtardır.",
		example: "Public key üzerinden üretilen cüzdan adresinizi para almak için karşı tarafa güvenle iletebilirsiniz.",
		relatedTerms: ["Private Key", "Cüzdan", "Adres Doğrulama"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "cuzdan",
		title: "Kripto Cüzdanı (Wallet)",
		category: "Temel",
		definition: "Kripto paraları fiziksel olarak saklamayan, özel anahtarlarınızı yöneterek blokzincir üzerindeki varlıklarınıza erişim sağlayan yazılım veya donanım aracıdır.",
		example: "MetaMask, Phantom ve Trust Wallet en popüler yazılım cüzdanları arasındadır.",
		relatedTerms: ["Sıcak Cüzdan", "Soğuk Cüzdan", "Donanım Cüzdan"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "sicak-cuzdan",
		title: "Sıcak Cüzdan (Hot Wallet)",
		category: "Temel",
		definition: "İnternete sürekli bağlı olan bilgisayar, telefon veya tarayıcı eklentisi üzerinde çalışan kripto para cüzdanıdır.",
		example: "DApp'lere bağlanmak ve günlük al-sat yapmak için sıcak cüzdanlar tercih edilir ancak kötü amaçlı yazılımlara karşı soğuk cüzdanlara göre daha kırılgandır.",
		relatedTerms: ["Soğuk Cüzdan", "Cüzdan", "Donanım Cüzdan"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "soguk-cuzdan",
		title: "Soğuk Cüzdan (Cold Wallet)",
		category: "Güvenlik",
		definition: "Özel anahtarları internetten tamamen izole ortamda (çevrimdışı) saklayan cüzdan türüdür.",
		example: "Donanım cüzdanlar veya kağıt cüzdanlar soğuk cüzdan kategorisine girer.",
		relatedTerms: ["Donanım Cüzdan", "Sıcak Cüzdan", "Seed Phrase"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "donanim-cuzdan",
		title: "Donanım Cüzdanı (Hardware Wallet)",
		category: "Güvenlik",
		definition: "Özel anahtarları şifreli bir çip içinde saklayan ve işlemleri fiziksel tuş onayıyla imzalatan fiziksel elektronik cihazdır.",
		example: "Ledger ve Trezor gibi cihazlar bilgisayarınıza virüs bulaşsa dahi özel anahtarlarınızın çalınmasını engeller.",
		relatedTerms: ["Soğuk Cüzdan", "Private Key", "Seed Phrase"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "ag-network",
		title: "Ağ (Blokzincir Ağı / Network)",
		category: "Temel",
		definition: "Kendi mutabakat kuralları ve defteri olan bağımsız blokzincir ekosistemidir (Ethereum, BNB Chain, Tron, Solana vb.).",
		example: "Bir ağdan diğerine doğrudan transfer yapılamaz; yanlış ağ seçimi durumunda varlıklar kurtarma prosedürü gerektirebilir.",
		relatedTerms: ["TRC20", "ERC20", "BEP20"],
		relatedTool: "/araclar/yanlis-aga-gonderdim"
	},
	{
		slug: "trc20",
		title: "TRC-20 Standardı",
		category: "Tron",
		definition: "Tron blokzincirinde akıllı sözleşmeler aracılığıyla üretilen token standardıdır. Düşük transfer ücretleri nedeniyle USDT transferlerinde yaygın kullanılır.",
		example: "TR7NHqjeKQx... ile başlayan adresler Tron ağında TRC-20 formatına aittir.",
		relatedTerms: ["ERC20", "BEP20", "Ag"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "erc20",
		title: "ERC-20 Standardı",
		category: "EVM",
		definition: "Ethereum blokzinciri üzerinde mantıksal olarak birbirinin yerine geçebilir (fungible) token oluşturmak için kullanılan evrensel teknik standarttır.",
		example: "USDT, USDC, UNI ve LINK gibi popüler kripto paralar Ethereum üzerinde ERC-20 standardını uygular.",
		relatedTerms: ["TRC20", "BEP20", "Gas"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "bep20",
		title: "BEP-20 Standardı",
		category: "EVM",
		definition: "BNB Smart Chain (BSC) ağında kullanılan, ERC-20 standardı ile teknik olarak aynı mimariye sahip token protokolüdür.",
		example: "0x ile başlayan adresler hem Ethereum ERC-20 hem BNB Smart Chain BEP-20 transferleri için geçerlidir.",
		relatedTerms: ["ERC20", "TRC20", "EVM"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "spl",
		title: "SPL Token Standardı",
		category: "Solana",
		definition: "Solana blokzincirindeki token programı standardıdır (Solana Program Library).",
		example: "Solana cüzdanınızdaki USDC ve meme coin'ler SPL standardını kullanır.",
		relatedTerms: ["ERC20", "Ag"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "layer-2",
		title: "Layer 2 (İkinci Katman / L2)",
		category: "Ölçeklenebilirlik",
		definition: "Ana blokzincirin (Layer 1) işlem yükünü hafifletmek, transferleri hızlandırmak ve komisyonları düşürmek için ana zincirin üstüne kurulan ikincil protokollerdir.",
		example: "Arbitrum, Optimism ve Base, Ethereum için geliştirilmiş önde gelen Layer-2 çözümleridir.",
		relatedTerms: ["Rollup", "Gas", "Bridge"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "rollup",
		title: "Rollup (İyimser ve ZK Rolluplar)",
		category: "Ölçeklenebilirlik",
		definition: "Yüzlerce işlemi zincir dışında (off-chain) toplayıp tek bir kanıt paketi halinde ana ağa yazarak maliyetleri %95 düşüren L2 teknolojisidir.",
		example: "Optimistic Rollup ve ZK-Rollup olmak üzere iki temel mimari bulunur.",
		relatedTerms: ["Layer 2", "Gas"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "bridge",
		title: "Köprü (Blockchain Bridge)",
		category: "DeFi",
		definition: "Farklı blokzincir ağları arasında kripto varlık veya veri transferi yapılmasını sağlayan akıllı sözleşme protokolüdür.",
		example: "Ethereum ağındaki ETH'nizi Arbitrum ağına geçirmek için resmi Arbitrum Bridge kullanılır.",
		relatedTerms: ["Ag", "Layer 2", "Smart Contract"],
		relatedTool: "/araclar/yanlis-aga-gonderdim"
	},
	{
		slug: "stablecoin",
		title: "Stablecoin (Sabit Kripto Para)",
		category: "DeFi",
		definition: "Fiyatı genellikle 1 Amerikan Doları gibi bir itibari paraya veya emtiaya sabitlenmiş kripto paralardır.",
		example: "USDT, USDC ve DAI küresel piyasalarda en yüksek işlem hacmine sahip stablecoin'lerdir.",
		relatedTerms: ["Depeg", "USDT", "USDC"],
		relatedTool: "/araclar/depeg-monitoru"
	},
	{
		slug: "depeg",
		title: "Depeg (Sabit Fiyat Çıpasının Kırılması)",
		category: "DeFi",
		definition: "1.00$ değerine endeksli bir stablecoin'in piyasa paniği veya likidite kaybı nedeniyle bu değerin altına veya üstüne kayması durumudur.",
		example: "USDC, 2023 bankacılık krizinde kısa süreliğine 0.88$ seviyesine gerileyerek depeg yaşamış ve sonra toparlanmıştır.",
		relatedTerms: ["Stablecoin", "Spread"],
		relatedTool: "/araclar/depeg-monitoru"
	},
	{
		slug: "slippage",
		title: "Slippage (Fiyat Kayması)",
		category: "Ticaret",
		definition: "Emir verildiği andaki fiyat ile işlemin blokzincirde gerçekleştiği andaki gerçek fiyat arasındaki farktır.",
		example: "Likiditesi düşük bir altcoin takası yaparken %3 slippage ayarı verdiyseniz, işlem fiyatı %3'e kadar daha pahalı olabilir.",
		relatedTerms: ["Spread", "DEX", "AMM"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "spread",
		title: "Spread (Alış-Satış Makas Farkı)",
		category: "Ticaret",
		definition: "Bir piyasada en iyi alış teklifi (bid) ile en iyi satış teklifi (ask) arasındaki fiyat farkıdır.",
		example: "USDT borsa tahtasında alış 36.80 TL ve satış 36.85 TL ise spread 5 kuruştur (%0.13).",
		relatedTerms: ["Maker", "Taker", "Maliyet"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "maker",
		title: "Maker (Piyasa Yapıcı)",
		category: "Ticaret",
		definition: "Emir defterine hemen eşleşmeyen limit emir girerek tahtaya likidite sağlayan kullanıcıdır. Borsalar maker emirler için daha düşük komisyon keser.",
		example: "Mevcut fiyat 88.000$ iken 87.500$'a alış emri bırakırsanız emriniz deftere girer ve siz bir 'maker' olursunuz.",
		relatedTerms: ["Taker", "Limit Emri", "Spread"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "taker",
		title: "Taker (Piyasa Alıcı)",
		category: "Ticaret",
		definition: "Emir defterinde bekleyen mevcut emirleri anında kabul ederek likiditeyi tüketen kullanıcıdır. Taker komisyonları maker'a göre daha yüksektir.",
		example: "Piyasa fiyatından anında Bitcoin satın almak için market emri verdiğinizde taker komisyonu ödersiniz.",
		relatedTerms: ["Maker", "Market Emri"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "market-emri",
		title: "Market Emri (Piyasa Emri)",
		category: "Ticaret",
		definition: "İşlemin emir defterindeki o an mevcut en iyi fiyattan anında ve derhal gerçekleşmesini sağlayan emir tipidir.",
		example: "Acil alım yapmanız gerekiyorsa market emri kullanırsınız ancak tahtadaki spread nedeniyle ortalama alım maliyetiniz yükselebilir.",
		relatedTerms: ["Limit Emri", "Taker", "Slippage"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "limit-emri",
		title: "Limit Emri",
		category: "Ticaret",
		definition: "Kullanıcının belirlediği belirli bir fiyattan veya daha iyisinden gerçekleşmesi için emir defterine yazılan koşullu emirdir.",
		example: "BTC 88.000$ iken '85.000$'a gelirse 0.1 BTC al' emri bir limit emirdir.",
		relatedTerms: ["Market Emri", "Maker"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "likidasyon",
		title: "Likidasyon (Teminat Tasfiyesi)",
		category: "Finans",
		definition: "Kaldıraçlı vadeli işlem pozisyonunda teminatın, piyasanın tersine gitmesi sonucu borcu karşılayamaz hale gelip borsa tarafından zorla kapatılmasıdır.",
		example: "10x kaldıraçla Long pozisyon açtığınızda varlık %10 düştüğünde teminatınız tamamen erir ve likidasyon gerçekleşir.",
		relatedTerms: ["Kaldirac", "Marjin", "Bakim Teminati"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "kaldirac",
		title: "Kaldıraç (Leverage)",
		category: "Finans",
		definition: "Yatırılan özsermayenin (teminatın) katları büyüklüğünde pozisyon açarak kâr veya zarar potansiyelini katlama imkanı veren finansal mekanizmadır.",
		example: "1.000$ teminat ile 5x kaldıraç kullandığınızda 5.000$ değerinde pozisyon yönetirsiniz.",
		relatedTerms: ["Likidasyon", "Marjin", "Long"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "marjin",
		title: "Marjin (Teminat)",
		category: "Finans",
		definition: "Kaldıraçlı bir pozisyonu açmak ve açık tutabilmek için borsa hesabında kilitlenen başlangıç özkaynak tutarıdır.",
		example: "10.000$'lık bir işlem için 10x kaldıraçta 1.000$ başlangıç marjini gerekir.",
		relatedTerms: ["Kaldirac", "Bakim Teminati"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "bakim-teminati",
		title: "Bakım Teminatı (Maintenance Margin)",
		category: "Finans",
		definition: "Açık bir vadeli işlem pozisyonunun likidasyona uğramaması için hesapta bulunması zorunlu olan asgari marjin seviyesidir.",
		example: "Hesap marjini bakım teminatı oranının (MMR) altına indiği anda tasfiye motoru devreye girer.",
		relatedTerms: ["Likidasyon", "Marjin"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "fonlama-orani",
		title: "Fonlama Oranı (Funding Rate)",
		category: "Finans",
		definition: "Süresiz vadeli işlem (perpetual) sözleşme fiyatını spot endeks fiyatına yakın tutmak için Long ve Short pozisyon sahipleri arasında periyodik olarak ödenen ücrettir.",
		example: "Fonlama oranı pozitifse Long pozisyon açanlar Short pozisyon açanlara her 8 saatte bir ödeme yapar.",
		relatedTerms: ["Long", "Short", "Kaldirac"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "long",
		title: "Long Pozisyon (Uzun Pozisyon)",
		category: "Finans",
		definition: "Dayanak varlığın fiyatının gelecekte yükseleceği beklentisiyle açılan alım yönlü pozisyondur.",
		example: "Bitcoin 88.000$ iken Long açan yatırımcı fiyat 92.000$'a çıktığında kâr elde eder.",
		relatedTerms: ["Short", "Kaldirac", "Likidasyon"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "short",
		title: "Short Pozisyon (Kısa Pozisyon / Açığa Satış)",
		category: "Finans",
		definition: "Dayanak varlığın fiyatının düşeceği beklentisiyle açılan satış yönlü vadeli pozisyondur.",
		example: "Fiyatın düşeceğini tahmin edip Short açan bir yatırımcı fiyat geriledikçe kâr yazar.",
		relatedTerms: ["Long", "Kaldirac", "Likidasyon"],
		relatedTool: "/araclar/kaldirac-likidasyon"
	},
	{
		slug: "dca",
		title: "DCA (Dollar Cost Averaging / Düzenli Alım)",
		category: "Yatırım",
		definition: "Varlık fiyatına bakılmaksızın, önceden belirlenen düzenli zaman aralıklarında sabit tutarda alım yaparak ortalama maliyeti dengeleme stratejisidir.",
		example: "Piyasanın zirve veya dip olduğunu tahmin etmeye çalışmadan her ayın 1'inde 2.500 TL'lik Bitcoin almak klasik bir DCA yöntemidir.",
		relatedTerms: ["Ortalama Maliyet", "XIRR"],
		relatedTool: "/araclar/dca-simulator"
	},
	{
		slug: "ortalama-maliyet",
		title: "Ortalama Maliyet (Average Cost)",
		category: "Finans",
		definition: "Farklı tarihlerde farklı fiyatlardan alınan bir varlığın birim başına düşen ağırlıklı maliyetidir.",
		example: "100$'dan 1 adet ve 200$'dan 1 adet coin aldıysanız ortalama maliyetiniz 150$ olur.",
		relatedTerms: ["FIFO", "DCA", "Kar/Zarar"],
		relatedTool: "/araclar/kar-zarar-hesaplama"
	},
	{
		slug: "fifo",
		title: "FIFO (First In, First Out)",
		category: "Muhasebe",
		definition: "İlk giren ilk çıkar muhasebe prensibidir. Satış yapıldığında portföye en erken eklenen partinin satıldığı varsayılarak kâr/zarar hesaplanır.",
		example: "Ocak'ta 20.000$'a aldığınız 1 BTC ve Mart'ta 40.000$'a aldığınız 1 BTC varken Mayıs'ta 1 BTC satarsanız FIFO'ya göre Ocak maliyeti esas alınır.",
		relatedTerms: ["Ortalama Maliyet", "Kar/Zarar"],
		relatedTool: "/araclar/kar-zarar-hesaplama"
	},
	{
		slug: "xirr",
		title: "XIRR (Genişletilmiş İç Verim Oranı)",
		category: "Finans",
		definition: "Düzensiz veya farklı zamanlarda yapılan nakit giriş ve çıkışları dikkate alarak yıllık bileşik getiri oranını hesaplayan gelişmiş finansal metriktir.",
		example: "Farklı tarihlerde parça parça kripto alımı yapan bir yatırımcının yıllık gerçek getiri performansını XIRR gösterir.",
		relatedTerms: ["DCA", "APR", "APY"],
		relatedTool: "/araclar/dca-simulator"
	},
	{
		slug: "apr",
		title: "APR (Yıllık Yüzde Oranı)",
		category: "Finans",
		definition: "Bileşik faiz etkisi hesaba katılmadan, bir yatırımın veya borcun yıllık basit getiri/faiz oranıdır.",
		example: "%12 APR ile kilitlenen 1.000 TL, faiz getirisi tekrar yatırıma eklenmediğinde yıl sonunda 120 TL kazandırır.",
		relatedTerms: ["APY", "Staking"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "apy",
		title: "APY (Yıllık Bileşik Yüzde Getiri)",
		category: "Finans",
		definition: "Kazanılan faiz veya ödüllerin anaparaya eklenerek yeniden faiz kazandığı (bileşik getiri) yıllık gerçek kazanç oranıdır.",
		example: "Günlük bileşiklendirilen %12 APR, APY cinsinden yaklaşık %12.75 getiri sağlar.",
		relatedTerms: ["APR", "Staking"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "staking",
		title: "Staking (Pay Kanıtı Kilitleme)",
		category: "DeFi",
		definition: "Proof of Stake (PoS) blokzincirlerinde ağın güvenliğini sağlamak ve işlemleri doğrulamak amacıyla kripto paraları akıllı sözleşmede kilitleyerek düzenli ödül kazanma sürecidir.",
		example: "Ethereum ağında 32 ETH kilitleyerek doğrulayıcı çalıştıran kullanıcılar yıllık staking getirisi elde eder.",
		relatedTerms: ["Liquid Staking", "Validator", "Slashing"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "liquid-staking",
		title: "Liquid Staking (Likit Staking)",
		category: "DeFi",
		definition: "Kripto varlıkları stake ederken karşılığında 1:1 oranında likit türev token alarak, kilitli bakiyeyi DeFi protokollerinde kullanmaya devam etme yöntemidir.",
		example: "Lido üzerinde ETH stake ettiğinizde karşılığında stETH alarak hem stake ödülü kazanır hem de stETH'yi teminat olarak kullanabilirsiniz.",
		relatedTerms: ["Staking", "DeFi"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "validator",
		title: "Doğrulayıcı (Validator)",
		category: "Blokzincir",
		definition: "Proof of Stake ağlarında yeni blokları öneren, oylayan ve zincire ekleyen tam düğüm işleticisidir.",
		example: "Ethereum doğrulayıcısı ağ kurallarına uygun çalıştığı sürece blok ödülü alır.",
		relatedTerms: ["Staking", "Slashing"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "slashing",
		title: "Slashing (Ceza Kesintisi)",
		category: "Blokzincir",
		definition: "PoS ağlarında bir doğrulayıcının kötü niyetli davranması (çift imza) veya uzun süre çevrimdışı kalması durumunda kilitli teminatının bir kısmına el konulmasıdır.",
		example: "Kural ihlali yapan doğrulayıcının stake ettiği ETH'lerin bir kısmı yakılarak cezalandırılır.",
		relatedTerms: ["Validator", "Staking"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "airdrop",
		title: "Airdrop (Ücretsiz Token Dağıtımı)",
		category: "Temel",
		definition: "Yeni bir blokzincir veya DeFi projesinin, erken kullanıcılarını ödüllendirmek veya topluluk oluşturmak amacıyla cüzdanlara ücretsiz token dağıtmasıdır.",
		example: "Uniswap veya Arbitrum'u erken dönemde kullanan cüzdanlara binlerce dolarlık token airdrop edilmiştir.",
		relatedTerms: ["Drainer", "Phishing"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "drainer",
		title: "Cüzdan Boşaltıcı (Wallet Drainer)",
		category: "Güvenlik",
		definition: "Sahte airdrop veya phishing siteleri aracılığıyla kullanıcılara zararlı akıllı sözleşme izni (permit/approval) imzalattırarak cüzdandaki tüm varlıkları saniyeler içinde çalan kötü amaçlı yazılımlardır.",
		example: "Bedava NFT vaat eden sahte bir sitede 'Claim' butonuna basıp imza attığınızda drainer sözleşmesi cüzdanınızı sıfırlayabilir.",
		relatedTerms: ["Phishing", "Approval", "Revoke"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "phishing",
		title: "Kimlik Avı (Phishing)",
		category: "Güvenlik",
		definition: "Kullanıcıları kandırarak tohum kelimelerini, özel anahtarlarını veya cüzdan onaylarını ele geçirmek için tasarlanan sahte web siteleri ve mesajlardır.",
		example: "Google arama reklamlarında en üstte çıkan sahte MetaMask indirme sitesi tipik bir phishing örneğidir.",
		relatedTerms: ["Drainer", "Seed Phrase"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "rug-pull",
		title: "Rug Pull (Likidite Çekme Dolandırıcılığı)",
		category: "Güvenlik",
		definition: "Bir kripto projesinin geliştiricilerinin, topluluktan fon topladıktan veya token fiyatını şişirdikten sonra likidite havuzundaki paraları çekip projeyi terk etmesidir.",
		example: "DEX'teki likiditeyi kilitlemeyen anonim geliştiricilerin tüm fonları çekip kaçması klasik bir rug pull olayıdır.",
		relatedTerms: ["Honeypot", "DeFi"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "honeypot",
		title: "Honeypot (Bal Küpü Sözleşme Tuzağı)",
		category: "Güvenlik",
		definition: "Yatırımcıların satın alabildiği ancak akıllı sözleşmedeki gizli kurallar nedeniyle asla satamadığı kötü niyetli token tuzağıdır.",
		example: "Fiyatı sürekli yükselen bir token'ı DEX üzerinden aldığınızda satış fonksiyonu geliştirici dışındaki herkese kapalıysa o bir honeypot'tur.",
		relatedTerms: ["Rug Pull", "Smart Contract"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "approval",
		title: "Token İzni (Token Approval / Allowance)",
		category: "DeFi",
		definition: "Bir akıllı sözleşmeye (örneğin Uniswap), cüzdanınızdaki belirli bir token'ı sizin adınıza harcama yetkisi vermenizdir.",
		example: "Çoğu dApp kolaylık olsun diye 'Sınırsız (Unlimited) Harcama İzni' ister; bu izin gelecekte o protokol hacklenirse risk doğurur.",
		relatedTerms: ["Revoke", "Allowance", "Smart Contract"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "revoke",
		title: "İzin İptali (Revoke Approval)",
		category: "Güvenlik",
		definition: "Daha önce bir dApp'e veya akıllı sözleşmeye verilmiş token harcama yetkisini sıfırlayarak cüzdan güvenliğini yeniden sağlama işlemidir.",
		example: "Kullanmadığınız platformlara verdiğiniz sınırsız token izinlerini düzenli aralıklarla iptal etmeniz önerilir.",
		relatedTerms: ["Approval", "Drainer"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "smart-contract",
		title: "Akıllı Sözleşme (Smart Contract)",
		category: "EVM",
		definition: "Blokzincir üzerinde çalışan, belirli koşullar sağlandığında aracıya ihtiyaç duymadan otomatik olarak icra edilen kendi kendini yürüten program kodudur.",
		example: "Uniswap havuzundaki takas kuralları insan müdahalesi olmaksızın akıllı sözleşme kodu ile çalışır.",
		relatedTerms: ["Kontrat Adresi", "EVM"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "kontrat-adresi",
		title: "Kontrat Adresi (Contract Address)",
		category: "EVM",
		definition: "Bir akıllı sözleşmenin blokzincir üzerindeki benzersiz adresidir. Şahıs cüzdanlarından (EOA) farklı olarak arkasında kod barındırır.",
		example: "USDT'nin Ethereum ağındaki resmi sözleşme adresi 0xdAC17F958D2ee523a2206206994597C13D831ec7'dir.",
		relatedTerms: ["Smart Contract", "EOA", "Adres Doğrulama"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "eoa",
		title: "EOA (Externally Owned Account)",
		category: "EVM",
		definition: "Özel anahtar (private key) sahibi gerçek bir kişi tarafından kontrol edilen standart kullanıcı cüzdan adresidir.",
		example: "MetaMask oluşturduğunuzda size tahsis edilen adres bir EOA'dır.",
		relatedTerms: ["Kontrat Adresi", "Private Key"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "memo-tag",
		title: "Memo / Destination Tag",
		category: "Transfer",
		definition: "XRP, Stellar (XLM), TON veya Cosmos gibi ağlarda merkezi borsalara para yatırırken fonun hangi kullanıcı hesabına ait olduğunu belirten sayısal kimlik kodudur.",
		example: "Binance veya BtcTurk'e XRP yatırırken Memo numarasını boş bırakırsanız para borsanın ana havuzuna ulaşır ancak hesabınıza otomatik geçmez.",
		relatedTerms: ["Yanlış Ağa Gönderdim", "Takılan İşlem"],
		relatedTool: "/araclar/yanlis-aga-gonderdim"
	},
	{
		slug: "block-explorer",
		title: "Blok Gezgini (Block Explorer)",
		category: "Blokzincir",
		definition: "Blokzincir üzerindeki tüm blokları, işlemleri, adres bakiyelerini ve akıllı sözleşmeleri şeffaf bir şekilde aramaya ve incelemeye yarayan web araçlarıdır.",
		example: "Etherscan, BscScan, Mempool.space ve Solscan popüler blok gezginleridir.",
		relatedTerms: ["TXID", "Onay Sayısı"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "txid",
		title: "TXID / İşlem Kodu (Transaction Hash)",
		category: "Transfer",
		definition: "Blokzincirde gerçekleşen her transfere özel olarak üretilen 64 veya 66 karakterlik benzersiz işlem kimlik kodudur.",
		example: "Borsa desteğine transferinizi sormak istediğinizde ilk vermeniz gereken referans TXID kodudur.",
		relatedTerms: ["Block Explorer", "Onay Sayısı"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "onay-sayisi",
		title: "Onay Sayısı (Confirmations)",
		category: "Blokzincir",
		definition: "Transferinizin dahil edildiği bloğun üzerine kaç yeni blok daha kazıldığını gösteren güvenlik sayısıdır.",
		example: "Borsalar Bitcoin yatırımları için genellikle 2 veya 3 blok onayı bekler.",
		relatedTerms: ["Block Explorer", "Halving"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "halving",
		title: "Bitcoin Halving (Blok Ödülü Yarılanması)",
		category: "Bitcoin",
		definition: "Bitcoin protokolü gereği her 210.000 blokta bir (yaklaşık 4 yılda bir) madencilere verilen blok başına BTC ödülünün yarı yarıya azalması olayıdır.",
		example: "2024 yılındaki 4. Halving ile blok ödülü 6.25 BTC'den 3.125 BTC'ye düşmüştür.",
		relatedTerms: ["Madencilik", "Hash Rate", "Difficulty"],
		relatedTool: "/araclar/bitcoin-halving"
	},
	{
		slug: "hash-rate",
		title: "Hash Rate (Ağ İşlem Gücü)",
		category: "Bitcoin",
		definition: "Proof of Work blokzincirinde madencilerin saniyede yapabildiği şifreleme ve tahmin denemesi sayısını ölçen işlem gücü metriğidir.",
		example: "Bitcoin ağının toplam hash rate'i ne kadar yüksekse ağ %51 saldırılarına karşı o kadar güvenlidir.",
		relatedTerms: ["Difficulty", "Madencilik", "Halving"],
		relatedTool: "/araclar/madencilik-karlilik"
	},
	{
		slug: "difficulty",
		title: "Madencilik Zorluğu (Mining Difficulty)",
		category: "Bitcoin",
		definition: "Yeni bir blok bulmanın ne kadar zor olduğunu belirten ve blok süresini yaklaşık 10 dakikada tutmak için her 2016 blokta bir otomatik ayarlanan protokoldür.",
		example: "Ağa çok sayıda yeni madenci katıldığında bloklar hızlanır ve zorluk seviyesi yukarı yönlü revize edilir.",
		relatedTerms: ["Hash Rate", "Madencilik"],
		relatedTool: "/araclar/madencilik-karlilik"
	},
	{
		slug: "madencilik-havuzu",
		title: "Madencilik Havuzu (Mining Pool)",
		category: "Bitcoin",
		definition: "Bireysel madencilerin hash güçlerini birleştirerek blok bulma şanslarını artırdığı ve ödülleri güçleri oranında paylaştığı kolektif yapılardır.",
		example: "Foundry USA ve AntPool küresel Bitcoin madenciliğinin büyük bölümünü yöneten havuzlardır.",
		relatedTerms: ["Madencilik", "Hash Rate"],
		relatedTool: "/araclar/madencilik-karlilik"
	},
	{
		slug: "mainnet",
		title: "Mainnet (Ana Ağ)",
		category: "Blokzincir",
		definition: "Gerçek ekonomik değeri olan varlıkların transfer edildiği ve kalıcı olarak işlendiği resmi blokzincir ağıdır.",
		example: "Ethereum Mainnet üzerinde yapılan transferler gerçek ETH ve gas ücreti gerektirir.",
		relatedTerms: ["Testnet", "Ag"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "testnet",
		title: "Testnet (Test Ağı)",
		category: "Blokzincir",
		definition: "Geliştiricilerin akıllı sözleşmeleri gerçek para kaybetme riski olmadan denemeleri için kurulan simülasyon ağıdır.",
		example: "Ethereum Sepolia testnet'inde kullanılan test ETH'lerinin gerçek hayatta hiçbir finansal değeri yoktur.",
		relatedTerms: ["Mainnet", "Faucet"],
		relatedTool: "/araclar/adres-ag-eslestirici"
	},
	{
		slug: "faucet",
		title: "Musluk (Faucet)",
		category: "Temel",
		definition: "Geliştiricilere ve kullanıcılara test ağlarında deneme yapabilmeleri için ücretsiz test token'ı dağıtan web siteleridir.",
		example: "Sepolia testnet musluğundan her 24 saatte bir 0.5 test ETH talep edebilirsiniz.",
		relatedTerms: ["Testnet"],
		relatedTool: "/yardim"
	},
	{
		slug: "wrapped-token",
		title: "Sarmalanmış Token (Wrapped Token / ör. WBTC)",
		category: "DeFi",
		definition: "Kendi yerel blokzinciri dışındaki bir ağda kullanılabilmesi için 1:1 teminat karşılığı üretilen sentetik token kopyasıdır.",
		example: "Wrapped Bitcoin (WBTC), Bitcoin'in Ethereum ağında ERC-20 formatında DeFi protokollerinde kullanılmasını sağlar.",
		relatedTerms: ["Bridge", "ERC20"],
		relatedTool: "/araclar/kripto-donusturucu"
	},
	{
		slug: "dex",
		title: "DEX (Merkeziyetsiz Borsa / Decentralized Exchange)",
		category: "DeFi",
		definition: "Merkezi bir şirkete, KYC kimlik doğrulamasına ihtiyaç duymadan, doğrudan akıllı sözleşmeler ve cüzdanlar üzerinden al-sat yapılan borsadır.",
		example: "Uniswap, PancakeSwap ve Raydium popüler DEX platformlarıdır.",
		relatedTerms: ["CEX", "AMM", "Likidite Havuzu"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "cex",
		title: "CEX (Merkezi Borsa / Centralized Exchange)",
		category: "Temel",
		definition: "Kullanıcıların özel anahtarlarını emaneten tutan, şirketler tarafından yönetilen ve kimlik doğrulaması (KYC) zorunlu olan geleneksel kripto borsalarıdır.",
		example: "Binance, Coinbase, BtcTurk ve Paribu merkezi kripto borsalarına örnektir.",
		relatedTerms: ["DEX", "Spread", "Maker"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "amm",
		title: "AMM (Otomatik Piyasa Yapıcı)",
		category: "DeFi",
		definition: "Geleneksel emir defteri yerine matematiksel formüller (x * y = k) ve likidite havuzları kullanarak fiyat belirleyen merkeziyetsiz borsa algoritmasıdır.",
		example: "Uniswap v2 havuzları AMM formülü ile alıcı ve satıcı olmaksızın otomatik takas sağlar.",
		relatedTerms: ["DEX", "Likidite Havuzu", "Slippage"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "likidite-havuzu",
		title: "Likidite Havuzu (Liquidity Pool)",
		category: "DeFi",
		definition: "Kullanıcıların takas yapabilmesi için akıllı sözleşmeye kilitlenen iki veya daha fazla token çiftinden oluşan fon havuzudur.",
		example: "ETH/USDC havuzuna likidite sağlayan kullanıcılar yapılan takaslardan komisyon geliri elde eder.",
		relatedTerms: ["AMM", "DEX", "Impermanent Loss"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "impermanent-loss",
		title: "Geçici Kayıp (Impermanent Loss)",
		category: "DeFi",
		definition: "Bir likidite havuzuna token yatıran bir yatırımcının, token'ları sadece cüzdanında tutsaydı elde edeceği değere kıyasla uğradığı fırsat maliyetidir.",
		example: "Havuzdaki bir coin aşırı yükseldiğinde AMM algoritması o coini satıp diğerini aldığı için cüzdanda tutmaya göre daha az kâr kalabilir.",
		relatedTerms: ["Likidite Havuzu", "AMM"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "tvl",
		title: "TVL (Kilitli Toplam Değer / Total Value Locked)",
		category: "DeFi",
		definition: "Bir DeFi protokolünün veya blokzincirin akıllı sözleşmelerinde kilitli bulunan tüm kripto varlıkların toplam dolar değeridir.",
		example: "Bir projenin TVL büyüklüğü o protokole duyulan güvenin ve sermaye derinliğinin temel göstergesidir.",
		relatedTerms: ["DeFi", "Staking"],
		relatedTool: "/piyasa"
	},
	{
		slug: "market-cap",
		title: "Piyasa Değeri (Market Cap)",
		category: "Finans",
		definition: "Dolaşımdaki toplam coin adedi ile mevcut birim fiyatın çarpılmasıyla hesaplanan toplam büyüklüktür.",
		example: "19.8 milyon adet Bitcoin × 88.000$ = ~1.74 Trilyon Dolar piyasa değeri.",
		relatedTerms: ["FDV", "Dolasimdaki Arz"],
		relatedTool: "/araclar/kripto-donusturucu"
	},
	{
		slug: "fdv",
		title: "FDV (Tam Seyreltilmiş Değer / Fully Diluted Valuation)",
		category: "Finans",
		definition: "Gelecekte kilitleri açılacak tüm maksimum arz dolaşıma girdiğinde projenin ulaşacağı teorik toplam piyasa değeridir.",
		example: "Dolaşımda sadece %10'u olan bir coinin Market Cap'i 100M$ iken FDV'si 1 Milyar$ olabilir.",
		relatedTerms: ["Market Cap", "Token Unlock"],
		relatedTool: "/araclar/kripto-donusturucu"
	},
	{
		slug: "dolasimdaki-arz",
		title: "Dolaşımdaki Arz (Circulating Supply)",
		category: "Finans",
		definition: "Şu anda piyasada serbestçe alınıp satılabilen ve kamuoyunun elinde bulunan toplam kripto para miktarıdır.",
		example: "Kilitli veya ekibe ayrılmış henüz açılmamış token'lar dolaşımdaki arza dahil edilmez.",
		relatedTerms: ["Market Cap", "Token Unlock"],
		relatedTool: "/araclar/kripto-donusturucu"
	},
	{
		slug: "token-unlock",
		title: "Token Kilit Açılımı (Token Unlock)",
		category: "Finans",
		definition: "Yatırımcılara, kurucu ekibe veya ekosistem teşviklerine önceden kilitlenmiş token'ların belirli takvim doğrultusunda serbest kalmasıdır.",
		example: "Büyük kilit açılımlarında piyasaya yeni satış baskısı gelebileceği için fiyat dalgalanması yaşanabilir.",
		relatedTerms: ["Vesting", "FDV"],
		relatedTool: "/piyasa"
	},
	{
		slug: "vesting",
		title: "Vesting (Hakediş Takvimi)",
		category: "Finans",
		definition: "Proje ekibi veya erken yatırımcıların token'larını hemen satamaması için zamana yayılan kademeli dağıtım sürecidir.",
		example: "1 yıl uçurum (cliff) ve 36 ay doğrusal vesting planı erken ekibin uzun vadeli odaklanmasını sağlar.",
		relatedTerms: ["Token Unlock"],
		relatedTool: "/piyasa"
	},
	{
		slug: "ath",
		title: "ATH (All-Time High / Tüm Zamanların En Yükseği)",
		category: "Temel",
		definition: "Bir kripto paranın tarih boyunca ulaştığı en yüksek fiyat seviyesidir.",
		example: "Bitcoin'in önceki ATH seviyesini kırması yeni bir boğa rallisi başlatabilir.",
		relatedTerms: ["Market Cap"],
		relatedTool: "/araclar/kripto-donusturucu"
	},
	{
		slug: "korku-ve-acgozluluk",
		title: "Korku ve Açgözlülük Endeksi (Fear & Greed)",
		category: "Analiz",
		definition: "Piyasadaki yatırımcı psikolojisini 0 (Aşırı Korku) ile 100 (Aşırı Açgözlülük) puanı arasında ölçen popüler duygu indikatörüdür.",
		example: "Endeks 15 puanın altına düştüğünde piyasada panik havası hakimdir ve tarihsel olarak alım fırsatlarına zemin hazırlayabilir.",
		relatedTerms: ["Volatilite"],
		relatedTool: "/araclar/korku-acgozluluk-endeksi"
	},
	{
		slug: "volatilite",
		title: "Volatilite (Fiyat Oynaklığı)",
		category: "Analiz",
		definition: "Bir varlığın fiyatının belirli bir zaman diliminde gösterdiği dalgalanma ve sapma derecesidir.",
		example: "Kripto piyasaları hisse senedi piyasalarına kıyasla çok daha yüksek volatiliteye sahiptir.",
		relatedTerms: ["Korku ve Açgözlülük"],
		relatedTool: "/araclar/korku-acgozluluk-endeksi"
	},
	{
		slug: "whale",
		title: "Balina (Whale)",
		category: "Temel",
		definition: "Piyasayı tek bir alım veya satım emriyle doğrudan etkileyebilecek büyüklükte devasa kripto para varlığına sahip kişi veya kuruluşlardır.",
		example: "Bilinmeyen bir cüzdandan borsaya 5.000 BTC aktarılması balina hareketi olarak takip edilir.",
		relatedTerms: ["CEX", "Spread"],
		relatedTool: "/piyasa"
	},
	{
		slug: "kyc",
		title: "KYC (Müşterini Tanı / Know Your Customer)",
		category: "Regülasyon",
		definition: "Merkezi borsaların yasal zorunluluklar gereği kullanıcıların kimlik, adres ve yüz tanıma bilgilerini doğruladığı güvenlik sürecidir.",
		example: "Borsadan TL çekebilmek için KYC adımlarını tamamlamanız şarttır.",
		relatedTerms: ["AML", "Travel Rule"],
		relatedTool: "/rehber"
	},
	{
		slug: "aml",
		title: "AML (Kara Para Aklamayı Önleme)",
		category: "Regülasyon",
		definition: "Yasa dışı fonların finansal sisteme sokulmasını engellemek için finans kuruluşlarının uymakla yükümlü olduğu yasal düzenlemeler bütünüdür.",
		example: "Şüpheli adreslerden gelen transferler borsa AML sistemleri tarafından dondurulabilir.",
		relatedTerms: ["KYC", "Travel Rule"],
		relatedTool: "/rehber"
	},
	{
		slug: "travel-rule",
		title: "Seyahat Kuralı (Travel Rule)",
		category: "Regülasyon",
		definition: "FATF standartları gereği kripto transferlerinde gönderen ve alıcı tarafların kimlik bilgilerinin borsalar arasında iletilmesini zorunlu kılan kuraldır.",
		example: "Yerli bir borsadan yabancı borsaya transfer yaparken alıcı adı ve soyadının eşleşmesi bu kural gereğidir.",
		relatedTerms: ["KYC", "AML"],
		relatedTool: "/rehber"
	},
	{
		slug: "proof-of-work",
		title: "Proof of Work (İş Kanıtı / PoW)",
		category: "Blokzincir",
		definition: "Ağ güvenliğinin bilgisayarların yoğun matematiksel bulmacaları çözmesiyle (madencilik) sağlandığı orijinal konsensüs algoritmasıdır.",
		example: "Bitcoin ve Litecoin ağları Proof of Work prensibiyle çalışır.",
		relatedTerms: ["Proof of Stake", "Halving", "Madencilik"],
		relatedTool: "/araclar/madencilik-karlilik"
	},
	{
		slug: "proof-of-stake",
		title: "Proof of Stake (Hisse Kanıtı / PoS)",
		category: "Blokzincir",
		definition: "Blokların madencilik yerine kripto varlıklarını teminat olarak kilitleyen (stake eden) doğrulayıcılar tarafından üretildiği enerji verimli konsensüs mekanizmasıdır.",
		example: "Ethereum The Merge güncellemesiyle Proof of Work'ten Proof of Stake'e geçiş yapmıştır.",
		relatedTerms: ["Staking", "Validator", "Proof of Work"],
		relatedTool: "/araclar/staking-getiri"
	},
	{
		slug: "eip-1559",
		title: "EIP-1559 (Ethereum Gas Reformu)",
		category: "EVM",
		definition: "Ethereum işlem ücretlerini 'Base Fee' (yakılan taban ücret) ve 'Priority Fee' (madenci bahşişi) olarak ikiye bölen ve ETH yakımını başlatan güncellemedir.",
		example: "Ağ yoğunluğu arttığında Base Fee otomatik yükselir ve her transferde harcanan ETH'nin taban kısmı sonsuza dek yakılır.",
		relatedTerms: ["Base Fee", "Priority Fee", "Gas"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "base-fee",
		title: "Taban Ücret (Base Fee)",
		category: "EVM",
		definition: "EIP-1559 kapsamında bir işlemin bloğa dahil edilebilmesi için ödenmesi zorunlu olan ve blokzincir tarafından otomatik yakılan asgari gas ücretidir.",
		example: "İşleminizin `maxFeePerGas` değeri anlık taban ücretin altındaysa işleminiz onaylanmaz ve beklemeye geçer.",
		relatedTerms: ["EIP-1559", "Priority Fee", "Gas"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "priority-fee",
		title: "Öncelik Ücreti / Bahşiş (Priority Fee)",
		category: "EVM",
		definition: "İşleminizin madenciler/doğrulayıcılar tarafından bloğun en başına alınması için verilen isteğe bağlı bahşiş tutarıdır.",
		example: "Acil bir NFT minti sırasında priority fee değerini 5 Gwei artırarak işlemi öne geçirebilirsiniz.",
		relatedTerms: ["Base Fee", "EIP-1559"],
		relatedTool: "/araclar/gas-ucret-takip"
	},
	{
		slug: "mev",
		title: "MEV (Maksimum Çıkarılabilir Değer)",
		category: "EVM",
		definition: "Blok üreticilerinin veya arama botlarının mempool'daki işlemleri yeniden sıralayarak veya araya girerek elde ettiği ekstra kârdır.",
		example: "Sandwich saldırıları MEV botlarının en yaygın taktiklerinden biridir.",
		relatedTerms: ["Front-running", "Mempool"],
		relatedTool: "/araclar/takilan-islem"
	},
	{
		slug: "front-running",
		title: "Front-Running (Önden Koşma)",
		category: "DeFi",
		definition: "Mempool'da bekleyen büyük bir alım emrini fark edip daha yüksek gas ödeyerek o işlemden önce alım yapıp kâr sağlama taktiğidir.",
		example: "Büyük bir DEX swap'ı yaparken yüksek slippage belirlediğinizde botlar front-running uygulayabilir.",
		relatedTerms: ["MEV", "Slippage"],
		relatedTool: "/araclar/maliyet-karsilastirici"
	},
	{
		slug: "multi-sig",
		title: "Çoklu İmza (Multi-Signature / Multi-sig)",
		category: "Güvenlik",
		definition: "Bir cüzdandan transfer yapılabilmesi için birden fazla özel anahtarın (örneğin 3 yöneticiden en az 2'sinin) onay vermesini şart koşan güvenlik protokolüdür.",
		example: "Şirket ve hazine fonları tek bir kişinin anahtar kaybetmesi veya suistimal riskine karşı Safe (Gnosis) çoklu imza cüzdanlarında saklanır.",
		relatedTerms: ["Private Key", "Cüzdan"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "passkey",
		title: "Geçiş Anahtarı (Passkey / WebAuthn)",
		category: "Güvenlik",
		definition: "Parola girmeden, cihazın parmak izi veya yüz tanıma donanımını kullanarak kriptografik oturum açmayı sağlayan modern kimlik standardıdır.",
		example: "Kripto borsalarında Passkey kullanarak SMS şifresi beklemeden güvenle giriş yapabilirsiniz.",
		relatedTerms: ["2FA", "Güvenlik"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "2fa",
		title: "İki Faktörlü Doğrulama (2FA)",
		category: "Güvenlik",
		definition: "Hesap güvenliği için şifrenin yanı sıra Authenticator uygulaması veya fiziksel güvenlik anahtarı ile ikinci bir doğrulama kodu girilmesini zorunlu kılan yöntemdir.",
		example: "SMS tabanlı 2FA yerine Google Authenticator veya YubiKey kullanmak SIM kopyalama riskini bertaraf eder.",
		relatedTerms: ["Passkey", "Güvenlik"],
		relatedTool: "/araclar/cuzdan-guvenlik-kontrolu"
	},
	{
		slug: "dust",
		title: "Toz Bakiye (Dust)",
		category: "Temel",
		definition: "İşlem ücretinden daha düşük değerde olduğu için harcanması ekonomik olmayan mikroskobik kripto para kırıntılarıdır.",
		example: "Cüzdanınızda kalan 0.0000012 BNB toz bakiye olarak adlandırılır.",
		relatedTerms: ["UTXO"],
		relatedTool: "/araclar/birim-cevirici"
	},
	{
		slug: "cift-harcama",
		title: "Çift Harcama (Double Spending)",
		category: "Blokzincir",
		definition: "Aynı dijital paranın aynı anda iki farklı yere transfer edilerek iki kez harcanması girişimidir. Blokzincir konsensüs kuralları bu dolandırıcılığı kesin olarak engeller.",
		example: "Satoshi Nakamoto'nun Bitcoin protokolündeki en büyük devrimi merkezi bir otorite olmadan çift harcamayı çözmesidir.",
		relatedTerms: ["UTXO", "Proof of Work"],
		relatedTool: "/araclar/takilan-islem"
	}
];
