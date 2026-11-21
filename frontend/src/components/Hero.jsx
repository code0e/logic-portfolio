function Hero({ onViewProjects, onContact }) {
  return (
    <section className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto grid w-full max-w-none grid-cols-1 items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 md:min-h-[calc(100vh-96px)] md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-24 xl:gap-28">
        {/* Hero content */}
        <div className="relative order-1 min-w-0">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[var(--color-muted)] sm:mb-8 sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            LOGIC.DEV
          </p>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--color-text)] sm:text-6xl lg:text-7xl xl:text-[76px]">
            I build websites,
            <br />
            web apps &
            <br />
            <span className="text-[var(--color-accent)]">automations.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-[var(--color-muted)] sm:mt-8 sm:text-lg sm:leading-8">
            Hi, I'm Logic, a frontend developer and AI automation enthusiast who
            builds modern websites, web applications, and automation systems for
            businesses and individuals. I create fast, clean, and easy-to-use
            digital experiences that work smoothly across devices.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <button
              onClick={onViewProjects}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--color-surface)] px-5 py-3 font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-1 hover:opacity-80 sm:min-h-14 sm:gap-4 sm:px-7 sm:py-4"
            >
              View My Work
              <span className="text-xl text-[var(--color-accent)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              onClick={onContact}
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[var(--color-border)] px-5 py-3 font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 sm:min-h-14 sm:gap-4 sm:px-7 sm:py-4"
            >
              Let's Work
              <span className="text-lg text-[var(--color-accent)]">↗</span>
            </button>
          </div>

          {/* Quick details */}
          <div className="mt-10 grid max-w-lg grid-cols-3 border-t border-[var(--color-border)] pt-6 sm:mt-14 sm:pt-7">
            <div className="pr-2 sm:pr-4">
              <h3 className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                React
              </h3>
              <p className="mt-2 text-[9px] font-bold tracking-wide text-[var(--color-muted)] sm:text-xs sm:tracking-wider">
                CORE TOOL
              </p>
            </div>

            <div className="border-l border-[var(--color-border)] px-3 sm:px-5">
              <h3 className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                Frontend
              </h3>
              <p className="mt-2 text-[9px] font-bold tracking-wide text-[var(--color-muted)] sm:text-xs sm:tracking-wider">
                WHAT I BUILD
              </p>
            </div>

            <div className="border-l border-[var(--color-border)] pl-3 sm:pl-5">
              <h3 className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                AI
              </h3>
              <p className="mt-2 text-[9px] font-bold tracking-wide text-[var(--color-muted)] sm:text-xs sm:tracking-wider">
                WHAT I'M EXPLORING
              </p>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-2 mx-auto w-full max-w-[320px] sm:max-w-md md:max-w-none md:justify-self-end lg:max-w-[500px]">
          {/* Decorative background shapes */}
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.04] sm:-inset-5" />

          <div className="absolute -inset-1 -rotate-2 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/30">
            <img
              src="/images/divinepic.jpeg"
              alt="Logic, software developer"
              className="aspect-[4/5] w-full object-cover object-center"
            />

            <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 sm:px-7 sm:py-6">
              <div>
                <p className="text-xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-2xl">
                  Logic
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Software Developer
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-2">
                <span
                  className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-[var(--color-text)] sm:text-sm">
                  Open to work
                </span>
              </div>
            </div>
          </div>

          {/* Floating brand detail */}
          <div className="absolute -bottom-9 -left-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 shadow-lg sm:-left-7 sm:px-5 sm:py-4">
            <p className="text-xs font-bold tracking-wide text-[var(--color-muted)]">
              MY APPROACH
            </p>
            <p className="mt-1 text-sm font-extrabold text-[var(--color-text)] sm:text-base">
              Turning Logic Into Reality
              <span className="text-[var(--color-accent)]">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
