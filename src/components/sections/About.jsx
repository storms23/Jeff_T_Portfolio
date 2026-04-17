import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { GridSubtle, OrbsAbout } from "../ui/Backgrounds";
import { SECTION_HEADING } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";

const SKILL_CARDS = [
  {
    title: "Web Development",
    icon: (
      <span className="font-mono text-zinc-200 text-xs font-bold">
        &lt;/&gt;
      </span>
    ),
    items: [
      "React.js & Tailwind CSS",
      "Component-based development",
      "REST API integration",
      "Authentication & session handling",
    ],
  },
  {
    title: "Cybersecurity & Pentesting",
    icon: (
      <svg
        className="w-4 h-4 text-zinc-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
        />
      </svg>
    ),
    items: [
      "Web security fundamentals",
      "Intro offensive security concepts",
      "Basic reconnaissance techniques",
      "Burp Suite & Nmap",
      "Ubuntu/Linux security tools",
    ],
  },
  {
    title: "Programming & Database",
    icon: (
      <svg
        className="w-4 h-4 text-zinc-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    items: [
      "C# (OOP)",
      "JavaScript, HTML5, CSS3",
      "MySQL & CRUD operations",
      "Debugging & problem solving",
      "Visual Studio, VS Code, Git",
    ],
  },
  {
    title: "Machine Learning (Basic)",
    icon: (
      <svg
        className="w-4 h-4 text-zinc-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    items: [
      "Data preprocessing (Pandas/NumPy)",
      "Regression analysis",
      "Model training & evaluation",
      "Scikit-learn",
    ],
  },
];

const INTERNSHIP_SNAPSHOT = {
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
};

const About = () => (
  <section
    id="about"
    className="py-16 md:py-20 lg:py-24 bg-gray-950 relative overflow-hidden"
  >
    <GridSubtle />
    <OrbsAbout />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-gray-950 to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-gray-950 to-transparent" />
    <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
      <motion.h2
        {...fadeUp(0)}
        className={`${SECTION_HEADING} mb-3 md:mb-4 text-white`}
      >
        About
      </motion.h2>

      <motion.p
        {...fadeUp(0.05)}
        className="font-display text-center text-gray-400 text-xs sm:text-sm md:text-base mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Internship-focused snapshot — what I’m looking for and what I bring to a
        team.
      </motion.p>

      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start mb-12 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5 p-5 md:p-7 rounded-2xl bg-gray-900/35 border border-white/10"
        >
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] mb-4">
            // introduction
          </p>
          <p className="font-display text-sm md:text-base text-white/85 leading-relaxed mb-3">
            BSIT student at{" "}
            <span className="font-semibold text-white">
              Pamantasan ng Lungsod ng Valenzuela
            </span>
            . I’m seeking an internship in QA, web development, or
            cybersecurity.
          </p>
          <p className="font-display text-sm md:text-base text-white/70 leading-relaxed mb-5">
            I build responsive UIs with React + Tailwind, integrate REST APIs,
            and work with MySQL CRUD. I’m also learning web security
            fundamentals and basic reconnaissance workflows.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="font-display text-sm text-zinc-200 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 underline underline-offset-2"
          >
            View projects
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-7"
        >
          <div
            id="internship"
            className="scroll-mt-24 p-5 md:p-7 rounded-2xl bg-gray-900/40 border border-white/10"
          >
            <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] mb-3">
              // internship
            </p>

            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-zinc-200" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm md:text-base">
                    {INTERNSHIP_SNAPSHOT.role}
                  </h3>
                  <p className="font-display text-zinc-200 text-xs md:text-sm font-semibold mt-0.5">
                    {INTERNSHIP_SNAPSHOT.company}
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-xs font-display text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {INTERNSHIP_SNAPSHOT.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 ml-12">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Calendar size={13} />
                <span className="font-display">
                  {INTERNSHIP_SNAPSHOT.startDate} — {INTERNSHIP_SNAPSHOT.endDate}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <MapPin size={13} />
                <span className="font-display">{INTERNSHIP_SNAPSHOT.location}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-5 ml-12">
              {INTERNSHIP_SNAPSHOT.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-1.5" />
                  <span className="font-display text-gray-300 text-xs md:text-sm leading-relaxed">
                    {r}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 ml-12">
              {INTERNSHIP_SNAPSHOT.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-display text-xs text-zinc-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Technical Skills ── */}
      <motion.h3
        {...fadeUp(0)}
        className="font-display text-3xl sm:text-3xl md:text-4xl font-bold text-center tracking-tight text-white mb-3 mt-10 md:mt-14"
      >
        Technical Skills
      </motion.h3>
      <motion.p
        {...fadeUp(0.05)}
        className="font-display text-center text-gray-400 text-xs md:text-sm mb-10 md:mb-12"
      >
        Skills and tools I’m using for web development and cybersecurity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid sm:grid-cols-2 gap-4 md:gap-6"
      >
        {SKILL_CARDS.map(({ title, icon, items }) => (
          <div
            key={title}
            className="relative p-5 md:p-6 rounded-2xl bg-gray-900/40 border border-white/[0.08]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
              >
                {icon}
              </div>
              <h4 className="font-display text-sm md:text-base font-bold text-white">
                {title}
              </h4>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-gray-400 text-xs font-display"
                >
                  <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
