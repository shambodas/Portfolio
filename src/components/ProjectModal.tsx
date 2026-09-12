import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">{label}</h4>
      <div className="mt-3 space-y-3 text-sm leading-relaxed" style={{ color: "var(--color-fg2)" }}>
        {children}
      </div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const hasProject = project !== null;

  useEffect(() => {
    if (!hasProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [hasProject, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-line bg-bg2 sm:rounded-2xl"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                  Project {project.number}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight" style={{ color: "var(--color-fg)" }}>
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 text-sm" style={{ color: "var(--color-accent)" }}>
                    {project.subtitle}
                  </p>
                ) : null}
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:border-accent/50 hover:text-fg active:scale-[0.92]"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <div className="space-y-7">
                {project.overview ? (
                  <Section label="Overview">
                    <p>{project.overview}</p>
                    {project.highlight ? (
                      <p className="rounded-lg border border-accent/15 bg-accent/5 p-3.5 text-sm" style={{ color: "var(--color-accent)" }}>
                        {project.highlight}
                      </p>
                    ) : null}
                  </Section>
                ) : (
                  <Section label="Overview">
                    <p>{project.description}</p>
                  </Section>
                )}

                {project.metrics && project.metrics.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg border border-line bg-card p-4 text-center">
                        <p className="text-2xl font-semibold text-accent">{m.value}</p>
                        <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {project.problem ? (
                  <Section label="Problem">
                    <p>{project.problem}</p>
                  </Section>
                ) : null}

                {project.approach ? (
                  <Section label="Approach">
                    <p>{project.approach}</p>
                  </Section>
                ) : null}

                {project.architecture && project.architecture.length > 0 ? (
                  <Section label="Architecture">
                    <ol className="space-y-0">
                      {project.architecture.map((nodeName, i) => (
                        <li key={nodeName} className="flex items-center gap-3 py-1.5">
                          <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                          <span className="h-px flex-1" style={{ backgroundColor: "var(--color-line)" }} aria-hidden="true" />
                          <span className="font-mono text-xs tracking-wider uppercase" style={{ color: "var(--color-fg2)" }}>
                            {nodeName}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </Section>
                ) : null}

                {project.features && project.features.length > 0 ? (
                  <Section label="Technical Highlights">
                    <ul className="grid gap-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null}

                {project.technology && project.technology.length > 0 ? (
                  <Section label="Technologies">
                    <div className="flex flex-wrap gap-2">
                      {project.technology.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-card px-2.5 py-1.5 font-mono text-xs"
                          style={{ color: "var(--color-fg2)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {project.links && project.links.length > 0 ? (
                  <Section label="Links">
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                        >
                          {link.label}
                          <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </Section>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}