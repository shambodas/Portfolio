import { mindset } from "../data/site";
import Reveal from "./Reveal";

export default function Mindset() {
  return (
    <section aria-label="Engineering mindset">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
        <Reveal>
          <p className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl" style={{ color: "var(--color-fg)" }}>
            I like building systems that connect theory with{" "}
            <span className="text-accent">something that actually works.</span>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line sm:grid-cols-3" style={{ backgroundColor: "var(--color-line)" }}>
          {mindset.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="h-full p-6 md:p-8" style={{ backgroundColor: "var(--color-bg2)" }}>
                <span className="font-mono text-xs tracking-[0.2em] text-muted">{item.step}</span>
                <h3 className="mt-3 font-mono text-sm tracking-[0.22em]" style={{ color: "var(--color-accent)" }}>
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--color-fg2)" }}>
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}