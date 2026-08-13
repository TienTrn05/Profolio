import Icon from "../ui/Icon";
import { useState } from "react";

export default function MoneyBoysProject({ onOpenCaseStudy }) {
  const [activeView, setActiveView] = useState("product");
  return (
    <article className="project-panel" data-project="moneyboys" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-yellow">MoneyBoys</p>
          <span className="project-status">
            <span />
            <span>Public Team Repository</span>
          </span>
        </div>
        <div
          className="view-switch"
          role="tablist"
          aria-label="MoneyBoys project view"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeView === "product"}
            onClick={() => setActiveView("product")}
          >
            Product View
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeView === "technical"}
            onClick={() => setActiveView("technical")}
          >
            Technical View
          </button>
        </div>
        <div
          className={`project-view${activeView === "product" ? " is-visible" : ""}`}
          role="tabpanel"
          hidden={activeView !== "product"}
        >
          <h3>Track spending and budgets in one finance app.</h3>
          <p>
            A team-built Flutter app for recording expenses, managing budgets,
            reviewing spending charts and requesting Gemini-supported guidance,
            with finance data stored in Supabase.
          </p>
          <ul className="feature-chips">
            <li>Expense tracking</li>
            <li>Budget planning</li>
            <li>Spending insights</li>
          </ul>
        </div>
        <div
          className={`project-view${activeView === "technical" ? " is-visible" : ""}`}
          role="tabpanel"
          hidden={activeView !== "technical"}
        >
          <h3>Feature modules backed by Supabase services.</h3>
          <p>
            Flutter screens use Cubit/BLoC where integrated and dedicated
            services for authentication, spending, budgets, categories and
            reports. Supabase provides PostgreSQL-backed persistence, FL Chart
            visualizes spending and Gemini supports optional financial guidance.
          </p>
          <dl className="technical-meta">
            <div>
              <dt>Contribution</dt>
              <dd>Auth · Supabase CRUD · finance data services</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Flutter · Supabase · FL Chart · Gemini</dd>
            </div>
          </dl>
        </div>
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
