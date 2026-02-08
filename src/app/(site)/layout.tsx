import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-lg border-b border-amber-900/30 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-serif font-light text-white tracking-wide group-hover:text-amber-300 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/in-stock"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors"
              >
                Fragrances
              </Link>
              <Link
                href="/candles"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors"
              >
                Candles
              </Link>
              <Link
                href="/parties"
                className="text-gray-300 hover:text-amber-400 font-light tracking-wide text-sm uppercase transition-colors"
              >
                Events
              </Link>
              <Link
                href="/book"
                className="px-6 py-2 bg-amber-600 text-white font-medium text-sm uppercase tracking-wide hover:bg-amber-700 transition-colors shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-16 border-t border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌊</span>
                <span className="text-xl font-serif font-light tracking-wide">{SITE_CONFIG.name}</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Curated luxury fragrance decants and artisan candles, bringing the world's finest scents to Santa Cruz.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-medium mb-6 text-amber-400 uppercase tracking-wider text-sm">Navigate</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/in-stock" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link href="/candles" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                    Candles
                  </Link>
                </li>
                <li>
                  <Link href="/parties" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-medium mb-6 text-amber-400 uppercase tracking-wider text-sm">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors font-light"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors font-light"
                  >
                    @santacruzscent
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 font-light text-sm">© {new Date().getFullYear()} {SITE_CONFIG.name} • Santa Cruz, CA</p>
          </div>
        </div>
      </footer>
    </>
  );
}
