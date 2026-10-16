const projects = [
  {
    name: "Todo List Pro",
    description:
      "A productivity app for organizing tasks, tracking progress, and managing everyday work.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    image: "/images/todo-list-pro.png",
    demo: "https://to-do-list-pro-rust.vercel.app/",
    number: "01",
    category: "Productivity",
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance application for recording expenses and keeping everyday spending organized.",
    stack: ["React", "JavaScript"],
    image: "/images/expense-tracker.png",
    demo: "https://react-expense-tracker-mu-lime.vercel.app/",
    number: "02",
    category: "Finance",
  },
  {
    name: "E-Commerce App",
    description:
      "An online shopping experience built with React, bringing product browsing and shopping UI together.",
    stack: ["React", "JavaScript"],
    image: "/images/codee-e-commerce.png",
    demo: "https://codee-e-commerce.vercel.app/",
    number: "03",
    category: "E-Commerce",
  },
  {
    name: "Admin Dashboard",
    description:
      "A management interface for organizing products, reviewing orders, and viewing customer information.",
    stack: ["React", "JavaScript"],
    image: "/images/admin-codee-dashboard.png",
    demo: "https://admin-codee-dashboard.vercel.app/",
    number: "04",
    category: "Dashboard",
  },
];

function Projects({ darkMode }) {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#39ff88] sm:text-sm">
            Selected work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="text-[#39ff88]">real products.</span>
            </h2>

            <p
              className={`max-w-md text-base leading-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A selection of projects built through practical problem-solving,
              thoughtful interfaces, and hands-on development.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 hover:border-[#39ff88]/50 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                  : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/60"
              }`}
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden border-b border-current/5">
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#39ff88]" />
                  {project.category}
                </div>

                <img
                  src={project.image}
                  alt={`${project.name} application screenshot`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#39ff88]">
                      PROJECT / {project.number}
                    </p>

                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.name}
                    </h3>
                  </div>

                  <span
                    className={`mt-1 text-2xl transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#39ff88] ${
                      darkMode ? "text-gray-600" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <p
                  className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04] text-gray-300"
                          : "border-gray-200 bg-white text-gray-700"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-current/10 pt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#39ff88] px-5 py-2.5 text-sm font-semibold text-[#151212] transition duration-300 hover:shadow-lg hover:shadow-[#39ff88]/20"
                  >
                    Live Demo
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:border-[#39ff88] hover:text-[#39ff88] ${
                        darkMode ? "border-white/15" : "border-gray-300"
                      }`}
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <p
          className={`mt-12 text-center text-sm leading-7 ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          Every project is another opportunity to solve a problem and build
          something useful.
        </p>
      </div>
    </section>
  );
}

export default Projects;
