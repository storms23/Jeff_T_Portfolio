// ─── Design Tokens ────────────────────────────────────────────────────────────
export const SECTION_HEADING =
  "font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight";

export const GRADIENT_TEXT =
  "bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_0_16px_rgba(255,255,255,0.16)]";

export const CARD_BASE =
  "relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-black/10 dark:border-white/10";

// ─── Button Variants ──────────────────────────────────────────────────────────
export const BTN_PRIMARY =
  "btn-shine font-display group px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black rounded-lg font-semibold border border-black/10 dark:border-white/20 text-sm tracking-wide flex items-center gap-2 transition duration-150 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_10px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:brightness-105 active:scale-95 overflow-hidden";

export const BTN_SECONDARY =
  "font-display px-6 py-3 md:px-8 md:py-3.5 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-gray-300 rounded-lg font-semibold border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/30 hover:text-zinc-900 dark:hover:text-white active:scale-95 transition-colors duration-150 text-sm tracking-wide";

export const BTN_GRADIENT_FULL =
  "btn-shine font-display inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black rounded-lg font-semibold border border-black/10 dark:border-white/20 text-sm tracking-wide transition duration-150 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_10px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:brightness-105 active:scale-95 overflow-hidden";

export const BTN_SUBMIT =
  "btn-shine font-display w-full px-6 py-3.5 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black rounded-lg font-semibold border border-black/10 dark:border-white/20 text-sm tracking-wide transition duration-150 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_10px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:brightness-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:brightness-100 overflow-hidden";

// ─── Global Styles (injected once into <head>) ────────────────────────────────
export const GLOBAL_STYLE = `
  html { scroll-behavior: smooth; }

  :root {
    --grid-coarse: rgba(0,0,0,0.06);
    --grid-fine: rgba(0,0,0,0.03);
  }

  .dark {
    --grid-coarse: rgba(255,255,255,0.03);
    --grid-fine: rgba(255,255,255,0.012);
  }

  .grid-subtle { background-size: 40px 40px; }
  @media (min-width: 768px)  { .grid-subtle { background-size: 56px 56px; } }
  @media (min-width: 1024px) { .grid-subtle { background-size: 72px 72px; } }

  .btn-shine::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.45s ease;
  }
  .btn-shine:hover::before { left: 140%; }

  @keyframes marquee         { 0% { transform: translateX(0); }    100% { transform: translateX(-50%); } }
  @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); }    }

  .marquee-track         { animation: marquee 28s linear infinite;         will-change: transform; }
  .marquee-track-reverse { animation: marquee-reverse 32s linear infinite; will-change: transform; }

  @media (hover: hover) {
    .marquee-track:hover,
    .marquee-track-reverse:hover { animation-play-state: paused; }
  }

  .protected-img {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
  .img-shield {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }
`;
