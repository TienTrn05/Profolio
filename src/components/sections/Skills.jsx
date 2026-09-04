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
      className="section section-services section-skills-compact"
      id="stack"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <header
          className="section-heading section-heading-center section-heading-light"
          data-reveal
        >
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 id="skills-title">Full-stack Toolkit</h2>
          <p>
            Technologies and practices I use across frontend, backend, data and
            delivery.
          </p>
        </header>

        <div className="capability-grid">
          {capabilities.map(
            ({ icon, area, title, description, tools, proof }, index) => (
              <article
                className="capability-card"
                key={area}
                data-reveal
                style={{ "--card-index": index }}
              >
                <header>
                  <span className="capability-icon" aria-hidden="true">
                    <Icon name={icon} />
                  </span>
                  <div>
                    <small>{area}</small>
                    <h3>{title}</h3>
                  </div>
                </header>
                <p>{description}</p>
                <ul aria-label={`${area} tools and their purpose`}>
                  {tools.map(([tool, purpose]) => (
                    <li key={tool}>
                      <strong>{tool}</strong>
                      <span>{purpose}</span>
                    </li>
                  ))}
                </ul>
                <footer>
                  <span>PROJECT PROOF</span>
                  <strong>{proof}</strong>
                </footer>
              </article>
            ),
          )}
        </div>

        <div className="capability-context" data-reveal>
          <span>CROSS-PLATFORM FOUNDATION</span>
          <p>
            Work with Flutter, BLoC/Cubit, Supabase, camera and realtime
            integrations gives me a broader product perspective when designing
            state, data flows and failure handling across applications.
          </p>
        </div>
      </div>
    </section>
  );
}
