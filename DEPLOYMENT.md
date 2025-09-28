# ElementPay Landing Page - Deployment Guide

## 🚀 Quick Start

The landing page is now fully functional with placeholder assets. To run:

```bash
npm run dev
```

probe

Visit `http://localhost:3000` to see the landing page.

## 📱 What's Been Built

### ✅ Complete Sections
1. **Hero Section** - Interactive map with payment pins, animated text, CTAs
2. **Partners Strip** - Logo carousel of partner companies
3. **Services Grid** - 4 service cards with icons and descriptions
4. **Use Cases** - Alternating image/text layout for different industries
5. **Impact & Testimonials** - Purple section with stats and rotating testimonials
6. **Countries & Trust** - Partner logos and country flags
7. **Features** - Simple feature highlights with icons
8. **Team** - Team member profiles with social links
9. **CTA Banner** - Final call-to-action with gradient background
10. **Footer** - Complete footer with links and social icons

### 🎨 Design Features
- **Responsive Design**: Mobile-first with tablet and desktop breakpoints
- **Modern UI**: Purple gradient theme (#6C4BF2 primary)
- **Animations**: Slide-in effects, hover states, testimonial carousel
- **Typography**: Inter font with Playfair Display accent
- **Accessibility**: Proper alt text, ARIA labels, keyboard navigation

### 🖼️ Asset Structure
All placeholder assets are created and organized in:
- `/public/images/hero-map.svg` - Main hero map
- `/public/images/pins/` - Payment pin icons
- `/public/images/partners/` - Partner logos
- `/public/images/icons/` - Service icons
- `/public/images/usecases/` - Use case images
- `/public/images/flags/` - Country flags
- `/public/images/team/` - Team member photos

## 🔄 Replacing Placeholders

### Priority Assets to Replace:
1. **Hero Map** (`/public/images/hero-map.svg`)
   - Replace with high-quality Africa map illustration
   - Recommended size: 1600x1200px
   - Format: PNG or SVG

2. **Team Photos** (`/public/images/team/*.svg`)
   - Replace with actual headshots (600x600px)
   - Format: JPG or PNG
   - Crop to square, centered on face

3. **Use Case Photos** (`/public/images/usecases/*.svg`)
   - Replace with relevant lifestyle/business photos
   - Size: 1200x800px
   - High-quality, professional images

4. **Partner Logos** (`/public/images/partners/*.svg`)
   - Replace with actual partner brand assets
   - Maintain consistent sizing (~120px width)
   - Use official brand colors

### Pin Positioning
To adjust map pin positions, edit `src/components/Hero.tsx`:

```typescript
const pins = [
  { top: '38%', left: '63%' }, // Kenya - adjust percentages
  { top: '36%', left: '54%' }, // Nigeria
  // ... etc
];
```

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Setup
1. **Fonts**: Google Fonts (Inter, Playfair Display) loaded via CSS
2. **Images**: All optimized through Next.js Image component
3. **Styles**: Tailwind CSS with custom CSS variables

### Performance Optimizations
- ✅ Image lazy loading (except hero map)
- ✅ Component-based architecture
- ✅ CSS custom properties for theming
- ✅ Responsive images with `next/image`

## 📋 Content Updates

### Easy Text Updates
Most content can be updated by editing the component files:
- Hero copy: `src/components/Hero.tsx`
- Services: `src/components/ServicesGrid.tsx`
- Team info: `src/components/Team.tsx`
- Footer links: `src/components/Footer.tsx`

### Color Theme Changes
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --primary-purple: #6C4BF2;    /* Main brand color */
  --secondary-purple: #3A2BD5;   /* Darker variant */
  --background: #F6F7FB;         /* Page background */
  /* ... etc */
}
```

## 🔧 Technical Details

### Dependencies
- **Next.js 15.5.4** - React framework
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety (components)
- **Framer Motion** - Future animations (installed)

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Mobile Responsiveness
- Mobile: < 640px (single column)
- Tablet: 640px - 1023px (adapted layouts)
- Desktop: ≥ 1024px (full multi-column)

## 📞 Support

The landing page is production-ready with placeholder content. Simply replace the placeholder assets with your actual brand materials and deploy!

Key files to customize:
1. `src/components/Hero.tsx` - Hero content and pin positions
2. `src/app/globals.css` - Colors and styling
3. `/public/images/` - All visual assets
4. Component files for text content updates
