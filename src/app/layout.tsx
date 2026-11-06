import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kriptonik — Finansal Veri ve Canlı On-Chain Analiz Terminali',
  description:
    'Sıfır gürültü, maksimum sinyal. Canlı likidasyon ısı haritası, borsalar arası fonlama oranları, balina transferleri ve token kilit açılım takvimi.',
  keywords: [
    'kripto likidasyon haritası',
    'canlı fonlama oranları',
    'funding rate',
    'token unlock takvimi',
    'balina hareketleri',
    'açık pozisyon',
    'open interest',
    'kriptonik'
  ],
  authors: [{ name: 'Kriptonik Finansal Mühendislik' }],
  metadataBase: new URL('https://kriptonik.com'),
  openGraph: {
    title: 'Kriptonik — Finansal Veri ve Canlı On-Chain Analiz Terminali',
    description:
      'Türev ve on-chain dünyasının en kritik sinyalleri tek bir şık ve saniyelik güncellenen ekranda.',
    url: 'https://kriptonik.com',
    siteName: 'Kriptonik',
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriptonik Terminal',
    description: 'Canlı Likidasyon Isı Haritası ve Türev Piyasası Göstergeleri.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B0E14" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kriptonik-theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme: light)').matches&&t!=='dark')){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[#2962FF] selection:text-white flex flex-col transition-colors duration-200">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
