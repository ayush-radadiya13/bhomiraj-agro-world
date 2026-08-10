"use client";

import {
  Download,
  FileText,
  CalendarClock,
  Truck,
  PackageSearch,
  Headset,
} from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "./ui/Reveal";
import AnimatedCounter from "./ui/AnimatedCounter";

const features = [
  {
    icon: CalendarClock,
    value: 10,
    suffix: "+",
    title: "Years of Experience",
    text: "A decade of standing beside farmers with genuine inputs.",
  },
  {
    icon: Truck,
    value: 28,
    suffix: "",
    title: "States Distribution",
    text: "A growing network bringing inputs closer to every field.",
  },
  {
    icon: PackageSearch,
    value: 400,
    suffix: "+",
    title: "Product Range",
    text: "Seeds and crop protection across all major crops.",
  },
  {
    icon: Headset,
    value: 24,
    suffix: "/7",
    title: "Expert Support",
    text: "Free agronomist advice whenever your crop needs it.",
  },
];

export default function Catalog() {
  return (
    <section className="relative bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Catalog download band */}
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-950 px-6 py-12 shadow-glow sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-leaf-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-harvest-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex items-start gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-harvest-400 ring-1 ring-white/15 sm:flex">
                  <FileText className="h-8 w-8" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-800 text-white sm:text-3xl">
                    Download our Product Catalog
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/80 sm:text-base">
                    Browse our complete range of certified seeds and crop
                    protection medicines — specifications, crops, brands and
                    seasons, all in one handy PDF.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-harvest-500 px-7 py-4 text-sm font-700 text-white shadow-glow transition hover:scale-105 hover:bg-harvest-600"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Catalog
              </a>
            </div>
          </div>
        </Reveal>

        {/* Feature stat boxes */}
        <StaggerGroup
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
          stagger={0.09}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-3xl border border-leaf-700/10 bg-white p-7 text-center shadow-card transition hover:-translate-y-1.5 hover:shadow-glow">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-500 to-leaf-700 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <f.icon className="h-8 w-8" strokeWidth={1.8} />
                </span>
                <AnimatedCounter
                  value={f.value}
                  suffix={f.suffix}
                  className="font-display mt-5 block text-3xl font-800 text-leaf-700"
                />
                <h3 className="font-display mt-1 text-base font-700 text-leaf-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-leaf-800/60">
                  {f.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
