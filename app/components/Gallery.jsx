"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    alt: "Lush green farmland",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8",
    alt: "Healthy seedlings",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
    alt: "Golden wheat crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    alt: "Crop protection spraying",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    alt: "Soil and hands",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1601593768799-76d8aa4d1f76",
    alt: "Maize field",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Our Gallery"
            title="From our fields to"
            highlight="your farm"
            description="Glimpses of the crops, inputs and farmers at the heart of everything we do."
          />
        </div>

        <StaggerGroup
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]"
          stagger={0.07}
        >
          {gallery.map((item, i) => (
            <StaggerItem key={i} className={item.span}>
              <motion.div
                whileHover={{ scale: 0.985 }}
                className="group relative h-full w-full overflow-hidden rounded-3xl shadow-card"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/70 via-leaf-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-700 text-white">
                    <Camera className="h-4 w-4 text-harvest-400" />
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
