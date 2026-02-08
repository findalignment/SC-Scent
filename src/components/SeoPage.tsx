import type { SeoPage as SeoPageType } from '@/content/seo-pages';
import CtaBlock from './CtaBlock';
import SeoFaq from './SeoFaq';
import RelatedLinks from './RelatedLinks';

interface SeoPageProps {
  page: SeoPageType;
}

export default function SeoPage({ page }: SeoPageProps) {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {page.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-6">
                  {section.heading}
                </h2>
                <div className="text-gray-300 text-lg font-light leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First CTA */}
      <CtaBlock
        primary={page.primaryCta}
        secondary={page.secondaryCta}
        heading="Ready to Discover Your Signature Scent?"
        description="Book an appointment to explore fragrances in a guided, pressure-free environment."
      />

      {/* FAQ Section */}
      {page.faq && page.faq.length > 0 && <SeoFaq faqs={page.faq} />}

      {/* Related Links */}
      {page.relatedSlugs && page.relatedSlugs.length > 0 && (
        <RelatedLinks slugs={page.relatedSlugs} />
      )}

      {/* Final CTA */}
      <CtaBlock
        primary={page.primaryCta}
        secondary={page.secondaryCta}
      />
    </div>
  );
}
