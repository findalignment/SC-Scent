import { loadFragrances } from '@/lib/inventory';
import InventoryGrid from '@/components/InventoryGrid';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              In Stock
            </h1>
            <p className="text-lg text-cyan-50">
              Current collection of premium fragrances in travel-ready sizes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Error State */}
          {error ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center shadow-xl">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  Unable to Load Inventory
                </h3>
                <p className="text-red-700 mb-6 text-lg">
                  {error}
                </p>
                <div className="bg-white rounded-xl p-6 text-left mb-6">
                  <p className="text-gray-700 mb-3 font-semibold">Possible issues:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Google Sheet may not be set to public (Anyone with link can view)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      API key may be incorrect or restricted
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Google Sheets API not enabled in Google Cloud
                    </li>
                  </ul>
                </div>
                <a
                  href="/book"
                  className="inline-block px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 shadow-lg hover:shadow-xl transition-all"
                >
                  Contact for Availability
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <strong>{fragrances.length}</strong> fragrances
                </p>
              </div>

              {fragrances.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No Inventory Currently Listed
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Our inventory is being updated. Contact us to check current availability.
                  </p>
                  <a
                    href="/book"
                    className="inline-block px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 shadow-lg transition-all"
                  >
                    Get in Touch
                  </a>
                </div>
              ) : (
                <InventoryGrid fragrances={fragrances} />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
