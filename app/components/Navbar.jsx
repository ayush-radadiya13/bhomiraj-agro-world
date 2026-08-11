"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { brand, categories } from "../data/site";
import SmartImage from "./ui/SmartImage";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", mobileOpen);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Home hero fades to white at the top — keep navbar in solid/light mode there
  const hasDarkHero =
    pathname === "/about" || /^\/categories\/.+/.test(pathname);

  const solid = scrolled || !hasDarkHero;

  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like to enquire about your products."
  )}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-white/95 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-site flex items-center justify-between gap-3 py-2 sm:gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label={brand.name}>
            <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-primary/10 sm:h-14 sm:w-14">
              <SmartImage
                src={brand.logo}
                alt={brand.name}
                width={96}
                className="h-full w-full object-contain p-0.5"
              />
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-600 transition ${
                    solid
                      ? isActive(link.href)
                        ? "text-primary"
                        : "text-ink/80 hover:text-primary"
                      : isActive(link.href)
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navActive"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                        solid ? "bg-primary" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp with ${brand.phoneDisplay}`}
              className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-600 text-white shadow-soft transition hover:bg-[#1ebe57] hover:shadow-lift md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
                solid
                  ? "text-primary hover:bg-primary-50"
                  : "text-white hover:bg-white/15"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-white lg:hidden"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex items-center justify-between border-b border-primary/8 px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))]">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-primary/10">
                  <SmartImage
                    src={brand.logo}
                    alt={brand.name}
                    width={96}
                    className="h-full w-full object-contain p-0.5"
                  />
                </span>
                <div>
                  <p className="font-display text-base font-600 text-ink">
                    {brand.shortName}
                  </p>
                  <p className="text-[11px] text-muted">{brand.tagline}</p>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-primary-50 text-primary transition hover:bg-primary-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative z-10 flex flex-1 flex-col overflow-y-auto px-5 pb-6 pt-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition ${
                        isActive(link.href)
                          ? "bg-primary-50 text-primary"
                          : "text-ink/80 hover:bg-primary-50/70 hover:text-primary"
                      }`}
                    >
                      <span className="font-display text-[1.35rem] font-600 tracking-tight sm:text-2xl">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className={`h-5 w-5 transition ${
                          isActive(link.href)
                            ? "text-primary"
                            : "text-ink/25 group-hover:text-primary/70"
                        }`}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-8"
              >
                <p className="px-1 text-[11px] font-600 uppercase tracking-[0.2em] text-muted">
                  Categories
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="flex items-center gap-2.5 rounded-2xl border border-primary/10 bg-primary-50/50 px-3.5 py-3.5 text-sm font-600 text-ink transition hover:border-primary/25 hover:bg-primary-50"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-soft ring-1 ring-primary/10">
                        <cat.icon className="h-4 w-4" />
                      </span>
                      <span className="leading-tight">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto space-y-3 pt-10 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-600 text-white transition hover:bg-[#1ebe57]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </a>
                <a
                  href={brand.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/15 bg-primary-50 px-5 py-3.5 text-sm font-600 text-primary transition hover:bg-primary-100"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
