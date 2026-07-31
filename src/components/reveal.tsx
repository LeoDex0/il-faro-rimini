"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE_SIGNATURE = [0.16, 1, 0.3, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const anim = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px -10% 0px" } as const,
    transition: { duration: 0.8, delay, ease: EASE_SIGNATURE },
    className,
  };

  if (as === "li") {
    return <motion.li {...anim}>{children}</motion.li>;
  }

  return <motion.div {...anim}>{children}</motion.div>;
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SIGNATURE },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Signature reveal: a beam of light sweeps across the element as it enters,
 * echoing the lighthouse motif. Reserved for section headings only.
 */
export function BeamReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.7, ease: EASE_SIGNATURE }}
      >
        {children}
      </motion.div>
      <motion.span
        aria-hidden
        initial={{ x: "-120%" }}
        whileInView={{ x: "220%" }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 1.1, ease: EASE_SIGNATURE, delay: 0.05 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-beam/25 to-transparent"
      />
    </div>
  );
}
