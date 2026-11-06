import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import MobileBottomNav from '../components/MobileBottomNav';

export const metadata: Metadata = {
  title: {
    default: 'Kriptonik — Canlı Kripto Veri, Likidasyon Haritası ve On-Chain Analiz Terminali',
    template: '%s | Kriptonik'
  },
  description:
    'Sıfır gürültü, maksimum sinyal. Canlı likidasyon ısı haritası, borsalar arası fonlama oranları (funding rate), kurumsal Spot ETF net akışları, balina hareketleri, borsa komisyon ve kaldıraç hesaplayıcı.',
  keywords: [
    'kripto likidasyon haritası',
    'liquidation heatmap',
    'canlı kripto fiyatları',
    'bitcoin likidasyon',
    'coinglass türkçe',
    'fonlama oranları',
    'funding rate arbitraj',
    'spot etf girişleri',
    'kripto spot etf verileri',
    'kripto balina takibi',
    'token kilit açılımı',
    'kaldıraç hesaplama',
    'borsa komisyon hesaplama',
    'dolar kaç tl',
    'usdt kaç tl',
    'açık pozisyon open interest',
    'kriptonik terminal'
  ],
  authors: [{ name: 'Kriptonik Finansal Mühendislik', url: 'https://kriptonik.com' }],
  creator: 'Kriptonik',
  publisher: 'Kriptonik',
  metadataBase: new URL('https://kriptonik.com'),
  alternates: {
    canonical: 'https://kriptonik.com/',
    languages: {
      'tr-TR': 'https://kriptonik.com/'
    }
  },
  openGraph: {
    title: 'Kriptonik — Canlı Kripto Veri ve Türev Analiz Terminali',
    description:
      'Coinglass ve CryptoQuant verilerini basitleştiren Türkiye’nin en gelişmiş canlı kripto türev, likidasyon ve on-chain istihbarat platformu.',
    url: 'https://kriptonik.com',
    siteName: 'Kriptonik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://kriptonik.com/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Kriptonik Terminal'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriptonik — Finansal Kripto Analiz Terminali',
    description: 'Canlı Likidasyon Isı Haritası, Spot ETF Girişleri, Fonlama Oranları ve Açık Pozisyon Radarı.',
    images: ['https://kriptonik.com/icon.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://kriptonik.com/#website',
        url: 'https://kriptonik.com',
        name: 'Kriptonik',
        description: 'Canlı Kripto Veri, Likidasyon Haritası ve On-Chain Türev İstihbarat Terminali',
        publisher: {
          '@id': 'https://kriptonik.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://kriptonik.com/kripto/{search_term_string}/',
          'query-input': 'required name=search_term_string'
        },
        inLanguage: 'tr-TR'
      },
      {
        '@type': 'Organization',
        '@id': 'https://kriptonik.com/#organization',
        name: 'Kriptonik',
        url: 'https://kriptonik.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kriptonik.com/icon.svg'
        },
        sameAs: [
          'https://twitter.com/kriptonik'
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://kriptonik.com/#service',
        name: 'Kriptonik Finansal Veri Terminali',
        url: 'https://kriptonik.com',
        serviceType: 'Cryptocurrency Derivative Analytics & On-Chain Intelligence',
        provider: {
          '@id': 'https://kriptonik.com/#organization'
        },
        description: 'Canlı likidasyon havuzları, borsalar arası fonlama arbitrajı, açık pozisyon ve spot ETF sermaye akışları takip servisi.'
      }
    ]
  };

  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2962FF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kriptonik-theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme: light)').matches&&t!=='dark')){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[#2962FF] selection:text-white flex flex-col transition-colors duration-200">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 pb-20 md:pb-6">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <MobileBottomNav />
      </body>
    </html>
  );
}
