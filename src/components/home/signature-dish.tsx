"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BeamReveal, FadeUp } from "@/components/reveal";

export function SignatureDish() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="piatto-firma"
      ref={ref}
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink-deep"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.15]">
        <Image
          src="/images/chef-presenta-piatto.jpg"
          alt="Lo chef presenta il brodetto alla riminese"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/60 to-ink-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep/40" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 md:px-10">
        <div className="max-w-xl">
          <BeamReveal>
            <p className="text-eyebrow mb-5">Il piatto simbolo</p>
          </BeamReveal>
          <FadeUp>
            <h2 className="font-display text-4xl italic leading-[1.1] text-foam sm:text-5xl md:text-6xl">
              Brodetto alla riminese
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-md text-balance-pretty leading-relaxed text-foam/70">
              Sette qualità di pescato dell&apos;Adriatico, cotte lentamente
              in un fondo di pomodoro e aceto, come vuole la tradizione dei
              pescatori del porto. Servito con un crostone d&apos;aglio, dal
              porto alla tavola in poche ore.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-display text-2xl text-beam">€32</span>
              <Link
                href="/menu#secondi"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam transition-colors hover:text-beam"
              >
                Vedi il menu completo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
