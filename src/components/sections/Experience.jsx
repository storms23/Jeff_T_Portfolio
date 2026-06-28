import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { GridSubtle, OrbsResume } from "../ui/Backgrounds";
import { SECTION_HEADING, GRADIENT_TEXT } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";
import { EXPERIENCE } from "../../data/experience";

const Experience = () => (
  <section
    id="experience"
    className="py-12 md:py-14 lg:py-16 bg-white dark:bg-black relative overflow-hidden scroll-mt-20"
  >
    <GridSubtle />
    <OrbsResume />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-white dark:from-black to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-white dark:from-black to-transparent" />

    <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 relative z-20">
      <motion.div {...fadeUp(0)} className="text-center mb-6 md:mb-8">
        <h2 className={`${SECTION_HEADING} mb-3 md:mb-4`}>
          <span className={GRADIENT_TEXT}>Experience</span>
        </h2>
        <p className="font-display text-xs sm:text-sm text-zinc-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Professional roles, freelance work, and community involvement.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 md:gap-5">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            {...fadeUp(0.08 + i * 0.06)}
            className="p-4 md:p-5 rounded-2xl bg-zinc-50/90 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-left shadow-sm dark:shadow-none"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-7 h-7 object-contain"
                    />
                  ) : (
                    <Briefcase
                      size={16}
                      className="text-zinc-700 dark:text-zinc-200"
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-zinc-900 dark:text-white text-sm md:text-base leading-tight">
                    {exp.role}
                  </h3>
                  <p className="font-display text-zinc-700 dark:text-zinc-200 text-xs md:text-sm font-semibold mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[10px] md:text-xs font-display text-zinc-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-full">
                {exp.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mb-3 ml-[52px]">
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-gray-400 text-xs">
                <Calendar size={13} />
                <span className="font-display">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-gray-400 text-xs">
                <MapPin size={13} />
                <span className="font-display">{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4 ml-[52px]">
              {exp.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-white/30 shrink-0 mt-1.5" />
                  <span className="font-display text-zinc-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 ml-[52px]">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-display text-[11px] text-zinc-700 dark:text-zinc-200 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
