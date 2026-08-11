"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}) {
  const titleParts = highlight
    ? null
    : (() => {
        const words = title?.split(" ") ?? [];
        if (words.length < 2) return { lead: title, accent: null };
        return {
          lead: words.slice(0, -1).join(" "),
          accent: words[words.length - 1],
        };
      })();

  return (
    <Reveal
      className={`mb-7 max-w-2xl sm:mb-9 md:mb-11 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-2.5 text-[11px] font-600 uppercase tracking-[0.2em] sm:mb-3 sm:text-xs ${
            light ? "text-leaf/80" : "text-leaf"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[1.65rem] font-600 tracking-tight sm:text-3xl md:text-[2.15rem] lg:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {highlight ? (
          <>
            {title}{" "}
            <span className={light ? "text-leaf" : "text-primary"}>
              {highlight}
            </span>
          </>
        ) : titleParts?.accent ? (
          <>
            {titleParts.lead}{" "}
            <span className={light ? "text-leaf" : "text-primary"}>
              {titleParts.accent}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
