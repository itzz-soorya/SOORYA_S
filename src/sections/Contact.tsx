import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sabarisekaran26@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Sabari%2C",
    icon: HiOutlineMail,
  },
  { label: "GitHub", href: "https://github.com/Sabarisekaran", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabari-sekaran-mu-9238032a3/", icon: FaLinkedinIn },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(212,162,76,0.1),transparent_28rem),#0a0a0a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-carbon/70 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto mb-14 flex max-w-4xl items-center justify-center gap-4"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/24 to-gold/18" />
        <a
          href="#contact-actions"
          className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/58 transition duration-300 hover:text-gold"
        >
          Continue to contact
        </a>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/24 to-gold/18" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/76">Contact</span>
        <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-pearl sm:text-5xl">
          Let&apos;s build something thoughtful.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-pearl/58">
          Open to meaningful project conversations, internships, and collaborative product ideas across AI and modern
          web development.
        </p>

        <div id="contact-actions" className="mt-10 flex scroll-mt-28 flex-col justify-center gap-3 sm:flex-row">
          {links.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/[0.075] bg-white/[0.03] px-6 text-sm font-semibold text-pearl/66 transition duration-300 hover:-translate-y-1 hover:border-gold/34 hover:bg-gold/[0.07] hover:text-gold"
              >
                <Icon size={17} />
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
