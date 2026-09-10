import Icon from "../ui/Icon";
import { useEffect, useState } from "react";

function storedValue(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function initialMotionPreference() {
  const stored = storedValue("tien-portfolio-motion", null);
  if (stored === "full" || stored === "reduced") return stored;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "reduced"
    : "full";
}

export default function DisplaySettings() {
  const [theme, setTheme] = useState(() =>
    storedValue("tien-portfolio-theme", "light"),
  );
  const [motion, setMotion] = useState(initialMotionPreference);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#050816" : "#eaf6ff");
    try {
      localStorage.setItem("tien-portfolio-theme", theme);
    } catch {
      // Storage can be unavailable in private or restricted browsing contexts.
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
    try {
      localStorage.setItem("tien-portfolio-motion", motion);
    } catch {
      // Keep the in-memory preference when persistent storage is unavailable.
    }
  }, [motion]);

  return (
    <aside className="site-tools" aria-label="Display settings">
      <button
        className="tool-button tool-motion"
        type="button"
        aria-pressed={motion === "full"}
        aria-label={
          motion === "full"
            ? "Turn motion effects off"
            : "Turn motion effects on"
        }
        onClick={() =>
          setMotion((value) => (value === "full" ? "reduced" : "full"))
        }
      >
        <Icon name="sparkles" />
        <span>{motion === "full" ? "Motion On" : "Motion Off"}</span>
      </button>
      <button
        className="tool-button tool-theme"
        type="button"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        onClick={() =>
          setTheme((value) => (value === "dark" ? "light" : "dark"))
        }
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} />
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </aside>
  );
}
