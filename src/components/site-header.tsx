"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { EASE_SIGNATURE } from "@/components/reveal";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative py-1 text-sm uppercase tracking-[0.14em] transition-colors",
        active ? "text-beam" : "text-foam/85 hover:text-foam"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-beam transition-transform duration-300 ease-out group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

const mobileLinks = [
  ...navLinks,
  { href: "/prenotazioni", label: "Prenota un tavolo" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid
          ? "border-b border-foam/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink-deep/70 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.06em] text-foam"
        >
          Il Faro
          <span className="ml-2.5 hidden font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foam/50 sm:inline">
            Rimini · dal {site.founded}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/prenotazioni" />}
            nativeButton={false}
            size="sm"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            Prenota
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Apri il menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-l border-foam/10 bg-ink sm:max-w-sm"
            >
              <SheetTitle className="px-6 pt-6 font-display text-2xl text-foam">
                Il Faro
              </SheetTitle>
              <SheetDescription className="sr-only">
                Menu di navigazione del sito
              </SheetDescription>
              <nav className="mt-4 flex flex-col px-6">
                <AnimatePresence>
                  {open &&
                    mobileLinks.map((l, i) => (
                      <motion.div
                        key={l.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + i * 0.06,
                          duration: 0.5,
                          ease: EASE_SIGNATURE,
                        }}
                      >
                        <Link
                          href={l.href}
                          className="block border-b border-foam/10 py-4 font-display text-2xl text-foam/90 transition-colors hover:text-beam"
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </nav>
              <div className="mt-auto space-y-1 px-6 pb-8 text-sm text-foam/55">
                <p>{site.phone}</p>
                <p>
                  {site.address.line1}, {site.address.line2}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
