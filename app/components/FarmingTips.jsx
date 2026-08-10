"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";
import { tips } from "../data/site";

export default function FarmingTips() {
  return (
    <section id="tips" className="relative bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Farming Tips"
            title="Grow smarter with"
            highlight="expert advice"
            description="Practical, science-backed tips to boost your yield and protect your crops."
          />
          <a
            href="#tips"
            className="inline-flex items-center gap-2 rounded-full border border-leaf-700/15 bg-white px-5 py-3 text-sm font-700 text-leaf-800 shadow-sm transition hover:bg-leaf-600 hover:text-white"
          >
            All articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {tips.map((tip) => (
            <StaggerItem key={tip.title}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-leaf-700/10 bg-white shadow-card transition-shadow duration-500 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SmartImage
                    src={tip.image}
                    alt={tip.title}
                    width={700}
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-115"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-700 text-leaf-700 backdrop-blur-sm">
                    {tip.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-1.5 text-xs text-leaf-700/60">
                    <Clock className="h-3.5 w-3.5" /> {tip.read}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-700 leading-snug text-leaf-950 transition group-hover:text-leaf-600">
                    {tip.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-leaf-900/70">
                    {tip.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-leaf-600 transition group-hover:gap-3">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
