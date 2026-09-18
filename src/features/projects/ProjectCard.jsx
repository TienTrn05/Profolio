import Icon from "../../components/ui/Icon";
import ProjectTags from "../../components/ui/ProjectTags";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <article
      className="project-card project-panel group grid min-h-[32rem] overflow-hidden border-2 border-[var(--border)] bg-surface transition-[border-color,box-shadow] duration-300 hover:border-brand hover:shadow-2xl lg:grid-cols-[minmax(0,1fr)_25rem] xl:grid-cols-[minmax(0,1fr)_minmax(25rem,41.875rem)]"
      data-project={project.id}
      data-reveal
    >
      <div className="project-content order-2 flex min-w-0 flex-col justify-center p-[clamp(2.5rem,4vw,3.5rem)] lg:order-1">
        <div className="project-topline flex flex-wrap items-start justify-between gap-4 max-md:flex-col">
          <p
            className={`m-0 text-[1.75rem] leading-tight font-bold ${project.accent}`}
          >
            {project.name}
          </p>
          <ProjectTags items={project.tags} />
        </div>

        <h3 className="mt-6 text-[clamp(2rem,2.6vw,2.65rem)] leading-[1.22] font-bold max-md:text-[1.75rem] max-md:leading-[1.3]">
          {project.headline}
        </h3>
        <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-muted">
          {project.description}
        </p>

        <dl className="project-evidence mt-6 border-l-[3px] border-brand bg-brand/5 py-1 pl-4">
          {project.evidence.map(([label, value]) => (
            <div
              className="grid gap-2 border-b border-[var(--border-soft)] py-3 last:border-b-0 md:grid-cols-[7.5rem_minmax(0,1fr)]"
              key={label}
            >
              <dt className="font-mono text-[0.68rem] font-bold tracking-wide text-muted uppercase">
                {label}
              </dt>
              <dd className="m-0 text-[0.82rem] leading-relaxed font-semibold">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="project-system-map mt-6 border border-[var(--border-soft)] bg-page/70 p-4"
          aria-label={`${project.name} engineering layers`}
        >
          <span className="font-mono text-[0.65rem] font-bold tracking-widest text-brand uppercase">
            System map
          </span>
          <div className="project-layer-flow mt-3 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
            {project.flow.map(({ icon, label, value }, index) => (
              <div className="contents" key={label}>
                {index > 0 && (
                  <Icon
                    name="arrow-right"
                    className="mx-auto size-4 shrink-0 rotate-90 text-brand md:rotate-0"
                  />
                )}
                <span className="flex min-w-0 flex-1 items-center gap-2 border border-[var(--border)] bg-surface p-3">
                  <Icon name={icon} className="size-5 shrink-0 text-brand" />
                  <span className="min-w-0">
                    <small className="block font-mono text-[0.62rem] font-bold tracking-wide text-muted uppercase">
                      {label}
                    </small>
                    <strong className="block truncate text-[0.82rem]">
                      {value}
                    </strong>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 max-[479px]:items-stretch max-[479px]:[&>*]:w-full">
          <a
            className="inline-flex min-h-12 items-center gap-2 border-2 border-ink px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-page"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{project.repositoryLabel}</span>
            <Icon name="arrow-up-right" className="size-4" />
          </a>
          {project.hasCaseStudy && (
            <button
              className="inline-flex items-center gap-2 border-b border-brand py-2 text-sm font-semibold text-brand"
              type="button"
              onClick={() => onOpenCaseStudy(project.id)}
            >
              Read Case Study
              <Icon name="plus" className="size-4" />
            </button>
          )}
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}
