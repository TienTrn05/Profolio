import { useState } from "react";
import Icon from "../ui/Icon";

export default function HealthMonitorProject({ onOpenCaseStudy }) {
  const [activeView, setActiveView] = useState("product");

  return (
    <article
      className="project-panel"
      data-project="health-monitor"
      data-reveal
    >
      <div className="project-content">
        <div className="project-topline">
          <p className="project-kicker project-kicker-red">
            IoT Health Monitor
          </p>
          <span className="project-status">
            <span />
            <span>Public Repository</span>
          </span>
        </div>
        <div
          className="view-switch"
          role="tablist"
          aria-label="IoT Health Monitor project view"
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
          <h3>Monitor vital signs and respond to falls in real time.</h3>
          <p>
            An IoT health system that collects sensor readings from an ESP32 and
            delivers live health data, fall alerts and historical trends to a
            Flutter dashboard.
          </p>
          <ul className="feature-chips">
            <li>Live health readings</li>
            <li>Fall detection alerts</li>
            <li>Health history</li>
          </ul>
        </div>
        <div
          className={`project-view${activeView === "technical" ? " is-visible" : ""}`}
          role="tabpanel"
          hidden={activeView !== "technical"}
        >
          <h3>Sensor telemetry connected to a realtime mobile dashboard.</h3>
          <p>
            ESP32 firmware owns sensor sampling and MQTT messaging, while the
            Flutter app models incoming health and fall packets, manages live
            state and presents home, alert and history experiences.
          </p>
          <dl className="technical-meta">
            <div>
              <dt>Contribution</dt>
              <dd>Firmware · sensor logic · realtime Flutter UI</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>ESP32 · Arduino · MQTT · Flutter · Provider</dd>
            </div>
          </dl>
        </div>
        <div
          className="project-system-map"
          aria-label="IoT Health Monitor engineering layers"
        >
          <span className="project-map-label">SYSTEM MAP</span>
          <div className="project-layer-flow">
            <span>
              <Icon name="cpu" />
              <small>DEVICE</small>
              <strong>ESP32 sensors</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="radio-tower" />
              <small>TRANSPORT</small>
              <strong>MQTT telemetry</strong>
            </span>
            <Icon name="arrow-right" />
            <span>
              <Icon name="smartphone" />
              <small>EXPERIENCE</small>
              <strong>Flutter dashboard</strong>
            </span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="button button-project"
            href="https://github.com/TienTrn05/Heart-Rate-Monitor-and-Fall-Detection-Device"
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
      <div className="project-media project-media-repository project-media-health">
        <div className="repository-visual">
          <div className="repository-visual-icon">
            <Icon name="radio-tower" />
          </div>
          <small>CONNECTED HEALTH SYSTEM</small>
          <h4>Health telemetry, connected end to end.</h4>
          <div className="repository-path" aria-hidden="true">
            <span>ESP32</span>
            <Icon name="arrow-right" />
            <span>MQTT</span>
            <Icon name="arrow-right" />
            <span>FLUTTER</span>
          </div>
          <p>
            One repository brings the embedded firmware and mobile monitoring
            experience together.
          </p>
        </div>
        <div className="repository-evidence-label">
          <Icon name="github" />
          <span>Architecture verified from public repository</span>
        </div>
      </div>
    </article>
  );
}
