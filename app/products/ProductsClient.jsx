"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Sparkles } from "lucide-react";
import { products } from "../data/site";
import ProductCard from "../components/ProductCard";
import ProductDetailsPopup from "../components/ProductDetailsPopup";
import Reveal from "../components/ui/Reveal";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const source = Array.isArray(products) ? products.filter(Boolean) : [];
    let list = [...source];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => {
        const name = (p.name || "").toLowerCase();
        const category = (p.category || "").toLowerCase();
        return name.includes(q) || category.includes(q);
      });
    }

    list.sort((a, b) =>
      (a.name || "").localeCompare(b.name || "", undefined, {
        sensitivity: "base",
      })
    );
    return list;
  }, [query]);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faf7_0%,#ffffff_28%,#ffffff_100%)] pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,_rgba(46,125,50,0.08),_transparent_70%)]" />

      <div className="container-site relative py-4 sm:py-4 md:py-4">
        <Reveal className="mb-2 max-w-2xl sm:mb-2">
          <p className="inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            <Sparkles className="h-3.5 w-3.5" />
            Products
          </p>
          <h1 className="mt-3 font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl md:text-4xl">
            Agricultural Products
          </h1>
          <p className="mt-2 text-sm text-muted md:text-base">
            Browse our complete range. Tap any product for details and WhatsApp
            enquiry.
          </p>
        </Reveal>

        <label className="relative mb-6 block max-w-md">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or category…"
            className="w-full border-0 border-b border-line bg-transparent py-2.5 pl-7 pr-2 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-primary"
          />
        </label>

        <p className="mb-4 text-sm text-muted">
          Showing{" "}
          <span className="font-700 text-ink">{filtered.length}</span> product
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-primary/10 bg-white p-8 text-center text-muted shadow-soft sm:p-10">
            No products found. Try another search.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id ?? product.slug}
                product={product}
                onOpen={setSelected}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailsPopup
        product={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
