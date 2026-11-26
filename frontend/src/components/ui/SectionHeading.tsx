import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display m-0 text-[2.15rem] text-[var(--color-text)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
