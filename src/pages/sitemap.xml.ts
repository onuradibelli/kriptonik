import type { APIRoute } from 'astro';
import { guidesData } from '../data/guides';
import { termsData } from '../data/terms';

export const GET: APIRoute = async () => {
	const siteUrl = 'https://kriptonik.com';

	const staticPages = [
		'',
		'/araclar',
		'/araclar/adres-ag-eslestirici',
		'/araclar/takilan-islem',
		'/araclar/yanlis-aga-gonderdim',
		'/araclar/kripto-donusturucu',
		'/araclar/maliyet-karsilastirici',
		'/araclar/kar-zarar-hesaplama',
		'/araclar/kaldirac-likidasyon',
		'/araclar/gas-ucret-takip',
		'/araclar/depeg-monitoru',
		'/araclar/korku-acgozluluk-endeksi',
		'/araclar/birim-cevirici',
		'/araclar/bitcoin-halving',
		'/araclar/staking-getiri',
		'/araclar/madencilik-karlilik',
		'/araclar/cuzdan-guvenlik-kontrolu',
		'/araclar/dca-simulator',
		'/rehber',
		'/sozluk',
		'/hakkimizda',
		'/metodoloji',
		'/durum',
		'/gizlilik',
		'/kullanim-sartlari',
		'/risk-uyarisi',
		'/affiliate-aciklamasi'
	];

	const guideUrls = guidesData.map(g => `/rehber/${g.slug}`);
	const termUrls = termsData.map(t => `/sozluk/${t.slug}`);

	const allUrls = [...staticPages, ...guideUrls, ...termUrls];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${siteUrl}${url}</loc>
    <changefreq>${url.startsWith('/araclar') ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/araclar') ? '0.9' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
