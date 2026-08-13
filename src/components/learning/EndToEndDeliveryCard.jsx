import Icon from "../ui/Icon";
export default function EndToEndDeliveryCard({ hidden }) {
  return (
    <article
      className="building-card"
      data-learning-slide
      aria-roledescription="slide"
      aria-label="3 of 5"
      aria-hidden={hidden}
    >
      <div className="building-visual building-visual-three" aria-hidden="true">
        <Icon name="waypoints" />
        <span>UI</span>
        <span>CONTRACT</span>
        <span>DEPLOY</span>
      </div>
      <div className="building-body">
        <div>
          <span className="status-tag status-preparing">Exploring</span>
          <span className="building-meta">DELIVERY / 03</span>
        </div>
        <p className="building-eyebrow">End-to-end delivery</p>
        <h3>Connecting a complete full-stack flow</h3>
        <p>
          I’m learning to define API contracts, handle loading and error states,
          deploy a small service and document the decisions behind the finished
          flow.
        </p>
        <ul className="learning-topics" aria-label="Topics">
          <li>API contracts</li>
          <li>Error states</li>
          <li>Deployment</li>
        </ul>
        <a
          className="learning-link"
          href="https://expressjs.com/en/guide/routing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Study Express routing</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
