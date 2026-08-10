import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import { brand } from "../data/site";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const productsTitle = "Agricultural Products";
const productsDescription =
  "Browse insecticides, fungicides, herbicides & PGR from Bhumiraj Agro World. Tap any product for details and WhatsApp enquiry.";

export const metadata = {
  title: productsTitle,
  description: productsDescription,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `${productsTitle} | ${brand.name}`,
    description: productsDescription,
    url: "/products",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} product catalogue`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${productsTitle} | ${brand.name}`,
    description: productsDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-bg ">
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
