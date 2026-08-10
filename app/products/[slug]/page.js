import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
  brand,
} from "../../data/site";
import ProductDetails from "./ProductDetails";
import { productMetaDescription, shareImage } from "../../lib/seo";

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
  const title = `${product.name} | ${product.category}`;
  const image = shareImage(product.image, product.name);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | ${brand.name}`,
      description,
      url,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${brand.name}`,
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

  return <ProductDetails product={product} related={related} />;
}
