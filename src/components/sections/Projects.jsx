import Icon from "../ui/Icon";
import MoneyBoysProject from "../projects/MoneyBoysProject";
import TeleprompterProject from "../projects/TeleprompterProject";
import SkyTonightProject from "../projects/SkyTonightProject";

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section
      className="section section-work"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="container">
        <header className="section-heading section-heading-center" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Selected Work</span>
          </div>
          <h2 id="work-title">Selected project work</h2>
        </header>
        <div className="project-list">
          <MoneyBoysProject onOpenCaseStudy={onOpenCaseStudy} />
          <TeleprompterProject />
          <SkyTonightProject />
        </div>
        <div className="work-footer" data-reveal>
          <a
            className="button button-dark"
            href="https://github.com/TienTrn05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All Projects</span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
