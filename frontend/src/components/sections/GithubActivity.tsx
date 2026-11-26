import { Section } from "@/components/layout";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { GITHUB_PROFILE_URL } from "@/lib/constants";
import { useGithubProfile } from "@/hooks/useGithubProfile";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.15 3.42 1.52.1-.73.39-1.23.7-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.55.23 2.69.12 2.98.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function formatUpdatedAt(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function GithubActivity() {
  const { profile, repos, isLoading, hasError } = useGithubProfile();

  return (
    <Section>
      <div className="container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Open source"
            title="GitHub activity."
            description="A live view of my public GitHub activity and recent repositories."
          />

          <ButtonLink
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <GithubIcon size={16} />
            @code0e
            <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>

        <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-5xl font-semibold tracking-[-0.06em] text-[var(--color-text)]">
                {isLoading ? "—" : (profile?.publicRepos ?? "—")}
              </p>

              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Public repositories
              </p>
            </div>

            <p className="text-xs leading-5 text-[var(--color-muted)]">
              Contribution activity is loaded from GitHub's public contribution
              chart. Counts are not estimated by this portfolio.
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3 sm:p-5">
            <img
              src="https://ghchart.rshah.org/6D3AE8/code0e"
              alt="GitHub contribution activity for code0e over the last year"
              loading="lazy"
              className="github-contribution-chart mx-auto w-full"
            />

            <div className="mt-3 flex items-center justify-between text-[0.68rem] text-[var(--color-muted)]">
              <span>Less</span>

              <div className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#e8e8e8]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#c9b8f5]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#a58be9]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#8058d8]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#6d3ae8]" />
              </div>

              <span>More</span>
            </div>
          </div>

          {hasError ? (
            <p className="mt-5 text-sm text-[var(--color-muted)]">
              Live repository data is temporarily unavailable. Visit{" "}
              <a
                className="text-link underline"
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              to see the latest activity.
            </p>
          ) : null}

          {repos.length > 0 ? (
            <div className="mt-8 border-t border-[var(--color-border)] pt-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  Recently updated repositories
                </h3>

                <span className="text-xs text-[var(--color-muted)]">
                  Live from GitHub
                </span>
              </div>

              <ul className="grid gap-x-8 sm:grid-cols-2">
                {repos.slice(0, 4).map((repo) => (
                  <li
                    key={repo.htmlUrl}
                    className="border-b border-[var(--color-border)] py-3"
                  >
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
                    >
                      {repo.name}
                    </a>

                    {formatUpdatedAt(repo.updatedAt) ? (
                      <p className="mt-1 text-xs text-[var(--color-muted)]">
                        Updated {formatUpdatedAt(repo.updatedAt)}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
