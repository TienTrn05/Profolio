import { useRef, useState } from "react";
import { portfolioLinks } from "../../config/portfolio";
import ProjectCard from "../../features/projects/ProjectCard";
import { projects } from "../../features/projects/projectsData";
import Icon from "../ui/Icon";

const DEFAULT_PROJECT_COUNT = 3;

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
      className="relative py-[var(--section-space)]"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="mx-auto w-full max-w-[var(--container)] px-8 md:px-16">
        <header className="section-heading mb-18 text-center" data-reveal>
          <div className="section-badge inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-base leading-none font-semibold text-white uppercase">
            <span aria-hidden="true">✦</span>
            <span>Selected Work</span>
          </div>
          <h2
            className="mt-6 text-[clamp(2.6rem,3.4vw,3.35rem)] leading-[1.22] font-bold tracking-[-0.035em]"
            id="work-title"
          >
            Featured Projects
          </h2>
          <p className="mx-auto mt-5 max-w-[52rem] text-[1.125rem] leading-[1.8] text-muted">
            A closer look at what I built, how I contributed and the decisions
            behind each project.
          </p>
        </header>

        <div
          id="project-list"
          className={`project-list-region ${showMore ? "is-expanded overflow-y-auto pr-3 [scrollbar-color:var(--brand)_var(--surface-soft)] [scrollbar-gutter:stable]" : ""}`}
          ref={projectListRef}
          style={
            projectListHeight ? { height: `${projectListHeight}px` } : undefined
          }
          tabIndex={showMore ? 0 : undefined}
          aria-label="Selected projects"
        >
          <div className="project-list grid gap-7">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={
                  !showMore && index >= DEFAULT_PROJECT_COUNT ? "hidden" : ""
                }
              >
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={onOpenCaseStudy}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="work-footer mt-7 flex flex-wrap items-stretch justify-center gap-4 text-center"
          data-reveal
        >
          <button
            className="inline-flex min-h-14 items-center justify-center gap-2 border-2 border-slate-950 bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-brand"
            type="button"
            aria-expanded={showMore}
            aria-controls="project-list"
            onClick={toggleProjects}
          >
            {showMore ? "Show Less" : "View More Projects"}
            <Icon
              name={showMore ? "arrow-up" : "arrow-down-right"}
              className="size-5"
            />
          </button>
          <a
            className="inline-flex min-h-14 items-center gap-3 border-2 border-slate-700 bg-slate-950 px-5 py-3 text-white transition-colors hover:border-brand"
            href={portfolioLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" className="size-6" />
            <span className="grid text-left leading-tight">
              <small className="font-mono text-[0.62rem] tracking-widest text-violet-300">
                OPEN SOURCE
              </small>
              <strong>Explore My GitHub</strong>
            </span>
            <Icon name="arrow-up-right" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
