import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const pseudoRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const Modal = ({
  isOpen,
  onClose,
  icon: Icon,
  title,
  message,
  buttonText,
  particles = 6,
}) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-sm sm:max-w-md w-full bg-white dark:bg-gray-950 rounded-2xl p-6 md:p-8 shadow-2xl border border-black/10 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-zinc-400/10 dark:from-white/10 dark:to-zinc-400/10 rounded-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150 z-10"
          >
            <X size={22} />
          </button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto w-16 h-16 md:w-20 md:h-20 mb-5 md:mb-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(255,255,255,0.14)]"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-900 dark:text-white" />
            </motion.div>
          </motion.div>
          <div className="relative text-center">
            <h3 className="font-display text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-3">
              {title}
            </h3>
            <p className="font-display text-sm md:text-base text-zinc-600 dark:text-gray-400 mb-6">
              {message}
            </p>
            <button
              onClick={onClose}
              className="btn-shine font-display px-6 py-3 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black rounded-lg font-semibold border border-black/10 dark:border-white/20 transition duration-150 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_10px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:brightness-105 active:scale-95 text-sm tracking-wide overflow-hidden"
            >
              {buttonText}
            </button>
          </div>
          {[...Array(particles)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 rounded-full pointer-events-none"
              style={{ top: "40%", left: "50%" }}
              animate={{
                x: [0, (pseudoRandom(i + 1) - 0.5) * 180],
                y: [0, (pseudoRandom((i + 1) * 2.17) - 0.5) * 180],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.4 + i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
