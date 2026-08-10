"use client";

import Link from "next/link";
import { brand, images } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-site grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal direction="left">
          <div className="overflow-hidden rounded-[20px]">
            <SmartImage
              src={images.farmer}
              alt="Bhumiraj Agro World farming expertise"
              width={1000}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="About"
            highlight={brand.name}
            description="Bhumiraj Agro World is committed to delivering premium-quality agricultural products including seeds, crop protection solutions, and plant nutrition products. We help farmers achieve healthier crops, improved productivity, and sustainable farming practices through reliable and innovative agricultural solutions."
          />
          <Link href="/about" className="btn-primary mt-2 w-full sm:w-auto">
            Read More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
