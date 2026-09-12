import { motion, useReducedMotion } from "framer-motion";

type FlowVisualProps = {
  nodes: string[];
  size?: "sm" | "md";
  className?: string;
};

function Connector({ animate, delay }: { animate: boolean; delay: number }) {
  return (
    <div className="relative h-px min-w-6 flex-1 overflow-hidden" style={{ backgroundColor: "var(--color-line)" }}>
      {animate ? (
        <motion.span
          className="absolute inset-y-0 w-6 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }}
          initial={{ x: "-100%" }}
          animate={{ x: "400%" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay }}
        />
      ) : null}
    </div>
  );
}

function Node({ label, animate, index }: { label: string; animate: boolean; index: number }) {
  const reduce = useReducedMotion();
  const pulse = !reduce && animate;

  return (
    <div className="flex items-center gap-2.5">
      <motion.span
        className="relative inline-block size-2 rounded-full"
        style={{
          backgroundColor: "var(--color-accent)",
          boxShadow: "0 0 12px color-mix(in srgb, var(--color-accent) 55%, transparent)",
        }}
        animate={pulse ? { opacity: [0.65, 1, 0.65], scale: [1, 1.15, 1] } : undefined}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-[10px] leading-tight tracking-wider whitespace-nowrap uppercase"
        style={{ color: "var(--color-fg2)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function FlowVisual({ nodes, size = "sm", className }: FlowVisualProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={
        size === "md"
          ? `flex items-center justify-between gap-3 ${className ?? ""}`
          : `flex flex-wrap items-center gap-x-3 gap-y-2 ${className ?? ""}`
      }
      role="img"
      aria-label={nodes.join(" then ")}
    >
      {nodes.map((node, i) => (
        <div key={`${node}-${i}`} className="flex flex-1 items-center gap-3 last:flex-none md:flex-none">
          <Node label={node} animate={!reduce} index={i} />
          {i < nodes.length - 1 ? <Connector animate={!reduce} delay={i * 0.35} /> : null}
        </div>
      ))}
    </div>
  );
}