import Icon from "../ui/Icon";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-eyebrow">Hi! I'm Trần Ngọc Tiến</p>
          <h1 id="hero-title">Full-stack Developer</h1>
          <p className="hero-description">
            I build full-stack student products—from Flutter and React
            interfaces to Node.js REST APIs, authentication and SQL data. I'm
            looking for an internship where I can contribute and grow across the
            complete product flow.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="assets/Tranngoctien_resume.pdf"
              download
            >
              <Icon name="file-down" />
              <span>Download CV</span>
            </a>
            <a className="button button-outline" href="#work">
              <Icon name="arrow-down-right" />
              <span>Explore My Work</span>
            </a>
          </div>
          <aside
            className="candidate-summary"
            aria-label="Candidate availability and role preferences"
          >
            <div className="candidate-status">
              <span className="candidate-status-dot" aria-hidden="true" />
              <span>Open to internships </span>
            </div>
            <div className="candidate-details">
              <div className="candidate-detail">
                <Icon name="graduation-cap" />
                <div>
                  <span>Current level</span>
                  <strong>Fourth-year IT student</strong>
                </div>
              </div>
              <div className="candidate-detail">
                <Icon name="monitor-smartphone" />
                <div>
                  <span>Frontend</span>
                  <strong>React · Flutter</strong>
                </div>
              </div>
              <div className="candidate-detail">
                <Icon name="server" />
                <div>
                  <span>Backend &amp; data</span>
                  <strong>Node.js · REST APIs · SQL</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="hero-media" data-hero-media data-reveal>
          <img
            src="assets/images/Tien.jpg"
            width={1122}
            height={1402}
            alt="Portrait of Trần Ngọc Tiến"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
