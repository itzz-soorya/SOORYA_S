import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = ["About", "Stack", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-ink/70 backdrop-blur-xl"
    >
      <nav className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-10">
        <div aria-hidden />

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.2)] md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-pearl/58 transition duration-300 hover:bg-white/[0.05] hover:text-pearl"
            >
              {link === "About" && (
                <span className="absolute inset-x-4 -bottom-1 h-px bg-gold/80" />
              )}
              {link}
            </a>
          ))}
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2 sm:gap-3">
          <a
            href="https://github.com/itzz-soorya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-pearl/70 transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/[0.06] hover:text-gold"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=soorya2705@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Soorya!%2C"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="grid size-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-pearl/70 transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/[0.06] hover:text-gold"
          >
            <HiOutlineMail size={19} />
          </a>
          <a
            href="/resume.pdf"
            className="hidden rounded-full border border-gold/40 bg-gold/[0.05] px-4 py-2 text-sm font-semibold text-gold transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
