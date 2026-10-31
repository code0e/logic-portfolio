function Projects({ sectionRef }) {
  const projects = [
    {
      name: "Admin Dashboard",
      category: "DASHBOARD UI",
      description:
        "An admin dashboard interface that presents information in an organized layout for easier monitoring and navigation.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/images/admin-codee-dashboard.png",
      liveUrl: "https://admin-codee-dashboard.vercel.app/",
      githubUrl: "",
    },
    {
      name: "E-Commerce App",
      category: "E-COMMERCE",
      description:
        "An online shopping interface designed to make browsing products simple and intuitive.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/images/codee-e-commerce.png",
      liveUrl: "https://codee-e-commerce.vercel.app/",
      githubUrl: "",
    },
    {
      name: "Todo List Pro",
      category: "PRODUCTIVITY APP",
      description:
        "A task management application with priorities, search, filters, task editing, and dark mode.",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
      image: "/images/todo-list-pro.png",
      liveUrl: "https://to-do-list-pro-rust.vercel.app/",
      githubUrl: "https://github.com/code0e/to-do-list-pro",
    },
    {
      name: "Expense Tracker",
      category: "FINANCE APP",
      description:
        "A web application for tracking expenses and presenting personal spending information.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/images/expense-tracker.png",
      liveUrl: "https://react-expense-tracker-mu-lime.vercel.app/",
      githubUrl: "",
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
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Projects I've Built
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            A selection of projects where I've put my skills into practice and
            turned ideas into working applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-xl hover:shadow-black/[0.05]"
            >
              {/* Project preview */}
              <div className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="absolute left-4 top-4 z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[var(--color-text)] backdrop-blur sm:left-5 sm:top-5">
                  PROJECT 0{index + 1}
                </div>

                <img
                  src={project.image}
                  alt={`${project.name} application screenshot`}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold tracking-[0.16em] text-[var(--color-muted)]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:opacity-80"
                  >
                    Live Preview
                    <span>↗</span>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                    >
                      Source Code
                      <span className="text-[var(--color-accent)]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-7 sm:mt-16">
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            Every project is another opportunity to learn, experiment, and build
            better digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
