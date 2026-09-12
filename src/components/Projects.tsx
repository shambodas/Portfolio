import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import FlowVisual from "./FlowVisual";
import { ProjectModal } from "./ProjectModal";
import SectionHeading from "./SectionHeading";

function cardNodes(nodes: string[]) {
  if (nodes.length <= 5) return nodes;
  return [...nodes.slice(0, 5), "\u2026"];
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24" aria-label="Projects">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Work"
          title="Projects"
          subtitle="Projects spanning AI/ML, predictive maintenance, NLP, IoT, web development and intelligent systems."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-accent/30 hover:shadow-[0_18px_50px_-28px_rgba(77,163,255,0.35)] md:p-7"
              style={{ backgroundColor: "var(--color-card)" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(340px circle at 20% 0%, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 60%)",
                }}
                aria-hidden="true"
              />

              <div className="relative mb-6 border-b border-line pb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
                <FlowVisual nodes={cardNodes(project.architecture ?? [])} />
              </div>

              <div className="relative flex items-center justify-between gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-accent transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_6px_rgba(77,163,255,0.7)]">
                  {project.number}
                </span>
                {project.date ? (
                  <span className="font-mono text-[11px] tracking-wider text-muted">{project.date}</span>
                ) : null}
              </div>

              <h3 className="text-balance mt-3 text-xl font-semibold leading-snug tracking-tight" style={{ color: "var(--color-fg)" }}>
                {project.title}
              </h3>
              {project.subtitle ? (
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                  {project.subtitle}
                </p>
              ) : null}
              <p className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--color-muted)" }}>
                {project.category}
              </p>

              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-fg2)" }}>
                {project.description}
              </p>

              {project.metrics && project.metrics.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-baseline gap-1.5 rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1"
                    >
                      <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{m.label}</span>
                      <span className="font-mono text-xs font-semibold text-accent">{m.value}</span>
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line px-2 py-1 font-mono text-[10px] tracking-wider text-fg2/80 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto flex items-center justify-between gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-all duration-200 hover:text-accent active:scale-[0.96]"
                >
                  View Details
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
                {project.links && project.links.length > 0 ? (
                  <div className="flex items-center gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 rounded-md border border-line px-2.5 py-1.5 text-xs font-medium transition-all duration-200 hover:border-accent/40 hover:text-accent active:scale-[0.96]"
                        style={{ color: "var(--color-fg2)" }}
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}