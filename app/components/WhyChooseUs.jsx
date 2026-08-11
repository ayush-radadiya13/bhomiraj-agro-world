"use client";

import {
  BadgeCheck,
  Sprout,
  Users,
  ShieldCheck,
} from "lucide-react";
import { whyChooseUs } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";

const icons = {
  BadgeCheck,
  Sprout,
  Users,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Agricultural"
          highlight="Expertise"
          description="Simple reasons farmers and distributors choose Bhumiraj Agro World."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon] || BadgeCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl bg-white p-5 shadow-[0_8px_30px_-12px_rgba(46,125,50,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(46,125,50,0.22)] sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-600 text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
