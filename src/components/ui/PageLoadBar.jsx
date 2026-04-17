import { useState, useEffect } from "react";

const PageLoadBar = () => {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / 900, 1);
      setWidth(Math.round(100 * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;
  return (
    <div
      className="fixed top-0 left-0 z-[999] h-[2px] bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 transition-opacity duration-300"
      style={{ width: `${width}%`, opacity: width >= 100 ? 0 : 1 }}
    />
  );
};

export default PageLoadBar;
