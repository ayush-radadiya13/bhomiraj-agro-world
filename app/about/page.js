"use client";

import { Target, Eye, Heart } from "lucide-react";
import { brand, images, stats, values } from "../data/site";
import SmartImage from "../components/ui/SmartImage";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import Reveal from "../components/ui/Reveal";

const commitments = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver premium agricultural products that help farmers improve crop health, productivity, and long-term farm sustainability.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted agriculture partner known for quality products, clear guidance, and farmer-first service.",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    text: "We remain committed to authenticity, practical support, and responsible product recommendations for every enquiry.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg">
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SmartImage
            src={images.field}
            alt="Agriculture fields"
            width={1600}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="container-site relative z-10 py-12 sm:py-16 md:py-24">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            About Us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-600 tracking-tight text-white sm:text-3xl md:text-5xl">
            {brand.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {brand.tagline}. Building trust through quality seeds, crop solutions,
            and farmer-focused service.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SmartImage
              src={images.farmer}
              alt="Company story"
              width={1000}
              className="aspect-[4/3] w-full rounded-[20px] object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
              Company Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-600 text-ink">
              Growing with India&apos;s Farming Community
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Bhumiraj Agro World is committed to delivering premium-quality
              agricultural products including seeds, crop protection solutions,
              and plant nutrition products. We help farmers achieve healthier
              crops, improved productivity, and sustainable farming practices
              through reliable and innovative agricultural solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From certified seeds to crop medicines and bio products, every
              category is curated for clarity, quality, and practical field use.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {commitments.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card-surface h-full p-6">
                <item.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-xl font-600 text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-600 text-ink">
              Core Values
            </h2>
            <p className="mt-3 text-muted">
              Principles that guide every product recommendation and customer interaction.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-display text-lg font-600 text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-4 md:grid-cols-2">
          <SmartImage
            src={images.harvest}
            alt="Healthy harvest"
            width={900}
            className="aspect-[16/10] w-full rounded-[20px] object-cover"
          />
          <SmartImage
            src={images.soilHands}
            alt="Soil and farming"
            width={900}
            className="aspect-[16/10] w-full rounded-[20px] object-cover"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-surface p-6 text-center"
            >
              <p className="font-display text-3xl font-600 text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
