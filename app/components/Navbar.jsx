"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
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
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-primary/10 sm:h-12 sm:w-12">
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
              className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition hover:bg-primary-50 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-ink/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,22rem)] flex-col bg-white lg:hidden"
              data-lenis-prevent
            >
              <div className="flex items-center justify-between border-b border-line p-5">
                <span className="font-display text-lg font-600 text-ink">
                  {brand.shortName}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`block rounded-2xl px-4 py-3.5 text-base font-600 transition ${
                          isActive(link.href)
                            ? "bg-primary-50 text-primary"
                            : "text-ink hover:bg-bg"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 px-4 text-xs font-600 uppercase tracking-widest text-muted">
                  Categories
                </p>
                <ul className="mt-2 space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-500 text-ink hover:bg-bg"
                      >
                        <cat.icon className="h-4 w-4 text-primary" />
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-line p-5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
