import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/navigation";

/**
 * Tracks which section is currently in view based on IntersectionObserver.
 * Returns the active section ID string (e.g. "hero", "about", etc.)
 */
export const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
};
