# Changes Made - Google Sheets Integration

This document summarizes the changes made to integrate Google Sheets as the data source.

## Core Changes

### 1. Data Fetching (`src/lib/inventory.ts`)

**Before**: Loaded data from JSON files
```typescript
const fragrances = await import('@/content/inventory/fragrances.json');
return fragrances.default;
```

**After**: Fetches from Google Sheets API
```typescript
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tab}?key=${apiKey}`;
const response = await fetch(url, {
  next: { revalidate: 60 }, // 60-second cache
});
```

**Features Added**:
- Google Sheets API integration
- Row-by-row validation with Zod
- Graceful error handling (skips invalid rows)
- 60-second ISR caching
- Helper functions for parsing array/boolean/number fields

### 2. Server Components

**Changed Files**:
- `src/app/(site)/in-stock/page.tsx` - Now a server component
- `src/app/(site)/book/page.tsx` - Simplified to server component

**Before**: Client components with `useState`, `useEffect`
```typescript
'use client';
const [data, setData] = useState([]);
useEffect(() => { /* fetch */ }, []);
```

**After**: Server components with direct async/await
```typescript
export const revalidate = 60;
const fragrances = await loadFragrances();
```

### 3. Simplified Components

**Removed**:
- `FragranceModal.tsx` - Complex modal removed for simplicity
- `InventoryFilters.tsx` - Client-side filtering removed
- `NotesPills.tsx` - Consolidated into FragranceCard

**Simplified**:
- `InventoryGrid.tsx` - Just renders grid, no state management
- `FragranceCard.tsx` - Simplified without onClick handlers

### 4. Route Simplification

**Kept Only 3 Routes**:
- `/` - Home page
- `/in-stock` - Inventory grid (server component)
- `/book` - Contact page (server component)

**Removed Routes**:
- `/scent-search` - Complex client-side search
- `/how-it-works` - Extra page
- `/parties` - Extra page
- `/pf-candle` - Extra page
- `/faq` - Extra page

### 5. Environment Configuration

**Added Files**:
- `.env.local` - Environment variables
- `.env.example` - Template for setup

**Required Variables**:
```env
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SHEETS_API_KEY=your_api_key
GOOGLE_SHEET_TAB=Sheet1
```

## File Changes Summary

### Modified Files
- `src/lib/inventory.ts` - Complete rewrite for Google Sheets
- `src/app/(site)/in-stock/page.tsx` - Server component
- `src/app/(site)/book/page.tsx` - Simplified
- `src/app/(site)/layout.tsx` - Updated navigation
- `src/components/InventoryGrid.tsx` - Simplified
- `src/components/FragranceCard.tsx` - Simplified
- `README.md` - Updated documentation

### New Files
- `GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
- `QUICKSTART.md` - 5-minute quick start
- `CHANGES.md` - This file
- `.env.local` - Environment variables
- `.env.example` - Environment template

### Removed Files
- `src/app/(site)/scent-search/` - Directory removed
- `src/app/(site)/how-it-works/` - Directory removed
- `src/app/(site)/parties/` - Directory removed
- `src/app/(site)/pf-candle/` - Directory removed
- `src/app/(site)/faq/` - Directory removed
- `src/components/FragranceModal.tsx` - Removed
- `src/components/InventoryFilters.tsx` - Removed
- `src/components/NotesPills.tsx` - Removed
- `src/content/inventory/fragrances.json` - Not needed (using Sheets)
- `src/content/inventory/pf-candle.json` - Not needed

## Architecture Benefits

### Before (JSON-based)
- ❌ Required code deployment to update inventory
- ❌ Complex client-side state management
- ❌ Large JavaScript bundles
- ❌ Static data only

### After (Google Sheets)
- ✅ Update inventory without deploying
- ✅ Simple server components
- ✅ Smaller JavaScript bundles
- ✅ ISR caching for performance
- ✅ Data updates within 60 seconds
- ✅ Never crashes on invalid data
- ✅ Better SEO with server rendering

## Performance

- **Build time**: ~4 seconds
- **Cache**: 60-second revalidation
- **Bundle size**: Reduced (no client state management)
- **First load**: Faster (server-rendered)

## Error Handling

The implementation is robust:

1. **Missing credentials** → Returns empty array, site works
2. **Network errors** → Returns empty array, site works
3. **Invalid rows** → Skipped with console warning
4. **Validation errors** → Logged, other rows still load

## Testing Checklist

- [x] Build succeeds
- [x] TypeScript compiles without errors
- [x] Environment variables configured
- [ ] Google Sheets credentials set up (user must do this)
- [ ] Test with real sheet data
- [ ] Verify 60-second cache works
- [ ] Test invalid row handling

## Migration Path

If you want to migrate existing JSON data to Google Sheets:

1. Open your existing `fragrances.json`
2. Create a Google Sheet with proper headers
3. Convert JSON array to CSV/rows
4. Paste into Google Sheet
5. Update `.env.local`
6. Test and deploy

## Support

For issues or questions:
- See [QUICKSTART.md](./QUICKSTART.md) for setup help
- See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed guide
- Check console logs for validation errors
- Verify environment variables are set correctly
