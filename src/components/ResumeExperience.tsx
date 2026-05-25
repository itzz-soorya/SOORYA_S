import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiExternalLink, FiFileText, FiX } from "react-icons/fi";

const resumePath = "/resume/resume.pdf";

const resumeHighlights = [
  {
    label: "Intro",
    text: "AI and Data Science student focused on thoughtful digital products, full stack systems, and practical AI workflows.",
  },
  {
    label: "Interests",
    text: "Artificial intelligence, modern web development, desktop applications, and real-world workflow automation.",
  },
  {
    label: "Technologies",
    text: "Python, React, TypeScript, Node.js, MongoDB, TensorFlow, OpenCV, SQL, .NET, and XAML.",
  },
  {
    label: "Project Direction",
    text: "Building clean, useful, and user-focused solutions with a balance of engineering structure and creative thinking.",
  },
];

type ResumeExperienceProps = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeExperience({ open, onClose }: ResumeExperienceProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-ink/82 px-4 py-6 backdrop-blur-xl sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Resume build preview"
        >
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,162,76,0.14),transparent_30rem),radial-gradient(circle_at_20%_80%,rgba(234,234,234,0.045),transparent_24rem)]" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="relative mx-auto min-h-[calc(100vh-3rem)] w-full max-w-5xl rounded-2xl border border-gold/18 bg-[radial-gradient(circle_at_18%_0%,rgba(212,162,76,0.09),transparent_28rem),linear-gradient(145deg,rgba(17,17,17,0.96),rgba(10,10,10,0.96))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.42)] sm:p-6"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume experience"
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-pearl/62 transition duration-300 hover:border-gold/30 hover:text-gold"
            >
              <FiX size={18} />
            </button>

            <div className="pr-12">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/72">Resume</span>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-pearl sm:text-5xl">
                Sabari Sekaran
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-pearl/56 sm:text-base">
                A concise profile overview before opening or downloading the full resume document.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {resumeHighlights.map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, ease: "easeOut", delay: index * 0.06 }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/62">{item.label}</span>
                  <p className="mt-4 text-sm leading-7 text-pearl/62">{item.text}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
              className="mt-6 rounded-xl border border-gold/18 bg-[radial-gradient(circle_at_20%_0%,rgba(212,162,76,0.075),transparent_20rem),rgba(255,255,255,0.02)] p-5"
            >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid size-12 place-items-center rounded-xl border border-gold/22 bg-gold/[0.055] text-gold">
                        <FiFileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-pearl">Resume</h3>
                        <p className="mt-1 text-sm text-pearl/52">Document path: {resumePath}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setPreviewOpen((current) => !current)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-gold/28 bg-gold/[0.055] px-5 text-sm font-semibold text-gold/78 transition duration-300 hover:-translate-y-0.5 hover:border-gold/42 hover:bg-gold/[0.09] hover:text-pearl"
                      >
                        Open Resume
                        <FiExternalLink size={15} />
                      </button>
                      <a
                        href={resumePath}
                        download="Sabari-Sekaran-Resume.pdf"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 text-sm font-semibold text-pearl/64 transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:text-gold"
                      >
                        Download Resume
                        <FiDownload size={15} />
                      </a>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {previewOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "min(68vh, 44rem)", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: "easeInOut" }}
                        className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-black/30"
                      >
                        <iframe title="Resume preview" src={resumePath} className="h-full w-full" />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
