import { useEffect, useState } from "react";

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("logic-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("logic-theme", theme);
  }, [theme]);

  function handleNavigate(section) {
    onNavigate?.[section]?.();
    setMenuOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const navItems = [
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Contact Me", section: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 text-[var(--color-text)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-none items-center justify-between gap-3 px-4 sm:min-h-24 sm:gap-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          aria-label="Logic.Dev — Home"
          className="shrink-0 text-2xl font-black tracking-[-1.5px] text-[var(--color-text)] sm:text-4xl"
        >
          Logic<span className="text-[var(--color-accent)]">.Dev</span>
        </button>

        {/* Hamburger — mobile and tablet */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="logic-mobile-navigation"
          className="order-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] text-xl leading-none text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          id="logic-mobile-navigation"
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full z-50 w-full flex-col gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-5 shadow-lg lg:static lg:order-none lg:z-auto lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavigate(item.section)}
              className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[var(--color-muted)] transition hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-text)] lg:px-0 lg:py-2"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => handleNavigate("contact")}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:opacity-90 lg:hidden"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-foreground)]" />
            Work With Me
            <span>↗</span>
          </button>
        </nav>

        {/* Actions */}
        <div className="order-2 ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:order-none lg:ml-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "white" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "white" : "dark"} mode`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] text-xl leading-none text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavigate("contact")}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:opacity-90 lg:flex xl:gap-3 xl:px-5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-foreground)]" />
            Work With Me
            <span>↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
