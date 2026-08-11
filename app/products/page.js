import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import { brand } from "../data/site";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const productsTitle = `Agricultural Products & Crop Solutions | ${brand.name} Rajkot`;
const productsDescription =
  `Browse complete range of insecticides, fungicides, herbicides & PGR products from ${brand.name} in Rajkot, Gujarat. Direct WhatsApp enquiries available.`;

export const metadata = {
  title: productsTitle,
  description: productsDescription,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: productsTitle,
    description: productsDescription,
    url: "/products",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} product catalogue in Rajkot, Gujarat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: productsTitle,
    description: productsDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-bg">
      <Suspense
        fallback={
          <div className="container-site py-20 text-center text-muted">
            Loading products...
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </div>
  );
}
