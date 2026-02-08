/**
 * SEO Pages Data - Working Version
 * Using template literals to avoid apostrophe escaping issues
 */

export interface SeoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  faq?: Array<{ q: string; a: string }>;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  relatedSlugs: string[];
  tags: string[];
}

export const seoPages: SeoPage[] = [
  {
    slug: `santa-cruz-scent-flights`,
    title: `Santa Cruz Scent Flights`,
    metaTitle: `Santa Cruz Scent Flights | Appointment-Only Fragrance Discovery`,
    metaDescription: `Discover your signature scent through a guided scent flight in Santa Cruz. Appointment-only consultations using scent tubes to explore niche fragrances without overwhelm.`,
    h1: `Santa Cruz Scent Flights`,
    intro: `A scent flight is a curated fragrance discovery session where you explore multiple scents in a structured way. Using scent tubes instead of spraying, you'll experience fragrances without sensory overwhelm, making it easier to identify what truly resonates with you.`,
    sections: [
      {
        heading: `What Happens in Your Appointment`,
        body: `We start with scent strips to get initial impressions across different fragrance families. Then we test promising candidates on your skin, since fragrances develop differently on everyone. You'll learn to identify notes, understand why certain scents appeal to you, and build a shortlist of favorites to take home as decants.`
      },
      {
        heading: `Why We Use Scent Tubes`,
        body: `Instead of spraying fragrances in the shop, we use small scent tubes. This lets you experience each fragrance clearly without overwhelming your senses or creating a cloud of mixed scents in the air. It's a more mindful, scent-sensitive approach that works better in Santa Cruz's close-wearing fragrance culture.`
      },
      {
        heading: `The Santa Cruz Approach`,
        body: `Santa Cruz has a unique relationship with fragrance. The coastal fog, scent-sensitive community, and outdoor-focused lifestyle call for fragrances that feel personal rather than projecting across a room. We specialize in scents that work beautifully in this environment—close-wearing, weather-appropriate, and respectful of shared spaces.`
      },
      {
        heading: `Why Decants Instead of Full Bottles`,
        body: `Decants let you try before you commit to a $200+ bottle. Test fragrances in your real life—through coastal fog, morning coffee runs, evening walks along West Cliff. See how they wear in Santa Cruz's unique microclimate before investing in a full-size bottle.`
      }
    ],
    faq: [
      { q: `How long does a scent flight take?`, a: `Most appointments run 45-60 minutes, giving you time to explore fragrances thoughtfully without rushing.` },
      { q: `Do I need to know anything about fragrance?`, a: `Not at all. Whether you're new to niche fragrances or a longtime enthusiast, we'll meet you where you are.` },
      { q: `Can I bring a friend?`, a: `Yes! Couples and friends are welcome to book together.` },
      { q: `What should I avoid before my appointment?`, a: `Skip scented lotions or body products on appointment day so your skin is a clean canvas for testing.` }
    ],
    primaryCta: { label: `Book Your Scent Flight`, href: `/book` },
    secondaryCta: { label: `View Current Collection`, href: `/in-stock` },
    relatedSlugs: [`perfume-decants-santa-cruz`, `free-scent-flight`, `custom-scent-flight`, `niche-fragrance-samples-santa-cruz`, `scent-profiling-santa-cruz`],
    tags: [`Core`, `Experience`, `Santa Cruz`]
  },

  // Add more pages here - continuing with more...
];

export function getPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find(page => page.slug === slug);
}

export function getPagesByTag(tag: string): SeoPage[] {
  return seoPages.filter(page => page.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  seoPages.forEach(page => page.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}
