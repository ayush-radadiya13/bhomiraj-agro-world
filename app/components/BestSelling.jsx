"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ProductCard from "./ProductCard";
import ProductDetailsPopup from "./ProductDetailsPopup";
import { products } from "../data/site";

export default function BestSelling() {
  const trackRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="range" className="relative bg-bg py-14 sm:py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <SectionHeading
            align="left"
            eyebrow="Explore the Range"
            title="More from our"
            highlight="product collection"
            description="Slide through a curated selection of agricultural products across categories."
          />
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-700 text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Curated picks
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          data-lenis-prevent
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-0.5 pb-6 pt-1 sm:mt-12 sm:gap-6 sm:pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.slice(0, 16).map((product) => (
            <div
              key={product.id}
              className="w-[92%] shrink-0 snap-start sm:w-[42%] lg:w-[28%] xl:w-[22%]"
            >
              <ProductCard product={product} onOpen={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <ProductDetailsPopup
        product={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
