import type { Fragrance } from '@/lib/schema';
import FragranceCard from './FragranceCard';

interface InventoryGridProps {
  fragrances: Fragrance[];
}

export default function InventoryGrid({ fragrances }: InventoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {fragrances.map((fragrance) => (
        <FragranceCard key={fragrance.id} fragrance={fragrance} />
      ))}
    </div>
  );
}
