import type { Fragrance } from '@/lib/schema';
import Badge from './Badge';

interface FragranceCardProps {
  fragrance: Fragrance;
}

export default function FragranceCard({ fragrance }: FragranceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-300"
    >
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {fragrance.image ? (
          <img
            src={fragrance.image}
            alt={fragrance.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🧴
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {fragrance.inStock ? (
            <Badge variant="success" size="sm">In Stock</Badge>
          ) : (
            <Badge variant="danger" size="sm">Out of Stock</Badge>
          )}
          {fragrance.flightReady && (
            <Badge variant="info" size="sm">✈️ Flight Ready</Badge>
          )}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand & Name */}
        <div className="mb-3">
          <p className="text-sm text-gray-500 font-medium mb-1">{fragrance.brand}</p>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {fragrance.name}
          </h3>
        </div>

        {/* Available Sizes */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-2">Available sizes:</p>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(fragrance.sizes)
              .filter(([_, qty]) => qty > 0)
              .map(([size, qty]) => (
                <span
                  key={size}
                  className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded border border-green-200"
                >
                  {size} ({qty})
                </span>
              ))}
            {Object.values(fragrance.sizes).every(qty => qty === 0) && (
              <span className="text-xs text-gray-500">Out of stock</span>
            )}
          </div>
        </div>
        
        {/* Concentration */}
        {fragrance.concentration && (
          <div className="mb-3">
            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-700">
              {fragrance.concentration}
            </span>
          </div>
        )}

        {/* Description */}
        {fragrance.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {fragrance.description}
          </p>
        )}

        {/* Scent Families */}
        {fragrance.scentFamily && fragrance.scentFamily.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1.5">
              {fragrance.scentFamily.map((family, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full border border-amber-200"
                >
                  {family}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Notes Preview */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5">
            {[...fragrance.notes.top, ...fragrance.notes.middle, ...fragrance.notes.base]
              .slice(0, 4)
              .map((note, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {note}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
