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
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }),
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

    return () => {
      controller.abort();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
