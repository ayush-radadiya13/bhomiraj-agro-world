"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SmartImage from "./ui/SmartImage";
import { brand, images } from "../data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-24 sm:pb-16 sm:pt-28 md:items-center md:pb-24 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.hero}
          alt="Bhumiraj Agro World — premium seeds and crop solutions"
          width={1920}
          priority
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* Soft green at bottom for text contrast; fade to white at top for header */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/30 to-white/80" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-primary-900/50 via-primary-900/20 to-transparent md:max-w-4xl" />
      </div>

      <div className="container-site relative z-10 max-w-3xl sm:pl-4 md:pl-8 lg:pl-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[1.75rem] font-600 leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          {brand.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base md:text-lg"
        >
          {brand.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <Link
            href="/products"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-600 text-primary shadow-[0_12px_28px_-10px_rgba(15,53,19,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-[0_16px_36px_-12px_rgba(15,53,19,0.5)] sm:w-auto sm:px-7"
          >
            Explore Products
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-primary text-white transition duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-600 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 sm:w-auto sm:px-7"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
