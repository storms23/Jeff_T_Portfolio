import { motion } from "framer-motion";
import { GridSubtle, OrbsAchievements } from "../ui/Backgrounds";
import { SECTION_HEADING, GRADIENT_TEXT } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";
import { ACHIEVEMENTS } from "../../data/achievements";

// ─── Achievements ────────────────────────────────────────────────────────────
const Achievements = () => {
  const achievements = ACHIEVEMENTS.filter((x) => x.kind !== "seminar");
  const seminars = ACHIEVEMENTS.filter((x) => x.kind === "seminar");

  const Row = ({ item }) => {
    const meta = [item.issuer, item.date, item.location].filter(Boolean).join(" • ");
    const highlighted = item.highlight;

    return (
      <div
        className={`px-3 sm:px-4 py-2.5 sm:py-3 flex gap-3 ${
          highlighted
            ? "bg-gradient-to-r from-amber-50 via-orange-50/80 to-amber-50 dark:from-amber-500/10 dark:via-orange-500/5 dark:to-amber-500/10 border-l-4 border-amber-500"
            : ""
        }`}
      >
        <div className="w-9 flex-shrink-0 flex items-start justify-center pt-0.5">
          <span
            className={`${highlighted ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}
            aria-hidden="true"
          >
            {item.badge}
          </span>
        </div>

        <div className="min-w-0">
          {highlighted && (
            <span className="inline-block font-mono text-[9px] uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/15 border border-amber-300/60 dark:border-amber-400/30 px-2 py-0.5 rounded-full mb-1.5">
              Latest
            </span>
          )}
          <p
            className={`font-display font-semibold text-zinc-900 dark:text-white leading-tight ${
              highlighted ? "text-base md:text-lg" : "text-sm md:text-base"
            }`}
          >
            {item.title}
          </p>
          <p className="font-display text-xs md:text-sm text-zinc-600 dark:text-gray-400 leading-snug mt-0.5">
            {item.subtitle}
          </p>
          {meta && (
            <p className="font-mono text-[10px] md:text-[11px] text-zinc-500 dark:text-gray-500 mt-1">
              {meta}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="achievements"
      className="py-12 md:py-14 lg:py-16 bg-zinc-100/80 dark:bg-gray-900 relative overflow-hidden scroll-mt-20"
    >
      <GridSubtle />
      <OrbsAchievements />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-zinc-100/80 dark:from-gray-900 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-zinc-100/80 dark:from-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.h2 {...fadeUp(0)} className={`${SECTION_HEADING} mb-3`}>
          <span className={GRADIENT_TEXT}>Ach ievements &amp; Seminars</span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.05)}
          className="font-display text-center text-zinc-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-6 md:mb-8"
        >
          Awards, competitions, and seminars at a glance.
        </motion.p>
        <motion.div {...fadeUp(0.1)} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="rounded-2xl bg-white dark:bg-white/[0.04] border border-black/15 dark:border-white/15 shadow-lg shadow-black/5 dark:shadow-black/30 overflow-hidden">
              <div className="px-4 sm:px-5 py-3 border-b border-black/10 dark:border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white/10 dark:to-white/5">
                <p className="font-mono text-xs md:text-sm text-white dark:text-zinc-100 uppercase tracking-[0.2em] font-semibold">
                  Achievements
                </p>
              </div>
              <div className="divide-y divide-black/10 dark:divide-white/10">
                {achievements.map((item) => (
                  <Row key={item.title} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-white/[0.04] border border-black/15 dark:border-white/15 shadow-lg shadow-black/5 dark:shadow-black/30 overflow-hidden flex flex-col">
              <div className="px-4 sm:px-5 py-3 border-b border-black/10 dark:border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white/10 dark:to-white/5 shrink-0">
                <p className="font-mono text-xs md:text-sm text-white dark:text-zinc-100 uppercase tracking-[0.2em] font-semibold">
                  Seminars
                </p>
              </div>
              <div className="divide-y divide-black/10 dark:divide-white/10">
                {seminars.map((item) => (
                  <Row key={item.title} item={item} />
                ))}
              </div>
            </div>

            <div className="md:col-span-2 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden flex flex-col items-center justify-center py-8">
              <img 
                src="/images/AWS ENOVATOR LOGO.png" 
                alt="AWS User Group e:Novators Philippines Logo" 
                className="w-24 h-24 mb-4 object-contain transition-transform duration-300 ease-out hover:scale-110 hover:-rotate-3 drop-shadow-md cursor-pointer" 
              />
              <p className="font-display text-base md:text-lg font-semibold text-zinc-900 dark:text-white text-center px-4">
                AWS User Group e:Novators Philippines
              </p>
              <p className="font-mono text-xs md:text-sm text-zinc-500 dark:text-gray-400 mt-2 uppercase tracking-widest text-center px-4">
                Affiliation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
