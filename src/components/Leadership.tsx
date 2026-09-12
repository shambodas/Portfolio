import { creative, leadership } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Entry = { title: string; org: string; period: string };

function Group({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <div className="rounded-xl border border-line" style={{ backgroundColor: "var(--color-card)" }}>
      <p className="border-b border-line px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
        {label}
      </p>
      <ul className="px-5">
        {entries.map((item, i) => (
          <li
            key={`${item.title}-${item.org}`}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-line py-3.5"
            style={{ borderBottomWidth: i < entries.length - 1 ? 1 : 0, borderBottomStyle: "solid" }}
          >
            <span>
              <span className="text-sm font-medium" style={{ color: "var(--color-fg)" }}>
                {item.title}
              </span>
              <span className="block text-[13px]" style={{ color: "var(--color-fg2)" }}>
                {item.org}
              </span>
            </span>
            {item.period ? (
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--color-muted)" }}>
                {item.period}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24" aria-label="Leadership and activities">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Outside Work"
          title="Beyond the Code"
          subtitle="Where I spend time outside building systems — communities, teams and cameras."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Group label="Leadership" entries={leadership} />
          </Reveal>
          <Reveal delay={0.08}>
            <Group label="Creative" entries={creative} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}