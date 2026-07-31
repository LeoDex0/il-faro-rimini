import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BeamReveal, FadeUp, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ReserveCta } from "@/components/home/reserve-cta";
import { team, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "La storia della famiglia Ricci: da Nonna Ada al nipote Marco, tre generazioni di cucina a due passi dal faro di Rimini.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Tre generazioni sul porto"
        description="Dal 1978, la stessa famiglia, la stessa cucina, lo stesso mare davanti alla porta."
        image="/images/cucina-brigata.jpg"
        imageAlt="La brigata di cucina al lavoro"
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Il cammino"
            title="Dal faro alla nostra tavola"
            align="center"
            className="mx-auto"
          />

          <div className="relative mt-16 space-y-12">
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-foam/15"
            />
            {timeline.map((t) => (
              <FadeUp key={t.year} className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-beam bg-ink" />
                <p className="font-display text-2xl text-beam">{t.year}</p>
                <p className="mt-1 font-display text-xl text-foam">
                  {t.title}
                </p>
                <p className="mt-2 max-w-xl leading-relaxed text-foam/65">
                  {t.text}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foam/10 bg-ink py-24 text-center md:py-28">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <BeamReveal>
            <p className="font-display text-3xl italic leading-snug text-foam sm:text-4xl">
              «Non serviamo solo pesce. Serviamo il porto, la luce del faro, e
              la memoria di chi ci ha insegnato a cucinare.»
            </p>
          </BeamReveal>
          <p className="text-eyebrow mt-6">Famiglia Ricci</p>
        </div>
      </section>

      <section className="bg-tide/30 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <SectionHeading eyebrow="Le persone" title="In cucina e in sala" />

          <StaggerGroup className="mt-14 grid max-w-3xl gap-10 sm:grid-cols-2">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover brightness-[0.85] saturate-[1.05]"
                  />
                </div>
                <p className="mt-5 font-display text-2xl text-foam">
                  {member.name}
                </p>
                <p className="text-eyebrow mt-1">{member.role}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-foam/60">
                  {member.bio}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
