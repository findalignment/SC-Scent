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
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              In Stock
            </h1>
            <p className="text-lg text-gray-600">
              Browse our current collection of premium fragrances in travel-friendly sizes.
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
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  Failed to Load Inventory
                </h3>
                <p className="text-red-700 mb-6">
                  {error}
                </p>
                <div className="bg-white rounded-lg p-4 text-left text-sm">
                  <p className="text-gray-700 mb-2 font-semibold">Common issues:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Check your <code className="bg-gray-100 px-2 py-0.5 rounded">.env.local</code> file has correct credentials</li>
                    <li>Verify the Google Sheet is publicly viewable</li>
                    <li>Ensure the Google Sheets API is enabled</li>
                    <li>Confirm the sheet tab name matches <code className="bg-gray-100 px-2 py-0.5 rounded">GOOGLE_SHEET_TAB</code></li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/book"
                    className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
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
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No Fragrances Available
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Check back soon or contact us for availability.
                  </p>
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
