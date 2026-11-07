import React from 'react';
import { Metadata } from 'next';
import BulletinClient from './BulletinClient';

export const metadata: Metadata = {
  title: 'Kripto Piyasa Analiz Bülteni & Günlük Raporlar',
  description: 'Günlük kripto türev tasfiyeleri, kurumsal spot ETF akışları, borsa fonlama oranları ve zincir üstü piyasa nabzı bülteni.',
  alternates: {
    canonical: 'https://kriptonik.com/bulten/'
  }
};

export default function BulletinPage() {
  return <BulletinClient />;
}
