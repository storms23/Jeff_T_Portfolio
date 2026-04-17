export const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-black/15 to-transparent dark:via-white/20" />
);

export const CodeTag = ({ children }) => (
  <span className="font-mono text-sm text-zinc-700 dark:text-zinc-200 bg-black/5 dark:bg-white/5 px-1 py-px rounded border border-black/15 dark:border-white/20">
    {children}
  </span>
);
