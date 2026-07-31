import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { FadeUp } from "@/components/reveal";
import { InstagramIcon, FacebookIcon } from "@/components/social-icons";
import { mapEmbedSrc, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta il ristorante Il Faro a Rimini: indirizzo, telefono, email e modulo di contatto.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Parliamone"
        description="Per prenotazioni usa il modulo dedicato. Per tutto il resto, siamo qui."
        image="/images/bicchiere-vino-briciole.jpg"
        imageAlt="Un calice di vino in sala"
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeUp className="relative min-h-[420px] overflow-hidden rounded-sm border border-foam/10">
              <iframe
                title="Mappa: Il Faro, Largo Boscovich 4, Rimini"
                src={mapEmbedSrc(15)}
                loading="lazy"
                className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.85)]"
                style={{ border: 0 }}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <SectionHeading eyebrow="Le nostre coordinate" title="Dove trovarci" />
              <div className="mt-8 space-y-6 text-sm">
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <div>
                    <p className="text-foam">{site.address.line1}</p>
                    <p className="text-foam/60">{site.address.line2}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-foam transition-colors hover:text-beam"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-foam transition-colors hover:text-beam"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <div className="space-y-1 text-foam/75">
                    {site.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}:{" "}
                        <span className="text-foam/50">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2 text-foam/50">
                  <InstagramIcon className="size-[18px]" aria-hidden />
                  <span className="text-xs tracking-wide">
                    {site.social.instagram}
                  </span>
                  <FacebookIcon className="size-[18px]" aria-hidden />
                  <span className="text-xs tracking-wide">
                    {site.social.facebook}
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="mt-24 max-w-2xl border-t border-foam/10 pt-16 md:mt-28">
            <SectionHeading
              eyebrow="Scrivici"
              title="Hai una domanda?"
              description="Eventi privati, cene aziendali o semplice curiosità: rispondiamo il prima possibile."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
