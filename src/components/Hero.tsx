import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PHOTO_URL, RESUME_URL } from "../data/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden="true"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = e.currentTarget.getBoundingClientRect();
        el.style.background = `radial-gradient(560px circle at ${e.clientX - r.left}px ${
          e.clientY - r.top
        }px, color-mix(in srgb, var(--color-accent) 5%, transparent), transparent 60%)`;
      }}
    />
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  if (reduce) {
    container.visible = { transition: { staggerChildren: 0 } };
  }

  return (
    <section id="top" className="relative overflow-hidden" aria-label="Introduction">
      <MouseGlow />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-36 md:pb-20 lg:px-8">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p
              variants={item}
              className="font-mono text-xs tracking-[0.22em] text-accent uppercase"
            >
              B.Tech ECE &nbsp;•&nbsp; AI/ML &nbsp;•&nbsp; Backend &nbsp;•&nbsp; IoT
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl"
              style={{ color: "var(--color-fg)" }}
            >
              Building intelligent systems at the intersection of AI, software{" "}
              <span className="text-accent">&amp; electronics.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: "var(--color-fg2)" }}>
              I'm Shambo Das, an Electronics &amp; Communication Engineering student building
              practical systems using machine learning, backend technologies, IoT and
              engineering-focused applications.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={RESUME_URL}
                download="Shambo_Das_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-fg2 transition-all duration-300 hover:-translate-y-0.5 hover:text-fg active:translate-y-0 active:scale-[0.98]"
              >
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <div className="float-soft group relative mx-auto flex w-fit items-center justify-center p-4">
              <div
                className="pointer-events-none absolute inset-0 rounded-full transition-all duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent)",
                  filter: "blur(28px)",
                  opacity: 0.85,
                }}
                aria-hidden="true"
              />
              <img
                src={PHOTO_URL}
                alt="Portrait of Shambo Das"
                className="relative size-64 rounded-full border border-line object-cover shadow-[0_0_60px_-18px_rgba(77,163,255,0.4)] transition-all duration-500 group-hover:scale-[1.03] group-hover:border-accent/40 md:size-72 lg:size-80"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}