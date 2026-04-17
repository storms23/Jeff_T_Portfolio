import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselNav = ({ count, current, onPrev, onNext, onDot }) => (
  <div className="mt-6 sm:mt-8">
    <div className="flex justify-center items-center gap-4 sm:gap-6">
      <motion.button
        onClick={onPrev}
        whileTap={{ scale: 0.92 }}
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150 backdrop-blur-sm"
      >
        <ChevronLeft size={18} />
      </motion.button>
      <div className="flex gap-2 items-center">
        {[...Array(count)].map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onDot(i)}
            animate={{ width: i === current ? 28 : 8, opacity: i === current ? 1 : 0.35 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`h-2 rounded-full ${
              i === current
                ? "bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400"
                : "bg-zinc-300 dark:bg-gray-600"
            }`}
            style={{ minWidth: i === current ? 28 : 8 }}
          />
        ))}
      </div>
      <motion.button
        onClick={onNext}
        whileTap={{ scale: 0.92 }}
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20 transition-colors duration-150 backdrop-blur-sm"
      >
        <ChevronRight size={18} />
      </motion.button>
    </div>
    <p className="font-mono text-center mt-3 text-xs text-zinc-500 dark:text-gray-600 tracking-widest uppercase">
      {current + 1} of {count}
    </p>
  </div>
);

export default CarouselNav;
