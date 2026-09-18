import { useEffect, useState } from "react";
import { portfolioLinks, portfolioNavigation } from "../../config/portfolio";
import Icon from "../ui/Icon";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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
      setScrolled(y > 16);
      setProgress(Math.min(y / range, 1));
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
        className={`site-header fixed inset-x-0 top-0 z-[100] min-h-[var(--header-height)] border-b-2 border-[var(--border-soft)] bg-[var(--chrome)] text-[var(--chrome-text)] transition-[box-shadow,background-color,transform] duration-300 ${scrolled ? "is-scrolled shadow-[0_0.75rem_2rem_rgba(7,27,47,0.13)] backdrop-blur-2xl" : ""} ${hidden ? "is-hidden -translate-y-[calc(100%+2px)]" : "translate-y-0"} ${menuOpen ? "is-menu-open translate-y-0" : ""}`}
        data-header
      >
        <nav
          className="mx-auto flex min-h-[calc(var(--header-height)-2px)] w-full max-w-[var(--container)] items-center justify-between px-8 md:px-16"
          aria-label="Primary navigation"
        >
          <a
            className="brand inline-flex shrink-0 items-center gap-2.5"
            href="#home"
            aria-label="Tien — Home"
          >
            <span className="brand-mark block size-[2.35rem] transition-transform duration-300 hover:rotate-[-5deg] hover:scale-105">
              <img
                src="/assets/icons/tien-rooster-mark.svg"
                alt=""
                className="size-full"
                width="38"
                height="38"
              />
            </span>
            <span className="brand-name text-[1.65rem] leading-none font-extrabold tracking-[-0.04em]">
              Tien<span className="text-brand">.</span>
            </span>
          </a>

          <div className="desktop-nav header-identity hidden items-center gap-7 lg:flex">
            <span className="grid border-l border-[var(--border)] pl-5 leading-tight">
              <small className="font-mono text-[0.62rem] tracking-[0.1em] text-muted">
                PORTFOLIO / 2026
              </small>
              <strong className="mt-1 text-sm">Full-stack Developer</strong>
            </span>
            <a
              className="nav-resume inline-flex min-h-10 items-center gap-2 border border-[var(--border)] bg-surface-soft px-4 py-2 text-sm font-bold transition-[transform,border-color,background-color] hover:-translate-y-0.5 hover:border-brand hover:bg-brand/10"
              href={portfolioLinks.resume}
              download
            >
              <span>Résumé</span>
              <Icon name="file-down" className="size-4" />
            </a>
          </div>

          <button
            className="menu-button relative hidden size-12 border-0 bg-transparent p-2.5 max-lg:block"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`absolute left-3 block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "top-[1.45rem] rotate-45" : "top-4"}`}
            />
            <span
              className={`absolute top-[1.45rem] left-3 block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-3 block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "top-[1.45rem] -rotate-45" : "top-8"}`}
            />
          </button>
        </nav>

        <div
          className="mobile-menu border-t border-[var(--border)] bg-surface px-8 py-3 lg:hidden"
          id="mobile-menu"
          hidden={!menuOpen}
        >
          <ul className="m-0 grid list-none gap-1 p-0">
            {portfolioNavigation.map(({ id, label, eyebrow }) => (
              <li key={id}>
                <a
                  className="flex items-center justify-between px-4 py-3 font-semibold transition-colors hover:bg-brand/10"
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
        </div>

        <span
          className="header-progress absolute inset-x-0 -bottom-0.5 h-[3px] origin-left bg-gradient-to-r from-[var(--progress-green)] via-[var(--progress-yellow)] to-[var(--progress-red)]"
          aria-hidden="true"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <nav
        className="proof-dock fixed bottom-[1.35rem] left-1/2 z-[95] flex -translate-x-1/2 items-center gap-2.5 rounded-[1.35rem] border border-white/15 bg-[var(--dock-bg)] p-[0.55rem] text-white shadow-[0_1.5rem_4rem_rgba(5,12,23,0.28)] backdrop-blur-xl max-md:right-2.5 max-md:bottom-2.5 max-md:left-2.5 max-md:translate-x-0 max-md:justify-center max-md:gap-1 max-md:rounded-2xl max-md:p-[0.45rem] max-md:animate-none"
        aria-label="Portfolio sections"
      >
        <span className="proof-dock-status inline-flex items-center gap-1.5 pr-2.5 pl-2 font-mono text-[0.56rem] font-bold tracking-[0.11em] text-white/50 max-md:hidden">
          <i className="block size-[0.45rem] rounded-full bg-emerald-400" />
          OPEN TO WORK
        </span>
        <ul className="m-0 flex list-none items-center gap-1 p-0 max-md:w-full max-md:justify-around">
          {portfolioNavigation.map(({ id, label, eyebrow, hint, icon }) => {
            const isActive = activeSection === id;
            return (
              <li className="relative" key={id}>
                <a
                  className={`proof-dock-link group relative flex size-[3.35rem] items-center justify-center gap-0 overflow-visible rounded-[0.9rem] border border-transparent p-0 transition-[width,gap,border-color,background-color,color,transform] duration-300 hover:-translate-y-[0.18rem] hover:border-white/15 hover:bg-white/10 hover:text-white max-md:size-[3.25rem] max-md:transform-none ${isActive ? "is-active w-[8.1rem] gap-2 bg-gradient-to-br from-brand to-accent text-white max-md:w-[3.25rem] max-md:gap-0 max-md:border-white/15" : "text-white/60"}`}
                  href={`#${id}`}
                  aria-label={`${label}: ${hint}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="proof-dock-preview pointer-events-none absolute bottom-[calc(100%+0.9rem)] left-1/2 grid min-w-[11.5rem] -translate-x-1/2 translate-y-2 scale-95 gap-1 rounded-xl border border-white/15 bg-slate-950 px-3.5 py-3 text-left opacity-0 shadow-2xl transition-[opacity,transform] group-hover:-translate-x-1/2 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 max-md:hidden">
                    <small className="block font-mono text-[0.6rem] tracking-wider text-violet-300">
                      {eyebrow}
                    </small>
                    <strong className="mt-1 block text-xs text-white">
                      {hint}
                    </strong>
                  </span>
                  <Icon name={icon} className="size-5 shrink-0" />
                  <span
                    className={`proof-dock-label overflow-hidden text-[0.7rem] font-bold whitespace-nowrap opacity-0 transition-[max-width,opacity] max-md:hidden ${isActive ? "max-w-[5.2rem] opacity-100" : "max-w-0"}`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <span
          className="proof-dock-meter grid size-[3.1rem] shrink-0 place-items-center rounded-full p-[0.2rem] drop-shadow-[0_0_0.5rem_rgba(var(--brand-rgb),0.2)] max-md:hidden"
          role="progressbar"
          aria-label="Page reading progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress * 100)}
          style={{
            background: `conic-gradient(var(--progress-green), var(--progress-yellow), var(--progress-orange), var(--progress-red) ${progress * 360}deg, var(--dock-track) 0deg)`,
          }}
        >
          <span className="grid size-full place-items-center rounded-full bg-[var(--dock-bg)] font-mono text-[0.62rem]">
            {Math.round(progress * 100)}
          </span>
        </span>
      </nav>
    </>
  );
}
