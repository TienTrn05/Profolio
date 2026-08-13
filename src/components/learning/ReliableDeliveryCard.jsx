import Icon from "../ui/Icon";
export default function ReliableDeliveryCard({ hidden }) {
  return (
    <article
      className="building-card"
      data-learning-slide
      aria-roledescription="slide"
      aria-label="5 of 5"
      aria-hidden={hidden}
    >
      <div className="building-visual building-visual-five" aria-hidden="true">
        <Icon name="workflow" />
        <span>PUSH</span>
        <span>CHECK</span>
        <span>SHIP</span>
      </div>
      <div className="building-body">
        <div>
          <span className="status-tag status-delivery">Queued</span>
          <span className="building-meta">CI/CD / 05</span>
        </div>
        <p className="building-eyebrow">Reliable delivery</p>
        <h3>Automating checks before deployment</h3>
        <p>
          I’m learning how a simple CI workflow can run checks on every change
          and make small projects safer to review, merge and release.
        </p>
        <ul className="learning-topics" aria-label="Topics">
          <li>Workflows</li>
          <li>Automated checks</li>
          <li>Deployment</li>
        </ul>
        <a
          className="learning-link"
          href="https://docs.github.com/en/actions/get-started/understand-github-actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Learn GitHub Actions</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
