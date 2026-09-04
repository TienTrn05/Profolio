import Icon from "../ui/Icon";
import ProjectTags from "../ui/ProjectTags";

export default function HealthMonitorProject() {
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
          <ProjectTags items={["Course Project", "IoT Prototype"]} />
        </div>
        <div className="project-view is-visible">
          <h3>Connecting sensor data to a realtime health dashboard.</h3>
          <p>
            An academic prototype exploring how ESP32 sensor readings can move
            through MQTT into a Flutter dashboard for live vitals, fall alerts
            and history.
          </p>
        </div>
        <dl className="technical-meta project-evidence">
          <div>
            <dt>Contribution</dt>
            <dd>Firmware · sensor logic · realtime Flutter integration</dd>
          </div>
          <div>
            <dt>Engineering focus</dt>
            <dd>
              Validate signal quality and score fall patterns before display
            </dd>
          </div>
          <div>
            <dt>Tool roles</dt>
            <dd>
              ESP32 for sensing · MQTT for telemetry · Flutter for response
            </dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>Academic prototype · public firmware and app source</dd>
          </div>
        </dl>
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
        </div>
      </div>
      <div className="project-media project-media-repository project-media-health">
        <div className="repository-visual">
          <div className="repository-visual-icon">
            <Icon name="radio-tower" />
          </div>
          <small>CONNECTED SYSTEM PROTOTYPE</small>
          <h4>From sensor readings to a live interface.</h4>
          <div className="repository-path" aria-hidden="true">
            <span>ESP32</span>
            <Icon name="arrow-right" />
            <span>MQTT</span>
            <Icon name="arrow-right" />
            <span>FLUTTER</span>
          </div>
          <p>
            Embedded firmware, realtime transport and a monitoring interface in
            one connected flow.
          </p>
        </div>
        <div className="repository-evidence-label">
          <Icon name="github" />
          <span>Academic project · public repository</span>
        </div>
      </div>
    </article>
  );
}
