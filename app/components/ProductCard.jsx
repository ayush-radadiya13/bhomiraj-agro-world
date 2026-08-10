"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SmartImage from "./ui/SmartImage";

export default function ProductCard({ product, onOpen }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_8px_22px_-14px_rgba(30,41,59,0.25)] transition duration-300 hover:border-primary/25 hover:shadow-[0_16px_30px_-16px_rgba(46,125,50,0.3)] sm:rounded-[1.15rem]">
        <button
          type="button"
          onClick={() => onOpen?.(product)}
          className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef3f0] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40 sm:aspect-square"
          aria-label={`View details for ${product.name}`}
        >
          <SmartImage
            src={product.image}
            alt={product.name}
            width={640}
            className="h-full w-full object-contain object-center p-5 transition duration-500 group-hover:scale-[1.03] sm:p-5"
          />
        </button>

        <div className="flex items-center gap-3 border-t border-primary/8 px-4 py-3.5 sm:gap-3 sm:px-3.5 sm:py-3">
          <h3 className="min-w-0 flex-1 font-display text-base font-700 leading-snug text-ink sm:truncate sm:text-[0.95rem]">
            {product.name}
          </h3>
          <button
            type="button"
            onClick={() => onOpen?.(product)}
            className="group/btn inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-xs font-700 text-white shadow-[0_8px_16px_-10px_rgba(46,125,50,0.75)] transition duration-300 hover:brightness-110 hover:shadow-[0_10px_20px_-10px_rgba(46,125,50,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
