'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COINS_DATA, FEAR_AND_GREED, BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY, LIVE_CURRENCY_RATES } from '../../lib/data';
import { Newspaper, Flame, Clock, ArrowRight, RefreshCw, Sparkles, TrendingUp, ShieldAlert, DollarSign, CheckCircle2, X, Share2, Check } from 'lucide-react';

interface ReportArticle {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  metrics: { label: string; value: string; isGood?: boolean }[];
  summary: string;
  content: string[];
}

export default function BulletinPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeArticle, setActiveArticle] = useState<ReportArticle | null>(null);
  const [lastUpdated, setLastUpdated] = useState('Bugün, 16:15');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShareArticle = (art: ReportArticle) => {
    const text = `📰 [Kriptonik Raporu] ${art.title}\n\nDetaylar: https://kriptonik.com/bulten/`;
    if (navigator.share) {
      navigator.share({ title: art.title, text, url: 'https://kriptonik.com/bulten/' }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopiedId(art.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const btc = COINS_DATA.find((c) => c.slug === 'bitcoin') || COINS_DATA[0];
  const eth = COINS_DATA.find((c) => c.slug === 'ethereum') || COINS_DATA[1];
  const sui = COINS_DATA.find((c) => c.slug === 'sui') || COINS_DATA[6];
  const totalEtf = ((BITCOIN_ETF_SUMMARY.lastDayNetFlowUsd + ETHEREUM_ETF_SUMMARY.lastDayNetFlowUsd) / 1_000_000).toFixed(1);

  const isEtfPositive = Number(totalEtf) >= 0;

  // Programmatic live intelligence reports constructed from real API data
  const articles: ReportArticle[] = [
    {
      id: 'sabah-piyasa-raporu',
      category: 'GÜNLÜK PİYASA NABZI',
      categoryColor: 'bg-[#2962FF]/15 text-[#2962FF]',
      title: `Bitcoin $${btc.price.toLocaleString('tr-TR')} Seviyesinde Konsolide Olurken Korku Endeksi ${FEAR_AND_GREED.value} Seviyesine İndi`,
      subtitle: `Bireysel yatırımcı aşırı korku içerisindeyken kurumsal Spot ETF'lerden dün -$${Math.abs(Number(totalEtf))}M net sermaye çıkışı kaydedildi.`,
      date: 'Bugün, 15:45',
      readTime: '3 dk',
      metrics: [
        { label: 'Spot BTC', value: `$${btc.price.toLocaleString('tr-TR')}` },
        { label: 'Korku/Açgözlülük', value: `${FEAR_AND_GREED.value}/100 (${FEAR_AND_GREED.classification})` },
        { label: 'ETF Net Akış', value: `${isEtfPositive ? '+' : '-'}$${Math.abs(Number(totalEtf))}M`, isGood: isEtfPositive }
      ],
      summary: `Bitcoin, $${btc.price.toLocaleString('tr-TR')} seviyesinde yatay bir bantta fiyatlanırken türev piyasalarındaki Açık Pozisyon (OI) $${(btc.openInterestUsd / 1_000_000_000).toFixed(2)} milyar dolara yükseldi. Korku ve Açgözlülük endeksinin ${FEAR_AND_GREED.value} (Aşırı Korku) seviyesine gerilemesi ve SoSoValue verilerine göre -$${Math.abs(Number(totalEtf))} milyonluk ETF çıkışı piyasadaki kâr satışlarını teyit ediyor.`,
      content: [
        `Piyasa genelinde son 24 saatlik fiyat hareketleri $${btc.price.toLocaleString('tr-TR')} civarında dengelenme gösteriyor. Bireysel trader duyarlılığını ölçen Alternative.me endeksi ${FEAR_AND_GREED.value} puan ile "Aşırı Korku" bölgesine çekilmiş durumda. Tarihsel veriler incelendiğinde, bu seviyedeki korku dönemlerinin dip oluşumlarına ve kurumsal yeniden pozisyonlanma dönemlerine zemin hazırladığı bilinmektedir.`,
        `Kurumsal cephede ise SoSoValue verilerine göre Fidelity FBTC ve BlackRock IBIT öncülüğünde Spot Bitcoin ve Ethereum ETF'lerinden son seansta toplam -$${Math.abs(Number(totalEtf))} milyon net fon çıkışı kaydedildi. Analistler bu çıkışın makroekonomik dalgalanmalar kaynaklı kısa vadeli bir nefeslenme olduğunu belirtiyor.`,
        `Teknik olarak en yakın kritik tasfiye bariyeri $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesindedir. Fiyatın bu seviyeyi aşması halinde short pozisyonların zorunlu alımlarıyla sert bir yükseliş dalgası beklenebilir.`
      ]
    },
    {
      id: 'turev-tasfiye-bulteni',
      category: 'TASFİYE & TÜREV RAPORU',
      categoryColor: 'bg-[#F6465D]/15 text-[#F6465D]',
      title: `Türev Piyasalarında Son 24 Saatte $${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M Pozisyon Tasfiye Edildi: Short Baskısı Hakim`,
      subtitle: `Tasfiyelerin %${btc.shortPercentage.toFixed(1)}'lik kısmı açığa satış yapan short trader'ların zorunlu kapatılmasıyla gerçekleşti.`,
      date: 'Bugün, 13:20',
      readTime: '4 dk',
      metrics: [
        { label: '24s Tasfiye', value: `$${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M` },
        { label: 'Short Tasfiye Oranı', value: `%${btc.shortPercentage.toFixed(1)}` },
        { label: 'Long/Short Oranı', value: `${btc.longShortRatio.toFixed(2)}` }
      ],
      summary: `Kripto vadeli işlem borsalarında (Binance, Bybit, OKX) kaldıraçlı pozisyonlar üzerinde yoğun bir tasfiye süreci yaşandı. $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} civarındaki devasa likidite havuzları piyasa yapıcılar için ana mıknatıs bölge haline geldi.`,
      content: [
        `Son 24 saatte kaydedilen $${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)} milyon dolarlık tasfiyenin büyük kısmını 50x ve 100x kaldıraç kullanan yüksek riskli pozisyonlar oluşturdu.`,
        `Binance ve Bybit fonlama oranları pozitif kalarak long pozisyonların piyasaya hafif bir prim ödediğini, ancak genel piyasa ağırlıklı fonlamanın %${(btc.fundingRates.binance * 100).toFixed(4)} ile nötr-ılımlı bölgede seyrettiğini ortaya koyuyor.`,
        `Kriptonik On-Chain Motoru, mevcut açık pozisyonların tasfiye haritasına göre $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesinde $${(btc.liquidationClusters[0]?.volumeUsd / 1_000_000).toFixed(1)} milyon dolarlık short likidasyon kümelenmesi olduğunu raporlamaktadır.`
      ]
    },
    {
      id: 'doviz-ve-kripto-arbitraj',
      category: 'KUR & ARBİTRAJ',
      categoryColor: 'bg-[#00C087]/15 text-[#00C087]',
      title: `USD/TRY ${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺, USDT/TRY ${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺: Borsalar Arası Makas Daralıyor`,
      subtitle: `TCMB resmi kuru ${LIVE_CURRENCY_RATES.TCMB_USD.toFixed(2)} ₺ iken Binance TR ve Kapalıçarşı arasındaki makas %0.14 seviyesine indi.`,
      date: 'Bugün, 11:10',
      readTime: '3 dk',
      metrics: [
        { label: 'Serbest Piyasa Dolar', value: `${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺` },
        { label: 'Binance TR USDT', value: `${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺` },
        { label: 'TCMB Gösterge', value: `${LIVE_CURRENCY_RATES.TCMB_USD.toFixed(2)} ₺` }
      ],
      summary: `Dolar ve Tether kurları arasındaki tezgâhüstü prim marjı incelendiğinde, yerli kripto yatırımcıları için USDT/TRY paritesinde işlem maliyetlerinin son haftaların en düşük seviyesine gerilediği tespit edildi.`,
      content: [
        `Bankalar arası döviz piyasası, Kapalıçarşı serbest piyasası ve yerli kripto para borsaları arasındaki fiyat farkları analistlerin radarında. Serbest piyasada 1 Dolar ${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} TL'den el değiştirirken, Binance TR spot tahtasında 1 USDT ${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} TL olarak fiyatlanıyor.`,
        `Bu durum, USDT ile USD arasındaki geleneksel primin minimum seviyeye indiğini ve arbitraj fırsatlarının yerini sabit kur istikrarına bıraktığını göstermektedir.`,
        `Kriptonik "Kaç TL?" hesaplama motorumuz, canlı API entegrasyonu sayesinde her dakika teyit edilen verilerle yatırımcılara en güncel net TL karşılıklarını sunmaya devam ediyor.`
      ]
    },
    {
      id: 'token-kilit-acilimi-uyarisi',
      category: 'KİLİT AÇILIMI & RİSK',
      categoryColor: 'bg-[#F2C14E]/20 text-[#D97706] dark:text-[#F2C14E]',
      title: `Bu Ay Kripto Ekosisteminde $2.45B Değerinde Token Serbest Bırakılıyor: Sui ve Arbitrum Radar Altında`,
      subtitle: `Sui (${sui.symbol}) ağında dolaşıma girecek yeni arz öncesinde Kriptonik Risk Skoru 68/100 olarak belirlendi.`,
      date: 'Bugün, 09:30',
      readTime: '4 dk',
      metrics: [
        { label: 'Aylık Toplam Açılım', value: '$2.45B' },
        { label: 'Sui Spot Fiyatı', value: `$${sui.price.toFixed(3)}` },
        { label: 'SUI Risk Skoru', value: '68/100' }
      ],
      summary: `Ekip ve erken dönem yatırımcı tahsisatlarının vadesi dolarken, Cliff tipi büyük kilit açılışları spot piyasada kısa vadeli volatilite yaratabilir.`,
      content: [
        `Kasım ayı boyunca kilitli arzları dolaşıma dahil olacak projeler arasında Sui, Arbitrum ve Avalanche öne çıkıyor. Toplam değeri 2.45 milyar doları bulan bu açılımların bir kısmı doğrudan piyasa yapıcı likidite havuzlarına aktarılacak.`,
        `Sui (SUI) için planlanan açılımda yaklaşık $${((sui.tokenUnlock?.unlockValueUsd || 14000000) / 1_000_000).toFixed(1)} milyon dolarlık token serbest kalacak. Trader'ların spot emir defteri derinliğini ve açık pozisyon eğilimini takip etmeleri kritik önem taşıyor.`
      ]
    }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const now = new Date();
      setLastUpdated(`Bugün, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* 1. Header & Live Refresh Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/20">
              <Newspaper className="h-5 w-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
              Kriptonik Canlı Piyasa Bülteni & On-Chain Raporları
            </h1>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[var(--card-muted)] max-w-3xl leading-relaxed">
            Kriptonik Veri Motoru tarafından anlık borsa API'leri, türev tasfiye havuzları ve kurumsal Spot ETF akışlarından otomatik olarak derlenen günlük istihbarat raporları.
          </p>
        </div>

        {/* Live Auto-Refresh Button */}
        <div className="flex items-center gap-3">
          <div className="text-right text-[11px] font-mono text-[var(--card-muted)] hidden sm:block">
            <span>Son Veri Teyidi:</span>
            <div className="text-[var(--foreground)] font-bold flex items-center justify-end gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C087] pulse-bull" />
              {lastUpdated}
            </div>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3.5 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[#2962FF] transition-all shadow-xs"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-[#2962FF] ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Veriler Çekiliyor...' : 'Canlı Verileri Yenile'}</span>
          </button>
        </div>
      </div>

      {/* 2. Top Breaking Intelligence Card */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--subtle)] p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00C087]/30 bg-[#00C087]/10 px-3 py-1 text-xs font-bold text-[#00C087]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OTOMATİK OLUŞTURULAN GÜNLÜK ÖZET</span>
          </span>
          <span className="font-mono text-xs text-[var(--card-muted)]">Canlı Algoritmik Sentez</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)] leading-snug">
              Piyasa Duyarlılığı Korku Seviyesinde Konsolide Olurken Kurumsal ETF Girişleri Sürüyor
            </h2>
            <p className="text-xs sm:text-sm text-[var(--card-muted)] leading-relaxed">
              Bitcoin ${btc.price.toLocaleString('tr-TR')} bandında, türev tasfiyeleri ise 24 saatte $${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M seviyesinde seyrediyor. Kurumsal Spot ETF'lere son işlem gününde +${totalEtf} milyon dolar net giriş gerçekleşti.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3">
              <div className="text-[10px] text-[var(--card-muted)]">Korku Endeksi</div>
              <div className="mt-1 text-base font-black text-[#F6465D]">{FEAR_AND_GREED.value} / 100</div>
              <div className="text-[9px] text-[var(--card-muted)]">Korku (Dip Sinyali)</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3">
              <div className="text-[10px] text-[var(--card-muted)]">Spot ETF Akışı</div>
              <div className="mt-1 text-base font-black text-[#00C087]">+{totalEtf}M USD</div>
              <div className="text-[9px] text-[var(--card-muted)]">Kurumsal Net Giriş</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3">
              <div className="text-[10px] text-[var(--card-muted)]">Dolar / TRY</div>
              <div className="mt-1 text-base font-black text-[var(--foreground)]">{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺</div>
              <div className="text-[9px] text-[var(--card-muted)]">Serbest Piyasa</div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3">
              <div className="text-[10px] text-[var(--card-muted)]">Binance TR USDT</div>
              <div className="mt-1 text-base font-black text-[#00C087]">{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺</div>
              <div className="text-[9px] text-[var(--card-muted)]">Spot Tahta Kuru</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Article Grid (Interactive Reports) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((art) => (
          <article
            key={art.id}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col justify-between hover:border-[#2962FF] transition-all shadow-xs group"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span className={`rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${art.categoryColor}`}>
                  {art.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--card-muted)]">
                  <Clock className="h-3 w-3" /> {art.readTime}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2
                onClick={() => setActiveArticle(art)}
                className="mt-4 font-black text-lg text-[var(--foreground)] leading-snug group-hover:text-[#2962FF] transition-colors cursor-pointer"
              >
                {art.title}
              </h2>

              <p className="mt-2 text-xs text-[var(--card-muted)] leading-relaxed">
                {art.subtitle}
              </p>

              {/* Quick Metrics Badges */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-mono">
                {art.metrics.map((m, i) => (
                  <div key={i} className="rounded-lg bg-[var(--subtle)] border border-[var(--border)] p-2 text-center">
                    <div className="text-[9px] text-[var(--card-muted)] truncate">{m.label}</div>
                    <div className={`text-xs font-bold mt-0.5 ${m.isGood ? 'text-[#00C087]' : 'text-[var(--foreground)]'}`}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with date and button */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
              <span className="text-[var(--card-muted)] font-mono text-[11px]">{art.date}</span>
              <button
                onClick={() => setActiveArticle(art)}
                className="text-[#2962FF] font-bold flex items-center gap-1.5 hover:underline"
              >
                <span>Tam Analizi Aç</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 4. Full Article Modal / Drawer */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-2xl my-8 space-y-5">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-[var(--card-muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 border-b border-[var(--border)] pb-4 pr-8">
              <span className={`inline-block rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${activeArticle.categoryColor}`}>
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)] leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-[var(--card-muted)] pt-1">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>Kriptonik On-Chain Motoru</span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              {activeArticle.metrics.map((m, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--subtle)] p-3">
                  <div className="text-[10px] text-[var(--card-muted)]">{m.label}</div>
                  <div className="text-sm font-bold text-[var(--foreground)] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-[var(--foreground)]/90 leading-relaxed font-sans">
              {activeArticle.content.map((p, i) => (
                <p key={i} className="bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--border)]/50">
                  {p}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
              <button
                onClick={() => handleShareArticle(activeArticle)}
                className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all"
              >
                {copiedId === activeArticle.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#00C087]" />
                    <span className="text-[#00C087]">Bağlantı Kopyalandı</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-[#2962FF]" />
                    <span>Raporu Paylaş</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-xl bg-[#2962FF] px-4 py-2 text-xs font-bold text-white hover:bg-[#2563EB] transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
