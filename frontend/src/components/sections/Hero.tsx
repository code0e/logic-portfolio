import { Button } from "@/components/ui";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

type HeroProps = {
  onContact: () => void;
};

export function Hero({ onContact }: HeroProps) {
  return (
    <section className="section pt-12 sm:pt-20">
      <div className="container grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-20">
        <div>
          <p className="eyebrow">{hero.kicker}</p>
          <h1 className="m-0 text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--color-text)] sm:text-6xl lg:text-[4.4rem]">
            {hero.headingLead}
            <span className="display mt-3 block text-[2.55rem] italic sm:text-5xl lg:text-[4rem]">
              {hero.headingEmphasis}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-[var(--color-muted)]">
            {hero.body}
          </p>
          <p className="mt-4 text-sm tracking-wide text-[var(--color-text)]">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={onContact}>Get in touch</Button>
            <a
              href={site.resumeUrl}
              download={site.resumeFileName}
              className="btn btn-secondary"
              aria-label="Download CV as PDF"
            >
              Download CV
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="GitHub profile (opens in a new tab)"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            {hero.availability}
          </div>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
            Currently focused on frontend development with React and TypeScript,
            and comfortable working with Django when a product needs a backend.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text)]"
              >
                {tool}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
