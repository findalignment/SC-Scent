import { Suspense } from 'react';
import { loadFragrances } from '@/lib/inventory';
import InventoryClient from './InventoryClient';
import InventorySkeletons from '@/components/InventorySkeletons';
import type { Fragrance } from '@/lib/schema';

export const metadata = {
  title: 'In Stock - Santa Cruz Scent',
  description: 'Browse our collection of premium fragrance decants.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function InStockPage() {
  let fragrances: Fragrance[] = [];
  let error = "";
  
  try {
    fragrances = await loadFragrances();
  } catch (e: any) {
    error = e.message ?? "Inventory fetch failed";
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
              Our Collection
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Curated luxury fragrances in travel-ready sizes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Error State */}
          {error ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-600 p-8 text-center shadow-xl">
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  Unable to Load Inventory
                </h3>
                <p className="text-red-800 mb-6 text-lg font-medium">
                  {error}
                </p>
                <div className="bg-white p-6 text-left mb-6 shadow-md">
                  <p className="text-gray-900 mb-3 font-bold">Possible issues:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      Google Sheet may not be set to public (Anyone with link can view)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      API key may be incorrect or restricted
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      Google Sheets API not enabled in Google Cloud
                    </li>
                  </ul>
                </div>
                <a
                  href="/book"
                  className="inline-block px-8 py-3 bg-amber-600 text-white font-bold shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all"
                >
                  Contact for Availability
                </a>
              </div>
            </div>
          ) : (
            <Suspense fallback={<InventorySkeletons count={8} />}>
              <InventoryClient initialFragrances={fragrances} />
            </Suspense>
          )}
        </div>
      </section>
    </div>
  );
}
