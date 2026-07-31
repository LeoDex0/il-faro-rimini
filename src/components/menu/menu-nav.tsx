"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/lib/content";

export function MenuNav({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-[65px] z-30 border-b border-foam/10 bg-ink/90 backdrop-blur-md md:top-[73px]">
      <nav className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-6 py-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors",
              active === c.id
                ? "bg-beam text-ink-deep"
                : "text-foam/60 hover:text-foam"
            )}
          >
            {c.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
