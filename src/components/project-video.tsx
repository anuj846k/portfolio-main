"use client";

import { useReducedMotion } from "motion/react";

export function ProjectVideo({ src }: { src: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <video
      // Remount on preference change so autoplay applies correctly
      key={reduceMotion ? "static" : "autoplay"}
      src={src}
      autoPlay={!reduceMotion}
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full object-cover object-top" // needed because random black line at bottom of video
    />
  );
}
