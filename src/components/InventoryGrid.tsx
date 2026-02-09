import type { Fragrance } from '@/lib/schema';
import FragranceCard from './FragranceCard';

interface InventoryGridProps {
  fragrances: Fragrance[];
}

export default function InventoryGrid({ fragrances }: InventoryGridProps) {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      role="list"
      aria-label="Fragrance collection"
    >
      {fragrances.map((fragrance) => (
        <div key={fragrance.id} role="listitem">
          <FragranceCard fragrance={fragrance} />
        </div>
      ))}
    </div>
  );
}
