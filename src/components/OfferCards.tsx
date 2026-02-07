import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: 'Flight-Ready Decants',
    description: 'TSA-approved travel sizes perfect for your journey. Take luxury with you anywhere.',
    icon: '✈️',
    link: '/in-stock',
    linkText: 'Shop Decants',
    features: ['3.4oz or less', 'Leak-proof atomizers', 'Perfect for carry-on'],
  },
  {
    id: 3,
    title: 'P.F. Candle Co.',
    description: 'Hand-poured artisan candles from Los Angeles. Transform your space.',
    icon: '🕯️',
    link: '/pf-candle',
    linkText: 'Explore Candles',
    features: ['Hand-poured in LA', 'Natural soy wax', 'Signature scents'],
  },
  {
    id: 4,
    title: 'Scent Consultation',
    description: 'Not sure where to start? Book a personalized consultation to find your signature scent.',
    icon: '🔍',
    link: '/book',
    linkText: 'Book Now',
    features: ['Expert guidance', 'Personalized picks', 'Virtual or in-person'],
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From travel-ready decants to artisan candles, 
            we have everything you need to elevate your fragrance game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {offer.description}
              </p>

              <ul className="mb-6 space-y-2">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.link}
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold group"
              >
                {offer.linkText}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
