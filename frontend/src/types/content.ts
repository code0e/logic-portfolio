export type SocialLink = {
  name: string;
  url: string;
};

export type Project = {
  name: string;
  summary: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  organization: string;
  role: string;
  period?: string;
  description: string;
  kind: "work" | "education";
};

export type Technology = {
  name: string;
  icon: string;
  color: string;
};

export type GithubRepo = {
  name: string;
  htmlUrl: string;
  description: string | null;
  updatedAt: string;
};

export type GithubProfile = {
  login: string;
  htmlUrl: string;
  publicRepos: number;
};
