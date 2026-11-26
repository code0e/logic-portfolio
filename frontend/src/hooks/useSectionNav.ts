import { useRef } from "react";

import type { SectionId, SectionRefs } from "@/types/navigation";

export function useSectionNav() {
  const about = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);

  const refs: SectionRefs = {
    about,
    projects,
    experience,
    contact,
  };

  function scrollTo(section: SectionId) {
    refs[section].current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return { refs, scrollTo };
}
