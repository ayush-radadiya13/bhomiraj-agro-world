"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";
import { seasonalProducts } from "../data/site";

export default function Seasonal() {
  return (
    <section id="seasons" className="relative bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Seasonal Picks"
          title="Right products for"
          highlight="every season"
          description="Shop curated kits based on your farming season — Kharif, Rabi or Summer."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {seasonalProducts.map((s) => (
            <StaggerItem key={s.season}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-[26rem] overflow-hidden rounded-4xl shadow-card"
              >
                <SmartImage
                  src={s.image}
                  alt={`${s.season} season crops`}
                  width={700}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/90 via-leaf-950/30 to-transparent" />

                <div className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.tint} text-white shadow-glow`}>
                  <s.icon className="h-6 w-6" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-600 backdrop-blur-sm">
                    {s.months}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-800">
                    {s.season} Season
                  </h3>
                  <p className="mt-1 text-sm text-leaf-100/80">{s.crops}</p>
                  <a
                    href="#featured"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-harvest-400 transition group-hover:gap-3"
                  >
                    View {s.season} products <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
