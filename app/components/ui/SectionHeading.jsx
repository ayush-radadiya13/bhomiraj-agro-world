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
      className={`mb-10 max-w-2xl md:mb-14 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-600 uppercase tracking-[0.2em] ${
            light ? "text-leaf/80" : "text-leaf"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-600 tracking-tight md:text-4xl ${
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
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
