const workflowTools = [
  {
    name: "GitHub",
    role: "Code history & review",
    color: "var(--brand-icon-neutral)",
    icon: "github",
  },
  {
    name: "Postman",
    role: "Request & response checks",
    color: "#ff6c37",
    icon: "postman",
  },
  {
    name: "Figma",
    role: "Interface handoff",
    color: "#f24e1e",
    icon: "figma",
  },
  {
    name: "Vite",
    role: "Web builds",
    color: "#646cff",
    icon: "vite",
  },
  {
    name: "Supabase",
    role: "MoneyBoys data",
    color: "#3ecf8e",
    icon: "supabase",
  },
  {
    name: "Firebase",
    role: "Application services",
    color: "#e69a00",
    icon: "firebase",
  },
];

function ToolSet({ duplicate = false }) {
  return (
    <ul
      className="workflow-tool-set flex shrink-0 gap-4 px-2 py-3"
      aria-hidden={duplicate || undefined}
    >
      {workflowTools.map(({ name, role, icon, color }) => (
        <li
          className="workflow-tool flex w-72 shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 shadow-[0_0.5rem_1.4rem_rgba(18,28,45,0.055)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1"
          key={name}
          data-icon={icon}
          style={{ "--tool-color": color }}
        >
          <span className="workflow-tool-icon grid size-16 shrink-0 place-items-center rounded-xl border">
            <img
              src={`${import.meta.env.BASE_URL}assets/icons/brands/${icon}.svg`}
              alt=""
              aria-hidden="true"
              className="size-9 object-contain"
              width="36"
              height="36"
            />
          </span>
          <span className="grid min-w-0 gap-0.5">
            <strong className="truncate text-[1.08rem] leading-snug font-bold">
              {name}
            </strong>
            <small className="text-[0.78rem] tracking-wide text-[var(--muted)] uppercase">
              {role}
            </small>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function WorkflowTools() {
  return (
    <section
      className="section-workflow-tools relative overflow-hidden py-[clamp(4.5rem,7vw,7rem)] text-[var(--text)]"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className="relative z-10 mx-auto mb-[clamp(2.5rem,5vw,4rem)] w-full max-w-[var(--container)] px-8 text-center md:px-16">
        <header className="section-heading" data-reveal>
          <div className="section-badge inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-base leading-none font-semibold text-white uppercase">
            <span aria-hidden="true">✦</span>
            <span>How I Build</span>
          </div>
          <h2
            id="workflow-title"
            className="mt-6 text-[clamp(2.6rem,3.4vw,3.35rem)] leading-tight font-bold tracking-[-0.035em]"
          >
            Development Workflow
          </h2>
          <p className="mx-auto mt-5 max-w-[49rem] text-[1.125rem] leading-[1.8] text-[var(--muted)]">
            Tools I use to turn interface decisions, API contracts and project
            data into reviewable web builds.
          </p>
          <span
            className="mx-auto mt-5 block h-0.5 w-13 bg-gradient-to-r from-[var(--brand)] to-[var(--highlight)]"
            aria-hidden="true"
          />
        </header>
      </div>

      <div
        className="workflow-marquee relative z-10 w-full overflow-hidden"
        aria-label="Development tools"
      >
        <div className="workflow-marquee-track flex w-max">
          <ToolSet />
          <ToolSet duplicate />
        </div>
      </div>
    </section>
  );
}
