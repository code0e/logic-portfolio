import { useEffect, useState } from "react";

import { fetchGithubProfile, fetchRecentGithubRepos } from "@/lib/github";
import type { GithubProfile, GithubRepo } from "@/types/content";

type GithubState = {
  profile: GithubProfile | null;
  repos: GithubRepo[];
  isLoading: boolean;
  hasError: boolean;
};

export function useGithubProfile() {
  const [state, setState] = useState<GithubState>({
    profile: null,
    repos: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [profile, repos] = await Promise.all([
          fetchGithubProfile(),
          fetchRecentGithubRepos(6),
        ]);

        if (!cancelled) {
          setState({
            profile,
            repos,
            isLoading: false,
            hasError: false,
          });
        }
      } catch {
        if (!cancelled) {
          setState({
            profile: null,
            repos: [],
            isLoading: false,
            hasError: true,
          });
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
