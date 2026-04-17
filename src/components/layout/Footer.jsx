const Footer = () => (
  <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10 py-8 md:py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xs text-zinc-500">
          © {new Date().getFullYear()} Jefferson C. Tuparan. All rights reserved.
        </p>
        <p className="font-display text-xs text-zinc-500">
          Designed &amp; Built by Jefferson C. Tuparan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
