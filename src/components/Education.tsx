import { education } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24" aria-label="Education">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading index="05" eyebrow="Background" title="Education" />

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.school} delay={i * 0.08}>
              <div
                className="flex h-full flex-col rounded-xl border border-line p-5 transition-colors duration-300 hover:border-accent/25"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h3 className="text-base font-semibold tracking-tight" style={{ color: "var(--color-fg)" }}>
                  {entry.school}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--color-accent)" }}>
                  {entry.degree}
                </p>
                <p className="mt-auto pt-3 font-mono text-xs" style={{ color: "var(--color-muted)" }}>
                  {entry.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}