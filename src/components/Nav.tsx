import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { contact, navLinks, RESUME_URL } from "../data/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b backdrop-blur-md bg-bg/70 border-line" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-[0.18em] uppercase transition-colors hover:text-accent"
        >
          Shambo&nbsp;Das
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "true" : undefined}
              className={`relative rounded-md px-3 py-2 text-[13px] transition-colors ${
                active === link.href.slice(1) ? "text-fg" : "text-muted hover:text-fg2"
              }`}
            >
              {link.label}
              {active === link.href.slice(1) ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-[1px] h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  aria-hidden="true"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
          >
            <LinkedinIcon className="size-[18px]" />
          </a>
          <a
            href={RESUME_URL}
            download="Shambo_Das_Resume.pdf"
            className="group flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-[13px] font-medium text-fg transition-all hover:border-accent/50 hover:text-accent"
          >
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-md text-fg2 transition-colors hover:text-fg lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b backdrop-blur-md bg-bg/95 border-line lg:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                    active === link.href.slice(1) ? "text-accent" : "text-fg2 hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-3 pt-3">
                <a
                  href={RESUME_URL}
                  download="Shambo_Das_Resume.pdf"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line px-3.5 py-2.5 text-sm font-medium text-fg"
                >
                  <Download className="size-4" />
                  Resume
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex size-10 items-center justify-center rounded-md border border-line text-muted"
                >
                  <GithubIcon className="size-[18px]" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-md border border-line text-muted"
                >
                  <LinkedinIcon className="size-[18px]" />
                </a>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}