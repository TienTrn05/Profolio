import Icon from "../ui/Icon";

const capabilities = [
  {
    icon: "panels-top-left",
    label: "Web frontend",
    tools: "React · TypeScript · Tailwind CSS",
  },
  {
    icon: "server",
    label: "Backend",
    tools: "Node.js · Express · REST APIs",
  },
  {
    icon: "database-zap",
    label: "Data & delivery",
    tools: "MySQL · PostgreSQL · Git",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-eyebrow">
            <span aria-hidden="true" />
            Open to full-stack internships
          </p>

          <h1 id="hero-title">
            Full-stack
            <span> Developer.</span>
          </h1>

          <p className="hero-description">
            I build end-to-end web applications with React, TypeScript, Node.js,
            Express and SQL, supported by hands-on experience delivering
            stateful interfaces, data integrations and realtime product flows.
          </p>

          <div className="hero-capabilities" aria-label="Core capabilities">
            {capabilities.map(({ icon, label, tools }) => (
              <article key={label}>
                <Icon name={icon} />
                <div>
                  <small>{label}</small>
                  <strong>{tools}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              <span>View Projects</span>
              <Icon name="arrow-down-right" />
            </a>
            <a
              className="button button-outline"
              href="assets/TranNgocTien_Resume.pdf"
              download
            >
              <Icon name="file-down" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="hero-media" data-hero-media data-reveal>
          <img
            src="assets/images/Tien.jpg"
            width={1122}
            height={1402}
            alt="Portrait of Trần Ngọc Tiến"
            fetchPriority="high"
          />
          <div className="hero-gpa-card">
            <span className="hero-gpa-icon" aria-hidden="true">
              <Icon name="graduation-cap" />
            </span>
            <div>
              <small>ACADEMIC RESULT</small>
              <strong>3.8 / 4.0</strong>
              <span>GPA</span>
            </div>
          </div>
          <div className="hero-identity-card">
            <span>Trần Ngọc Tiến</span>
            <strong>Danang University of Science and Technology</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
