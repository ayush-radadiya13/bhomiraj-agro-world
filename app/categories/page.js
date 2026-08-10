import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/site";
import SmartImage from "../components/ui/SmartImage";
import Reveal from "../components/ui/Reveal";

export const metadata = {
  title: "Categories",
  description:
    "Explore Bhumiraj Agro World product categories — seeds, crop medicines, plant nutrition, and bio products.",
};

export default function CategoriesPage() {
  return (
    <div className="bg-bg pt-24">
      <div className="container-site py-10 md:py-14">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Categories
          </p>
          <h1 className="mt-3 font-display text-3xl font-600 tracking-tight text-ink md:text-4xl">
            Shop by Category
          </h1>
          <p className="mt-3 text-muted">
            Choose a category to view curated agricultural products with complete information.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group overflow-hidden rounded-[20px] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary hover:shadow-lift"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <SmartImage
                  src={cat.image}
                  alt={cat.name}
                  width={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                  <cat.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h2 className="font-display text-xl font-600 text-ink">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
