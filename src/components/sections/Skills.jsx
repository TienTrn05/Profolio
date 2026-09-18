import Icon from "../ui/Icon";

const capabilities = [
  {
    icon: "panels-top-left",
    area: "Web frontend",
    title: "Responsive Web Interfaces",
    description:
      "I translate requirements into reusable components, clear interface states and responsive layouts that remain understandable as features grow.",
    tools: [
      ["React + TypeScript", "component-based application UI"],
      ["HTML + CSS", "semantic and responsive structure"],
      ["Tailwind CSS", "consistent interface implementation"],
    ],
    proof: "This React portfolio · full-stack builds",
  },
  {
    icon: "server-cog",
    area: "Backend & APIs",
    title: "Backend Services & APIs",
    description:
      "I structure server-side logic around explicit REST contracts, validation, authentication and predictable error handling.",
    tools: [
      ["Node.js", "server runtime and application logic"],
      ["Express", "routing, middleware and API boundaries"],
      ["REST + Postman", "contracts and request verification"],
    ],
    proof: "Node.js API work · end-to-end application flows",
  },
  {
    icon: "database-zap",
    area: "Data & integration",
    title: "Relational Data & Integrations",
    description:
      "I model relational data, implement CRUD operations and connect application services to databases and external APIs.",
    tools: [
      ["MySQL", "relational schemas and application queries"],
      ["PostgreSQL / Supabase", "managed persistence and data flows"],
      ["External APIs", "AI and third-party integrations"],
    ],
    proof: "MoneyBoys data work · service integrations",
  },
  {
    icon: "git-branch",
    area: "Delivery & collaboration",
    title: "Delivery & Collaboration",
    description:
      "I keep work modular, document system boundaries and use repository workflows so teammates can review changes with shared context.",
    tools: [
      ["Git + GitHub", "branching and reviewable history"],
      ["Vite", "fast web development and production builds"],
      ["CI + static analysis", "repeatable repository checks"],
    ],
    proof: "This deployed portfolio · public repositories",
  },
];

export default function Skills() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--ink)] py-[var(--section-space)] text-white dark:bg-[linear-gradient(145deg,#07101c,#111b29)]"
      id="stack"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-[var(--container)] px-8 md:px-16">
        <header
          className="section-heading mb-[clamp(2.25rem,4vw,3.5rem)] text-center"
          data-reveal
        >
          <div className="section-badge inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-base leading-none font-semibold uppercase">
            <span aria-hidden="true">✦</span>
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-title"
            className="mt-6 text-[clamp(2.6rem,3.4vw,3.35rem)] leading-tight font-bold tracking-[-0.035em]"
          >
            Full-stack Toolkit
          </h2>
          <p className="mx-auto mt-5 max-w-[52rem] text-lg leading-[1.8] text-[#7780a1]">
            Technologies and practices I use across frontend, backend, data and
            delivery.
          </p>
        </header>

        <div className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
          {capabilities.map(
            ({ icon, area, title, description, tools, proof }, index) => (
              <article
                className="capability-card flex min-w-0 flex-col bg-[#09121f] p-[clamp(1.75rem,3vw,2.75rem)]"
                key={area}
                data-reveal
                style={{ "--card-index": index }}
              >
                <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <span
                    className="capability-icon grid size-[3.25rem] shrink-0 place-items-center rounded-2xl border border-[rgba(var(--brand-rgb),0.35)] bg-[rgba(var(--brand-rgb),0.12)] text-accent"
                    aria-hidden="true"
                  >
                    <Icon name={icon} className="size-6" />
                  </span>
                  <div>
                    <small className="font-mono text-[0.65rem] tracking-[0.1em] text-brand uppercase">
                      {area}
                    </small>
                    <h3 className="mt-1 max-w-[29rem] text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.35] font-bold">
                      {title}
                    </h3>
                  </div>
                </header>
                <p className="mt-5 max-w-[39rem] text-[0.9rem] leading-[1.7] text-[#9ba5c0]">
                  {description}
                </p>
                <ul
                  className="mt-[1.4rem] grid gap-[0.65rem]"
                  aria-label={`${area} tools and their purpose`}
                >
                  {tools.map(([tool, purpose]) => (
                    <li
                      key={tool}
                      className="grid grid-cols-[minmax(8.5rem,0.42fr)_minmax(0,1fr)] gap-4 border-t border-white/10 pt-[0.65rem] text-[0.78rem] max-[479px]:grid-cols-1 max-[479px]:gap-1"
                    >
                      <strong className="text-[#eef1f8]">{tool}</strong>
                      <span className="text-[#828da9]">{purpose}</span>
                    </li>
                  ))}
                </ul>
                <footer className="mt-[1.4rem] grid gap-1 border-t border-white/10 pt-4">
                  <span className="font-mono text-[0.65rem] tracking-[0.1em] text-brand">
                    PROJECT PROOF
                  </span>
                  <strong className="text-[0.78rem] leading-relaxed font-semibold text-[#cdd4e5]">
                    {proof}
                  </strong>
                </footer>
              </article>
            ),
          )}
        </div>

        <div
          className="grid gap-2 border border-t-0 border-white/15 bg-white/[0.035] px-6 py-5 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8"
          data-reveal
        >
          <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.1em] text-accent">
            CROSS-PLATFORM FOUNDATION
          </span>
          <p className="max-w-[64rem] text-[0.8rem] leading-[1.65] text-[#9ba5c0]">
            Work with Flutter, BLoC/Cubit, Supabase, camera and realtime
            integrations gives me a broader product perspective when designing
            state, data flows and failure handling across applications.
          </p>
        </div>
      </div>
    </section>
  );
}
