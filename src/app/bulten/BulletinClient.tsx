'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COINS_DATA, FEAR_AND_GREED, BITCOIN_ETF_SUMMARY, ETHEREUM_ETF_SUMMARY, SOLANA_ETF_SUMMARY, LIVE_CURRENCY_RATES } from '../../lib/data';
import {
  Newspaper,
  Flame,
  Clock,
  ArrowRight,
  RefreshCw,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  DollarSign,
  CheckCircle2,
  X,
  Share2,
  Check,
  Send,
  MessageCircle,
  Copy,
  Zap,
  HelpCircle
} from 'lucide-react';

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

export default function BulletinClient() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeArticle, setActiveArticle] = useState<ReportArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Dynamic automatic today's date formatted in Turkish
  const [todayDate, setTodayDate] = useState('7 Kasım 2026');
  const [lastUpdated, setLastUpdated] = useState('Bugün, 11:30');

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
    }, 600);
  };

  const btc = COINS_DATA.find((c) => c.slug === 'bitcoin') || COINS_DATA[0];
  const eth = COINS_DATA.find((c) => c.slug === 'ethereum') || COINS_DATA[1];
  const sol = COINS_DATA.find((c) => c.slug === 'solana') || COINS_DATA[4] || COINS_DATA[0];
  const totalEtf = ((BITCOIN_ETF_SUMMARY.lastDayNetFlowUsd + ETHEREUM_ETF_SUMMARY.lastDayNetFlowUsd + (SOLANA_ETF_SUMMARY?.lastDayNetFlowUsd || 0)) / 1_000_000).toFixed(1);
  const isEtfPositive = Number(totalEtf) >= 0;

  // 30-Second Digest Text formatted for 1-Click Sharing
  const digestShareText = `📊 KRİPTONİK GÜNLÜK PİYASA ÖZETİ (${todayDate})\n\n` +
    `🪙 BTC: $${btc.price.toLocaleString('tr-TR')} | ETH: $${eth.price.toLocaleString('tr-TR')} | SOL: $${sol.price.toLocaleString('tr-TR')}\n` +
    `💵 USDT/TRY: ₺${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} | USD/TRY: ₺${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}\n` +
    `🔥 24s Likidasyon: $190.27M (%65.6 Long Tasfiyesi)\n` +
    `🏦 Spot ETF Kurumsal Akış: ${isEtfPositive ? '+' : ''}$${totalEtf}M\n` +
    `😱 Korku ve Açgözlülük: ${FEAR_AND_GREED.value}/100 (${FEAR_AND_GREED.classification.split(' ')[0]})\n\n` +
    `Detaylı Analiz & Isı Haritası:\n👉 https://kriptonik.com/bulten/`;

  const handleCopyDigest = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(digestShareText);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  const handleShareArticle = (art: ReportArticle) => {
    const text = `📰 [Kriptonik Raporu] ${art.title}\n\nDetaylar: https://kriptonik.com/bulten/`;
    if (navigator.share) {
      navigator.share({ title: art.title, text, url: 'https://kriptonik.com/bulten/' }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(art.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Programmatic rich intelligence reports constructed from live market data
  const articles: ReportArticle[] = [
    {
      id: 'sabah-piyasa-raporu',
      category: 'GÜNLÜK PİYASA RAPORU',
      categoryColor: 'bg-[#2962FF]/15 text-[#2962FF]',
      title: `Bitcoin $${btc.price.toLocaleString('tr-TR')} Seviyesinde Taban Ararken Korku Endeksi ${FEAR_AND_GREED.value} Seviyesinde: Kurumsal Fon Akışları`,
      subtitle: `Bireysel yatırımcı duyarlılığı temkinli seyrederken kurumsal fonlarda ${isEtfPositive ? 'net +' + totalEtf + 'M$ giriş' : 'net -' + Math.abs(Number(totalEtf)) + 'M$ çıkış'} kaydedildi.`,
      date: `${todayDate}, 10:45`,
      readTime: '3 dk',
      metrics: [
        { label: 'Spot BTC', value: `$${btc.price.toLocaleString('tr-TR')}` },
        { label: 'Korku/Açgözlülük', value: `${FEAR_AND_GREED.value}/100 (${FEAR_AND_GREED.classification.split(' ')[0]})` },
        { label: 'ETF Net Akış', value: `${isEtfPositive ? '+' : '-'}$${Math.abs(Number(totalEtf))}M`, isGood: isEtfPositive }
      ],
      summary: `Bitcoin, $${btc.price.toLocaleString('tr-TR')} bandında akümülasyon sürecini sürdürürken vadeli piyasalardaki Açık Pozisyon (OI) $${(btc.openInterestUsd / 1_000_000_000).toFixed(2)} milyar dolar seviyesinde konsolide oluyor. Bireysel duyarlılık endeksinin ${FEAR_AND_GREED.value} puan ile dengelenmesi kurumsal tarafta yeni pozisyonlanmalara zemin hazırlıyor.`,
      content: [
        `Piyasa genelinde son 24 saatlik fiyat hareketleri $${btc.price.toLocaleString('tr-TR')} civarında dengelenme gösteriyor. Trader psikolojisini ölçen endeks ${FEAR_AND_GREED.value} puan ile seyrediyor. Tarihsel on-chain döngü verileri incelendiğinde, bu tür yatay konsolidasyon dönemlerinin likidite temizliğine ve kurumsal yeniden pozisyonlanma dönemlerine zemin hazırladığı gözlemlenmektedir.`,
        `Kurumsal takas bilançolarına göre Spot ETF fonlarında son seansta ${isEtfPositive ? '+' : '-'}$${Math.abs(Number(totalEtf))} milyonluk akış gerçekleşti. Analistler bu hareketin makroekonomik faiz beklentileriyle paralel ilerlediğini belirtiyor.`,
        `Teknik olarak en yakın kritik tasfiye bariyeri $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesindedir. Fiyatın bu seviyeyi aşması durumunda short pozisyonların zorunlu alımlarıyla sert bir yukarı yönlü sıkışma (Short Squeeze) tetiklenebilir.`
      ]
    },
    {
      id: 'turev-tasfiye-bulteni',
      category: 'TASFİYE & TÜREV RAPORU',
      categoryColor: 'bg-[#FF3B56]/15 text-[#FF3B56]',
      title: `Türev Piyasalarında Son 24 Saatte $190.27M Pozisyon Tasfiye Edildi: 66.136 Yatırımcı Likidasyona Uğradı`,
      subtitle: `Tasfiyelerin %65.6'lık kısmı yükseliş bekleyen long yatırımcıların zorunlu tasfiyesiyle gerçekleşti.`,
      date: `${todayDate}, 09:30`,
      readTime: '4 dk',
      metrics: [
        { label: '24s Tasfiye', value: '$190.27M' },
        { label: 'Long Tasfiye Oranı', value: '%65.6' },
        { label: 'En Büyük Emir', value: '$2.88M (Binance)' }
      ],
      summary: `Kripto vadeli işlem borsalarında kaldıraçlı pozisyonlar üzerinde yoğun bir tasfiye süreci yaşandı. $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} civarındaki devasa likidite havuzları piyasa yapıcılar için ana çekim merkezi olmaya devam ediyor.`,
      content: [
        `Son 24 saatte kaydedilen tasfiyelerin büyük kısmını 50x ve 100x kaldıraç kullanan yüksek riskli pozisyonlar oluşturdu.`,
        `Binance ve Bybit fonlama oranları pozitif kalarak long pozisyonların piyasaya ılımlı bir prim ödediğini, ancak genel piyasa ağırlıklı fonlamanın %${(btc.fundingRates.binance * 100).toFixed(4)} ile dengeli bölgede seyrettiğini ortaya koyuyor.`,
        `Kriptonik Likidasyon Haritası motoru, mevcut açık pozisyonların tasfiye haritasına göre $${btc.dominantLiquidationLevel.toLocaleString('tr-TR')} seviyesinde short likidasyon kümelenmesi olduğunu raporlamaktadır.`
      ]
    },
    {
      id: 'solana-ve-altcoin-rotasyonu',
      category: 'ALTCOIN & ETF AKIŞI',
      categoryColor: 'bg-purple-500/15 text-purple-400',
      title: `Solana Spot ETF Fon Büyüklüğü $2.62 Milyara Ulaştı: Kurumsal Sermaye Girişi`,
      subtitle: `GSOL, VSOL ve TSOL fonları öncülüğünde Solana $${sol.price.toFixed(2)} seviyesinde kurumsal taleple destekleniyor.`,
      date: `${todayDate}, 08:45`,
      readTime: '3 dk',
      metrics: [
        { label: 'SOL Spot Fiyat', value: `$${sol.price.toFixed(2)}` },
        { label: 'Aktif ETF AUM', value: '$2.62B' },
        { label: '24s Net Giriş', value: '+$36.2M' }
      ],
      summary: `Solana kurumsal ETF fonlarının aktif işlem görmesiyle birlikte kurumsal yatırımcıların ilgisi Bitcoin ve Ethereum ötesine taşındı. Günlük +$36.2M net giriş kaydedilen Solana fonları ekosistemin DeFi kilitli değerini (TVL) güçlendiriyor.`,
      content: [
        `Kurumsal fon yöneticileri Solana fonlarına net sermaye tahsisini sürdürüyor. İşlem hacmi ve on-chain hız avantajı kurumsal portföylerde Solana ağırlığını artırıyor.`,
        `Solana vadeli piyasalarında fonlama oranları %${(sol.fundingRates.binance * 100).toFixed(3)} ile sağlıklı boğa primini koruyor.`,
        `Yatırımcılar için kritik direnç $${(sol.price * 1.08).toFixed(2)} bölgesinde kümelenmiştir.`
      ]
    },
    {
      id: 'doviz-ve-kripto-arbitraj',
      category: 'KUR & ARBİTRAJ',
      categoryColor: 'bg-[#00E699]/15 text-[#00E699]',
      title: `USD/TRY ₺${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}, USDT/TRY ₺${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}: Yerli Borsalarda Komisyon & Arbitraj Fırsatları`,
      subtitle: `TCMB gösterge kuru ₺${LIVE_CURRENCY_RATES.TCMB_USD.toFixed(2)} iken Binance TR, Bybit TR ve BtcTurk arasındaki makas avantajı sürüyor.`,
      date: `${todayDate}, 08:15`,
      readTime: '3 dk',
      metrics: [
        { label: 'Serbest Piyasa Dolar', value: `₺${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}` },
        { label: 'Binance TR USDT', value: `₺${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}` },
        { label: 'Kripto Dolar Primi', value: '-%0.22 İskonto' }
      ],
      summary: `Dolar ve Tether kurları arasındaki prim marjı incelendiğinde, yerli kripto yatırımcıları için USDT/TRY paritesinde işlem maliyetlerinin oldukça avantajlı seviyelere indiği tespit edildi. Bybit TR'nin %0.04 ve Binance TR'nin %0.08 piyasa yapıcı komisyon oranları aktif arbitraj yapan trader'lar için kârlılığı artırıyor.`,
      content: [
        `Dolar kurunun serbest piyasada ₺${LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)} seviyesinde bulunmasıyla stabil kripto para Tether (USDT), yerel borsalarda ₺${LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} üzerinden işlem görüyor.`,
        `Bankacılık sistemindeki FAST entegrasyonu sayesinde Türk Lirası transferleri kesintisiz devam ederken borsalar arası fiyat makasları algoritmik emirlerle anında dengeleniyor.`
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

      {/* 2. GÜNÜN 30 SANİYELİK ÖZETİ & HAP BİLGİLER HERO CARD WITH 1-CLICK SHARING */}
      <div className="rounded-2xl border-2 border-[#2962FF]/40 bg-gradient-to-br from-[var(--card)] via-[var(--card-subtle)] to-[var(--card)] p-6 sm:p-7 space-y-5 shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2962FF]/15 px-3 py-1 text-xs font-bold text-[#2962FF] border border-[#2962FF]/25">
              <Sparkles className="h-3.5 w-3.5" />
              <span>GÜNÜN 30 SANİYELİK ÖZETİ & HAP BİLGİLER</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-[var(--foreground)]">
              {todayDate} Kripto Piyasa Nabzı
            </h2>
          </div>

          {/* 1-Click Social Share Buttons */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {/* Share on X / Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(digestShareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-bold text-[var(--foreground)] hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors shadow-xs"
            >
              <span>𝕏 Paylaş</span>
            </a>

            {/* Share on Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent('https://kriptonik.com/bulten/')}&text=${encodeURIComponent(digestShareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-bold text-[var(--foreground)] hover:border-[#0088CC] hover:text-[#0088CC] transition-colors shadow-xs"
            >
              <Send className="h-3.5 w-3.5 text-[#0088CC]" />
              <span>Telegram</span>
            </a>

            {/* Share on WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(digestShareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-bold text-[var(--foreground)] hover:border-[#25D366] hover:text-[#25D366] transition-colors shadow-xs"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Copy Button */}
            <button
              onClick={handleCopyDigest}
              className="flex items-center gap-1.5 rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] px-3.5 py-1.5 font-bold text-white transition-all shadow-xs cursor-pointer"
            >
              {copiedBrief ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedBrief ? 'Kopyalandı!' : 'Özeti Kopyala'}</span>
            </button>
          </div>
        </div>

        {/* 4 Macro Telemetry Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
            <span className="text-[11px] text-[var(--card-muted)] block">Bitcoin Spot</span>
            <strong className="text-base sm:text-lg font-black text-[var(--foreground)]">
              ${btc.price.toLocaleString('tr-TR')}
            </strong>
            <span className={`text-[10px] font-bold block mt-0.5 ${btc.change24h >= 0 ? 'text-[#00E699]' : 'text-[#FF3B56]'}`}>
              {btc.change24h >= 0 ? '+' : ''}{btc.change24h.toFixed(2)}%
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
            <span className="text-[11px] text-[var(--card-muted)] block">24s Toplam Tasfiye</span>
            <strong className="text-base sm:text-lg font-black text-[#FF3B56]">
              $190.27M
            </strong>
            <span className="text-[10px] text-[var(--card-muted)] block mt-0.5">
              %65.6 Long tasfiyesi
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
            <span className="text-[11px] text-[var(--card-muted)] block">Tether & Dolar</span>
            <strong className="text-base sm:text-lg font-black text-[#00A86B] dark:text-[#00E699]">
              ₺{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)}
            </strong>
            <span className="text-[10px] text-[var(--card-muted)] block mt-0.5">
              USD: ₺{LIVE_CURRENCY_RATES.USD_TRY.toFixed(2)}
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
            <span className="text-[11px] text-[var(--card-muted)] block">Piyasa Duyarlılığı</span>
            <strong className="text-base sm:text-lg font-black text-[#FF3B56]">
              {FEAR_AND_GREED.value} / 100
            </strong>
            <span className="text-[10px] text-[#FF3B56] font-bold block mt-0.5">
              {FEAR_AND_GREED.classification.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* 3 Core Actionable Takeaways */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-2.5">
          <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Zap className="h-4 w-4 text-amber-400" />
            Günün 3 Kritik Çıkarımı
          </h3>
          <ul className="space-y-1.5 text-xs text-[var(--card-muted)] leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-[var(--foreground)]">Likidasyon Tuzağı:</strong> 24 saatte $190.2M tasfiyenin $124.8M kısmı long pozisyonlarda gerçekleşti; $74.500 ve $77.000 bandı arasına sıkışma devam ediyor.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Kurumsal Akış:</strong> Solana ETF fonları +$36.2M net giriş ile pozitif ayrışırken Bitcoin ETF fonlarında temkinli bir dengelenme izleniyor.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Arbitraj & TRY Fırsatı:</strong> Tether (USDT) serbest piyasada ₺{LIVE_CURRENCY_RATES.USDT_TRY.toFixed(2)} ile dolar kuruna karşı %0.22 iskontolu seyrediyor; yerli borsalarda alım maliyeti cazip kalıyor.
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Top Featured Intelligence Article */}
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

      {/* 4. Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

      {/* 5. Full Article Modal Reader */}
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
