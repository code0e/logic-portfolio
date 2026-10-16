function About({ darkMode }) {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section id="about" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#39ff88] sm:text-sm">
            About me
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            More than writing code.
            <span className="block text-[#39ff88]">Building with purpose.</span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6">
            <p
              className={`text-lg leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm Divine, a frontend developer who enjoys turning ideas into
              practical, intuitive web experiences. I focus on building
              interfaces that look good, work smoothly, and make sense to the
              people using them.
            </p>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Working with React has strengthened the way I approach building
              applications.. breaking interfaces into components, managing
              state, and thinking through how different parts of a product fit
              together. I enjoy tackling problems and finding clearer ways to
              solve them.
            </p>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I'm continuing to expand my skills toward full-stack development,
              with a focus on writing maintainable code and creating products
              that solve real problems.
            </p>

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 pt-2 font-semibold transition hover:text-[#39ff88]"
            >
              See what I've built
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Developer philosophy card */}
          <div
            className={`relative overflow-hidden rounded-3xl border p-7 sm:p-9 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#39ff88]/10 blur-3xl"
            />

            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-[#39ff88]">
              My approach
            </p>

            <h3 className="relative mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Understand the problem. Build the solution. Keep improving.
            </h3>

            <p
              className={`relative mt-5 leading-7 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I believe good development combines thoughtful problem-solving,
              attention to detail, and a willingness to keep learning through
              real projects.
            </p>

            <div className="relative mt-8 border-t border-current/10 pt-6">
              <p className="text-sm font-semibold">What I value</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Clean code", "Usability", "Consistency", "Growth"].map(
                  (value) => (
                    <span
                      key={value}
                      className={`rounded-full border px-3 py-2 text-xs font-medium ${
                        darkMode
                          ? "border-white/10 text-gray-300"
                          : "border-gray-200 bg-white text-gray-700"
                      }`}
                    >
                      {value}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20 border-t border-current/10 pt-10">
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies I work with
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition duration-300 hover:border-[#39ff88] hover:text-[#39ff88] ${
                  darkMode
                    ? "border-white/10 bg-white/[0.03] text-gray-300"
                    : "border-gray-200 bg-white text-gray-700"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
