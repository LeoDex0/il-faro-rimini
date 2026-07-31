import { BeamReveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-eyebrow mb-4",
            tone === "dark" && "text-terracotta"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <BeamReveal>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl",
            tone === "light" ? "text-foam" : "text-ink"
          )}
        >
          {title}
        </h2>
      </BeamReveal>
      {description ? (
        <p
          className={cn(
            "mt-5 text-balance-pretty text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-foam/70" : "text-ink/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
