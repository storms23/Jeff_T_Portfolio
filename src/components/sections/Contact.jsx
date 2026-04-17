import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GridSubtle, OrbsContact } from "../ui/Backgrounds";
import Modal from "../ui/Modal";
import CopyEmailButton from "../ui/CopyEmailButton";
import {
  SECTION_HEADING,
  GRADIENT_TEXT,
  BTN_SUBMIT,
} from "../../lib/constants";
import { fadeUp } from "../../lib/animations";
import { SOCIAL_LINKS } from "../../data/socials";

// ─── Contact ─────────────────────────────────────────────────────────────────
const CONTACT_INFO = {
  name: "Jefferson Tuparan",
  email: "jeffersontuparan@gmail.com",
  github: "https://github.com/storms23",
  location: "Valenzuela City",
  phone: "09760529311",
};

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [sending, setSending] = useState(false);
  const welcomeOpenTimeoutRef = useRef(null);
  const welcomeAutoCloseTimeoutRef = useRef(null);
  const hasScheduledWelcomeRef = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (hasShownWelcome) return;
    const section = document.getElementById("contact");
    if (!section) return;

    hasScheduledWelcomeRef.current = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasScheduledWelcomeRef.current) return;
          hasScheduledWelcomeRef.current = true;
          observer.disconnect();
          welcomeOpenTimeoutRef.current = window.setTimeout(() => {
            setShowWelcomeModal(true);
            setHasShownWelcome(true);
            welcomeAutoCloseTimeoutRef.current = window.setTimeout(
              () => setShowWelcomeModal(false),
              10000,
            );
          }, 1500);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      if (welcomeOpenTimeoutRef.current) {
        clearTimeout(welcomeOpenTimeoutRef.current);
        welcomeOpenTimeoutRef.current = null;
      }
      if (welcomeAutoCloseTimeoutRef.current) {
        clearTimeout(welcomeAutoCloseTimeoutRef.current);
        welcomeAutoCloseTimeoutRef.current = null;
      }
    };
  }, [hasShownWelcome]);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    if (welcomeAutoCloseTimeoutRef.current) {
      clearTimeout(welcomeAutoCloseTimeoutRef.current);
      welcomeAutoCloseTimeoutRef.current = null;
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_urnytf3",
        "template_txynxj4",
        {
          ...formData,
          to_name: CONTACT_INFO.name,
          to_email: CONTACT_INFO.email,
          reply_to: formData.email,
        },
        "fwogvtryMu6G95Tlm",
      );
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccessModal(false), 10000);
    } catch {
      alert(
        `Failed to send message. Please try again or email me directly at ${CONTACT_INFO.email}`,
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 sm:px-5 py-3 sm:py-3 md:px-5 md:py-3.5 bg-white/80 dark:bg-gray-900/50 border border-black/10 dark:border-white/10 rounded-xl focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition-colors duration-150 text-zinc-900 dark:text-white hover:border-black/20 dark:hover:border-white/20 placeholder-zinc-400 dark:placeholder-gray-500 text-xs md:text-sm font-display";

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-zinc-50 dark:bg-gray-950 relative overflow-x-clip"
    >
      <GridSubtle />
      <OrbsContact />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-zinc-50 dark:from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 z-10 bg-gradient-to-t from-zinc-50 dark:from-gray-950 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.h2
          {...fadeUp(0)}
          className={`${SECTION_HEADING} mb-5 md:mb-8 leading-tight`}
        >
          <span className={GRADIENT_TEXT}>Get In Touch</span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.05)}
          className="font-display text-xs sm:text-sm md:text-base text-center text-zinc-600 dark:text-gray-400 mb-10 md:mb-14"
        >
          Looking for an internship candidate or want to collaborate? I'd love
          to hear from you!
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
          <motion.div {...fadeUp(0.1)} className="space-y-5 w-full min-w-0">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-zinc-900/60 to-zinc-500/40 dark:from-white/60 dark:to-zinc-400/40" />
                <h3 className="font-display text-lg md:text-xl font-bold text-zinc-900 dark:text-white">
                  Contact Information
                </h3>
              </div>
              <motion.div
                {...fadeUp(0.15)}
                className="rounded-2xl bg-black/35 border border-white/10 overflow-hidden shadow-xl"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-gray-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <p className="font-mono text-[10px] text-gray-500 tracking-wide">
                    contact.terminal
                  </p>
                  <div className="w-10" />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="font-mono text-[11px] sm:text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-200">$</span>
                      <span>whoami</span>
                    </div>
                    <div className="ml-5 mt-1 text-zinc-200">
                      {CONTACT_INFO.name}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-zinc-200">$</span>
                      <span>cat contact.txt</span>
                    </div>

                    <div className="mt-2 ml-5 space-y-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-500">email:</span>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-zinc-200 hover:text-white transition-colors duration-150 truncate"
                        >
                          {CONTACT_INFO.email}
                        </a>
                        <CopyEmailButton email={CONTACT_INFO.email} />
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-500">github:</span>
                        <a
                          href={CONTACT_INFO.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-200 hover:text-white transition-colors duration-150 truncate"
                        >
                          {CONTACT_INFO.github.replace("https://", "")}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-500">location:</span>
                        <span className="text-zinc-200 truncate">
                          {CONTACT_INFO.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-500">phone:</span>
                        <a
                          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                          className="text-zinc-200 hover:text-white transition-colors duration-150 truncate"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-zinc-900/60 to-zinc-500/40 dark:from-white/60 dark:to-zinc-400/40" />
                <h3 className="font-display text-lg md:text-xl font-bold text-zinc-900 dark:text-white">
                  Follow Me
                </h3>
              </div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ Icon, url, label, hoverBg }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2.5 bg-white/80 dark:bg-gray-900/50 border border-black/10 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 ${hoverBg} rounded-xl transition-colors duration-150`}
                  >
                    <Icon className="w-4 h-4 text-zinc-900 dark:text-white" />
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-gray-300 text-[10px] px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-xl pointer-events-none font-body">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="w-full min-w-0">
            <div className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 border border-black/10 dark:border-white/10 shadow-xl w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    name: "name",
                    type: "text",
                    label: "Name",
                    placeholder: "Your Name",
                  },
                  {
                    name: "email",
                    type: "email",
                    label: "Email",
                    placeholder: "Your Email",
                  },
                ].map(({ name, type, label, placeholder }) => (
                  <div key={name}>
                    <label className="font-display text-[10px] text-zinc-600 dark:text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                      {label} <span className="text-zinc-400 dark:text-white/50">*</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-display text-[10px] text-zinc-600 dark:text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    Message <span className="text-zinc-400 dark:text-white/50">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="5"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={BTN_SUBMIT}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-500 dark:text-gray-600 text-[10px] font-display mt-3">
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Your information is secure and will not be shared with third
              parties.
            </div>
          </motion.div>
        </div>
      </div>
      <Modal
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcomeModal}
        icon={Mail}
        title="Let's Connect! 💬"
        message="Feel free to send me a message! I'd love to hear from you and discuss your ideas or projects."
        buttonText="Got it!"
      />
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        icon={() => (
          <motion.svg
            className="w-8 h-8 md:w-10 md:h-10 text-zinc-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        )}
        title="Message Sent! 🎉"
        message="Thank you for reaching out! I'll get back to you as soon as possible."
        buttonText="Awesome!"
      />
    </section>
  );
};

export default Contact;
