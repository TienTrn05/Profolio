import Icon from "../ui/Icon";
export default function FlutterTestingCard({ hidden }) {
  return (
    <article
      className="building-card"
      data-learning-slide
      aria-roledescription="slide"
      aria-label="2 of 5"
      aria-hidden={hidden}
    >
      <div className="building-visual building-visual-two" aria-hidden="true">
        <Icon name="flask-conical" />
        <span>UNIT</span>
        <span>WIDGET</span>
        <span>BLOC</span>
      </div>
      <div className="building-body">
        <div>
          <span className="status-tag status-exploring">Practicing</span>
          <span className="building-meta">QUALITY / 02</span>
        </div>
        <p className="building-eyebrow">Flutter quality</p>
        <h3>Testing behavior, not only screens</h3>
        <p>
          I’m practicing unit and widget tests for validation, Cubit/BLoC state
          changes and service failures to make mobile flows easier to trust and
          maintain.
        </p>
        <ul className="learning-topics" aria-label="Topics">
          <li>Unit tests</li>
          <li>Widget tests</li>
          <li>BLoC states</li>
        </ul>
        <a
          className="learning-link"
          href="https://docs.flutter.dev/testing/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Open Flutter testing guide</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
