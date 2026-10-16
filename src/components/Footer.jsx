function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t px-6 pb-8 pt-10 md:px-12 lg:px-20 ${
        darkMode ? "border-white/10" : "border-gray-200"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Brand and back-to-top link */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <a
              href="#home"
              className="inline-flex items-center text-2xl font-extrabold tracking-tight transition hover:opacity-80"
            >
              Codee<span className="text-[#39ff88]">.</span>
            </a>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Designed with purpose. Built by Divine.
            </p>
          </div>

          <a
            href="#home"
            className={`group inline-flex w-fit items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition hover:border-[#39ff88] hover:text-[#39ff88] ${
              darkMode ? "border-white/10" : "border-gray-200"
            }`}
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-8 flex flex-col justify-between gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center ${
            darkMode
              ? "border-white/10 text-gray-500"
              : "border-gray-200 text-gray-500"
          }`}
        >
          <p>© {currentYear} Codee. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with React
            <span className="text-[#39ff88]" aria-label="love">
              ♥
            </span>
            and a lot of problem-solving.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
