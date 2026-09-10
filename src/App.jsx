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
      <a className="skip-link" href="#main-content">
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
