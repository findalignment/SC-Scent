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
    default: "bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50",
    gradient: "bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-white",
    minimal: "bg-gray-50 border-t border-b border-gray-200",
  };

  const buttonPrimary = variant === 'gradient' 
    ? "bg-white text-cyan-600 hover:bg-cyan-50 font-bold"
    : "bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-xl font-bold";

  const buttonSecondary = variant === 'gradient'
    ? "bg-transparent border-2 border-white text-white hover:bg-white/10"
    : "bg-white border-2 border-cyan-300 text-gray-900 hover:border-cyan-400";

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
                className={`px-8 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 ${buttonPrimary}`}
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`px-8 py-4 font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-200 ${buttonSecondary}`}
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
