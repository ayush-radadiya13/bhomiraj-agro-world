import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand } from "../data/site";
import SmartImage from "./ui/SmartImage";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like to get in touch."
  )}`;

  return (
    <footer className="border-t-2 border-primary bg-primary-50/80 text-ink">
      <div className="container-site py-7 md:py-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.7fr_1.2fr] md:items-start md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <Link href="/" className="shrink-0" aria-label={brand.name}>
              <span className="relative block h-14 w-14 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-primary/15">
                <SmartImage
                  src={brand.logo}
                  alt={brand.name}
                  width={112}
                  className="h-full w-full object-contain p-1"
                />
              </span>
            </Link>
            <div className="min-w-0">
              <p className="font-display text-base font-700 text-ink">
                {brand.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                {brand.tagline}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
              Quick Links
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 md:flex-col md:gap-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2.5 text-sm">
            <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
              Contact
            </p>
            <p className="flex gap-2.5 text-ink/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="leading-relaxed">{brand.address}</span>
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2.5 text-ink/80 transition hover:text-primary"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-700 text-white transition hover:bg-[#1ebe57]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-primary/15 pt-4 text-xs text-muted sm:flex-row sm:text-sm">
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
