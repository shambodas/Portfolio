import { motion, useReducedMotion } from "framer-motion";

export default function AmbientBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden lg:block" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-[-45vh]"
        style={{
          width: "170vmax",
          height: "170vmax",
          x: "-50%",
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 55%)",
        }}
        animate={
          reduce
            ? {}
            : {
                x: ["-50%", "-44%", "-50%"],
                y: [0, 48, 0],
                opacity: [0.55, 1, 0.55],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}