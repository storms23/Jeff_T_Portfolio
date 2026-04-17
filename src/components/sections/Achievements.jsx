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
    return (
      <div className="px-4 sm:px-5 py-3.5 sm:py-4 flex gap-3">
        <div className="w-9 flex-shrink-0 flex items-start justify-center pt-0.5">
          <span className="text-lg" aria-hidden="true">
            {item.badge}
          </span>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm md:text-base font-semibold text-zinc-900 dark:text-white leading-snug">
            {item.title}
          </p>
          <p className="font-display text-xs md:text-sm text-zinc-600 dark:text-gray-400 leading-relaxed mt-0.5">
            {item.subtitle}
          </p>
          {meta && (
            <p className="font-mono text-[10px] text-zinc-500 dark:text-gray-500 mt-1.5">
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
      className="py-16 md:py-20 lg:py-24 bg-zinc-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <GridSubtle />
      <OrbsAchievements />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-zinc-50 dark:from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-zinc-50 dark:from-gray-950 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.h2 {...fadeUp(0)} className={`${SECTION_HEADING} mb-3`}>
          <span className={GRADIENT_TEXT}>Achievements &amp; Seminars</span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.05)}
          className="font-display text-center text-zinc-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-10 md:mb-16"
        >
          Achievements on the left, seminars on the right.
        </motion.p>
        <motion.div {...fadeUp(0.1)} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden">
              <div className="px-4 sm:px-5 py-3 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <p className="font-mono text-[10px] text-zinc-600 dark:text-gray-500 uppercase tracking-[0.2em]">
                  Achievements
                </p>
              </div>
              <div className="divide-y divide-black/10 dark:divide-white/10">
                {achievements.map((item) => (
                  <Row key={item.title} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden">
              <div className="px-4 sm:px-5 py-3 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <p className="font-mono text-[10px] text-zinc-600 dark:text-gray-500 uppercase tracking-[0.2em]">
                  Seminars
                </p>
              </div>
              <div className="divide-y divide-black/10 dark:divide-white/10">
                {seminars.map((item) => (
                  <Row key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
