import { GITHUB_USERNAME } from "@/lib/constants";
import type { GithubProfile, GithubRepo } from "@/types/content";

const GITHUB_API = "https://api.github.com";

function request(url: string) {
  return fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    signal: AbortSignal.timeout(8000),
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function fetchGithubProfile(): Promise<GithubProfile> {
  const response = await request(`${GITHUB_API}/users/${GITHUB_USERNAME}`);

  if (!response.ok) {
    throw new Error("Unable to load GitHub profile.");
  }

  const data: unknown = await response.json();

  if (
    !isRecord(data) ||
    typeof data.login !== "string" ||
    typeof data.html_url !== "string" ||
    typeof data.public_repos !== "number"
  ) {
    throw new Error("GitHub profile response was incomplete.");
  }

  return {
    login: data.login,
    htmlUrl: data.html_url,
    publicRepos: data.public_repos,
  };
}

export async function fetchRecentGithubRepos(
  count = 6,
): Promise<GithubRepo[]> {
  const response = await request(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=${count}&sort=updated`,
  );

  if (!response.ok) {
    throw new Error("Unable to load GitHub repositories.");
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("GitHub repository response was incomplete.");
  }

  return data.flatMap((item) => {
    if (
      !isRecord(item) ||
      typeof item.name !== "string" ||
      typeof item.html_url !== "string" ||
      typeof item.updated_at !== "string"
    ) {
      return [];
    }

    return [
      {
        name: item.name,
        htmlUrl: item.html_url,
        description: typeof item.description === "string" ? item.description : null,
        updatedAt: item.updated_at,
      },
    ];
  });
}
