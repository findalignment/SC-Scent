import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import SearchBar from '@/components/SearchBar';
import BackToTop from '@/components/BackToTop';
import SkipToContent from '@/components/SkipToContent';
import MobileMenu from '@/components/MobileMenu';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip to Content - Accessibility */}
      <SkipToContent />

      {/* Navigation - Already sticky! */}
      <nav className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-lg border-b border-amber-900/30 shadow-2xl" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400" aria-label="Santa Cruz Scent home page">
              <span className="text-xl font-serif font-light text-white tracking-wide group-hover:text-amber-300 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/in-stock"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Decants
              </Link>
              <Link
                href="/candles"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Home Fragrance
              </Link>
              <Link
                href="/parties"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Events
              </Link>
              <Link
                href="/book"
                className="px-6 py-2 bg-amber-600 text-white font-medium text-sm uppercase tracking-wide hover:bg-amber-700 transition-colors shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              >
                Contact
              </Link>
              
              {/* Search Bar */}
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">{children}</main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-12 sm:py-16 border-t border-amber-900/20" role="contentinfo" aria-label="Site footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl font-serif font-light tracking-wide">{SITE_CONFIG.name}</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Curated luxury fragrance decants and artisan candles, bringing the world's finest scents to Santa Cruz.
              </p>
            </div>

            {/* Links */}
            <nav aria-labelledby="footer-navigation">
              <h3 id="footer-navigation" className="font-medium mb-6 text-amber-400 uppercase tracking-wider text-sm">Navigate</h3>
              <ul className="space-y-3 text-sm" role="list">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/in-stock" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Decants
                  </Link>
                </li>
                <li>
                  <Link href="/candles" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Home Fragrance
                  </Link>
                </li>
                <li>
                  <Link href="/parties" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    Privacy
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="font-medium mb-6 text-amber-400 uppercase tracking-wider text-sm">Connect</h3>
              <ul className="space-y-3 text-sm" role="list">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label={`Send email to ${SITE_CONFIG.email}`}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label="Visit our Instagram page (opens in new tab)"
                  >
                    @santacruzscent
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 font-light text-xs sm:text-sm">© {new Date().getFullYear()} {SITE_CONFIG.name} • Santa Cruz, CA</p>
          </div>
        </div>
      </footer>
    </>
  );
}
