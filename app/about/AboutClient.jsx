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

export default function AboutClient() {
  return (
    <div className="bg-bg">
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SmartImage
            src={images.field}
            alt="Agricultural crop protection fields in Gujarat"
            width={1600}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="container-site relative z-10 py-10 sm:py-12 md:py-14 lg:py-16">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
            About Us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-600 tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {brand.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {brand.tagline}. Building trust through quality crop solutions, insecticides, fungicides, herbicides, PGR, and farmer-focused service in Rajkot, Gujarat.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SmartImage
              src={images.farmer}
              alt="Bhumiraj Agro World team supporting Rajkot farmers"
              width={1000}
              className="aspect-[16/11] w-full rounded-2xl object-cover sm:aspect-[5/3]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-600 uppercase tracking-[0.2em] text-leaf">
              Company Story
            </p>
            <h2 className="mt-3 font-display text-2xl font-600 text-ink sm:text-3xl">
              Growing with India&apos;s Farming Community
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Bhumiraj Agro World is committed to delivering premium-quality
              agricultural products including insecticides, fungicides, herbicides,
              and plant growth regulators (PGR). Based in Rajkot, Gujarat, we help farmers achieve healthier
              crops, improved productivity, and sustainable farming practices
              through reliable and innovative agricultural solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From crop protection medicines to bio products, every
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
          <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <h2 className="font-display text-2xl font-600 text-ink sm:text-3xl">
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
            alt="Young crop plants in a tilled field at sunrise"
            width={900}
            className="aspect-[2/1] w-full rounded-2xl object-cover sm:aspect-[16/9]"
          />
          <SmartImage
            src={images.soilHands}
            alt="Farmer spraying crops in the field at golden hour"
            width={900}
            className="aspect-[2/1] w-full rounded-2xl object-cover sm:aspect-[16/9]"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <h2 className="font-display text-2xl font-600 text-ink sm:text-3xl">
              Trusted by Farmers Across Gujarat
            </h2>
            <p className="mt-3 text-muted">
              From crop protection to growth solutions, our numbers reflect a
              commitment to quality products and dependable support for every farmer we serve.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>
    </div>
  );
}
