import Link from 'next/link';

interface CtaBlockProps {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  heading?: string;
  description?: string;
}

export default function CtaBlock({ primary, secondary, heading, description }: CtaBlockProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] border-t border-b border-amber-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-gray-300 text-lg font-light mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primary.href}
              className="px-10 py-4 bg-amber-600 text-white font-medium tracking-wide uppercase text-sm shadow-2xl hover:bg-amber-700 transition-all duration-300"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="px-10 py-4 bg-transparent text-white font-medium tracking-wide uppercase text-sm border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
