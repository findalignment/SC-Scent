import type { MetadataRoute } from 'next';
import { pfProducts } from '@/lib/pf-candle-data';
import { seoPages } from '@/content/seo-pages';
import { loadFragrances } from '@/lib/inventory';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://santacruzscent.com';

function url(path: string, options?: { changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency']; priority?: number }) {
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (options?.changeFrequency ?? 'weekly') as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: options?.priority ?? 0.8,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    url('/', { changeFrequency: 'daily', priority: 1 }),
    url('/in-stock', { changeFrequency: 'hourly', priority: 0.9 }),
    url('/book', { changeFrequency: 'monthly', priority: 0.9 }),
    url('/candles', { changeFrequency: 'weekly', priority: 0.9 }),
    url('/parties', { changeFrequency: 'monthly', priority: 0.8 }),
    url('/privacy', { changeFrequency: 'yearly', priority: 0.3 }),
    url('/guides', { changeFrequency: 'weekly', priority: 0.9 }),
  ];

  const guideRoutes: MetadataRoute.Sitemap = seoPages.map((page) =>
    url(`/guides/${page.slug}`, { changeFrequency: 'monthly', priority: 0.7 })
  );

  const candleRoutes: MetadataRoute.Sitemap = pfProducts.map((product) =>
    url(`/candles/${product.slug}`, { changeFrequency: 'monthly', priority: 0.6 })
  );

  let fragranceRoutes: MetadataRoute.Sitemap = [];
  try {
    const fragrances = await loadFragrances();
    fragranceRoutes = fragrances.map((f) =>
      url(`/fragrances/${f.id}`, { changeFrequency: 'weekly', priority: 0.7 })
    );
  } catch {
    // Inventory may be unavailable (e.g. missing env); omit fragrance URLs
  }

  return [...staticRoutes, ...guideRoutes, ...candleRoutes, ...fragranceRoutes];
}
