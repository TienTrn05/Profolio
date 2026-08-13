import Icon from "../ui/Icon";
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
            <span>Skills &amp; Focus</span>
          </div>
          <h2 id="skills-title">A focused toolkit for complete products</h2>
          <p>
            I build usable interfaces, connect them to Node.js services and keep
            the flow understandable from screen to database.
          </p>
        </header>
        <div className="skill-console" data-reveal>
          <div className="skill-console-topline">
            <span>CORE TOOLKIT / 2026</span>
            <p>
              <Icon name="circle-check" /> Project-backed practice
            </p>
          </div>
          <div className="skill-core-grid">
            <article className="skill-core skill-core-primary">
              <header>
                <span className="skill-core-icon" aria-hidden="true">
                  <Icon name="monitor-smartphone" />
                </span>
                <div>
                  <small>CURRENT STRENGTH</small>
                  <h3>Interface &amp; Mobile</h3>
                </div>
              </header>
              <p>
                Responsive screens and stateful product flows built around real
                user tasks.
              </p>
              <ul
                className="skill-tags"
                aria-label="Interface and mobile tools"
              >
                <li>Flutter</li>
                <li>React</li>
                <li>Dart</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="skill-proof">
                <span>USED IN</span>
                <p>Teleprompter app · Portfolio UI · Sky Tonight dashboard</p>
              </div>
            </article>
            <article className="skill-core skill-core-secondary">
              <header>
                <span className="skill-core-icon" aria-hidden="true">
                  <Icon name="database-zap" />
                </span>
                <div>
                  <small>BACKEND FOCUS</small>
                  <h3>Node.js &amp; Data</h3>
                </div>
              </header>
              <p>
                REST services, authentication and persistent data that support
                the product experience.
              </p>
              <ul className="skill-tags" aria-label="Backend and data tools">
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>SQL</li>
                <li>Supabase</li>
                <li>Gemini API</li>
              </ul>
              <div className="skill-proof">
                <span>PRACTICED THROUGH</span>
                <p>Node.js learning APIs · MoneyBoys data · Auth flows</p>
              </div>
            </article>
          </div>
          <div
            className="skill-product-flow"
            aria-label="Product development flow"
          >
            <div>
              <Icon name="mouse-pointer-2" />
              <span>
                <small>01</small>User action
              </span>
            </div>
            <Icon name="arrow-right" />
            <div>
              <Icon name="panels-top-left" />
              <span>
                <small>02</small>Interface state
              </span>
            </div>
            <Icon name="arrow-right" />
            <div>
              <Icon name="braces" />
              <span>
                <small>03</small>Service contract
              </span>
            </div>
            <Icon name="arrow-right" />
            <div>
              <Icon name="database" />
              <span>
                <small>04</small>Data &amp; response
              </span>
            </div>
          </div>
          <div className="skill-practice">
            <p>
              <span>HOW I WORK</span>
              Build one usable flow, validate its behavior, then document the
              decisions and limits.
            </p>
            <div>
              <span>
                <Icon name="git-branch" /> Git workflow
              </span>
              <span>
                <Icon name="boxes" /> BLoC / State
              </span>
              <span>
                <Icon name="file-check-2" /> Documentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
