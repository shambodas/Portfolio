import { Download, Mail, Phone } from "lucide-react";
import { contact, RESUME_URL } from "../data/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line" style={{ backgroundColor: "var(--color-bg2)" }}>
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">© 2026 Shambo Das</p>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
              <GithubIcon className="size-3.5" /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
              <LinkedinIcon className="size-3.5" /> LinkedIn
            </a>
            <a href={contact.email} className="flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
              <Mail className="size-3.5" /> Email
            </a>
            <a href={contact.phone} className="flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
              <Phone className="size-3.5" /> Call
            </a>
            <a href={RESUME_URL} download="Shambo_Das_Resume.pdf" className="flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
              <Download className="size-3.5" /> Resume
            </a>
          </nav>
        </div>

        <p className="mt-8 text-center font-mono text-[11px] tracking-wide text-muted/70 md:text-right">
          Built with curiosity &amp; code.
        </p>
      </div>
    </footer>
  );
}