'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pfProducts, categories } from '@/lib/pf-candle-data';
import type { PFProduct } from '@/lib/pf-candle-data';

export default function PFCandlePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? pfProducts 
    : pfProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-600/20 backdrop-blur-md px-6 py-2 border border-amber-600/40 mb-6">
              <span className="text-sm font-medium text-amber-400 tracking-wide uppercase">P.F. Candle Co.</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
              Artisan Home Fragrance
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              100% soy wax candles, incense, and home fragrance handcrafted in California. 
              Available now at Santa Cruz Scent.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#0d1b2a]/50 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 font-medium text-sm uppercase tracking-wide transition-all ${
                selectedCategory === 'All'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-medium text-sm uppercase tracking-wide transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}s
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-400 font-light">
              Showing <strong className="text-amber-400">{filteredProducts.length}</strong> products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a] border-t border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Questions About Our Candles?
            </h2>
            <p className="text-gray-400 mb-8 font-light">
              Contact us to place an order or learn more about P.F. Candle Co. products.
            </p>
            <a
              href="/book"
              className="inline-block px-10 py-4 bg-amber-600 text-white font-medium tracking-wide uppercase text-sm shadow-2xl hover:bg-amber-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: PFProduct }) {
  return (
    <Link href={`/candles/${product.slug}`}>
      <div className="bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-500 border border-amber-900/20 group cursor-pointer">
      {/* Image */}
      <div className="relative h-80 bg-gradient-to-br from-[#0a1628] to-[#1a2f4a] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            // Fallback if image doesn't load
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wide shadow-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-[#0d1b2a] to-[#0a1628]">
        {/* Name */}
        <div className="mb-4">
          <p className="text-xs text-amber-400 font-medium mb-2 uppercase tracking-widest">P.F. Candle Co.</p>
          <h3 className="text-xl font-serif font-light text-white group-hover:text-amber-300 transition-colors leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">
          {product.description}
        </p>

        {/* Notes */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Notes:</p>
          <div className="flex flex-wrap gap-2">
            {[...product.notes.top, ...product.notes.middle, ...product.notes.base].slice(0, 4).map((note, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs font-light border border-white/10"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
