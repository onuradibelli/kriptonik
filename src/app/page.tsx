import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Kriptonik — Canlı Kripto ve Likidasyon Terminali',
  description:
    'Sıfır gürültü, maksimum sinyal. Canlı likidasyon ısı haritası, borsalar arası fonlama oranları (funding rate), kurumsal Spot ETF akışları, balina hareketleri ve borsa arbitraj hesaplayıcı.',
  alternates: {
    canonical: 'https://kriptonik.com/'
  }
};

export default function HomePage() {
  return <HomeClient />;
}
