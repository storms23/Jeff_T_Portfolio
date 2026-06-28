import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GridSubtle, OrbsProjects } from "../ui/Backgrounds";
import ProtectedImage from "../ui/ProtectedImage";
import CarouselNav from "../ui/CarouselNav";
import { SECTION_HEADING } from "../../lib/constants";
import { fadeUp } from "../../lib/animations";
import { PROJECTS } from "../../data/projects";

const CARD_HEIGHT = 400;
const IMAGE_HEIGHT = 185;

const PROJECT_PLACEHOLDER_IMAGE = `${import.meta.env.BASE_URL}images/project-placeholder.svg`;

const ProjectCard = ({ project, featured = false, mobileCarousel = false }) => {
  const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");
  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== "#");

  return (
    <div
      className={`group relative bg-black/[0.03] dark:bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-lg overflow-hidden hover:border-black/20 dark:hover:border-white/25 transition-all duration-200 flex flex-col ${
        mobileCarousel
          ? "w-full"
          : "flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[340px] snap-start"
      }`}
      style={{ height: `${CARD_HEIGHT}px` }}
    >
      {featured && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black text-[11px] font-bold rounded-full shadow-lg font-display tracking-wide border border-black/10 dark:border-white/20">
          Featured
        </div>
      )}

      {/* Image — fixed height */}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-t-2xl"
        style={{ height: `${IMAGE_HEIGHT}px` }}
      >
        {project.image && project.image !== PROJECT_PLACEHOLDER_IMAGE ? (
          <ProtectedImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className={`relative w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                Preview
              </p>
              <p className="font-display text-[11px] text-white/70 mt-1">
                No image available
              </p>
            </div>
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(3,7,18,0.8), transparent)",
          }}
        />
      </div>

      {/* Content — fills remaining space */}
      <div className="p-3 flex flex-col gap-1 flex-1 overflow-hidden">
      {/* Title + subtitle */}
      <div className="flex-shrink-0">
        <h3 className="font-display text-sm font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-150">
          {project.title}
        </h3>
        <p className="font-display text-xs font-medium bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
          {project.subtitle}
        </p>
      </div>

      {/* Description — scrollable so no text is ever hidden */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <p className="font-display text-zinc-600 dark:text-gray-400 text-xs leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 flex-shrink-0">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono px-2 py-0.5 bg-black/[0.03] dark:bg-white/[0.05] text-zinc-600 dark:text-gray-400 rounded-full text-[10px] border border-black/10 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(hasLive || hasGithub) && (
        <div
          className={`flex items-center flex-shrink-0 pt-1.5 border-t border-black/10 dark:border-white/5 ${
            hasLive && hasGithub ? "justify-between" : "justify-end"
          }`}
        >
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex items-center gap-1.5 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150 text-xs"
            >
              <ExternalLink size={12} /> Live Site
            </a>
          )}
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex items-center gap-1.5 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150 text-xs"
            >
              <Github size={12} /> GitHub
            </a>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

// ─── Projects ────────────────────────────────────────────────────────────────
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const desktopScrollRef = useRef(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black relative overflow-hidden"
    >
      <GridSubtle />
      <OrbsProjects />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-white dark:from-black to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.h2
          {...fadeUp(0.05)}
          className={`${SECTION_HEADING} mb-3 sm:mb-4 leading-tight`}
        >
          <span className="text-zinc-900 dark:text-white">Featured </span>
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="font-display text-center text-zinc-600 dark:text-gray-400 text-xs sm:text-sm mb-10 md:mb-14 max-w-md sm:max-w-none mx-auto"
        >
          A selection of projects I have built and developed recently.
        </motion.p>
      </div>

      {/* Desktop carousel */}
      <div className="hidden md:flex items-center gap-3 px-4 sm:px-6 relative z-10">
        <button
          onClick={() =>
            desktopScrollRef.current?.scrollBy({
              left: -360,
              behavior: "smooth",
            })
          }
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 dark:bg-gray-900/80 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150"
        >
          <ChevronLeft size={17} />
        </button>
        <div className="flex-1 min-w-0 overflow-hidden">
          <div
            ref={desktopScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
            }}
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() =>
            desktopScrollRef.current?.scrollBy({
              left: 360,
              behavior: "smooth",
            })
          }
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 dark:bg-gray-900/80 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150"
        >
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative z-10 px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 220 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -220 }}
              transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-full max-w-sm mx-auto sm:max-w-md">
                <ProjectCard
                  project={PROJECTS[currentIndex]}
                  featured={currentIndex === 0}
                  mobileCarousel={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <CarouselNav
          count={PROJECTS.length}
          current={currentIndex}
          onPrev={() =>
            setCurrentIndex((p) => (p - 1 + PROJECTS.length) % PROJECTS.length)
          }
          onNext={() => setCurrentIndex((p) => (p + 1) % PROJECTS.length)}
          onDot={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default Projects;
