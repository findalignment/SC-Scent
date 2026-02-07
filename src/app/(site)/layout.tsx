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
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🌸</span>
              <span className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/in-stock"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                In Stock
              </Link>
              <Link
                href="/book"
                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/in-stock" className="text-gray-400 hover:text-white transition-colors">
                    In Stock
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
