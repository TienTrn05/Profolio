import { useState } from "react";
import { DisplaySettings, SiteFooter, SiteHeader } from "./components/layout";
import { CaseStudyDialog } from "./components/overlays";
import { Hero, Projects, Skills, WorkflowTools } from "./components/sections";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects";

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  usePortfolioEffects();
  return (
    <>
      <a
        className="fixed top-3 left-3 z-[100] -translate-y-[160%] bg-highlight px-4 py-3 font-bold text-slate-950 transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      <DisplaySettings />
      <main id="main-content">
        <Hero />
        <Projects onOpenCaseStudy={setActiveCaseStudy} />
        <Skills />
        <WorkflowTools />
      </main>
      <SiteFooter />
      <CaseStudyDialog
        open={activeCaseStudy !== null}
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
      <div className="sr-only" aria-live="polite" data-live-region />
    </>
  );
}
