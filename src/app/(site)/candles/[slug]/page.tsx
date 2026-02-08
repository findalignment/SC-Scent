'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/pf-candle-data';

type Tab = 'details' | 'notes' | 'ingredients' | 'how-to-use' | 'scent-throw';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState<Tab>('details');

  if (!product) {
    notFound();
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'details', label: 'Details' },
    { id: 'notes', label: 'Notes' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'how-to-use', label: 'How to Use' },
    { id: 'scent-throw', label: 'Scent Throw' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/candles" className="text-gray-400 hover:text-amber-400 text-sm font-light">
                ← Back to All Products
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] overflow-hidden border border-amber-900/20">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <div className="inline-block bg-amber-600/20 backdrop-blur-md px-4 py-2 border border-amber-600/40 mb-4 w-fit">
                  <span className="text-xs font-medium text-amber-400 tracking-wide uppercase">{product.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
                  {product.name}
                </h1>

                <p className="text-xl text-gray-400 font-light mb-8">
                  {product.tagline}
                </p>

                <p className="text-gray-300 leading-relaxed mb-8 font-light">
                  {product.description}
                </p>

                {/* Quick Notes */}
                <div className="mb-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Quick Notes:</p>
                  <div className="flex flex-wrap gap-2">
                    {[...product.notes.top, ...product.notes.middle, ...product.notes.base].slice(0, 5).map((note, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm font-light border border-white/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
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
                  <h3 className="text-2xl font-serif font-light text-white mb-6">Product Details</h3>
                  <p className="text-lg font-light leading-relaxed mb-6">{product.description}</p>
                  
                  {product.specs && product.specs.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-medium text-white mb-4">Specifications:</h4>
                      <ul className="space-y-2">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-amber-400 mt-1">•</span>
                            <span className="font-light">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-8">Fragrance Notes</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-amber-400 mb-3 uppercase tracking-wider text-sm">Top Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.top.map((note, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-amber-400 mb-3 uppercase tracking-wider text-sm">Middle Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.middle.map((note, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-amber-400 mb-3 uppercase tracking-wider text-sm">Base Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.base.map((note, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 text-white text-sm font-light border border-white/20"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-6">Ingredients</h3>
                  <p className="font-light leading-relaxed text-lg">{product.ingredients}</p>
                </div>
              )}

              {activeTab === 'how-to-use' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-6">How to Use</h3>
                  <ul className="space-y-4">
                    {product.howToUse.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold mt-1 flex-shrink-0">{index + 1}.</span>
                        <span className="font-light leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'scent-throw' && (
                <div className="text-gray-300">
                  <h3 className="text-2xl font-serif font-light text-white mb-6">Scent Throw</h3>
                  <p className="font-light leading-relaxed text-lg">{product.scentThrow}</p>
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
              Explore More Scents
            </h2>
            <p className="text-gray-400 mb-8 font-light">
              Discover the complete P.F. Candle Co. collection available in Santa Cruz.
            </p>
            <Link
              href="/candles"
              className="inline-block px-10 py-4 bg-white/10 text-white font-medium tracking-wide uppercase text-sm border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
