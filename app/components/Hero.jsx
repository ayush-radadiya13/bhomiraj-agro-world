"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SmartImage from "./ui/SmartImage";
import { brand, images } from "../data/site";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-50">
      {/* Mobile hero — portrait asset */}
      <div className="relative aspect-[916/1717] w-full md:hidden">
        <SmartImage
          src={images.heroMobile}
          alt="Bhumiraj Agro World — premium seeds and crop solutions"
          width={916}
          height={1717}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Desktop hero — landscape asset */}
      <div className="relative hidden aspect-[1726/911] w-full md:block">
        <SmartImage
          src={images.hero}
          alt="Bhumiraj Agro World — premium seeds and crop solutions"
          width={1726}
          height={911}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Soft light wash from the left so black type stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-white/20 to-white/35 md:bg-gradient-to-r md:from-white/55 md:via-white/25 md:to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center justify-start px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-16 lg:px-14 lg:py-20 xl:px-20">
        <div className="flex w-full max-w-[600px] flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display text-[1.55rem] font-600 leading-[1.18] tracking-tight text-black sm:text-[1.85rem] md:text-[2.35rem] lg:text-[2.55rem]"
          >
            {brand.heroHeading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-md text-sm leading-relaxed text-black/75 sm:mt-3.5 sm:text-[0.95rem] md:mt-4 md:text-base lg:text-[1.05rem]"
          >
            {brand.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-5 flex w-full flex-row items-center justify-start gap-2 sm:mt-6 sm:w-auto sm:gap-2.5 md:mt-8"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2.5 text-xs font-600 text-white shadow-[0_10px_24px_-10px_rgba(15,53,19,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_14px_32px_-12px_rgba(15,53,19,0.45)] sm:gap-2 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm md:px-6"
            >
              Explore Products
              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-white/15 text-white transition duration-300 group-hover:translate-x-0.5 sm:h-6 sm:w-6 sm:rounded-xl">
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
