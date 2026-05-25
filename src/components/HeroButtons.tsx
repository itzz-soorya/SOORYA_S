import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="https://github.com/Sabarisekaran"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-pearl/10 bg-pearl px-6 text-sm font-semibold text-ink shadow-[0_18px_55px_rgba(234,234,234,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_60px_rgba(212,162,76,0.16)]"
      >
        <FaGithub size={17} />
        GitHub
        <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sabarisekaran26@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Sabari%2C"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/35 bg-gold/[0.06] px-6 text-sm font-semibold text-gold shadow-[0_18px_55px_rgba(212,162,76,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-gold/10 hover:shadow-[0_18px_60px_rgba(212,162,76,0.16)]"
      >
        <HiOutlineMail size={19} />
        Email
        <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
      </a>
    </div>
  );
}
