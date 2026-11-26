import type { Ref } from "react";

import { Section } from "@/components/layout";
import { about } from "@/data/about";

type AboutProps = {
  sectionRef: Ref<HTMLElement>;
};

export function About({ sectionRef }: AboutProps) {
  return (
    <Section sectionRef={sectionRef} id="about">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="display m-0 max-w-xl text-[2.1rem] text-[var(--color-text)] sm:text-5xl">
            {about.heading}
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[0.98rem] leading-8 text-[var(--color-muted)]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <figure className="rotate-2 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <img
              src={about.portrait.src}
              alt={about.portrait.alt}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <figcaption className="px-4 py-3 text-sm text-[var(--color-muted)]">
              Logic
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
