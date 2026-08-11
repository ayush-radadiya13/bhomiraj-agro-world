"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";

export default function Categories() {
  return (
    <section id="categories" className="section-pad bg-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Categories"
          title="Crop Protection"
          highlight="Categories"
          description="Explore our curated range of insecticides, fungicides, herbicides, and plant growth regulators."
        />

        <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[5/4] lg:aspect-[16/10]">
                  <SmartImage
                    src={cat.image}
                    alt={cat.name}
                    width={800}
                    className="h-full w-full object-cover object-[center_45%] transition duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-700 text-white sm:text-xl">
                          {cat.name}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/80">
                          {cat.description}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
