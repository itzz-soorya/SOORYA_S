import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiCpu, FiPenTool, FiTool, FiUser } from "react-icons/fi";

const skills = [
  { title: "Frontend", copy: "React, TypeScript, responsive UI, motion, and component systems.", icon: FiCode },
  { title: "Backend", copy: "Node.js, APIs, database thinking, and full stack application structure.", icon: FiTool },
  { title: "AI / ML", copy: "Python, TensorFlow, OpenCV, data workflows, and applied experimentation.", icon: FiCpu },
  { title: "Design", copy: "Visual hierarchy, usability, interaction flow, and polished product details.", icon: FiPenTool },
];

const technologies = ["Python", "React", "TypeScript", "Node.js", "MongoDB", "TensorFlow", "OpenCV", "SQL", "Tailwind", "Git"];

const resumeProjects = [
  "AI-assisted product experiments focused on practical user workflows.",
  "Full stack web interfaces with clean UI and structured implementation.",
  "Data and computer vision prototypes built through iteration and learning.",
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_10%,rgba(212,162,76,0.09),transparent_30rem),linear-gradient(180deg,#0a0a0a_0%,#101010_52%,#0a0a0a_100%)] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">Resume</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-pearl sm:text-5xl">
              Profile, skills, and direction.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-pearl/62 sm:text-lg sm:leading-9">
            I am an Artificial Intelligence and Data Science student at Nandha Engineering College, building toward a
            career where AI, full stack development, and product thinking work together. I focus on practical systems,
            clean interfaces, and learning through hands-on projects.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.075] bg-white/[0.025] p-6"
          >
            <div className="flex items-center gap-3 text-gold">
              <FiBookOpen size={18} />
              <h3 className="font-heading text-xl font-semibold text-pearl">Education</h3>
            </div>
            <div className="mt-6 border-l border-gold/24 pl-5">
              <p className="font-semibold text-pearl">Nandha Engineering College</p>
              <p className="mt-2 text-sm leading-7 text-pearl/56">Artificial Intelligence and Data Science</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.04 }}
            className="rounded-lg border border-white/[0.075] bg-white/[0.025] p-6"
          >
            <div className="flex items-center gap-3 text-gold">
              <FiUser size={18} />
              <h3 className="font-heading text-xl font-semibold text-pearl">Learning Journey</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-pearl/58">
              I keep a project-first learning rhythm: explore a concept, build a small version, refine the experience,
              and use the result to understand the next layer of engineering more clearly.
            </p>
          </motion.article>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
                className="rounded-lg border border-white/[0.075] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/24 hover:bg-white/[0.04]"
              >
                <div className="grid size-10 place-items-center rounded-md border border-gold/18 bg-gold/[0.06] text-gold/82">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-pearl">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-pearl/54">{skill.copy}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-8"
        >
          <span className="mr-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold/72">Technologies</span>
          {technologies.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.075] bg-white/[0.026] px-4 py-2 text-sm font-medium text-pearl/58"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.075] bg-white/[0.025] p-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-pearl">Projects & Interests</h3>
            <div className="mt-6 grid gap-3">
              {resumeProjects.map((project) => (
                <p key={project} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-7 text-pearl/58">
                  {project}
                </p>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.04 }}
            className="rounded-lg border border-gold/18 bg-[radial-gradient(circle_at_20%_0%,rgba(212,162,76,0.1),transparent_22rem),rgba(255,255,255,0.025)] p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/72">Career goals</span>
            <p className="mt-5 font-heading text-2xl font-semibold leading-snug text-pearl">
              Building practical systems with clarity, creativity, and purpose.
            </p>
            <p className="mt-5 text-sm leading-7 text-pearl/56">
              My goal is to keep growing into a developer who can connect AI, software engineering, and product
              thinking in ways that solve grounded problems.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
