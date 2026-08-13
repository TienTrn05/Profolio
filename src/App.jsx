import { useState } from "react";
import { DisplaySettings, SiteFooter, SiteHeader } from "./components/layout";
import { CaseStudyDialog } from "./components/overlays";
import {
  About,
  Hero,
  LearningJourney,
  Skills,
  Principles,
  Projects,
} from "./components/sections";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects";

export default function App() {
  const [isCaseStudyOpen, setCaseStudyOpen] = useState(false);
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
        <About />
        <Projects onOpenCaseStudy={() => setCaseStudyOpen(true)} />
        <Skills />
        <LearningJourney />
        <Principles />
      </main>
      <SiteFooter />
      <CaseStudyDialog
        open={isCaseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />
      <div className="sr-only" aria-live="polite" data-live-region />
    </>
  );
}
