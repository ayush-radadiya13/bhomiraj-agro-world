"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "./ui/SmartImage";

export default function ProductCard({ product, onOpen }) {
  if (!product?.slug || !product?.name) return null;

  const productHref = `/products/${product.slug}`;

  return (
    <article className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_8px_22px_-14px_rgba(30,41,59,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_30px_-16px_rgba(46,125,50,0.3)] sm:rounded-[1.15rem]">
        <Link
          href={productHref}
          className="relative aspect-square block w-full overflow-hidden bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
          aria-label={`View details for ${product.name}`}
        >
          <SmartImage
            src={product.image}
            alt={`${product.name} - ${product.category || "Crop protection"} product by Bhumiraj Agro World`}
            width={640}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <div className="flex items-center gap-1.5 border-t border-primary/8 px-2.5 py-2.5 sm:gap-3 sm:px-3.5 sm:py-3">
          <h3 className="min-w-0 flex-1 truncate font-display text-[0.82rem] font-700 leading-snug text-ink sm:text-[0.95rem]">
            <Link
              href={productHref}
              className="transition-colors hover:text-primary"
            >
              {product.name}
            </Link>
          </h3>
          <Link
            href={productHref}
            onClick={(e) => {
              if (onOpen) {
                e.preventDefault();
                onOpen(product);
              }
            }}
            className="group/btn inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-dark px-2.5 py-1.5 text-[0.7rem] font-700 text-white shadow-[0_8px_16px_-10px_rgba(46,125,50,0.75)] transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            Details
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 sm:h-3.5 sm:w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
