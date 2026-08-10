"use client";

import Link from "next/link";
import Reveal from "./ui/Reveal";

export default function CTA() {
  return (
    <section className="border-t border-primary/10 bg-white section-pad">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-600 tracking-tight text-ink md:text-4xl">
            Ready to Improve Your{" "}
            <span className="text-primary">Farming?</span>
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Explore our agricultural products or contact our team for
            personalised product guidance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
