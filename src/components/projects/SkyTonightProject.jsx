import Icon from "../ui/Icon";
import { useState } from "react";

export default function SkyTonightProject() {
  const [activeView, setActiveView] = useState("product");
  return (
    <article className="project-panel" data-project="sky-tonight" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-blue">Sky Tonight</p>
          <span className="project-status">
            <Icon name="lock-keyhole" />
            <span>Repository Status Unverified</span>
          </span>
        </div>
        <div
          className="view-switch"
          role="tablist"
          aria-label="Sky Tonight project view"
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
          <h3>Plan what is visible in the night sky.</h3>
          <p>
            A Flutter astronomy companion that combines location, date, weather
            and catalog-backed calculations to surface visible stars, planets,
            constellations and deep-sky objects.
          </p>
          <ul className="feature-chips">
            <li>Celestial visibility</li>
            <li>Location selection</li>
            <li>Multi-criteria sorting</li>
          </ul>
        </div>
        <div
          className={`project-view${activeView === "technical" ? " is-visible" : ""}`}
          role="tabpanel"
          hidden={activeView !== "technical"}
        >
          <h3>A location-aware, catalog-driven dashboard.</h3>
          <p>
            Flutter coordinates location and time input with services that load
            bundled catalogs, calculate visibility, call HTTP data sources and
            cache cards locally. A separate iOS SceneKit renderer exists, but is
            not connected to the current default route.
          </p>
          <dl className="technical-meta">
            <div>
              <dt>Contribution</dt>
              <dd>Dashboard · location flows · services · sorting</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Flutter · Dart · HTTP · SharedPreferences</dd>
            </div>
          </dl>
        </div>
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
