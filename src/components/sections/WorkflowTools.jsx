import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGooglemeet,
  SiNotion,
  SiNpm,
  SiOpenai,
  SiPostman,
  SiSupabase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const workflowTools = [
  {
    name: "Visual Studio Code",
    role: "Code & debugging",
    color: "#007acc",
    icon: VscVscode,
  },
  {
    name: "GitHub",
    role: "Version & review",
    color: "var(--brand-icon-neutral)",
    icon: SiGithub,
  },
  {
    name: "Postman",
    role: "API checks",
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
    name: "Notion",
    role: "Notes & planning",
    color: "var(--brand-icon-neutral)",
    icon: SiNotion,
  },
  {
    name: "Google Meet",
    role: "Team communication",
    color: "#00897b",
    icon: SiGooglemeet,
  },
  {
    name: "Docker",
    role: "Containers",
    color: "#2496ed",
    icon: SiDocker,
  },
  {
    name: "ChatGPT",
    role: "AI assistance",
    color: "#10a37f",
    icon: SiOpenai,
  },
  {
    name: "Vite",
    role: "Local builds",
    color: "#646cff",
    icon: SiVite,
  },
  {
    name: "npm",
    role: "Dependencies",
    color: "#cb3837",
    icon: SiNpm,
  },
  {
    name: "Supabase",
    role: "Managed data",
    color: "#3ecf8e",
    icon: SiSupabase,
  },
  {
    name: "Vercel",
    role: "Web delivery",
    color: "var(--brand-icon-neutral)",
    icon: SiVercel,
  },
];

function ToolIcon({ icon: BrandIcon }) {
  return <BrandIcon aria-hidden="true" />;
}

function ToolSet({ duplicate = false }) {
  return (
    <ul className="workflow-tool-set" aria-hidden={duplicate || undefined}>
      {workflowTools.map(({ name, role, icon, color }) => (
        <li className="workflow-tool" key={name}>
          <span className="workflow-tool-icon" style={{ color }}>
            <ToolIcon icon={icon} />
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
          <h2 id="workflow-title">Tools Behind the Work</h2>
          <p>
            The everyday workflow I use to turn interface decisions and API
            contracts into reviewable, deployable builds.
          </p>
        </header>
      </div>

      <div
        className="workflow-marquee"
        aria-label="Tools used in my development workflow"
        data-reveal
      >
        <div className="workflow-marquee-track">
          <ToolSet />
          <ToolSet duplicate />
        </div>
      </div>
    </section>
  );
}
