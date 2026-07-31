const PHRASES = [
  "Crudo dell'Adriatico",
  "Brodetto alla riminese",
  "Cappelletti di Nonna Ada",
  "Vista sul porto canale",
  "Dal 1978",
  "Sangiovese di Romagna",
];

export function MarqueeStrip() {
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="relative overflow-hidden border-y border-foam/10 bg-ink-deep py-4">
      <div
        className="flex w-max items-center gap-12 [animation:marquee_38s_linear_infinite] hover:[animation-play-state:paused]"
        aria-hidden
      >
        {items.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-display text-lg italic text-foam/40 sm:text-xl"
          >
            {phrase}
            <span className="text-beam/60">✦</span>
          </span>
        ))}
      </div>
      <span className="sr-only">
        {PHRASES.join(", ")}
      </span>
    </div>
  );
}
