"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { brand, contactInfo } from "../data/site";
import Reveal from "../components/ui/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like to get in touch."
  )}`;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-bg pt-24">
      <div className="container-site py-10 md:py-14">
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            Contact
          </p>
          <h1 className="mt-3 font-display text-3xl font-600 tracking-tight text-ink md:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-muted">
            Reach out for product enquiries, distribution queries, or farming guidance.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-soft">
              <iframe
                title="Bhumiraj Agro World location"
                src="https://maps.google.com/maps?q=Gujarat%20APMC%20Market&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-[320px] w-full border-0 md:h-full md:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-6 md:p-8">
              <h2 className="font-display text-xl font-600 text-ink">
                Send a Message
              </h2>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-sm text-primary">
                  Thank you. Your enquiry has been noted. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                  <div>
                    <label className="text-xs font-600 uppercase tracking-wider text-muted">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" /> Send Enquiry
                  </button>
                </form>
              )}

              <div className="mt-8 border-t border-line pt-6">
                <h3 className="font-display text-lg font-600 text-ink">
                  Company Information
                </h3>
                <ul className="mt-4 space-y-3">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex gap-3 text-sm">
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-600 text-ink">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted transition hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-600 text-white transition hover:brightness-95"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="text-xs font-600 uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
