import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GridSubtle, OrbsHero } from "../ui/Backgrounds";
import { CodeTag } from "../ui/Divider";
import Counter from "../ui/Counter";
import ProfileCard from "../ui/ProfileCard";
import { BTN_PRIMARY, BTN_SECONDARY } from "../../lib/constants";

// ─── Tech Stack Icons ─────────────────────────────────────────────────────────
const HERO_STACK = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const StackIcons = () => (
  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
    {HERO_STACK.map(({ name, icon, invert }) => (
      <div key={name} className="group relative">
        <div className="w-8 h-8 p-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-150 flex items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain"
            style={invert ? { filter: "invert(1) brightness(0.6)" } : {}}
          />
        </div>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none font-mono z-10">
          {name}
        </span>
      </div>
    ))}
  </div>
);

// ─── Status Badges ────────────────────────────────────────────────────────────
const StatusBadges = () => (
  <div className="flex flex-row flex-wrap gap-2 w-fit">
    {/* Available for Work Badge */}
    <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full">
      <div className="relative flex items-center justify-center">
        {/* Static Glow Circle */}
        <div className="absolute h-2 w-2 rounded-full bg-black/15 dark:bg-white/25 blur-[3px]" />

        {/* The Status Dot */}
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-900/70 dark:bg-white/70 shadow-[0_0_4px_rgba(0,0,0,0.3)] dark:shadow-[0_0_4px_rgba(255,255,255,0.55)]" />
      </div>

      <span className="font-mono text-zinc-700 dark:text-zinc-200 text-[10px] font-medium tracking-wide">
        Open for Internship
      </span>
    </div>

    {/* Learning Next.js Badge */}
    <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full shadow-inner">
      <div className="relative flex items-center justify-center">
        {/* Soft Orange Aura */}
        <div className="absolute h-3 w-3 rounded-full bg-black/10 dark:bg-white/20 blur-[4px]" />

        {/* The Rocket Icon */}
        <span className="relative text-[11px] leading-none drop-shadow-[0_0_3px_rgba(255,255,255,0.6)]">
          🚀
        </span>
      </div>

      <span className="font-mono text-zinc-700 dark:text-zinc-200 text-[10px] font-medium tracking-wide">
        Learning Web Security
      </span>
    </div>
  </div>
);

// ─── Stats Row ────────────────────────────────────────────────────────────────
const StatsRow = ({ textSize = "text-xl" }) => (
  <div className="flex items-center gap-0 divide-x divide-black/10 dark:divide-white/10">
    {[
      { value: 4, suffix: "", label: "Projects" },
      { value: 7, suffix: "", label: "Seminars" },
      { value: 3, suffix: "", label: "Awards" },
    ].map(({ value, suffix, label }) => (
      <div key={label} className="text-center px-4 first:pl-0 last:pr-0">
        <div
          className={`font-display ${textSize} font-black text-zinc-900 dark:text-white leading-none`}
        >
          <Counter to={value} suffix={suffix} />
        </div>
        <div className="font-mono text-[9px] text-zinc-500 dark:text-gray-500 uppercase tracking-widest mt-1">
          {label}
        </div>
      </div>
    ))}
  </div>
);

// ─── Subtle Code Peek (decorative) ───────────────────────────────────────────
const CODE_PEEK = [
  "if (userInput == \"<script>",
  "    alert('XSS')</script>\")",
  "{",
  "    Console.WriteLine(\"Nice try.\");",
  "    block();",
  "}",
].join("\n");

const CodePeekCard = () => (
  <div className="rounded-2xl bg-white/80 dark:bg-gray-950/40 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="font-mono text-[10px] leading-4 text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
        // snippet
      </span>
      <span className="font-mono text-[10px] leading-4 text-zinc-400 dark:text-white/35">
        read-only
      </span>
    </div>
    <pre className="m-0 font-mono text-[11px] leading-5 text-zinc-800 dark:text-zinc-100 whitespace-pre-wrap break-words">
      {CODE_PEEK}
    </pre>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = ({ lenisRef }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef?.current)
      lenisRef.current.scrollTo(el, { offset: 0, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-gray-950 dark:via-gray-950 dark:to-black pt-20 pb-16 md:pb-24"
    >
      <GridSubtle />
      <OrbsHero />

      {/* Top/bottom fades */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 z-[1] bg-gradient-to-b from-zinc-50/90 dark:from-gray-950/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-zinc-50 dark:from-gray-950 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-5"
            >
              <StatusBadges />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            >
              <span className="text-zinc-900 dark:text-white">Hi, I’m</span>
              <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
                Jefferson
              </span>
              <br />
              <span className="bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-500 dark:from-zinc-200 dark:via-white dark:to-zinc-500 bg-clip-text text-transparent">
                Tuparan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-display text-sm md:text-base text-zinc-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              BSIT student at Pamantasan ng Lungsod ng Valenzuela, seeking an
              internship in QA, web development, or cybersecurity. I enjoy
              building applications that are{" "}
              <span className="text-sm md:text-base">
                <CodeTag>clean</CodeTag>
              </span>
              ,{" "}
              <span className="text-sm md:text-base">
                <CodeTag>secure</CodeTag>
              </span>
              , and{" "}
              <span className="text-sm md:text-base">
                <CodeTag>reliable</CodeTag>
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mb-7 max-w-xl"
            >
              <div className="rounded-2xl bg-white/70 dark:bg-gray-900/35 border border-black/10 dark:border-white/10 p-5">
                <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-3">
                  // internship snapshot
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Seeking internship opportunities in QA, web development, or cybersecurity",
                    "Built responsive UIs with React + Tailwind and integrated REST APIs",
                    "Familiar with web security fundamentals, basic reconnaissance, and introductory offensive concepts",
                    "Comfortable with MySQL CRUD, debugging, and Git-based workflows",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/30 shrink-0 mt-1.5" />
                      <span className="font-display text-zinc-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "QA",
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                    "MySQL",
                    "Burp Suite",
                    "Nmap",
                    "Ubuntu/Linux",
                    "Git",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-display text-xs text-zinc-700 dark:text-zinc-200 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("projects")}
                className={BTN_PRIMARY}
              >
                View My Work{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className={BTN_SECONDARY}
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-6"
            >
              <StatsRow textSize="text-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
                <p className="font-mono text-[11px] text-zinc-500 dark:text-gray-600 uppercase tracking-widest mb-2">
                Tech Stack
              </p>
              <StackIcons />
            </motion.div>
          </motion.div>

          {/* Right column — profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative isolate w-full flex justify-center px-12">
              {/* Anchor everything to the profile card box */}
              <div className="relative">
                {/* Decorative code card peeks from bottom-right, behind the profile */}
                <div className="hidden xl:block absolute right-0 bottom-0 w-[260px] opacity-100 pointer-events-none -rotate-1 translate-x-[28%] translate-y-[92%] z-0">
                  <CodePeekCard />
                </div>

                {/* Occlusion layer ensures anything behind never shows through the profile */}
                <div className="relative z-10">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gray-950"
                    aria-hidden="true"
                  />
                  <ProfileCard
                    size="lg"
                    initials="JT"
                    image={`${import.meta.env.BASE_URL}images/Profilepicture.jpg`}
                    objectPosition="object-[50%_25%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile / Tablet Layout (< lg) ── */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          {/* Status badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <StatusBadges />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl xs:text-5xl sm:text-5xl font-extrabold leading-tight text-center"
          >
            <span className="text-zinc-900 dark:text-white">Hi, I’m</span>{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
              Jefferson
            </span>{" "}
            <span className="bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-500 dark:from-zinc-200 dark:via-white dark:to-zinc-500 bg-clip-text text-transparent">
              Tuparan
            </span>
          </motion.h1>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative w-full flex justify-center px-10 sm:px-16"
          >
            <ProfileCard
              size="sm"
              initials="JT"
              image={`${import.meta.env.BASE_URL}images/Profilepicture.jpg`}
              objectPosition="object-[50%_25%]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-display text-sm sm:text-base text-zinc-600 dark:text-gray-400 leading-relaxed text-center max-w-md px-2"
          >
            BSIT student seeking an internship in QA, web development, or
            cybersecurity. I enjoy building applications that are{" "}
            <span className="[&>*]:!text-xs sm:[&>*]:!text-sm">
              <CodeTag>clean</CodeTag>
            </span>
            ,{" "}
            <span className="[&>*]:!text-xs sm:[&>*]:!text-sm">
              <CodeTag>secure</CodeTag>
            </span>
            , and{" "}
            <span className="[&>*]:!text-xs sm:[&>*]:!text-sm">
              <CodeTag>reliable</CodeTag>
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-md px-2"
          >
            <div className="rounded-2xl bg-white/70 dark:bg-gray-900/35 border border-black/10 dark:border-white/10 p-4">
              <p className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-3 text-center">
                // internship snapshot
              </p>
              <div className="space-y-2">
                {[
                  "Seeking internship in QA / Web Dev / Cybersecurity",
                  "React + Tailwind UI, REST API integration",
                  "Web security fundamentals (Burp Suite, Nmap)",
                  "MySQL CRUD, debugging, Git workflows",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/30 shrink-0 mt-1.5" />
                    <span className="font-display text-zinc-700 dark:text-gray-300 text-xs leading-relaxed">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className={BTN_PRIMARY}
            >
              View My Work{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={BTN_SECONDARY}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <StatsRow textSize="text-xl" />
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="w-full"
          >
            <p className="font-mono text-[10px] text-zinc-500 dark:text-gray-600 uppercase tracking-widest mb-2 text-center">
              Tech Stack
            </p>
            <StackIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
