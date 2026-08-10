"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SmartImage from "./ui/SmartImage";
import { brand, images } from "../data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.hero}
          alt="Bhumiraj Agro World — premium seeds and crop solutions"
          width={1920}
          priority
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* Soft green at bottom for text contrast; fade to white at top for header */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/75 via-primary-800/25 to-white/80" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-primary-900/45 via-primary-900/15 to-transparent md:max-w-4xl" />
      </div>

      <div className="container-site relative z-10 max-w-3xl pl-6 sm:pl-10 md:pl-14 lg:pl-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-600 leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          {brand.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
        >
          {brand.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-3.5 text-sm font-600 text-primary shadow-[0_12px_28px_-10px_rgba(15,53,19,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-[0_16px_36px_-12px_rgba(15,53,19,0.5)]"
          >
            Explore Products
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-primary text-white transition duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-600 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
