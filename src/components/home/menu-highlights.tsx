import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FadeUp } from "@/components/reveal";

const dishes = [
  {
    name: "Tagliolini al nero di seppia",
    description: "Ragù bianco di scampi e zucchine, bottarga di muggine.",
    price: 22,
    image: "/images/tagliolini-piatto-scuro.jpg",
    href: "/menu#primi",
    span: "md:col-span-3 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    name: "Risotto al radicchio e Sangiovese",
    description: "Riduzione di vino, fonduta di formaggio di fossa.",
    price: 19,
    image: "/images/risotto-piatto.jpg",
    href: "/menu#primi",
    span: "md:col-span-3",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Bruschetta al pomodoro di Romagna",
    description: "Pane di grano duro, basilico, olio extravergine del podere.",
    price: 10,
    image: "/images/bruschetta-pomodoro.jpg",
    href: "/menu#antipasti",
    span: "md:col-span-3",
    aspect: "aspect-[4/3]",
  },
];

export function MenuHighlights() {
  return (
    <section id="menu" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Dalla cucina"
            title="Un assaggio del menu"
            description="Materia prima del porto e dell'entroterra romagnolo, cucinata ogni giorno."
          />
          <Link
            href="/menu"
            className="group hidden shrink-0 items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam sm:inline-flex"
          >
            Il menu completo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-6 md:gap-6">
          {dishes.map((dish) => (
            <FadeUp key={dish.name} className={dish.span}>
              <Link
                href={dish.href}
                className="group relative block h-full overflow-hidden rounded-sm"
              >
                <div className={`relative w-full ${dish.aspect}`}>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover brightness-[0.82] saturate-[1.05] transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/35 to-ink-deep/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-xl text-foam sm:text-2xl">
                      {dish.name}
                    </p>
                    <span className="shrink-0 rounded-full border border-beam/40 px-2.5 py-1 text-xs text-beam">
                      €{dish.price}
                    </span>
                  </div>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-foam/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {dish.description}
                  </p>
                </div>
              </Link>
            </FadeUp>
          ))}

          <FadeUp className="md:col-span-6">
            <Link
              href="/menu#secondi"
              className="group relative flex min-h-[220px] items-end overflow-hidden rounded-sm"
            >
              <Image
                src="/images/pesce-grigliato-verdure.jpg"
                alt="Brodetto alla riminese"
                fill
                sizes="100vw"
                className="object-cover brightness-[0.82] saturate-[1.05] transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/50 to-transparent" />
              <div className="relative z-10 p-7 sm:p-9">
                <p className="text-eyebrow mb-2">Il piatto simbolo</p>
                <p className="font-display text-3xl text-foam sm:text-4xl">
                  Brodetto alla riminese
                </p>
                <p className="mt-2 max-w-md text-sm text-foam/65">
                  Sette qualità di pescato dell&apos;Adriatico, come da
                  tradizione del porto. €32
                </p>
              </div>
            </Link>
          </FadeUp>
        </div>

        <Link
          href="/menu"
          className="group mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam sm:hidden"
        >
          Il menu completo
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
