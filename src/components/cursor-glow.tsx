"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const SIZE = 440;

export function CursorGlow() {
  // Feature-detection (pointer type, reduced-motion) is only knowable after
  // mount. Starting from `false` on both server and client avoids a
  // hydration mismatch; the effect below then syncs the real value in.
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const sx = useSpring(x, { damping: 34, stiffness: 190, mass: 0.6 });
  const sy = useSpring(y, { damping: 34, stiffness: 190, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const handler = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 hidden rounded-full mix-blend-soft-light md:block"
      style={{
        width: SIZE,
        height: SIZE,
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(232,163,61,0.4) 0%, rgba(232,163,61,0) 70%)",
      }}
    />
  );
}
