import Icon from "../ui/Icon";
import ProjectTags from "../ui/ProjectTags";

export default function MoneyBoysProject({ onOpenCaseStudy }) {
  return (
    <article className="project-panel" data-project="moneyboys" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-yellow">MoneyBoys</p>
          <ProjectTags items={["University Team Project", "Finance App"]} />
        </div>
        <div className="project-view is-visible">
          <h3>A shared data layer for everyday finance decisions.</h3>
          <p>
            In a team Flutter project, I worked on data models and CRUD flows
            that connect transactions, budgets and categories to the product
            experience and its spending insights.
          </p>
        </div>
        <dl className="technical-meta project-evidence">
          <div>
            <dt>Contribution</dt>
            <dd>Finance data models · CRUD operations · database work</dd>
          </div>
          <div>
            <dt>Engineering focus</dt>
            <dd>Separate feature state from reusable finance data services</dd>
          </div>
          <div>
            <dt>Tool roles</dt>
            <dd>Supabase for data · BLoC for state · FL Chart for insights</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>Working team prototype · public repository</dd>
          </div>
        </dl>
        <div
          className="project-system-map"
          aria-label="MoneyBoys engineering layers"
        >
          <span className="project-map-label">SYSTEM MAP</span>
          <div className="project-layer-flow">
            <span>
              <Icon name="layout-dashboard" />
              <small>FRONTEND</small>
              <strong>Finance UI</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="workflow" />
              <small>APPLICATION</small>
              <strong>Cubit &amp; services</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="database-zap" />
              <small>BACKEND</small>
              <strong>Supabase &amp; AI</strong>
            </span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="button button-project"
            href="https://github.com/TienTrn05/ProjectFinalMobile-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View GitHub</span>
            <Icon name="arrow-up-right" />
          </a>
          <button
            className="text-action"
            type="button"
            onClick={onOpenCaseStudy}
          >
            <span>Read Case Study</span>
            <Icon name="plus" />
          </button>
        </div>
      </div>
      <div className="project-media project-media-moneyboys">
        <img
          className="moneyboys-logo"
          src="assets/images/projects/moneyboys-logo.jpg"
          width={1024}
          height={1024}
          loading="lazy"
          alt="Official MoneyBoys logo from the project repository"
          data-fallback="MONEYBOYS"
        />
        <img
          className="moneyboys-runtime-shot"
          src="assets/images/projects/moneyboys-signin.png"
          width={600}
          height={1067}
          loading="lazy"
          alt="MoneyBoys sign-in screen captured from the running Flutter project"
          data-fallback="MONEYBOYS SIGN IN"
        />
        <div className="runtime-capture-label">
          <Icon name="play" />
          <span>Captured from repository build</span>
        </div>
      </div>
    </article>
  );
}
