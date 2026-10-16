function Contact({ darkMode }) {
  const socialLinks = [
    {
      name: "GitHub",
      detail: "Explore my code and projects",
      url: "https://github.com/code0e",
      symbol: "GH",
    },
    {
      name: "X / Twitter",
      detail: "Connect with me in the dev community",
      url: "https://x.com/code0e",
      symbol: "𝕏",
    },
  ];

  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[2rem] border p-7 sm:p-12 lg:p-16 ${
            darkMode
              ? "border-white/10 bg-white/[0.03]"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#39ff88]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#39ff88]/5 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Main message */}
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#39ff88] sm:text-sm">
                Get in touch
              </p>

              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Have an idea?
                <span className="mt-2 block text-[#39ff88]">
                  Let's build it.
                </span>
              </h2>

              <p
                className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm open to connecting with developers, collaborating on ideas,
                and exploring opportunities to build useful digital experiences.
                Have something in mind? Let's talk.
              </p>

              <a
                href="mailto:divinegiftchris@email.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#39ff88] px-7 py-4 font-semibold text-[#151212] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#39ff88]/20"
              >
                Let's talk
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <p
                className={`mb-5 text-xs font-semibold uppercase tracking-[0.25em] ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Find me online
              </p>

              {/* Email card */}
              <a
                href="mailto:divinegiftchris@email.com"
                className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition duration-300 hover:border-[#39ff88]/60 ${
                  darkMode
                    ? "border-white/10 bg-black/20 hover:bg-white/[0.04]"
                    : "border-gray-200 bg-white hover:bg-white"
                }`}
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#39ff88]/10 text-lg text-[#39ff88]">
                    @
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">Email</p>
                    <p
                      className={`mt-1 break-all text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      divinegiftchris@email.com
                    </p>
                  </div>
                </div>
                <span className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#39ff88]">
                  ↗
                </span>
              </a>

              {/* Social links */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition duration-300 hover:border-[#39ff88]/60 ${
                    darkMode
                      ? "border-white/10 bg-black/20 hover:bg-white/[0.04]"
                      : "border-gray-200 bg-white hover:bg-white"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#39ff88]/10 text-sm font-bold text-[#39ff88]">
                      {link.symbol}
                    </span>
                    <div>
                      <p className="font-semibold">{link.name}</p>
                      <p
                        className={`mt-1 text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {link.detail}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#39ff88]">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="relative mt-12 border-t border-current/10 pt-6">
            <p
              className={`text-sm ${
                darkMode ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Good ideas start with a conversation.
              <span className="ml-2 font-semibold text-[#39ff88]">
                Say hello.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
