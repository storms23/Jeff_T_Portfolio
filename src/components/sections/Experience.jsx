import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { GridSubtle } from "../ui/Backgrounds";
import { SECTION_HEADING, GRADIENT_TEXT } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";

const EXPERIENCE = [
  {
    company: "Pamantasan ng Lungsod ng Valenzuela",
    role: "BSIT Student",
    type: "Seeking Internship",
    startDate: "2026",
    endDate: "Present",
    location: "Valenzuela City",
    responsibilities: [
      "Seeking internship opportunities in QA, web development, or cybersecurity",
      "Built responsive UIs using React and Tailwind CSS and integrated REST APIs",
      "Familiar with web security fundamentals, basic reconnaissance, and introductory offensive security concepts",
      "Comfortable working with MySQL CRUD operations, debugging, and Git-based workflows",
    ],
    tags: [
      "QA",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
      "Burp Suite",
      "Nmap",
      "Ubuntu/Linux",
      "Git",
    ],
  },
];

const Experience = () => (
  <section
    id="experience"
    className="py-20 md:py-28 lg:py-40 bg-black relative overflow-hidden"
  >
    <GridSubtle />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-black to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-black to-transparent" />

    <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 relative z-20">
      <motion.div {...fadeUp(0)} className="text-center mb-10 md:mb-14">
        <h2 className={`${SECTION_HEADING} mb-5 md:mb-8`}>
          <span className={GRADIENT_TEXT}>Internship</span>
        </h2>
        <p className="font-display text-xs sm:text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
          What I'm looking for and what I bring to a team.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.1)}
            className="p-5 md:p-7 rounded-2xl bg-gray-800/40 border border-white/10 text-left"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-zinc-200" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm md:text-base">
                    {exp.role}
                  </h3>
                  <p className="font-display text-zinc-200 text-xs md:text-sm font-semibold mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-display text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {exp.type}
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-4 ml-12">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Calendar size={13} />
                <span className="font-display">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <MapPin size={13} />
                <span className="font-display">{exp.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2.5 mb-5 ml-12">
              {exp.responsibilities.map((r, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-1.5" />
                  <span className="font-display text-gray-300 text-xs md:text-sm leading-relaxed">
                    {r}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 ml-12">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-display text-xs text-zinc-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
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
