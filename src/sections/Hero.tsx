import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import heroImage from "../assets/hero1.png";
import HeroButtons from "../components/HeroButtons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [imageReady, setImageReady] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitParallaxY = useTransform(scrollY, [0, 560], [0, -28]);
  const auraParallaxY = useTransform(scrollY, [0, 560], [0, 18]);
  const portraitY = shouldReduceMotion ? 0 : portraitParallaxY;
  const auraY = shouldReduceMotion ? 0 : auraParallaxY;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-10 lg:pb-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_38%,rgba(212,162,76,0.15),transparent_31rem),radial-gradient(circle_at_91%_76%,rgba(212,162,76,0.07),transparent_24rem),radial-gradient(circle_at_12%_22%,rgba(234,234,234,0.045),transparent_24rem),linear-gradient(180deg,#0a0a0a_0%,#101010_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.66)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.028] [background-image:repeating-radial-gradient(circle_at_20%_30%,#ffffff_0_1px,transparent_1px_3px)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-carbon via-ink/62 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 py-4 md:py-0 lg:grid-cols-[0.86fr_1.14fr] lg:gap-0 xl:gap-3">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="max-w-3xl md:pt-4"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="font-heading text-[clamp(3.25rem,7.8vw,7rem)] font-semibold leading-[0.9] tracking-normal text-pearl"
          >
            <span className="block text-[0.44em] font-medium leading-none text-pearl/82">Hello, I'm</span>
            <span className="mt-3 block text-pearl">Sabari</span>
            <span className="block bg-gradient-to-r from-gold via-[#f0ca73] to-pearl bg-clip-text text-transparent">
              Sekaran
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 max-w-[34rem] text-xs font-semibold uppercase tracking-[0.22em] text-gold/85 sm:mt-6 sm:text-sm sm:tracking-[0.28em]"
          >
            Artificial Intelligence and Data Science Student
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-9 sm:mt-10 lg:mt-11"
          >
            <HeroButtons />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-11 hidden items-center gap-4 text-sm text-pearl/42 sm:flex lg:mt-14"
          >
            <span className="h-px w-16 bg-gold/70" />
            <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-gold/55 bg-ink/20 pt-1.5 shadow-[0_0_18px_rgba(212,162,76,0.12)]">
              <motion.span
                className="h-1.5 w-1 rounded-full bg-gold/80"
                animate={shouldReduceMotion ? undefined : { y: [0, 9, 0], opacity: [0.95, 0.2, 0.95] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            Scroll
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: auraY }}
          className="relative mx-auto hidden h-[32rem] min-h-[28rem] w-full max-w-[43rem] sm:h-[37rem] md:h-[min(76vh,47rem)] md:max-w-[47rem] lg:mr-0 lg:block xl:max-w-[49rem]"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute right-[8%] top-[15%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(212,162,76,0.13),transparent_60%)] blur-3xl" />
          </div>

          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.22 }}
            className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[min(86vw,34rem)] -translate-x-1/2 overflow-visible bg-transparent sm:left-[47%] sm:w-[min(78vw,36rem)] md:left-[32%] md:w-[min(49vw,37rem)] lg:left-[31%] xl:left-[32%] xl:w-[min(46vw,38rem)]"
          >
            <div className="absolute inset-x-16 top-14 h-56 rounded-full bg-gold/14 blur-3xl" />

            {imageReady ? (
              <div className="relative z-10 aspect-[4/5] w-full [mask-image:radial-gradient(ellipse_at_51%_39%,black_36%,rgba(0,0,0,0.92)_52%,rgba(0,0,0,0.5)_68%,transparent_88%)] [mask-mode:alpha]">
                <img
                  src={heroImage}
                  alt="Sabari Sekaran"
                  onError={() => setImageReady(false)}
                  className="h-full w-full object-cover object-center contrast-[1.02] saturate-[0.96] [mask-image:linear-gradient(to_bottom,black_0%,black_62%,rgba(0,0,0,0.86)_71%,rgba(0,0,0,0.42)_82%,transparent_96%)] [mask-mode:alpha]"
                />
              </div>
            ) : (
              <div className="relative z-10 flex aspect-[4/5] w-full items-center justify-center rounded-[2rem] bg-[radial-gradient(circle_at_50%_22%,rgba(212,162,76,0.18),transparent_28%),linear-gradient(145deg,#171717,#070707)]">
                <span className="max-w-52 text-center text-sm leading-6 text-pearl/46">
                  Add the portrait at src/assets/hero1.png
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
