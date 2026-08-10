import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, categories } from "../data/site";
import SmartImage from "../components/ui/SmartImage";
import Reveal from "../components/ui/Reveal";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const categoriesTitle = "Product Categories";
const categoriesDescription =
  "Explore Bhumiraj Agro World categories — insecticides, fungicides, herbicides, and PGR for crop protection in Rajkot, Gujarat.";

export const metadata = {
  title: categoriesTitle,
  description: categoriesDescription,
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: `${categoriesTitle} | ${brand.name}`,
    description: categoriesDescription,
    url: "/categories",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} product categories`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${categoriesTitle} | ${brand.name}`,
    description: categoriesDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CategoriesPage() {
  return (
    <div className="bg-bg pt-24">
      <div className="container-site py-8 sm:py-10 md:py-14">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Categories
          </p>
          <h1 className="mt-3 font-display text-2xl font-600 tracking-tight text-ink sm:text-3xl md:text-4xl">
            Shop by Category
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Choose a category to view curated agricultural products with complete
            information.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group overflow-hidden rounded-[20px] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                <SmartImage
                  src={cat.image}
                  alt={cat.name}
                  width={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-primary sm:left-4 sm:top-4 sm:h-11 sm:w-11">
                  <cat.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-4 sm:gap-4 sm:p-6">
                <div>
                  <h2 className="font-display text-lg font-600 text-ink sm:text-xl">
                    {cat.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted sm:mt-2">{cat.description}</p>
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
