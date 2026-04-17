import { TECH_LOGOS } from "../../data/techStack";

const MarqueeRow = ({ items, reverse = false }) => {
  const doubled = [...items, ...items];
  return (
    <div
      className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex gap-2 sm:gap-3`}
      style={{ width: "max-content" }}
    >
      {doubled.map((tech, i) => (
        <div
          key={`${reverse ? "r" : "f"}-${i}`}
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.06] whitespace-nowrap flex-shrink-0 cursor-default"
        >
          <div className="w-4 h-4 sm:w-4 sm:h-4 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={tech.logo}
              alt={tech.name}
              className={`w-full h-full object-contain ${tech.rounded ? "rounded-sm" : ""} ${
                tech.invert ? "dark:invert" : ""
              }`}
              style={tech.opacity ? { opacity: tech.opacity } : undefined}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-zinc-600 dark:text-gray-500 tracking-wide">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Tech Strip ───────────────────────────────────────────────────────────────
const TechStrip = () => (
  <section className="relative bg-zinc-50 dark:bg-gray-950 py-10 md:py-14 overflow-hidden border-y border-black/10 dark:border-white/[0.06]">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50 dark:from-gray-950 dark:via-transparent dark:to-gray-950 z-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 relative z-20">
      <div className="flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-3 w-full">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-black/10 dark:to-white/10" />
          <p className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]">
            Tools &amp; Technologies
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-black/10 dark:to-white/10" />
        </div>
        <p className="font-display text-[11px] text-zinc-500 dark:text-gray-600">
          Familiar with and actively using in my projects
        </p>
      </div>
    </div>
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="mb-2 sm:mb-3">
        <MarqueeRow
          items={TECH_LOGOS.slice(0, Math.ceil(TECH_LOGOS.length / 2))}
          reverse={false}
        />
      </div>
      <div>
        <MarqueeRow
          items={TECH_LOGOS.slice(Math.ceil(TECH_LOGOS.length / 2))}
          reverse={true}
        />
      </div>
    </div>
  </section>
);

export default TechStrip;
