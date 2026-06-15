import { motion } from "framer-motion";
import { Code2, Database, Wrench, Shield } from "lucide-react";
import { GridSubtle } from "../ui/Backgrounds";
import { SECTION_HEADING, GRADIENT_TEXT } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";
import { SKILL_CATEGORIES } from "../../data/skills";

const CATEGORY_ICONS = {
  Frontend: Code2,
  "Backend & Database": Database,
  "Tools & DevOps": Wrench,
  Cybersecurity: Shield,
};

const Skills = () => (
  <section
    id="skills"
    className="py-12 md:py-14 lg:py-16 bg-white dark:bg-black relative overflow-hidden scroll-mt-20 border-y border-black/10 dark:border-white/[0.06]"
  >
    <GridSubtle />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-white dark:from-black to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-white dark:from-black to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
      <motion.h2 {...fadeUp(0)} className={`${SECTION_HEADING} mb-3`}>
        <span className={GRADIENT_TEXT}>Skills</span>
      </motion.h2>
      <motion.p
        {...fadeUp(0.05)}
        className="font-display text-center text-zinc-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-8 md:mb-10 max-w-2xl mx-auto"
      >
        Technologies and tools from my updated resume — web development,
        databases, and cybersecurity.
      </motion.p>

      <motion.div
        {...fadeUp(0.1)}
        className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
      >
        {SKILL_CATEGORIES.map((category) => {
          const Icon = CATEGORY_ICONS[category.title] || Code2;

          return (
            <div
              key={category.title}
              className="rounded-2xl bg-zinc-50/90 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 p-4 md:p-5 shadow-sm dark:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-zinc-900/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon
                    size={18}
                    className="text-zinc-800 dark:text-zinc-200"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-mono text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 dark:text-zinc-200">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-zinc-600 dark:text-gray-400 text-xs md:text-sm font-display leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
