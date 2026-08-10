"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { faqs } from "../data/site";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions?"
            highlight="We've got answers"
            description="Everything you need to know before ordering. Still unsure? Our team is one tap away."
          />
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-3xl border border-leaf-700/10 bg-white p-5 shadow-card transition hover:shadow-glow"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-500 to-leaf-700 text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-700 text-leaf-950">
                Chat with an agronomist
              </span>
              <span className="block text-xs text-leaf-700/60">
                Free advice · 7 AM – 9 PM
              </span>
            </span>
          </a>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-3xl border transition-colors ${
                  isOpen
                    ? "border-leaf-500/30 bg-white shadow-card"
                    : "border-leaf-700/10 bg-white/70"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                      isOpen
                        ? "bg-leaf-600 text-white"
                        : "bg-leaf-50 text-leaf-600"
                    }`}
                  >
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-base font-700 text-leaf-950">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-700"
                  >
                    <Plus className="h-[1.125rem] w-[1.125rem]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed text-leaf-900/70">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
