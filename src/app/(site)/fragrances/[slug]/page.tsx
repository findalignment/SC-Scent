'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Fragrance } from '@/lib/schema';
import { loadFragrances } from '@/lib/inventory';

type Tab = 'details' | 'notes' | 'sizes';

export default function FragranceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [fragrances, setFragrances] = useState<Fragrance[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('details');

  // Fetch fragrance data on mount
  use(
    (async () => {
      const data = await loadFragrances();
      setFragrances(data);
      setLoading(false);
    })()
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-white text-xl font-light">Loading...</div>
      </div>
    );
  }

  const fragrance = fragrances.find(f => f.id === slug);

  if (!fragrance) {
    notFound();
  }

  const availableSizes = Object.entries(fragrance.sizes)
    .filter(([_, qty]) => qty > 0)
    .map(([size]) => size);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'details', label: 'Details' },
    { id: 'notes', label: 'Fragrance Notes' },
    { id: 'sizes', label: 'Available Sizes' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/in-stock" className="text-gray-400 hover:text-amber-400 text-sm font-light">
                ← Back to Collection
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] overflow-hidden border border-amber-900/20">
                {fragrance.image ? (
                  <img
                    src={fragrance.image}
                    alt={`${fragrance.brand} ${fragrance.name}`}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 font-serif text-6xl">
                    SC
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <div className="inline-block bg-amber-600/20 backdrop-blur-md px-4 py-2 border border-amber-600/40 mb-4 w-fit">
                  <span className="text-xs font-medium text-amber-400 tracking-wide uppercase">{fragrance.brand}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
                  {fragrance.name}
                </h1>

                {fragrance.concentration && (
                  <p className="text-lg text-gray-400 font-light mb-6">
                    {fragrance.concentration}
                  </p>
                )}

                {fragrance.description && (
                  <p className="text-gray-300 leading-relaxed mb-8 font-light">
                    {fragrance.description}
                  </p>
                )}

                {/* Quick Notes Preview */}
                {(fragrance.notes.top.length > 0 || fragrance.notes.middle.length > 0 || fragrance.notes.base.length > 0) && (
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Key Notes:</p>
                    <div className="flex flex-wrap gap-2">
                      {[...fragrance.notes.top, ...fragrance.notes.middle, ...fragrance.notes.base].slice(0, 5).map((note, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 text-gray-300 text-sm font-light border border-white/10"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Availability Badge */}
                <div className="mb-8">
                  {fragrance.inStock ? (
                    <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-400 text-sm font-medium uppercase tracking-wide border border-amber-600/40">
                      In Stock
                    </span>
                  ) : (
                    <span className="inline-block px-4 py-2 bg-gray-800/20 text-gray-400 text-sm font-medium uppercase tracking-wide border border-gray-600/40">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div>
                  <Link
                    href="/book"
                    className="inline-block px-10 py-4 bg-amber-600 text-white font-medium tracking-wide uppercase text-sm shadow-2xl hover:bg-amber-700 transition-all duration-300"
                  >
                    Contact to Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-all ${
                    activeTab === tab.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] p-8 md:p-12 border border-amber-900/20">
              {activeTab === 'details' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-6">About This Fragrance</h3>
                  
                  {fragrance.description ? (
                    <p className="text-lg font-light leading-relaxed mb-8">{fragrance.description}</p>
                  ) : (
                    <p className="text-lg font-light leading-relaxed mb-8 text-gray-400">
                      Experience {fragrance.brand} {fragrance.name}, a carefully curated luxury fragrance available in travel-ready decant sizes.
                    </p>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 border border-white/10">
                      <h4 className="text-amber-400 font-medium mb-2 uppercase text-sm tracking-wide">Brand</h4>
                      <p className="text-white text-lg font-light">{fragrance.brand}</p>
                    </div>
                    
                    {fragrance.concentration && (
                      <div className="bg-white/5 p-6 border border-white/10">
                        <h4 className="text-amber-400 font-medium mb-2 uppercase text-sm tracking-wide">Concentration</h4>
                        <p className="text-white text-lg font-light">{fragrance.concentration}</p>
                      </div>
                    )}
                    
                    <div className="bg-white/5 p-6 border border-white/10">
                      <h4 className="text-amber-400 font-medium mb-2 uppercase text-sm tracking-wide">TSA Compliant</h4>
                      <p className="text-white text-lg font-light">{fragrance.flightReady ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <div className="bg-white/5 p-6 border border-white/10">
                      <h4 className="text-amber-400 font-medium mb-2 uppercase text-sm tracking-wide">Availability</h4>
                      <p className="text-white text-lg font-light">{fragrance.inStock ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-8">Fragrance Pyramid</h3>
                  
                  <div className="space-y-8">
                    {fragrance.notes.top.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4 uppercase tracking-wider text-sm">Top Notes</h4>
                        <p className="text-gray-400 text-sm mb-3 font-light">The initial impression, lasting 15-30 minutes</p>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.notes.top.map((note, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {fragrance.notes.middle.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4 uppercase tracking-wider text-sm">Middle Notes (Heart)</h4>
                        <p className="text-gray-400 text-sm mb-3 font-light">The core character, lasting 2-4 hours</p>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.notes.middle.map((note, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {fragrance.notes.base.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4 uppercase tracking-wider text-sm">Base Notes</h4>
                        <p className="text-gray-400 text-sm mb-3 font-light">The lasting foundation, 4+ hours</p>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.notes.base.map((note, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {fragrance.notes.top.length === 0 && fragrance.notes.middle.length === 0 && fragrance.notes.base.length === 0 && (
                      <p className="text-gray-400 font-light">Fragrance notes information coming soon.</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'sizes' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-8">Available Sizes</h3>
                  
                  {availableSizes.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {availableSizes.map((size) => (
                        <div key={size} className="bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-all">
                          <h4 className="text-2xl font-serif text-white mb-2">{size}</h4>
                          <p className="text-gray-400 text-sm font-light mb-4">
                            {size === '1ml' && 'Perfect for sampling'}
                            {size === '2ml' && 'Great for a weekend trip'}
                            {size === '3ml' && 'Ideal for short travel'}
                            {size === '5ml' && 'Perfect for a week-long trip'}
                            {size === '10ml' && 'Extended travel or regular use'}
                          </p>
                          <span className="text-amber-400 text-sm font-medium uppercase tracking-wide">In Stock</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white/5 p-8 border border-white/10 text-center">
                      <p className="text-gray-400 font-light">Currently out of stock. Contact us for availability.</p>
                    </div>
                  )}

                  <div className="mt-8 p-6 bg-amber-600/10 border border-amber-600/30">
                    <h4 className="text-white font-medium mb-2">Pricing Information</h4>
                    <p className="text-gray-300 font-light text-sm">
                      Contact us for current pricing and to place an order.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] border-t border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Explore More Fragrances
            </h2>
            <p className="text-gray-400 mb-8 font-light">
              Discover our complete collection of luxury fragrance decants.
            </p>
            <Link
              href="/in-stock"
              className="inline-block px-10 py-4 bg-white/10 text-white font-medium tracking-wide uppercase text-sm border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
