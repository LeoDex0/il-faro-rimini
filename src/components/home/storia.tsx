import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Storia() {
  return (
    <section id="storia" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-24">
        <FadeUp className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/sala-interno-atmosfera.jpg"
              alt="La sala del ristorante a lume di candela"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 flex items-center gap-3 border border-foam/15 bg-ink px-5 py-3 shadow-xl shadow-black/40 sm:-right-6">
            <span className="h-2 w-2 shrink-0 rounded-full bg-beam" />
            <span className="text-xs uppercase tracking-[0.2em] text-foam/70">
              San Giuliano Mare, oggi
            </span>
          </div>
        </FadeUp>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="La nostra storia"
            title="Tre generazioni, una sola cucina."
          />
          <p className="mt-6 max-w-lg leading-relaxed text-foam/70">
            Nel 1978 Ada apriva otto tavoli a due passi dal faro del porto.
            Oggi il nipote Marco guida la stessa cucina, tra le ricette di
            famiglia e uno sguardo contemporaneo sul mare di Rimini.
          </p>
          <blockquote className="mt-8 max-w-lg border-l-2 border-beam/50 pl-6 font-display text-2xl italic leading-snug text-foam/90">
            «Cuciniamo quello che il porto ci porta la mattina. Il resto lo
            abbiamo imparato da Nonna Ada.»
            <footer className="mt-3 font-sans text-sm not-italic uppercase tracking-[0.14em] text-foam/50">
              Marco Ricci, Chef
            </footer>
          </blockquote>
          <Link
            href="/chi-siamo"
            className="group mt-9 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam"
          >
            Scopri la nostra storia
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
