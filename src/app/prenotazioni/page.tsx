import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ReservationForm } from "@/components/reservation-form";
import { FadeUp } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prenotazioni",
  description:
    "Prenota un tavolo al ristorante Il Faro a Rimini: confermiamo la disponibilità via email o telefono entro poche ore.",
};

export default function PrenotazioniPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenotazioni"
        title="Prenota il tuo tavolo"
        description="Compila il modulo qui sotto: confermiamo la disponibilità entro poche ore."
        image="/images/tavolo-apparecchiato-vino.jpg"
        imageAlt="Il tavolo apparecchiato per la cena"
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-10 lg:gap-24">
          <FadeUp>
            <ReservationForm />
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-10">
            <div>
              <p className="text-eyebrow mb-5">Informazioni</p>
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <span className="text-foam/75">
                    {site.address.line1}, {site.address.line2}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-beam"
                    aria-hidden
                  />
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-foam/75 transition-colors hover:text-beam"
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
                    className="break-all text-foam/75 transition-colors hover:text-beam"
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
              </div>
            </div>

            <div className="border-t border-foam/10 pt-8">
              <p className="text-eyebrow mb-5">Domande frequenti</p>
              <Accordion>
                {faqs.map((f, i) => (
                  <AccordionItem key={f.question} value={String(i)}>
                    <AccordionTrigger className="text-foam">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foam/60">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
