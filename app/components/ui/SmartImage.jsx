"use client";

import { useState } from "react";

/**
 * Plain <img> with lazy loading, Unsplash sizing params and a graceful
 * gradient fallback so the UI never shows a broken image.
 */
export default function SmartImage({
  src,
  alt = "",
  className = "",
  width = 800,
  height,
  priority = false,
  sizes,
}) {
  const [failed, setFailed] = useState(false);

  // Encode spaces in local paths so browsers reliably load `/product image/...`
  const normalized =
    typeof src === "string" ? src.replace(/ /g, "%20") : src;

  const optimized =
    normalized && normalized.includes("images.unsplash.com")
      ? `${normalized}${normalized.includes("?") ? "&" : "?"}auto=format&fit=crop&w=${width}&q=70`
      : normalized;

  if (failed || !normalized) {
    return (
      <div
        className={`flex items-center justify-center bg-primary ${className}`}
        aria-label={alt}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-1/3 w-1/3 text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22c0-6 0-9 6-12-6 0-9 2-9 8 0 .5 0 1 .1 1.5M12 22c0-4-1-6-4-8"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={optimized}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
