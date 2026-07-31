import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Galleria",
  description:
    "Il porto, la cucina, la sala: uno sguardo per immagini dentro il ristorante Il Faro a Rimini.",
};

export default function GalleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Galleria"
        title="Uno sguardo dentro Il Faro"
        description="Il porto al tramonto, la cucina in movimento, la sala che si accende la sera. Clicca un'immagine per ingrandirla."
        image="/images/spiaggia-ombrelloni-adriatico.jpg"
        imageAlt="La spiaggia dell'Adriatico a Rimini"
      />

      <section className="bg-ink px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
