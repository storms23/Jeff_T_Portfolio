import { Download, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { GridSubtle, OrbsResume } from "../ui/Backgrounds";
import {
  SECTION_HEADING,
  GRADIENT_TEXT,
  BTN_GRADIENT_FULL,
} from "../../lib/constants";
import { fadeUp } from "../../lib/animations";

const RESUME_PROFILE = {
  name: "Jefferson C. Tuparan",
  title: "Full-Stack Developer • Web Dev / Cybersecurity",
  location: "Valenzuela City",
  email: "jeffersontuparan@gmail.com",
  phone: "09760529311",
  objective:
    "Full-Stack Developer seeking employment in web development or cybersecurity to apply expertise in software development, modern web technologies, and offensive security principles.",
};

const EDUCATION = {
  program: "Bachelor of Science in Information Technology",
  school: "Pamantasan ng Lungsod ng Valenzuela",
  dates: "2023 — Present",
  location: "Maysan, Valenzuela City",
};

const RESUME_PDF = "Jefferson_Tuparan.pdf";

// ─── Resume ──────────────────────────────────────────────────────────────────
const Resume = () => (
  <section
    id="resume"
    className="py-10 md:py-12 lg:py-14 bg-zinc-50 dark:bg-black relative overflow-hidden scroll-mt-20"
  >
    <GridSubtle />
    <OrbsResume />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-zinc-50 dark:from-black to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent" />
    <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 relative z-20">
      <motion.div {...fadeUp(0)} className="text-center mb-6 md:mb-8">
        <h2 className={`${SECTION_HEADING} mb-3 md:mb-4`}>
          <span className={GRADIENT_TEXT}>Resume</span>
        </h2>
        <p className="font-display text-xs sm:text-sm text-zinc-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Full-stack developer snapshot. Download the PDF for the full version.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-4 md:gap-5 items-stretch">
        {/* Snapshot */}
        <motion.div
          {...fadeUp(0.1)}
          className="lg:col-span-8 p-4 md:p-5 rounded-2xl bg-white/80 dark:bg-gray-800/40 border border-black/10 dark:border-white/10 text-left"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] mb-3">
                // resume snapshot
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-black text-zinc-900 dark:text-white leading-tight">
                    {RESUME_PROFILE.name}
                  </h3>
                  <p className="font-display text-xs md:text-sm text-zinc-800 dark:text-white/85 font-semibold">
                    {RESUME_PROFILE.title}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-gray-300 text-xs font-display">
                    <MapPin size={13} className="text-zinc-700 dark:text-zinc-200" />
                    {RESUME_PROFILE.location}
                  </span>
                  <a
                    href={`mailto:${RESUME_PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150 text-xs font-display"
                  >
                    <Mail size={13} className="text-zinc-700 dark:text-zinc-200" />
                    {RESUME_PROFILE.email}
                  </a>
                  <a
                    href={`tel:${RESUME_PROFILE.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150 text-xs font-display"
                  >
                    <Phone size={13} className="text-zinc-700 dark:text-zinc-200" />
                    {RESUME_PROFILE.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="h-px bg-black/10 dark:bg-white/10" />

            <div>
              <h4 className="font-display text-sm font-bold text-zinc-900 dark:text-white mb-2">
                Professional Objective
              </h4>
              <p className="font-display text-xs sm:text-sm text-zinc-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {RESUME_PROFILE.objective}
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              <div>
                <h4 className="font-display text-sm font-bold text-zinc-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="font-display text-zinc-800 dark:text-gray-200 text-xs md:text-sm font-semibold leading-relaxed">
                  {EDUCATION.program}
                </p>
                <p className="font-display text-zinc-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mt-1">
                  {EDUCATION.school}
                </p>
                <p className="font-display text-zinc-700 dark:text-zinc-200 text-xs md:text-sm font-semibold leading-relaxed mt-1">
                  {EDUCATION.dates} • {EDUCATION.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download */}
        <motion.div
          {...fadeUp(0.15)}
          className="lg:col-span-4 p-4 md:p-5 rounded-2xl bg-white/70 dark:bg-gray-800/20 border border-black/10 dark:border-white/10 text-left flex flex-col justify-center"
        >
          <h3 className="font-display text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-1.5">
            Download PDF
          </h3>
          <p className="font-display text-xs sm:text-sm text-zinc-600 dark:text-gray-400 leading-relaxed mb-4">
            Grab the full PDF for complete details. Skills, projects, and awards
            are listed in the dedicated sections above.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}files/${RESUME_PDF}`}
            download={RESUME_PDF}
            className={`${BTN_GRADIENT_FULL} w-fit`}
          >
            <Download size={17} /> Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Resume;
