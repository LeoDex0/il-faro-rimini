"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { EASE_SIGNATURE } from "@/components/reveal";

const headline = ["La luce che", "riporta a tavola."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh items-end overflow-hidden bg-ink-deep"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-terrazza-sera.jpg"
          alt="La terrazza del Faro affacciata sul porto canale, all'imbrunire"
          fill
          priority
          sizes="100vw"
          className="object-cover [animation:ken-burns_24s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-6 pb-24 pt-40 md:px-10 md:pb-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7, ease: EASE_SIGNATURE }}
            className="text-eyebrow mb-6"
          >
            Ristorante sul porto canale · dal {site.founded}
          </motion.p>

          <h1 className="max-w-4xl font-display text-5xl leading-[1.04] text-foam sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 1.85 + i * 0.14,
                    ease: EASE_SIGNATURE,
                  }}
                  className="block"
                >
                  {i === 1 ? <em className="text-beam">{line}</em> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.35, ease: EASE_SIGNATURE }}
            className="mt-7 max-w-md text-balance-pretty text-base leading-relaxed text-foam/70 sm:text-lg"
          >
            Cucina di mare e tradizione romagnola, a due passi dallo storico
            faro di Rimini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.55, ease: EASE_SIGNATURE }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Button
              render={<Link href="/prenotazioni" />}
              nativeButton={false}
              className="h-12 rounded-full px-8 text-[0.95rem]"
            >
              Prenota un tavolo
            </Button>
            <a
              href="#storia"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-foam/80 transition-colors hover:text-foam"
            >
              Scopri la nostra storia
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-foam/50"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scorri
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
