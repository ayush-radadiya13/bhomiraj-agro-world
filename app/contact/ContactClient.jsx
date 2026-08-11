"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";
import { brand } from "../data/site";
import Reveal from "../components/ui/Reveal";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like to get in touch."
  )}`;

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const mobile = form.get("mobile");
    const email = form.get("email");
    const requirement = form.get("requirement");
    const text = encodeURIComponent(
      `Hello Bhumiraj Agro World,\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nRequirement: ${requirement}`
    );
    window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="bg-[linear-gradient(180deg,#f7faf7_0%,#ffffff_35%,#ffffff_100%)] pt-24">
      <div className="container-site py-8 sm:py-10 md:py-14">
        <Reveal className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Contact Us
          </p>
          <h1 className="mt-3 font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl md:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Reach out for product enquiries, distribution queries, or farming
            guidance. We&apos;re here to help.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left — Form */}
          <Reveal>
            <div className="h-full rounded-[1.25rem] border border-primary/10 bg-white p-5 shadow-[0_16px_40px_-24px_rgba(46,125,50,0.35)] sm:rounded-[1.5rem] sm:p-8">
              <h2 className="font-display text-lg font-700 text-ink sm:text-xl">
                Send your requirement
              </h2>
              <p className="mt-1 text-sm text-muted">
                Fill the form and we&apos;ll respond quickly on WhatsApp or email.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/15 bg-primary-50 p-6 text-sm leading-relaxed text-primary">
                  Thank you. Your enquiry is ready on WhatsApp. Our team will
                  contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                  <Field
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-600 uppercase tracking-wider text-muted">
                      Requirement
                    </label>
                    <textarea
                      name="requirement"
                      required
                      rows={5}
                      placeholder="Tell us about the product or support you need…"
                      className="w-full resize-none rounded-2xl border border-line bg-[#f8faf8] px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-700 text-white shadow-[0_12px_28px_-12px_rgba(46,125,50,0.55)] transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <Send className="h-4 w-4" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Right — Contact info */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-primary/10 bg-white shadow-[0_16px_40px_-24px_rgba(46,125,50,0.35)] sm:rounded-[1.5rem]">
              <div className="bg-gradient-to-br from-primary to-primary-dark px-5 py-6 text-white sm:px-8 sm:py-7">
                <p className="text-[11px] font-600 uppercase tracking-[0.18em] text-white/70">
                  Company details
                </p>
                <h2 className="mt-2 font-display text-xl font-700 sm:text-2xl">
                  {brand.name}
                </h2>
                <p className="mt-2 text-sm text-white/80">{brand.tagline}</p>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-8">
                <InfoRow
                  icon={MapPin}
                  label="Address"
                  value={brand.address}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={brand.email}
                  href={`mailto:${brand.email}`}
                />
                <InfoRow
                  icon={Phone}
                  label="Mobile"
                  value={brand.phoneDisplay}
                  href={brand.phoneHref}
                />
                <InfoRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={brand.phoneDisplay}
                  href={whatsappHref}
                  external
                  iconClass="bg-[#25D366] text-white"
                  IconComponent={WhatsAppIcon}
                />
                <InfoRow
                  icon={Clock}
                  label="Working Hours"
                  value={brand.hours}
                />

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-700 text-white transition hover:bg-[#1ebe57]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Full-width map */}
        <Reveal className="mt-8 md:mt-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white p-2 shadow-[0_16px_40px_-24px_rgba(46,125,50,0.3)] sm:p-3">
            <div className="mb-3 flex items-center justify-between gap-3 px-1 sm:px-2">
              <div>
                <p className="text-[11px] font-600 uppercase tracking-[0.16em] text-primary">
                  Find us
                </p>
                <h2 className="mt-1 font-display text-lg font-700 text-ink sm:text-xl">
                  Visit Bhumiraj Agro World
                </h2>
              </div>
              <a
                href={brand.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-primary/20 bg-primary-50 px-3.5 py-2 text-xs font-700 text-primary transition hover:bg-primary hover:text-white"
              >
                Open in Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-[1.1rem]">
              <iframe
                title="Bhumiraj Agro World on Google Maps"
                src={brand.mapEmbedUrl}
                className="h-[240px] w-full border-0 sm:h-[300px] md:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-600 uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-[#f8faf8] px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  external,
  iconClass,
  IconComponent,
}) {
  const content = (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
          iconClass || "bg-primary-50 text-primary"
        }`}
      >
        {IconComponent ? (
          <IconComponent className="h-5 w-5" />
        ) : (
          <Icon className="h-5 w-5" />
        )}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-600 uppercase tracking-[0.14em] text-muted">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-600 leading-relaxed text-ink">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex items-start gap-3.5 rounded-2xl border border-primary/8 bg-[#f8faf8] p-3.5 transition hover:border-primary/25 hover:bg-primary-50/60"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-primary/8 bg-[#f8faf8] p-3.5">
      {content}
    </div>
  );
}
