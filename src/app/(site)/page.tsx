import Hero from '@/components/Hero';
import OfferCards from '@/components/OfferCards';
import FlightExplainer from '@/components/FlightExplainer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Santa Cruz Scent - Premium Fragrance Decants & Candles',
  description: 'Discover luxury fragrances in travel-friendly sizes. Flight-ready decants, full bottles, and artisan candles. Try before you buy.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferCards />
      <FlightExplainer />
      <CTA
        title="Start Your Scent Journey"
        description="Browse our curated collection of premium fragrances or book a personalized consultation."
        primaryButton={{ text: 'Explore Collection', href: '/in-stock' }}
        secondaryButton={{ text: 'Book Consultation', href: '/book' }}
        variant="gradient"
      />
    </>
  );
}
