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
  title: "BSIT Student • Internship Candidate (QA / Web Dev / Cybersecurity)",
  location: "Valenzuela City",
  email: "jeffersontuparanst@gmail.com",
  phone: "09760529311",
  objective:
    "IT student seeking an internship in QA, web development, or cybersecurity to apply software development fundamentals and introductory offensive security concepts while gaining hands-on industry experience.",
};

const EDUCATION = {
  program: "Bachelor of Science in Information Technology",
  school: "Pamantasan ng Lungsod ng Valenzuela",
  dates: "2026 — Present",
  location: "Maysan, Valenzuela City",
};

const CORE_SKILLS = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "C#",
  ".NET",
  "Burp Suite",
  "Nmap",
  "Ubuntu/Linux",
  "Git",
];

// ─── Resume ──────────────────────────────────────────────────────────────────
const Resume = () => (
  <section
    id="resume"
    className="py-16 md:py-20 lg:py-24 bg-zinc-50 dark:bg-black relative overflow-hidden"
  >
    <GridSubtle />
    <OrbsResume />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-zinc-50 dark:from-black to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent" />
    <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 relative z-20">
      <motion.div {...fadeUp(0)} className="text-center mb-10 md:mb-14">
        <h2 className={`${SECTION_HEADING} mb-5 md:mb-8`}>
          <span className={GRADIENT_TEXT}>Resume</span>
        </h2>
        <p className="font-display text-xs sm:text-sm md:text-base text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Internship-focused snapshot. Download the PDF for the full version.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
        {/* Snapshot */}
        <motion.div
          {...fadeUp(0.1)}
          className="lg:col-span-7 p-5 md:p-7 rounded-2xl bg-white/80 dark:bg-gray-800/40 border border-black/10 dark:border-white/10 text-left"
        >
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] mb-3">
                // resume snapshot
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-zinc-900 dark:text-white leading-tight">
                    {RESUME_PROFILE.name}
                  </h3>
                  <p className="font-display text-sm md:text-base text-zinc-800 dark:text-white/85 font-semibold">
                    {RESUME_PROFILE.title}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
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
              <h4 className="font-display text-sm md:text-base font-bold text-zinc-900 dark:text-white mb-3">
                Professional Objective
              </h4>
              <p className="font-display text-xs sm:text-sm md:text-base text-zinc-600 dark:text-gray-400 leading-relaxed">
                {RESUME_PROFILE.objective}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
              <div>
                <h4 className="font-display text-sm md:text-base font-bold text-zinc-900 dark:text-white mb-3">
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

              <div>
                <h4 className="font-display text-sm md:text-base font-bold text-zinc-900 dark:text-white mb-3">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {CORE_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="font-display text-xs text-zinc-700 dark:text-zinc-200 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download */}
        <motion.div
          {...fadeUp(0.15)}
          className="lg:col-span-5 p-5 md:p-7 rounded-2xl bg-white/70 dark:bg-gray-800/20 border border-black/10 dark:border-white/10 text-left flex flex-col"
        >
          <h3 className="font-display text-base md:text-xl font-bold text-zinc-900 dark:text-white mb-2">
            Download PDF
          </h3>
          <p className="font-display text-xs sm:text-sm md:text-base text-zinc-600 dark:text-gray-400 leading-relaxed mb-6">
            Grab the full, ATS-friendly PDF for complete details.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}files/myResume.pdf`}
            download
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
