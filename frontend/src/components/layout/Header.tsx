import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

import { navItems, site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";
import type { NavigateHandler } from "@/types/navigation";

type HeaderProps = {
  onNavigate: NavigateHandler;
};

function GithubIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.15 3.42 1.52.1-.73.39-1.23.7-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.55.23 2.69.12 2.98.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.97V9h2.96v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.24V9h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v4.15Z" />
    </svg>
  );
}

export function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleNavigate(section: Parameters<NavigateHandler>[0]) {
    onNavigate(section);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-4 sm:h-16">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          aria-label={`${site.name} — Home`}
          className="group flex items-center"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/images/divinepic.jpeg"
              alt=""
              className="h-full w-full rounded-full object-cover object-[center_28%]"
            />
          </span>
        </button>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[0.82rem] text-[var(--color-muted)] md:flex"
        >
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavigate(item.section)}
              className="transition-colors hover:text-[var(--color-text)]"
            >
              {item.label}
            </button>
          ))}

          <a
            href={site.resumeUrl}
            download={site.resumeFileName}
            aria-label="Download CV as PDF"
            className="transition-colors hover:text-[var(--color-text)]"
          >
            CV
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] sm:flex"
          >
            <GithubIcon size={19} />
          </a>

          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] sm:flex"
          >
            <LinkedinIcon size={19} />
          </a>

          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.email}`}
            className="hidden h-9 w-9 items-center justify-center rounded-full text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] sm:flex"
          >
            <Mail size={19} strokeWidth={1.8} />
          </a>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-text)]"
          >
            {theme === "dark" ? "☼" : "◐"}
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="logic-mobile-navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-base md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="logic-mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-[var(--gutter)] py-5 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavigate(item.section)}
                className="rounded-md px-1 py-3 text-left text-base text-[var(--color-text)]"
              >
                {item.label}
              </button>
            ))}

            <a
              href={site.resumeUrl}
              download={site.resumeFileName}
              aria-label="Download CV as PDF"
              className="rounded-md px-1 py-3 text-left text-base text-[var(--color-text)]"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>

            <div className="mt-3 flex gap-4 border-t border-[var(--color-border)] pt-4">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
