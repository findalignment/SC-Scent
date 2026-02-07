# Quick Start Guide

Get your Santa Cruz Scent site running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Google Sheets

1. **Create a new Google Sheet** at [sheets.google.com](https://sheets.google.com)

2. **Add the header row** (Row 1):
   ```
   id | name | brand | size | concentration | notes_top | notes_middle | notes_base | scentFamily | gender | inStock | flightReady | price | image | description
   ```

3. **Add sample data** (Row 2):
   ```
   1 | Sauvage | Dior | 10ml | EDP | Bergamot,Pepper | Lavender,Geranium | Ambroxan,Vanilla | Aromatic,Fresh | Masculine | true | true | 25 | /images/shop/dior.jpg | Bold and fresh
   ```

4. **Make the sheet public**:
   - Click "Share" → "Change to anyone with the link"
   - Set permission to "Viewer"

5. **Get your Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
   ```

## Step 3: Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Google Sheets API**:
   - APIs & Services → Library
   - Search "Google Sheets API"
   - Click Enable
4. Create credentials:
   - APIs & Services → Credentials
   - Create Credentials → API Key
   - Copy the API key

## Step 4: Configure Environment Variables

Update `.env.local`:

```env
GOOGLE_SHEET_ID=paste_your_sheet_id_here
GOOGLE_SHEETS_API_KEY=paste_your_api_key_here
GOOGLE_SHEET_TAB=Sheet1
```

## Step 5: Run the Site

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Verify It Works

1. Go to [http://localhost:3000/in-stock](http://localhost:3000/in-stock)
2. You should see your fragrance(s) from the Google Sheet
3. Changes to the sheet appear within 60 seconds

## Common Issues

### "No fragrances available"
- ✅ Check your `.env.local` has the correct values
- ✅ Verify the sheet is publicly viewable
- ✅ Make sure the tab name matches `GOOGLE_SHEET_TAB`

### "Build error about credentials"
- ✅ The env vars are only available at runtime, not build time (this is normal)
- ✅ The site will work when you run `npm run dev`

### Some fragrances don't appear
- ✅ Check browser console for validation errors
- ✅ Ensure required fields are filled: id, name, brand, size, concentration, gender, inStock, flightReady
- ✅ Boolean fields must be: true, false, yes, no, 1, or 0

## Next Steps

- Add more fragrances to your Google Sheet
- Customize the homepage in `src/app/(site)/page.tsx`
- Update site info in `src/lib/constants.ts`
- Add images to `/public/images/`

## Need More Help?

- See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions
- Check [README.md](./README.md) for full documentation

---

Happy building! 🌸
