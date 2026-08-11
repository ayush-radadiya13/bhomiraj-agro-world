"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand, categories } from "../data/site";
import SmartImage from "./ui/SmartImage";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like to get in touch."
  )}`;

  return (
    <footer className="border-t-2 border-primary bg-[url('/assets/footer.png')] bg-cover bg-center bg-no-repeat text-ink">
      <div className="container-site py-8 md:py-9">
        <div className="flex flex-col gap-7 md:grid md:grid-cols-[1fr_0.6fr_0.8fr_1fr] md:items-start md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="shrink-0" aria-label={brand.name}>
              <span className="relative block h-16 w-16 overflow-hidden rounded-full border border-primary/30 md:h-20 md:w-20">
                <SmartImage
                  src={brand.logo}
                  alt={`${brand.name} logo - Rajkot, Gujarat`}
                  width={160}
                  className="h-full w-full object-contain p-1"
                />
              </span>
            </Link>
            <div className="min-w-0">
              <p className="font-display text-lg font-700 leading-snug text-ink md:text-xl">
                {brand.name}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                {brand.tagline}
              </p>
            </div>
          </div>

          {/* Quick links + Categories — single row on mobile */}
          <div className="grid grid-cols-2 gap-x-4 border border-primary/30 md:contents">
            <div className="p-3.5 md:p-0">
              <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
                Quick Links
              </p>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-ink/80 transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 md:p-0">
              <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
                Categories
              </p>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categories/${cat.slug}`}
                      className="text-ink/80 transition hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2.5 border border-primary/30 p-4 text-sm md:-ml-8 md:border-0 md:p-0">
            <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
              Contact
            </p>
            <p className="flex gap-2.5 text-ink/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="leading-relaxed break-words">{brand.address}</span>
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2.5 break-all text-ink/80 transition hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              {brand.email}
            </a>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 text-ink/80 transition hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {brand.phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366] px-3 py-1.5 text-xs font-700 text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-2 border-t border-primary/20 pt-4 text-center text-xs text-muted sm:flex-row sm:text-left sm:text-sm">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
