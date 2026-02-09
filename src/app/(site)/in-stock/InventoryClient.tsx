'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Fragrance } from '@/lib/schema';
import { searchFragrances } from '@/lib/inventory';
import InventoryGrid from '@/components/InventoryGrid';

interface InventoryClientProps {
  initialFragrances: Fragrance[];
}

/**
 * Client-side wrapper for inventory with search functionality
 * Handles URL search params and filters
 */
export default function InventoryClient({ initialFragrances }: InventoryClientProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [fragrances, setFragrances] = useState(initialFragrances);
  const [query, setQuery] = useState(searchQuery);

  // Filter fragrances when search changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = searchFragrances(initialFragrances, searchQuery);
      setFragrances(filtered);
      setQuery(searchQuery);
    } else {
      setFragrances(initialFragrances);
      setQuery('');
    }
  }, [searchQuery, initialFragrances]);

  return (
    <>
      {/* Search indicator */}
      {query && (
        <div className="mb-8 p-4 bg-amber-600/20 border-l-4 border-amber-600">
          <p className="text-amber-200">
            Searching for: <strong className="text-white">"{query}"</strong>
            {' '}—{' '}
            {fragrances.length === 0 ? (
              <span>No results found</span>
            ) : (
              <span>{fragrances.length} {fragrances.length === 1 ? 'result' : 'results'}</span>
            )}
          </p>
        </div>
      )}

      <div className="mb-8">
        <p className="text-gray-400 font-light">
          {query ? 'Found' : 'Showing'}{' '}
          <strong className="text-amber-400">{fragrances.length}</strong>{' '}
          {fragrances.length === 1 ? 'fragrance' : 'fragrances'}
        </p>
      </div>

      {fragrances.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-white mb-2">
            {query ? 'No Results Found' : 'No Inventory Currently Listed'}
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            {query ? (
              <>
                Try a different search term or{' '}
                <a href="/in-stock" className="text-amber-400 hover:text-amber-300 underline">
                  browse all fragrances
                </a>
              </>
            ) : (
              'Our inventory is being updated. Contact us to check current availability.'
            )}
          </p>
          {!query && (
            <a
              href="/book"
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg transition-all"
            >
              Get in Touch
            </a>
          )}
        </div>
      ) : (
        <InventoryGrid fragrances={fragrances} />
      )}
    </>
  );
}
