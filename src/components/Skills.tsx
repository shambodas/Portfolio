import { skillGroups } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24" aria-label="Skills">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="Technical Toolkit"
          subtitle="The stack I reach for when building machine learning, IoT and backend systems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={Math.min(i * 0.04, 0.16)}>
              <div
                className="group h-full rounded-xl border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_14px_40px_-26px_rgba(77,163,255,0.3)]"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{group.name}</h3>
                <ul className="mt-4 space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm transition-colors duration-300 group-hover:text-accent/90"
                      style={{ color: "var(--color-fg2)" }}
                    >
                      <span
                        className="size-1 rounded-full transition-colors duration-300 group-hover:bg-accent/70"
                        style={{ backgroundColor: "var(--color-muted)" }}
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}