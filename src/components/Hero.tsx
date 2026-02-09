import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Overlay - Replace with actual Santa Cruz beach image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/80 to-[#0a1628]"></div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Left - Square Logo/Image - Now Responsive */}
            <div className="mx-auto md:mx-0">
              <div className="w-full max-w-[280px] aspect-square sm:w-[200px] md:w-[280px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center relative" role="img" aria-label="Santa Cruz Scent logo placeholder">
                {/* Fallback text - replace with actual logo image */}
                <div className="flex items-center justify-center text-white/40 font-serif text-6xl" aria-hidden="true">
                  SC
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20 shadow-2xl mb-8">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Santa Cruz • Luxury Decants</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light text-white mb-4 sm:mb-6 leading-tight">
                Discover Your
                <span className="block font-normal text-amber-300 mt-1 sm:mt-2">
                  Signature Scent
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light">
                Curated luxury fragrances in travel-ready sizes.
                <br className="hidden sm:block" />
                <span className="text-white"> Experience the world's finest perfumes without the commitment.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-stretch sm:items-center">
                <Link
                  href="/in-stock"
                  className="w-full sm:w-auto text-center px-8 sm:px-10 py-3 sm:py-4 bg-amber-600 text-white font-medium tracking-wide uppercase text-sm shadow-2xl hover:bg-amber-700 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                  aria-label="Explore our fragrance collection"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/book"
                  className="w-full sm:w-auto text-center px-8 sm:px-10 py-3 sm:py-4 bg-transparent text-white font-medium tracking-wide uppercase text-sm border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                  aria-label="Contact us for consultation or questions"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="font-medium text-white mb-2 text-lg">TSA Compliant</h3>
              <p className="text-sm text-gray-400 font-light">Perfect for travel</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="font-medium text-white mb-2 text-lg">Santa Cruz</h3>
              <p className="text-sm text-gray-400 font-light">Locally curated</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="font-medium text-white mb-2 text-lg">Authenticity</h3>
              <p className="text-sm text-gray-400 font-light">100% genuine</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Scroll down indicator"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
