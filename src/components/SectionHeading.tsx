import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionHeading({ index, eyebrow, title, subtitle, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
        <span className="text-muted">{index}</span>
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance mt-4 text-3xl font-semibold text-balance tracking-tight md:text-4xl" style={{ color: "var(--color-fg)" }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--color-fg2)" }}>
          {subtitle}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}