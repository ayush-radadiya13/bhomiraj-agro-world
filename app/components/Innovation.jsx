"use client";

import { motion } from "framer-motion";
import { Sparkles, Leaf, ShieldCheck } from "lucide-react";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Products" },
  { value: 5000, suffix: "+", label: "Happy Farmers" },
];

const productImage =
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9";

export default function Innovation() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-leaf-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* IMAGE — animates in from the left */}
        <Reveal direction="left" duration={0.9} amount={0.3}>
          <div className="relative mx-auto w-full max-w-md">
            {/* dashed circle accent */}
            <svg
              className="absolute -left-6 -top-6 h-24 w-24 text-leaf-400"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 9"
              />
            </svg>

            {/* zigzag accent */}
            <svg
              className="absolute -bottom-4 -right-2 h-10 w-28 text-harvest-500"
              viewBox="0 0 120 24"
              fill="none"
            >
              <path
                d="M2 12 L14 2 L26 12 L38 2 L50 12 L62 2 L74 12 L86 2 L98 12 L110 2"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* organic green blob behind the image */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-[42%_58%_55%_45%/45%_45%_55%_55%] bg-gradient-to-br from-leaf-400 via-leaf-500 to-leaf-700 opacity-90" />

            {/* floating image card */}
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-glow"
            >
              <SmartImage
                src={productImage}
                alt="Premium crop protection product"
                width={700}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/20 to-transparent" />
            </motion.div>

            {/* rotating quality seal */}
            <div className="absolute -right-3 -top-3 h-24 w-24 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[0, 30, 60].map((deg) => (
                  <span
                    key={deg}
                    style={{ transform: `rotate(${deg}deg)` }}
                    className="absolute inset-2 rounded-[28%] bg-gradient-to-br from-harvest-400 to-harvest-600"
                  />
                ))}
              </motion.div>
              <div className="absolute inset-0 m-auto flex h-[68%] w-[68%] flex-col items-center justify-center rounded-full bg-white text-center shadow-md">
                <span className="font-display text-base font-800 leading-none text-leaf-900">
                  100%
                </span>
                <span className="mt-0.5 text-[0.55rem] font-700 uppercase tracking-wide text-leaf-700">
                  Quality
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CONTENT — animates in from the right */}
        <Reveal direction="right" duration={0.9} delay={0.1} amount={0.3}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-leaf-50 px-4 py-1.5 text-xs font-700 uppercase tracking-wider text-leaf-700">
              <Sparkles className="h-3.5 w-3.5" />
              Our Promise
            </span>

            <h2 className="font-display mt-5 text-3xl font-800 leading-tight text-leaf-950 sm:text-4xl lg:text-[2.6rem]">
              Transforming Agriculture with{" "}
              <span className="text-gradient">Sustainable, Farmer-First</span>{" "}
              Solutions
            </h2>

            <p className="mt-5 text-base leading-relaxed text-leaf-800/75">
              Innovation is at the core of everything we do. We bring farmers
              certified seeds and genuine crop protection medicines from the
              brands they trust — chosen to boost yield while protecting the soil
              and the environment for generations to come.
            </p>
            <p className="mt-4 text-base leading-relaxed text-leaf-800/75">
              Every product in our showcase is sourced from authorised
              manufacturers and backed by free, crop-specific advice from our
              agronomists. We believe sustainable farming starts with the right
              inputs and honest guidance.
            </p>

            {/* feature chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-600 text-leaf-800 shadow-card">
                <Leaf className="h-4 w-4 text-leaf-600" />
                Eco-friendly approach
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-600 text-leaf-800 shadow-card">
                <ShieldCheck className="h-4 w-4 text-leaf-600" />
                100% genuine products
              </span>
            </div>

            {/* stats */}
            <div className="mt-9 grid grid-cols-3 divide-x divide-leaf-100 rounded-3xl border border-leaf-100 bg-white p-6 shadow-card">
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-4">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display block text-2xl font-800 text-leaf-700 sm:text-3xl"
                  />
                  <span className="mt-1 block text-xs font-600 text-leaf-800/60 sm:text-sm">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
