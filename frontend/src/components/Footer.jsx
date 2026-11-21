function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-8 text-[var(--color-text)] sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-none flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="text-2xl font-black tracking-[-1.5px] text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
        >
          Logic<span className="text-[var(--color-accent)]">.Dev</span>
        </button>

        {/* Slogan */}
        <p className="text-sm font-medium text-[var(--color-muted)]">
          Turning Logic Into Reality.
        </p>

        {/* Copyright */}
        <p className="text-xs text-[var(--color-muted)] sm:text-sm">
          © {currentYear} Logic.Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
