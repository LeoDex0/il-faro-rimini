"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/lib/content";
import { useDragScroll } from "@/hooks/use-drag-scroll";

export function GalleryPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useDragScroll(scrollerRef);
  const items = gallery.slice(0, 8);

  return (
    <section id="galleria" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Un assaggio visivo"
            title="Galleria"
            description="Il porto, la cucina, la sala: trascina per scorrere."
          />
          <Link
            href="/galleria"
            className="group hidden shrink-0 items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam sm:inline-flex"
          >
            Galleria completa
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={drag.onPointerDown}
        onPointerMove={drag.onPointerMove}
        onPointerUp={drag.onPointerUp}
        onPointerLeave={drag.onPointerUp}
        onClickCapture={drag.onClickCapture}
        className="mt-12 flex cursor-grab gap-5 overflow-x-auto px-6 pb-4 active:cursor-grabbing md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((img) => (
          <div
            key={img.src}
            className={`relative h-[320px] shrink-0 overflow-hidden rounded-sm sm:h-[420px] ${
              img.wide ? "w-[440px] sm:w-[560px]" : "w-[260px] sm:w-[340px]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 60vw, 400px"
              className="pointer-events-none select-none object-cover"
            />
          </div>
        ))}
        <Link
          href="/galleria"
          className="group flex h-[320px] w-[220px] shrink-0 flex-col items-center justify-center gap-3 rounded-sm border border-foam/15 text-foam/70 transition-colors hover:border-beam/50 hover:text-beam sm:h-[420px]"
        >
          <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
          <span className="text-sm uppercase tracking-[0.14em]">
            Vedi tutte
          </span>
        </Link>
      </div>

      <Link
        href="/galleria"
        className="group mx-6 mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam sm:hidden"
      >
        Galleria completa
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
