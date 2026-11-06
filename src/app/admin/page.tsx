'use client';

import React, { useState } from 'react';
import { COINS_DATA } from '../../lib/data';
import { Terminal, Cpu, FileText, CheckCircle2, AlertTriangle, RefreshCw, Sparkles, Send, Globe, Trash2, Database } from 'lucide-react';

export default function AdminConsolePage() {
  const [activeTab, setActiveTab] = useState<'editor' | 'health' | 'ads'>('editor');

  // Editor states
  const [selectedCoinSlug, setSelectedCoinSlug] = useState('bitcoin');
  const [postTitle, setPostTitle] = useState('Bitcoin (BTC) Likidasyon Raporu: $93K Seviyesinde Sıkışma');
  const [postContent, setPostContent] = useState(
`## Piyasa Özeti
Son 24 saatte Bitcoin vadeli işlemlerinde toplam $184M değerinde pozisyon tasfiye edildi. 

### Kritik Seviyeler
- **Ana Direnç:** $93.450 (Maksimum Short tasfiye havuzu)
- **Destek Havuzu:** $88.100 (10x ve 25x Long stopları)

### Fonlama Durumu
Binance üzerinde fonlama oranı %+0.0105 seviyesinde. Boğa talebi devam ederken delta-nötr arbitraj için spread fırsatları mevcut.`
  );
  const [keyword, setKeyword] = useState('Bitcoin');
  const [cacheMessage, setCacheMessage] = useState('');

  // SEO Score calculation (Yoast / RankMath style)
  const titleLength = postTitle.length;
  const wordCount = postContent.trim().split(/\s+/).length;
  const keywordInTitle = postTitle.toLowerCase().includes(keyword.toLowerCase());
  const keywordInContent = postContent.toLowerCase().includes(keyword.toLowerCase());
  const hasH2 = postContent.includes('## ');

  let seoScore = 0;
  if (titleLength >= 30 && titleLength <= 70) seoScore += 25;
  else if (titleLength > 10) seoScore += 15;
  if (wordCount >= 50) seoScore += 25;
  else if (wordCount >= 20) seoScore += 15;
  if (keywordInTitle) seoScore += 25;
  if (keywordInContent && hasH2) seoScore += 25;

  // AI Draft Assistant
  const handleGenerateAiDraft = () => {
    const coin = COINS_DATA.find((c) => c.slug === selectedCoinSlug) || COINS_DATA[0];
    const vol = (coin.totalLiquidation24hUsd / 1_000_000).toFixed(1);
    const dominantLvl = coin.dominantLiquidationLevel.toLocaleString('tr-TR');

    setPostTitle(`${coin.name} (${coin.symbol}) Canlı On-Chain Bülteni: $${dominantLvl} Likidite Havuzunda Kritik Sıkışma`);
    setPostContent(
`## ${coin.name} (${coin.symbol}) Son 24 Saatlik Türev Analizi

Son verilere göre ${coin.name} paritesinde son 24 saatte toplam **$${vol} milyon** tasfiye gerçekleşti. 

### Likidasyon Yoğunluk Haritası
- En kritik tasfiye kümelenmesi **$${dominantLvl}** bandında bulunuyor.
- Long/Short oranı **${coin.longShortRatio.toFixed(2)}** seviyesinde seyrediyor (%${coin.longPercentage.toFixed(1)} Long ağırlığı).

### Borsalar Arası Fonlama Kıyaslaması
- **Binance:** %${(coin.fundingRates.binance * 100).toFixed(4)}
- **Bybit:** %${(coin.fundingRates.bybit * 100).toFixed(4)}
- **OKX:** %${(coin.fundingRates.okx * 100).toFixed(4)}

### Kriptonik Değerlendirmesi
Fiyatın $${dominantLvl} bandını aşması halinde 50x ve 100x kaldıraçlı short pozisyonların zorunlu alımlarıyla yukarı yönlü squeeze ivmesi beklenmektedir.`
    );
    setKeyword(coin.name);
  };

  const handleFlushCache = (type: string) => {
    setCacheMessage(`${type} önbelleği başarıyla temizlendi (Edge TTL sıfırlandı).`);
    setTimeout(() => setCacheMessage(''), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Admin Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222938] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2962FF] text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Kriptonik Yönetim Konsolu (Admin CMS)</span>
              <span className="rounded bg-[#00C087]/20 text-[#00C087] px-2 py-0.5 text-[10px] font-mono font-bold">YETKİLİ OTURUM</span>
            </h1>
            <p className="text-xs text-[#848E9C]">
              İçerik yönetimi, yapay zeka taslak asistanı, SEO analizörü ve harici veri API sağlığı izleme.
            </p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 rounded-lg border border-[#222938] bg-[#0B0E14] p-1 text-xs font-mono">
          <button
            onClick={() => setActiveTab('editor')}
            className={`rounded px-3 py-1.5 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'editor' ? 'bg-[#2962FF] text-white' : 'text-[#848E9C] hover:text-white'
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> İçerik & SEO Editörü
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`rounded px-3 py-1.5 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'health' ? 'bg-[#2962FF] text-white' : 'text-[#848E9C] hover:text-white'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" /> API & Önbellek Sağlığı
          </button>
        </div>
      </div>

      {cacheMessage && (
        <div className="rounded-lg border border-[#00C087]/30 bg-[#00C087]/10 p-3 text-xs text-[#00C087] flex items-center gap-2 font-mono">
          <CheckCircle2 className="h-4 w-4" />
          <span>{cacheMessage}</span>
        </div>
      )}

      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-4">
            <div className="panel-card p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#222938] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Yapay Zeka Taslak Asistanı:</span>
                  <select
                    value={selectedCoinSlug}
                    onChange={(e) => setSelectedCoinSlug(e.target.value)}
                    className="rounded border border-[#222938] bg-[#0B0E14] px-2 py-1 text-xs text-white outline-none"
                  >
                    {COINS_DATA.map((c) => (
                      <option key={c.id} value={c.slug}>{c.name} ({c.symbol})</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleGenerateAiDraft}
                  className="rounded-lg bg-gradient-to-r from-[#2962FF] to-[#00C087] px-3 py-1.5 text-xs font-bold text-white flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  1 Tıkla Veri Bülteni Oluştur
                </button>
              </div>

              {/* Title Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#848E9C]">Rapor / Yazı Başlığı (H1):</label>
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full rounded-lg border border-[#222938] bg-[#0B0E14] px-3.5 py-2 text-sm text-white font-bold outline-none focus:border-[#2962FF]"
                />
              </div>

              {/* Markdown / TipTap Editor */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#848E9C]">
                  <span>Markdown & Blok Editörü:</span>
                  <span className="font-mono text-[11px]">{wordCount} kelime • {postContent.length} karakter</span>
                </div>
                <textarea
                  rows={14}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full rounded-lg border border-[#222938] bg-[#0B0E14] p-3.5 font-mono text-xs text-white leading-relaxed outline-none focus:border-[#2962FF]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => alert('Taslak kaydedildi.')}
                  className="rounded-lg border border-[#222938] bg-[#151A23] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1E2532]"
                >
                  Taslak Kaydet
                </button>
                <button
                  onClick={() => alert('Rapor başarıyla yayınlandı.')}
                  className="rounded-lg bg-[#2962FF] px-4 py-2 text-xs font-bold text-white hover:bg-[#1E4BD8] flex items-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  Yayınla ve İndeks Gönder
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Yoast/RankMath SEO Scorer */}
          <div className="space-y-4">
            <div className="panel-card p-5 space-y-4">
              <div className="border-b border-[#222938] pb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Gerçek Zamanlı SEO Analizörü</h3>
                <span className={`font-mono text-sm font-black ${seoScore >= 80 ? 'text-[#00C087]' : seoScore >= 50 ? 'text-[#F2C14E]' : 'text-[#F6465D]'}`}>
                  {seoScore}/100
                </span>
              </div>

              {/* Focus Keyword */}
              <div className="space-y-1">
                <label className="text-[11px] text-[#848E9C]">Odak Anahtar Kelime:</label>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full rounded-md border border-[#222938] bg-[#0B0E14] px-2.5 py-1 text-xs text-white outline-none"
                />
              </div>

              {/* Criteria Checklist */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${keywordInTitle ? 'text-[#00C087]' : 'text-[#848E9C]'}`} />
                  <div>
                    <div className="text-white font-medium">Başlıkta Anahtar Kelime</div>
                    <div className="text-[10px] text-[#848E9C]">"{keyword}" başlıkta geçiyor.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${titleLength >= 30 && titleLength <= 70 ? 'text-[#00C087]' : 'text-[#F2C14E]'}`} />
                  <div>
                    <div className="text-white font-medium">Başlık Uzunluğu ({titleLength} karakter)</div>
                    <div className="text-[10px] text-[#848E9C]">Önerilen: 30 - 70 karakter arası.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${wordCount >= 50 ? 'text-[#00C087]' : 'text-[#F2C14E]'}`} />
                  <div>
                    <div className="text-white font-medium">Kelime Sayısı ({wordCount} kelime)</div>
                    <div className="text-[10px] text-[#848E9C]">Zengin içerik için en az 50 kelime.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${hasH2 ? 'text-[#00C087]' : 'text-[#848E9C]'}`} />
                  <div>
                    <div className="text-white font-medium">H2 / H3 Alt Başlık Yapısı</div>
                    <div className="text-[10px] text-[#848E9C]">Okunabilirlik ve yapılandırılmış metin.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sitemaps card */}
            <div className="panel-card p-4 space-y-2 text-xs">
              <h4 className="font-bold text-white flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-[#2962FF]" />
                Programmatic SEO (pSEO)
              </h4>
              <p className="text-[#848E9C] text-[11px] leading-relaxed">
                Tüm coinlerin statik sayfaları sitemap.xml içinde Google Search Console için optimize edilmiş olarak indekslenmektedir.
              </p>
              <div className="pt-1">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  className="text-[#2962FF] hover:underline font-mono text-[11px]"
                >
                  → sitemap.xml Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'health' && (
        <div className="space-y-6">
          {/* API Health Table */}
          <div className="panel-card p-5 space-y-4">
            <div className="border-b border-[#222938] pb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[#00C087]" />
                Harici Veri Hatları & API Durumları
              </h3>
              <span className="font-mono text-xs text-[#00C087] flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#00C087] pulse-bull" /> Canlı İzleniyor
              </span>
            </div>

            <div className="overflow-x-auto text-xs font-mono">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#222938] text-[#848E9C]">
                    <th className="py-2.5 px-3">API Kaynağı</th>
                    <th className="py-2.5 px-3">Protokol / Metot</th>
                    <th className="py-2.5 px-3">Gecikme (Ping)</th>
                    <th className="py-2.5 px-3">Kota / Rate Limit</th>
                    <th className="py-2.5 px-3">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A212D]">
                  <tr>
                    <td className="py-3 px-3 font-bold text-white">Binance Futures WebSocket</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">WSS (!miniTicker@arr)</td>
                    <td className="py-3 px-3 text-[#00C087]">18 ms</td>
                    <td className="py-3 px-3 text-[#848E9C]">Limitsiz (Push)</td>
                    <td className="py-3 px-3"><span className="badge-bull px-2 py-0.5 rounded text-[10px] font-bold">AKTİF</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-white">Coinglass API v3</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">REST (60s Poll)</td>
                    <td className="py-3 px-3 text-[#00C087]">64 ms</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">%14 Kullanıldı</td>
                    <td className="py-3 px-3"><span className="badge-bull px-2 py-0.5 rounded text-[10px] font-bold">AKTİF</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-white">CoinGecko Pro API</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">REST (300s Poll)</td>
                    <td className="py-3 px-3 text-[#00C087]">85 ms</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">%22 Kullanıldı</td>
                    <td className="py-3 px-3"><span className="badge-bull px-2 py-0.5 rounded text-[10px] font-bold">AKTİF</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-white">Alternative.me Fear & Greed</td>
                    <td className="py-3 px-3 text-[#CBD5E1]">Günlük Cron</td>
                    <td className="py-3 px-3 text-[#00C087]">112 ms</td>
                    <td className="py-3 px-3 text-[#848E9C]">Limitsiz</td>
                    <td className="py-3 px-3"><span className="badge-bull px-2 py-0.5 rounded text-[10px] font-bold">AKTİF</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Redis Cache Flush Controls */}
          <div className="panel-card p-5 space-y-4">
            <div className="border-b border-[#222938] pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Database className="h-4 w-4 text-[#2962FF]" />
                Önbellek & CDN Temizleme Konsolu (Cache Flush)
              </h3>
              <p className="text-xs text-[#848E9C] mt-0.5">
                Cloudflare Edge Cache ve yerel bellek içi önbelleği tek tıkla boşaltarak canlı verileri yenileyin.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleFlushCache('Likidasyon')}
                className="rounded-lg border border-[#222938] bg-[#0B0E14] px-3.5 py-2 text-xs font-mono font-semibold text-white hover:border-[#2962FF] transition-colors"
              >
                Likidasyon Önbelleğini Boşalt
              </button>
              <button
                onClick={() => handleFlushCache('Fonlama')}
                className="rounded-lg border border-[#222938] bg-[#0B0E14] px-3.5 py-2 text-xs font-mono font-semibold text-white hover:border-[#00C087] transition-colors"
              >
                Fonlama Oranlarını Sıfırla
              </button>
              <button
                onClick={() => handleFlushCache('Global (Tümünü Temizle)')}
                className="rounded-lg bg-[#F6465D] px-4 py-2 text-xs font-mono font-bold text-white hover:bg-[#D6354B] transition-colors shadow-md"
              >
                Global Flush (Cloudflare Purge Everything)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
