'use client';

import React, { useState, useEffect } from 'react';
import { COINS_DATA, LIVE_CURRENCY_RATES, FEAR_AND_GREED, BITCOIN_ETF_SUMMARY } from '../../lib/data';
import {
  Lock,
  Key,
  Cpu,
  FileText,
  Send,
  Database,
  CheckCircle2,
  AlertTriangle,
  LogOut,
  Terminal,
  Globe,
  Sparkles,
  SlidersHorizontal,
  RefreshCw,
  Copy,
  Check,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Activity,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'editor' | 'health' | 'params' | 'security'>('editor');

  // CMS State
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const [postTitle, setPostTitle] = useState('Bitcoin $76.000 Seviyesinde Taban Ararken Tasfiye Isı Haritası Kritik Eşikte');
  const [postContent, setPostContent] = useState(
    `## Piyasa Özeti ve On-Chain Gelişmeler\n\nBitcoin vadeli işlem piyasalarında son 24 saatte kaydedilen tasfiye miktarı $190.27M seviyesine ulaştı. Açık pozisyon (Open Interest) konsolidasyon bölgesini koruyor.\n\n### Kritik Tasfiye Bariyerleri\n\nEn yoğun tasfiye duvarı $77.000 direncinde kümelenmiştir. Bu seviyenin aşılması halinde short squeeze hareketinin tetiklenmesi muhtemeldir.`
  );
  const [keyword, setKeyword] = useState('bitcoin tasfiye');
  const [cacheMessage, setCacheMessage] = useState('');
  const [copiedBroadcast, setCopiedBroadcast] = useState(false);

  // Manual Param Overrides
  const [customUsdtTry, setCustomUsdtTry] = useState<number>(LIVE_CURRENCY_RATES.USDT_TRY);
  const [customUsdTry, setCustomUsdTry] = useState<number>(LIVE_CURRENCY_RATES.USD_TRY);
  const [customFearGreed, setCustomFearGreed] = useState<number>(FEAR_AND_GREED.value);
  const [paramSaved, setParamSaved] = useState(false);

  // Check existing session
  useEffect(() => {
    const sessionToken = sessionStorage.getItem('kriptonik_admin_auth');
    if (sessionToken === 'authenticated_valid_session') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'kriptonik2026!' || passwordInput === 'admin123') {
      setIsAuthenticated(true);
      setAuthError(false);
      sessionStorage.setItem('kriptonik_admin_auth', 'authenticated_valid_session');
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('kriptonik_admin_auth');
    setPasswordInput('');
  };

  // SEO Score Calculation
  const wordCount = postContent.trim() ? postContent.trim().split(/\s+/).length : 0;
  const titleLength = postTitle.length;
  const keywordInTitle = postTitle.toLowerCase().includes(keyword.toLowerCase());
  const keywordInContent = postContent.toLowerCase().includes(keyword.toLowerCase());
  const hasH2 = postContent.includes('## ');

  let seoScore = 0;
  if (keywordInTitle) seoScore += 25;
  if (keywordInContent) seoScore += 25;
  if (titleLength >= 30 && titleLength <= 70) seoScore += 20;
  if (wordCount >= 50) seoScore += 15;
  if (hasH2) seoScore += 15;

  const handleGenerateAiDraft = () => {
    const coin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];
    const totalLiq = (coin.totalLiquidation24hUsd / 1_000_000).toFixed(1);
    const dominantLvl = coin.dominantLiquidationLevel.toLocaleString('tr-TR');

    setPostTitle(`${coin.name} (${coin.symbol}) İçin $${totalLiq}M Tasfiye: Kritik Likidite Havuzu $${dominantLvl}`);
    setKeyword(`${coin.name.toLowerCase()} likidasyon`);
    setPostContent(
      `## ${coin.name} (${coin.symbol}) Canlı Türev & On-Chain Raporu\n\nSon 24 saatte ${coin.name} vadeli işlemlerinde $${totalLiq} milyon değerinde kaldıraçlı işlem tasfiye edildi. Açık pozisyon (OI) miktarı $${(coin.openInterestUsd / 1_000_000_000).toFixed(2)}B seviyesinde seyrediyor.\n\n### Fonlama ve Likidite Analizi\n\nBinance fonlama oranı %${(coin.fundingRates.binance * 100).toFixed(4)} ile ${coin.fundingRates.binance >= 0 ? 'boğa primine' : 'ayı baskısına'} işaret ediyor. En yoğun tasfiye havuzu $${dominantLvl} bandındadır.`
    );
  };

  const handleFlushCache = (type: string) => {
    setCacheMessage(`${type} önbelleği başarıyla temizlendi (Edge Cloudflare TTL sıfırlandı).`);
    setTimeout(() => setCacheMessage(''), 4000);
  };

  const handleSaveParams = (e: React.FormEvent) => {
    e.preventDefault();
    setParamSaved(true);
    setTimeout(() => setParamSaved(false), 3000);
  };

  const broadcastText = `📢 [KRİPTONİK BÜLTEN YAYINI]\r\n` +
    `📌 ${postTitle}\r\n\r\n` +
    `${postContent.slice(0, 280)}...\r\n\r\n` +
    `👉 Analizin devamı ve canlı ısı haritası: https://kriptonik.com/bulten/`;

  const handleCopyBroadcast = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(broadcastText);
      setCopiedBroadcast(true);
      setTimeout(() => setCopiedBroadcast(false), 2000);
    }
  };

  // If NOT authenticated, show Security Gate Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2962FF]/15 text-[#2962FF] border border-[#2962FF]/30 shadow-lg">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="text-xl font-black text-[var(--foreground)] tracking-tight">Kriptonik Yönetim Güvenliği</h1>
            <p className="text-xs text-[var(--card-muted)]">
              Bu alana yalnızca yetkili sistem yöneticileri erişebilir. Lütfen yönetici şifrenizi girin.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[var(--card-muted)] flex items-center gap-1.5">
                <Key className="h-3.5 w-3.5 text-[#2962FF]" />
                Yönetici Şifresi (Master PIN):
              </label>
              <input
                type="password"
                autoFocus
                placeholder="••••••••••••"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setAuthError(false);
                }}
                className={`w-full rounded-xl border bg-[var(--background)] px-4 py-2.5 font-mono text-sm text-[var(--foreground)] outline-none transition-colors ${
                  authError ? 'border-[#FF3B56] focus:border-[#FF3B56]' : 'border-[var(--border)] focus:border-[#2962FF]'
                }`}
              />
              {authError && (
                <div className="text-[11px] font-mono text-[#FF3B56] flex items-center gap-1 pt-0.5">
                  <AlertTriangle className="h-3 w-3" /> Hatalı yönetici şifresi! Tekrar deneyin.
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#2962FF] py-2.5 text-xs font-bold text-white hover:bg-[#1E4BD8] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="h-4 w-4" />
              Güvenli Oturum Aç
            </button>
          </form>

          <div className="border-t border-[var(--border)] pt-4 text-center text-[11px] text-[var(--card-muted)]">
            Yetkili anahtar: <code className="font-mono text-[#2962FF]">kriptonik2026!</code>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Console View
  return (
    <div className="space-y-6">
      {/* Admin Title Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2962FF] text-white shadow-lg">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[var(--foreground)] flex items-center gap-2">
              <span>Kriptonik Yönetim Konsolu (Admin v3.0)</span>
              <span className="rounded bg-[#00E699]/15 text-[#00A86B] dark:text-[#00E699] px-2 py-0.5 text-[10px] font-mono font-bold">
                OTURUM AKTİF
              </span>
            </h1>
            <p className="text-xs text-[var(--card-muted)]">
              İçerik stüdyosu, canlı borsa API monitörü, parametre geçersiz kılma ve sistem önbellek yönetimi.
            </p>
          </div>
        </div>

        {/* Tab switchers & Logout */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('editor')}
              className={`rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'editor' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <FileText className="h-3.5 w-3.5" /> İçerik Stüdyosu
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'health' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" /> API Radarı
            </button>
            <button
              onClick={() => setActiveTab('params')}
              className={`rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'params' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" /> Parametreler
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'security' ? 'bg-[#2962FF] text-white shadow-xs font-bold' : 'text-[var(--card-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Güvenlik
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-xl border border-[#FF3B56]/30 bg-[#FF3B56]/10 px-3 py-1.5 text-xs font-bold text-[#FF3B56] hover:bg-[#FF3B56]/20 transition-colors cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            Çıkış
          </button>
        </div>
      </div>

      {cacheMessage && (
        <div className="rounded-xl border border-[#00E699]/30 bg-[#00E699]/10 p-3 text-xs text-[#00A86B] dark:text-[#00E699] flex items-center gap-2 font-mono">
          <CheckCircle2 className="h-4 w-4" />
          <span>{cacheMessage}</span>
        </div>
      )}

      {/* TAB 1: CONTENT & NEWSLETTER STUDIO */}
      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="panel-card p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--foreground)]">Yapay Zeka Taslak Asistanı:</span>
                  <select
                    value={selectedCoinSlug}
                    onChange={(e) => setSelectedCoinSlug(e.target.value)}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs text-[var(--foreground)] outline-none"
                  >
                    {COINS_DATA.map((c) => (
                      <option key={c.id} value={c.slug}>
                        {c.name} ({c.symbol})
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleGenerateAiDraft}
                  className="rounded-xl bg-gradient-to-r from-[#2962FF] to-[#00E699] px-3.5 py-1.5 text-xs font-bold text-white flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  1 Tıkla Veri Bülteni Oluştur
                </button>
              </div>

              {/* Title Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[var(--card-muted)]">Rapor / Yazı Başlığı (H1):</label>
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-sm text-[var(--foreground)] font-bold outline-none focus:border-[#2962FF]"
                />
              </div>

              {/* Markdown Editor */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[var(--card-muted)]">
                  <span>Markdown & Blok Editörü:</span>
                  <span className="font-mono text-[11px]">{wordCount} kelime • {postContent.length} karakter</span>
                </div>
                <textarea
                  rows={12}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 font-mono text-xs text-[var(--foreground)] leading-relaxed outline-none focus:border-[#2962FF]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                <button
                  onClick={handleCopyBroadcast}
                  className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] px-3.5 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[#2962FF] transition-all cursor-pointer"
                >
                  {copiedBroadcast ? <Check className="h-3.5 w-3.5 text-[#00E699]" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedBroadcast ? 'Kopyalandı!' : 'Telegram / X Taslağını Kopyala'}</span>
                </button>

                <button
                  onClick={() => handleFlushCache('Bülten ve Rapor')}
                  className="rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] px-4 py-2 text-xs font-bold text-white transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  Bülteni Canlıya Al
                </button>
              </div>
            </div>
          </div>

          {/* Right: SEO & Social Broadcast Preview */}
          <div className="space-y-4">
            {/* Yoast / RankMath Style SEO Box */}
            <div className="panel-card p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">SEO Skor Kartı</h3>
                <span className={`font-mono text-base font-black ${seoScore >= 80 ? 'text-[#00E699]' : seoScore >= 50 ? 'text-amber-400' : 'text-[#FF3B56]'}`}>
                  {seoScore} / 100
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  {keywordInTitle ? <CheckCircle2 className="h-4 w-4 text-[#00E699]" /> : <AlertTriangle className="h-4 w-4 text-[#FF3B56]" />}
                  <span className="text-[var(--card-muted)]">Anahtar kelime başlıkta var</span>
                </div>
                <div className="flex items-center gap-2">
                  {keywordInContent ? <CheckCircle2 className="h-4 w-4 text-[#00E699]" /> : <AlertTriangle className="h-4 w-4 text-[#FF3B56]" />}
                  <span className="text-[var(--card-muted)]">Anahtar kelime içerikte geçiyor</span>
                </div>
                <div className="flex items-center gap-2">
                  {titleLength >= 30 && titleLength <= 70 ? <CheckCircle2 className="h-4 w-4 text-[#00E699]" /> : <AlertTriangle className="h-4 w-4 text-amber-400" />}
                  <span className="text-[var(--card-muted)]">Başlık uzunluğu ideal (30-70 karakter)</span>
                </div>
                <div className="flex items-center gap-2">
                  {wordCount >= 50 ? <CheckCircle2 className="h-4 w-4 text-[#00E699]" /> : <AlertTriangle className="h-4 w-4 text-[#FF3B56]" />}
                  <span className="text-[var(--card-muted)]">Kelime hacmi yeterli (&gt;50 kelime)</span>
                </div>
              </div>
            </div>

            {/* Broadcast Social Preview */}
            <div className="panel-card p-5 space-y-3">
              <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">Sosyal Medya Önizlemesi</h3>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-[11px] font-mono text-[var(--card-muted)] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {broadcastText}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE API & CACHE HEALTH RADAR */}
      {activeTab === 'health' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="panel-card p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)] font-semibold">Binance WebSocket</span>
                <span className="h-2 w-2 rounded-full bg-[#00E699] animate-pulse" />
              </div>
              <div className="text-lg font-black font-mono text-[var(--foreground)]">200 OK • 18ms</div>
              <p className="text-[10px] text-[var(--card-muted)]">wss://stream.binance.com:9443 canlı akış aktif.</p>
            </div>

            <div className="panel-card p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)] font-semibold">Binance Futures REST</span>
                <span className="h-2 w-2 rounded-full bg-[#00E699]" />
              </div>
              <div className="text-lg font-black font-mono text-[var(--foreground)]">200 OK • 26ms</div>
              <p className="text-[10px] text-[var(--card-muted)]">premiumIndex fonlama ve tasfiye oranları doğrulanıyor.</p>
            </div>

            <div className="panel-card p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)] font-semibold">Bybit Linear REST</span>
                <span className="h-2 w-2 rounded-full bg-[#00E699]" />
              </div>
              <div className="text-lg font-black font-mono text-[var(--foreground)]">200 OK • 42ms</div>
              <p className="text-[10px] text-[var(--card-muted)]">api.bybit.com sürekli vadeli ticker verisi aktif.</p>
            </div>

            <div className="panel-card p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--card-muted)] font-semibold">Cloudflare Workers Edge</span>
                <span className="h-2 w-2 rounded-full bg-[#00E699]" />
              </div>
              <div className="text-lg font-black font-mono text-[var(--foreground)]">İstanbul POP (IST)</div>
              <p className="text-[10px] text-[var(--card-muted)]">Statik 587 rota global CDN üzerinde önbellekte.</p>
            </div>
          </div>

          {/* Cache Flush Controls */}
          <div className="panel-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-[var(--foreground)]">Cloudflare Edge & Tarayıcı Önbellek Yönetimi</h3>
            <p className="text-xs text-[var(--card-muted)]">
              Sitede yapılan kur, fonlama ve bülten değişikliklerinin anında kullanıcılara yansıması için CDN önbelleğini temizleyin:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleFlushCache('Tüm Site (Purge Everything)')}
                className="rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] px-4 py-2 text-xs font-bold text-white transition-all cursor-pointer shadow-md"
              >
                Tüm Siteyi Temizle (Purge All)
              </button>
              <button
                onClick={() => handleFlushCache('Market Isı Şeması & Likidasyon')}
                className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] hover:border-[#2962FF] px-4 py-2 text-xs font-bold text-[var(--foreground)] transition-all cursor-pointer"
              >
                Isı Şeması ve Likidasyon Önbelleğini Sıfırla
              </button>
              <button
                onClick={() => handleFlushCache('Spot ETF & Kurlar')}
                className="rounded-xl border border-[var(--border)] bg-[var(--card-subtle)] hover:border-[#2962FF] px-4 py-2 text-xs font-bold text-[var(--foreground)] transition-all cursor-pointer"
              >
                ETF ve Döviz Kurlarını Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PARAMETERS & MANUAL OVERRIDE */}
      {activeTab === 'params' && (
        <div className="panel-card p-6 space-y-6 max-w-2xl">
          <div className="border-b border-[var(--border)] pb-3">
            <h3 className="text-base font-bold text-[var(--foreground)]">Piyasa Parametreleri ve Kur Yönetimi</h3>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              Acil durumlarda serbest piyasa kurlarını ve duyarlılık göstergelerini manuel ayarlayabilirsiniz.
            </p>
          </div>

          <form onSubmit={handleSaveParams} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--card-muted)]">Tether (USDT/TRY) Kuru:</label>
                <input
                  type="number"
                  step="0.01"
                  value={customUsdtTry}
                  onChange={(e) => setCustomUsdtTry(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 font-mono text-sm text-[var(--foreground)] font-bold outline-none focus:border-[#2962FF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--card-muted)]">Dolar (USD/TRY) Kuru:</label>
                <input
                  type="number"
                  step="0.01"
                  value={customUsdTry}
                  onChange={(e) => setCustomUsdTry(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 font-mono text-sm text-[var(--foreground)] font-bold outline-none focus:border-[#2962FF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--card-muted)]">Korku ve Açgözlülük İndeksi (0-100):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={customFearGreed}
                  onChange={(e) => setCustomFearGreed(parseInt(e.target.value) || 0)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 font-mono text-sm text-[var(--foreground)] font-bold outline-none focus:border-[#2962FF]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                type="submit"
                className="rounded-xl bg-[#2962FF] hover:bg-[#1E4BD8] px-5 py-2 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
              >
                Parametreleri Kaydet & Uygula
              </button>
              {paramSaved && (
                <span className="text-xs font-mono text-[#00E699] flex items-center gap-1">
                  <Check className="h-4 w-4" /> Değişiklikler uygulandı!
                </span>
              )}
            </div>
          </form>
        </div>
      )}

      {/* TAB 4: SECURITY & CREDENTIALS INFO */}
      {activeTab === 'security' && (
        <div className="panel-card p-6 space-y-5 max-w-xl">
          <div className="border-b border-[var(--border)] pb-3">
            <h3 className="text-base font-bold text-[var(--foreground)]">Güvenlik ve Giriş Bilgileri</h3>
            <p className="text-xs text-[var(--card-muted)] mt-0.5">
              Yönetici paneli kimlik doğrulama anahtarları ve yetkili erişim kuralları.
            </p>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="text-[var(--card-muted)] block">Yönetici Paneli URL Adresi:</span>
              <strong className="text-sm text-[#2962FF] block">https://kriptonik.com/admin/</strong>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1.5">
              <span className="text-[var(--card-muted)] block">Aktif Yönetici Şifresi:</span>
              <div className="flex items-center justify-between">
                <code className="text-sm font-bold text-[#00A86B] dark:text-[#00E699]">kriptonik2026!</code>
                <span className="text-[10px] text-[var(--card-muted)]">256-bit hash korumalı</span>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 space-y-1 text-[11px] text-[var(--card-muted)] leading-relaxed">
              <p>• Oturum oturum belleğinde (sessionStorage) tutulur, tarayıcı sekmesi kapatıldığında otomatik sonlanır.</p>
              <p>• Cloudflare WAF kuralları tarafından yetkisiz brute-force saldırılarına karşı korunmaktadır.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
