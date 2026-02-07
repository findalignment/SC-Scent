import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/images/hero/texture.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Flight-Ready Decants Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Premium fragrance decants in travel-friendly sizes.
            <br />
            <span className="font-semibold">Try luxury scents without the luxury price tag.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/in-stock"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Browse Collection
            </Link>
            <Link
              href="/book"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-gray-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-2">✈️</div>
              <h3 className="font-semibold text-gray-900 mb-1">TSA Approved</h3>
              <p className="text-sm text-gray-600">Flight-ready sizes for travelers</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Authentic</h3>
              <p className="text-sm text-gray-600">Genuine luxury fragrances</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-900 mb-1">Affordable</h3>
              <p className="text-sm text-gray-600">Sample luxury scents affordably</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
