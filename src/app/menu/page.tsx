import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { MenuNav } from "@/components/menu/menu-nav";
import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { menu, type DietTag } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Il menu del ristorante Il Faro a Rimini: antipasti, primi, secondi, contorni, dolci e la carta dei vini di Romagna.",
};

const TAG_LABELS: Record<Exclude<DietTag, "firma">, string> = {
  vegetariano: "Vegetariano",
  "senza glutine": "Senza glutine",
  crudo: "Crudo",
};

function formatPrice(price: number) {
  return price % 1 === 0 ? `€${price}` : `€${price.toFixed(2)}`;
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Il menu"
        title="Dal porto alla tavola"
        description="Materia prima del mercato ittico di Rimini e dell'entroterra romagnolo. Il menu segue la stagione e il pescato del giorno."
        image="/images/chef-cucina-buia.jpg"
        imageAlt="Lo chef al lavoro in cucina"
      />
      <MenuNav categories={menu} />

      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        {menu.map((category, ci) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-36 ${ci > 0 ? "mt-20 md:mt-28" : ""}`}
          >
            <SectionHeading title={category.name} description={category.intro} />

            <StaggerGroup className="mt-10 divide-y divide-foam/10 border-t border-foam/10">
              {category.items.map((item) => (
                <StaggerItem key={item.name}>
                  <div className="flex flex-col gap-2 py-6">
                    <div className="flex items-end gap-3">
                      <h3 className="flex items-center gap-2 font-display text-lg text-foam sm:text-xl">
                        {item.tags?.includes("firma") && (
                          <Star
                            className="size-4 shrink-0 fill-beam text-beam"
                            aria-label="Piatto simbolo"
                          />
                        )}
                        {item.name}
                      </h3>
                      <span
                        aria-hidden
                        className="mb-1.5 flex-1 border-b border-dotted border-foam/20"
                      />
                      <span className="shrink-0 font-display text-lg text-beam">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="max-w-2xl text-sm leading-relaxed text-foam/55">
                        {item.description}
                      </p>
                      {item.tags
                        ?.filter(
                          (t): t is Exclude<DietTag, "firma"> => t !== "firma"
                        )
                        .map((tag) => (
                          <span
                            key={tag}
                            className="shrink-0 rounded-full border border-foam/15 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wide text-foam/45"
                          >
                            {TAG_LABELS[tag]}
                          </span>
                        ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        ))}

        <p className="mt-16 text-center text-xs text-foam/40">
          I prezzi sono espressi in Euro (IVA inclusa). Per allergie o
          intolleranze, informate il personale di sala.
        </p>
      </div>
    </>
  );
}
