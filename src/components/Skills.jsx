function Skills({ sectionRef }) {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "State & Styling",
      description: "Managing application data and creating consistent designs.",
      skills: ["Redux Toolkit", "Tailwind CSS"],
    },
    {
      title: "Tools & Workflow",
      description: "Tools I use to write, manage, and deploy code.",
      skills: ["Git", "GitHub", "Vite", "VS Code"],
    },
    {
      title: "Currently Exploring",
      description: "Technologies I'm working toward learning more deeply.",
      skills: ["Python", "Backend Development", "AI & Automation"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-bg)] px-5 py-20 text-[var(--color-text)] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-none">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[var(--color-muted)] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            MY TOOLKIT
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Skills & Technologies
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            The tools I use today and the areas I'm exploring as I grow as a
            developer.
          </p>
        </div>

        {/* Skills cards */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-xl hover:shadow-black/[0.04] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-sm font-bold text-[var(--color-accent)]">
                  0{index + 1}
                </span>

                <span className="text-xl text-[var(--color-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
                  ↗
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-[var(--color-text)]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
