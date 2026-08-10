"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Check,
  ArrowLeft,
} from "lucide-react";
import SmartImage from "../../components/ui/SmartImage";
import ProductCard from "../../components/ProductCard";
import { brand } from "../../data/site";

export default function ProductDetails({ product, related }) {
  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);

  const enquiryText = encodeURIComponent(
    `Hello Bhumiraj Agro World, I would like to enquire about ${product.name}.`
  );
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${enquiryText}`;

  const sections = [
    { title: "Key Features", items: product.features },
    { title: "Benefits", items: product.benefits },
    {
      title: "Recommended Crops",
      items: product.recommendedCrops,
    },
  ];

  return (
    <div className="bg-bg pt-24">
      <div className="container-site py-10 md:py-14">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-600 text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-soft">
                  <SmartImage
                    src={activeImage}
                    alt={product.name}
                    width={1100}
                    priority
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {(product.gallery || [product.image]).map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className={`overflow-hidden rounded-2xl border transition ${
                        activeImage === src
                          ? "border-primary"
                          : "border-line hover:border-primary/50"
                      }`}
                    >
                      <SmartImage
                        src={src}
                        alt=""
                        width={300}
                        className="aspect-square w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-600 uppercase tracking-[0.18em] text-leaf">
                  {product.category}
                </p>
                <h1 className="mt-2 font-display text-3xl font-600 tracking-tight text-ink md:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {product.shortDescription}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink/80">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
                  <a href={brand.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" /> Enquiry
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title} className="card-surface p-5">
                  <h2 className="font-display text-lg font-600 text-ink">
                    {section.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <InfoCard title="Application Method" body={product.applicationMethod} />
              <InfoCard title="Dosage" body={product.dosage} />
              <InfoCard title="Packaging" body={product.packaging} />
              <InfoCard title="Storage Instructions" body={product.storage} />
              <InfoCard title="Safety Information" body={product.safety} />
              <div className="card-surface p-5">
                <h2 className="font-display text-lg font-600 text-ink">
                  Technical Specifications
                </h2>
                <dl className="mt-4 space-y-3">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 border-b border-line pb-2 text-sm last:border-0"
                    >
                      <dt className="text-muted">{spec.label}</dt>
                      <dd className="font-600 text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-600 text-ink">
                  Related Products
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {related.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[20px] border border-line bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl font-600 text-ink">
                Product Enquiry
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Interested in {product.name}? Contact our team for availability,
                guidance, and bulk enquiries.
              </p>
              <div className="mt-6 space-y-3">
                <a href={brand.phoneHref} className="btn-primary w-full">
                  <Phone className="h-4 w-4" /> Call for Enquiry
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <Link href="/contact" className="btn-outline w-full">
                  Contact Form
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="card-surface p-5">
      <h2 className="font-display text-lg font-600 text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
