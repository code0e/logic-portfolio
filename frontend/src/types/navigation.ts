import type { RefObject } from "react";

export type SectionId = "about" | "projects" | "experience" | "contact";

export type SectionRefs = Record<SectionId, RefObject<HTMLElement | null>>;

export type NavigateHandler = (section: SectionId) => void;
