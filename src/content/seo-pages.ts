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

  {
    slug: `perfume-decants-santa-cruz`,
    title: `Perfume Decants in Santa Cruz`,
    metaTitle: `Perfume Decants Santa Cruz | Try Niche Fragrances Before Buying`,
    metaDescription: `Explore luxury perfume decants in Santa Cruz. Try niche fragrances in travel-friendly sizes before committing to full bottles. Appointment-based consultations.`,
    h1: `Perfume Decants in Santa Cruz`,
    intro: `Perfume decants are small portions of luxury fragrances, carefully transferred into travel-friendly bottles. Instead of blind-buying a $200+ bottle, you can test a fragrance in your daily life for a fraction of the cost.`,
    sections: [
      {
        heading: `Why Decants Matter in Santa Cruz`,
        body: `Santa Cruz's coastal climate affects how fragrances wear. The marine layer, temperature swings from beach to redwoods, and the preference for subtle scents mean that a fragrance that works elsewhere might not work here. Decants let you test in real conditions before investing.`
      },
      {
        heading: `Available Sizes`,
        body: `We offer decants in 1ml (sampling), 2ml (weekend trip), 3ml (short travel), 5ml (week-long trip), and 10ml (extended use). All sizes are TSA-compliant and perfect for discovering whether a fragrance earns a place in your rotation.`
      },
      {
        heading: `How to Choose Your First Decant`,
        body: `Book a scent flight appointment where we'll use scent tubes to help you explore different fragrance families. You'll test strips first, then skin, and build a shortlist based on what actually works with your chemistry—not just what smells good in the bottle.`
      }
    ],
    faq: [
      { q: `How long does a 5ml decant last?`, a: `With typical use (2-3 applications per day), a 5ml decant lasts about a week, making it perfect for really getting to know a fragrance.` },
      { q: `Are decants authentic?`, a: `Yes. We source from authorized retailers and transfer fragrances carefully to maintain quality.` },
      { q: `Can I buy decants without an appointment?`, a: `We're appointment-only to ensure you find fragrances that truly work for you.` }
    ],
    primaryCta: { label: `Book a Consultation`, href: `/book` },
    secondaryCta: { label: `See What's In Stock`, href: `/in-stock` },
    relatedSlugs: [`cologne-decants-santa-cruz`, `niche-fragrance-samples-santa-cruz`, `try-before-you-buy-perfume-santa-cruz`, `what-is-a-decant`],
    tags: [`Core`, `Decants`, `Santa Cruz`]
  },

  {
    slug: `cologne-decants-santa-cruz`,
    title: `Cologne Decants in Santa Cruz`,
    metaTitle: `Cologne Decants Santa Cruz | Discover Your Signature Scent`,
    metaDescription: `Test premium cologne decants in Santa Cruz before buying full bottles. Appointment-only consultations to find fragrances that work with the coastal climate.`,
    h1: `Cologne Decants in Santa Cruz`,
    intro: `Cologne decants offer a smart way to explore fragrances without the commitment of a full bottle. Test how scents develop on your skin and interact with Santa Cruz's unique coastal environment.`,
    sections: [
      {
        heading: `Beyond Traditional Cologne`,
        body: `Modern fragrance blurs old categories. We help you find scents based on your preferences and lifestyle—whether fresh and aquatic, woody and grounded, or something entirely different—without limiting you to outdated gender categories.`
      },
      {
        heading: `Santa Cruz-Appropriate Fragrances`,
        body: `Our coastal community tends toward close-wearing, thoughtful fragrances rather than loud statement scents. We specialize in fragrances that feel personal—scents that people notice when they're close to you, not across the room.`
      },
      {
        heading: `Testing in Real Life`,
        body: `A decant lets you test a fragrance beyond the first impression. Wear it to Verve, on a beach walk, through the farmer's market. See how it performs in fog, how long it lasts, whether it causes headaches.`
      }
    ],
    faq: [
      { q: `What's the difference between cologne and perfume?`, a: `Traditionally, cologne referred to lighter concentrations, but modern fragrance uses terms like Eau de Toilette and Eau de Parfum. We focus on finding scents you love, regardless of historical category names.` },
      { q: `Are these unisex fragrances?`, a: `We don't categorize fragrances by gender. If a scent resonates with you, it's for you.` }
    ],
    primaryCta: { label: `Book Your Appointment`, href: `/book` },
    secondaryCta: { label: `Browse Collection`, href: `/in-stock` },
    relatedSlugs: [`perfume-decants-santa-cruz`, `niche-fragrance-samples-santa-cruz`, `coastal-clean-fragrances`],
    tags: [`Core`, `Decants`, `Santa Cruz`]
  },

  {
    slug: `niche-fragrance-samples-santa-cruz`,
    title: `Niche Fragrance Samples in Santa Cruz`,
    metaTitle: `Niche Fragrance Samples Santa Cruz | Discover Unique Scents`,
    metaDescription: `Sample hard-to-find niche fragrances in Santa Cruz. Appointment-based consultations to explore artisanal, indie, and luxury scents not found in department stores.`,
    h1: `Niche Fragrance Samples in Santa Cruz`,
    intro: `Niche fragrances are artisanal scents created by independent perfume houses, focusing on quality ingredients and creative expression rather than mass appeal. These are fragrances you won't find at department stores—unique, thoughtful, and often surprising.`,
    sections: [
      {
        heading: `What Makes a Fragrance Niche`,
        body: `Niche fragrances come from smaller, independent perfumers who prioritize artistic vision over commercial trends. They use higher-quality ingredients, take creative risks, and often tell stories through scent. Think craft coffee of fragrance—small-batch, thoughtfully made, and distinct.`
      },
      {
        heading: `Why Sample Before Buying`,
        body: `Niche fragrances can be bold, unusual, or quietly complex. A fragrance that sounds perfect might not work on your skin, or might be too intense for your lifestyle. Sampling lets you discover whether that bottle actually suits your morning commute or if you're better suited to something gentler.`
      },
      {
        heading: `The Discovery Process`,
        body: `We guide you through scent families using tubes—no overwhelming spray clouds. Test on strips first to get a sense of the fragrance structure, then on skin to see how it develops. You'll learn to identify notes and understand what draws you to certain scents.`
      }
    ],
    faq: [
      { q: `Are niche fragrances stronger?`, a: `Not necessarily. Some are bold and projecting, others are intimate skin scents. It varies widely by brand and composition.` },
      { q: `Why are niche fragrances more expensive?`, a: `Higher-quality ingredients, smaller production runs, and more complex formulations drive the cost. You're paying for artistry and materials, not celebrity endorsements.` }
    ],
    primaryCta: { label: `Explore Niche Scents`, href: `/book` },
    secondaryCta: { label: `See Current Collection`, href: `/in-stock` },
    relatedSlugs: [`perfume-decants-santa-cruz`, `artsy-indie-niche-fragrances`, `your-first-niche-fragrance`],
    tags: [`Core`, `Niche`, `Santa Cruz`, `Education`]
  },

  {
    slug: `try-before-you-buy-perfume-santa-cruz`,
    title: `Try Before You Buy Perfume in Santa Cruz`,
    metaTitle: `Try Before You Buy Perfume Santa Cruz | Decants & Samples`,
    metaDescription: `Test luxury fragrances in real-life conditions before buying full bottles. Santa Cruz-based fragrance consultations with take-home decants.`,
    h1: `Try Before You Buy Perfume in Santa Cruz`,
    intro: `Blind-buying fragrance is expensive and frustrating. Test scents in your actual life—through work days, beach walks, and evening plans—before committing to a full-size bottle.`,
    sections: [
      {
        heading: `The Problem with Blind Buying`,
        body: `You can't know if a fragrance truly works from a quick store test. Fragrances develop over hours, interact with your skin chemistry, and behave differently in various environments. What smells amazing in a bright store might give you a headache at your desk.`
      },
      {
        heading: `How Try-Before-You-Buy Works`,
        body: `Book an appointment where we use scent tubes to help you explore fragrances. Test on strips and skin, identify what resonates, then take home decants to wear in your real life. After a week of testing, you'll know whether a fragrance deserves a full-bottle commitment.`
      },
      {
        heading: `Building Your Collection Intentionally`,
        body: `Rather than accumulating bottles based on hype, build a collection of fragrances you've tested and know you love. This approach saves money, reduces waste, and results in a wardrobe of scents you actually wear.`
      }
    ],
    faq: [
      { q: `How long should I test a fragrance?`, a: `We recommend wearing a fragrance for at least a week in different situations—work, social, outdoor—to see if it truly fits your life.` },
      { q: `What if I love multiple fragrances?`, a: `Many people build a rotation of 3-5 fragrances rather than settling on one signature scent.` }
    ],
    primaryCta: { label: `Book a Test Session`, href: `/book` },
    secondaryCta: { label: `View Available Scents`, href: `/in-stock` },
    relatedSlugs: [`what-is-a-decant`, `perfume-decants-santa-cruz`, `signature-scent-finder`],
    tags: [`Core`, `Problem/Solution`, `Santa Cruz`]
  },

  {
    slug: `free-scent-flight`,
    title: `Free Scent Flight of the Day (Santa Cruz)`,
    metaTitle: `Free Scent Flight Santa Cruz | Complimentary Fragrance Discovery`,
    metaDescription: `Try our free scent flight featuring curated fragrances. A no-commitment way to experience niche fragrance consultation in Santa Cruz.`,
    h1: `Free Scent Flight of the Day`,
    intro: `New to niche fragrance? Try our free scent flight—a curated selection of 5-6 fragrances chosen to showcase different styles and help you discover your preferences without commitment.`,
    sections: [
      {
        heading: `What's Included`,
        body: `The free flight includes a guided tasting of 5-6 pre-selected fragrances using scent tubes. You'll test on strips and skin, learn to identify notes, and discover what you're drawn to. No purchase required, though many people choose to take home decants of their favorites.`
      },
      {
        heading: `Who It's For`,
        body: `The free flight is perfect for first-timers, people curious about niche fragrance, or anyone wanting to experience our consultation style before booking a full custom flight. It's a low-pressure introduction to thoughtful fragrance exploration.`
      }
    ],
    faq: [
      { q: `Is it really free?`, a: `Yes. No purchase required. We offer this to introduce people to niche fragrance and our consultation approach.` },
      { q: `Can I choose which fragrances to try?`, a: `The free flight is pre-selected. For personalized selection, book a custom scent flight.` }
    ],
    primaryCta: { label: `Book Free Flight`, href: `/book` },
    secondaryCta: { label: `Learn About Custom Flights`, href: `/seo/custom-scent-flight` },
    relatedSlugs: [`santa-cruz-scent-flights`, `custom-scent-flight`, `your-first-niche-fragrance`],
    tags: [`Experience`, `Free`, `Santa Cruz`]
  },

  {
    slug: `custom-scent-flight`,
    title: `Custom Scent Flight (Santa Cruz)`,
    metaTitle: `Custom Scent Flight Santa Cruz | Personalized Fragrance Discovery`,
    metaDescription: `Book a custom scent flight tailored to your preferences. Explore 10-15 niche fragrances chosen specifically for you with expert guidance.`,
    h1: `Custom Scent Flight`,
    intro: `A custom scent flight is a personalized fragrance discovery session where we curate 10-15 scents based on your preferences, lifestyle, and what you're searching for.`,
    sections: [
      {
        heading: `The Custom Experience`,
        body: `Before your appointment, we discuss what you're looking for—whether that's "something for everyday," "a signature scent," "fresh but not aquatic," or "I want to smell expensive but subtle." We then curate a flight specifically for you, selecting from our full collection.`
      },
      {
        heading: `What Makes It Custom`,
        body: `Unlike the free flight, which is pre-set, a custom flight is built around your taste. If you know you dislike sweet scents, we won't waste your time with gourmands. If you're drawn to woody fragrances, we'll show you the range—from gentle cedar to intense oud.`
      },
      {
        heading: `Taking Fragrances Home`,
        body: `Most people leave with decants of their top 2-3 discoveries to test in real life. Wear them for a week, see how they perform in Santa Cruz's climate, then decide which earn a permanent place in your rotation.`
      }
    ],
    faq: [
      { q: `How is this different from the free flight?`, a: `The free flight is pre-selected. Custom flights are curated specifically for your taste, with more fragrances and deeper guidance.` },
      { q: `How long does it take?`, a: `Usually 60-75 minutes. We take our time—fragrance discovery shouldn't feel rushed.` }
    ],
    primaryCta: { label: `Book Custom Flight`, href: `/book` },
    secondaryCta: { label: `Try Free Flight First`, href: `/seo/free-scent-flight` },
    relatedSlugs: [`santa-cruz-scent-flights`, `scent-profiling-santa-cruz`, `signature-scent-finder`],
    tags: [`Experience`, `Custom`, `Santa Cruz`]
  },

  {
    slug: `low-projection-fragrances`,
    title: `Low-Projection Fragrances for Sensitive Spaces`,
    metaTitle: `Low-Projection Fragrances Santa Cruz | Subtle, Close-Wearing Scents`,
    metaDescription: `Discover fragrances that stay close to skin without projecting across rooms. Perfect for scent-sensitive workplaces and close-wearing preference.`,
    h1: `Low-Projection Fragrances`,
    intro: `Low-projection fragrances create a personal scent bubble rather than announcing your presence across a room. These close-wearing scents are ideal for shared workspaces, scent-sensitive environments, and anyone who prefers subtlety.`,
    sections: [
      {
        heading: `Why Choose Low-Projection`,
        body: `Santa Cruz's close-knit, scent-aware community often prefers fragrances that feel personal rather than performative. Low-projection scents let you enjoy fragrance without imposing it on others—perfect for offices, yoga studios, coffee shops, or anywhere people gather closely.`
      },
      {
        heading: `What Makes a Fragrance Low-Projection`,
        body: `Projection is about sillage—the trail a fragrance leaves. Low-projection fragrances use ingredients that stay closer to skin: musks, soft woods, skin-like ambers, and delicate florals. They create an intimate scent experience that others only notice when nearby.`
      }
    ],
    faq: [
      { q: `Does low-projection mean weak quality?`, a: `Not at all. Many luxury niche fragrances are intentionally close-wearing, focusing on intimacy over broadcast power.` },
      { q: `Will low-projection fragrances last all day?`, a: `Longevity and projection are separate. Many low-projection scents have excellent staying power—they just stay close.` }
    ],
    primaryCta: { label: `Find Your Subtle Scent`, href: `/book` },
    relatedSlugs: [`office-safe-fragrances`, `skin-scents-expensive`, `santa-cruz-friendly-fragrances`],
    tags: [`Problem/Solution`, `Santa Cruz`]
  },

  {
    slug: `what-is-a-decant`,
    title: `What Is a Decant? (And Why It's Better Than Blind Buying)`,
    metaTitle: `What Is a Perfume Decant? | Fragrance Sampling Explained`,
    metaDescription: `Learn what fragrance decants are, why they're essential for trying niche perfumes, and how they save money while building your scent collection.`,
    h1: `What Is a Decant?`,
    intro: `A decant is a small portion of fragrance transferred from a full bottle into a smaller container—typically 1ml to 10ml. It's the smart way to test expensive niche fragrances before committing to full-size bottles.`,
    sections: [
      {
        heading: `Why Decants Exist`,
        body: `Niche fragrances often cost $200-400 for a full bottle. Buying blind based on descriptions is risky—fragrances develop differently on everyone, and what smells amazing initially might give you headaches after an hour. Decants let you test thoroughly before investing.`
      },
      {
        heading: `How Decants Are Made`,
        body: `We source authentic fragrances from authorized retailers and carefully transfer small amounts into clean, labeled bottles using sterile techniques. You're getting the exact same fragrance as the full bottle, just in a portable, affordable format designed for testing.`
      },
      {
        heading: `Decant Sizes and Their Uses`,
        body: `1ml is perfect for sampling—3-5 applications to get a first impression. 2-3ml works for weekend testing. 5ml gives you a full week of daily wear. 10ml is for extended testing or travel use of a favorite you haven't committed to buying full-size yet.`
      }
    ],
    faq: [
      { q: `Are decants authentic?`, a: `Yes. We source from authorized retailers and transfer authentic fragrances. You're getting genuine product, just in smaller portions.` },
      { q: `How long do decants last once opened?`, a: `Stored properly (cool, dark, sealed), decants last years. Fragrances are quite stable when kept away from heat and light.` }
    ],
    primaryCta: { label: `Start Testing Fragrances`, href: `/book` },
    relatedSlugs: [`decant-sizes-explained`, `try-before-you-buy-perfume-santa-cruz`, `perfume-decants-santa-cruz`],
    tags: [`Education`, `Decants`]
  },

  {
    slug: `decant-sizes-explained`,
    title: `Decant Sizes Explained (1ml vs 2ml vs 5ml vs 10ml)`,
    metaTitle: `Decant Sizes Explained | How to Choose the Right Size`,
    metaDescription: `Understand fragrance decant sizes and which one is right for you. Complete guide to 1ml, 2ml, 3ml, 5ml, and 10ml decants.`,
    h1: `Decant Sizes Explained`,
    intro: `Choosing the right decant size depends on your goal. Are you sampling something new? Testing for a week? Traveling? Each size serves a different purpose.`,
    sections: [
      {
        heading: `1ml Decants: First Impressions`,
        body: `A 1ml decant gives you 3-5 applications—enough to test a fragrance over a few days. Perfect for initial sampling when you're exploring new scent families or want to try multiple fragrances without committing to larger sizes. Think of it as a fragrance espresso shot.`
      },
      {
        heading: `2ml & 3ml Decants: Weekend Testing`,
        body: `These sizes provide 6-10 applications, ideal for a long weekend or short trip. You'll get a better sense of how a fragrance performs in different contexts—morning, afternoon, evening—without the commitment of a full week.`
      },
      {
        heading: `5ml Decants: The Sweet Spot`,
        body: `With 15-20 applications, a 5ml decant lasts about a week of daily wear. This is our most popular size because it's enough to truly understand a fragrance—how it wears in fog, sunshine, work, and social situations. Perfect for decision-making.`
      },
      {
        heading: `10ml Decants: Extended Testing or Travel`,
        body: `A 10ml decant provides 30-40 applications—about a month of regular use or multiple trips. Choose this when you're pretty sure you love something but want extended real-world testing before buying a $300 bottle, or when you want a portable version for travel.`
      }
    ],
    faq: [
      { q: `How many sprays are in each size?`, a: `Roughly 10 sprays per ml, but this varies by atomizer. 1ml = 10-15 sprays, 5ml = 50-75 sprays, 10ml = 100-150 sprays.` },
      { q: `Are all sizes TSA-compliant?`, a: `Yes. All decant sizes are well under the 100ml TSA limit for carry-on liquids.` },
      { q: `Which size should I start with?`, a: `For first-time testing, we recommend 5ml. It's enough to really know if you love something without being too much if you don't.` }
    ],
    primaryCta: { label: `Book a Consultation`, href: `/book` },
    relatedSlugs: [`what-is-a-decant`, `perfume-decants-santa-cruz`, `try-before-you-buy-perfume-santa-cruz`],
    tags: [`Education`, `Decants`]
  },

  {
    slug: `santa-cruz-friendly-fragrances`,
    title: `Santa Cruz-Friendly Fragrances (What It Means)`,
    metaTitle: `Santa Cruz-Friendly Fragrances | What Works Here`,
    metaDescription: `Discover what makes a fragrance Santa Cruz-appropriate. Close-wearing, weather-responsive scents for the coastal lifestyle.`,
    h1: `Santa Cruz-Friendly Fragrances`,
    intro: `Not every fragrance works in Santa Cruz. The coastal climate, scent-sensitive community, and outdoor-focused lifestyle create a unique context for fragrance. Understanding what makes a scent "Santa Cruz-friendly" helps you build a collection that actually fits your life here.`,
    sections: [
      {
        heading: `The Santa Cruz Fragrance Culture`,
        body: `Santa Cruz tends toward subtlety over statement. The community values mindfulness, including in shared spaces. Heavy projection that works in LA or New York can feel overwhelming here. Santa Cruz-friendly fragrances are close-wearing, respectful of others, and work with—not against—the coastal environment.`
      },
      {
        heading: `How Coastal Weather Affects Fragrance`,
        body: `Marine layer mornings mean fragrances can feel muted or sharp. Afternoon sun brings them out. Evening fog can amplify certain notes. Fragrances need to adapt to these swings without becoming cloying or disappearing entirely. Coastal-appropriate scents have versatility built in.`
      },
      {
        heading: `The Outdoor Lifestyle Factor`,
        body: `Santa Cruz life happens outside—beaches, redwoods, hiking, surfing. Fragrances that work in air-conditioned malls might not work on a West Cliff walk. Santa Cruz-friendly scents complement fresh air rather than competing with it, and they don't become overwhelming when you warm up from activity.`
      },
      {
        heading: `Scent Sensitivity and Community`,
        body: `Many spaces in Santa Cruz are scent-aware or scent-free—yoga studios, co-working spaces, health clinics, schools. Choosing fragrances that stay close to your skin respects these environments while still letting you enjoy scent. It's about personal enjoyment, not broadcasting.`
      }
    ],
    faq: [
      { q: `Does this mean no strong fragrances?`, a: `Not necessarily strong vs. weak—it's about projection and appropriateness. A rich, complex fragrance that stays close can be perfect. A simple fragrance that projects loudly might not.` },
      { q: `What scent families work best?`, a: `Aquatics, soft woods, clean musks, and gentle florals tend to work well. But it's more about projection level and versatility than specific families.` },
      { q: `Can I wear gourmands in Santa Cruz?`, a: `Absolutely, if they're well-suited to the climate. Heavy vanillas might feel cloying in humidity, but a light tonka or subtle coffee note can be perfect.` }
    ],
    primaryCta: { label: `Find Your Santa Cruz Scent`, href: `/book` },
    relatedSlugs: [`coastal-clean-fragrances`, `low-projection-fragrances`, `office-safe-fragrances`, `fragrances-foggy-mornings`],
    tags: [`Santa Cruz`, `Problem/Solution`]
  },

  {
    slug: `coastal-clean-fragrances`,
    title: `Coastal Clean Fragrances`,
    metaTitle: `Coastal Clean Fragrances | Fresh Scents for Santa Cruz`,
    metaDescription: `Discover coastal clean fragrances perfect for Santa Cruz. Fresh, aquatic, and breezy scents that complement the ocean air.`,
    h1: `Coastal Clean Fragrances`,
    intro: `Coastal clean fragrances capture the essence of ocean air, sea salt, and fresh breezes without smelling like sunscreen or laundry detergent. They're the olfactory equivalent of a perfect beach day.`,
    sections: [
      {
        heading: `What Makes a Fragrance Coastal Clean`,
        body: `True coastal fragrances balance marine notes with something more interesting—driftwood, sea grass, ambergris, or mineral elements. They evoke the beach without being literal. Think less "artificial aquatic" and more "standing on West Cliff at sunrise."`
      },
      {
        heading: `Why They Work in Santa Cruz`,
        body: `Coastal clean fragrances harmonize with the environment rather than competing with it. When you're already surrounded by ocean air, a complementary fragrance feels natural—an enhancement of your surroundings, not a departure from them.`
      },
      {
        heading: `Beyond Generic Aquatics`,
        body: `Avoid fragrances that smell like generic "ocean breeze" candles. Look for complexity—salt with woods, seaweed with citrus, ozone with musk. The best coastal fragrances have depth and evolve throughout the day, just like the actual coast.`
      }
    ],
    faq: [
      { q: `Do coastal fragrances smell like sunscreen?`, a: `The good ones don't. We avoid coconut-sunscreen clichés in favor of more sophisticated marine and mineral notes.` },
      { q: `Will they smell out of place in winter?`, a: `Interestingly, no. Coastal fragrances often work year-round in Santa Cruz because the marine layer is a constant. They're versatile.` }
    ],
    primaryCta: { label: `Explore Coastal Scents`, href: `/book` },
    relatedSlugs: [`santa-cruz-friendly-fragrances`, `beach-day-fragrances`, `surf-to-dinner-fragrances`],
    tags: [`Santa Cruz`, `Scent Profile`]
  },

  {
    slug: `office-safe-fragrances`,
    title: `Office-Safe Fragrances That Still Get Compliments`,
    metaTitle: `Office-Safe Fragrances | Professional Scents for Work`,
    metaDescription: `Discover office-appropriate fragrances that are professional yet distinctive. Low-projection scents that work in scent-sensitive workplaces.`,
    h1: `Office-Safe Fragrances`,
    intro: `Office-safe doesn't have to mean boring. The key is choosing fragrances with low projection and universal appeal—scents that people notice when they're close, not when you walk into a room.`,
    sections: [
      {
        heading: `What Makes a Fragrance Office-Safe`,
        body: `Low projection, universal appeal, and subtlety. Avoid anything polarizing (heavy oud, intense florals, sweet gourmands) or projecting (loud musks, screechy citruses). Look for clean, sophisticated scents that enhance your presence without overwhelming colleagues.`
      },
      {
        heading: `The Professional Subtlety Balance`,
        body: `You want something noticeable to those near you—in meetings, at your desk, in passing—but not projecting across the office. This sweet spot lets you express yourself through scent while respecting shared workspace sensitivity.`
      },
      {
        heading: `Santa Cruz Workplace Culture`,
        body: `Many Santa Cruz workplaces are particularly scent-conscious, especially in health, education, and tech sectors. Understanding this culture helps you choose fragrances that work professionally here, even if they'd be fine in other cities.`
      }
    ],
    faq: [
      { q: `Are all skin scents office-safe?`, a: `Most are, but not all. Some skin scents can still be polarizing if they're heavy on animalic musks or indolic florals.` },
      { q: `Can I wear fragrance in scent-free offices?`, a: `If your workplace has a scent-free policy, respect it. Some environments need to be genuinely fragrance-free for health reasons.` }
    ],
    primaryCta: { label: `Find Your Office Scent`, href: `/book` },
    relatedSlugs: [`low-projection-fragrances`, `skin-scents-expensive`, `clean-scents-not-laundry`],
    tags: [`Problem/Solution`, `Professional`]
  },

  {
    slug: `signature-scent-finder`,
    title: `Signature Scent Finder (Santa Cruz)`,
    metaTitle: `Signature Scent Finder Santa Cruz | Discover Your Perfect Fragrance`,
    metaDescription: `Find your signature scent through guided consultation in Santa Cruz. Personalized fragrance discovery to identify the scent that truly represents you.`,
    h1: `Signature Scent Finder`,
    intro: `Finding a signature scent is about discovering the fragrance that feels like an extension of yourself—the scent people associate with you, that enhances rather than masks your presence.`,
    sections: [
      {
        heading: `What Is a Signature Scent`,
        body: `A signature scent is a fragrance you wear consistently, that becomes part of your identity. It's not about finding the "best" fragrance—it's about finding the one that feels most authentically you. Some people have one signature scent; others rotate 2-3 depending on context.`
      },
      {
        heading: `The Discovery Process`,
        body: `We use scent tubes to help you explore different families and identify patterns in what you're drawn to. Through testing on strips and skin, you'll discover what resonates—not what's trending or what you think you should like, but what actually feels right.`
      },
      {
        heading: `Beyond First Impressions`,
        body: `A true signature scent reveals itself over time. It's the one you reach for without thinking, that feels comfortable but interesting, that you never tire of. We help you identify candidates, then you test them in real life before committing.`
      },
      {
        heading: `Santa Cruz Context`,
        body: `Your signature scent should work in your actual life here—through fog, sunshine, work, social gatherings, outdoor activities. It needs to be versatile enough for Santa Cruz's lifestyle while still feeling distinctly you.`
      }
    ],
    faq: [
      { q: `Should I have just one signature scent?`, a: `Not necessarily. Many people have 2-3 they rotate, or different scents for different contexts. Whatever feels authentic to you is right.` },
      { q: `How long does it take to find a signature scent?`, a: `For some people, it happens in one appointment. For others, it's a process of testing several finalists over weeks. We'll guide you through it.` },
      { q: `What if I change my mind later?`, a: `That's natural. Your signature scent can evolve as you do. The goal is finding what feels right for this chapter of your life.` }
    ],
    primaryCta: { label: `Start Your Search`, href: `/book` },
    relatedSlugs: [`custom-scent-flight`, `scent-profiling-santa-cruz`, `your-first-niche-fragrance`, `scent-wardrobe-building`],
    tags: [`Experience`, `Custom`, `Santa Cruz`]
  },

  {
    slug: `your-first-niche-fragrance`,
    title: `Your First Niche Fragrance (Starter Guide)`,
    metaTitle: `Your First Niche Fragrance | Beginner's Guide to Niche Perfume`,
    metaDescription: `New to niche fragrance? Complete beginner's guide to discovering artisanal perfumes, understanding the difference from designer scents, and finding your first bottle.`,
    h1: `Your First Niche Fragrance`,
    intro: `Stepping into niche fragrance can feel overwhelming. Hundreds of brands, unfamiliar names, higher prices, and no familiar reference points. This guide helps you navigate your first niche purchase with confidence.`,
    sections: [
      {
        heading: `Niche vs. Designer: What's the Difference`,
        body: `Designer fragrances (Chanel, Dior, YSL) prioritize mass appeal and are sold everywhere. Niche fragrances come from smaller houses focused on artistry over commerce, using higher-quality ingredients and taking creative risks. Niche is craft coffee to designer's Starbucks—both valid, different purposes.`
      },
      {
        heading: `Start with What You Already Know`,
        body: `If you love a designer fragrance, we can find niche alternatives that take those elements further. Love fresh citrus? We'll show you sophisticated takes. Drawn to vanilla? There's a whole world beyond the sweet stuff. Your existing preferences are the roadmap.`
      },
      {
        heading: `Don't Overthink It`,
        body: `The beauty of decants is you can try without pressure. You don't need to become an expert or understand every note. Start with what smells good to you, test it in real life, and build from there. Fragrance literacy develops naturally through exploration.`
      },
      {
        heading: `Setting Realistic Expectations`,
        body: `Not every niche fragrance will blow your mind. Some will be too weird, too subtle, or just not for you—and that's fine. The goal is discovering a few you truly love, not collecting every hyped release. Quality over quantity.`
      }
    ],
    faq: [
      { q: `Are niche fragrances always better than designer?`, a: `Not always "better"—different. Niche offers more creativity and quality, but some designer fragrances are excellent. It's about finding what works for you.` },
      { q: `Do I need to know notes and families?`, a: `Helpful but not required. We'll teach you as we go. Start with "I like this" and build vocabulary over time.` },
      { q: `Should I buy a full bottle of my first niche fragrance?`, a: `Test a decant first. Even if you love it initially, make sure you love it after a week of wearing it in real situations.` },
      { q: `What if I don't like any niche fragrances?`, a: `That's valuable information. Maybe designer scents work better for you, or maybe you haven't found the right niche genre yet. We'll help you figure it out.` }
    ],
    primaryCta: { label: `Start Exploring`, href: `/book` },
    relatedSlugs: [`niche-fragrance-samples-santa-cruz`, `free-scent-flight`, `what-is-a-decant`, `signature-scent-finder`],
    tags: [`Education`, `Niche`, `Beginner`]
  },

  {
    slug: `scent-wardrobe-building`,
    title: `Scent Wardrobe Building (2-5 Fragrances)`,
    metaTitle: `Scent Wardrobe Building | Curate Your Fragrance Collection`,
    metaDescription: `Build a versatile fragrance wardrobe with 2-5 complementary scents. Learn how to choose fragrances that cover different moods and occasions.`,
    h1: `Building a Scent Wardrobe`,
    intro: `Instead of searching for one perfect signature scent, many people prefer a small rotation—a scent wardrobe that covers different moods, seasons, and contexts. Here's how to build one intentionally.`,
    sections: [
      {
        heading: `The Core Concept`,
        body: `A scent wardrobe typically includes 2-5 fragrances that serve different purposes: a daily go-to, something for special occasions, maybe a seasonal favorite, perhaps a work-appropriate option. Like clothing, you choose based on context, mood, and what feels right that day.`
      },
      {
        heading: `How to Choose Your Pieces`,
        body: `Start with variety across scent families—perhaps one fresh, one woody, one floral/complex. Or think functionally: office-safe, weekend casual, evening sophisticated. Avoid fragrances that are too similar; you want complementary options, not redundancies.`
      },
      {
        heading: `The Santa Cruz Wardrobe`,
        body: `A Santa Cruz-appropriate wardrobe might include: a coastal-fresh daily driver, a woody scent for rainy days, a skin scent for professional contexts, and something richer for evenings. All would be relatively close-wearing and weather-versatile.`
      },
      {
        heading: `Growing Intentionally`,
        body: `Don't rush to fill slots. Build slowly, testing thoroughly. Each addition should fill a genuine gap, not just be something you like. The goal is a curated collection you actually use, not a shelf of half-worn bottles.`
      }
    ],
    faq: [
      { q: `How many fragrances should I own?`, a: `Whatever you'll actually wear. For most people, 2-5 is the sweet spot—enough variety without overwhelming choice.` },
      { q: `Do I need seasonal fragrances?`, a: `In Santa Cruz's mild climate, you can often wear the same fragrances year-round. Seasonal rotation is optional here.` },
      { q: `What if I love everything?`, a: `Test decants first. You might love 20 fragrances, but that doesn't mean you need to own them all. Find the ones you reach for repeatedly.` }
    ],
    primaryCta: { label: `Build Your Wardrobe`, href: `/book` },
    relatedSlugs: [`signature-scent-finder`, `custom-scent-flight`, `try-before-you-buy-perfume-santa-cruz`],
    tags: [`Education`, `Strategy`]
  },

  {
    slug: `best-vanilla-fragrances`,
    title: `Best Vanilla Fragrances You Can Sample`,
    metaTitle: `Best Vanilla Fragrances | Sample Luxury Vanilla Scents`,
    metaDescription: `Discover sophisticated vanilla fragrances beyond the sweet clichés. Sample complex, wearable vanilla scents in Santa Cruz.`,
    h1: `Best Vanilla Fragrances`,
    intro: `Vanilla in fragrance ranges from cloying sweetness to sophisticated warmth. The best vanilla fragrances balance richness with complexity, adding depth through woods, spices, or musks rather than just smelling like dessert.`,
    sections: [
      {
        heading: `Beyond Basic Vanilla`,
        body: `Skip the birthday cake vanillas. Look for fragrances where vanilla is a supporting player—adding warmth to woods, softness to spices, or creaminess to florals. These sophisticated takes feel grown-up and wearable rather than overtly sweet.`
      },
      {
        heading: `Vanilla in Santa Cruz Climate`,
        body: `Heavy vanilla can feel cloying in humidity or heat. Look for drier vanillas with tobacco, vetiver, or tonka. These work better in coastal weather, staying interesting without becoming overwhelming when the sun comes out.`
      },
      {
        heading: `Testing Vanilla Fragrances`,
        body: `Vanilla develops slowly on skin. Give it at least 30 minutes to see how it settles—initial sweetness often mellows into something more nuanced. Test in warm and cool weather to see how it performs across Santa Cruz's temperature range.`
      }
    ],
    faq: [
      { q: `Will vanilla fragrances make me smell like food?`, a: `Not if chosen well. Sophisticated vanilla fragrances smell warm and comforting without being gourmand or food-like.` },
      { q: `Are vanilla fragrances too sweet?`, a: `Depends on the fragrance. Many niche vanilla scents are dry and woody rather than sweet. We'll help you find the right level.` }
    ],
    primaryCta: { label: `Sample Vanilla Scents`, href: `/book` },
    relatedSlugs: [`best-tonka-fragrances`, `if-you-like-gourmands`, `best-sandalwood-fragrances`],
    tags: [`Notes`, `Education`]
  },

  {
    slug: `best-sandalwood-fragrances`,
    title: `Best Sandalwood Fragrances You Can Sample`,
    metaTitle: `Best Sandalwood Fragrances | Sample Woody Scents`,
    metaDescription: `Explore sophisticated sandalwood fragrances. Creamy, woody scents perfect for Santa Cruz's coastal climate.`,
    h1: `Best Sandalwood Fragrances`,
    intro: `Sandalwood is prized for its creamy, woody character—less aggressive than cedar, warmer than vetiver, and incredibly versatile. It's a cornerstone of many great fragrances and beautiful on its own.`,
    sections: [
      {
        heading: `What Sandalwood Brings`,
        body: `Real sandalwood (increasingly rare and expensive) has a soft, milky-woody quality that feels luxurious. It's grounding without being heavy, versatile enough for day or night, and works beautifully with almost any other note—citrus, florals, spices, or standing alone.`
      },
      {
        heading: `Sandalwood in Modern Fragrance`,
        body: `Due to sustainability concerns, many fragrances use Australian sandalwood or synthetic alternatives. Quality synthetics can be excellent, sometimes cleaner and more consistent than natural. Focus on how it smells, not just whether it's "real."`
      },
      {
        heading: `Why Sandalwood Works in Santa Cruz`,
        body: `Sandalwood fragrances tend to be close-wearing and sophisticated—perfect for Santa Cruz's preference for subtlety. They work year-round, complement outdoor lifestyles, and feel natural rather than performative.`
      }
    ],
    faq: [
      { q: `Do sandalwood fragrances smell masculine?`, a: `Sandalwood itself is completely unisex. How it's composed with other notes determines the overall character. We'll show you the range.` },
      { q: `Are sandalwood fragrances long-lasting?`, a: `Generally yes. Sandalwood has good longevity and creates a skin-scent effect that stays close but persistent.` }
    ],
    primaryCta: { label: `Explore Sandalwood`, href: `/book` },
    relatedSlugs: [`best-vetiver-fragrances`, `if-you-like-woody-scents`, `coastal-clean-fragrances`],
    tags: [`Notes`, `Education`]
  },

  {
    slug: `skin-scents-expensive`,
    title: `Skin Scents That Smell Expensive`,
    metaTitle: `Skin Scents That Smell Expensive | Luxury Close-Wearing Fragrances`,
    metaDescription: `Discover skin scents that project quiet luxury. Intimate, close-wearing fragrances that smell sophisticated and expensive.`,
    h1: `Skin Scents That Smell Expensive`,
    intro: `Skin scents are fragrances that smell like an elevated version of your natural skin chemistry. They're intimate, personal, and create an aura of effortless sophistication—quiet luxury in fragrance form.`,
    sections: [
      {
        heading: `What Makes a Scent "Skin-Like"`,
        body: `Skin scents use notes that mimic natural skin chemistry: soft musks, gentle woods, subtle ambers, clean florals. They enhance rather than mask your presence, creating the impression that you just naturally smell amazing. The best ones are noticed up close but never project across a room.`
      },
      {
        heading: `The Expensive Smell`,
        body: `What reads as "expensive" is quality—well-blended, using premium materials, without harsh synthetic edges. It's not about loud or obvious; it's about refinement. Expensive-smelling skin scents are polished but understated, like cashmere vs. sequins.`
      },
      {
        heading: `Perfect for Santa Cruz`,
        body: `Skin scents align perfectly with Santa Cruz's aesthetic—understated, quality-focused, and respectful of shared spaces. They work in scent-sensitive environments while still letting you enjoy fragrance personally.`
      },
      {
        heading: `How to Wear Skin Scents`,
        body: `Apply to warm areas—wrists, neck, behind ears. They develop close to skin and create an intimate scent bubble. Others will notice when they hug you, sit next to you, or lean in for conversation—it's discovery, not announcement.`
      }
    ],
    faq: [
      { q: `Will others be able to smell skin scents at all?`, a: `Yes, but only when close—within conversation distance. It's subtle but definitely present.` },
      { q: `Are skin scents the same as low projection?`, a: `Similar concepts. Skin scents specifically aim to mimic natural chemistry, while low-projection just means staying close. There's overlap but not identical.` },
      { q: `Do skin scents last?`, a: `Many have excellent longevity—they just stay close. You'll smell them on yourself throughout the day, and others will notice during close interaction.` }
    ],
    primaryCta: { label: `Find Your Skin Scent`, href: `/book` },
    relatedSlugs: [`low-projection-fragrances`, `quiet-luxury-fragrances`, `clean-scents-not-laundry`, `office-safe-fragrances`],
    tags: [`Problem/Solution`, `Scent Profile`, `Luxury`]
  },

  {
    slug: `clean-scents-not-laundry`,
    title: `Clean Scents That Don't Smell Like Laundry`,
    metaTitle: `Clean Scents That Don't Smell Like Laundry | Fresh Fragrances`,
    metaDescription: `Discover sophisticated clean fragrances beyond generic laundry musk. Fresh, airy scents with character and depth.`,
    h1: `Clean Scents That Don't Smell Like Laundry`,
    intro: `Clean fragrances can be sophisticated without smelling like generic fabric softener. The key is finding freshness with complexity—scents that feel clean and airy but have personality and depth.`,
    sections: [
      {
        heading: `The Laundry Musk Problem`,
        body: `Many "clean" fragrances rely on synthetic white musks that smell exactly like laundry detergent. While fine in your clothes, they're boring and corporate in personal fragrance. Real sophistication comes from clean scents with more interesting structures—citrus, herbs, minerals, or green notes.`
      },
      {
        heading: `What Makes Clean Interesting`,
        body: `Look for clean fragrances built on natural-smelling elements: bergamot, neroli, sea salt, cut grass, wet stone, white tea. These create freshness without the generic soapy quality. They smell like a perfect spring morning, not like Tide pods.`
      },
      {
        heading: `Clean for Santa Cruz`,
        body: `Santa Cruz's outdoor lifestyle and scent-sensitive culture make clean fragrances popular. But boring clean won't enhance your presence. Choose clean scents with character—something that feels fresh and appropriate but still distinctly you.`
      },
      {
        heading: `Testing Beyond First Spray`,
        body: `Many clean fragrances smell generic initially but develop more character on skin. Give them 20-30 minutes. The best clean scents maintain freshness while revealing subtle complexity—florals, woods, or musks that emerge over time.`
      }
    ],
    faq: [
      { q: `Are all clean fragrances light and simple?`, a: `Not at all. Some clean fragrances are quite complex, layering multiple fresh elements for depth while maintaining an overall clean character.` },
      { q: `Will clean fragrances project?`, a: `Most are designed to be close-wearing, but projection varies. We'll help you find the right balance for your needs.` },
      { q: `Can clean fragrances smell expensive?`, a: `Absolutely. Quality clean fragrances with natural ingredients and sophisticated composition smell polished and refined.` }
    ],
    primaryCta: { label: `Explore Clean Scents`, href: `/book` },
    relatedSlugs: [`coastal-clean-fragrances`, `office-safe-fragrances`, `skin-scents-expensive`],
    tags: [`Problem/Solution`, `Scent Profile`]
  },

  {
    slug: `fragrances-foggy-mornings`,
    title: `Best Fragrances for Foggy Mornings`,
    metaTitle: `Best Fragrances for Foggy Mornings | Santa Cruz Marine Layer`,
    metaDescription: `Discover fragrances that work beautifully in Santa Cruz's foggy, humid mornings. Scents that thrive in marine layer conditions.`,
    h1: `Best Fragrances for Foggy Mornings`,
    intro: `Santa Cruz's marine layer creates unique challenges for fragrance. Humidity can amplify projection, muffle certain notes, or bring out unexpected facets. The best fog-friendly fragrances work with the weather rather than fighting it.`,
    sections: [
      {
        heading: `How Fog Affects Fragrance`,
        body: `Humidity impacts how fragrances develop and project. Some notes bloom in fog (musks, certain florals), while others can feel muted (citruses) or overwhelming (heavy orientals). Understanding these dynamics helps you choose fragrances that actually work on coastal mornings.`
      },
      {
        heading: `Scents That Thrive in Fog`,
        body: `Look for fragrances with aquatic notes, soft woods, marine accords, or clean musks. These feel natural in humid coastal air. Avoid anything too sharp, too sweet, or too projecting—fog can amplify projection in strange ways, making moderate scents feel heavy.`
      },
      {
        heading: `The Fog-to-Sun Transition`,
        body: `Many days start foggy and become sunny. Choose fragrances that adapt—starting fresh and clean in marine layer, then warming nicely as the sun breaks through. Versatility is key for variable Santa Cruz weather.`
      },
      {
        heading: `Testing in Real Conditions`,
        body: `The only way to know if a fragrance works in fog is to wear it in fog. Decants let you test on actual marine layer mornings—walking along West Cliff, heading to work, experiencing how it performs in real Santa Cruz conditions.`
      }
    ],
    faq: [
      { q: `Should I apply less fragrance in fog?`, a: `Often yes. Humidity can amplify projection, so start light. You can always add more, but you can't take it back.` },
      { q: `Do aquatic fragrances smell redundant in fog?`, a: `Not if well-chosen. A good aquatic fragrance complements the marine air rather than competing with it.` },
      { q: `Can I wear winter fragrances in Santa Cruz fog?`, a: `Some work, some don't. Heavy ambers and spicy orientals can feel cloying in humidity. Lighter woody scents often work better.` }
    ],
    primaryCta: { label: `Find Your Fog-Friendly Scent`, href: `/book` },
    relatedSlugs: [`coastal-clean-fragrances`, `santa-cruz-friendly-fragrances`, `fragrances-coastal-weather`],
    tags: [`Santa Cruz`, `Weather`, `Problem/Solution`]
  },

  {
    slug: `quiet-luxury-fragrances`,
    title: `Quiet Luxury Fragrances for Santa Cruz`,
    metaTitle: `Quiet Luxury Fragrances Santa Cruz | Understated Sophisticated Scents`,
    metaDescription: `Discover quiet luxury fragrances—sophisticated, understated scents that signal quality without showing off. Perfect for Santa Cruz's aesthetic.`,
    h1: `Quiet Luxury Fragrances`,
    intro: `Quiet luxury is about quality, craftsmanship, and understated sophistication. In fragrance, it means choosing scents that smell expensive and refined without being loud or obvious—the olfactory equivalent of a perfect cashmere sweater.`,
    sections: [
      {
        heading: `What Defines Quiet Luxury in Fragrance`,
        body: `It's not about wearing the most expensive or exclusive fragrance. It's about choosing scents that are well-crafted, using quality ingredients, with sophisticated composition. They're subtle enough to not announce themselves but distinctive enough to be noticed and remembered by those who are close to you.`
      },
      {
        heading: `The Santa Cruz Quiet Luxury Aesthetic`,
        body: `Santa Cruz has always valued substance over flash—quality redwood furniture over gilt furniture, skilled craftsmanship over brand logos. This aesthetic extends to fragrance: choose scents that are beautiful but understated, interesting but not trying too hard.`
      },
      {
        heading: `Ingredients That Signal Quality`,
        body: `Natural oud (not synthetic), real iris root, high-quality sandalwood, precious absolutes. These materials smell distinctly expensive to trained noses. But it's less about individual notes and more about the overall composition—how well-blended it is, how it develops, how refined it feels.`
      },
      {
        heading: `Wearing Quiet Luxury`,
        body: `Apply thoughtfully, wear confidently, and let the fragrance speak for itself. Quiet luxury fragrances don't need heavy application—they're designed to be discovered, not broadcast. A small amount creates presence without performance.`
      }
    ],
    faq: [
      { q: `Are quiet luxury fragrances always niche?`, a: `Not always, but often. Many niche houses embody quiet luxury principles—quality over marketing, craftsmanship over commercial appeal.` },
      { q: `Do I need to spend a lot?`, a: `Not necessarily. Quiet luxury is about the fragrance's character and composition, not just price. Some affordable niche fragrances fit the aesthetic perfectly.` },
      { q: `Will these be too subtle?`, a: `They're intimate, not invisible. The goal is sophistication and subtlety, not disappearing. You'll smell wonderful—just not to everyone in a 20-foot radius.` }
    ],
    primaryCta: { label: `Explore Quiet Luxury`, href: `/book` },
    relatedSlugs: [`skin-scents-expensive`, `artsy-indie-niche-fragrances`, `santa-cruz-friendly-fragrances`],
    tags: [`Luxury`, `Scent Profile`, `Santa Cruz`]
  },

  {
    slug: `artsy-indie-niche-fragrances`,
    title: `Artsy / Indie Niche Fragrances`,
    metaTitle: `Artsy Indie Niche Fragrances | Creative Independent Perfumes`,
    metaDescription: `Discover artsy, indie niche fragrances from creative independent perfumers. Unique, artistic scents perfect for Santa Cruz's creative community.`,
    h1: `Artsy / Indie Niche Fragrances`,
    intro: `Artsy indie fragrances come from small, creative perfume houses that prioritize artistic expression over commercial appeal. They're often unusual, always interesting, and perfect for people who want something truly unique.`,
    sections: [
      {
        heading: `What Makes a Fragrance "Artsy"`,
        body: `Artsy fragrances take creative risks. They might explore unusual note combinations, challenge conventional structures, or tell unconventional stories. They're not trying to please everyone—they're artistic statements that will resonate deeply with some people and confuse others.`
      },
      {
        heading: `The Indie Perfume Movement`,
        body: `Independent perfumers often have more freedom than larger houses. They can experiment, use odd ingredients, create small batches, and follow their vision rather than focus groups. This results in fragrances that feel personal and distinctive.`
      },
      {
        heading: `Santa Cruz's Indie Spirit`,
        body: `Santa Cruz has always celebrated independent artists, craftspeople, and creative thinkers. Indie niche fragrances align perfectly with this spirit—supporting small creators, valuing craftsmanship, and choosing something unique over something ubiquitous.`
      },
      {
        heading: `Navigating Artsy Fragrances`,
        body: `Not every artsy fragrance will work for you, and that's fine. Some will be too weird, too challenging, or just not your style. The joy is in discovery—finding the unusual fragrances that speak to you specifically. Sampling is essential.`
      }
    ],
    faq: [
      { q: `Are artsy fragrances wearable or just artistic statements?`, a: `Both exist. Some artsy fragrances are challenging art pieces. Others are creative but highly wearable. We'll help you distinguish.` },
      { q: `Do indie brands have good quality?`, a: `The best indie perfumers are extremely skilled. Small batch often means more attention to quality, not less. But like any category, quality varies—we curate carefully.` },
      { q: `Are these too niche for daily wear?`, a: `Depends on the fragrance. Many indie scents are perfectly suitable for daily wear—they're just more interesting than department store offerings.` }
    ],
    primaryCta: { label: `Discover Indie Fragrances`, href: `/book` },
    relatedSlugs: [`niche-fragrance-samples-santa-cruz`, `your-first-niche-fragrance`, `quiet-luxury-fragrances`],
    tags: [`Niche`, `Creative`, `Santa Cruz`]
  },

  {
    slug: `scent-profiling-santa-cruz`,
    title: `Scent Profiling in Santa Cruz`,
    metaTitle: `Scent Profiling Santa Cruz | Personalized Fragrance Analysis`,
    metaDescription: `Discover your scent profile through personalized analysis in Santa Cruz. Learn your preferences, patterns, and perfect fragrance directions.`,
    h1: `Scent Profiling in Santa Cruz`,
    intro: `Scent profiling is a guided process to understand your fragrance preferences—what families you're drawn to, which notes resonate, what styles suit your lifestyle. It's like having a fragrance sommelier decode your taste.`,
    sections: [
      {
        heading: `What Is Scent Profiling`,
        body: `Through testing multiple fragrances across different families, we identify patterns in what appeals to you. Do you gravitate toward fresh citrus or warm woods? Light florals or rich orientals? The goal is understanding your preferences deeply enough to predict what you'll love without testing everything.`
      },
      {
        heading: `The Profiling Process`,
        body: `We use scent tubes to present fragrances from different families. As you react—what you're drawn to, what you reject, what surprises you—patterns emerge. By the end, you'll understand not just which specific fragrances you like, but why you like them and what else you might love.`
      },
      {
        heading: `Beyond Initial Reactions`,
        body: `First impressions matter, but skin development matters more. We test finalists on your skin to see how they interact with your chemistry. Your profile includes both what you're intellectually drawn to and what actually works on your skin—sometimes these differ.`
      },
      {
        heading: `Using Your Profile`,
        body: `Once you understand your scent profile, you can navigate the fragrance world more confidently. You'll know which new releases to seek out, which to skip, and how to articulate your preferences when shopping or exploring. It's fragrance literacy.`
      }
    ],
    faq: [
      { q: `How long does scent profiling take?`, a: `Usually 60-90 minutes for a thorough profile. We take our time to test systematically across multiple families.` },
      { q: `Will my profile change over time?`, a: `It can. Preferences often evolve with exposure to new scents. But core patterns tend to remain—if you love woods, you'll probably always love woods.` },
      { q: `Do I need to know fragrance terminology?`, a: `Not at all. We'll teach you the vocabulary as we go, but you can start with just "I like this" or "this isn't me."` }
    ],
    primaryCta: { label: `Get Your Profile`, href: `/book` },
    relatedSlugs: [`custom-scent-flight`, `signature-scent-finder`, `your-first-niche-fragrance`],
    tags: [`Experience`, `Custom`, `Santa Cruz`]
  },

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
