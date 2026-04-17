import ProtectedImage from "./ProtectedImage";

// ─── ProfileCard ─────────────────────────────────────────────────────────────
const ProfileCard = ({
  size,
  image = "",
  objectPosition = "object-center",
  initials = "JT",
}) => {
  const isSmall = size === "sm";
  const hasImage = Boolean(image);

  return (
    <div
      className={`relative ${
        isSmall ? "w-56 sm:w-64" : "w-72 md:w-80 lg:w-[340px]"
      }`}
    >
      {/* Outer gradient border */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/[0.03] to-white/[0.08] shadow-2xl shadow-black/80">
        <div className="relative rounded-2xl overflow-hidden bg-gray-950/90 backdrop-blur-2xl">
          {/* ── Titlebar ── */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/[0.06] backdrop-blur-sm">
            {/* Traffic lights */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-white/30" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            {/* Filename pill */}
            <div className="ml-2 px-3 py-1 rounded-md bg-black/30 border border-white/[0.08] flex items-center gap-1.5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
              <span className="font-mono text-white/50 text-[11px] truncate">
                jefferson_tuparan.tsx
              </span>
            </div>
          </div>

          {/* ── Image ── */}
          <div className="p-3">
            <div
              className={`group relative overflow-hidden rounded-xl ${
                isSmall ? "h-52 sm:h-60" : "h-64 md:h-72 lg:h-80"
              }`}
            >
              {hasImage ? (
                <ProtectedImage
                  src={image}
                  alt="Jefferson C. Tuparan"
                  className={`w-full h-full object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-zinc-400/5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-5xl md:text-6xl font-black text-white/80 tracking-tight">
                      {initials}
                    </p>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-2">
                      Profile
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom shadow fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />

              {/* ── Hover overlay badge ── */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30">
                <div className="mx-2 mb-2 flex items-center gap-2 md:gap-3 px-2.5 md:px-3 py-1.5 md:py-2.5 rounded-lg md:rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg">
                  {/* Code icon box */}
                  <div className="flex-shrink-0 w-6 h-6 md:w-9 md:h-9 rounded-md md:rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 md:w-4 md:h-4 text-zinc-200"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-white text-[10px] md:text-xs font-semibold tracking-wide leading-tight">
                      Internship Candidate
                    </p>
                    <p className="font-mono text-zinc-200 text-[8px] md:text-[10px] tracking-widest uppercase leading-tight mt-0.5">
                      QA • Web Dev • Security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
