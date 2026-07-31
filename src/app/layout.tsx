import type { Metadata, Viewport } from "next";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { fraunces, manrope } from "@/lib/fonts";
import { site } from "@/lib/content";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3014"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ristorante Rimini",
    "ristorante pesce Rimini",
    "cucina romagnola",
    "San Giuliano Mare",
    "porto canale Rimini",
    "ristorante Adriatico",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "it_IT",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1116",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-ink font-sans text-foam antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <MotionConfig reducedMotion="user">
            <SmoothScroll>
              <Preloader />
              <div aria-hidden className="grain-overlay" />
              <ScrollProgress />
              <CursorGlow />
              <SiteHeader />
              <main className="flex min-h-svh flex-col">{children}</main>
              <SiteFooter />
            </SmoothScroll>
          </MotionConfig>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
