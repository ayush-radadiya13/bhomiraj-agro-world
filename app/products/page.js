import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Products",
  description:
    "Browse premium agricultural products from Bhumiraj Agro World — seeds, crop medicines, plant nutrition, and bio products.",
};

export default function ProductsPage() {
  return (
    <div className="bg-bg pt-24">
      <Suspense
        fallback={
          <div className="container-site py-20 text-center text-muted">
            Loading products...
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </div>
  );
}
