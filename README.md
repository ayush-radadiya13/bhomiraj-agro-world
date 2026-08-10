# Khedut Agro — Premium Agriculture E-commerce

A premium, modern agriculture e-commerce homepage for farmers, selling seeds,
fertilizers, pesticides, crop care and farm equipment. Built with cinematic
scroll animations, a nature-inspired green/earth design system and a luxury UI.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` configuration)
- **Lenis** — smooth scrolling
- **GSAP + ScrollTrigger** — parallax & image-zoom on scroll
- **Framer Motion** — reveals, staggers, layout & page transitions
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Features

- Loading screen with animated counter
- Scroll progress bar + Lenis smooth scrolling
- Sticky navbar with blur-on-scroll, mega menu, search, cart, wishlist, account
  and a slide-in mobile menu
- Hero with parallax background zoom, floating elements and scroll indicator
- Shop by Category, Featured Products (filterable), Popular Brands marquee,
  Best Selling slider, Seasonal picks, Offers, Why Choose Us (animated counters),
  Customer Reviews marquee, Farming Tips, FAQ accordion, Contact form, Footer
- Premium product cards: glass/shadow, image zoom, hover lift, wishlist, quick
  view, gradient Add-to-Cart & Buy-Now buttons
- Magnetic & ripple-style buttons, scroll-reveal, stagger and counter animations
- Fully responsive (320px–1920px), no horizontal overflow, reduced-motion aware
- SEO metadata, semantic HTML, lazy-loaded images

## Project Structure

```
app/
├── layout.js              # fonts, SEO metadata, providers
├── page.js                # homepage composition
├── globals.css            # Tailwind v4 theme + custom utilities/animations
├── data/site.js           # categories, products, brands, reviews, tips, faqs
└── components/
    ├── SmoothScroll.jsx   # Lenis + GSAP ScrollTrigger integration
    ├── LoadingScreen.jsx
    ├── ScrollProgress.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Categories.jsx
    ├── FeaturedProducts.jsx
    ├── ProductCard.jsx
    ├── Brands.jsx
    ├── BestSelling.jsx
    ├── Seasonal.jsx
    ├── Offers.jsx
    ├── WhyChooseUs.jsx
    ├── Reviews.jsx
    ├── FarmingTips.jsx
    ├── FAQ.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── ui/                 # Reveal, MagneticButton, AnimatedCounter,
                            # SectionHeading, SmartImage
```

## Notes

- Product/section imagery uses Unsplash via a `SmartImage` component with lazy
  loading and a graceful green-gradient fallback (never shows a broken image).
- Colors and design tokens live in `app/globals.css` under `@theme`.
