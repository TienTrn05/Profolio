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
      className="relative overflow-hidden bg-slate-950 py-[var(--section-space)] text-white"
      id="stack"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-[var(--container)] px-8 md:px-16">
        <header className="mb-14 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-base leading-none font-semibold uppercase">
            <span aria-hidden="true">✦</span>
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-title"
            className="mt-6 text-[clamp(2.6rem,3.4vw,3.35rem)] leading-tight font-bold tracking-[-0.035em]"
          >
            Full-stack Toolkit
          </h2>
          <p className="mx-auto mt-5 max-w-[52rem] text-lg leading-relaxed text-slate-300">
            Technologies and practices I use across frontend, backend, data and
            delivery.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(
            ({ icon, area, title, description, tools, proof }, index) => (
              <article
                className="capability-card flex min-w-0 flex-col rounded-2xl border border-white/15 bg-white/5 p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-white/8"
                key={area}
                data-reveal
                style={{ "--card-index": index }}
              >
                <header className="flex items-center gap-4">
                  <span
                    className="capability-icon grid size-12 shrink-0 place-items-center rounded-xl bg-violet-400/15 text-violet-300"
                    aria-hidden="true"
                  >
                    <Icon name={icon} className="size-6" />
                  </span>
                  <div>
                    <small className="font-mono text-xs tracking-wider text-violet-300 uppercase">
                      {area}
                    </small>
                    <h3 className="mt-1 text-lg leading-tight font-bold">
                      {title}
                    </h3>
                  </div>
                </header>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  {description}
                </p>
                <ul
                  className="mt-5 grid gap-2"
                  aria-label={`${area} tools and their purpose`}
                >
                  {tools.map(([tool, purpose]) => (
                    <li
                      key={tool}
                      className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2.5"
                    >
                      <strong className="block text-base">{tool}</strong>
                      <span className="block text-sm leading-relaxed text-slate-400">
                        {purpose}
                      </span>
                    </li>
                  ))}
                </ul>
                <footer className="mt-auto border-t border-white/10 pt-5">
                  <span className="block font-mono text-[0.65rem] tracking-wider text-violet-300">
                    PROJECT PROOF
                  </span>
                  <strong className="mt-1 block text-sm leading-relaxed text-slate-200">
                    {proof}
                  </strong>
                </footer>
              </article>
            ),
          )}
        </div>

        <div
          className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 md:flex md:items-center md:gap-8"
          data-reveal
        >
          <span className="shrink-0 font-mono text-xs tracking-wider text-violet-300">
            CROSS-PLATFORM FOUNDATION
          </span>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:mt-0">
            Work with Flutter, BLoC/Cubit, Supabase, camera and realtime
            integrations gives me a broader product perspective when designing
            state, data flows and failure handling across applications.
          </p>
        </div>
      </div>
    </section>
  );
}
