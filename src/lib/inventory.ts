import { FragranceSchema, type Fragrance, type FilterOptions, type SortOption } from './schema';

/**
 * Fetch fragrances from Google Sheets
 * Uses server-side caching with 60s revalidation
 */
export async function loadFragrances(): Promise<Fragrance[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const tab = process.env.GOOGLE_SHEET_TAB || 'Sheet1';

  if (!sheetId || !apiKey) {
    console.error('Missing Google Sheets credentials');
    return [];
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tab}?key=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error('Failed to fetch from Google Sheets:', response.statusText);
      return [];
    }

    const data = await response.json();
    const rows = data.values || [];

    if (rows.length < 2) {
      console.warn('No data found in Google Sheet');
      return [];
    }

    // First row is headers
    const headers = rows[0];
    const fragrances: Fragrance[] = [];

    // Process each data row
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      
      try {
        const name = row[0] || '';
        const brand = row[1] || '';
        
        // Skip rows without name or brand
        if (!name || !brand) continue;
        
        // Parse size availability (columns C-G: 1ml, 2ml, 3ml, 5ml, 10ml)
        const sizes = {
          '1ml': parseNumberField(row[2]) || 0,
          '2ml': parseNumberField(row[3]) || 0,
          '3ml': parseNumberField(row[4]) || 0,
          '5ml': parseNumberField(row[5]) || 0,
          '10ml': parseNumberField(row[6]) || 0,
        };
        
        // Check if any size is in stock
        const inStock = Object.values(sizes).some(qty => qty > 0);
        
        // All decant sizes are flight-ready (≤100ml)
        const flightReady = true;
        
        // Map row to fragrance object based on actual sheet structure
        const fragranceData = {
          id: `${brand.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          name,
          brand,
          sizes,
          concentration: row[7] || undefined, // Column H
          notes: {
            top: parseArrayField(row[8]),     // Column I
            middle: parseArrayField(row[9]),  // Column J
            base: parseArrayField(row[10]),   // Column K
          },
          scentFamily: [], // Not in sheet, empty array
          gender: 'Unisex' as const, // Not in sheet, default to Unisex
          inStock,
          flightReady,
          image: row[11] || undefined,      // Column L
          description: row[12] || undefined, // Column M
        };

        // Validate with Zod - skip invalid rows
        const validated = FragranceSchema.safeParse(fragranceData);
        
        if (validated.success) {
          fragrances.push(validated.data);
        } else {
          console.warn(`Skipping invalid row ${i + 1} (${name}):`, validated.error.issues);
        }
      } catch (error) {
        console.warn(`Error processing row ${i + 1}:`, error);
        // Continue to next row - site never crashes
      }
    }

    return fragrances;
  } catch (error) {
    console.error('Error loading fragrances from Google Sheets:', error);
    return []; // Return empty array instead of crashing
  }
}

/**
 * Parse comma-separated string into array
 */
function parseArrayField(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0);
}

/**
 * Parse boolean field (handles "true", "yes", "1", etc.)
 */
function parseBooleanField(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.toLowerCase().trim();
  return ['true', 'yes', '1', 'y'].includes(normalized);
}

/**
 * Parse number field
 */
function parseNumberField(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

/**
 * Filter fragrances based on provided options
 */
export function filterFragrances(
  fragrances: Fragrance[],
  filters: Partial<FilterOptions>
): Fragrance[] {
  return fragrances.filter((fragrance) => {
    // Brand filter
    if (filters.brands && filters.brands.length > 0) {
      if (!filters.brands.includes(fragrance.brand)) return false;
    }

    // Scent family filter
    if (filters.scentFamilies && filters.scentFamilies.length > 0) {
      const hasMatchingFamily = fragrance.scentFamily.some((family) =>
        filters.scentFamilies!.includes(family)
      );
      if (!hasMatchingFamily) return false;
    }

    // Concentration filter
    if (filters.concentrations && filters.concentrations.length > 0) {
      if (!fragrance.concentration || !filters.concentrations.includes(fragrance.concentration)) return false;
    }

    // Gender filter (all are Unisex by default, so this filter may not be useful)
    if (filters.genders && filters.genders.length > 0) {
      if (!filters.genders.includes(fragrance.gender)) return false;
    }

    // In stock filter
    if (filters.inStockOnly && !fragrance.inStock) return false;

    // Flight ready filter
    if (filters.flightReadyOnly && !fragrance.flightReady) return false;

    return true;
  });
}

/**
 * Sort fragrances based on sort option
 */
export function sortFragrances(
  fragrances: Fragrance[],
  sortOption: SortOption
): Fragrance[] {
  const sorted = [...fragrances];

  switch (sortOption) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'brand-asc':
      return sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    case 'brand-desc':
      return sorted.sort((a, b) => b.brand.localeCompare(a.brand));
    default:
      return sorted;
  }
}

/**
 * Search fragrances by query string
 */
export function searchFragrances(
  fragrances: Fragrance[],
  query: string
): Fragrance[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return fragrances;

  return fragrances.filter((fragrance) => {
    // Search in name, brand, notes, scent families
    const searchableText = [
      fragrance.name,
      fragrance.brand,
      ...fragrance.notes.top,
      ...fragrance.notes.middle,
      ...fragrance.notes.base,
      ...fragrance.scentFamily,
      fragrance.description || '',
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(lowerQuery);
  });
}

/**
 * Get unique values for filter options
 */
export function getFilterOptions(fragrances: Fragrance[]) {
  const brands = Array.from(new Set(fragrances.map((f) => f.brand))).sort();
  const scentFamilies = Array.from(
    new Set(fragrances.flatMap((f) => f.scentFamily))
  ).sort();
  const concentrations = Array.from(
    new Set(fragrances.map((f) => f.concentration))
  ).sort();
  const genders = Array.from(new Set(fragrances.map((f) => f.gender))).sort();

  return {
    brands,
    scentFamilies,
    concentrations,
    genders,
  };
}

/**
 * Get all unique notes from fragrances
 */
export function getAllNotes(fragrances: Fragrance[]): {
  top: string[];
  middle: string[];
  base: string[];
  all: string[];
} {
  const topNotes = new Set<string>();
  const middleNotes = new Set<string>();
  const baseNotes = new Set<string>();

  fragrances.forEach((fragrance) => {
    fragrance.notes.top.forEach((note) => topNotes.add(note));
    fragrance.notes.middle.forEach((note) => middleNotes.add(note));
    fragrance.notes.base.forEach((note) => baseNotes.add(note));
  });

  const allNotes = new Set([...topNotes, ...middleNotes, ...baseNotes]);

  return {
    top: Array.from(topNotes).sort(),
    middle: Array.from(middleNotes).sort(),
    base: Array.from(baseNotes).sort(),
    all: Array.from(allNotes).sort(),
  };
}
