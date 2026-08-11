import { brand } from "../data/site";

export const SITE_URL = "https://bhumirajagroworld.in";
export const DEFAULT_OG_IMAGE = "/assets/hero-banner.png";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateMeta(text, max = 160) {
  if (!text) return "";
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function productMetaDescription(product) {
  if (product.shortDescription) return truncateMeta(product.shortDescription);

  const composition = product.composition
    ? `${product.name} — ${product.composition}.`
    : `${product.name}.`;
  const category = product.category || "crop protection";
  const body = product.description
    ? truncateMeta(product.description, 90)
    : `Enquire for availability and guidance in Rajkot, Gujarat.`;

  return truncateMeta(
    `${composition} Premium ${category} product from ${brand.name}, Rajkot, Gujarat. ${body}`
  );
}

export function shareImage(url, alt) {
  return {
    url: url || DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: alt || brand.name,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: brand.name,
    description: "Leading manufacturer and supplier of insecticides, fungicides, herbicides & PGR products in Rajkot, Gujarat.",
    url: SITE_URL,
    telephone: brand.phoneDisplay,
    email: brand.email,
    logo: absoluteUrl(brand.logo),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Survey No. 444, Plot No. 71, Rivera Industrial Zone-2, At Veraval-Shapar, Ta. Kotda Sangani",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      postalCode: "360026",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.150776,
      longitude: 70.819782,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "$$",
  };
}

export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.shortDescription || `${product.name} crop protection product from ${brand.name}.`,
    image: absoluteUrl(product.image),
    category: product.category,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: brand.name,
      },
    },
  };
}

export function generateCollectionSchema(category, products = []) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Products`,
    description: category.description,
    url: absoluteUrl(`/categories/${category.slug}`),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/products/${item.slug}`),
        name: item.name,
      })),
    },
  };
}

export function generateBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
