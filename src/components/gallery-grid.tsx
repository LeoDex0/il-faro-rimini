"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { gallery } from "@/lib/content";

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, prev, next]);

  return (
    <>
      <StaggerGroup className="columns-2 gap-4 sm:columns-3 md:gap-5">
        {gallery.map((img, i) => (
          <StaggerItem key={img.src} className="mb-4 break-inside-avoid md:mb-5">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-sm"
              aria-label={`Apri: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="w-full object-cover brightness-[0.88] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-deep/0 transition-colors duration-300 group-hover:bg-ink-deep/10" />
            </button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Dialog open={index !== null} onOpenChange={(open) => !open && close()}>
        <DialogContent
          showCloseButton={false}
          className="max-w-5xl border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-5xl"
        >
          {index !== null ? (
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-deep sm:aspect-[16/10]">
                <Image
                  src={gallery[index].src}
                  alt={gallery[index].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm text-foam/60">
                {gallery[index].alt}
              </p>

              <button
                type="button"
                onClick={close}
                aria-label="Chiudi"
                className="absolute -top-11 right-0 text-foam/70 transition-colors hover:text-foam"
              >
                <X className="size-6" />
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Immagine precedente"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-deep/70 p-2 text-foam transition-colors hover:bg-ink-deep"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Immagine successiva"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-deep/70 p-2 text-foam transition-colors hover:bg-ink-deep"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
