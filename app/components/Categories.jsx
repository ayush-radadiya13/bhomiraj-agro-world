"use client";

import Link from "next/link";
import { images } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Reveal from "./ui/Reveal";

export default function Categories() {
  return (
    <section id="categories" className="section-pad bg-bg">
      <div className="container-site">
        <Reveal>
          <div className="grid items-center gap-4 rounded-xl border !border-primary p-3 sm:gap-6 sm:p-4 md:p-5 lg:grid-cols-2 lg:gap-8 lg:p-5">
            <SmartImage
              src={images.categoryMain}
              alt="Bhumiraj Agro World crop protection categories — insecticides, fungicides, herbicides, and PGR"
              width={1000}
              className="order-1 aspect-[4/3] w-full object-contain object-center sm:aspect-[5/4] lg:order-2 lg:aspect-[4/3]"
            />

            <div className="order-2 flex flex-col justify-center lg:order-1">
              <SectionHeading
                align="left"
                className="!mb-3 sm:!mb-4 md:!mb-4"
                eyebrow="Categories"
                title="Crop Protection"
                highlight="Categories"
                description="Explore our carefully curated range of insecticides, fungicides, herbicides, and plant growth regulators, developed to meet the diverse needs of modern agriculture. Our high-quality crop protection solutions help control harmful insects, prevent fungal diseases, manage weeds effectively, and promote healthier plant growth. Designed for improved crop performance and sustainable farming, our products support stronger yields, better quality harvests, and enhanced productivity across a wide variety of crops and growing conditions."
                descriptionClassName="mt-3 text-xs leading-relaxed text-muted sm:mt-3.5 sm:text-sm"
              />
              <Link
                href="/categories"
                className="btn-primary mt-0 w-fit !min-h-9 !px-4 !py-2 text-xs sm:!min-h-10 sm:!px-5 sm:!py-2.5 sm:text-sm"
              >
                View Categories
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
