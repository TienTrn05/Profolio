import { useEffect, useState } from "react";
import { portfolioLinks, portfolioNavigation } from "../../config/portfolio";
import Icon from "../ui/Icon";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      const range = Math.max(
        document.documentElement.scrollHeight - innerHeight,
        1,
      );
      const probe = y + 64 + innerHeight * 0.2;
      let current = "home";
      portfolioNavigation.forEach(({ id }) => {
        if ((document.getElementById(id)?.offsetTop ?? Infinity) <= probe)
          current = id;
      });
      setActiveSection(current);
      setProgress(Math.round(Math.min(y / range, 1) * 100) / 100);
      setHidden(
        innerWidth >= 1024 && y > 120 && y - previousY > 5 && !menuOpen,
      );
      if (y - previousY < -5 || y < 80) setHidden(false);
      if (Math.abs(y - previousY) > 3) previousY = y;
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", requestUpdate);
      removeEventListener("resize", requestUpdate);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const closeOnEscape = (event) =>
      event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-surface/95 shadow-sm backdrop-blur-md transition-transform duration-200 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <nav
          className="mx-auto flex h-[var(--header-height)] w-full max-w-[var(--container)] items-center justify-between px-8 md:px-16"
          aria-label="Primary navigation"
        >
          <a
            className="flex items-center gap-3 font-extrabold"
            href="#home"
            aria-label="Tien — Home"
          >
            <img
              src="/assets/icons/tien-rooster-mark.svg"
              alt=""
              className="size-9"
              width="36"
              height="36"
            />
            <span className="text-2xl tracking-tight text-ink">
              Tien<span className="text-brand">.</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            <span className="grid leading-tight">
              <small className="font-mono text-[0.62rem] tracking-wider text-muted">
                PORTFOLIO / 2026
              </small>
              <strong className="text-sm text-ink">Full-stack Developer</strong>
            </span>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
              href={portfolioLinks.resume}
              download
            >
              Résumé <Icon name="file-down" className="size-4" />
            </a>
          </div>
          <button
            className="grid size-11 place-items-center rounded-md border border-[var(--border)] lg:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "braces"} className="size-5" />
          </button>
        </nav>
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-[var(--border)] bg-surface px-8 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="grid gap-1">
              {portfolioNavigation.map(({ id, label, eyebrow }) => (
                <li key={id}>
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold hover:bg-brand/10"
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{label}</span>
                    <small className="font-mono text-xs text-muted">
                      {eyebrow}
                    </small>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-brand"
          aria-hidden="true"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <nav
        className="fixed right-1/2 bottom-3 z-40 flex translate-x-1/2 items-center gap-1 rounded-2xl border border-white/15 bg-slate-950/90 p-2 text-white shadow-2xl backdrop-blur-md lg:right-6 lg:bottom-6 lg:translate-x-0"
        aria-label="Portfolio sections"
      >
        <span className="hidden px-3 font-mono text-[0.65rem] tracking-wider text-green-300 xl:inline-flex">
          ● OPEN TO WORK
        </span>
        <ul className="flex items-center gap-1">
          {portfolioNavigation.map(({ id, label, hint, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={`${label}: ${hint}`}
                aria-current={activeSection === id ? "location" : undefined}
                className={`flex size-11 items-center justify-center gap-2 rounded-xl transition-colors lg:w-auto lg:px-3 ${activeSection === id ? "bg-brand text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                <Icon name={icon} className="size-5 shrink-0" />
                <span className="hidden text-xs font-semibold lg:inline">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <span
          className="hidden min-w-10 text-center font-mono text-xs text-violet-300 xl:block"
          role="progressbar"
          aria-label="Page reading progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress * 100)}
        >
          {Math.round(progress * 100)}%
        </span>
      </nav>
    </>
  );
}
