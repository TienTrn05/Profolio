import Icon from "../ui/Icon";
import { useState } from "react";

export default function TeleprompterProject() {
  const [activeView, setActiveView] = useState("product");
  return (
    <article className="project-panel" data-project="teleprompter" data-reveal>
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-purple">
            Mobile Teleprompter
          </p>
          <span className="project-status">
            <Icon name="lock-keyhole" />
            <span>Private Team Repository</span>
          </span>
        </div>
        <div
          className="view-switch"
          role="tablist"
          aria-label="Mobile Teleprompter project view"
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
          <h3>Mobile teleprompter and recording studio.</h3>
          <p>
            A Flutter mobile app for organizing scripts, reading with adjustable
            auto-scroll, recording through the device camera and managing
            captured media with a local editing workflow.
          </p>
          <ul className="feature-chips">
            <li>Script library</li>
            <li>Adjustable auto-scroll</li>
            <li>Mobile media editor</li>
          </ul>
        </div>
        <div
          className={`project-view${activeView === "technical" ? " is-visible" : ""}`}
          role="tabpanel"
          hidden={activeView !== "technical"}
        >
          <h3>Feature-based Flutter with local-first storage.</h3>
          <p>
            Flutter feature modules use Cubit state and repositories backed by
            SharedPreferences. Camera plugins handle capture, while FFmpeg
            renders trim, resize, watermark and subtitle edits. AI writing
            exists but requires external proxy configuration.
          </p>
          <dl className="technical-meta">
            <div>
              <dt>Contribution</dt>
              <dd>Script management · AI writing · media editing</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Flutter · BLoC · Camera · FFmpeg</dd>
            </div>
          </dl>
        </div>
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
