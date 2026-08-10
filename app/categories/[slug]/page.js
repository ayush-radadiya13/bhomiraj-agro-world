import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  brand,
} from "../../data/site";
import SmartImage from "../../components/ui/SmartImage";
import ProductGridWithPopup from "../../components/ProductGridWithPopup";
import { shareImage, truncateMeta } from "../../lib/seo";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: true },
    };
  }

  const items = getProductsByCategory(category.slug);
  const title = `${category.name} for Crop Protection`;
  const description = truncateMeta(
    `${category.description} Browse ${items.length} ${category.name.toLowerCase()} products from ${brand.name}, Rajkot.`
  );
  const url = `/categories/${category.slug}`;
  const image = shareImage(category.image, category.name);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${brand.name}`,
      description,
      url,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${brand.name}`,
      description,
      images: [image.url],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div className="bg-bg">
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SmartImage
            src={category.image}
            alt={category.name}
            width={1600}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="container-site relative z-10 py-12 sm:py-16 md:py-20">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Category
          </p>
          <h1 className="mt-3 font-display text-2xl font-600 tracking-tight text-white sm:text-3xl md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <div className="container-site py-8 sm:py-10 md:py-14">
        <p className="mb-5 text-sm text-muted sm:mb-6">
          {items.length} product{items.length !== 1 ? "s" : ""} available
        </p>
        <ProductGridWithPopup
          products={items}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        />
      </div>
    </div>
  );
}
