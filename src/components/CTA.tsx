import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'minimal';
}

export default function CTA({
  title = "Ready to find your perfect scent?",
  description = "Explore our collection of premium fragrance decants, all flight-ready and affordable.",
  primaryButton = { text: "Browse Collection", href: "/in-stock" },
  secondaryButton = { text: "Book Consultation", href: "/book" },
  variant = 'default',
}: CTAProps) {
  const variants = {
    default: "bg-gray-100",
    gradient: "bg-slate-800 text-white border-t-4 border-teal-600",
    minimal: "bg-gray-50 border-t-4 border-gray-300",
  };

  const buttonPrimary = variant === 'gradient' 
    ? "bg-white text-slate-900 hover:bg-gray-100 font-bold shadow-lg"
    : "bg-teal-700 text-white hover:shadow-xl hover:bg-teal-800 font-bold shadow-lg";

  const buttonSecondary = variant === 'gradient'
    ? "bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md"
    : "bg-white border-2 border-teal-600 text-gray-900 hover:border-teal-700 shadow-md";

  return (
    <section className={`py-20 ${variants[variant]}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            variant === 'gradient' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${
            variant === 'gradient' ? 'text-white/90' : 'text-gray-600'
          }`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className={`px-8 py-4 font-semibold hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 ${buttonPrimary}`}
                aria-label={primaryButton.text}
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`px-8 py-4 font-semibold hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 ${buttonSecondary}`}
                aria-label={secondaryButton.text}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
