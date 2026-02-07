import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white_0%,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Santa Cruz • Travel-Ready Decants</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Discover Your
            <span className="block text-cyan-50">
              Signature Scent
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-cyan-50 mb-8 leading-relaxed">
            Premium fragrance decants in TSA-approved sizes.
            <br />
            <span className="font-semibold text-white">Sample luxury, travel light.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/in-stock"
              className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Browse Scents
            </Link>
            <Link
              href="/book"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-200 border-2 border-white/30"
            >
              Get in Touch
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">✈️</div>
              <h3 className="font-semibold text-gray-900 mb-1">TSA Approved</h3>
              <p className="text-sm text-gray-600">Travel-ready sizes</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🌊</div>
              <h3 className="font-semibold text-gray-900 mb-1">Santa Cruz Based</h3>
              <p className="text-sm text-gray-600">Local, personal service</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Authentic</h3>
              <p className="text-sm text-gray-600">Genuine luxury scents</p>
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
