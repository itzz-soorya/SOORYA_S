import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiBriefcase, FiCheck, FiChevronDown, FiClock, FiLock, FiStar } from "react-icons/fi";
import { projectLinks } from "../data/projectLinks";

type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string;
  href?: string;
  badge?: string;
  privateRepo?: boolean;
};

type InternshipProject = {
  title: string;
  description: string;
  tech: string;
  badges: string[];
  points: string[];
};

const projects: Project[] = [
  {
    title: "AI Leaf Disease Image Captioning",
    category: "Artificial Intelligence / Machine Learning",
    description:
      "AI-powered plant disease detection and image captioning system focused on solving real-world agricultural problems using computer vision and intelligent caption generation workflows.",
    highlights: [
      "Disease detection workflow",
      "Image caption generation",
      "AI + NLP integration",
      "Agricultural dataset preparation",
      "Real-world AI application",
    ],
    techStack: "Python • TensorFlow • OpenCV • NLP",
    href: projectLinks.aiLeafDisease,
  },
  {
    title: "Planora",
    category: "Full Stack MERN Platform",
    description:
      "Large-scale MERN application focused on workflow management, automated form generation, inbuilt record handling, and scalable application architecture.",
    highlights: [
      "Dynamic form generation",
      "Record management system",
      "Full MERN workflow",
      "Scalable backend architecture",
      "Dashboard-oriented system design",
    ],
    techStack: "React • Node.js • Express • MongoDB",
    href: projectLinks.planora,
  },
  {
    title: "Billing System",
    category: "Real-Time Application Workflow",
    description:
      "Real-time billing and management system developed with practical workflow handling, database operations, and structured desktop application architecture.",
    highlights: [
      "Billing workflows",
      "Database integration",
      "Real-time management system",
      "Structured application logic",
      "Enterprise-oriented workflow",
    ],
    techStack: ".NET • SQL • XAML",
    href: projectLinks.billingSystem,
  },
  {
    title: "Raliax AC Waiting Hall System",
    category: "Internship / Real-Time System Architecture",
    description:
      "Worked as a Team Lead on a real-time AC waiting hall management system featuring scanning workflows, automatic report generation, and operational management architecture.",
    highlights: [
      "QR / scanning workflow",
      "Automatic report generation",
      "Real-time operational workflow",
      "Team leadership experience",
      "System architecture handling",
    ],
    techStack: ".NET • SQL • XAML",
    badge: "Internship Project",
    privateRepo: true,
  },
];

const internshipProjects: InternshipProject[] = [
  {
    title: "Billing System",
    description: "Desktop-based billing workflow system with structured operational architecture.",
    tech: ".NET • SQL • XAML",
    badges: ["Desktop System", "Private Repository"],
    points: [
      "Real-time billing workflow implementation",
      "Database-driven operational handling",
      "Desktop application architecture using .NET and SQL",
    ],
  },
  {
    title: "Raliax AC Waiting Hall System",
    description:
      "AC Waiting Hall workflow platform with scanning systems, automated reports, and operational management architecture.",
    tech: ".NET • SQL • XAML",
    badges: ["Team Lead", "Internship Project", "Private Repository"],
    points: [
      "Workflow-based scanning system handling",
      "Automatic report generation architecture",
      "Coordinated development and operational workflow structure",
    ],
  },
  {
    title: "Internal Workflow Tools",
    description: "Internal workflow utilities supporting structured operational processes.",
    tech: ".NET • SQL • Workflow Systems",
    badges: ["Internal Tools", "Operations"],
    points: ["Workflow optimization tools", "Structured data operations", "Engineering process handling"],
  },
  {
    title: "Report Generation Systems",
    description: "Report-focused utilities for operational tracking and structured output workflows.",
    tech: ".NET • SQL • Reports",
    badges: ["Automation", "Reports"],
    points: ["Automated report output flows", "Database-backed reporting logic", "Operational data formatting"],
  },
  {
    title: "Database Operation Workflows",
    description: "Structured database workflows supporting real-time application operations.",
    tech: "SQL • Database Systems",
    badges: ["Database", "Architecture"],
    points: ["Relational data handling", "Operational query workflows", "Backend integration support"],
  },
];

const techGroups = [
  { label: "Frontend", items: ["XAML"] },
  { label: "Backend", items: [".NET"] },
  { label: "Database", items: ["SQL", "Database Systems"] },
  { label: "Desktop Systems", items: ["Desktop Application Architecture"] },
  { label: "Architecture", items: ["Workflow Architecture", "Report Systems"] },
];

function ProjectAction({ project }: { project: Project }) {
  if (project.privateRepo) {
    return (
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.075] bg-white/[0.025] px-4 py-2 text-sm font-semibold text-pearl/48">
        <FiLock size={14} />
        Private Repository
      </span>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/28 bg-gold/[0.055] px-4 py-2 text-sm font-semibold text-gold/76 transition duration-300 hover:-translate-y-0.5 hover:border-gold/44 hover:bg-gold/[0.1] hover:text-pearl"
    >
      View Project
      <FiArrowUpRight size={14} />
    </a>
  );
}

type ProjectsProps = {
  onResumeClick: () => void;
};

export default function Projects({ onResumeClick }: ProjectsProps) {
  const [spotlight, ...supportingProjects] = projects;
  const [activeInternship, setActiveInternship] = useState(internshipProjects[1].title);
  const [showAllInternship, setShowAllInternship] = useState(false);
  const [showInternshipExperience, setShowInternshipExperience] = useState(false);
  const visibleInternships = internshipProjects.slice(0, 2);
  const extraInternships = internshipProjects.slice(2);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_22%_8%,rgba(212,162,76,0.075),transparent_30rem),linear-gradient(180deg,#0a0a0a_0%,#101010_48%,#0a0a0a_100%)] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:repeating-radial-gradient(circle_at_35%_18%,#ffffff_0_1px,transparent_1px_4px)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">Featured Projects</span>
            <span className="h-px w-14 bg-gold/48" />
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-pearl sm:text-5xl">
            Engineering work with real-world direction.
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 rounded-xl border border-gold/20 bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.09),transparent_28rem),linear-gradient(145deg,rgba(234,234,234,0.032),rgba(255,255,255,0.012))] p-6 shadow-[inset_0_1px_0_rgba(234,234,234,0.04),0_22px_70px_rgba(0,0,0,0.18)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.055] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">
                  <FiStar size={13} />
                  Main Spotlight
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pearl/42">
                  {spotlight.category}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
                {spotlight.title}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-pearl/62">{spotlight.description}</p>
              <div className="mt-6 text-sm font-semibold text-gold/68">{spotlight.techStack}</div>
              <div className="mt-7">
                <ProjectAction project={spotlight} />
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.065] bg-white/[0.018] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/58">Highlights</span>
              <div className="mt-5 grid gap-3">
                {spotlight.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-lg border border-gold/[0.085] bg-white/[0.018] px-4 py-3 text-sm leading-7 text-pearl/62"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="group flex min-h-[31rem] flex-col rounded-xl border border-white/[0.075] bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.06),transparent_22rem),rgba(255,255,255,0.022)] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/22 hover:bg-white/[0.035]"
            >
              <div className="flex flex-wrap items-center gap-2">
                {project.badge ? (
                  <span className="rounded-full border border-gold/20 bg-gold/[0.055] px-3 py-1 text-xs font-semibold text-gold/70">
                    {project.badge}
                  </span>
                ) : null}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/58">{project.category}</span>
              </div>

              <h3 className="mt-6 font-heading text-2xl font-semibold text-pearl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-pearl/58">{project.description}</p>

              <div className="mt-5 grid gap-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="text-sm leading-6 text-pearl/50">
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <div className="mb-5 text-sm font-semibold text-gold/64">{project.techStack}</div>
                <ProjectAction project={project} />
              </div>
            </motion.article>
          ))}
        </div>

        {!showInternshipExperience ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => setShowInternshipExperience(true)}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/30 bg-[radial-gradient(circle_at_50%_0%,rgba(212,162,76,0.09),rgba(255,255,255,0.018))] px-5 py-3 text-sm font-semibold text-pearl/78 shadow-[0_14px_38px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/44 hover:bg-gold/[0.075] hover:text-gold sm:w-auto"
            >
              View Internship Experience
              <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
            </button>
            <button
              type="button"
              onClick={onResumeClick}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/24 bg-white/[0.018] px-5 py-3 text-sm font-semibold text-pearl/74 shadow-[0_14px_38px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/[0.055] hover:text-gold sm:w-auto"
            >
              Resume
              <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
            </button>
          </motion.div>
        ) : null}

        <AnimatePresence initial={false}>
          {showInternshipExperience ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.52, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mt-20 border-t border-white/[0.07] pt-12"
              >
          <div className="grid gap-10 rounded-3xl border border-white/[0.055] bg-[radial-gradient(circle_at_12%_0%,rgba(212,162,76,0.055),transparent_28rem),rgba(255,255,255,0.012)] p-4 shadow-[inset_0_1px_0_rgba(234,234,234,0.03),0_22px_70px_rgba(0,0,0,0.16)] sm:p-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative">
              <div className="pointer-events-none absolute -left-6 top-20 hidden h-52 w-px bg-gradient-to-b from-transparent via-gold/28 to-transparent lg:block" />
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">
                  Internship Experience
                </span>
                <span className="h-px w-14 bg-gold/48" />
              </div>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
                Professional Workflow Exposure
              </h3>
              <p className="mt-5 text-base leading-8 text-pearl/58">
                Hands-on experience building real-world systems, workflow architectures, desktop applications, and
                operational engineering solutions.
              </p>

              <div className="mt-9 rounded-xl border border-gold/16 bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.07),transparent_18rem),rgba(255,255,255,0.018)] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl border border-gold/22 bg-gold/[0.055] text-gold/72">
                    <FiBriefcase size={18} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-gold/18 bg-gold/[0.045] px-3 py-1 text-xs font-semibold text-gold/68">
                      Role
                    </span>
                    <h4 className="mt-3 font-heading text-2xl font-semibold text-pearl">Software Development Intern</h4>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-pearl/50">
                  <FiClock className="text-gold/62" size={16} />
                  Internship timeline / real-time workflow exposure
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-gold/24 via-white/[0.04] to-transparent" />

                <p className="text-sm leading-7 text-pearl/56">
                  Worked on real-time workflow systems, operational architectures, and desktop engineering solutions.
                </p>
              </div>

              <div className="mt-7 grid gap-4">
                {techGroups.map((group) => (
                  <div key={group.label}>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/54">{group.label}</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gold/[0.105] bg-white/[0.018] px-3 py-1.5 text-sm text-pearl/58 transition duration-300 hover:border-gold/22 hover:bg-gold/[0.025]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.045] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-3">
              <div className="grid gap-3">
              {visibleInternships.map((project, index) => {
                const isActive = activeInternship === project.title;

                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
                    className={`rounded-xl border transition duration-300 ${
                      isActive
                        ? "border-gold/24 bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.07),transparent_18rem),rgba(255,255,255,0.026)]"
                        : "border-white/[0.07] bg-white/[0.018] hover:border-gold/18 hover:bg-white/[0.026]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveInternship(isActive ? "" : project.title)}
                      className="flex w-full items-start justify-between gap-5 p-5 text-left"
                    >
                      <div>
                        <h4 className="font-heading text-xl font-semibold text-pearl">{project.title}</h4>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-pearl/56">{project.description}</p>
                        <div className="mt-4 text-sm font-semibold text-gold/62">{project.tech}</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.badges.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full border border-gold/[0.105] bg-white/[0.018] px-3 py-1 text-xs font-semibold text-pearl/50"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      <FiChevronDown
                        className={`mt-1 shrink-0 text-gold/62 transition duration-300 ${isActive ? "rotate-180" : ""}`}
                        size={18}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/[0.06] px-5 pb-5 pt-4">
                            <div className="grid gap-3">
                              {project.points.map((point, pointIndex) => (
                                <motion.div
                                  key={point}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.28, ease: "easeOut", delay: pointIndex * 0.05 }}
                                  className="flex gap-3 text-sm leading-7 text-pearl/62"
                                >
                                  <FiCheck className="mt-1.5 shrink-0 text-gold/62" size={15} />
                                  <span>{point}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
              </div>

              <AnimatePresence initial={false}>
                {showAllInternship ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="relative my-5">
                      <div className="h-px bg-gradient-to-r from-transparent via-gold/34 to-transparent" />
                      <div className="absolute left-1/2 top-1/2 h-7 w-40 -translate-x-1/2 -translate-y-1/2 bg-gold/[0.035] blur-xl" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
                      className="mb-4 flex items-center justify-between gap-4 px-2"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/58">
                        Extended workflow experience
                      </span>
                      <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent sm:block" />
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ staggerChildren: 0.06, delayChildren: 0.05 }}
                      className="grid gap-3"
                    >
                      {extraInternships.map((project, index) => {
                        const isActive = activeInternship === project.title;

                        return (
                          <motion.article
                            key={project.title}
                            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.38, ease: "easeOut", delay: index * 0.02 }}
                            className={`rounded-xl border transition duration-300 ${
                              isActive
                                ? "border-gold/24 bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.07),transparent_18rem),rgba(255,255,255,0.026)]"
                                : "border-white/[0.07] bg-white/[0.018] hover:border-gold/18 hover:bg-white/[0.026]"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => setActiveInternship(isActive ? "" : project.title)}
                              className="flex w-full items-start justify-between gap-5 p-5 text-left"
                            >
                              <div>
                                <h4 className="font-heading text-xl font-semibold text-pearl">{project.title}</h4>
                                <p className="mt-2 max-w-3xl text-sm leading-7 text-pearl/56">{project.description}</p>
                                <div className="mt-4 text-sm font-semibold text-gold/62">{project.tech}</div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {project.badges.map((badge) => (
                                    <span
                                      key={badge}
                                      className="rounded-full border border-gold/[0.105] bg-white/[0.018] px-3 py-1 text-xs font-semibold text-pearl/50"
                                    >
                                      {badge}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <FiChevronDown
                                className={`mt-1 shrink-0 text-gold/62 transition duration-300 ${
                                  isActive ? "rotate-180" : ""
                                }`}
                                size={18}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isActive ? (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.32, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="border-t border-white/[0.06] px-5 pb-5 pt-4">
                                    <div className="grid gap-3">
                                      {project.points.map((point, pointIndex) => (
                                        <motion.div
                                          key={point}
                                          initial={{ opacity: 0, y: 8 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.28, ease: "easeOut", delay: pointIndex * 0.05 }}
                                          className="flex gap-3 text-sm leading-7 text-pearl/62"
                                        >
                                          <FiCheck className="mt-1.5 shrink-0 text-gold/62" size={15} />
                                          <span>{point}</span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </motion.article>
                        );
                      })}
                    </motion.div>
                    <div className="mt-6 flex justify-center border-t border-white/[0.055] pt-5">
                      <button
                        type="button"
                        onClick={() => setShowAllInternship(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/20 bg-white/[0.018] px-4 py-2.5 text-sm font-semibold text-gold/66 transition duration-300 hover:border-gold/34 hover:bg-gold/[0.045] hover:text-pearl"
                      >
                        Show Less
                        <FiArrowUpRight className="-rotate-45" size={14} />
                      </button>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* {!showAllInternship ? (
                <div className="relative mt-5 flex justify-center overflow-hidden rounded-2xl px-4 pb-1 pt-8">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-gold/[0.055] to-transparent" />
                  <div className="pointer-events-none absolute left-1/2 top-2 h-10 w-56 -translate-x-1/2 bg-gold/[0.045] blur-2xl" />
                  <button
                    type="button"
                    onClick={() => setShowAllInternship(true)}
                    className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/30 bg-[radial-gradient(circle_at_50%_0%,rgba(212,162,76,0.09),rgba(255,255,255,0.018))] px-5 py-3 text-sm font-semibold text-pearl/78 shadow-[0_14px_38px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/44 hover:bg-gold/[0.075] hover:text-gold sm:w-auto"
                  >
                    View Internship Projects
                    <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
                  </button>
                </div>
              ) : null} */}
            </div>
          </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowInternshipExperience(false);
                    setShowAllInternship(false);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/20 bg-white/[0.018] px-4 py-2.5 text-sm font-semibold text-gold/66 transition duration-300 hover:border-gold/34 hover:bg-gold/[0.045] hover:text-pearl"
                >
                  Show Less
                  <FiArrowUpRight className="-rotate-45" size={14} />
                </button>
              </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
