import Icon from "../ui/Icon";
import ProjectTags from "../ui/ProjectTags";

export default function SkyTonightProject() {
  return (
    <article className="project-panel" data-project="sky-tonight" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-blue">Sky Tonight</p>
          <ProjectTags items={["Team Project", "Astronomy App"]} />
        </div>
        <div className="project-view is-visible">
          <h3>Plan what is visible in the night sky.</h3>
          <p>
            I worked on a Flutter dashboard that combines location, time and
            catalog-backed calculations to surface relevant celestial objects
            for an observing session.
          </p>
        </div>
        <dl className="technical-meta project-evidence">
          <div>
            <dt>Contribution</dt>
            <dd>Dashboard · location flows · data services · sorting</dd>
          </div>
          <div>
            <dt>Engineering focus</dt>
            <dd>
              Derive the visible list from location, time and catalog data
            </dd>
          </div>
          <div>
            <dt>Tool roles</dt>
            <dd>Flutter for UI · HTTP for data · local storage for cache</dd>
          </div>
          <div>
            <dt>Project context</dt>
            <dd>Team repository · interface shown as visual reference</dd>
          </div>
        </dl>
        <div
          className="project-system-map"
          aria-label="Sky Tonight engineering layers"
        >
          <span className="project-map-label">SYSTEM MAP</span>
          <div className="project-layer-flow">
            <span>
              <Icon name="map-pin" />
              <small>INPUT</small>
              <strong>Location &amp; time</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="binary" />
              <small>DATA LOGIC</small>
              <strong>Visibility services</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="telescope" />
              <small>EXPERIENCE</small>
              <strong>Visible Tonight</strong>
            </span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="button button-project"
            href="https://github.com/freeaiutils/Mobile.Sky-Tonight/tree/develop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Repository Link</span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
      <div className="project-media project-media-appstore project-media-sky">
        <div className="appstore-shot-stack">
          <img
            src="assets/images/projects/sky-appstore-01.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Sky Tonight UI reference showing an augmented sky map"
          />
          <img
            src="assets/images/projects/sky-appstore-02.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Sky Tonight UI reference showing planet search"
          />
          <img
            src="assets/images/projects/sky-appstore-03.png"
            width={783}
            height={1392}
            loading="lazy"
            alt="Sky Tonight UI reference showing satellite passes"
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
