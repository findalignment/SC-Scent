/**
 * Loading skeleton component for inventory grid
 * Shows while fragrances are being fetched
 */
export default function InventorySkeletons({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] shadow-2xl overflow-hidden border border-amber-900/20 animate-pulse"
        >
          {/* Image skeleton */}
          <div className="aspect-[3/4] bg-white/5" />
          
          {/* Content skeleton */}
          <div className="p-6 space-y-4">
            {/* Brand name */}
            <div className="h-3 bg-white/10 rounded w-1/3" />
            
            {/* Fragrance name */}
            <div className="h-5 bg-white/15 rounded w-3/4" />
            
            {/* Concentration */}
            <div className="h-3 bg-white/10 rounded w-1/2" />
            
            {/* Sizes */}
            <div className="flex gap-2 flex-wrap">
              <div className="h-7 w-16 bg-white/10 rounded" />
              <div className="h-7 w-16 bg-white/10 rounded" />
              <div className="h-7 w-16 bg-white/10 rounded" />
            </div>
            
            {/* Button */}
            <div className="h-11 bg-white/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
