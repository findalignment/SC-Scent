# Required Images for Santa Cruz Scent Website

## Hero Section
1. **hero-bg.jpg** (1920x1080px minimum)
   - Santa Cruz beach/coastline sunset or scenic view
   - Should be moody/atmospheric with deep blues
   - Will be used as background overlay with opacity
   - Suggested: Natural Bridges, Steamer Lane, or West Cliff Drive at dusk

## Fragrance Product Images
Each fragrance in your Google Sheet should have product images. You'll need:

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
- Use brand-fragrance-name format
- Example: `tom-ford-tobacco-vanille.jpg`
- Store in: `public/fragrances/` folder

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
