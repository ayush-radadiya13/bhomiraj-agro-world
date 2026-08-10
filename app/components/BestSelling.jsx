"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "../data/site";

export default function BestSelling() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="range" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Explore the Range"
            title="More from our"
            highlight="product collection"
            description="Slide through a curated selection of agricultural products across categories."
          />
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-leaf-600/10 px-3 py-1.5 text-xs font-700 text-leaf-700">
              <Sparkles className="h-3.5 w-3.5" /> Curated picks
            </span>
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf-700/15 bg-white text-leaf-800 shadow-sm transition hover:bg-leaf-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf-700/15 bg-white text-leaf-800 shadow-sm transition hover:bg-leaf-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          data-lenis-prevent
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-8 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[68%] shrink-0 snap-start sm:w-[42%] lg:w-[28%] xl:w-[22%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
