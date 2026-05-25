import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpencv,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";
import type { IconType } from "react-icons";

type StackItem = {
  name: string;
  icon: IconType;
  color: string;
  overview: string;
  workedOn: string[];
  focus: string;
};

const stackItems: StackItem[] = [
  {
    name: "Python",
    icon: SiPython,
    color: "text-[#ffd43b]",
    overview:
      "Used for machine learning experiments, AI-based projects, automation workflows, and backend logic development.",
    workedOn: [
      "AI-based plant disease and image captioning projects",
      "Data processing and model experimentation",
      "Automation and scripting workflows",
    ],
    focus: "Machine Learning • AI Development • Automation",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-[#f89820]",
    overview: "Used for core programming concepts, application logic, and structured development workflows.",
    workedOn: [
      "Object-oriented programming implementations",
      "Academic and practical desktop-based workflows",
      "Logic-building and problem-solving applications",
    ],
    focus: "OOP • Application Logic • Problem Solving",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#f7df1e]",
    overview: "Used for creating interactive frontend experiences and responsive web functionality.",
    workedOn: ["Dynamic UI interactions", "Portfolio animations and transitions", "Frontend application workflows"],
    focus: "Frontend Interaction • UI Logic • Web Development",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178c6]",
    overview: "Used for building scalable frontend applications with structured and maintainable architecture.",
    workedOn: [
      "React + TypeScript portfolio development",
      "Typed reusable component systems",
      "Cleaner development workflows",
    ],
    focus: "Scalable Frontend • Type Safety • Modern Architecture",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61dafb]",
    overview: "Used for developing responsive and component-based modern web applications.",
    workedOn: ["Portfolio interfaces", "Reusable UI systems", "Interactive responsive layouts"],
    focus: "Component Architecture • Responsive UI • Frontend Systems",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#68a063]",
    overview: "Used for backend integration, API workflows, and full stack application development.",
    workedOn: ["MERN stack projects", "API handling and routing systems", "Backend application structure"],
    focus: "Backend Systems • APIs • Full Stack Development",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-pearl",
    overview: "Used for creating backend services and managing server-side application workflows.",
    workedOn: ["REST API structures", "Backend routing systems", "Server-side integrations"],
    focus: "API Development • Backend Routing • Server Architecture",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47a248]",
    overview: "Used for storing and managing application data in full stack projects.",
    workedOn: ["MERN stack database integration", "Project data handling", "NoSQL document workflows"],
    focus: "NoSQL • Database Design • Backend Integration",
  },
  {
    name: "SQL",
    icon: TbDatabase,
    color: "text-[#4ea1ff]",
    overview:
      "Used for structured database management, querying, and relational data handling in both academic and real-world project environments.",
    workedOn: [
      "Real-time database handling during internship projects",
      "Turf Zone management system",
      "Billing and transaction management workflows",
      "Raliax project database operations",
      "Data organization, querying, and backend integration",
    ],
    focus: "Relational Databases • Query Optimization • Real-Time Data Management",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "text-[#ff6f00]",
    overview: "Used for experimenting with machine learning models and AI-based workflows.",
    workedOn: ["AI learning projects", "Deep learning experimentation", "Model training workflows"],
    focus: "Machine Learning • Deep Learning • AI Systems",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    color: "text-[#5cdd4b]",
    overview: "Used for computer vision experimentation and image-processing workflows.",
    workedOn: ["Image-based AI projects", "Visual data processing", "Computer vision experimentation"],
    focus: "Computer Vision • Image Processing • AI Applications",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "text-[#8b5cf6]",
    overview: "Used for developing desktop applications using the .NET framework and XAML-based UI architecture.",
    workedOn: [
      "Real-time desktop application workflows",
      "XAML interface development and framework integration",
      "Billing system architecture and management modules",
      "Raliax project application structure and backend connectivity",
      "Structured desktop system design with modern engineering practices",
    ],
    focus: "Desktop Applications • XAML UI Development • System Architecture • .NET Framework",
  },
];

export default function Stack() {
  const [selected, setSelected] = useState<StackItem>(stackItems[0]);
  const SelectedIcon = selected.icon;

  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.07),transparent_30rem),linear-gradient(180deg,#0a0a0a_0%,#101010_52%,#0a0a0a_100%)] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:repeating-radial-gradient(circle_at_20%_20%,#ffffff_0_1px,transparent_1px_4px)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">My Stack</span>
            <span className="h-px w-14 bg-gold/48" />
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-pearl sm:text-5xl">
            Technologies I Work With
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.04 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {stackItems.map((item) => {
            const Icon = item.icon;
            const isActive = selected.name === item.name;

            return (
              <motion.button
                key={item.name}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                type="button"
                onClick={() => setSelected(item)}
                className={`group flex h-20 items-center gap-4 rounded-lg border px-4 text-left transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${
                  isActive
                    ? "border-gold/45 bg-[radial-gradient(circle_at_20%_0%,rgba(212,162,76,0.105),transparent_18rem),rgba(234,234,234,0.028)] shadow-[inset_0_1px_18px_rgba(212,162,76,0.06),0_16px_42px_rgba(0,0,0,0.22)]"
                    : "border-white/[0.075] bg-white/[0.025] hover:border-gold/24"
                }`}
              >
                <Icon className={`${item.color} shrink-0 transition duration-300 group-hover:scale-105`} size={25} />
                <span className="text-sm font-semibold text-pearl/78">{item.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-8 rounded-xl border border-gold/20 bg-[radial-gradient(circle_at_12%_0%,rgba(212,162,76,0.075),transparent_26rem),linear-gradient(145deg,rgba(234,234,234,0.03),rgba(255,255,255,0.012))] p-6 shadow-[inset_0_1px_0_rgba(234,234,234,0.04),0_22px_70px_rgba(0,0,0,0.2)] sm:p-8">
              <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-xl border border-gold/24 bg-[radial-gradient(circle_at_35%_20%,rgba(212,162,76,0.11),rgba(234,234,234,0.025))] shadow-[inset_0_0_18px_rgba(212,162,76,0.055)]">
                      <SelectedIcon className={selected.color} size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-gold/58">Selected</span>
                      <h3 className="mt-2 font-heading text-3xl font-semibold text-pearl">
                        {selected.name}
                        <span className="ml-3 align-middle text-lg text-gold/48">/</span>
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-pearl/64">{selected.overview}</p>

                  <div className="mt-8 rounded-xl border border-gold/[0.105] bg-[rgba(234,234,234,0.022)] px-6 py-5 sm:py-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.26em] text-gold/58">Tech Focus</span>
                    <p className="mt-4 text-sm leading-8 text-pearl/66">{selected.focus}</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-gold/58">Worked on</span>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.05, delayChildren: 0.08 }}
                    className="mt-5 grid gap-3"
                  >
                    {selected.workedOn.map((item) => (
                      <motion.div
                        key={item}
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="rounded-lg border border-gold/[0.085] bg-white/[0.018] px-5 py-4 text-sm leading-7 text-pearl/64 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition duration-300 hover:border-gold/20 hover:bg-gold/[0.022]"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>

                  <a
                    href="https://github.com/Sabarisekaran"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold/72 transition duration-300 hover:text-pearl"
                  >
                    Refer GitHub for more
                    <FiArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
