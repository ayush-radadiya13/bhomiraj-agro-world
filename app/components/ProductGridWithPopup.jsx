"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetailsPopup from "./ProductDetailsPopup";

export default function ProductGridWithPopup({
  products = [],
  className = "grid grid-cols-2 gap-3 sm:gap-3 md:grid-cols-3 lg:grid-cols-4",
}) {
  const [selected, setSelected] = useState(null);
  const list = Array.isArray(products) ? products.filter(Boolean) : [];

  return (
    <>
      <div className={className}>
        {list.map((product) => (
          <ProductCard
            key={product.id ?? product.slug}
            product={product}
            onOpen={setSelected}
          />
        ))}
      </div>
      <ProductDetailsPopup
        product={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
