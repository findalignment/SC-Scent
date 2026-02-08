import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoPages, getPageBySlug } from '@/content/seo-pages';
import SeoPageComponent from '@/components/SeoPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all SEO pages
export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  const canonicalUrl = `https://santacruzscent.com/seo/${slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: 'Santa Cruz Scent',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Generate JSON-LD for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Santa Cruz Scent',
    description: 'Appointment-only fragrance consultations and niche perfume decants in Santa Cruz, California.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    url: 'https://santacruzscent.com',
    priceRange: '$$',
  };

  // Generate JSON-LD for FAQ if exists
  const faqSchema = page.faq && page.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Render Page */}
      <SeoPageComponent page={page} />
    </>
  );
}
