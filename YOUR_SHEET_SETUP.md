# Your Google Sheet Setup

Your sheet is already configured at:
**https://docs.google.com/spreadsheets/d/1mxCVtrQWHtoGDS_8L8A6WUPtKSnEUs4AQxV8W35wkVI/**

## ✅ Sheet Structure (Already Matches!)

Your current columns:
- **Column A**: Fragrance Name
- **Column B**: Fragrance Brand  
- **Column C**: 1ml available (stock quantity)
- **Column D**: 2ml available (stock quantity)
- **Column E**: 3ml available (stock quantity)
- **Column F**: 5ml available (stock quantity)
- **Column G**: 10ml available (stock quantity)
- **Column H**: Concentration (optional)
- **Column I**: Notes top (comma-separated)
- **Column J**: Notes middle (comma-separated)
- **Column K**: Notes base (comma-separated)
- **Column L**: Image (optional)
- **Column M**: Description (optional)

## 🔑 Next Step: Add Your API Key

1. **Get Google Sheets API Key**: Follow steps in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

2. **Update `.env.local`**:
   ```env
   GOOGLE_SHEET_ID=1mxCVtrQWHtoGDS_8L8A6WUPtKSnEUs4AQxV8W35wkVI
   GOOGLE_SHEETS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
   GOOGLE_SHEET_TAB=Sheet1
   ```

3. **Run the site**:
   ```bash
   npm run dev
   ```

4. **Visit**: http://localhost:3000/in-stock

## 📊 How It Works

### Stock Quantities
- The numbers in columns C-G represent how many of each size you have in stock
- Example: `5` in the "10ml available" column = 5 units of 10ml available
- If a size shows `0` or is empty, it won't display as available

### Automatic Calculations
- **In Stock**: Automatically set to `true` if ANY size has quantity > 0
- **Flight Ready**: All decant sizes (≤10ml) are automatically flight-ready

### What Gets Displayed on Each Card

On your website, each fragrance card will show:
1. Fragrance name & brand
2. Available sizes with stock counts (e.g., "10ml (5)")
3. Concentration (if you filled it in)
4. Notes (top, middle, base)
5. Description (if you filled it in)
6. In stock badge

### Example Data Row

From your sheet (Row 2 - Colonia):
```
Colonia | Acqua Di Parma | 6 | 5 | 4 | 5 | 5 | (concentration) | Calabrian Bergamot, Sweet Orange, Lemon | Lavender, Rosemary, Rose | Vetiver, Sandalwood, Patchouli | (image) | Classic Italian cologne...
```

This displays as:
- **Name**: Colonia
- **Brand**: Acqua Di Parma
- **Available**: 1ml (6), 2ml (5), 3ml (4), 5ml (5), 10ml (5)
- **Notes**: Top: Calabrian Bergamot, Sweet Orange, Lemon...
- **Status**: ✅ In Stock, ✈️ Flight Ready

## 🎨 Customization Tips

### To add a new fragrance:
Just add a new row with the same column structure!

### To update stock:
Simply change the numbers in the size availability columns (C-G).
Changes appear on the website within 60 seconds.

### To mark something out of stock:
Set all size quantities (columns C-G) to `0` or leave empty.

### Optional fields:
- **Concentration** (Column H): Can be left empty
- **Image** (Column L): Path to image or leave empty
- **Description** (Column M): Can be left empty

## 🚨 Important Notes

1. **First row is headers** - Don't delete row 1!
2. **Name & Brand required** - These two fields must have values
3. **Notes format**: Comma-separated (e.g., "Rose, Jasmine, Lily")
4. **Numbers only** in size columns (C-G)
5. **Sheet must be public** - Set to "Anyone with the link can view"

## ✨ You're Ready!

Your sheet structure is perfect! Just:
1. Get your Google Sheets API key
2. Add it to `.env.local`
3. Run `npm run dev`
4. Your 60 fragrances will appear automatically!

---

Need help? Check [QUICKSTART.md](./QUICKSTART.md) or [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
