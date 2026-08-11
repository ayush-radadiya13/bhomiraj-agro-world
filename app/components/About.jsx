"use client";

import Link from "next/link";
import { brand, images } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-site grid items-center gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal direction="left">
          <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-[0_14px_36px_-20px_rgba(30,41,59,0.28)]">
            <SmartImage
              src={images.farmer}
              alt="Bhumiraj Agro World farming expertise"
              width={1000}
              className="aspect-[16/11] w-full object-cover sm:aspect-[5/3] lg:aspect-[16/11]"
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
