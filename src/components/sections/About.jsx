import Icon from "../ui/Icon";
export default function About() {
  return (
    <section
      className="section section-about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container" data-reveal>
        <div className="section-badge">
          <span aria-hidden="true">✦</span>
          <span>About Me</span>
        </div>
        <h2 className="about-title" id="about-title">
          Hi! I'm Trần Ngọc Tiến
        </h2>
        <p className="about-copy">
          I'm a fourth-year Information Technology student at Danang University
          of Science and Technology. Through coursework and self-directed
          projects, I build Flutter and React interfaces and connect them to
          Node.js services, REST APIs and SQL-backed data. Flutter remains my
          strongest practical area, while Node.js is my backend focus as I
          deepen my system-design foundations.
        </p>
        <dl className="about-facts">
          <div>
            <dt>Education</dt>
            <dd>Fourth-year IT student</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Full-stack</dd>
          </div>
          <div>
            <dt>Strongest area</dt>
            <dd>Flutter &amp; mobile UI</dd>
          </div>
          <div>
            <dt>Backend focus</dt>
            <dd>Node.js &amp; REST APIs</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Da Nang, Vietnam</dd>
          </div>
          <div>
            <dt>Social Media</dt>
            <dd className="social-list">
              <a
                href="https://github.com/TienTrn05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/tr%E1%BA%A7n-nin-7b0bba355/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/nin.tran0205"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
