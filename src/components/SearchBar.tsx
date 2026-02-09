'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Search bar component for header
 * Allows quick fragrance search from anywhere on site
 */
export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/in-stock?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-amber-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={isOpen ? "Close search" : "Open search"}
        aria-expanded={isOpen}
        aria-controls="search-dropdown"
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
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>

      {/* Search Input (Desktop) */}
      {isOpen && (
        <div 
          id="search-dropdown"
          className="absolute right-0 top-full mt-2 w-80 bg-[#1a2f4a] border border-amber-900/30 shadow-2xl p-4 z-50"
          role="search"
        >
          <form onSubmit={handleSearch}>
            <label htmlFor="fragrance-search" className="sr-only">
              Search fragrances by name, brand, or notes
            </label>
            <div className="relative">
              <input
                id="fragrance-search"
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fragrances..."
                className="w-full px-4 py-3 bg-[#0a1628] text-white placeholder-gray-500 border border-amber-900/30 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/50"
                aria-describedby="search-help"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Submit search"
              >
                Search
              </button>
            </div>
            <p id="search-help" className="text-xs text-gray-500 mt-2">
              Search by name, brand, or notes
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
