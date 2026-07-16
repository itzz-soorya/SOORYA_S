import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiAward, FiCloud, FiCode, FiCpu, FiMonitor } from "react-icons/fi";
// import aboutImage from "../assets/hero2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [ "Full Stack Development", "Creative Problem Solving","API Design","Java Development","Git & Version Control","Clean Code Practices"];

const stats = [
  { value: "2+", label: "Years of Learning", icon: FiCpu },
  { value: "10+", label: "Projects Built", icon: FiCode },
  { value: "5+", label: "Technologies", icon: FiAward },
];

const focusAreas = [
  {
    title: "Machine Learning",
    copy: "Building intelligent models and applying them to real-world problems.",
    icon: FiCpu,
  },
  {
    title: "Full Stack Development",
    copy: "Developing responsive and scalable modern web applications.",
    icon: FiCode,
  },
  {
    title: "Desktop Applications",
    copy: "Creating efficient desktop solutions using modern technologies.",
    icon: FiMonitor,
  },
  {
    title: "Cloud & DevOps",
    copy: "Exploring deployment workflows and scalable cloud solutions.",
    icon: FiCloud,
  },
];

export default function About() {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isExpanded]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_18%,rgba(212,162,76,0.1),transparent_30rem),linear-gradient(180deg,#0a0a0a_0%,#101010_44%,#0a0a0a_100%)] px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10 lg:pb-20 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.024] [background-image:repeating-radial-gradient(circle_at_72%_28%,#ffffff_0_1px,transparent_1px_4px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-carbon to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-gold/80 sm:text-base">About me</span>
            <span className="h-px w-14 bg-gold/55" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-7 max-w-[40rem] text-base leading-8 text-pearl/66 sm:text-lg sm:leading-9"
          >
            I'm Soorya S, a passionate software developer who enjoys building modern web applications with a 
            strong focus on backend development, clean architecture, and scalable systems.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 max-w-[40rem] text-base leading-8 text-pearl/66 sm:text-lg sm:leading-9"
          >
           I have hands-on experience developing real-world projects using ASP.NET Core, Node.js, PostgreSQL, and REST APIs, along with industry exposure through my internship at Zoho. I enjoy solving complex problems, learning new technologies, and creating software that is efficient, reliable, and impactful.
           </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-9 grid gap-3 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/[0.075] bg-white/[0.025] px-4 py-4 text-sm font-semibold leading-6 text-pearl/72 transition duration-300 hover:-translate-y-0.5 hover:border-gold/24 hover:bg-gold/[0.035]"
              >
                {item}
              </div>
            ))}
          </motion.div>

          
        </motion.div>

      </div>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 scroll-mt-10 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ staggerChildren: 0.08, delayChildren: 0.08 }}
              className="mx-auto mt-16 w-full max-w-7xl border-t border-white/[0.07] pt-10 lg:mt-20"
            >
              {/* About portrait image is intentionally hidden for later re-enable. */}
              <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/72">
                    Detailed profile
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
                    Building systems that feel useful, polished, and real.
                  </h3>
                </div>

                <div className="space-y-5 text-base leading-8 text-pearl/62">
                  <p>
                    I study Artificial Intelligence and Data Science at Nandha Engineering College, and I use that
                    foundation to explore how intelligent features, clean interfaces, and reliable backend systems can
                    work together in real products.
                  </p>
                  <p>
                    My work usually moves between experimentation and execution: trying ideas, learning from projects,
                    refining the interface, and turning rough concepts into something that feels clear and usable.
                  </p>
                  <p>
                    I am drawn to engineering that has both structure and taste. The goal is to keep improving as a
                    developer who can think through problems, communicate clearly, and build technology with practical
                    value.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <article
                      key={stat.label}
                      className="rounded-lg border border-white/[0.075] bg-white/[0.025] px-6 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/24 hover:bg-gold/[0.035]"
                    >
                      <Icon className="mx-auto text-gold" size={24} />
                      <div className="mt-4 font-heading text-3xl font-semibold text-pearl">{stat.value}</div>
                      <div className="mt-1 text-sm text-pearl/52">{stat.label}</div>
                    </article>
                  );
                })}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-16">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">What I do</span>
                  <span className="h-px w-14 bg-gold/48" />
                </div>
                <h3 className="font-heading text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
                  Turning Ideas Into <span className="text-gold">Impactful Solutions</span>
                </h3>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {focusAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <article
                      key={area.title}
                      className="group flex min-h-56 flex-col rounded-lg border border-white/[0.075] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/24 hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-md border border-gold/18 bg-gold/[0.06] text-gold/82 transition duration-300 group-hover:border-gold/34 group-hover:text-gold">
                          <Icon size={18} />
                        </div>
                        {area.title === "Cloud & DevOps" ? (
                          <span className="text-sm font-semibold text-[#f0ca73]">Exploring</span>
                        ) : null}
                      </div>
                      <h4 className="mt-6 font-heading text-xl font-semibold text-pearl">{area.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-pearl/54">{area.copy}</p>
                    </article>
                  );
                })}
              </motion.div>

              <motion.button
                variants={fadeUp}
                type="button"
                onClick={() => setIsExpanded(false)}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/[0.045] px-5 py-3 text-sm font-semibold text-gold transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
              >
                Show Less
                <FiArrowUpRight className="rotate-[-45deg]" size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
