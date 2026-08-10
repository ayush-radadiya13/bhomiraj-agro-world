"use client";

import Link from "next/link";
import { ArrowRight, Network, MapPin, Boxes } from "lucide-react";
import Reveal from "./ui/Reveal";

const stats = [
  { icon: MapPin, value: "28", label: "States reached" },
  { icon: Network, value: "500+", label: "Partner dealers" },
  { icon: Boxes, value: "400+", label: "Products stocked" },
];

export default function Distribution() {
  return (
    <section className="relative overflow-hidden bg-leaf-950 py-20 text-white sm:py-28">
      {/* blueprint-style grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-leaf-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-harvest-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-leaf-100">
                <span className="h-1.5 w-1.5 rounded-full bg-harvest-500" />
                Reliable Supply
              </span>

              <h2 className="font-display mt-5 text-3xl font-800 leading-tight text-white sm:text-4xl md:text-[2.6rem]">
                Trusted Agri-Input{" "}
                <span className="text-gradient">Distribution</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-leaf-100/75">
                A dependable network keeps genuine seeds and crop protection
                moving from authorised manufacturers straight to the fields that
                need them. No counterfeits, no delays — just the right input, at
                the right time, in the right season.
              </p>

              <Link
                href="/sections#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-leaf-500 to-leaf-700 px-7 py-3.5 text-sm font-700 text-white shadow-glow transition hover:brightness-110"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition hover:border-leaf-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-leaf-400 to-leaf-700 text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-800 text-leaf-300">
                      {s.value}
                    </p>
                    <p className="text-sm text-leaf-100/70">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
