import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

const CopyEmailButton = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const el = document.createElement("textarea");
      el.value = email;
      el.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.88 }}
      title={copied ? "Copied!" : "Copy email"}
      className={`relative ml-auto flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-display font-medium transition-all duration-200 overflow-hidden ${
        copied
          ? "bg-black/10 border-black/15 text-zinc-900 dark:bg-white/10 dark:border-white/20 dark:text-white"
          : "bg-black/5 border-black/10 text-zinc-600 hover:bg-black/10 hover:border-black/15 hover:text-zinc-900 dark:bg-white/5 dark:border-white/10 dark:text-gray-500 dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span key="check" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.15 }} className="flex items-center gap-1">
            <Check size={12} /> Copied!
          </motion.span>
        ) : (
          <motion.span key="copy" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.15 }} className="flex items-center gap-1">
            <Copy size={12} /> Copy
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
