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
        { rootMargin: "0px" },
      );
      revealElements.forEach((element) => observer.observe(element));

      const mutationObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          record.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;
            if (node.matches("[data-reveal]")) observer.observe(node);
            node
              .querySelectorAll("[data-reveal]")
              .forEach((element) => observer.observe(element));
          });
        });
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
      cleanups.push(() => {
        mutationObserver.disconnect();
        observer.disconnect();
      });
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

    const canUsePointerMotion = matchMedia("(pointer: fine)").matches;
    const motionIsReduced = () =>
      document.documentElement.dataset.motion === "reduced";

    if (canUsePointerMotion) {
      const heroMedia = document.querySelector("[data-hero-media]");
      const updateHeroMotion = (event) => {
        if (motionIsReduced()) return;
        const rect = heroMedia.getBoundingClientRect();
        const x = Math.min(
          Math.max((event.clientX - rect.left) / rect.width, 0),
          1,
        );
        const y = Math.min(
          Math.max((event.clientY - rect.top) / rect.height, 0),
          1,
        );
        heroMedia.style.setProperty("--spot-x", `${x * 100}%`);
        heroMedia.style.setProperty("--spot-y", `${y * 100}%`);
        heroMedia.style.setProperty("--hero-shift-x", `${(x - 0.5) * -12}px`);
        heroMedia.style.setProperty("--hero-shift-y", `${(y - 0.5) * -10}px`);
      };
      const resetHeroMotion = () => {
        heroMedia.style.setProperty("--spot-x", "50%");
        heroMedia.style.setProperty("--spot-y", "45%");
        heroMedia.style.setProperty("--hero-shift-x", "0px");
        heroMedia.style.setProperty("--hero-shift-y", "0px");
      };
      if (heroMedia) {
        heroMedia.addEventListener("pointermove", updateHeroMotion, {
          passive: true,
          signal,
        });
        heroMedia.addEventListener("pointerleave", resetHeroMotion, { signal });
      }

      document.querySelectorAll(".project-panel").forEach((panel) => {
        const updateProjectMotion = (event) => {
          if (motionIsReduced()) return;
          const rect = panel.getBoundingClientRect();
          const x = Math.min(
            Math.max((event.clientX - rect.left) / rect.width, 0),
            1,
          );
          const y = Math.min(
            Math.max((event.clientY - rect.top) / rect.height, 0),
            1,
          );
          panel.style.setProperty("--project-spot-x", `${x * 100}%`);
          panel.style.setProperty("--project-spot-y", `${y * 100}%`);
          panel.style.setProperty("--project-shift-x", `${(x - 0.5) * -8}px`);
          panel.style.setProperty("--project-shift-y", `${(y - 0.5) * -6}px`);
        };
        const resetProjectMotion = () => {
          panel.style.setProperty("--project-spot-x", "70%");
          panel.style.setProperty("--project-spot-y", "30%");
          panel.style.setProperty("--project-shift-x", "0px");
          panel.style.setProperty("--project-shift-y", "0px");
        };
        panel.addEventListener("pointermove", updateProjectMotion, {
          passive: true,
          signal,
        });
        panel.addEventListener("pointerleave", resetProjectMotion, { signal });
      });
    }

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
