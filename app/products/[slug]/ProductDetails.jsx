"use client";

import { Check, ArrowLeft, Sparkles, Package, FlaskConical, FileText } from "lucide-react";
import Link from "next/link";
import SmartImage from "../../components/ui/SmartImage";
import ProductGridWithPopup from "../../components/ProductGridWithPopup";
import { brand } from "../../data/site";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ProductDetails({ product, related }) {
  const enquiryText = encodeURIComponent(
    `Hello Bhumiraj Agro World, I would like to enquire about ${product.name}.`
  );
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${enquiryText}`;
  const features = product.features?.length ? product.features : [];
  const packing = product.packing || product.packaging || "";
  const description = product.description || "";
  const composition = product.composition || "";
  const showPdfDetails = Boolean(product.fromPdf);

  return (
    <div className="bg-[#f4f7f5] pt-24">
      <div className="container-site py-8 sm:py-10 md:py-12">
        <Link
          href="/products"
          className="mb-5 inline-flex items-center gap-2 text-sm font-600 text-primary sm:mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-24px_rgba(11,42,26,0.35)] sm:rounded-none">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#e6eee9] bg-[#eef3f0] p-4 sm:p-5 md:border-b-0 md:border-r">
              <div className="bg-white p-3 sm:p-4">
                <SmartImage
                  src={product.image}
                  alt={product.name}
                  width={1000}
                  priority
                  className="mx-auto h-[240px] w-full object-contain object-center sm:h-[340px]"
                />
              </div>
            </div>

            <div className="flex flex-col p-4 sm:p-7">
              <p className="text-[11px] font-600 uppercase tracking-[0.18em] text-primary">
                {product.category}
              </p>
              <h1 className="mt-2 font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl md:text-4xl">
                {product.name}
              </h1>

              {showPdfDetails && composition ? (
                <DetailBlock icon={FlaskConical} title="Composition" body={composition} />
              ) : null}
              {showPdfDetails && description ? (
                <DetailBlock icon={FileText} title="Description" body={description} />
              ) : null}
              {showPdfDetails && features.length > 0 ? (
                <div className="mt-3 border border-[#e6eee9] bg-[#f8faf8] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <h2 className="font-display text-base font-700 text-ink">Features</h2>
                  </div>
                  <ul className="space-y-2">
                    {features.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {showPdfDetails && packing ? (
                <DetailBlock icon={Package} title="Package" body={packing} />
              ) : null}

              <div className="mt-6 border-t border-[#e6eee9] pt-5">
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

        {related.length > 0 && (
          <div className="mt-10 sm:mt-12">
            <h2 className="font-display text-xl font-700 text-ink sm:text-2xl">Related Products</h2>
            <div className="mt-5 sm:mt-6">
              <ProductGridWithPopup
                products={related}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailBlock({ icon: Icon, title, body }) {
  return (
    <div className="mt-3 border border-[#e6eee9] bg-[#f8faf8] p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-display text-base font-700 text-ink">{title}</h2>
      </div>
      <p className="text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
