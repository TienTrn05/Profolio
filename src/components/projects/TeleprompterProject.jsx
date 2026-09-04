import Icon from "../ui/Icon";
import ProjectTags from "../ui/ProjectTags";

export default function TeleprompterProject() {
  return (
    <article className="project-panel" data-project="teleprompter" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-purple">
            Mobile Teleprompter
          </p>
          <ProjectTags items={["Team Project", "In Development"]} />
        </div>
        <div className="project-view is-visible">
          <h3>One mobile workflow from script to finished video.</h3>
          <p>
            I built script management, AI-assisted writing and an on-device
            editing workflow so creators can prepare, record and refine content
            without leaving the app.
          </p>
        </div>
        <dl className="technical-meta project-evidence">
          <div>
            <dt>Contribution</dt>
            <dd>Script library · AI writing · mobile media editing</dd>
          </div>
          <div>
            <dt>Engineering focus</dt>
            <dd>Keep core writing and project state local-first</dd>
          </div>
          <div>
            <dt>Tool roles</dt>
            <dd>BLoC for state · Camera for capture · FFmpeg for transforms</dd>
          </div>
          <div>
            <dt>Project context</dt>
            <dd>Team project · repository private · UI shown as reference</dd>
          </div>
        </dl>
        <div
          className="project-system-map"
          aria-label="Mobile Teleprompter engineering layers"
        >
          <span className="project-map-label">SYSTEM MAP</span>
          <div className="project-layer-flow">
            <span>
              <Icon name="smartphone" />
              <small>EXPERIENCE</small>
              <strong>Write &amp; edit</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="boxes" />
              <small>APPLICATION</small>
              <strong>Flutter BLoC</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="cpu" />
              <small>PLATFORM</small>
              <strong>Camera · FFmpeg</strong>
            </span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="button button-project"
            href="https://github.com/mxtruongplayboy/Mobile.Teleprompter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Private GitHub</span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
      <div className="project-media project-media-appstore project-media-teleprompter">
        <div className="appstore-shot-stack">
          <img
            src="assets/images/projects/teleprompter-appstore-01.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Teleprompter UI reference showing floating scripts"
          />
          <img
            src="assets/images/projects/teleprompter-appstore-02.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Teleprompter UI reference showing script controls"
          />
          <img
            src="assets/images/projects/teleprompter-appstore-03.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Teleprompter UI reference showing live video prompting"
          />
        </div>
        <div className="repository-evidence-label">
          <Icon name="info" />
          <span>Visual reference only · Not a repository build</span>
        </div>
      </div>
    </article>
  );
}
