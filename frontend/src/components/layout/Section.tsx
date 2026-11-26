import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  sectionRef?: Ref<HTMLElement>;
};

export function Section({
  sectionRef,
  className,
  ...props
}: SectionProps) {
  return (
    <section ref={sectionRef} className={cn("section", className)} {...props} />
  );
}
