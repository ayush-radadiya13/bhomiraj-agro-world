import { brand } from "../data/site";

export const SITE_URL = "https://bhumirajagroworld.com";
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
    : `Enquire for availability and guidance.`;

  return truncateMeta(
    `${composition} ${category} from ${brand.name}. ${body}`
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
