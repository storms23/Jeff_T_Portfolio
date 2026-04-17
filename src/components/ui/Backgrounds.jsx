import { useEffect } from "react";

// ─── Inject keyframes once ─────────────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes orb-float-a {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    33%       { transform: translate(24px, -18px) scale(1.04); }
    66%       { transform: translate(-16px, 12px) scale(0.97); }
  }
  @keyframes orb-float-b {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    40%       { transform: translate(-20px, 18px) scale(1.06); }
    75%       { transform: translate(12px, -24px) scale(0.96); }
  }
  @keyframes orb-float-c {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    50%       { transform: translate(16px, 20px) scale(1.03); }
  }
  @keyframes orb-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.55; }
  }
`;

function useKeyframeInjection() {
  useEffect(() => {
    const id = "orb-keyframes";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = KEYFRAMES;
      document.head.appendChild(style);
    }
  }, []);
}

// ─── Shared animation helpers ──────────────────────────────────────────────────
const floatA = (delay = "0s", duration = "18s") => ({
  animation: `orb-float-a ${duration} ease-in-out ${delay} infinite`,
});
const floatB = (delay = "0s", duration = "22s") => ({
  animation: `orb-float-b ${duration} ease-in-out ${delay} infinite`,
});
const floatC = (delay = "0s", duration = "26s") => ({
  animation: `orb-float-c ${duration} ease-in-out ${delay} infinite`,
});
const pulse = (delay = "0s") => ({
  animation: `orb-pulse 8s ease-in-out ${delay} infinite`,
});

// ─── GridSubtle ────────────────────────────────────────────────────────────────
// Two layered grids (coarse + fine) for depth.
// `size` controls the coarse grid cell size in px.
export const GridSubtle = ({ size = 48 }) => (
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      backgroundImage: [
        `linear-gradient(var(--grid-coarse) 1px, transparent 1px)`,
        `linear-gradient(90deg, var(--grid-coarse) 1px, transparent 1px)`,
        `linear-gradient(var(--grid-fine) 1px, transparent 1px)`,
        `linear-gradient(90deg, var(--grid-fine) 1px, transparent 1px)`,
      ].join(", "),
      backgroundSize: [
        `${size}px ${size}px`,
        `${size}px ${size}px`,
        `${size / 4}px ${size / 4}px`,
        `${size / 4}px ${size / 4}px`,
      ].join(", "),
      WebkitMaskImage:
        "radial-gradient(ellipse 100% 90% at 50% 50%, black 20%, rgba(0,0,0,0.4) 60%, transparent 85%)",
      maskImage:
        "radial-gradient(ellipse 100% 90% at 50% 50%, black 20%, rgba(0,0,0,0.4) 60%, transparent 85%)",
    }}
  />
);

// ─── OrbsHero ─────────────────────────────────────────────────────────────────
export const OrbsHero = () => {
  useKeyframeInjection();
  return (
    <>
      {/* Large red bloom — top-left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.035) 50%, transparent 70%)",
          filter: "blur(60px)",
          ...floatA("0s", "20s"),
        }}
      />
      {/* Warm orange — centre */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 65%)",
          filter: "blur(80px)",
          ...floatB("3s", "26s"),
        }}
      />
      {/* Bottom-right accent */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 w-[450px] h-[450px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
          ...floatC("6s"),
        }}
      />
    </>
  );
};

// ─── OrbsAbout ────────────────────────────────────────────────────────────────
export const OrbsAbout = () => {
  useKeyframeInjection();
  return (
    <>
      <div
        className="pointer-events-none absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.028) 55%, transparent 70%)",
          filter: "blur(70px)",
          transform: "translateY(-50%)",
          ...floatA("1s", "22s"),
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, rgba(255,255,255,0.065) 0%, transparent 65%)",
          filter: "blur(90px)",
          ...floatB("4s"),
        }}
      />
      {/* Subtle mid accent */}
      <div
        className="pointer-events-none absolute bottom-10 right-1/3 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 60%)",
          filter: "blur(60px)",
          ...pulse("2s"),
        }}
      />
    </>
  );
};

// ─── OrbsProjects ─────────────────────────────────────────────────────────────
export const OrbsProjects = () => {
  useKeyframeInjection();
  return (
    <>
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 65% 30%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)",
          filter: "blur(70px)",
          ...floatB("0s", "24s"),
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 65%, rgba(255,255,255,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
          ...floatA("5s"),
        }}
      />
      {/* Centre haze */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 60%)",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
          ...pulse("3s"),
        }}
      />
    </>
  );
};

// ─── OrbsAchievements ─────────────────────────────────────────────────────────
export const OrbsAchievements = () => {
  useKeyframeInjection();
  return (
    <>
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 w-[700px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translateX(-50%)",
          ...floatC("0s", "28s"),
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.065) 0%, transparent 65%)",
          filter: "blur(90px)",
          ...floatA("7s"),
        }}
      />
      <div
        className="pointer-events-none absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)",
          filter: "blur(70px)",
          ...floatB("2s", "20s"),
        }}
      />
    </>
  );
};

// ─── OrbsResume ───────────────────────────────────────────────────────────────
export const OrbsResume = () => {
  useKeyframeInjection();
  return (
    <>
      {/* Centre bloom */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[800px] h-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.028) 50%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
          ...floatA("0s", "30s"),
        }}
      />
      {/* Edge accents */}
      <div
        className="pointer-events-none absolute top-0 -left-10 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
          filter: "blur(70px)",
          ...pulse("4s"),
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-10 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.045) 0%, transparent 65%)",
          filter: "blur(70px)",
          ...pulse("1s"),
        }}
      />
    </>
  );
};

// ─── OrbsContact ──────────────────────────────────────────────────────────────
export const OrbsContact = () => {
  useKeyframeInjection();
  return (
    <>
      <div
        className="pointer-events-none absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.028) 55%, transparent 70%)",
          filter: "blur(70px)",
          transform: "translateY(-50%)",
          ...floatB("0s", "22s"),
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.065) 0%, transparent 65%)",
          filter: "blur(90px)",
          ...floatA("4s", "26s"),
        }}
      />
      <div
        className="pointer-events-none absolute top-10 right-1/3 w-[250px] h-[250px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 60%)",
          filter: "blur(60px)",
          ...pulse("6s"),
        }}
      />
    </>
  );
};
