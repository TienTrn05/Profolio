import Icon from "../ui/Icon";
export default function RelationalDataCard({ hidden }) {
  return (
    <article
      className="building-card"
      data-learning-slide
      aria-roledescription="slide"
      aria-label="4 of 5"
      aria-hidden={hidden}
    >
      <div className="building-visual building-visual-four" aria-hidden="true">
        <Icon name="database" />
        <span>TABLES</span>
        <span>JOIN</span>
        <span>INDEX</span>
      </div>
      <div className="building-body">
        <div>
          <span className="status-tag status-database">Next</span>
          <span className="building-meta">DATA / 04</span>
        </div>
        <p className="building-eyebrow">Relational data</p>
        <h3>Designing data before writing queries</h3>
        <p>
          I’m strengthening SQL fundamentals, relationships, constraints and
          indexes so application data stays clear, consistent and easier to
          query.
        </p>
        <ul className="learning-topics" aria-label="Topics">
          <li>Relations</li>
          <li>Constraints</li>
          <li>Indexes</li>
        </ul>
        <a
          className="learning-link"
          href="https://www.postgresql.org/docs/current/tutorial.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Follow PostgreSQL tutorial</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
