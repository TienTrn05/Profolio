import { useEffect, useState } from "react";

const navigation = [
  ["home", "Home"],
  ["about", "About Me"],
  ["work", "Projects"],
  ["stack", "Skills"],
  ["building", "Learning"],
];

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
      navigation.forEach(([id]) => {
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
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}${menuOpen ? " is-menu-open" : ""}`}
      data-header
    >
      <nav className="nav-container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Tien — Home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-block brand-block-purple" />
            <span className="brand-block brand-block-shadow" />
            <span className="brand-block brand-block-yellow" />
          </span>
          <span className="brand-name">Tien.</span>
        </a>
        <div className="desktop-nav">
          <ul className="nav-list">
            {navigation.map(([id, label]) => (
              <li key={id}>
                <a
                  className={`nav-link${activeSection === id ? " is-active" : ""}`}
                  href={`#${id}`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact">
            Let&apos;s Chat
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
          {[...navigation, ["contact", "Let's Chat"]].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
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
  );
}
