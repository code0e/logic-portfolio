import type { SocialLink } from "@/types/content";
import type { SectionId } from "@/types/navigation";

export const site = {
  name: "LOGIC",
  shortName: "Logic",
  email: "codee025@gmail.com",
  location: "Awka, Anambra, Nigeria",
  tagline: "Turning Logic Into Reality.",
  description:
    "LOGIC is a frontend-focused full-stack developer building thoughtful web applications with React, TypeScript, Python and Django.",
  githubUrl: "https://github.com/code0e",
  linkedinUrl: "https://linkedin.com/in/anumoka-divine-783071383",
  resumeUrl: "/resume/Anumoka_Divine_CV.pdf",
  resumeFileName: "Anumoka_Divine_CV.pdf",
};

export const navItems: Array<{ label: string; section: SectionId }> = [
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Experience", section: "experience" },
  { label: "Contact", section: "contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: site.githubUrl },
  { name: "LinkedIn", url: site.linkedinUrl },
  { name: "X", url: "https://x.com/code0e" },
  { name: "Email", url: `mailto:${site.email}` },
];
