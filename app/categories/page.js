import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, categories } from "../data/site";
import SmartImage from "../components/ui/SmartImage";
import Reveal from "../components/ui/Reveal";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const categoriesTitle = `Crop Protection Categories | Insecticides, Fungicides, Herbicides & PGR`;
const categoriesDescription =
  `Explore Bhumiraj Agro World crop protection categories — insecticides, fungicides, herbicides, and PGR products in Rajkot, Gujarat.`;

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
        alt: `${brand.name} crop protection product categories`,
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
    <div className="bg-[linear-gradient(180deg,#f7faf7_0%,#ffffff_28%,#ffffff_100%)] pt-24">
      <div className="container-site py-8 sm:py-10 md:py-12">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Categories
          </p>
          <h1 className="mt-3 font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl md:text-4xl">
            Crop Protection Product Categories
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Choose a category to view curated agricultural products with complete
            dosage, composition, and application guidance.
          </p>
        </Reveal>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {categories.map((cat, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={cat.slug} delay={index * 0.06}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_12px_32px_-18px_rgba(30,41,59,0.28)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-22px_rgba(46,125,50,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:min-h-[280px] lg:min-h-[320px] ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-primary-50 sm:aspect-[5/3] md:aspect-auto md:w-1/2 md:self-stretch">
                    <SmartImage
                      src={cat.image}
                      alt={`${cat.name} products for crop protection in Rajkot`}
                      width={900}
                      className="h-full w-full object-cover object-[center_45%] transition duration-700 ease-out group-hover:scale-[1.04] md:absolute md:inset-0"
                    />
                  </div>

                  <div
                    className={`flex w-full flex-col justify-center gap-3 border-t border-primary/8 p-5 sm:gap-4 sm:p-7 md:w-1/2 md:border-t-0 md:p-8 lg:p-10 ${
                      isReversed
                        ? "md:border-r md:border-primary/8"
                        : "md:border-l md:border-primary/8"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs font-600 uppercase tracking-[0.18em] text-leaf">
                          Category {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-2 font-display text-xl font-700 text-ink transition group-hover:text-primary sm:text-2xl lg:text-[1.75rem]">
                          {cat.name}
                        </h2>
                      </div>
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {cat.description}
                    </p>

                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-700 uppercase tracking-[0.14em] text-primary sm:mt-2">
                      View products
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
