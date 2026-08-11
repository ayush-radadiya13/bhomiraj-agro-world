import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
  brand,
} from "../../data/site";
import ProductDetails from "./ProductDetails";
import {
  productMetaDescription,
  shareImage,
  generateProductSchema,
  generateBreadcrumbSchema,
} from "../../lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: true },
    };
  }

  const description = productMetaDescription(product);
  const url = `/products/${product.slug}`;
  const title = `${product.name} (${product.category}) — Crop Protection | ${brand.name}`;
  const image = shareImage(product.image, `${product.name} - ${product.category}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const productJsonLd = generateProductSchema(product);
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetails product={product} related={related} />
    </>
  );
}
