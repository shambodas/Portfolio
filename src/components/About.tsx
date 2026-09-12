import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const profileRows = [
  { label: "EDUCATION", value: "B.Tech in Electronics & Communication Engineering" },
  { label: "FOCUS", value: "AI/ML • Backend • IoT • Embedded Systems" },
  { label: "INTERESTS", value: "Intelligent systems • Machine learning • Engineering applications" },
  { label: "CURRENTLY", value: "Building practical engineering systems" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading index="01" eyebrow="About" title="A little about me." />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.05}>
            <div className="space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--color-fg2)" }}>
              <p>
                I'm an Electronics &amp; Communication Engineering student who likes to turn theory
                into working systems. My work sits where machine learning meets hardware and the
                backend — building prediction pipelines, engineering models around real data, and
                wiring sensors into the cloud.
              </p>
              <p>
                I care about systems that hold up in practice: clean preprocessing, honest model
                evaluation, and interfaces that people can actually use. Whether it's a digital twin
                for UAV propulsion or a B2B website for a family business, the standard is the same —
                it should work.
              </p>
              <p style={{ color: "var(--color-fg)" }}>
                Beyond engineering, I help run technical communities, lead hackathon teams, and shoot
                the occasional photograph.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-line p-6 md:p-7" style={{ backgroundColor: "var(--color-card)" }}>
              <dl className="divide-y divide-line">
                {profileRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-4 first:pt-0 last:pb-0">
                    <dt className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">{row.label}</dt>
                    <dd className="text-sm leading-relaxed" style={{ color: "var(--color-fg)" }}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}