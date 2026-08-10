"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import ProductCard from "./ProductCard";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(20);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured"
          title="Premium Featured"
          highlight="Products"
          description="A curated selection of quality seeds, crop protection, nutrition, and bio solutions for better harvests."
        />

        <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex justify-center">
          <Link href="/products" className="btn-outline">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
