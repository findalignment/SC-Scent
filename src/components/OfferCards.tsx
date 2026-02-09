import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: 'Flight-Ready Decants',
    description: 'TSA-approved travel sizes perfect for your journey. Take luxury with you anywhere.',
    icon: '✈️',
    link: '/in-stock',
    linkText: 'Shop Decants',
    features: ['3.4oz or less', 'Travel atomizers', 'Perfect for carry-on'],
  },
  {
    id: 3,
    title: 'P.F. Candle Co.',
    description: 'Hand-poured artisan candles from Los Angeles. Transform your space.',
    icon: '🕯️',
    link: '/candles',
    linkText: 'Explore Candles',
    features: ['Hand-poured in LA', 'Natural soy wax', 'Signature scents'],
  },
  {
    id: 4,
    title: 'In-Person Consultation',
    description: 'Not sure where to start? Book an in-person consultation in Santa Cruz to find your signature scent.',
    icon: '🔍',
    link: '/book',
    linkText: 'Get in Touch',
    features: ['Expert guidance', 'Personalized picks', 'Santa Cruz based'],
  },
  {
    id: 5,
    title: 'Party & Event Sampling',
    description: 'Hosting an event? We offer fragrance sampling experiences for parties and gatherings.',
    icon: '🎉',
    link: '/parties',
    linkText: 'Learn More',
    features: ['Group experiences', 'Custom packages', 'Interactive & fun'],
  },
  {
    id: 6,
    title: 'Custom Orders',
    description: "Don't see what you're looking for? We take special requests for hard-to-find scents.",
    icon: '💎',
    link: '/book',
    linkText: 'Request Scent',
    features: ['Special requests', 'Rare fragrances', 'Custom sizes'],
  },
];

export default function OfferCards() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" aria-labelledby="offers-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 id="offers-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            From travel-ready decants to artisan candles, discover premium scents in Santa Cruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border-l-4 border-teal-600 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3" id={`offer-${offer.id}`}>
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {offer.description}
              </p>

              <ul className="mb-6 space-y-2">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.link}
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                aria-label={`${offer.linkText} for ${offer.title}`}
                aria-describedby={`offer-${offer.id}`}
              >
                {offer.linkText}
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
