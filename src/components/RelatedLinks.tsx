import Link from 'next/link';
import { getPageBySlug } from '@/content/seo-pages';

interface RelatedLinksProps {
  slugs: string[];
}

export default function RelatedLinks({ slugs }: RelatedLinksProps) {
  const pages = slugs
    .map(slug => getPageBySlug(slug))
    .filter(Boolean)
    .slice(0, 6);

  if (pages.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a1628] to-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-8 text-center">
            Related Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <Link
                key={page!.slug}
                href={`/seo/${page!.slug}`}
                className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">
                  {page!.title}
                </h3>
                <p className="text-gray-400 text-sm font-light line-clamp-2">
                  {page!.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
