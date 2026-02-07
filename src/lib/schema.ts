import { z } from 'zod';

// Size availability schema
export const SizeAvailabilitySchema = z.object({
  '1ml': z.number().default(0),
  '2ml': z.number().default(0),
  '3ml': z.number().default(0),
  '5ml': z.number().default(0),
  '10ml': z.number().default(0),
});

export type SizeAvailability = z.infer<typeof SizeAvailabilitySchema>;

// Fragrance schema for type safety and validation
export const FragranceSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  sizes: SizeAvailabilitySchema,
  concentration: z.string().optional(), // Made optional since not all entries have it
  notes: z.object({
    top: z.array(z.string()),
    middle: z.array(z.string()),
    base: z.array(z.string()),
  }),
  scentFamily: z.array(z.string()).default([]), // Optional, default empty
  gender: z.enum(['Unisex', 'Feminine', 'Masculine']).default('Unisex'),
  inStock: z.boolean(), // Computed from sizes
  flightReady: z.boolean(), // All sizes ≤10ml are flight ready
  image: z.string().optional(),
  description: z.string().optional(),
});

export type Fragrance = z.infer<typeof FragranceSchema>;

// Filter options schema
export const FilterOptionsSchema = z.object({
  brands: z.array(z.string()),
  scentFamilies: z.array(z.string()),
  concentrations: z.array(z.string()),
  genders: z.array(z.string()),
  inStockOnly: z.boolean().optional(),
  flightReadyOnly: z.boolean().optional(),
});

export type FilterOptions = z.infer<typeof FilterOptionsSchema>;

// Sort options (removed price since it's not in the sheet)
export const SortOption = z.enum(['name-asc', 'name-desc', 'brand-asc', 'brand-desc']);
export type SortOption = z.infer<typeof SortOption>;
