"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ProductGridWithPopup from "./ProductGridWithPopup";
import { products } from "../data/site";

export default function HomeProducts() {
  const preview = products.slice(0, 12);

  return (
    <section className="relative bg-bg py-14 sm:py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <SectionHeading
            align="left"
            eyebrow="Featured Selection"
            title="A glimpse of our"
            highlight="product range"
            description="A few hand-picked crop protection products from our showcase. Explore the full collection for every crop and season."
          />
          <Link
            href="/products"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-700 text-white shadow-lift transition hover:brightness-110 sm:w-auto"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 sm:mt-12">
          <ProductGridWithPopup
            products={preview}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          />
        </div>
      </div>
    </section>
  );
}
