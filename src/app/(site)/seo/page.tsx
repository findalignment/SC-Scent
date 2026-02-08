import { Metadata } from 'next';
import Link from 'next/link';
import { seoPages, getAllTags } from '@/content/seo-pages';

export const metadata: Metadata = {
  title: 'Fragrance Discovery & Consultation in Santa Cruz | Santa Cruz Scent',
  description: 'Explore appointment-only fragrance consultations, niche perfume decants, and scent discovery sessions in Santa Cruz. Try before you buy with expert guidance.',
  alternates: {
    canonical: 'https://santacruzscent.com/seo',
  },
};

export default function SeoIndexPage() {
  const tags = getAllTags();
  const groupedPages: Record<string, typeof seoPages> = {};

  // Group pages by primary tag
  tags.forEach((tag) => {
    groupedPages[tag] = seoPages.filter((page) => page.tags.includes(tag));
  });

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
              Fragrance Discovery in Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Appointment-only consultations, niche decants, and guided scent exploration. 
              Learn about fragrance, discover what works for you, and try before you buy.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">
              Popular Topics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoPages.slice(0, 9).map((page) => (
                <Link
                  key={page.slug}
                  href={`/seo/${page.slug}`}
                  className="block p-8 bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] border border-amber-900/20 hover:shadow-2xl transition-all duration-300 group"
                >
                  <h3 className="text-xl font-serif font-light text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light line-clamp-3 leading-relaxed">
                    {page.intro}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Pages by Category */}
      <section className="py-16 bg-gradient-to-b from-[#0a1628] to-[#1a2f4a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {tags.map((tag) => (
              <div key={tag}>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-8 border-b border-amber-900/30 pb-4">
                  {tag}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {groupedPages[tag].map((page) => (
                    <Link
                      key={page.slug}
                      href={`/seo/${page.slug}`}
                      className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light line-clamp-2">
                        {page.intro}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] border-t border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Ready to Discover Your Signature Scent?
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8 leading-relaxed">
              Book an appointment to explore fragrances in a guided, pressure-free environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="px-10 py-4 bg-amber-600 text-white font-medium tracking-wide uppercase text-sm shadow-2xl hover:bg-amber-700 transition-all duration-300"
              >
                Book Your Appointment
              </Link>
              <Link
                href="/in-stock"
                className="px-10 py-4 bg-transparent text-white font-medium tracking-wide uppercase text-sm border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                View Current Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </div>
  );
}
