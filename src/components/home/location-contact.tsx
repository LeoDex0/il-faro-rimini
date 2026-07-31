import { Clock, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FadeUp } from "@/components/reveal";
import { mapEmbedSrc, site } from "@/lib/content";

export function LocationContact() {
  const mapSrc = mapEmbedSrc();

  return (
    <section id="dove-siamo" className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Le nostre coordinate" title="Dove siamo" />

          <FadeUp className="mt-9 space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-beam" aria-hidden />
              <div>
                <p className="text-foam">{site.address.line1}</p>
                <p className="text-foam/60">{site.address.line2}</p>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-beam underline decoration-beam/30 underline-offset-4 hover:decoration-beam"
                >
                  Come arrivare →
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-beam" aria-hidden />
              <a
                href={`tel:${site.phoneHref}`}
                className="text-foam transition-colors hover:text-beam"
              >
                {site.phone}
              </a>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-beam" aria-hidden />
              <div className="space-y-1.5">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex gap-4 text-sm">
                    <span className="w-40 text-foam/55">{h.day}</span>
                    <span className="text-foam">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="relative min-h-[360px] overflow-hidden rounded-sm border border-foam/10">
          <iframe
            title="Mappa: Il Faro, Largo Boscovich 4, Rimini"
            src={mapSrc}
            loading="lazy"
            className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.85)]"
            style={{ border: 0 }}
          />
        </FadeUp>
      </div>
    </section>
  );
}
