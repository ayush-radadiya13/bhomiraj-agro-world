# SEO Audit — Bhumiraj Agro World

**Site:** https://bhumirajagroworld.in  
**Stack:** Next.js 16 App Router  
**Audited:** 11 Aug 2026 (codebase review)  
**Overall:** Strong technical SEO foundation. Gaps are mostly analytics/GSC wiring, content consistency, and performance.

---

## 1. What SEO is already implemented

| Area | Status | Where |
|------|--------|--------|
| Meta titles | Done | Root `layout.js` + all main pages via `metadata` / `generateMetadata` |
| Meta descriptions | Done | Home, About, Contact, Products, Categories, Product & Category detail |
| Title template | Done | `%s \| Bhumiraj Agro World` in `app/layout.js` |
| `metadataBase` | Done | `https://bhumirajagroworld.in` |
| Canonical tags | Done | Home, About, Contact, Products, Categories, Product/Category slugs |
| Open Graph | Done | Title, description, URL, images, locale `en_IN` |
| Twitter cards | Done | `summary_large_image` site-wide |
| Robots meta | Done | Index/follow + Googlebot image/snippet settings |
| `robots.txt` | Done | `app/robots.js` — allows `/`, blocks `/sections`, points to sitemap |
| `sitemap.xml` | Done | `app/sitemap.js` — 7 static + 4 categories + 78 products |
| Schema (JSON-LD) | Partial | `LocalBusiness` (layout), `Product` + `BreadcrumbList` (product pages), `CollectionPage` + `BreadcrumbList` (category pages) |
| SEO-friendly URLs | Done | `/products/[slug]`, `/categories/[slug]` (kebab-case, clean) |
| Heading structure | Mostly done | One clear `H1` per main page; sections use `H2`/`H3` |
| Image alt text | Mostly done | Product/category/about images have descriptive alts |
| Internal linking | Done | Navbar, Footer, ProductCards → product pages, category links |
| Mobile viewport | Done | `viewport` export: `device-width`, theme color |
| Lang / locale | Done | `<html lang="en-IN">` |
| Static generation | Done | `generateStaticParams` for products & categories |
| Favicon | Done | `/leaf.svg` |

---

## 2. What’s missing / incomplete

| Item | Gap |
|------|-----|
| Google Search Console | No `metadata.verification` / HTML tag; sitemap not confirmed submitted |
| Google Analytics (GA4) | Not installed — no `gtag` / GTM / `@next/third-parties` |
| Privacy / Terms SEO | Title + description only — **no canonical or OG** |
| Extra schema | No `WebSite`, `ContactPage`, or `FAQPage` |
| Visible breadcrumbs | JSON-LD only — no UI breadcrumb trail |
| Product Offer schema | `Offer` has no `price` (may limit Product rich results) |
| `next/image` | Using plain `<img>` via `SmartImage` — weaker image CDN/optimization |
| Messaging consistency | Hero alt & copy still say “seeds”; meta positions as crop protection |
| GSC / Analytics process | Domain verified + property setup is outside the repo |

---

## 3. Checklist by topic

### Meta titles — Implemented
- Home uses absolute title focused on crop protection + Rajkot.
- Dynamic product/category titles include brand + category intent.
- Privacy/Terms titles are thin but acceptable for legal pages.

### Meta descriptions — Implemented
- Main commercial pages have ~unique, local descriptions.
- Product descriptions built via `productMetaDescription()` in `app/lib/seo.js`.

### Heading structure (H1 / H2 / H3) — Mostly good
- Home: `H1` in Hero (`brand.heroHeading`).
- About, Contact, Products, Categories, detail pages: single `H1`.
- Section blocks use `SectionHeading` → `H2`; product cards use `H3`.
- **Watch:** keep one `H1` per page (currently fine).

### Image alt text — Mostly good
- Strong on product cards/details and category pages.
- Weaker/generic on home Categories (`alt={cat.name}`), popup (`alt={product.name}`), some decorative Unsplash images.
- **Fix soon:** Hero alt still says “premium seeds…” — misaligned with crop-protection positioning.

### SEO-friendly URLs — Implemented
- Clean slugs (`destroyer`, `fipron-3g`, `insecticides`, etc.).
- `/sections` redirects to `/` and is disallowed in robots.

### Canonical tags — Mostly implemented
- Present on all high-value routes.
- **Missing** on `/privacy` and `/terms` (they inherit layout default `canonical: "/"` → incorrect self-reference risk).

### robots.txt — Implemented
- Allow all, disallow `/sections`, sitemap + host set.

### sitemap.xml — Implemented
- Includes home, about, contact, products, categories, privacy, terms, 4 categories, 78 products.

### Open Graph / Twitter — Implemented
- Global defaults + page-level overrides.
- Default OG image: `/assets/hero-banner.png` (exists).
- Product/category pages use their own images when available.

### Schema markup — Partial
- **Have:** LocalBusiness, Product, CollectionPage, BreadcrumbList.
- **Missing:** WebSite (+ optional SearchAction), ContactPage, FAQ.
- Product `Offer` without price may not qualify for price rich results (OK if enquire-only).

### Mobile SEO — Good foundation
- Responsive layout, mobile nav, mobile hero asset, viewport meta.
- Tap targets and WhatsApp CTAs are mobile-friendly.
- Validate live with Google Mobile-Friendly / Lighthouse after deploy.

### Page speed — Needs work
- Client-heavy stack: Framer Motion, GSAP, Lenis on many surfaces.
- `SmartImage` is plain `<img>` (lazy + async decode only; no Next image optimizer).
- Remote Unsplash images + large local product assets.
- Fonts: Inter + Poppins via `next/font` (good).

### Internal linking — Implemented
- Primary nav + footer quick links + category footer links.
- Product cards link to `/products/[slug]` (crawlable).
- Note: “Details” button can open a popup instead of navigating — image/title links still help discovery.

### Google Search Console readiness — Almost ready
- Sitemap + robots ready for crawl.
- Still need: property verification, sitemap submit, URL inspection after deploy.

### Google Analytics readiness — Not ready
- No GA4 measurement ID or tag manager in the app.
- Add after privacy/consent decision if required.

---

## 4. What needs to be implemented (priority)

### High

| # | Task | Why |
|---|------|-----|
| 1 | Fix `/privacy` & `/terms` canonicals (and basic OG) | Prevent wrong canonical pointing to `/` |
| 2 | Align hero/on-page copy & alts with crop-protection (not “seeds”-first) | Avoid keyword/message mismatch vs meta |
| 3 | Verify domain in Google Search Console + submit `/sitemap.xml` | Indexing & coverage monitoring |
| 4 | Add GA4 (or GTM) via `next/script` or `@next/third-parties` | Traffic & conversion measurement |

### Medium

| # | Task | Why |
|---|------|-----|
| 5 | Improve weak alts (home Categories, popup, decorative images) | Accessibility + image search |
| 6 | Add `WebSite` (+ optional `ContactPage`) JSON-LD | Stronger entity/site signals |
| 7 | Switch critical images to `next/image` (or optimize SmartImage) | LCP / Core Web Vitals |
| 8 | Add visible breadcrumbs on product/category pages | UX + matches existing Breadcrumb schema |
| 9 | Trim unused animation weight on non-hero pages | Page speed |

### Low

| # | Task | Why |
|---|------|-----|
| 10 | Add `metadata.verification.google` when GSC code exists | Cleaner verification |
| 11 | FAQ schema on Contact/About if FAQ content is added | Rich result potential |
| 12 | Add `price` to Product Offer only if real prices are shown | Avoid invalid rich-result data |
| 13 | Apple touch / richer icon set | Minor brand polish in SERP/bookmarks |
| 14 | Consider Gujarati/`hi-IN` pages later | Local reach (only if you’ll maintain them) |

---

## 5. Quick page coverage matrix

| Route | Title | Description | Canonical | OG | Schema |
|-------|-------|-------------|-----------|----|--------|
| `/` | Yes | Yes | Yes | Yes | LocalBusiness (global) |
| `/about` | Yes | Yes | Yes | Yes | — |
| `/contact` | Yes | Yes | Yes | Yes | — |
| `/products` | Yes | Yes | Yes | Yes | — |
| `/products/[slug]` | Yes | Yes | Yes | Yes | Product + Breadcrumb |
| `/categories` | Yes | Yes | Yes | Yes | — |
| `/categories/[slug]` | Yes | Yes | Yes | Yes | Collection + Breadcrumb |
| `/privacy` | Basic | Basic | **No** | **No** | — |
| `/terms` | Basic | Basic | **No** | **No** | — |
| `/sections` | N/A (redirect) | — | — | — | robots disallow |

---

## 6. Developer quick wins (suggested order)

1. Add `alternates.canonical` (+ OG) to `app/privacy/page.js` and `app/terms/page.js`.
2. Update Hero alt + `brand.heroHeading` / About blurb to match crop-protection SEO.
3. Add GA4 env var + script in root layout (behind consent if needed).
4. Add `verification: { google: "..." }` to root metadata when GSC is set up.
5. Submit sitemap in Search Console: `https://bhumirajagroworld.in/sitemap.xml`.

---

## 7. Notes

- Older docs (`SEO_AUDIT_REPORT.md`, `SEO_IMPLEMENTATION.md`) describe a **pre-implementation** state. Prefer **this file** for current status.
- This audit is codebase-based (not live Lighthouse / GSC data). Re-check Core Web Vitals and indexing after production deploy.
