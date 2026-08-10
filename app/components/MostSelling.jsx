"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

const bgImage =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399";

export default function MostSelling() {
  return (
    <section className="relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={bgImage}
          alt="Golden harvest field"
          width={1920}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/95 via-leaf-950/80 to-leaf-900/60" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <Reveal direction="up" className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-leaf-100 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-harvest-400 text-harvest-400" />
            Most Selling Products
          </span>

          <h2 className="font-display mt-5 text-3xl font-800 leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            The inputs farmers <span className="text-gradient">reach for first</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-leaf-100/80">
            From high-yield hybrid seeds to dependable crop protection, these
            are the products that keep returning to farmers&apos; fields season
            after season — proven, genuine and trusted.
          </p>

          <Link
            href="/products"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-harvest-500 px-7 py-4 text-sm font-700 text-white shadow-glow transition hover:scale-105 hover:bg-harvest-600"
          >
            View Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
