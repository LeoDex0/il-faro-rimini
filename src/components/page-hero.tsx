import Image from "next/image";
import { BeamReveal, FadeUp } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  tall = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  tall?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-ink-deep",
        tall ? "min-h-[80svh]" : "min-h-[52svh]"
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.72] saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink-deep/70" />
      </div>
      <div className="relative z-10 w-full px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <BeamReveal>
            <p className="text-eyebrow mb-4">{eyebrow}</p>
          </BeamReveal>
          <FadeUp>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-foam sm:text-6xl md:text-7xl">
              {title}
            </h1>
          </FadeUp>
          {description ? (
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-lg text-balance-pretty leading-relaxed text-foam/70">
                {description}
              </p>
            </FadeUp>
          ) : null}
        </div>
      </div>
    </section>
  );
}
