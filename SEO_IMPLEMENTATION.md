# SEO Implementation Guide — Bhumiraj Agro World

**Project:** `agro-mohit` (Next.js App Router)  
**Live domain (metadataBase):** `https://bhumirajagroworld.com`  
**Brand:** Bhumiraj Agro World  
**Stack:** Next.js 16 App Router · React · no `next-seo` / schema packages yet  

This file is a **Cursor-ready implementation plan**. Follow phases in order. Prefer Next.js Metadata API (`metadata` / `generateMetadata`) over third-party SEO libs unless a clear need appears.

---

## Table of contents

1. [Complete pages & routes](#1-complete-pages--routes)
2. [Which pages need SEO optimization](#2-which-pages-need-seo-optimization)
3. [Metadata to add per page](#3-metadata-to-add-per-page)
4. [Product & category SEO](#4-product--category-seo)
5. [Technical SEO improvements](#5-technical-seo-improvements)
6. [Structured data opportunities](#6-structured-data-opportunities)
7. [Internal linking improvements](#7-internal-linking-improvements)
8. [Image SEO improvements](#8-image-seo-improvements)
9. [Performance SEO improvements](#9-performance-seo-improvements)
10. [Priority-wise implementation plan](#10-priority-wise-implementation-plan)
11. [File-by-file checklist for Cursor](#11-file-by-file-checklist-for-cursor)

---

## 1. Complete pages & routes

### Static / indexable routes

| Route | File | Render | Current metadata |
|-------|------|--------|------------------|
| `/` | `app/page.js` | Server | Inherits root only (no page override) |
| `/about` | `app/about/page.js` | **Client** (`"use client"`) | None (cannot export `metadata`) |
| `/contact` | `app/contact/page.js` | **Client** | None |
| `/products` | `app/products/page.js` | Server + `ProductsClient` | Title + description |
| `/categories` | `app/categories/page.js` | Server | Title + description |
| `/privacy` | `app/privacy/page.js` | Server | Title + description |
| `/terms` | `app/terms/page.js` | Server | Title + description |
| `/sections` | `app/sections/page.js` | Redirect → `/` | N/A — exclude from sitemap |

### Dynamic routes (SSG via `generateStaticParams`)

| Route pattern | File | Count | Current metadata |
|---------------|------|-------|------------------|
| `/categories/[slug]` | `app/categories/[slug]/page.js` | 4 | `generateMetadata` (name + description) |
| `/products/[slug]` | `app/products/[slug]/page.js` | 78 | `generateMetadata` — **broken description** (`shortDescription` missing) |

### Category slugs

| Slug | Name |
|------|------|
| `insecticides` | Insecticides |
| `fungicides` | Fungicides |
| `herbicides` | Herbicides |
| `pgr` | PGR |

### Product slugs (78) — all must appear in sitemap

```
destroyer, fipron-3g, furo-3g, hydra-4g, hydronil, hulk-80, kung-fu, laava,
kingdom, linux, leo-gold, lupin, neem-cure, neemora, nilprid, officer,
pro-fighter, pro-mite, profin-super, lorence, amazon, azoca, azoden,
bhumi-cure, difence, heeramani, bhumi-gold, helix, justin-50, kaptan,
hexon-5, poko, safal, mr-m-45, sulfo-40, zydus-80, safron-80, cleanser,
fire-58, glychin-41, bhumi-71, oxy-goal, opera, perasut, toragon-super,
trandy-star, pendulam, pilot, gibbrol, finix, ace-gaurd, acefen, arjun,
balwan, benzonil, bhoomi-pride, bomber, br-conflic, bsf, buffet, clomax-50,
clomax, cobra-50, conflic, corzin, cyprus-10, cyprus-25, danger, deltin-11,
fimida, promectin, proton, raxxa-plus, shatru, thiovita, xolo-50, xplod,
br-azoca
```

Counts by category: Insecticides **47** · Fungicides **18** · Herbicides **10** · PGR **3**.

### Shared chrome (affects every page)

| Piece | File | SEO impact |
|-------|------|------------|
| Root layout + global metadata | `app/layout.js` | Site defaults, OG base, `lang`, fonts |
| Navbar | `app/components/Navbar.jsx` | Primary nav links |
| Footer | `app/components/Footer.jsx` | Secondary links, NAP |
| CTA | `app/components/CTA.jsx` | Products / contact links |
| FloatingActions | `app/components/FloatingActions.jsx` | Conversion only |

### Missing SEO infrastructure (create these)

| File | Purpose |
|------|---------|
| `app/sitemap.js` | Dynamic XML sitemap |
| `app/robots.js` | Crawl rules + sitemap URL |
| `app/not-found.js` | Soft-404 UX + noindex if needed |
| Optional: `app/opengraph-image.tsx` or `/public/og-default.jpg` | Default share image |
| Optional: `public/manifest.webmanifest` | PWA / install hints (low priority) |

---

## 2. Which pages need SEO optimization

### Priority P0 — fix / add immediately

| Page | Why |
|------|-----|
| `/products/[slug]` | Meta description is `undefined` (`product.shortDescription` does not exist). No OG image, canonical, or Product schema. Listing UIs do not link here → weak crawl discovery. |
| Site-wide | No `sitemap.js` / `robots.js`. |
| `/about`, `/contact` | Client-only pages → no unique titles/descriptions. |
| `/` | No page-level metadata; OG copy in layout mentions “seeds…” inconsistently with crop-protection positioning. |
| Product cards / grids | Popup-only — crawlers never see `/products/[slug]` from HTML. |

### Priority P1 — strengthen rankings & CTR

| Page | Why |
|------|-----|
| `/products` | Thin title (“Products”); add richer description, OG, H1 alignment, filterable category links as crawlable `Link`s. |
| `/categories` + `/categories/[slug]` | Expand titles for intent (“Buy Insecticides in Gujarat…” style — keep brand-safe); add breadcrumbs + ItemList schema. |
| Root `layout.js` | Complete OG (`url`, `images`), Twitter cards, `robots`, `alternates.canonical` pattern, keywords cleanup. |
| Product detail content | Descriptions are often generic boilerplate — unique copy per SKU helps rankings. |

### Priority P2 — polish

| Page | Why |
|------|-----|
| `/privacy`, `/terms` | Fine for now; slightly richer descriptions + `noindex` optional if you don’t want them ranking. |
| `/sections` | Ensure robots ignore; already redirects. |
| Image pipeline | `SmartImage` uses raw `<img>` — not `next/image`. |

### Do not optimize as landing pages

- `/sections` (redirect only)
- Popup modals (`ProductDetailsPopup`) — not routes; keep UX, but add crawlable links beside them

---

## 3. Metadata to add per page

### Conventions (use everywhere)

```js
// Pattern for static pages
export const metadata = {
  title: "…",                    // becomes `%s | Bhumiraj Agro World` via template
  description: "…",              // 140–160 chars, unique, includes primary keyword
  alternates: { canonical: "/path" },
  openGraph: {
    title: "…",
    description: "…",
    url: "/path",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "…" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "…",
    description: "…",
    images: ["/og-default.jpg"],
  },
};
```

For product pages, set `openGraph.type` to `"website"` (or use Product JSON-LD; Open Graph product type is limited in Next metadata). Prefer **JSON-LD Product** for commerce semantics.

### Root — `app/layout.js`

**Enhance existing `metadata`:**

| Field | Recommended value |
|-------|-------------------|
| `title.default` | Keep: `Bhumiraj Agro World — Growing Better Harvests Together` |
| `description` | Align with actual catalog (crop protection + PGR), include Rajkot/Gujarat if local SEO matters |
| `openGraph.url` | `https://bhumirajagroworld.com` |
| `openGraph.images` | Default brand OG image |
| `openGraph.description` | Match `description` (fix mismatch: currently mentions seeds heavily) |
| `twitter.card` | `summary_large_image` |
| `robots` | `{ index: true, follow: true, googleBot: { … } }` |
| `alternates.canonical` | `/` (or set only on pages) |
| `verification` | Add when Search Console codes exist |

Also set `<html lang="en">` → consider `lang="en-IN"` if content is India-focused.

### Home — `app/page.js`

Add:

```js
export const metadata = {
  title: {
    absolute: "Bhumiraj Agro World — Growing Better Harvests Together",
  },
  description:
    "Premium insecticides, fungicides, herbicides & PGR from Bhumiraj Agro World, Rajkot. Enquire for crop protection solutions trusted by farmers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bhumiraj Agro World — Growing Better Harvests Together",
    description:
      "Crop protection and plant growth products for better harvests. Based in Rajkot, Gujarat.",
    url: "/",
  },
};
```

Ensure Hero has a single clear **H1** (already present via `Hero`).

### About — split client page for metadata

**Refactor pattern (required):**

1. `app/about/page.js` → **Server** component that exports `metadata` and renders `<AboutClient />`
2. Move current UI to `app/about/AboutClient.jsx` (`"use client"`)

**Metadata:**

| Field | Value |
|-------|-------|
| title | `About Us` or `About Bhumiraj Agro World` |
| description | Mission/vision + Rajkot location + crop protection focus (~155 chars) |
| canonical | `/about` |

### Contact — same split pattern

1. `app/contact/page.js` → server + metadata  
2. `app/contact/ContactClient.jsx` → current form UI  

| Field | Value |
|-------|-------|
| title | `Contact Us` |
| description | Include phone, WhatsApp, Rajkot address for local SEO |
| canonical | `/contact` |

### Products index — `app/products/page.js`

| Field | Recommended |
|-------|-------------|
| title | `Agricultural Products` or `Crop Protection Products` |
| description | Keep/enhance current; mention 4 categories + enquiry CTA |
| canonical | `/products` |
| OG image | Brand or collage |

### Product detail — `app/products/[slug]/page.js`

**Fix `generateMetadata` immediately:**

```js
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found", robots: { index: false } };

  const description =
    product.shortDescription ||
    `${product.name} (${product.composition}) — ${product.category} from Bhumiraj Agro World. ${product.description.slice(0, 120)}…`;

  const url = `/products/${product.slug}`;
  const image = product.image;

  return {
    title: `${product.name} | ${product.category}`,
    description: description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title: product.name,
      description: description.slice(0, 160),
      url,
      images: [{ url: image, alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: description.slice(0, 160),
      images: [image],
    },
  };
}
```

**Also add** `shortDescription` to catalog data (see §4).

### Categories index — `app/categories/page.js`

| Field | Recommended |
|-------|-------------|
| title | `Product Categories` |
| description | Current is OK; optionally add “Rajkot / Gujarat” |
| canonical | `/categories` |

### Category detail — `app/categories/[slug]/page.js`

Enhance `generateMetadata`:

| Field | Example (Insecticides) |
|-------|------------------------|
| title | `Insecticides` → `Insecticides for Crop Protection` |
| description | Use `category.description`; append product count |
| canonical | `/categories/insecticides` |
| OG image | `category.image` |

### Privacy / Terms

Keep titles; enrich descriptions. Optional:

```js
robots: { index: false, follow: true }
```

only if you prefer them out of SERPs.

---

## 4. Product & category SEO

### Data model upgrades — `app/data/catalogProducts.js`

Add fields (script or manual):

| Field | Purpose |
|-------|---------|
| `shortDescription` | 140–160 char unique meta/OG blurb |
| `seoTitle` (optional) | Override document title if name alone is weak |
| `keywords` / `targets` (optional) | Internal only — do not dump into meta keywords spam |

**`shortDescription` formula:**

`{Name} — {composition}. {Category} for crop protection from Bhumiraj Agro World.`

Example:

> Destroyer — Fipronil 4% + Thiamethoxam 4% SC. Dual-action insecticide for sucking & chewing pests from Bhumiraj Agro World.

**Content quality (P1):**

- Replace repeated generic `description` paragraphs with SKU-specific copy (crops, pests, mode of use — accurate & compliant; no illegal claims).
- Keep `composition`, `features`, `packing` as structured fields for schema + on-page sections.

### On-page product template — `ProductDetails.jsx`

Ensure:

- [x] One `h1` = product name  
- [ ] Visible breadcrumb: Home → Products → Category → Product  
- [ ] Category as crawlable `Link` to `/categories/{categorySlug}`  
- [ ] Composition in a labeled section (`h2`)  
- [ ] Features as list (`h2`)  
- [ ] Related products link to **`/products/{slug}`** (not popup-only)  
- [ ] WhatsApp CTA kept for conversion  

### Category pages

- Keep `h1` = category name  
- Add intro copy unique per category (not only the short `description`)  
- Product grid must expose crawlable product URLs (see §7)  
- Cross-link sibling categories at bottom  

### Local / brand keywords to weave naturally

- Bhumiraj Agro World  
- crop protection / insecticides / fungicides / herbicides / PGR  
- Rajkot, Veraval-Shapar, Gujarat  
- agricultural products enquiry  

Avoid keyword stuffing in titles.

---

## 5. Technical SEO improvements

### Must create

#### `app/sitemap.js`

```js
import { products, categories } from "./data/site";

const base = "https://bhumirajagroworld.com";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/contact", "/products", "/categories", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/products" || path === "/categories" ? 0.9 : 0.6,
    })
  );

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
```


Exclude `/sections`.

#### `app/robots.js`

```js
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/sections"] },
    sitemap: "https://bhumirajagroworld.com/sitemap.xml",
    host: "https://bhumirajagroworld.com",
  };
}
```

### Other technical items

| Item | Action |
|------|--------|
| Canonicals | Set per page via `alternates.canonical` |
| Trailing slash | Stay consistent with Next defaults |
| `not-found.js` | Friendly 404 with links to Products / Categories |
| HTTPS / domain | Confirm production host matches `metadataBase` |
| Search Console | Submit sitemap after deploy |
| Redirect `/sections` | Already redirects; keep `disallow` optional |
| Heading hygiene | One `h1` per page; logical `h2`/`h3` |
| Client pages | Split About/Contact so metadata works |
| Analytics | Optional GA4 / GTM via `next/script` after consent if needed |

### Read Next.js docs first

This project’s Next version may differ from older docs. Before coding metadata/sitemap APIs, check:

`node_modules/next/dist/docs/` (per `AGENTS.md`) for current Metadata / `sitemap.js` / `robots.js` conventions.

---

## 6. Structured data opportunities

Implement as `<script type="application/ld+json">` via a small server component, e.g. `app/components/JsonLd.jsx`:

```jsx
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Organization + LocalBusiness (root layout or home)

Use `brand` from `app/data/site.js`:

- `@type`: `Organization` and/or `LocalBusiness` / `Store`
- `name`, `url`, `logo`, `email`, `telephone`
- `address` (PostalAddress) from Survey No. 444… Rajkot
- `geo` if desired (`22.150776`, `70.819782` from map URLs)
- `openingHours` from `brand.hours`
- `sameAs`: Google Maps link, WhatsApp (optional)

### WebSite + SearchAction (optional)

Only if you add a real on-site search URL. Otherwise skip SearchAction to avoid invalid markup.

### Product (every `/products/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Destroyer",
  "image": ["https://bhumirajagroworld.com/product%20image/..."],
  "description": "…",
  "sku": "destroyer",
  "brand": { "@type": "Brand", "name": "Bhumiraj Agro World" },
  "category": "Insecticides",
  "offers": {
    "@type": "Offer",
    "url": "https://bhumirajagroworld.com/products/destroyer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
}
```

**Note:** If prices are not public, omit `price` or use `Offer` with enquiry-only wording carefully — invalid/missing required Offer fields can trigger Rich Results warnings. Prefer Product + Brand + description + image without fake prices.

### BreadcrumbList

- Product: Home → Products → {Category} → {Product}  
- Category: Home → Categories → {Category}  

### ItemList

- `/products` and `/categories/[slug]` listing pages — list product URLs in order  

### FAQPage (optional P2)

If you add FAQ sections on About/Contact/category pages.

---

## 7. Internal linking improvements

### Critical crawl fix

**Problem:** `ProductCard` / `ProductGridWithPopup` open a modal only — **no `<Link href={/products/slug}>`**. Product detail routes exist and are SSG’d, but are nearly orphaned.

**Fix options (pick one, prefer A):**

**A. Hybrid (recommended)**  
- Make product name / image a `Link` to `/products/[slug]`  
- Keep “Quick view” / Details button for popup  
- Related products: use links + optional popup  

**B. Navigate to product page**  
- Remove popup for SEO-critical grids; keep popup only on home if desired  

### Link graph targets

| From | To |
|------|----|
| Home Categories section | `/categories/[slug]` (already) |
| Home Featured | `/products/[slug]` + `/products` |
| `/products` | Each product URL; category filter links as real URLs e.g. `/products?category=insecticides` **and** reinforce `/categories/[slug]` |
| `/categories/[slug]` | Each product URL; link to `/products` |
| Product detail | Category page; related products; Products index |
| Footer | Already: Home, Products, Categories, About, Contact, Privacy, Terms |
| Navbar | Already solid; ensure category dropdown uses `<Link>` |

### Breadcrumbs component

Add `app/components/Breadcrumbs.jsx` (server-friendly) using `Link` + visible text; mirror in JSON-LD.

### Anchor text

Prefer descriptive anchors (“View Destroyer insecticide”) over “Click here” / “Details” alone for the crawlable link.

---

## 8. Image SEO improvements

### Current state

- `SmartImage` (`app/components/ui/SmartImage.jsx`) renders plain `<img>` with `loading` / Unsplash query params  
- `next.config.mjs` already configures `images.remotePatterns` for Unsplash, but **`next/image` is unused**  
- Product paths contain spaces: `/product image/Insecticide/...` — works encoded, but awkward for sharing/OG  

### Actions

| Task | Detail |
|------|--------|
| Meaningful `alt` | Prefer `` `${product.name} — ${product.composition}` `` on product images; decorative images: empty alt |
| Logo alt | Brand name, not “logo” |
| Filename cleanup (P2) | Rename folders to `/product-image/...` and update catalog paths (redirects if already indexed) |
| `width` / `height` | Prevent CLS — set intrinsic dimensions or aspect boxes (cards already use aspect ratios) |
| OG images | Absolute URLs via `metadataBase`; product image as OG for product pages |
| Prefer WebP/AVIF | Via `next/image` or pre-convert JPEG assets |
| LCP | Hero + product primary image: `priority` / `fetchPriority="high"` (Hero already priority-capable) |
| Avoid empty alt on content images | Product packs must have alt |

### Optional migration

Gradually replace `SmartImage` with `next/image` for local + Unsplash assets to get automatic resizing/srcset — big performance + image SEO win.

---

## 9. Performance SEO improvements

Core Web Vitals affect rankings and UX.

| Area | Current risk | Action |
|------|--------------|--------|
| JS weight | Framer Motion + GSAP + Lenis on many pages | Lazy-load animation libs; keep product listing lighter |
| Client boundaries | About/Contact entire pages client | Split server shell + client islands |
| Images | Unoptimized `<img>` | `next/image` or CDN sizing; compress JPEGs in `public/product image/` |
| Fonts | Inter + Poppins via `next/font` | Already good (`display: "swap"`) |
| Smooth scroll | Lenis wraps whole app | Ensure it doesn’t block input/INP; defer init |
| Third parties | None yet | Add analytics carefully (defer) |
| Static generation | Products/categories already `generateStaticParams` | Keep; rebuild on catalog changes |
| Popup grids | Client components | Ensure server-rendered list markup includes links ( RSC-friendly card) |

### Quick wins

1. Crawlable product links without waiting for JS  
2. Compress hero + product JPEGs  
3. Fix metadata (no extra perf cost, high SEO ROI)  
4. `sitemap` / `robots`  

---

## 10. Priority-wise implementation plan

### Phase 1 — Foundations (1–2 days) ✅ highest ROI

1. Fix product `generateMetadata` (stop using missing `shortDescription`; fallback to composition + truncated description).  
2. Add `shortDescription` to catalog (script in `scripts/` optional).  
3. Create `app/sitemap.js` + `app/robots.js`.  
4. Enhance root `layout.js` OG/Twitter/robots; align OG description with real offerings.  
5. Add home page `metadata`.  
6. Split About/Contact into server page + client component; add metadata.  
7. **Make product cards link to `/products/[slug]`** (keep popup as secondary).  

### Phase 2 — On-page & structured data (2–3 days)

1. Breadcrumbs on product + category pages.  
2. `JsonLd` helper + Organization/LocalBusiness on layout/home.  
3. Product JSON-LD on product pages.  
4. BreadcrumbList + ItemList where applicable.  
5. Enrich category `generateMetadata` + on-page intros.  
6. Related products as real links.  
7. `app/not-found.js` with helpful internal links.  

### Phase 3 — Content & media (ongoing)

1. Unique product descriptions (replace boilerplate).  
2. Default OG image asset (`public/og-default.jpg` 1200×630).  
3. Image alt pass + optional `next/image` migration.  
4. Rename/normalize image paths (optional, careful).  
5. FAQ blocks on About/Contact if content-ready.  

### Phase 4 — Measure & iterate

1. Google Search Console property + sitemap submit.  
2. Rich Results Test / Schema validator.  
3. Lighthouse CI or PageSpeed on `/`, `/products`, one product URL.  
4. Track queries for product names + category terms.  

---

## 11. File-by-file checklist for Cursor

Use this as an execution checklist. Mark items done in PRs.

### New files

- [ ] `app/sitemap.js` — all static + 4 categories + 78 products; exclude `/sections`
- [ ] `app/robots.js` — allow site; point to sitemap; host = production domain
- [ ] `app/not-found.js` — branded 404 + links
- [ ] `app/components/JsonLd.jsx` — JSON-LD script helper
- [ ] `app/components/Breadcrumbs.jsx` — visual + accessible nav
- [ ] `app/about/AboutClient.jsx` — move current about UI
- [ ] `app/contact/ContactClient.jsx` — move current contact UI
- [ ] `public/og-default.jpg` (or `app/opengraph-image.tsx`) — default share image
- [ ] Optional: `scripts/add-short-descriptions.mjs` — generate `shortDescription` from name + composition

### `app/layout.js`

- [ ] Align `openGraph.description` with crop-protection catalog (not seed-heavy mismatch)
- [ ] Add `openGraph.url`, `openGraph.images`
- [ ] Add `twitter` card fields
- [ ] Add default `robots`
- [ ] Optional: Organization `JsonLd`
- [ ] Optional: `lang="en-IN"`

### `app/page.js`

- [ ] Export page `metadata` (absolute title OK)
- [ ] Verify single H1 in `Hero`
- [ ] Featured section links to product URLs

### `app/about/page.js` + `AboutClient.jsx`

- [ ] Remove `"use client"` from route file
- [ ] Export About metadata + canonical
- [ ] Render client child

### `app/contact/page.js` + `ContactClient.jsx`

- [ ] Same split as About
- [ ] Metadata includes location/phone cues

### `app/products/page.js`

- [ ] Richer title/description/canonical/OG
- [ ] Ensure client filters don’t hide all product links from initial HTML if possible

### `app/products/ProductsClient.jsx`

- [ ] Category chips link to `/categories/[slug]` or crawlable query URLs
- [ ] Cards receive product hrefs

### `app/products/[slug]/page.js`

- [ ] Fix `generateMetadata` description fallback
- [ ] Add canonical, OG images, Twitter
- [ ] Pass data into Product JSON-LD (via details or page)

### `app/products/[slug]/ProductDetails.jsx`

- [ ] Breadcrumbs
- [ ] Link to category page
- [ ] Related products: `Link` to `/products/[slug]`
- [ ] Semantic `h2` sections (Composition, Features, Packing)
- [ ] Stronger image `alt`

### `app/categories/page.js`

- [ ] Canonical + OG polish

### `app/categories/[slug]/page.js`

- [ ] Stronger `generateMetadata` (title, OG image, canonical)
- [ ] Replace popup-only grid with linkable cards (or hybrid)
- [ ] Breadcrumbs + ItemList JSON-LD

### `app/privacy/page.js` / `app/terms/page.js`

- [ ] Slightly richer descriptions
- [ ] Canonicals
- [ ] Optional `noindex`

### `app/data/catalogProducts.js` / `site.js`

- [ ] Add `shortDescription` (all 78)
- [ ] Optional `seoTitle`
- [ ] Helpers unchanged: `getProductBySlug`, etc.

### `app/components/ProductCard.jsx`

- [ ] Primary crawlable `Link` to `/products/${product.slug}`
- [ ] Optional secondary button for popup
- [ ] Improved `alt` text

### `app/components/ProductGridWithPopup.jsx`

- [ ] Support hybrid link + popup
- [ ] Do not rely on JS-only navigation for product URLs

### `app/components/ProductDetailsPopup.jsx`

- [ ] Add “View full details” `Link` to `/products/[slug]`
- [ ] Keep WhatsApp CTA

### `app/components/FeaturedProducts.jsx` / `HomeProducts.jsx` / `BestSelling.jsx`

- [ ] Same linkable card behavior as products grid

### `app/components/Footer.jsx` / `Navbar.jsx`

- [ ] Verify all important routes linked (already mostly done)
- [ ] NAP consistency with `brand` (schema + footer match)

### `app/components/ui/SmartImage.jsx`

- [ ] Ensure `alt` always passed from callers
- [ ] Optional: migrate to `next/image`

### `next.config.mjs`

- [ ] Only if adopting `next/image` for new hosts
- [ ] Consider `trailingSlash` / redirects only if domain migration needs it

### Post-deploy verification

- [ ] `/sitemap.xml` lists ~90 URLs (7 static + 4 categories + 78 products − adjust if privacy/terms excluded)
- [ ] `/robots.txt` references sitemap
- [ ] View source on a product URL: non-empty `<meta name="description">`
- [ ] Product listing HTML contains `href="/products/destroyer"` (or similar)
- [ ] Rich Results Test on home + one product
- [ ] Search Console sitemap submit

---

## Appendix A — Current metadata snapshot (before work)

| Route | Status |
|-------|--------|
| Layout defaults | Present; OG incomplete; OG description mismatch |
| `/` | No page metadata |
| `/about` | No metadata (client page) |
| `/contact` | No metadata (client page) |
| `/products` | OK basic |
| `/products/[slug]` | Title OK; **description broken** |
| `/categories` | OK basic |
| `/categories/[slug]` | OK basic |
| `/privacy`, `/terms` | OK basic |
| Sitemap / robots | **Missing** |
| JSON-LD | **Missing** |
| Product internal links | **Missing from cards** |

## Appendix B — Product data shape (reference)

```js
{
  id, slug, name,
  category,          // "Insecticides" | …
  categorySlug,      // "insecticides" | …
  featured,
  image, gallery[],
  composition,
  description,       // long; often generic today
  // ADD: shortDescription
  features[],
  packing, packaging,
  fromPdf
}
```

## Appendix C — Implementation notes for Cursor agents

1. Follow `AGENTS.md`: read Next.js docs under `node_modules/next/dist/docs/` before using Metadata/sitemap APIs.  
2. Do not commit `.next/` build artifacts.  
3. Keep visual design system intact — SEO changes should not restyle the marketing UI.  
4. Prefer server components for metadata and JSON-LD; isolate client interactivity.  
5. After Phase 1, manually verify one product page’s `<head>` in the browser.  
6. WhatsApp enquiry flows are conversion tools — do not remove them when adding crawlable links.

---

*Generated for the `agro-mohit` codebase. Update this doc when routes or catalog size change.*
