"use client";

import { Eye, Target, Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

const visionImage =
  "https://images.unsplash.com/photo-1492496913980-501348b61469";
const missionImage =
  "https://images.unsplash.com/photo-1536657464919-892534f60d6e";

const visionPoints = [
  "Make genuine, high-quality inputs reachable for every farmer.",
  "Grow yields while protecting soil for the next generation.",
];

const missionPoints = [
  "Supply only authorised, 100% original seeds and crop protection.",
  "Pair every product with free, crop-specific agronomist advice.",
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />

      <div className="relative mx-auto max-w-7xl space-y-20 px-6 sm:space-y-28">
        {/* Vision — image left, text right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" amount={0.3}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-glow">
                <SmartImage
                  src={visionImage}
                  alt="Sunrise over farmland"
                  width={840}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-leaf-500 to-leaf-700 text-white shadow-glow sm:flex">
                <Eye className="h-10 w-10" strokeWidth={1.6} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} amount={0.3}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-leaf-600/20 bg-leaf-50 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-leaf-700">
                <Eye className="h-3.5 w-3.5" />
                Our Vision
              </span>
              <h2 className="font-display mt-4 text-3xl font-800 leading-tight text-leaf-950 sm:text-4xl">
                Prosperous farms, <span className="text-gradient">healthier soil</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-leaf-800/75">
                We picture a future where every farmer — big or small — has easy
                access to genuine inputs and trustworthy knowledge, growing more
                from the same land while keeping it fertile for generations.
              </p>
              <ul className="mt-6 space-y-3">
                {visionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-sm leading-relaxed text-leaf-800/80">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Mission — text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" amount={0.3} className="lg:order-2">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-glow">
                <SmartImage
                  src={missionImage}
                  alt="Farmer in a paddy field"
                  width={840}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-harvest-500 to-earth-600 text-white shadow-glow sm:flex">
                <Target className="h-10 w-10" strokeWidth={1.6} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} amount={0.3} className="lg:order-1">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-leaf-600/20 bg-leaf-50 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-leaf-700">
                <Target className="h-3.5 w-3.5" />
                Our Mission
              </span>
              <h2 className="font-display mt-4 text-3xl font-800 leading-tight text-leaf-950 sm:text-4xl">
                The right input, <span className="text-gradient">honest advice</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-leaf-800/75">
                Our mission is to put genuine seeds and crop protection into
                farmers&apos; hands and back them with free, practical guidance —
                so every decision in the field is an informed one, season after
                season.
              </p>
              <ul className="mt-6 space-y-3">
                {missionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-sm leading-relaxed text-leaf-800/80">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
