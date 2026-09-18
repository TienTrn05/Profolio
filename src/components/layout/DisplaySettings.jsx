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
      ?.setAttribute("content", theme === "dark" ? "#050816" : "#f7f4ff");
    try {
      localStorage.setItem("tien-portfolio-theme", theme);
    } catch {
      // Storage can be unavailable in private or restricted browsing contexts.
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
  }, [motion]);

  const toggleMotion = () => {
    const next = motion === "full" ? "reduced" : "full";
    setMotion(next);
    try {
      localStorage.setItem("tien-portfolio-motion", next);
    } catch {
      // Keep the in-memory preference when persistent storage is unavailable.
    }
  };

  return (
    <aside
      className="fixed top-1/3 left-0 z-40 flex flex-col gap-2 max-md:top-auto max-md:bottom-[5.9rem] max-md:flex-row"
      aria-label="Display settings"
    >
      <button
        className="tool-motion group inline-flex min-h-11 items-center gap-2 rounded-r-md bg-brand px-3 text-sm font-semibold text-white shadow-lg transition-[padding] hover:pr-4"
        type="button"
        aria-pressed={motion === "full"}
        aria-label={
          motion === "full"
            ? "Turn motion effects off"
            : "Turn motion effects on"
        }
        onClick={toggleMotion}
      >
        <Icon name="sparkles" className="size-4" />
        <span className="hidden group-hover:inline group-focus-visible:inline">
          {motion === "full" ? "Motion On" : "Motion Off"}
        </span>
      </button>
      <button
        className="group inline-flex min-h-11 items-center gap-2 rounded-r-md bg-sky-500 px-3 text-sm font-semibold text-white shadow-lg transition-[padding] hover:pr-4"
        type="button"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        onClick={() =>
          setTheme((value) => (value === "dark" ? "light" : "dark"))
        }
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} className="size-4" />
        <span className="hidden group-hover:inline group-focus-visible:inline">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
      </button>
    </aside>
  );
}
