# Required Images for Santa Cruz Scent Website

## Hero Section
1. **hero-bg.jpg** (1920x1080px minimum)
   - Santa Cruz beach/coastline sunset or scenic view
   - Should be moody/atmospheric with deep blues
   - Will be used as background overlay with opacity
   - Suggested: Natural Bridges, Steamer Lane, or West Cliff Drive at dusk

## Fragrance Images Status

### ✅ Fragrances WITH Images (23 found)
The following fragrance images are currently in `/public/images/fragrances/`:

1. ✅ **beach-walk.jpg** - Maison Margiela Replica Beach Walk
2. ✅ **black-afgano.jpg** - Nasomatto Black Afgano
3. ✅ **bosca-vanilla.jpg** - Bosca Vanilla
4. ✅ **coffee-break.jpg** - Maison Margiela Replica Coffee Break
5. ✅ **colonia.jpg** - Acqua di Parma Colonia
6. ✅ **guerlain-heritage.jpg.avif** - Guerlain Heritage
7. ✅ **guerlain-vetiver.jpg** - Guerlain Vetiver
8. ✅ **jazz-club.jpg** - Maison Margiela Replica Jazz Club
9. ✅ **lazy-sunday-morning.jpg** - Maison Margiela Replica Lazy Sunday Morning
10. ✅ **megamare.jpg** - Orto Parisi Megamare
11. ✅ **myrrh-tonka.jpg** - Jo Malone Myrrh & Tonka
12. ✅ **nerolia-vetiver.jpg.webp** - Guerlain Nerolia Vetiver
13. ✅ **nettare-di-sole.jpg.avif** - Guerlain Nettare di Sole
14. ✅ **orange-soleia.jpg.avif** - Guerlain Orange Soleia
15. ✅ **prada-lhomme.jpg** - Prada L'Homme
16. ✅ **rosa-pallisandro.jpg.avif** - Guerlain Rosa Palissandro
17. ✅ **rosa-rossa.jpg** - Guerlain Rosa Rossa
18. ✅ **under-the-lemon-tree.jpg** - Maison Margiela Replica Under The Lemon Tree
19. ✅ **when-the-name-stops.jpg** - Teo Cabanel When The Name Stops
20. ✅ **wood-sage-sea-salt.jpg** - Jo Malone Wood Sage & Sea Salt
21. ✅ **ysl-y.webp** - YSL Y
22. ✅ **zoologist-bat.jpg** - Zoologist Bat
23. ✅ **zoologist-chipmunk.jpg.webp** - Zoologist Chipmunk

### 📋 Next Steps - Update Google Sheets
For each fragrance image above, update your Google Sheet's "Image" column with the path:

**Format:** `/images/fragrances/filename.jpg`

**Examples:**
- Beach Walk → `/images/fragrances/beach-walk.jpg`
- Black Afgano → `/images/fragrances/black-afgano.jpg`
- Jazz Club → `/images/fragrances/jazz-club.jpg`

### ❌ Fragrances MISSING Images
To determine which fragrances are missing images, check your Google Sheet and compare against the list above. Any fragrance not listed above still needs an image.

**Common fragrances that might need images:**
- Check your current inventory in the Google Sheet
- Look for entries where the "Image" column is empty
- Download missing images from official brand sites or FragranceX.com
- Name them consistently (lowercase, hyphens, no spaces)
- Upload to `/public/images/fragrances/`

## Fragrance Product Images Guidelines

### For Each Fragrance:
- **High-quality bottle images** (600x800px minimum, square or portrait)
  - Clean white or neutral background
  - Professional product photography
  - Well-lit, sharp focus
  - Shows brand name and bottle design clearly

### Where to Get Fragrance Images:
1. **Official brand websites** (Dior, Chanel, Tom Ford, etc.)
2. **FragranceX.com** - good product shots
3. **Nordstrom.com** - high-quality images
4. **Sephora.com** - professional product photography
5. **Fragrantica.com** - community-sourced images

### Image Naming Convention:
- Use brand-fragrance-name format (lowercase, hyphens)
- Example: `tom-ford-tobacco-vanille.jpg`
- Store in: `public/images/fragrances/` folder

## Optional Enhancement Images

### About/Story Section (if you add one):
1. **owner-photo.jpg** - Personal touch, you with fragrances
2. **workspace.jpg** - Your decanting setup/workspace
3. **santa-cruz-location.jpg** - Local Santa Cruz landmark

### Party/Events Page:
1. **party-setup.jpg** - Fragrance sampling event setup
2. **party-guests.jpg** - People enjoying a fragrance party
3. **samples-display.jpg** - Array of decant samples displayed

## Image Specifications

### Technical Requirements:
- **Format**: JPG or WebP (WebP preferred for web performance)
- **Color Profile**: sRGB
- **Compression**: Optimize for web (use TinyPNG or similar)

### Size Guidelines:
- Hero background: 1920x1080px (landscape)
- Fragrance cards: 600x800px (portrait)
- Event photos: 1200x800px (landscape)

## Adding Images to Your Site

1. Place images in the `public/` folder:
   ```
   public/
   ├── hero-bg.jpg
   ├── fragrances/
   │   ├── tom-ford-tobacco-vanille.jpg
   │   ├── chanel-bleu-de-chanel.jpg
   │   └── ...
   └── events/
       ├── party-setup.jpg
       └── ...
   ```

2. Update your Google Sheet with image paths in the "Image" column:
   - Format: `/fragrances/brand-name.jpg`
   - Example: `/fragrances/dior-sauvage.jpg`

## Free Stock Photo Resources (for generic imagery):

- **Unsplash.com** - Free high-quality photos
- **Pexels.com** - Free stock photos
- **Pixabay.com** - Free images and videos

### Search Terms for Stock Photos:
- "luxury perfume bottle"
- "fragrance collection"
- "Santa Cruz beach sunset"
- "coastal california"
- "perfume photography"
- "luxury lifestyle"

## Priority Order:

### Must Have (Essential):
1. ✅ Hero background image (Santa Cruz scene)
2. ✅ Top 10-20 fragrance bottle images

### Nice to Have:
3. Complete fragrance image library
4. Event/party photos
5. About/story images

## Tips for Success:

1. **Consistency**: Try to maintain similar photography style across all images
2. **Compression**: Always optimize images before uploading (aim for <200KB per image)
3. **Alt Text**: Add descriptive alt text for accessibility
4. **Licensing**: Only use images you have rights to use
5. **Brand Guidelines**: Respect brand imagery guidelines when using official photos
