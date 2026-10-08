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
      className="relative overflow-hidden bg-[var(--ink)] py-[clamp(3.5rem,5vw,5.5rem)] text-white dark:bg-[linear-gradient(145deg,#07101c,#111b29)]"
      id="stack"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-[var(--container)] px-6 md:px-12 lg:px-16">
        <header
          className="section-heading mb-8 text-center md:mb-12"
          data-reveal
        >
          <div className="section-badge inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm leading-none font-semibold uppercase">
            <span aria-hidden="true">✦</span>
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-title"
            className="mt-4 text-[clamp(2.2rem,3vw,3rem)] leading-tight font-bold tracking-[-0.035em]"
          >
            Full-stack Toolkit
          </h2>
          <p className="mx-auto mt-3 max-w-[48rem] text-base leading-relaxed text-[#7780a1] md:text-lg">
            Technologies and practices I use across frontend, backend, data and
            delivery.
          </p>
        </header>

        <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(
            ({ icon, area, title, description, tools, proof }, index) => (
              <article
                className="capability-card flex min-w-0 flex-col bg-[#09121f] p-5 xl:p-6"
                key={area}
                data-reveal
                style={{ "--card-index": index }}
              >
                <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3.5">
                  <span
                    className="capability-icon grid size-11 shrink-0 place-items-center rounded-xl border border-[rgba(var(--brand-rgb),0.35)] bg-[rgba(var(--brand-rgb),0.12)] text-accent"
                    aria-hidden="true"
                  >
                    <Icon name={icon} className="size-5" />
                  </span>
                  <div>
                    <small className="font-mono text-[0.62rem] tracking-[0.1em] text-brand uppercase">
                      {area}
                    </small>
                    <h3 className="mt-0.5 text-base font-bold leading-snug xl:text-[1.125rem]">
                      {title}
                    </h3>
                  </div>
                </header>
                <p className="mt-3.5 text-[0.8rem] leading-[1.65] text-[#9ba5c0]">
                  {description}
                </p>
                <ul
                  className="mt-4 flex flex-1 flex-col justify-end gap-2"
                  aria-label={`${area} tools and their purpose`}
                >
                  {tools.map(([tool, purpose]) => (
                    <li
                      key={tool}
                      className="border-t border-white/10 pt-2 text-[0.75rem]"
                    >
                      <strong className="block text-[#eef1f8]">{tool}</strong>
                      <span className="mt-0.5 block text-[0.72rem] leading-snug text-[#828da9]">
                        {purpose}
                      </span>
                    </li>
                  ))}
                </ul>
                <footer className="mt-4 grid gap-1 border-t border-white/10 pt-3">
                  <span className="font-mono text-[0.6rem] tracking-[0.1em] text-brand">
                    PROJECT PROOF
                  </span>
                  <strong className="text-[0.74rem] leading-relaxed font-semibold text-[#cdd4e5]">
                    {proof}
                  </strong>
                </footer>
              </article>
            ),
          )}
        </div>

        <div
          className="grid gap-2 border border-t-0 border-white/15 bg-white/[0.035] px-5 py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6"
          data-reveal
        >
          <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.1em] text-accent">
            CROSS-PLATFORM FOUNDATION
          </span>
          <p className="max-w-[64rem] text-[0.78rem] leading-[1.6] text-[#9ba5c0]">
            Work with Flutter, BLoC/Cubit, Supabase, camera and realtime
            integrations gives me a broader product perspective when designing
            state, data flows and failure handling across applications.
          </p>
        </div>
      </div>
    </section>
  );
}
