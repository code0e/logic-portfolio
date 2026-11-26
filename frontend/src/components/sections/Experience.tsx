import type { Ref } from "react";

import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { experience } from "@/data/experience";

type ExperienceProps = {
  sectionRef: Ref<HTMLElement>;
};

export function Experience({ sectionRef }: ExperienceProps) {
  return (
    <Section sectionRef={sectionRef} id="experience">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've been working and studying."
          />

          <ol className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {experience.map((item) => (
              <li key={item.organization} className="py-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-[var(--color-text)]">
                    {item.organization}
                  </h3>
                  {item.period ? (
                    <p className="text-sm text-[var(--color-muted)]">{item.period}</p>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-[var(--color-text)]">{item.role}</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
