import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/social-icons";
import { navLinks, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foam/10 bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-foam">Il Faro</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foam/55">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-foam/50">
              <InstagramIcon className="size-[18px]" aria-hidden />
              <span className="text-xs tracking-wide">{site.social.instagram}</span>
              <FacebookIcon className="size-[18px]" aria-hidden />
              <span className="text-xs tracking-wide">{site.social.facebook}</span>
            </div>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Il ristorante</p>
            <ul className="space-y-2.5 text-sm text-foam/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-beam">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/prenotazioni" className="transition-colors hover:text-beam">
                  Prenotazioni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Orari</p>
            <ul className="space-y-2.5 text-sm text-foam/70">
              {site.hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="text-foam/50">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Contatti</p>
            <ul className="space-y-3 text-sm text-foam/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-beam" aria-hidden />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-beam" aria-hidden />
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-beam">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-beam" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-beam">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-foam/10 pt-8 text-xs text-foam/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} — P.IVA 00000000000{" · "}<a href="https://leodex.dev/it/" className="underline-offset-2 hover:underline">Sito realizzato da LeoDex</a>
          </p>
          <p>
            Foto storica del porto canale: Mister No, licenza{" "}
            <a
              className="underline decoration-foam/30 underline-offset-2 hover:text-beam"
              href="https://creativecommons.org/licenses/by/3.0/deed.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 3.0
            </a>
            , Wikimedia Commons
          </p>
        </div>
      </div>
    </footer>
  );
}
