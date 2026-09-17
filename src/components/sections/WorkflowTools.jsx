import {
  SiFigma,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiSupabase,
  SiVite,
} from "react-icons/si";

const workflowTools = [
  {
    name: "GitHub",
    role: "Code history & review",
    color: "var(--brand-icon-neutral)",
    icon: SiGithub,
  },
  {
    name: "Postman",
    role: "Request & response checks",
    color: "#ff6c37",
    icon: SiPostman,
  },
  {
    name: "Figma",
    role: "Interface handoff",
    color: "#f24e1e",
    icon: SiFigma,
  },
  {
    name: "Vite",
    role: "Web builds",
    color: "#646cff",
    icon: SiVite,
  },
  {
    name: "Supabase",
    role: "MoneyBoys data",
    color: "#3ecf8e",
    icon: SiSupabase,
  },
  {
    name: "Firebase",
    role: "Application services",
    color: "#e69a00",
    icon: SiFirebase,
  },
];

function ToolIcon({ icon: BrandIcon, color }) {
  return <BrandIcon aria-hidden="true" color={color} />;
}

function ToolSet({ duplicate = false }) {
  return (
    <ul className="workflow-tool-set" aria-hidden={duplicate || undefined}>
      {workflowTools.map(({ name, role, icon, color }) => (
        <li
          className="workflow-tool"
          key={name}
          style={{ "--tool-color": color }}
        >
          <span className="workflow-tool-icon">
            <ToolIcon icon={icon} color={color} />
          </span>
          <span>
            <strong>{name}</strong>
            <small>{role}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function WorkflowTools() {
  return (
    <section
      className="section section-workflow-tools"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className="container">
        <header className="section-heading section-heading-center" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>How I Build</span>
          </div>
          <h2 id="workflow-title">Development Workflow</h2>
          <p>
            Tools I use to turn interface decisions, API contracts and project
            data into reviewable web builds.
          </p>
        </header>
      </div>

      <div className="workflow-marquee" aria-label="Development tools">
        <div className="workflow-marquee-track">
          <ToolSet />
          <ToolSet duplicate />
        </div>
      </div>
    </section>
  );
}
