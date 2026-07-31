import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BeamReveal, FadeUp } from "@/components/reveal";

export function ReserveCta() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-28 text-center md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-beam/20 blur-[140px]"
      />
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <BeamReveal>
          <h2 className="font-display text-4xl leading-tight text-foam sm:text-5xl md:text-6xl">
            Stasera, un tavolo vi aspetta.
          </h2>
        </BeamReveal>
        <FadeUp delay={0.1}>
          <p className="mt-6 text-balance-pretty text-foam/65">
            Prenotate in meno di un minuto: confermiamo la disponibilità in
            giornata.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Button
            render={<Link href="/prenotazioni" />}
            nativeButton={false}
            className="mt-9 h-12 rounded-full px-8 text-[0.95rem]"
          >
            Prenota un tavolo
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
