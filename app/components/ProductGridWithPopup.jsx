"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetailsPopup from "./ProductDetailsPopup";

export default function ProductGridWithPopup({
  products,
  className = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4",
}) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={className}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
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
