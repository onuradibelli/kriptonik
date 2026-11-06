import React from 'react';
import Link from 'next/link';
import { COINS_DATA } from '../lib/data';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] transition-colors">
      {/* Upper Data Integrity & Transparency Banner */}
      <div className="border-b border-[var(--border)] py-6 px-4 bg-[var(--subtle)]">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2962FF]/10 text-[#2962FF] border border-[#2962FF]/20">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-[var(--foreground)]">Doğrulanmış Düşük Gecikmeli Finansal Veri Hattı</div>
              <div className="text-[11px] text-[var(--card-muted)]">Binance Global Spot & Futures API • Alternative.me FNG API • TCMB & Serbest Piyasa</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#00C087]">
              <span className="h-2 w-2 rounded-full bg-[#00C087] pulse-bull" />
              Sistem Sağlığı: %99.99 Uptime
            </span>
            <span>•</span>
            <span className="text-[var(--card-muted)]">SSL & Cloudflare Edge Korumalı</span>
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
              <span className="font-mono text-lg font-bold text-[var(--foreground)] tracking-tight">KRİPTONİK</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-[var(--card-muted)]">
              Türev ve on-chain dünyasının en kritik sinyallerini (Likidasyon Isı Haritası, Fonlama Oranları, Spot ETF Akışları, Balina Hareketleri, Token Kilit Açılımları) sadeleştirilmiş, estetik ve saniyelik çalışan bileşenlerle sunan bağımsız veri terminali.
            </p>
            <div className="text-[11px] font-mono text-[var(--foreground)] bg-[var(--background)] border border-[var(--border)] rounded-md p-2.5 max-w-sm">
              💡 <strong>Sıfır Gürültü Prensibi:</strong> Kriptonik seed phrase veya cüzdan özel anahtarı (private key) ASLA talep etmez.
            </div>
          </div>

          {/* Sinyal ve Göstergeler */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider font-mono">Sinyal Merkezleri</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/likidasyon/" className="hover:text-[#2962FF] transition-colors">Likidasyon Isı Haritası</Link></li>
              <li><Link href="/hesaplayici/" className="text-[#2962FF] font-semibold hover:underline flex items-center gap-1.5"><span>Kaldıraç Hesaplayıcı</span><span className="rounded bg-[#2962FF]/15 text-[9px] px-1 font-mono">PRO</span></Link></li>
              <li><Link href="/fonlama-oranlari/" className="hover:text-[#2962FF] transition-colors">Borsalar Arası Fonlama</Link></li>
              <li><Link href="/etf/" className="text-[#00C087] font-semibold hover:underline">Spot ETF Akışları</Link></li>
              <li><Link href="/kac-tl/" className="text-[#2962FF] font-semibold hover:underline">Kaç TL? Canlı Çevirici</Link></li>
              <li><Link href="/token-kilit-acilimlari/" className="hover:text-[#2962FF] transition-colors">Token Kilit Açılım Takvimi</Link></li>
              <li><Link href="/acik-pozisyon/" className="hover:text-[#2962FF] transition-colors">Açık Pozisyon (OI) Sapması</Link></li>
              <li><Link href="/balina-takibi/" className="hover:text-[#2962FF] transition-colors">Büyük Cüzdan / Balina Radarı</Link></li>
              <li><Link href="/bulten/" className="hover:text-[#2962FF] transition-colors">Piyasa Analiz Bülteni</Link></li>
            </ul>
          </div>

          {/* Programmatic Top Coins (SEO Directory) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider font-mono">Coin Terminali</h4>
            <ul className="space-y-2 text-xs">
              {COINS_DATA.slice(0, 8).map((coin) => (
                <li key={coin.id}>
                  <Link href={`/kripto/${coin.slug}/`} className="hover:text-[#2962FF] transition-colors flex items-center justify-between">
                    <span>{coin.name} ({coin.symbol})</span>
                    <span className="font-mono text-[10px] text-[var(--card-muted)]">${coin.price > 10 ? coin.price.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : coin.price.toFixed(4)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kaç TL Popüler Çeviriler */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider font-mono">Kaç TL? Hızlı Çeviri</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/kac-tl/1-dolar-kac-tl/" className="hover:text-[#2962FF] transition-colors">1 Dolar Kaç TL?</Link></li>
              <li><Link href="/kac-tl/1-usdt-kac-tl/" className="hover:text-[#2962FF] transition-colors">1 USDT Kaç TL?</Link></li>
              <li><Link href="/kac-tl/1-btc-kac-tl/" className="hover:text-[#2962FF] transition-colors">1 Bitcoin Kaç TL?</Link></li>
              <li><Link href="/kac-tl/1-eth-kac-tl/" className="hover:text-[#2962FF] transition-colors">1 Ethereum Kaç TL?</Link></li>
              <li><Link href="/kac-tl/1-sol-kac-tl/" className="hover:text-[#2962FF] transition-colors">1 Solana Kaç TL?</Link></li>
              <li><Link href="/sitemap.xml" className="text-[var(--card-muted)] hover:text-[#2962FF] font-mono text-[11px]">→ Dinamik Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="mt-12 border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            © {new Date().getFullYear()} Kriptonik.com. Tüm hakları saklıdır. Sunulan veriler ve göstergeler yatırım tavsiyesi niteliğinde olmayıp eğitim ve on-chain teşhis amaçlıdır.
          </p>
          <div className="flex items-center gap-4 text-[var(--card-muted)]">
            <span className="hover:text-[var(--foreground)] cursor-pointer">Kullanım Koşulları</span>
            <span>•</span>
            <span className="hover:text-[var(--foreground)] cursor-pointer">Gizlilik Taahhüdü</span>
            <span>•</span>
            <span className="hover:text-[var(--foreground)] cursor-pointer">Risk Bildirimi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
