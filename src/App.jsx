import { useEffect, useRef, useState } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import PageLoadBar from "./components/ui/PageLoadBar";
import { Divider } from "./components/ui/Divider";
import Hero from "./components/sections/Hero";
import TechStrip from "./components/sections/TechStrip";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import { GLOBAL_STYLE } from "./lib/constants";

if (typeof document !== "undefined") {
  let tag = document.getElementById("portfolio-global-styles");
  if (!tag) {
    tag = document.createElement("style");
    tag.id = "portfolio-global-styles";
    document.head.appendChild(tag);
  }
  tag.textContent = GLOBAL_STYLE;
}

const THEME_STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
};

const App = () => {
  const lenisRef = useRef(null);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    let rafId = null;
    import("lenis").then(({ default: Lenis }) => {
      const isTouchDevice = window.matchMedia(
        "(hover: none) and (pointer: coarse)",
      ).matches;
      if (isTouchDevice) return;
      const lenis = new Lenis({
        duration: 2.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      const onPointerDown = (e) => {
        if (e.pointerType !== "touch") lenis.stop();
      };
      const onPointerUp = (e) => {
        if (e.pointerType !== "touch") lenis.start();
      };
      const onKeyDown = (e) => {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode))
          lenis.stop();
      };
      const onKeyUp = (e) => {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode))
          lenis.start();
      };
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      window.addEventListener("pointerup", onPointerUp, { passive: true });
      window.addEventListener("keydown", onKeyDown, { passive: true });
      window.addEventListener("keyup", onKeyUp, { passive: true });
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      lenis._cleanup = () => {
        window.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
      };
    });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current._cleanup?.();
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-gray-950 dark:text-white transition-colors duration-500 overflow-x-hidden">
      <PageLoadBar />
      <Navigation lenisRef={lenisRef} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero lenisRef={lenisRef} />
        <TechStrip />
        <Divider />
        <Projects />
        <Divider />
        <Achievements />
        <Divider />
        <Resume />
        <Divider />
        <Contact theme={theme} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
