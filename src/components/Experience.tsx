import { training } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24" aria-label="Training and certifications">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Learning"
          title="Training & Certifications"
          subtitle="Formal training and certifications in embedded systems, IoT and artificial intelligence."
        />

        <ol className="relative ml-2 border-l border-line pl-7 md:ml-3">
          {training.map((item, i) => (
            <Reveal key={`${item.org}-${item.title}`} delay={i * 0.05} className="relative pb-8 last:pb-0">
              <li>
                <span
                  className="absolute -left-[33px] top-1 size-2 rounded-full border border-accent bg-bg"
                  aria-hidden="true"
                />
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{item.period}</p>
                <h3 className="mt-1 text-[15px] font-semibold tracking-tight" style={{ color: "var(--color-fg)" }}>
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm" style={{ color: "var(--color-fg2)" }}>
                  {item.org}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}