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
          <h2 id="skills-title">
            A full-stack path built on real Flutter project experience
          </h2>
          <p>
            Flutter is where I have shipped projects. React.js and
            TypeScript/JavaScript are my frontend direction; Node.js,
            Express.js, RESTful APIs and MySQL are my backend direction.
          </p>
        </header>
        <div className="skill-console" data-reveal>
          <div className="skill-console-topline">
            <span>FULL-STACK TOOLKIT / 2026</span>
            <p>
              <Icon name="circle-check" /> Project experience + active learning
            </p>
          </div>
          <div className="skill-core-grid">
            <article className="skill-core skill-core-primary">
              <header>
                <span className="skill-core-icon" aria-hidden="true">
                  <Icon name="monitor-smartphone" />
                </span>
                <div>
                  <small>FRONTEND</small>
                  <h3>Flutter &amp; React.js</h3>
                </div>
              </header>
              <p>
                Flutter is my project-backed strength. I&apos;m extending that
                interface experience into React.js web applications.
              </p>
              <ul
                className="skill-tags"
                aria-label="Interface and mobile tools"
              >
                <li>Flutter</li>
                <li>Dart</li>
                <li>React.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
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
                  <small>BACKEND</small>
                  <h3>Node.js &amp; Express.js</h3>
                </div>
              </header>
              <p>
                My backend learning focuses on REST APIs, authentication and
                persistent data for complete web product flows.
              </p>
              <ul className="skill-tags" aria-label="Backend and data tools">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>MySQL</li>
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
                <Icon name="git-branch" /> Git &amp; GitHub
              </span>
              <span>
                <Icon name="braces" /> Postman
              </span>
              <span>
                <Icon name="list-checks" /> Trello
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
