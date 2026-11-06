import React from 'react';
import Link from 'next/link';
import { COINS_DATA } from '../lib/data';
import { Shield, Activity, Database, Terminal, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#222938] bg-[#080B10] text-[#848E9C]">
      {/* Upper Data Integrity & Transparency Banner */}
      <div className="border-b border-[#1A212D] py-6 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/10 text-[#2962FF] border border-[#2962FF]/20">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Düşük Gecikmeli Finansal Veri Hattı</div>
              <div className="text-[11px] text-[#848E9C]">Binance Futures WebSocket (`!miniTicker@arr`) • Coinglass v3 • CoinGecko Pro</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#00C087]">
              <span className="h-2 w-2 rounded-full bg-[#00C087] pulse-bull" />
              Sistem Sağlığı: %99.98 Uptime
            </span>
            <span>•</span>
            <span className="text-[#CBD5E1]">SSL & Cloudflare Edge Korumalı</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2962FF] text-white font-mono font-bold text-sm">
                ◈
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-tight">KRİPTONİK</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Türev ve on-chain dünyasının en kritik sinyallerini (Likidasyon Isı Haritası, Fonlama Oranları, Balina Hareketleri, Token Kilit Açılımları) sadeleştirilmiş, estetik ve saniyelik çalışan bileşenlerle sunan bağımsız veri terminali.
            </p>
            <div className="text-[11px] font-mono text-[#CBD5E1] bg-[#151A23] border border-[#222938] rounded-md p-2.5 max-w-sm">
              💡 <strong>Sıfır Gürültü Prensibi:</strong> Kriptonik seed phrase veya cüzdan özel anahtarı (private key) ASLA talep etmez.
            </div>
          </div>

          {/* Sinyal ve Göstergeler */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Sinyal Merkezleri</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/likidasyon/" className="hover:text-white transition-colors">Likidasyon Isı Haritası</Link></li>
              <li><Link href="/fonlama-oranlari/" className="hover:text-white transition-colors">Borsalar Arası Fonlama</Link></li>
              <li><Link href="/token-kilit-acilimlari/" className="hover:text-white transition-colors">Token Kilit Açılım Takvimi</Link></li>
              <li><Link href="/acik-pozisyon/" className="hover:text-white transition-colors">Açık Pozisyon (OI) Sapması</Link></li>
              <li><Link href="/balina-takibi/" className="hover:text-white transition-colors">Büyük Cüzdan / Balina Radarı</Link></li>
              <li><Link href="/bulten/" className="hover:text-white transition-colors">Piyasa Analiz Bülteni</Link></li>
            </ul>
          </div>

          {/* Programmatic Top Coins (SEO Directory) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Coin Terminası</h4>
            <ul className="space-y-2 text-xs">
              {COINS_DATA.slice(0, 6).map((coin) => (
                <li key={coin.id}>
                  <Link href={`/likidasyon/${coin.slug}/`} className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{coin.name} ({coin.symbol})</span>
                    <span className="font-mono text-[10px] text-[#848E9C]">${(coin.totalLiquidation24hUsd / 1_000_000).toFixed(0)}M</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kriptonik Platform & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/admin/" className="text-[#2962FF] hover:underline flex items-center gap-1.5 font-medium"><Terminal className="h-3 w-3" /> Yönetim Konsolu (CMS)</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Dinamik Sitemap (pSEO)</Link></li>
              <li><span className="text-[#4E5A6E]">API Docs (Yakında)</span></li>
              <li><span className="text-[#4E5A6E]">WebSocket Feed Docs</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="mt-12 border-t border-[#1A212D] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            © {new Date().getFullYear()} Kriptonik.com. Tüm hakları saklıdır. Sunulan veriler ve göstergeler yatırım tavsiyesi niteliğinde olmayıp eğitim ve on-chain teşhis amaçlıdır.
          </p>
          <div className="flex items-center gap-4 text-[#848E9C]">
            <span className="hover:text-white cursor-pointer">Kullanım Koşulları</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Gizlilik Taahhüdü</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Risk Bildirimi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
