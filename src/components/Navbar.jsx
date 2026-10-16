import { useState } from "react";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
      <div
        className={`mx-auto max-w-[1400px] rounded-2xl border px-5 py-6 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:px-8 ${
          darkMode
            ? "border-white/10 bg-[#151212]/95 text-white"
            : "border-gray-200 bg-white/95 text-gray-900"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Codee<span className="text-[#39ff88]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition hover:text-[#39ff88]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
              title={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
              className="rounded-full p-2 transition hover:bg-gray-500/10"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.42 1.42" />
                  <path d="m17.65 17.65 1.42 1.42" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.35 17.65-1.42 1.42" />
                  <path d="m19.07 4.93-1.42 1.42" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-[#39ff88] px-5 py-2.5 text-sm font-semibold text-[#151212] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#39ff88]/20 sm:inline-flex"
            >
              Let's talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="rounded-xl p-2 transition hover:bg-gray-500/10 md:hidden"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-current/10 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-[#39ff88]/10 hover:text-[#39ff88]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#39ff88] px-4 py-3 text-center text-sm font-semibold text-[#151212]"
              >
                Let's talk ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
