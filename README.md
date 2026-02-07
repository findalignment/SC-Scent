# Santa Cruz Scent

A modern, elegant Next.js website for Santa Cruz Scent - a premium fragrance decant and candle business.

## Features

- 🌸 **Premium Fragrance Decants** - Browse luxury fragrances in travel-friendly sizes
- 📊 **Google Sheets Integration** - Manage inventory directly from Google Sheets
- ✈️ **Flight-Ready** - TSA-approved sizes perfect for travel
- 🔄 **Auto-Caching** - 60-second revalidation for optimal performance
- 🛡️ **Robust Validation** - Zod schema validation with graceful error handling
- 📱 **Responsive Design** - Beautiful UI on all devices

## Tech Stack

- **Framework**: Next.js 16 (App Router with Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Data Source**: Google Sheets API
- **Caching**: Next.js ISR (60s revalidation)

## Project Structure

```
santa-cruz-scent/
├── src/
│   ├── app/
│   │   ├── (site)/               # Main site routes
│   │   │   ├── page.tsx          # Home
│   │   │   ├── in-stock/         # Inventory grid (server component)
│   │   │   ├── book/             # Contact page
│   │   │   └── layout.tsx        # Site layout with nav/footer
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── Hero.tsx              # Homepage hero
│   │   ├── CTA.tsx               # Call-to-action sections
│   │   ├── OfferCards.tsx        # Service offerings
│   │   ├── FlightExplainer.tsx   # TSA info
│   │   ├── InventoryGrid.tsx     # Product grid
│   │   ├── FragranceCard.tsx     # Product card
│   │   └── Badge.tsx             # Status badges
│   └── lib/
│       ├── inventory.ts          # Google Sheets data fetching
│       ├── schema.ts             # Zod schemas
│       └── constants.ts          # Site constants
└── public/
    └── images/                   # Static assets
```

## Quick Start

See [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup guide.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google account for Google Sheets

### Installation

1. Clone the repository:
```bash
git clone git@github.com:findalignment/SC-Scent.git
cd santa-cruz-scent
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Sheets:
   - Follow the [Google Sheets Setup Guide](./GOOGLE_SHEETS_SETUP.md)
   - Update `.env.local` with your credentials:
     ```env
     GOOGLE_SHEET_ID=your_sheet_id_here
     GOOGLE_SHEETS_API_KEY=your_api_key_here
     GOOGLE_SHEET_TAB=Sheet1
     ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Managing Inventory

Inventory is managed through Google Sheets. Simply edit your sheet and changes will appear within 60 seconds.

**Sheet Structure:**
- Column A: `id` - Unique identifier
- Column B: `name` - Fragrance name
- Column C: `brand` - Brand name
- Column D: `size` - Size (e.g., "10ml")
- Column E: `concentration` - Type (EDP, EDT, Parfum, etc.)
- Column F: `notes_top` - Top notes (comma-separated)
- Column G: `notes_middle` - Middle notes (comma-separated)
- Column H: `notes_base` - Base notes (comma-separated)
- Column I: `scentFamily` - Families (comma-separated)
- Column J: `gender` - Unisex, Feminine, or Masculine
- Column K: `inStock` - true/false
- Column L: `flightReady` - true/false
- Column M: `price` - Number
- Column N: `image` - Image URL (optional)
- Column O: `description` - Description (optional)

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions.

### Customization

- **Colors**: Edit Tailwind configuration for brand colors
- **Site Info**: Update `src/lib/constants.ts`
- **Content**: Modify markdown files in `src/content/copy/`
- **Styling**: Adjust Tailwind classes in components

## Features Detail

### Google Sheets Integration

- **Real-time Updates**: Changes reflect within 60 seconds
- **Robust Validation**: Invalid rows are automatically skipped
- **No Crashes**: Site never crashes due to data issues
- **Easy Management**: Update inventory without deploying code
- **Caching**: Optimized with ISR for fast load times

### Server Components

All pages use React Server Components for:
- Faster initial page loads
- Better SEO
- Reduced JavaScript bundle size
- Efficient data fetching

### Error Handling

- Invalid rows are logged and skipped
- Missing credentials return empty state gracefully
- Network errors don't crash the site
- Zod validation ensures type safety

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm run start
```

## Environment Variables

Required environment variables in `.env.local`:

```env
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SHEETS_API_KEY=your_google_api_key
GOOGLE_SHEET_TAB=Sheet1
```

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for setup instructions.

## Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Shopping cart functionality
- [ ] User accounts & order history
- [ ] Google Sheets integration for inventory
- [ ] Email service integration for booking form
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Blog/content section

## License

All rights reserved © 2026 Santa Cruz Scent

## Contact

- Email: hello@santacruzscent.com
- Instagram: [@santacruzscent](https://instagram.com/santacruzscent)

---

Built with ❤️ using Next.js and Tailwind CSS
