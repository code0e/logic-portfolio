function About({ sectionRef }) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/code0e",
    },
    {
      name: "X",
      url: "https://x.com/code0e",
    },
    {
      name: "Email",
      url: "mailto:codee025@gmail.com",
    },
  ];

  const highlights = [
    {
      title: "Frontend Development",
      description:
        "Building responsive websites and interactive web applications.",
    },
    {
      title: "React",
      description:
        "Working with React, Redux Toolkit, and modern frontend tools.",
    },
    {
      title: "Problem Solving",
      description: "Turning ideas into practical digital experiences.",
    },
    {
      title: "Future Focus",
      description: "Growing toward backend development, AI, and automation.",
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
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            More About Logic
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            A little about who I am, what I build, and where I'm headed.
          </p>
        </div>

        {/* About content */}
        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Biography */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Curiosity is where I start.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)]">
              <p>
                I didn't get into development just to write code. I got into it
                because I wanted to understand how digital products work and how
                ideas become something people can use.
              </p>

              <p>
                These days, I'm building with JavaScript, React, Redux Toolkit,
                and Tailwind CSS. Every project is an opportunity to learn
                something new, solve a problem, and get better at my craft.
              </p>

              <p>
                I'm working toward becoming a full-stack developer, with Python,
                AI, and automation on my learning path. This portfolio is part
                of that journey and the work will keep evolving.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                >
                  {social.name}
                  <span className="text-[var(--color-accent)]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-lg hover:shadow-black/[0.04] sm:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-sm font-bold text-[var(--color-text)] transition group-hover:bg-[var(--color-border)]">
                  <span className="text-[var(--color-accent)]">
                    0{index + 1}
                  </span>
                </span>

                <h3 className="mt-6 text-lg font-bold text-[var(--color-text)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
