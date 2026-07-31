"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SectionDots({
  sections,
}: {
  sections: readonly { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 xl:flex">
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "text-eyebrow whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                isActive && "opacity-100"
              )}
            >
              {s.label}
            </span>
            <span className="relative flex h-3 w-3 items-center justify-center">
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.55,
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "block h-1.5 w-1.5 rounded-full",
                  isActive ? "bg-beam" : "bg-foam/50 group-hover:bg-foam"
                )}
              />
              {isActive && (
                <motion.span
                  layoutId="section-dot-ring"
                  className="absolute inset-0 rounded-full border border-beam"
                />
              )}
            </span>
          </a>
        );
      })}
    </div>
  );
}
