"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Sparkles } from "lucide-react";
import { categories, products } from "../data/site";
import ProductCard from "../components/ProductCard";
import ProductDetailsPopup from "../components/ProductDetailsPopup";
import Reveal from "../components/ui/Reveal";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("name-asc");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "all") {
      list = list.filter((p) => p.categorySlug === category);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "category") return a.category.localeCompare(b.category);
      return a.name.localeCompare(b.name);
    });

    return list;
  }, [query, category, sort]);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faf7_0%,#ffffff_28%,#ffffff_100%)] pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,_rgba(46,125,50,0.08),_transparent_70%)]" />

      <div className="container-site relative py-8 sm:py-10 md:py-12">
        <Reveal className="mb-6 max-w-2xl sm:mb-7">
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

        {/* Filters — desktop / tablet only */}
        <div className="mb-6 hidden overflow-hidden rounded-2xl border border-primary/10 bg-white/90 shadow-[0_12px_32px_-20px_rgba(46,125,50,0.35)] backdrop-blur-md md:block">
          <div className="flex flex-col gap-3 p-3 sm:p-3.5 lg:flex-row lg:items-center lg:gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-line bg-[#f8faf8] px-3.5 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-primary" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted/70"
              />
            </div>

            <div className="flex min-w-0 flex-[1.4] items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Chip
                active={category === "all"}
                onClick={() => setCategory("all")}
                label="All"
              />
              {categories.map((cat) => (
                <Chip
                  key={cat.slug}
                  active={category === cat.slug}
                  onClick={() => setCategory(cat.slug)}
                  label={cat.name}
                />
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:pl-1">
              <label className="text-xs font-600 uppercase tracking-wider text-muted">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-xl border border-line bg-[#f8faf8] px-3 py-2.5 text-sm text-ink outline-none transition hover:border-primary/30 focus:border-primary/40 lg:w-[150px]"
              >
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
                <option value="category">By Category</option>
              </select>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted">
          Showing{" "}
          <span className="font-700 text-ink">{filtered.length}</span> product
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-primary/10 bg-white p-8 text-center text-muted shadow-soft sm:p-10">
            No products found. Try another search or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
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

function Chip({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-600 transition sm:text-sm ${
        active
          ? "bg-primary text-white shadow-[0_8px_18px_-10px_rgba(46,125,50,0.8)]"
          : "bg-[#f8faf8] text-ink/80 ring-1 ring-line hover:bg-primary-50 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}
