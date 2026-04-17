import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "../../data/navigation";
import { useScrollSection } from "../../hooks/useScrollSection";

const Navigation = ({ lenisRef, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => {
      if (!e.target.closest("nav")) setIsOpen(false);
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [isOpen]);

  const scrollToSection = (href) => {
    const el = document.getElementById(href.replace("#", ""));
    if (!el) return;
    setIsOpen(false);
    setTimeout(() => {
      if (lenisRef?.current)
        lenisRef.current.scrollTo(el, { offset: 0, duration: 1.6 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-2.5 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("#hero")}
            className="relative flex items-center gap-1 group bg-transparent border-0 p-0 cursor-pointer"
          >
            <span
              className="text-2xl font-extrabold leading-none transition-transform duration-200 group-hover:-translate-x-2 group-hover:opacity-100 opacity-90 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Righteous', sans-serif" }}
            >
              &lt;
            </span>
            <span
              className="text-2xl font-extrabold leading-none bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Righteous', sans-serif" }}
            >
              /
            </span>
            <span
              className="text-2xl font-extrabold leading-none transition-transform duration-200 group-hover:translate-x-2 group-hover:opacity-100 opacity-90 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Righteous', sans-serif" }}
            >
              &gt;
            </span>
          </button>

          <ul className="hidden md:flex space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-body text-sm font-medium px-3 py-1.5 transition-colors duration-150 bg-transparent border-0 cursor-pointer ${
                      isActive
                        ? "text-zinc-900 dark:text-white"
                        : "text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400"
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-zinc-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-colors duration-150"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-zinc-900 dark:text-white" />
              ) : (
                <Moon size={18} className="text-zinc-900 dark:text-white" />
              )}
            </button>

            <button
              onClick={() => setIsOpen((p) => !p)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-150 relative z-[60] bg-transparent border-0 cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "flex" }}
                  >
                    <X size={24} className="text-zinc-900 dark:text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "flex" }}
                  >
                    <Menu size={24} className="text-zinc-900 dark:text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-3 relative z-[59]"
            >
              <ul className="space-y-1 py-3 bg-white/95 dark:bg-gray-900/98 backdrop-blur-3xl rounded-2xl px-3 border border-black/10 dark:border-white/10 shadow-2xl">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-colors duration-150 bg-transparent border-0 cursor-pointer ${
                          isActive
                            ? "text-zinc-900 dark:text-white bg-black/5 dark:bg-white/5"
                            : "text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 flex-shrink-0" />
                        )}
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
