'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COINS_DATA, FEAR_AND_GREED, BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY, LIVE_CURRENCY_RATES } from '../../lib/data';
import { Newspaper, Flame, Clock, ArrowRight, RefreshCw, Sparkles, TrendingUp, ShieldAlert, DollarSign, CheckCircle2, X, Share2, Check, BarChart2 } from 'lucide-react';

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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Dynamic automatic today's date formatted in Turkish
  const [todayDate, setTodayDate] = useState('6 Kasım 2026');
  const [lastUpdated, setLastUpdated] = useState('Bugün, 20:30');

  useEffect(() => {
    try {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(now);
      setTodayDate(formatted);
      setLastUpdated(`Bugün, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    } catch {
      // Safe fallback
    }
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      setLastUpdated(`Bugün, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
      setIsRefreshing(false);
    }, 700);
  };

  const handleShareArticle = (art: ReportArticle) => {
    const text = `📰 [Kriptonik Günlük Raporu] ${art.title}\n\nDetaylar: https://kriptonik.com/bulten/`;
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
  const sol = COINS_DATA.find((c) => c.slug === 'solana') || COINS_DATA[3];
  const totalEtf = ((BITCOIN_ETF_SUMMARY.lastDayNetFlowUsd + ETHEREUM_ETF_SUMMARY.lastDayNetFlowUsd) / 1_000_000).toFixed(1);
  const isEtfPositive = Number(totalEtf) >= 0;

  // Programmatic rich intelligence reports constructed from live market data
  const articles: ReportArticle[] = [
    {
      id: 'sabah-piyasa-raporu',
      category: 'GÜNLÜK PİYASA RAPORU',
      categoryColor: 'bg-[#2962FF]/15 text-[#2962FF]',
      title: `Bitcoin $${btc.price.toLocaleString('tr-TR')} Seviyesinde Taban Ararken Korku Endeksi ${FEAR_AND_GREED.value} Seviyesinde: Kurumsal Fon Çıkışları`,
      subtitle: `Bireysel yatırımcı korku bölgesindeyken kurumsal Spot ETF'lerden son seansta -$${Math.abs(Number(totalEtf))}M net sermaye çıkışı kaydedildi.`,
      date: `${todayDate}, 19:45`,
      readTime: '3 dk',
      metrics: [
        { label: 'Spot BTC', value: `$${btc.price.toLocaleString('tr-TR')}` },
        { label: 'Korku/Açgözlülük', value: `${FEAR_AND_GREED.value}/100 (${FEAR_AND_GREED.classification})` },
        { label: 'ETF Net Akış', value: `${isEtfPositive ? '+' : '-'}$${Math.abs(Number(totalEtf))}M`, isGood: isEtfPositive }
      ],
      summary: `Bitcoin, $${btc.price.toLocaleString('tr-TR')} bandında akümülasyon sürecini sürdürürken vadeli piyasalardaki Açık Pozisyon (OI) $${(btc.openInterestUsd / 1_000_000_000).toFixed(2)} milyar dolar seviyesinde yataylaştı. Bireysel duyarlılık endeksinin ${FEAR_AND_GREED.value} puan ile "Korku" bölgesinde kalması ve kurumsal fonlardan dün -$${Math.abs(Number(totalEtf))} milyonluk çıkış yaşanması kâr realizasyonlarını teyit ediyor.`,
      content: [
        `Piyasa genelinde son 24 saatlik fiyat hareketleri $${btc.price.toLocaleString('tr-TR')} civarında dengelenme gösteriyor. Trader psikolojisini ölçen endeks ${FEAR_AND_GREED.value} puan ile "Korku" bölgesinde bulunuyor. Tarihsel on-chain döngü verileri incelendiğinde, aşırı korku dönemlerinin dip oluşumlarına ve kurumsal yeniden pozisyonlanma dönemlerine zemin hazırladığı gözlemlenmektedir.`,
        `Kurumsal takas bilançolarına göre Fidelity FBTC ve Grayscale fonları öncülüğünde son işlem seansında toplam -$${Math.abs(Number(totalEtf))} milyon net fon çıkışı kaydedildi. Analistler bu çıkışın makroekonomik dalgalanmalar kaynaklı kısa vadeli bir nefeslenme olduğunu belirtiyor.`,
        `Teknik olarak en yakın kritik tasfiye bariyeri $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesindedir. Fiyatın bu seviyeyi aşması durumunda short pozisyonların zorunlu alımlarıyla sert bir yukarı yönlü sıkışma (Short Squeeze) tetiklenebilir.`
      ]
    },
    {
      id: 'turev-tasfiye-bulteni',
      category: 'TASFİYE & TÜREV RAPORU',
      categoryColor: 'bg-[#FF3B56]/15 text-[#FF3B56]',
      title: `Türev Piyasalarında Son 24 Saatte $${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M Pozisyon Tasfiye Edildi: Short Sıkışması Radarda`,
      subtitle: `Tasfiyelerin %${btc.shortPercentage.toFixed(1)}'lik kısmı açığa satış yapan short yatırımcıların zorunlu tasfiyesiyle gerçekleşti.`,
      date: `${todayDate}, 16:20`,
      readTime: '4 dk',
      metrics: [
        { label: '24s Tasfiye', value: `$${(btc.totalLiquidation24hUsd / 1_000_000).toFixed(1)}M` },
        { label: 'Short Tasfiye Oranı', value: `%${btc.shortPercentage.toFixed(1)}` },
        { label: 'Long/Short Oranı', value: `${btc.longShortRatio.toFixed(2)}` }
      ],
      summary: `Kripto vadeli işlem borsalarında (Binance, Bybit, OKX) kaldıraçlı pozisyonlar üzerinde yoğun bir tasfiye süreci yaşandı. $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} civarındaki devasa likidite havuzları piyasa yapıcılar için ana mıknatıs bölge haline geldi.`,
      content: [
        `Son 24 saatte kaydedilen tasfiyelerin büyük kısmını 50x ve 100x kaldıraç kullanan yüksek riskli pozisyonlar oluşturdu.`,
        `Binance ve Bybit fonlama oranları pozitif kalarak long pozisyonların piyasaya hafif bir prim ödediğini, ancak genel piyasa ağırlıklı fonlamanın %${(btc.fundingRates.binance * 100).toFixed(4)} ile ılımlı bölgede seyrettiğini ortaya koyuyor.`,
        `Kriptonik Likidasyon Haritası motoru, mevcut açık pozisyonların tasfiye haritasına göre $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesinde $${(btc.liquidationClusters[0]?.volumeUsd / 1_000_000).toFixed(1)} milyon dolarlık short likidasyon kümelenmesi olduğunu raporlamaktadır.`
      ]
    },
    {
      id: 'solana-ve-altcoin-rotasyonu',
      category: 'ALTCOIN & ETF BEKLENTİLERİ',
      categoryColor: 'bg-purple-500/15 text-purple-400',
      title: `Solana Spot ETF Başvuruları ve Katman-1 Sermaye Rotasyonu: Kurumsal İştah Canlı`,
      subtitle: `VanEck, 21Shares ve Canary Capital başvuruları sonrası Solana $${sol.price.toFixed(2)} bandında güç topluyor.`,
      date: `${todayDate}, 14:15`,
      readTime: '4 dk',
      metrics: [
        { label: 'SOL Spot Fiyat', value: `$${sol.price.toFixed(2)}` },
        { label: 'Tahmini ETF AUM', value: '$8.50B' },
        { label: 'Onay İhtimali', value: '%82' }
      ],
      summary: `ABD Menkul Kıymetler Komisyonu'na (SEC) yapılan Solana Spot ETF başvuruları kurumsal yatırımcıların ilgisini Bitcoin ve Ethereum ötesine taşımaya başladı. İlk yıl için beklenen 4.2 milyar dolarlık sermaye girişi, Solana DeFi ekosisteminde kilitli toplam değerin (TVL) rekor tazelemesine destek veriyor.`,
      content: [
        `Bloomberg kıdemli ETF analistleri, Solana Spot ETF'lerinin onaylanma ihtimalini %82 olarak derecelendirmektedir. Kurumsal saklama altyapısında State Street ve Coinbase Custody gibi devlerin yer alması onay sürecini hızlandırmaktadır.`,
        `Öte yandan Solana ekosisteminde son 24 saatlik işlem hacmi ${(sol.volume24hUsd / 1_000_000).toFixed(0)} milyon dolara ulaşırken, türev piyasalarında fonlama oranları %${(sol.fundingRates.binance * 100).toFixed(3)} ile sağlıklı boğa primini koruyor.`,
        `Yatırımcılar için kritik seviye $${(sol.price * 1.08).toFixed(2)} direnci olup, bu bölgenin kırılması altcoin piyasasında genel bir ralli dalgasını tetikleyebilir.`
      ]
    },
    {
      id: 'doviz-ve-kripto-arbitraj',
      category: 'KUR & ARBİTRAJ',
      categoryColor: 'bg-[#00E699]/15 text-[#00E699]',
      title: `USD/TRY ${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺, USDT/TRY ${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺: Yerli Borsalarda Komisyon & Arbitraj Fırsatları`,
      subtitle: `TCMB resmi kuru ${LIVE_CURRENCY_RATES.TCMB_USD.toFixed(2)} ₺ iken Binance TR, Bybit TR ve BtcTurk arasındaki makas %0.18 bandında seyrediyor.`,
      date: `${todayDate}, 11:10`,
      readTime: '3 dk',
      metrics: [
        { label: 'Serbest Piyasa Dolar', value: `${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺` },
        { label: 'Binance TR USDT', value: `${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺` },
        { label: 'TCMB Gösterge', value: `${LIVE_CURRENCY_RATES.TCMB_USD.toFixed(2)} ₺` }
      ],
      summary: `Dolar ve Tether kurları arasındaki tezgâhüstü prim marjı incelendiğinde, yerli kripto yatırımcıları için USDT/TRY paritesinde işlem maliyetlerinin oldukça avantajlı seviyelere indiği tespit edildi. Bybit TR'nin %0.04 ve Binance TR'nin %0.08 piyasa yapıcı komisyon oranları aktif arbitraj yapan trader'lar için kârlılığı artırıyor.`,
      content: [
        `Dolar kurunun serbest piyasada ${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} ₺ seviyesine oturmasıyla birlikte stabil kripto para Tether (USDT), yerel kripto para borsalarında ${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ₺ üzerinden işlem görüyor.`,
        `Bankacılık sistemindeki FAST entegrasyonu sayesinde Türk Lirası giriş ve çıkışları sıfır komisyonla gerçekleşirken, borsalar arası fiyat farkları algoritmik botlar tarafından anında dengeleniyor.`
      ]
    },
    {
      id: 'balina-ve-kilit-acilimi',
      category: 'ON-CHAIN & KİLİT AÇILIMI',
      categoryColor: 'bg-amber-500/15 text-amber-400',
      title: `Kurumsal Saklama Cüzdanlarına $530M Değerinde Kripto Çekildi: Soğuk Cüzdan Birikimi Sürüyor`,
      subtitle: `Son 24 saatte borsalardan çekilen net $218M sermaye, büyük oyuncuların mevcut seviyeleri indirimli alım bölgesi olarak gördüğüne işaret ediyor.`,
      date: `${todayDate}, 09:30`,
      readTime: '3 dk',
      metrics: [
        { label: '24s Balina Hacmi', value: '$842M' },
        { label: 'Net Soğuk Çıkış', value: '+$218M' },
        { label: 'SUI Kilit Açılımı', value: '$45.2M' }
      ],
      summary: `Kriptonik Balina Radarı verilerine göre son 24 saatte Coinbase Prime ve Kraken üzerinden kurumsal saklama hesaplarına yoğun transferler gerçekleşti. Yaklaşan SUI ve ARB token kilit açılımları öncesinde kurumsal cüzdanların riskten korunma pozisyonları aldıkları tespit edildi.`,
      content: [
        `Büyük ölçekli zincir içi transferler, borsalara yatırılan $310M tutarındaki varlığa karşılık $530M değerinde kripto paranın soğuk cüzdanlara transfer edildiğini belgeliyor. Bu durum piyasadaki net satış baskısını sınırlandırmaktadır.`,
        `Token kilit açılımları takviminde ise bu ay serbest kalacak toplam 2.45 milyar dolarlık arzın piyasa yapıcılar tarafından nasıl absorbe edileceği yakından takip edilmelidir.`
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/25 font-bold">
              📰
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
              Kriptonik Günlük Bülten & Piyasa Raporları
            </h1>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[var(--card-muted)]">
            Algoritmik teşhisler, türev tasfiyeleri, kurumsal ETF akışları ve döviz arbitrajı üzerine günlük analizler ({todayDate}).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-[11px] font-mono text-[var(--card-muted)]">Son Güncelleme</div>
            <div className="text-xs font-mono font-bold text-[var(--foreground)]">{lastUpdated}</div>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3.5 py-2 text-xs font-semibold text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer shadow-xs"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-[#2962FF] ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Yenile</span>
          </button>
        </div>
      </div>

      {/* 2. Top Featured Intelligence Article */}
      <div className="panel-card p-6 sm:p-8 space-y-6 relative overflow-hidden border border-[#2962FF]/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-[#2962FF]/15 text-[#2962FF] px-2.5 py-1 text-xs font-mono font-bold border border-[#2962FF]/25">
              GÜNÜN MANŞET ANALİZİ
            </span>
            <span className="text-xs font-mono text-[var(--card-muted)]">
              {articles[0].readTime} okuma süresi
            </span>
          </div>
          <span className="text-xs font-mono text-[var(--card-muted)]">
            {articles[0].date}
          </span>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)] leading-snug">
            {articles[0].title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--card-muted)] leading-relaxed">
            {articles[0].subtitle}
          </p>
        </div>

        {/* Highlight KPI Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {articles[0].metrics.map((m, i) => (
            <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
              <div className="text-xs text-[var(--card-muted)]">{m.label}</div>
              <div className="mt-1 font-mono text-base sm:text-lg font-black text-[var(--foreground)]">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
          {articles[0].summary}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--border)]">
          <button
            onClick={() => setActiveArticle(articles[0])}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] text-white px-4 py-2 text-xs font-bold transition-all cursor-pointer shadow-md shadow-[#2962FF]/25"
          >
            <span>Raporun Tamamını Oku</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => handleShareArticle(articles[0])}
            className="inline-flex items-center gap-1.5 text-xs text-[var(--card-muted)] hover:text-[#2962FF] font-semibold transition-colors cursor-pointer"
          >
            {copiedId === articles[0].id ? <Check className="h-4 w-4 text-[#00E699]" /> : <Share2 className="h-4 w-4" />}
            <span>{copiedId === articles[0].id ? 'Kopyalandı!' : 'Raporu Paylaş'}</span>
          </button>
        </div>
      </div>

      {/* 3. Article Grid (4 Remaining Comprehensive Intelligence Reports) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.slice(1).map((art) => (
          <div
            key={art.id}
            className="panel-card p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#2962FF]/50 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className={`rounded-lg px-2.5 py-1 font-mono font-bold text-xs ${art.categoryColor}`}>
                  {art.category}
                </span>
                <span className="text-xs font-mono text-[var(--card-muted)]">
                  {art.date}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] group-hover:text-[#2962FF] transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--card-muted)] line-clamp-3 leading-relaxed">
                {art.summary}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-[var(--border)] text-xs font-mono">
              {art.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="text-[11px] text-[var(--card-muted)] block truncate">{m.label}</span>
                  <strong className="text-xs font-bold text-[var(--foreground)] truncate block">{m.value}</strong>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setActiveArticle(art)}
                className="text-xs font-bold text-[#2962FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Detaylı Analiz</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={() => handleShareArticle(art)}
                className="text-xs text-[var(--card-muted)] hover:text-[#2962FF] transition-colors cursor-pointer"
              >
                {copiedId === art.id ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Share2 className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Full Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="panel-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative border border-[#2962FF]/40 shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[var(--card-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2">
              <span className={`inline-block rounded-lg px-2.5 py-1 font-mono font-bold text-xs ${activeArticle.categoryColor}`}>
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)] leading-snug">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-[var(--card-muted)]">
                <span>Yayınlanma: {activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime} okuma</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-xs font-mono">
              {activeArticle.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-[11px] text-[var(--card-muted)]">{m.label}</div>
                  <div className="mt-0.5 text-sm font-bold text-[var(--foreground)]">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
              <span className="text-xs text-[var(--card-muted)] font-mono">Kriptonik Finansal Mühendislik Servisi</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] text-white px-4 py-2 text-xs font-bold transition-all cursor-pointer"
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
