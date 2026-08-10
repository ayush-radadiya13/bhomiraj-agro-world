"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { categories, products } from "../data/site";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/ui/Reveal";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("name-asc");

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
    <div className="container-site py-10 md:py-14">
      <Reveal className="mb-8 max-w-2xl">
        <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
          Products
        </p>
        <h1 className="mt-3 font-display text-3xl font-600 tracking-tight text-ink md:text-4xl">
          Agricultural Products
        </h1>
        <p className="mt-3 text-muted">
          Browse our complete range. Click any product for full details and enquiry options.
        </p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-[20px] border border-line bg-white p-5 shadow-soft lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 text-sm font-600 text-ink">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            Filters
          </div>

          <label className="block text-xs font-600 uppercase tracking-wider text-muted">
            Search
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-line bg-bg px-3 py-2.5">
            <Search className="h-4 w-4 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <label className="mt-5 block text-xs font-600 uppercase tracking-wider text-muted">
            Category
          </label>
          <div className="mt-2 space-y-1">
            <FilterButton
              active={category === "all"}
              onClick={() => setCategory("all")}
              label="All Products"
            />
            {categories.map((cat) => (
              <FilterButton
                key={cat.slug}
                active={category === cat.slug}
                onClick={() => setCategory(cat.slug)}
                label={cat.name}
              />
            ))}
          </div>

          <label className="mt-5 block text-xs font-600 uppercase tracking-wider text-muted">
            Sort
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-3 py-2.5 text-sm outline-none"
          >
            <option value="name-asc">Name A–Z</option>
            <option value="name-desc">Name Z–A</option>
            <option value="category">By Category</option>
          </select>
        </aside>

        <div>
          <p className="mb-5 text-sm text-muted">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-[20px] border border-line bg-white p-10 text-center text-muted">
              No products found. Try another search or category.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm transition ${
        active
          ? "bg-primary-50 font-600 text-primary"
          : "text-ink hover:bg-bg"
      }`}
    >
      {label}
    </button>
  );
}
