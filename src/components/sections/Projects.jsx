import { useRef, useState } from "react";
import Icon from "../ui/Icon";
import HealthMonitorProject from "../projects/HealthMonitorProject";
import MoneyBoysProject from "../projects/MoneyBoysProject";
import TeleprompterProject from "../projects/TeleprompterProject";
import SkyTonightProject from "../projects/SkyTonightProject";

export default function Projects({ onOpenCaseStudy }) {
  const [showMore, setShowMore] = useState(false);
  const [projectListHeight, setProjectListHeight] = useState(null);
  const projectListRef = useRef(null);

  const toggleProjects = () => {
    if (!showMore) {
      setProjectListHeight(projectListRef.current?.offsetHeight ?? null);
      setShowMore(true);
      return;
    }

    projectListRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    setShowMore(false);
    setProjectListHeight(null);
  };

  return (
    <section
      className="section section-work"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="container">
        <header className="section-heading section-heading-center" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Selected Work</span>
          </div>
          <h2 id="work-title">Selected project work</h2>
        </header>
        <div
          id="project-list"
          className={`project-list-region${showMore ? " is-expanded" : ""}`}
          ref={projectListRef}
          style={
            projectListHeight
              ? { "--project-list-height": `${projectListHeight}px` }
              : undefined
          }
          tabIndex={showMore ? 0 : undefined}
          aria-label="Selected projects"
        >
          <div className="project-list">
            <MoneyBoysProject
              onOpenCaseStudy={() => onOpenCaseStudy("moneyboys")}
            />
            <TeleprompterProject />
            <SkyTonightProject />
            <HealthMonitorProject
              onOpenCaseStudy={() => onOpenCaseStudy("health-monitor")}
            />
          </div>
        </div>
        <div className="work-footer" data-reveal>
          <button
            className="button button-dark"
            type="button"
            aria-expanded={showMore}
            aria-controls="project-list"
            onClick={toggleProjects}
          >
            <span>{showMore ? "Show Less" : "View More Projects"}</span>
            <Icon name={showMore ? "arrow-up" : "arrow-down-right"} />
          </button>
          <a
            className="button button-github"
            href="https://github.com/TienTrn05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button-github-mark">
              <Icon name="github" />
            </span>
            <span className="button-github-copy">
              <small>OPEN SOURCE</small>
              <strong>Explore My GitHub</strong>
            </span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
