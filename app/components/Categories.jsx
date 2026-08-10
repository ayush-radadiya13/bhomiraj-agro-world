"use client";

import Link from "next/link";
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
          title="Agricultural Product"
          highlight="Categories"
          description="Explore our curated range of seeds, crop medicines, plant nutrition, and bio products."
        />

        <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group block overflow-hidden rounded-[20px] border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={cat.image}
                    alt={cat.name}
                    width={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h3 className="font-display text-base font-600 text-ink sm:text-lg">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
