"use client";

import { processSteps } from "../data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Process"
          title="Agriculture Process"
          description="A simple path from product selection to better harvests."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-primary/20 md:left-1/2 md:block" />

          <div className="space-y-6 md:space-y-0">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={step.step} delay={index * 0.08} className="md:mb-10">
                  <div
                    className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`rounded-[20px] border border-line bg-white p-6 shadow-soft md:p-7 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <span className="font-display text-sm font-600 text-primary">
                        {step.step}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-600 text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-4 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-white md:left-1/2 md:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
