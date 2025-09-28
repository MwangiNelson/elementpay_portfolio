# ElementPay Portfolio Landing Page

A modern, responsive Next.js landing page for ElementPay's stablecoin payment infrastructure.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, professional design with purple gradient theme
- **Interactive Elements**: Hover effects, animations, and testimonial carousel
- **Optimized Images**: Next.js Image component with proper optimization
- **Componentized**: Modular component structure for easy maintenance

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.js            # Root layout
│   └── page.js              # Main page composition
└── components/
    ├── Hero.tsx             # Hero section with map and pins
    ├── Partners.tsx         # Partner logo strip
    ├── ServicesGrid.tsx     # Services grid (4 cards)
    ├── UseCases.tsx         # Use cases with alternating layout
    ├── Impact.tsx           # Impact stats and testimonials
    ├── Countries.tsx        # Countries and trust section
    ├── Features.tsx         # Features with circular icons
    ├── Team.tsx             # Team member profiles
    ├── CTA.tsx              # Call-to-action banner
    └── Footer.tsx           # Footer with links
```

## Required Images

Place the following images in the specified directories:

### Hero Map and Pins
- `/public/images/hero-map.png` (1600x1200) - Africa map illustration
- `/public/images/pins/pin-kenya-usdc.svg` - Kenya USDC pin
- `/public/images/pins/pin-nigeria-usdt.svg` - Nigeria USDT pin  
- `/public/images/pins/pin-ghana-usdc.svg` - Ghana USDC pin
- `/public/images/pins/pin-southafrica-eth.svg` - South Africa ETH pin
- `/public/images/pins/pin-egypt-tether.svg` - Egypt USDT pin

### Partner Logos
- `/public/images/partners/partner-base.svg`
- `/public/images/partners/partner-starknet.svg`
- `/public/images/partners/partner-scroll.svg`
- `/public/images/partners/partner-worldpay.svg`
- `/public/images/partners/partner-lisk.svg`

### Service Icons
- `/public/images/icons/services-01.svg` - No Internet icon
- `/public/images/icons/services-02.svg` - Payouts icon
- `/public/images/icons/services-03.svg` - On/Off ramping icon
- `/public/images/icons/services-04.svg` - Developer APIs icon

### Use Case Photos
- `/public/images/usecases/agriculture.jpg` (1200x800) - Agriculture photo
- `/public/images/usecases/payroll.jpg` (1200x800) - Payroll/office photo
- `/public/images/usecases/merchants.jpg` (1200x800) - Merchant/retail photo
- `/public/images/usecases/gaming.jpg` (1200x800) - Gaming/digital photo

### Country Flags
- `/public/images/flags/ke.png` (28x20) - Kenya flag
- `/public/images/flags/ng.png` (28x20) - Nigeria flag
- `/public/images/flags/gh.png` (28x20) - Ghana flag
- `/public/images/flags/za.png` (28x20) - South Africa flag
- `/public/images/flags/ug.png` (28x20) - Uganda flag

### Team Photos
- `/public/images/team/team-joseph.jpg` (600x600) - Joseph Mwangi
- `/public/images/team/team-abey.jpg` (600x600) - Abey Osam
- `/public/images/team/team-bilvon.jpg` (600x600) - Bilvon Wanjala
- `/public/images/team/team-patrick.jpg` (600x600) - Patrick Kimani

## Pin Positioning

The hero map pins are positioned using percentage-based absolute positioning:

```typescript
const pins = [
  { top: '38%', left: '63%' }, // Kenya
  { top: '36%', left: '54%' }, // Nigeria
  { top: '47%', left: '49%' }, // Ghana
  { top: '72%', left: '67%' }, // South Africa
  { top: '25%', left: '73%' }  // Egypt
];
```

To adjust pin positions:
1. Open `src/components/Hero.tsx`
2. Modify the `top` and `left` percentage values in the `pins` array
3. Test positioning with your specific map image

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Styling

The project uses:
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Custom Properties**: For consistent theming
- **Inter Font**: Primary typography
- **Playfair Display**: Decorative accent font

### Color Palette
- Primary Purple: `#6C4BF2`
- Secondary Purple: `#3A2BD5`
- Background: `#F6F7FB`
- Text: `#0F172A`
- Muted Text: `#6B7280`

## Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1023px`
- Desktop: `≥ 1024px`

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

Private project for ElementPay.