"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SmartImage from "./ui/SmartImage";

export default function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link
        href={`/products/${product.slug}`}
        className="group block overflow-hidden rounded-[20px] border border-line bg-white shadow-soft transition hover:border-primary hover:shadow-lift"
      >
        <div className="aspect-[4/3] overflow-hidden bg-bg">
          <SmartImage
            src={product.image}
            alt={product.name}
            width={700}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display text-base font-600 text-ink">
            {product.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
