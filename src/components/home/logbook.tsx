import { logbook } from "@/lib/content";
import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Logbook() {
  return (
    <section id="numeri" className="border-y border-foam/10 bg-tide/40 py-16 md:py-20">
      <StaggerGroup className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-x-8 md:px-10">
        {logbook.map((item, i) => (
          <StaggerItem
            key={item.label}
            className={cn(
              "relative px-2",
              i > 0 &&
                "md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-10 md:before:w-px md:before:bg-foam/10"
            )}
          >
            <p className="font-display text-4xl text-beam sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 max-w-[14ch] text-xs uppercase leading-snug tracking-[0.12em] text-foam/55 sm:text-sm">
              {item.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
