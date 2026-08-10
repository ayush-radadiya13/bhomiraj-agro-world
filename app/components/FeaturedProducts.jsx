"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import ProductGridWithPopup from "./ProductGridWithPopup";
import Reveal from "./ui/Reveal";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(10);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured"
          title="Premium Featured"
          highlight="Products"
          description="A curated selection of quality insecticides, fungicides, herbicides, and PGR solutions for better harvests."
        />

        <Reveal>
          <ProductGridWithPopup
            products={featured}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
          />
        </Reveal>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link href="/products" className="btn-outline w-full max-w-xs sm:w-auto">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
