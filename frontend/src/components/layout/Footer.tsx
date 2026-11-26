import { socialLinks, site } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8rem] tracking-[0.16em] text-[var(--color-text)]">
          {site.name}
        </p>

        <nav aria-label="Social links" className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={
                link.name === "Email"
                  ? `Email ${site.email}`
                  : `${link.name} (opens in a new tab)`
              }
              className="text-[0.8rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <p className="text-[0.78rem] text-[var(--color-muted)]">
          © {currentYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
