"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "./ui/Reveal";

export default function CTA() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <section className="border-t border-primary/10 bg-white section-pad">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-600 tracking-tight text-ink sm:text-3xl md:text-4xl">
            Ready to Improve Your{" "}
            <span className="text-primary">Farming?</span>
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base md:text-lg">
            Explore our agricultural products or contact our team for
            personalised product guidance.
          </p>
          <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-center gap-3 sm:mt-7">
            <Link href="/products" className="btn-primary min-w-0 flex-1 sm:flex-none sm:w-auto">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline min-w-0 flex-1 sm:flex-none sm:w-auto">
              Contact Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
