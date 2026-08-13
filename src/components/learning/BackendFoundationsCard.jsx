import Icon from "../ui/Icon";
export default function BackendFoundationsCard({ hidden }) {
  return (
    <article
      className="building-card"
      data-learning-slide
      aria-roledescription="slide"
      aria-label="1 of 5"
      aria-hidden={hidden}
    >
      <div className="building-visual building-visual-one" aria-hidden="true">
        <Icon name="server-cog" />
        <span>NODE.JS</span>
        <span>REST</span>
        <span>SQL</span>
      </div>
      <div className="building-body">
        <div>
          <span className="status-tag status-active">Learning now</span>
          <span className="building-meta">BACKEND / 01</span>
        </div>
        <p className="building-eyebrow">Backend foundations</p>
        <h3>Building APIs beyond managed services</h3>
        <p>
          I’m learning to design a small Node.js REST API with validation,
          authentication and PostgreSQL so I understand the full
          request-to-database flow.
        </p>
        <ul className="learning-topics" aria-label="Topics">
          <li>Node.js</li>
          <li>REST APIs</li>
          <li>PostgreSQL</li>
        </ul>
        <a
          className="learning-link"
          href="https://nodejs.org/learn/getting-started/introduction-to-nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Learn with Node.js</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
