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
    <html lang="tr" className="dark">
      <head>
        <meta name="theme-color" content="#0B0E14" />
      </head>
      <body className="min-h-screen bg-[#0B0E14] text-[#F0F3F8] antialiased selection:bg-[#2962FF] selection:text-white flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
