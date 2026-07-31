"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="recensioni"
      className="border-y border-foam/10 bg-tide/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Il libro degli ospiti"
          title="Chi è già passato dal Faro"
          align="center"
          className="mx-auto"
        />

        <Carousel opts={{ loop: true, align: "start" }} className="mt-14">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="flex h-full flex-col justify-between border border-foam/10 bg-ink p-8">
                  <Quote className="size-6 text-beam/60" aria-hidden />
                  <blockquote className="mt-5 flex-1 font-display text-xl italic leading-snug text-foam/90">
                    «{t.quote}»
                  </blockquote>
                  <figcaption className="mt-6 text-sm uppercase tracking-[0.14em] text-foam/50">
                    {t.name}{" "}
                    <span className="text-foam/30">· {t.origin}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-9 flex items-center justify-center gap-3">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
