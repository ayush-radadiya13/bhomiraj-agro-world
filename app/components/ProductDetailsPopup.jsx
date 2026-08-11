"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Check,
  Sparkles,
  Package,
  FlaskConical,
  FileText,
} from "lucide-react";
import SmartImage from "./ui/SmartImage";
import { brand } from "../data/site";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ProductDetailsPopup({ product, open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("lenis-stopped");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const enquiryText = encodeURIComponent(
    `Hello Bhumiraj Agro World, I would like to enquire about ${product?.title || product?.name || "your product"}.`
  );
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${enquiryText}`;

  const title = product?.title || product?.name || "";
  const features = product?.features?.length ? product.features : [];
  const packing = product?.packing || product?.packaging || "";
  const description = product?.description || "";
  const composition = product?.composition || "";
  const showPdfDetails = Boolean(product?.fromPdf);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Close product details"
            className="absolute inset-0 bg-[#0b2a1a]/55 backdrop-blur-[5px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-popup-title"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[1.25rem] bg-white shadow-[0_28px_70px_-24px_rgba(11,42,26,0.55)] sm:rounded-2xl"
            data-lenis-prevent
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#e6eee9] bg-[#f4f8f5] px-4 py-3 sm:px-5">
              <p className="truncate text-[11px] font-600 uppercase tracking-[0.18em] text-primary">
                {product.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d9e5dd] bg-white text-ink transition hover:bg-primary hover:text-white sm:h-10 sm:w-10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-[#e6eee9] bg-[#eef3f0] p-3 sm:p-5 md:border-b-0 md:border-r">
                  <div className="overflow-hidden bg-white p-3 shadow-[0_12px_28px_-18px_rgba(11,42,26,0.35)] sm:p-4">
                    <SmartImage
                      src={product.image}
                      alt={product.name}
                      width={800}
                      priority
                      className="mx-auto h-[180px] w-full object-contain object-center sm:h-[240px] md:h-[260px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col p-4 pb-6 sm:p-5 md:p-6">
                  <h2
                    id="product-popup-title"
                    className="font-display text-xl font-700 tracking-tight text-ink sm:text-[1.85rem]"
                  >
                    {title}
                  </h2>

                  {showPdfDetails && description ? (
                    <Section
                      icon={FileText}
                      title="Description"
                      body={description}
                    />
                  ) : null}

                  {showPdfDetails && features.length > 0 ? (
                    <div className="mt-3 border border-[#e6eee9] bg-[#f8faf8] p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                          <Sparkles className="h-4 w-4" />
                        </span>
                        <h3 className="font-display text-base font-700 text-ink">
                          Features
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {features.map((item, index) => (
                          <li
                            key={`${index}-${typeof item === "string" ? item : "feature"}`}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{typeof item === "string" ? item : String(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {showPdfDetails && packing ? (
                    <Section icon={Package} title="Package" body={packing} />
                  ) : null}

                  {showPdfDetails && composition ? (
                    <Section
                      icon={FlaskConical}
                      title="Composition"
                      body={composition}
                    />
                  ) : null}

                  {!showPdfDetails ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      Contact us on WhatsApp for full product specifications,
                      availability, and guidance.
                    </p>
                  ) : null}

                  <div className="mt-5 border-t border-[#e6eee9] pt-4">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 w-full items-center justify-center gap-2.5 bg-[#25D366] px-5 py-3.5 text-sm font-700 text-white transition hover:bg-[#1ebe57]"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Contact on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ icon: Icon, title, body }) {
  return (
    <div className="mt-3 border border-[#e6eee9] bg-[#f8faf8] p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-display text-base font-700 text-ink">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
