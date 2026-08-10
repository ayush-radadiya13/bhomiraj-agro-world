"use client";

import { Star } from "lucide-react";
import { testimonials } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="Farmer Reviews"
          description="Trusted by farmers who value quality products and clear guidance."
        />

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <article className="card-surface h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <SmartImage
                      src={item.photo}
                      alt={item.name}
                      width={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-600 text-ink">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted">{item.village}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-wheat text-wheat"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  “{item.review}”
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
