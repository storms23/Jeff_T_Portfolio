import { useEffect, useRef } from "react";

/**
 * Initializes Lenis smooth scroll on desktop only.
 * Returns a ref to the Lenis instance for use in scrollToSection().
 */
export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    import("lenis").then(({ default: Lenis }) => {
      const isTouchDevice = window.matchMedia(
        "(hover: none) and (pointer: coarse)"
      ).matches;
      if (isTouchDevice) return;

      const lenis = new Lenis({
        duration: 2.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      const onPointerDown = (e) => { if (e.pointerType !== "touch") lenis.stop(); };
      const onPointerUp   = (e) => { if (e.pointerType !== "touch") lenis.start(); };
      const onKeyDown     = (e) => { if ([32,33,34,35,36,37,38,39,40].includes(e.keyCode)) lenis.stop(); };
      const onKeyUp       = (e) => { if ([32,33,34,35,36,37,38,39,40].includes(e.keyCode)) lenis.start(); };

      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      window.addEventListener("pointerup",   onPointerUp,   { passive: true });
      window.addEventListener("keydown",     onKeyDown,     { passive: true });
      window.addEventListener("keyup",       onKeyUp,       { passive: true });

      const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
      rafId = requestAnimationFrame(raf);

      lenis._cleanup = () => {
        window.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup",   onPointerUp);
        window.removeEventListener("keydown",     onKeyDown);
        window.removeEventListener("keyup",       onKeyUp);
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

  return lenisRef;
};
