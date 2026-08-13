import { useEffect } from "react";

export function usePortfolioEffects() {
  useEffect(() => {
    document.documentElement.classList.remove("no-js");
    document.documentElement.lang = "en";
    const controller = new AbortController();
    const { signal } = controller;
    const cleanups = [];

    const smoothScroll = (event) => {
      const link = event.target.closest('a[href^="#"]:not([href="#"])');
      if (!link) return;
      const target = document.querySelector(link.hash);
      if (!target) return;
      event.preventDefault();
      const headerOffset =
        document.querySelector("[data-header]")?.offsetHeight ?? 64;
      const top = target.id === "home" ? 0 : target.offsetTop - headerOffset;
      scrollTo({
        top: Math.max(top, 0),
        behavior:
          document.documentElement.dataset.motion === "reduced"
            ? "auto"
            : "smooth",
      });
      history.replaceState(null, "", link.hash);
    };
    document.addEventListener("click", smoothScroll, { signal });

    const revealElements = [...document.querySelectorAll("[data-reveal]")];
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (entry) =>
              entry.isIntersecting && entry.target.classList.add("is-revealed"),
          ),
        { rootMargin: "0px 0px -80px" },
      );
      revealElements.forEach((element) => observer.observe(element));
      cleanups.push(() => observer.disconnect());
    } else {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
    }

    document.querySelectorAll("img[data-fallback]").forEach((image) => {
      const replace = () => {
        if (!image.isConnected) return;
        const fallback = document.createElement("div");
        fallback.className = "image-fallback";
        fallback.setAttribute("role", "img");
        fallback.setAttribute(
          "aria-label",
          image.alt || image.dataset.fallback,
        );
        fallback.textContent = image.dataset.fallback;
        image.replaceWith(fallback);
      };
      image.addEventListener("error", replace, { signal, once: true });
      if (image.complete && image.naturalWidth === 0) replace();
    });

    const process = document.querySelector("[data-process]");
    const processProgress = document.querySelector("[data-process-progress]");
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      if (!process || !processProgress || innerWidth < 1024) return;
      const rect = process.getBoundingClientRect();
      const value = Math.max(
        0,
        Math.min(
          1,
          (innerHeight * 0.75 - rect.top) / Math.max(rect.height * 0.75, 1),
        ),
      );
      processProgress.style.width = `${value * 100}%`;
    };
    const requestProgress = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };
    addEventListener("scroll", requestProgress, { passive: true, signal });
    addEventListener("resize", requestProgress, { signal });
    updateProgress();

    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
