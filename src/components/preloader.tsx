"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE_SIGNATURE } from "@/components/reveal";

const WORD = "IL FARO";

export function Preloader() {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState<"intro" | "closing" | "done">("intro");

  useEffect(() => {
    if (reduced) {
      setStage("done");
      return;
    }
    document.documentElement.classList.add("overflow-hidden");
    const t = setTimeout(() => setStage("closing"), 1450);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [reduced]);

  if (stage === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      animate={{
        clipPath:
          stage === "closing"
            ? "circle(0% at 50% 50%)"
            : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 0.9, ease: EASE_SIGNATURE }}
      onAnimationComplete={() => {
        if (stage === "closing") {
          document.documentElement.classList.remove("overflow-hidden");
          setStage("done");
        }
      }}
    >
      <div className="relative flex flex-col items-center gap-7">
        <div className="relative h-px w-44 overflow-hidden bg-foam/10 sm:w-64">
          <motion.span
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-beam to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "220%" }}
            transition={{
              duration: 1.3,
              ease: EASE_SIGNATURE,
              repeat: stage === "intro" ? Infinity : 0,
              repeatDelay: 0.35,
            }}
          />
        </div>
        <div className="flex overflow-hidden">
          {WORD.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.045,
                ease: EASE_SIGNATURE,
              }}
              className="font-display text-3xl tracking-[0.22em] text-foam sm:text-4xl"
            >
              {ch === " " ? "  " : ch}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
