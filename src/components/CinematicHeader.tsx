import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiBriefcase, FiLayers, FiMail, FiUser } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about", scrollTarget: "#about", icon: FiUser },
  { label: "Stack", href: "#stack", scrollTarget: "#stack", icon: FiLayers },
  { label: "Projects", href: "#projects", scrollTarget: "#projects", icon: FiBriefcase },
  { label: "Contact", href: "#contact", scrollTarget: "#contact", icon: FiMail },
];

export default function CinematicHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = document.getElementById("about")?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      setIsVisible(aboutTop < window.innerHeight * 0.72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12;

      if (isAtPageEnd) {
        setActiveHref("#contact");
        return;
      }

      const activationLine = window.innerHeight * 0.42;
      let currentHref = "#about";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const { top } = section.getBoundingClientRect();

          if (top <= activationLine) {
            currentHref = item.href;
          }
        }
      });

      setActiveHref(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 18 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-4 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 lg:right-7"
          aria-label="Portfolio navigation"
        >
          <div className="hidden w-14 rounded-full border border-gold/18 bg-ink/72 p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl md:block">
            <nav className="flex flex-col items-center gap-2" aria-label="Sections">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.scrollTarget}
                    className="group relative grid size-11 place-items-center rounded-full text-pearl/46 transition duration-300 hover:-translate-x-0.5 hover:bg-gold/[0.06] hover:text-gold"
                  >
                    {activeHref === item.href ? (
                      <motion.span
                        layoutId="cinematic-dock-active"
                        className="absolute inset-0 rounded-full border border-gold/24 bg-gold/[0.07]"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    ) : null}
                    <span className="pointer-events-none absolute right-[calc(100%+0.65rem)] z-20 rounded-full border border-gold/18 bg-ink/86 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold opacity-0 shadow-[0_12px_34px_rgba(0,0,0,0.28)] backdrop-blur-lg transition duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                      {item.label}
                    </span>
                    <Icon
                      size={16}
                      className={`relative z-10 transition duration-300 ${
                        activeHref === item.href ? "text-gold" : "text-pearl/42 group-hover:text-gold"
                      }`}
                    />
                    <span
                      className={`absolute right-1.5 top-1/2 z-10 size-1 -translate-y-1/2 rounded-full transition duration-300 ${
                        activeHref === item.href
                          ? "bg-gold shadow-[0_0_16px_rgba(212,162,76,0.55)]"
                          : "bg-transparent group-hover:bg-gold/60"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mx-auto my-2 h-px w-7 bg-gradient-to-r from-transparent via-gold/24 to-transparent" />

            <div className="flex flex-col items-center gap-2">
              <a
                href="https://github.com/Sabarisekaran"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-full border border-white/[0.075] bg-white/[0.03] text-pearl/58 transition duration-300 hover:-translate-x-0.5 hover:border-gold/34 hover:bg-gold/[0.06] hover:text-gold"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabari-sekaran-mu-9238032a3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full border border-white/[0.075] bg-white/[0.03] text-pearl/58 transition duration-300 hover:-translate-x-0.5 hover:border-gold/34 hover:bg-gold/[0.06] hover:text-gold"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-gold/18 bg-ink/78 p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl md:hidden">
            <nav className="flex items-center gap-1" aria-label="Sections">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.scrollTarget}
                    aria-label={item.label}
                    className="relative grid size-9 place-items-center rounded-full text-pearl/54 transition duration-300 hover:text-gold"
                  >
                    {activeHref === item.href ? (
                      <motion.span
                        layoutId="cinematic-mobile-active"
                        className="absolute inset-0 rounded-full border border-gold/26 bg-gold/[0.08]"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    ) : null}
                    <Icon
                      size={15}
                      className={`relative z-10 transition duration-300 ${
                        activeHref === item.href ? "text-gold" : "text-pearl/48"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mx-1 h-6 w-px bg-gold/18" />

            <a
              href="https://github.com/Sabarisekaran"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-full text-pearl/58 transition duration-300 hover:bg-gold/[0.07] hover:text-gold"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabari-sekaran-mu-9238032a3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-full text-pearl/58 transition duration-300 hover:bg-gold/[0.07] hover:text-gold"
            >
              <FaLinkedinIn size={13} />
            </a>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
