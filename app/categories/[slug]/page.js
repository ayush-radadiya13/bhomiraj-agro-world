import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from "../../data/site";
import SmartImage from "../../components/ui/SmartImage";
import ProductCard from "../../components/ProductCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: category.name,
    description: category.description,
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
        <div className="container-site relative z-10 py-16 md:py-20">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Category
          </p>
          <h1 className="mt-3 font-display text-3xl font-600 tracking-tight text-white md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <div className="container-site py-10 md:py-14">
        <p className="mb-6 text-sm text-muted">
          {items.length} product{items.length !== 1 ? "s" : ""} available
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
