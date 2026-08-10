"use client";

import { MessageCircle, Phone } from "lucide-react";
import { brand } from "../data/site";

export default function FloatingActions() {
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Bhumiraj Agro World, I would like product information."
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a href={brand.phoneHref} className="btn-primary !rounded-2xl !py-3.5">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-600 text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
