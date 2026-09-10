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
        className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}${menuOpen ? " is-menu-open" : ""}`}
        data-header
      >
        <nav className="nav-container" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Tien — Home">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/icons/tien-rooster-mark.svg" alt="" />
            </span>
            <span className="brand-name">Tien.</span>
          </a>

          <div className="desktop-nav header-identity">
            <span>
              <small>PORTFOLIO / 2026</small>
              <strong>Full-stack Developer</strong>
            </span>
            <a className="nav-resume" href={portfolioLinks.resume} download>
              <span>Résumé</span>
              <Icon name="file-down" />
            </a>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
          <ul>
            {portfolioNavigation.map(({ id, label, eyebrow }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  <span>{label}</span>
                  <small>{eyebrow}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span
          className="header-progress"
          aria-hidden="true"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <nav className="proof-dock" aria-label="Portfolio sections">
        <span className="proof-dock-status" aria-hidden="true">
          <i />
          OPEN TO WORK
        </span>
        <ul>
          {portfolioNavigation.map(({ id, label, eyebrow, hint, icon }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  className={`proof-dock-link${isActive ? " is-active" : ""}`}
                  href={`#${id}`}
                  aria-label={`${label}: ${hint}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="proof-dock-preview" aria-hidden="true">
                    <small>{eyebrow}</small>
                    <strong>{hint}</strong>
                  </span>
                  <Icon name={icon} />
                  <span className="proof-dock-label">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <span
          className="proof-dock-meter"
          role="progressbar"
          aria-label="Page reading progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress * 100)}
          style={{ "--page-progress": `${progress * 360}deg` }}
        >
          <span>{Math.round(progress * 100)}</span>
        </span>
      </nav>
    </>
  );
}
