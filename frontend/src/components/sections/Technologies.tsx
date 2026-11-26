import { Section } from "@/components/layout";
import { technologies } from "@/data/technologies";

export function Technologies() {
  const items = [...technologies, ...technologies];

  return (
    <Section className="technology-section">
      <div className="container">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">My toolkit</p>
            <h2 className="display text-3xl text-[var(--color-text)] sm:text-4xl">
              Technologies I work with.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--color-muted)]">
            A growing toolkit for building useful, reliable web applications.
          </p>
        </div>
      </div>
      <div className="technology-marquee" aria-label="Technologies and tools">
        <div className="technology-marquee__track">
          {items.map((technology, index) => (
            <div className="technology-pill" key={`${technology.name}-${index}`} aria-hidden={index >= technologies.length}>
              <img
                src={`https://cdn.simpleicons.org/${technology.icon}/${technology.color}`}
                alt=""
                loading="lazy"
                width="24"
                height="24"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">React, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, Python, Django, PostgreSQL, HTML5, CSS3, Git and Vite.</p>
    </Section>
  );
}
