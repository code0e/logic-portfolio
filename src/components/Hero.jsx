function Hero({ darkMode }) {
  return (
    <main
      id="home"
      className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:px-12 lg:px-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#39ff88]/10 blur-[120px]"
      />

      {/* Shared content width */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Profile image — LEFT SIDE */}
        <div className="order-1 flex justify-center md:justify-start">
          <div className="relative mr-2 mt-2 sm:mr-4">
            {/* Offset green frame */}
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-[#39ff88]/50 transition-transform duration-500 hover:rotate-6" />

            {/* Soft green glow */}
            <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-[#39ff88]/20 blur-3xl" />

            <img
              src="/images/divinepic.jpeg"
              alt="Divine — Frontend Developer"
              className="relative h-[340px] w-[290px] rounded-[1.75rem] object-cover object-center shadow-2xl sm:h-[430px] sm:w-[350px] lg:h-[480px] lg:w-[390px]"
            />

            {/* Floating tech label */}
            <div
              className={`absolute -bottom-6 -left-5 rounded-2xl border p-4 shadow-xl backdrop-blur-xl sm:-left-10 sm:p-5 ${
                darkMode
                  ? "border-white/10 bg-[#211e1e]/95"
                  : "border-gray-200 bg-white/95"
              }`}
            >
              <p className="text-xs text-gray-500">My approach</p>
              <p className="mt-1 font-bold">
                React <span className="text-[#39ff88]">+</span> Creativity
              </p>
            </div>

            {/* Decorative code badge */}
            <div className="absolute -right-3 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#39ff88] text-xl font-bold text-[#151212] shadow-lg sm:-right-6 sm:h-14 sm:w-14">
              {"</>"}
            </div>
          </div>
        </div>

        {/* Introduction — RIGHT SIDE */}
        <div className="order-2">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#39ff88] sm:text-sm">
            Frontend Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            I build digital experiences that{" "}
            <span className="text-[#39ff88]">make sense.</span>
          </h1>

          <p
            className={`mt-5 max-w-lg text-base leading-8 sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm Divine, a frontend developer focused on building useful,
            intuitive web applications with React and modern web technologies. I
            turn ideas into clean, functional experiences people enjoy using.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#39ff88] px-6 py-3.5 font-bold text-[#151212] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#39ff88]/20 sm:px-7 sm:py-4"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-current px-6 py-3.5 font-semibold transition duration-300 hover:border-[#39ff88] hover:text-[#39ff88] sm:px-7 sm:py-4"
            >
              Let's talk
            </a>
          </div>

          {/* Personal statement */}
          <div
            className={`mt-7 flex items-center gap-3 text-sm ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff88] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#39ff88]" />
            </span>
            Building useful products, one idea at a time.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
