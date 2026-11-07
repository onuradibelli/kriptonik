import { MetadataRoute } from 'next';
import { COINS_DATA, getKacTlItems } from '../lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kriptonik.com';
  const now = new Date();

  // 1. Static Hub & Legal Pages
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'always' },
    { path: 'market-isi-semasi/', priority: 0.95, changeFrequency: 'always' },
    { path: 'likidasyon/', priority: 0.95, changeFrequency: 'always' },
    { path: 'fonlama-oranlari/', priority: 0.9, changeFrequency: 'hourly' },
    { path: 'acik-pozisyon/', priority: 0.9, changeFrequency: 'hourly' },
    { path: 'etf/', priority: 0.85, changeFrequency: 'hourly' },
    { path: 'kac-tl/', priority: 0.85, changeFrequency: 'always' },
    { path: 'balina-takibi/', priority: 0.85, changeFrequency: 'always' },
    { path: 'token-kilit-acilimlari/', priority: 0.8, changeFrequency: 'daily' },
    { path: 'hesaplayici/', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'bulten/', priority: 0.8, changeFrequency: 'daily' },
    { path: 'hakkimizda/', priority: 0.5, changeFrequency: 'monthly' },
    { path: 'iletisim/', priority: 0.5, changeFrequency: 'monthly' },
    { path: 'kullanim-kosullari/', priority: 0.4, changeFrequency: 'monthly' },
    { path: 'gizlilik/', priority: 0.4, changeFrequency: 'monthly' },
    { path: 'risk-bildirimi/', priority: 0.4, changeFrequency: 'monthly' },
    { path: 'cerez-politikasi/', priority: 0.4, changeFrequency: 'monthly' }
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}/${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));

  // 2. Dynamic Coin Terminal Pages (High-value indexable assets)
  COINS_DATA.forEach((coin) => {
    // /kripto/[slug]/
    sitemapEntries.push({
      url: `${baseUrl}/kripto/${coin.slug}/`,
      lastModified: now,
      changeFrequency: 'always',
      priority: 0.85
    });

    // /token-kilit-acilimlari/[slug]/ (only for verified tokens with tokenUnlock)
    if (coin.tokenUnlock !== undefined) {
      sitemapEntries.push({
        url: `${baseUrl}/token-kilit-acilimlari/${coin.slug}/`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.65
      });
    }
  });

  // 3. Dynamic Kaç TL Pages
  const kacTlItems = getKacTlItems();
  kacTlItems.forEach((item) => {
    sitemapEntries.push({
      url: `${baseUrl}/kac-tl/${item.slug}/`,
      lastModified: now,
      changeFrequency: 'always',
      priority: 0.8
    });
  });

  return sitemapEntries;
}
