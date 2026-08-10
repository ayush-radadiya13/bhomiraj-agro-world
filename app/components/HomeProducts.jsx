"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ProductCard from "./ProductCard";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { products } from "../data/site";

export default function HomeProducts() {
  const preview = products.slice(0, 4);

  return (
    <section className="relative bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Selection"
            title="A glimpse of our"
            highlight="product range"
            description="A few hand-picked agricultural products from our showcase. Explore the full collection for every crop and season."
          />
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-leaf-600 to-leaf-700 px-6 py-3.5 text-sm font-700 text-white shadow-glow transition hover:brightness-110"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
          stagger={0.08}
        >
          {preview.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
