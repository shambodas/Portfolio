import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { contact, RESUME_URL } from "../data/site";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const actions = [
  {
    icon: Phone,
    label: "Call Me",
    value: "+91 74394 35618",
    href: contact.phone,
    external: false,
  },
  {
    icon: Mail,
    label: "Email Me",
    value: "shambodas.official@gmail.com",
    href: contact.email,
    external: false,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/shambodas",
    href: contact.github,
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/shambodas",
    href: contact.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading index="03" eyebrow="Reach Out" title="Let's build something." />

        <Reveal delay={0.05}>
          <p className="max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--color-fg2)" }}>
            I'm open to opportunities, collaborations, interesting engineering problems and
            conversations around AI/ML, backend systems and technology.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, i) => (
            <Reveal key={action.label} delay={0.08 + i * 0.05}>
              <a
                href={action.href}
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col rounded-xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_44px_-28px_rgba(77,163,255,0.35)] active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex size-10 items-center justify-center rounded-lg border border-line text-fg2 transition-colors group-hover:border-accent/40 group-hover:text-accent"
                  >
                    <action.icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-5 text-base font-semibold" style={{ color: "var(--color-fg)" }}>
                  {action.label}
                </p>
                <p className="mt-1 break-all font-mono text-xs" style={{ color: "var(--color-muted)" }}>
                  {action.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <a
            href={RESUME_URL}
            download="Shambo_Das_Resume.pdf"
            className="group mt-8 inline-flex items-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent active:translate-y-0 active:scale-[0.98]"
          >
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}