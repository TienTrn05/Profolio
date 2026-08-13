import Icon from "../ui/Icon";
export default function Principles() {
  return (
    <section
      className="section section-values"
      id="values"
      aria-labelledby="values-title"
    >
      <div className="container values-layout">
        <div className="values-header" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Working Principles</span>
          </div>
          <h2 id="values-title">What you can expect when we work together.</h2>
          <p>
            I keep collaboration clear, delivery dependable and solutions
            grounded in the problem at hand.
          </p>
        </div>
        <div className="value-nodes">
          <article
            className="value-node value-node-friendly"
            data-reveal
            style={{ "--reveal-delay": "100ms" }}
          >
            <div className="value-node-topline">
              <b>01</b>
              <span className="value-icon" aria-hidden="true">
                <Icon name="messages-square" />
              </span>
            </div>
            <div className="value-node-copy">
              <h3>Communicate with clarity</h3>
              <p>
                I share progress, surface questions early and turn feedback into
                concrete next steps.
              </p>
            </div>
            <div className="value-outcome">
              <Icon name="arrow-right" />
              <strong>Shared context, fewer surprises</strong>
            </div>
          </article>
          <article
            className="value-node value-node-disciplined"
            data-reveal
            style={{ "--reveal-delay": "180ms" }}
          >
            <div className="value-node-topline">
              <b>02</b>
              <span className="value-icon" aria-hidden="true">
                <Icon name="list-checks" />
              </span>
            </div>
            <div className="value-node-copy">
              <h3>Follow through</h3>
              <p>
                I take ownership of commitments, work consistently and make
                progress visible from start to finish.
              </p>
            </div>
            <div className="value-outcome">
              <Icon name="arrow-right" />
              <strong>Steady, dependable momentum</strong>
            </div>
          </article>
          <article
            className="value-node value-node-creative"
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
          >
            <div className="value-node-topline">
              <b>03</b>
              <span className="value-icon" aria-hidden="true">
                <Icon name="lightbulb" />
              </span>
            </div>
            <div className="value-node-copy">
              <h3>Solve with intent</h3>
              <p>
                I explore alternatives when they add value, then choose the
                simplest solution that fits the real constraint.
              </p>
            </div>
            <div className="value-outcome">
              <Icon name="arrow-right" />
              <strong>Practical, considered decisions</strong>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
