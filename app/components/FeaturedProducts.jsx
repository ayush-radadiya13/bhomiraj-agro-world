"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import ProductGridWithPopup from "./ProductGridWithPopup";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(12);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured"
          title="Premium Featured"
          highlight="Products"
          description="A curated selection of quality insecticides, fungicides, herbicides, and PGR solutions for better harvests."
        />

        <ProductGridWithPopup
          products={featured}
          className="grid grid-cols-2 gap-3 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
        />

        <div className="mt-7 flex justify-center sm:mt-8">
          <Link href="/products" className="btn-outline w-full max-w-xs sm:w-auto">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
