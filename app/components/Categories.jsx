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
          title="Crop Protection"
          highlight="Categories"
          description="Explore our curated range of insecticides, fungicides, herbicides, and plant growth regulators."
        />

        <StaggerGroup className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group block overflow-hidden rounded-[20px] border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef3f0]">
                  <SmartImage
                    src={cat.image}
                    alt={cat.name}
                    width={600}
                    className="h-full w-full object-contain object-center p-4 transition duration-500 group-hover:scale-105"
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
