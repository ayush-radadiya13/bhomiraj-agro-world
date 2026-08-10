"use client";

import SectionHeading from "./ui/SectionHeading";
import { brands } from "../data/site";

export default function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section className="relative overflow-hidden bg-leaf-950 py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-leaf-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-harvest-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          light
          eyebrow="Popular Brands"
          title="Trusted brands,"
          highlight="100% genuine"
          description="We partner directly with the world's leading agri-input companies."
        />
      </div>

      <div className="mask-fade-x relative mt-12 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-4">
          {loop.map((brand, i) => (
            <BrandPill key={`${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>

      <div className="mask-fade-x relative mt-4 flex overflow-hidden">
        <div
          className="flex shrink-0 items-center gap-4"
          style={{ animation: "marquee 38s linear infinite reverse" }}
        >
          {loop.map((brand, i) => (
            <BrandPill key={`r-${brand}-${i}`} name={brand} variant />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandPill({ name, variant }) {
  return (
    <div
      className={`flex h-16 min-w-[180px] items-center justify-center gap-2.5 rounded-2xl border px-7 backdrop-blur-sm transition hover:scale-105 ${
        variant
          ? "border-white/10 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.06]"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-leaf-400 to-leaf-600 text-sm font-800 text-white">
        {name.charAt(0)}
      </span>
      <span className="font-display whitespace-nowrap text-lg font-700 tracking-tight text-white/90">
        {name}
      </span>
    </div>
  );
}
