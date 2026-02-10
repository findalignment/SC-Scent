'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a1628] border-l border-amber-900/30 shadow-2xl z-50 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-amber-900/30">
                <span className="text-lg font-serif font-light text-white tracking-wide">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b border-amber-900/30">
                <SearchBar />
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4" aria-label="Mobile navigation">
                <ul className="space-y-1" role="list">
                  <li>
                    <Link
                      href="/in-stock"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-amber-600/20 transition-colors text-sm uppercase tracking-wide font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Fragrances
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/candles"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-amber-600/20 transition-colors text-sm uppercase tracking-wide font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Home Fragrance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/parties"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-amber-600/20 transition-colors text-sm uppercase tracking-wide font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/book"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors text-sm uppercase tracking-wide font-medium shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 rounded mt-4"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Footer Links */}
              <div className="p-4 border-t border-amber-900/30">
                <ul className="space-y-2 text-sm" role="list">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/santacruzscent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-400 hover:text-amber-400 transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      @santacruzscent
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
