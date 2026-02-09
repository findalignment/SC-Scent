import type { Fragrance } from '@/lib/schema';
import Link from 'next/link';

interface FragranceCardProps {
  fragrance: Fragrance;
}

export default function FragranceCard({ fragrance }: FragranceCardProps) {
  return (
    <Link href={`/fragrances/${fragrance.id}`} className="block">
      <div className="bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-500 border border-amber-900/20 group cursor-pointer"
      >
      {/* Image - Now with proper aspect ratio */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-[#0a1628] to-[#1a2f4a] overflow-hidden">
        {fragrance.image ? (
          <img
            src={fragrance.image}
            alt={`${fragrance.brand} ${fragrance.name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 font-serif text-6xl">
            SC
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {fragrance.inStock ? (
            <span className="px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wide shadow-lg">In Stock</span>
          ) : (
            <span className="px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-gray-300 text-xs font-medium uppercase tracking-wide shadow-lg">Out of Stock</span>
          )}
          {fragrance.flightReady && (
            <span className="px-3 py-1 bg-blue-900/80 backdrop-blur-sm text-blue-200 text-xs font-medium uppercase tracking-wide shadow-lg">TSA Ready</span>
          )}
        </div>

      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-[#0d1b2a] to-[#0a1628]">
        {/* Brand & Name */}
        <div className="mb-4">
          <p className="text-xs text-amber-400 font-medium mb-2 uppercase tracking-widest">{fragrance.brand}</p>
          <h3 className="text-xl font-serif font-light text-white group-hover:text-amber-300 transition-colors leading-tight">
            {fragrance.name}
          </h3>
        </div>

        {/* Available Sizes */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Available Sizes:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(fragrance.sizes)
              .filter(([_, qty]) => qty > 0)
              .map(([size]) => (
                <span
                  key={size}
                  className="px-3 py-1 bg-amber-900/20 text-amber-300 text-xs font-medium border border-amber-900/40 hover:bg-amber-900/30 transition-colors"
                >
                  {size}
                </span>
              ))}
            {Object.values(fragrance.sizes).every(qty => qty === 0) && (
              <span className="text-xs text-gray-500">Out of stock</span>
            )}
          </div>
        </div>
        
        {/* Concentration */}
        {fragrance.concentration && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-light text-gray-300 uppercase tracking-wider">
              {fragrance.concentration}
            </span>
          </div>
        )}

        {/* Description */}
        {fragrance.description && (
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 font-light leading-relaxed">
            {fragrance.description}
          </p>
        )}

        {/* Scent Families */}
        {fragrance.scentFamily && fragrance.scentFamily.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {fragrance.scentFamily.map((family, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-white/5 text-gray-400 font-light border border-white/10"
                >
                  {family}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Notes Preview */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {[...fragrance.notes.top, ...fragrance.notes.middle, ...fragrance.notes.base]
              .slice(0, 4)
              .map((note, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs font-light"
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
