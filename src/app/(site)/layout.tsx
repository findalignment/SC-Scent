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
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cyan-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-teal-500 transition-all">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/in-stock"
                className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                In Stock
              </Link>
              <Link
                href="/parties"
                className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                Parties
              </Link>
              <Link
                href="/book"
                className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-200"
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
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌊</span>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{SITE_CONFIG.name}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium fragrance decants in Santa Cruz
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/in-stock" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    In Stock
                  </Link>
                </li>
                <li>
                  <Link href="/parties" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Parties
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-cyan-400">Get in Touch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    @santacruzscent
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name} • Santa Cruz, CA</p>
          </div>
        </div>
      </footer>
    </>
  );
}
