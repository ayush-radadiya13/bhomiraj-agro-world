import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  brand,
} from "../../data/site";
import SmartImage from "../../components/ui/SmartImage";
import ProductGridWithPopup from "../../components/ProductGridWithPopup";
import {
  shareImage,
  truncateMeta,
  generateCollectionSchema,
  generateBreadcrumbSchema,
} from "../../lib/seo";

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
  const title = `${category.name} Products & Crop Protection | ${brand.name} Rajkot`;
  const description = truncateMeta(
    `High-efficiency ${category.name.toLowerCase()} products in Rajkot, Gujarat. ${category.description} Browse ${items.length} products from ${brand.name}.`
  );
  const url = `/categories/${category.slug}`;
  const image = shareImage(category.image, `${category.name} products`);

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

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);
  const collectionJsonLd = generateCollectionSchema(category, items);
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: category.name, path: `/categories/${category.slug}` },
  ]);

  return (
    <div className="bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SmartImage
            src={category.image}
            alt={`${category.name} crop protection products in Rajkot`}
            width={1600}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="container-site relative z-10 py-10 sm:py-12 md:py-14">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Category
          </p>
          <h1 className="mt-3 font-display text-2xl font-600 tracking-tight text-white sm:text-3xl md:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <div className="container-site py-8 sm:py-10 md:py-14">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-xl font-700 text-ink sm:text-2xl">
            {category.name} Catalogue
          </h2>
          <span className="text-sm text-muted">
            {items.length} product{items.length !== 1 ? "s" : ""} available
          </span>
        </div>
        <ProductGridWithPopup
          products={items}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        />
      </div>
    </div>
  );
}
