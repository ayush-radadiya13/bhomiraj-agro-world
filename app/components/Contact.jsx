"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

const contactInfo = [
  { icon: Phone, label: "Farmer Helpline", value: "1800-200-KHET", sub: "Toll free · 7AM–9PM" },
  { icon: Mail, label: "Email Us", value: "help@khedutagro.in", sub: "Reply within 24 hrs" },
  { icon: MapPin, label: "Head Office", value: "Ahmedabad, Gujarat", sub: "Serving all of India" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-leaf-700/10 bg-white shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="relative overflow-hidden bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-950 p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-harvest-400/20 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-600 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-harvest-400" /> Contact
                </span>
                <h2 className="font-display mt-5 text-3xl font-800 leading-tight sm:text-4xl">
                  Let&apos;s grow <span className="text-harvest-400">together</span>
                </h2>
                <p className="mt-3 max-w-md text-leaf-100/80">
                  Have a question about a product or your crop? Reach out — our
                  farming experts are here to help you succeed.
                </p>

                <div className="mt-9 flex flex-col gap-5">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                        <c.icon className="h-[1.375rem] w-[1.375rem] text-leaf-200" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-leaf-300">
                          {c.label}
                        </p>
                        <p className="text-lg font-700">{c.value}</p>
                        <p className="text-xs text-leaf-100/60">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-700 text-white transition hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 sm:p-12">
              <Reveal direction="right">
                <h3 className="font-display text-2xl font-800 text-leaf-950">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-leaf-800/60">
                  We&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" placeholder="Rameshbhai Patel" />
                    <Field label="Mobile Number" placeholder="+91 98765 43210" type="tel" />
                  </div>
                  <Field label="Email (optional)" placeholder="you@email.com" type="email" required={false} />
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-leaf-900">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your crop or the product you need…"
                      className="w-full resize-none rounded-2xl border border-leaf-700/15 bg-cream/60 px-4 py-3 text-base text-leaf-950 outline-none ring-leaf-500/30 transition placeholder:text-leaf-800/40 focus:border-leaf-500/40 focus:ring-2"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    strength={0.25}
                    className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-700 text-white transition ${
                      sent
                        ? "bg-leaf-600"
                        : "bg-gradient-to-r from-harvest-500 to-harvest-600 hover:shadow-glow"
                    }`}
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text", required = true }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-600 text-leaf-900">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-leaf-700/15 bg-cream/60 px-4 py-3 text-base text-leaf-950 outline-none ring-leaf-500/30 transition placeholder:text-leaf-800/40 focus:border-leaf-500/40 focus:ring-2"
      />
    </div>
  );
}
