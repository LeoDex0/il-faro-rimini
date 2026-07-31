"use client";

import { ReactLenis } from "lenis/react";
import { useState, type ReactNode } from "react";

function getInitialReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced] = useState(getInitialReducedMotion);

  return (
    <ReactLenis
      root
      options={{
        lerp: reduced ? 1 : 0.11,
        duration: reduced ? 0 : 1.1,
        smoothWheel: !reduced,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
