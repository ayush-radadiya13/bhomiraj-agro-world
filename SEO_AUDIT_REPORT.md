# SEO Audit Report — Bhumiraj Agro World (Next.js Project)

**Target Pages Audited:**

. Home (`/`)
. About (`/about`)
. Products Listing (`/products`)
. Categories Listing (`/categories`)
. Category Detail Pages (`/categories/[slug]`)
. Product Detail Pages (`/products/[slug]`)
. Contact (`/contact`)

---



## 📊 Current Overall SEO Score: **52 / 100**| Category | Current Score | Main Finding |
| :

---

 | :

---

: | :

---

 |
| **
. Metadata & Canonical URLs*
* | **45/100*
* | `/about` has NO page metadata (due to `"use client"`) and canonical points incorrectly to `/`. |
| **
. Internal Linking & Crawlability*
* | **35/100*
* | Product cards use JS `<button>` popups without `<a href="/products/[slug]">` links. Googlebot cannot crawl product pages. |
| **
. Title Tags & Meta Descriptions*
* | **55/100*
* | Titles use generic taglines; missing high-intent keywords and local SEO terms ("Rajkot, Gujarat"). |
| **
. Structured Data (JSON-LD)*
* | **0/100*
* | Zero schema markup across the codebase (missing `LocalBusiness`, `Product`, `CollectionPage`, `BreadcrumbList`). |
| **
. Heading Structure (H1–H3)*
* | **70/100*
* | Missing H2 section wrappers in product listings; H1 text on Home/About lacks primary keywords. |
| **
. Image Alt Text & Media SEO*
* | **65/100*
* | Alt tags exist but are generic (e.g. `alt="Agriculture fields"`, `alt={product.name}`). |
| **
. Local SEO (Rajkot, Gujarat)*
* | **50/100*
* | Text mentions address, but lacks `LocalBusiness` JSON-LD schema & geo-targeted meta metadata. |

---



## 
. Current SEO Issues#

## 🚨 Critical Issue #1: Missing Metadata & Canonical Bug on About Page (`/about`)
* **File:*
* [app/about/page.js](file:///d:/agro-mohit/app/about/page.js)
* **Problem:*
* The entire page starts with `"use client"`. In Next.js App Router, Client Components **cannot*
* export `metadata`.
* **Impact:*
*   - `/about` exports **zero metadata**, falling back to root layout metadata.  - The canonical tag for `/about` resolves to `https://bhumirajagroworld.in/` (Home page).  - Search engines treat `/about` as a duplicate of the Home page or drop it from search results.

---

#

## 🚨 Critical Issue #2: Search Engine Crawlers Cannot Discover Product Pages
* **Files:*
* [app/components/ProductCard.jsx](file:///d:/agro-mohit/app/components/ProductCard.jsx), [app/components/ProductGridWithPopup.jsx](file:///d:/agro-mohit/app/components/ProductGridWithPopup.jsx), [app/products/ProductsClient.jsx](file:///d:/agro-mohit/app/products/ProductsClient.jsx), [app/components/FeaturedProducts.jsx](file:///d:/agro-mohit/app/components/FeaturedProducts.jsx)
* **Problem:*
* In product grids, product cards use JavaScript `<button onClick={...}>` to display a client-side modal popup instead of standard HTML `<a href="/products/[slug]">` links.
* **Impact:*
* Googlebot crawling `/products` or `/` sees no HTML anchor links (`<a href="...">`) leading to individual product detail pages (`/products/bhoomi-pride`, `/products/bhumi-gold`, etc.). Consequently, individual product pages risk remaining unindexed or orphaned.

---

#

## 🚨 Critical Issue #3: Total Absence of Structured Data (JSON-LD)
* **Files:*
* Entire project (`app/layout.js`, [app/contact/page.js](file:///d:/agro-mohit/app/contact/page.js), [app/products/[slug]/page.js](file:///d:/agro-mohit/app/products/%5Bslug%5D/page.js), [app/categories/[slug]/page.js](file:///d:/agro-mohit/app/categories/%5Bslug%5D/page.js))
* **Problem:*
* There is no JSON-LD schema markup implemented anywhere in the application.
* **Impact:*
*   - Misses out on **Google Rich Snippets*
* (star ratings, product availability, composition, image snippets).  - Misses out on Google Knowledge Graph and Google Maps / Local pack integration (`LocalBusiness` schema).  - No `BreadcrumbList` schema for Google search engine breadcrumbs.

---

#

## ⚠️ Issue #4: Title Tags & Meta Descriptions Lack High-Intent & Local Keywords
* **Files:*
* [app/layout.js](file:///d:/agro-mohit/app/layout.js), [app/page.js](file:///d:/agro-mohit/app/page.js), [app/products/page.js](file:///d:/agro-mohit/app/products/page.js), [app/categories/page.js](file:///d:/agro-mohit/app/categories/page.js), [app/contact/page.js](file:///d:/agro-mohit/app/contact/page.js)
* **Problem:*
*   - Home title is currently `Bhumiraj Agro World — Growing Better Harvests Together` (uses brand tagline instead of primary keywords like "Crop Protection Products, Insecticides & Fungicides in Rajkot, Gujarat").  - Products page title is currently `Agricultural Products` (generic).  - Contact title is currently `Contact Us` (lacks location "Rajkot, Gujarat").

---

#

## ⚠️ Issue #5: Heading Structure (H1–H3) Hierarchy Gaps
* **Files:*
* [app/components/Hero.jsx](file:///d:/agro-mohit/app/components/Hero.jsx), [app/products/ProductsClient.jsx](file:///d:/agro-mohit/app/products/ProductsClient.jsx), [app/products/[slug]/ProductDetails.jsx](file:///d:/agro-mohit/app/products/%5Bslug%5D/ProductDetails.jsx), [app/about/page.js](file:///d:/agro-mohit/app/about/page.js)
* **Problem:*
*  - **Home:*
* Hero `H1` says "Empowering Agriculture with Premium Seeds & Medicine Solutions" while product range is focused on insecticides, fungicides, herbicides, and PGR.  - **Products & Categories Pages:*
* Heading hierarchy jumps from `H1` directly to `H3` cards without an `H2` section container.  - **Product Detail Page:*
* Small subsection headers like "Composition", "Description", and "Package" use `H2` tags instead of `H3`.

---

#

## ⚠️ Issue #6: Image Alt Text is Generic
* **Files:*
* [app/about/page.js](file:///d:/agro-mohit/app/about/page.js), [app/components/ProductCard.jsx](file:///d:/agro-mohit/app/components/ProductCard.jsx), [app/categories/page.js](file:///d:/agro-mohit/app/categories/page.js)
* **Problem:*
* Alt tags use basic strings like `alt="Agriculture fields"`, `alt="Healthy harvest"`, or bare product names `alt={product.name}` without target category context ("Insecticide product by Bhumiraj Agro World").

---

#

## ⚠️ Issue #7: Weak Footer & Navbar Internal Linking
* **Files:*
* [app/components/Footer.jsx](file:///d:/agro-mohit/app/components/Footer.jsx), [app/components/Navbar.jsx](file:///d:/agro-mohit/app/components/Navbar.jsx)
* **Problem:*
* The site footer links only to top-level pages (`/`, `/products`, `/categories`, `/about`, `/contact`). It does not link directly to top product categories (`/categories/insecticides`, `/categories/fungicides`, etc.) or top products.

---



## 
. Exact Files That Need Changes| File Path | Description of Required Change |
| :

---

 | :

---

 |
| **[app/about/page.js](file:///d:/agro-mohit/app/about/page.js)*
* | Remove `"use client"`. Convert to Server Component and export static `metadata` (Title, Description, Canonical). Extract interactive elements into `app/about/AboutClient.jsx`. |
| **[app/about/AboutClient.jsx](file:///d:/agro-mohit/app/about/AboutClient.jsx)*
* | **[NEW FILE]*
* Houses the interactive client components (Framer motion, Lucide icons, counter) for the About page. |
| **[app/layout.js](file:///d:/agro-mohit/app/layout.js)*
* | Inject global `Organization` & `LocalBusiness` JSON-LD schema. Optimize default title template and keywords. |
| **[app/page.js](file:///d:/agro-mohit/app/page.js)*
* | Optimize SEO title, meta description, and OpenGraph metadata to focus on "Crop Protection Products Rajkot Gujarat". Add WebSite JSON-LD schema. |
| **[app/products/page.js](file:///d:/agro-mohit/app/products/page.js)*
* | Update SEO title ("Agricultural Products & Crop Protection Solutions \| Bhumiraj Agro World Rajkot") and meta description. |
| **[app/categories/page.js](file:///d:/agro-mohit/app/categories/page.js)*
* | Update SEO title ("Crop Protection Categories \| Insecticides, Fungicides, Herbicides & PGR") and meta description. |
| **[app/categories/[slug]/page.js](file:///d:/agro-mohit/app/categories/%5Bslug%5D/page.js)*
* | Improve dynamic category page title & meta description templates. Add `CollectionPage` & `BreadcrumbList` JSON-LD schema. |
| **[app/products/[slug]/page.js](file:///d:/agro-mohit/app/products/%5Bslug%5D/page.js)*
* | Refine dynamic product page title & meta description templates. Add `Product` & `BreadcrumbList` JSON-LD schema. |
| **[app/contact/page.js](file:///d:/agro-mohit/app/contact/page.js)*
* | Optimize SEO title ("Contact Bhumiraj Agro World \| Rajkot, Gujarat Agriculture Supplier") and add `ContactPage` + `LocalBusiness` JSON-LD schema. |
| **[app/components/ProductCard.jsx](file:///d:/agro-mohit/app/components/ProductCard.jsx)*
* | Wrap product title/image in semantic `<Link href={`/products/${product.slug}`}>` tag for crawler indexation. Improve image `alt` attributes. |
| **[app/components/Footer.jsx](file:///d:/agro-mohit/app/components/Footer.jsx)*
* | Add direct category links (`/categories/insecticides`, `/categories/fungicides`, etc.) for internal page authority flow. |
| **[app/components/Hero.jsx](file:///d:/agro-mohit/app/components/Hero.jsx)*
* | Refine `H1` text alignment with primary product keywords (Crop Protection & Agrochemicals). |
| **[app/products/[slug]/ProductDetails.jsx](file:///d:/agro-mohit/app/products/%5Bslug%5D/ProductDetails.jsx)*
* | Change subsection headings ("Composition", "Description", "Package") from `H2` to `H3`. Add breadcrumb HTML navigation. |
| **[app/lib/seo.js](file:///d:/agro-mohit/app/lib/seo.js)*
* | Add helper functions for generating JSON-LD schemas (`LocalBusiness`, `Product`, `CollectionPage`, `BreadcrumbList`). |

---



## 
. Recommended SEO Titles & Meta Descriptions#

## Page-by-Page Metadata Comparison Table| Page | Current Title | Recommended SEO Title | Recommended Meta Description |
| :

---

 | :

---

 | :

---

 | :

---

 |
| **Home*
* (`/`) | `Bhumiraj Agro World — Growing Better Harvests Together` | `Bhumiraj Agro World \| Crop Protection Products in Rajkot, Gujarat` | `Leading supplier of insecticides, fungicides, herbicides & PGR products in Rajkot, Gujarat. Buy trusted crop protection solutions for better farm harvest.` |
| **About*
* (`/about`) | *None (Missing due to `"use client"` bug)
* | `About Us \| Bhumiraj Agro World Rajkot Gujarat` | `Learn about Bhumiraj Agro World, Rajkot's trusted supplier of high-quality crop protection products, insecticides, fungicides, herbicides & PGR solutions.` |
| **Products*
* (`/products`) | `Agricultural Products` | `Agricultural Products & Crop Solutions \| Bhumiraj Agro World Rajkot` | `Browse complete range of insecticides, fungicides, herbicides & PGR products from Bhumiraj Agro World in Rajkot, Gujarat. Direct WhatsApp enquiries.` |
| **Categories*
* (`/categories`) | `Product Categories` | `Crop Protection Categories \| Insecticides, Fungicides, Herbicides & PGR` | `Explore Bhumiraj Agro World crop protection categories — insecticides, fungicides, herbicides, and PGR products in Rajkot, Gujarat.` |
| **Category Pages*
* (`/categories/[slug]`) | `${category.name} for Crop Protection` | `${category.name} Products & Crop Protection \| Bhumiraj Agro World Rajkot` | `High-efficiency ${category.name.toLowerCase()} products in Rajkot, Gujarat. Protect crops against pests & diseases with Bhumiraj Agro World solutions.` |
| **Product Pages*
* (`/products/[slug]`) | `${product.name} \| ${product.category}` | `${product.name} (${product.category}) — Crop Protection \| Bhumiraj Agro World` | `${product.name} ${product.composition ? '— ' + product.composition + '.' : ''} Premium ${product.category} product from Bhumiraj Agro World, Rajkot, Gujarat.` |
| **Contact*
* (`/contact`) | `Contact Us` | `Contact Bhumiraj Agro World \| Rajkot, Gujarat Agriculture Supplier` | `Contact Bhumiraj Agro World in Rajkot, Gujarat for product enquiries and crop protection guidance. Call or WhatsApp +91 70468 
. Rivera Industrial Zone-2.` |

---



## 
. Priority-Wise Implementation Plan```mermaidgraph TD    A[High Priority: Critical Fixes] --> B[
. Fix /about Metadata Bug]    A --> C[
. Add Semantic Link Tags to Product Cards]    A --> D[
. Implement JSON-LD Schema Markup]        E[Medium Priority: On-Page Optimization] --> F[
. Apply Recommended SEO Titles & Descriptions]    E --> G[
. Fix Heading Hierarchy H1-H3]    E --> H[
. Footer & Navbar Category Linking]        I[Low Priority: Fine-Tuning] --> J[
. Descriptive Alt Text Optimization]    I --> K[
. Standardize Canonical URLs]    I --> L[
. Local SEO Geographic Keyword Optimization]```#

## 🔴 High Priority (Immediate Fixes Required)
. **Fix About Page Metadata Bug:*
*   - Split [app/about/page.js](file:///d:/agro-mohit/app/about/page.js) into a Server Component (page.js) exporting `export const metadata` and a Client Component (`AboutClient.jsx`).   - Fix canonical URL fallback so `/about` points to `https://bhumirajagroworld.in/about`.
. **Convert Product Cards to Semantic `<a href="...">` Links:*
*   - In [app/components/ProductCard.jsx](file:///d:/agro-mohit/app/components/ProductCard.jsx), wrap image and product title with `<Link href={`/products/${product.slug}`}>`.   - Ensures search engine crawlers can index all product URLs (`/products/[slug]`).
. **Implement JSON-LD Structured Data:*
*   - Add `LocalBusiness` + `Organization` schema to root layout / contact page.   - Add `Product` schema to [app/products/[slug]/page.js](file:///d:/agro-mohit/app/products/%5Bslug%5D/page.js).   - Add `CollectionPage` + `ItemList` schema to [app/categories/[slug]/page.js](file:///d:/agro-mohit/app/categories/%5Bslug%5D/page.js).   - Add `BreadcrumbList` schema to detail pages.

---

#

## 🟡 Medium Priority (Metadata & Heading Optimizations)
. **Update All Page Titles and Meta Descriptions:*
*   - Update metadata exports in `page.js` files for Home, About, Products, Categories, Category Pages, Product Pages, and Contact as specified in Section 3.
. **Standardize Heading Structure (H1–H3):*
*   - Align Home Hero `H1` with crop protection & agrochemicals focus in Rajkot.   - Change `ProductDetails.jsx` detail block titles ("Composition", "Description", "Package") from `H2` to `H3`.   - Add `H2` headings above product grids on `/products` and `/categories/[slug]`.
. **Internal Footer Category Links:*
*   - Update [app/components/Footer.jsx](file:///d:/agro-mohit/app/components/Footer.jsx) to include a "Categories" navigation column with direct links to `/categories/insecticides`, `/categories/fungicides`, `/categories/herbicides`, and `/categories/pgr`.

---

#

## 🟢 Low Priority (Fine-Tuning & Local Keyword Enrichment)
. **Image Alt Text Optimization:*
*   - Update image alt text across `AboutPage`, `ProductCard`, and `Categories` components to include brand + category keywords (e.g. `alt="Insecticides crop protection products by Bhumiraj Agro World"`).
. **Explicit Canonical Alignment:*
*   - Ensure every page explicitly declares its clean canonical URL without relying on root layout fallbacks.
. **Local SEO Text Enhancements:*
*   - Add brief localized introductory copy on Categories and Products pages referencing serving farmers in Rajkot, Kotda Sangani, Veraval-Shapar, and Saurashtra, Gujarat.

---



## 
. Final SEO Score & Target Potential#

## SEO Score Comparison```Current SEO Score:    [██████████░░░░░░░░░░] 52 / 100Post-Fix Target Score: [███████████████████░] 98 / 100```| SEO Dimension | Current Score | Score After Implementation | Impact |
| :

---

 | :

---

: | :

---

: | :

---

 |
| **Metadata Integrity & Canonicals*
* | 45/100 | **100/100*
* | Fixes missing `/about` metadata and canonical link duplication. |
| **Crawlability & Link Architecture*
* | 35/100 | **98/100*
* | Crawlers can discover and pass equity to all product pages via `<a href>` links. |
| **Title Tags & Meta Descriptions*
* | 55/100 | **95/100*
* | High-intent keywords and target locations drive higher SERP CTR. |
| **Structured Data (JSON-LD)*
* | 0/100 | **100/100*
* | Enables Google Rich Snippets & Local Knowledge Graph presentation. |
| **Heading Hierarchy (H1-H3)*
* | 70/100 | **95/100*
* | Correct semantic heading hierarchy for indexers. |
| **Image & Media SEO*
* | 65/100 | **95/100*
* | Keyword-rich alt attributes improve Google Image search ranking. |
| **Local SEO (Rajkot, Gujarat)*
* | 50/100 | **98/100*
* | `LocalBusiness` schema + localized metadata boost Google Maps & Local Pack presence. |
| **TOTAL OVERALL SCORE*
* | **52 / 100*
* | **98 / 100*
* | **+46 Points Score Increase*
* |

---

#

## 📝 Summary Checklist for Developer Implementation
- [ ] Split `app/about/page.js` into Server Component + `AboutClient.jsx` (Fixes missing `/about` metadata).
- [ ] Update product grid cards in `ProductCard.jsx` to use `<Link href="...">` HTML anchor tags.
- [ ] Add JSON-LD schemas (`LocalBusiness`, `Product`, `CollectionPage`, `BreadcrumbList`) in `lib/seo.js` and page components.
- [ ] Apply recommended titles & meta descriptions across all 7 target main pages.
- [ ] Fix heading hierarchy (`H1` to `H3`) across pages and components.
- [ ] Add category links to `Footer.jsx`.
- [ ] Enhance image `alt` attributes across all target components.
