import Icon from "../ui/Icon";
import { useEffect, useRef } from "react";

function HealthMonitorCaseStudy() {
  return (
    <div className="health-case-study">
      <header className="case-hero case-hero-health">
        <div className="section-badge">
          <span aria-hidden="true">✦</span>
          <span>IoT Health Monitor Case Study</span>
        </div>
        <p className="case-eyebrow">End-to-end IoT engineering</p>
        <h2 id="case-dialog-title">
          Turning noisy sensor signals into health context people can act on.
        </h2>
        <p className="case-intro">
          A connected prototype that combines ESP32 firmware, multi-sensor
          processing and a Flutter dashboard for live vitals, fall alerts and
          historical trends.
        </p>
        <div className="case-summary" aria-label="Project summary">
          <div>
            <small>ROLE</small>
            <strong>IoT &amp; Flutter Developer</strong>
          </div>
          <div>
            <small>SCOPE</small>
            <strong>Firmware + Mobile</strong>
          </div>
          <div>
            <small>STATUS</small>
            <strong>Working Prototype</strong>
          </div>
          <div>
            <small>EVIDENCE</small>
            <strong>Public Repository</strong>
          </div>
        </div>
      </header>

      <div className="case-narrative">
        <section className="case-story case-story-lead">
          <span className="case-section-index">01 / THE CHALLENGE</span>
          <h3>Reliable health context needs more than raw sensor numbers.</h3>
          <p>
            Heart rate, SpO₂ and temperature readings can be affected by weak
            contact and body movement. Fall detection has a similar problem: a
            single acceleration spike can also come from sitting down quickly or
            moving the device. The product therefore needed to communicate
            quickly without treating every noisy sample as trustworthy.
          </p>
        </section>

        <section className="case-story">
          <span className="case-section-index">02 / KEY DECISIONS</span>
          <h3>Three decisions shaped the system.</h3>
          <div className="case-decision-list">
            <article>
              <Icon name="shield-check" />
              <div>
                <h4>Filter before display</h4>
                <p>
                  Validate finger presence, signal strength and motion quality
                  before accepting pulse-oximeter windows.
                </p>
              </div>
            </article>
            <article>
              <Icon name="waypoints" />
              <div>
                <h4>Score a pattern, not one spike</h4>
                <p>
                  Combine impact, rotation, posture change and post-event
                  stillness to identify stronger fall candidates.
                </p>
              </div>
            </article>
            <article>
              <Icon name="database-zap" />
              <div>
                <h4>Plan for connection gaps</h4>
                <p>
                  Merge live events with REST history and retain local samples
                  so the dashboard remains useful beyond one socket session.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="case-build-grid" aria-label="Implementation scope">
          <div className="case-story case-build">
            <span className="case-section-index">03 / WHAT I BUILT</span>
            <h3>One feature path across hardware and software.</h3>
            <ul className="case-checklist">
              <li>
                <Icon name="cpu" />
                <span>
                  <strong>Embedded:</strong> ESP32 acquisition for MAX30102,
                  MAX30205 and MPU6050 sensors.
                </span>
              </li>
              <li>
                <Icon name="radio-tower" />
                <span>
                  <strong>Integration:</strong> secure MQTT telemetry, command
                  handling and buzzer feedback.
                </span>
              </li>
              <li>
                <Icon name="smartphone" />
                <span>
                  <strong>Application:</strong> Flutter live state, fall-alert
                  routing, charts and history caching.
                </span>
              </li>
            </ul>
          </div>
          <aside className="case-proof">
            <span className="case-section-index">REPOSITORY PROOF</span>
            <h3>What an interviewer can verify</h3>
            <ul>
              <li>ESP32 firmware and sensor thresholds</li>
              <li>Signal-quality and fall-scoring logic</li>
              <li>Typed realtime packet models</li>
              <li>Flutter home, alert and history flows</li>
              <li>Branch-scoped CI workflow</li>
            </ul>
          </aside>
        </section>

        <section className="architecture-wrap case-architecture-health">
          <span className="case-section-index">04 / ARCHITECTURE</span>
          <h3>A traceable path from the body to the dashboard.</h3>
          <div
            className="architecture"
            aria-label="IoT Health Monitor architecture"
          >
            <div>
              Sensors <small>Vitals + motion</small>
            </div>
            <Icon name="arrow-right" />
            <div>
              ESP32 <small>Quality + fall logic</small>
            </div>
            <Icon name="arrow-right" />
            <div>
              MQTT broker <small>Realtime transport</small>
            </div>
            <Icon name="arrow-right" />
            <div>
              Flutter <small>Monitor + respond</small>
            </div>
          </div>
        </section>

        <section className="case-outcome-grid">
          <div className="case-story case-outcome">
            <span className="case-section-index">05 / OUTCOME</span>
            <h3>An integrated, inspectable prototype.</h3>
            <p>
              The repository demonstrates a complete engineering path: sensor
              acquisition, quality-aware processing, fall classification,
              connected transport and a mobile experience that surfaces live
              status, alerts and trends.
            </p>
          </div>
          <div className="case-story case-scope">
            <span className="case-section-index">06 / CURRENT SCOPE</span>
            <h3>What I would validate next.</h3>
            <p>
              The repository does not publish clinical validation or fall
              accuracy benchmarks. Before calling this production-ready, I would
              document hardware calibration, measure false positives and add
              end-to-end reliability tests.
            </p>
          </div>
        </section>

        <blockquote className="case-learning">
          <span>07 / LESSON</span>
          <p>
            “In a health product, confidence in the data is part of the user
            experience—not just an implementation detail.”
          </p>
        </blockquote>

        <div className="case-cta">
          <div>
            <small>INSPECT THE IMPLEMENTATION</small>
            <strong>Firmware and Flutter source are publicly available.</strong>
          </div>
          <a
            className="button button-dark"
            href="https://github.com/TienTrn05/Heart-Rate-Monitor-and-Fall-Detection-Device"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Repository</span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

function MoneyBoysCaseStudy() {
  const highlights = [
    {
      icon: "boxes",
      label: "01 / Problem",
      title: "Fragmented money workflows",
      detail:
        "Transactions, budgets and insights needed to stay connected across several screens.",
    },
    {
      icon: "workflow",
      label: "02 / Decision",
      title: "Separate state from data",
      detail:
        "Cubit handles interface state while reusable services own finance operations.",
    },
    {
      icon: "circle-check",
      label: "03 / Outcome",
      title: "One consistent flow",
      detail:
        "A working team prototype for tracking expenses, budgets and spending patterns.",
    },
  ];

  const flow = [
    { name: "Flutter", purpose: "Interface" },
    { name: "Cubit", purpose: "Feature state" },
    { name: "Services", purpose: "Finance logic" },
    { name: "Supabase", purpose: "PostgreSQL" },
  ];

  return (
    <div className="money-case-study">
      <header className="money-case-hero">
        <div className="money-case-copy">
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>MoneyBoys Case Study</span>
          </div>
          <p className="money-case-eyebrow">University team project</p>
          <h2 id="case-dialog-title">
            One shared data layer for everyday finance.
          </h2>
          <p className="money-case-intro">
            MoneyBoys connects transactions, budgets and spending insights in
            one Flutter experience.
          </p>
          <dl className="money-case-facts" aria-label="Project summary">
            <div>
              <dt>My role</dt>
              <dd>Data models &amp; CRUD</dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>Flutter · Supabase</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>Working prototype</dd>
            </div>
          </dl>
        </div>

        <div className="money-case-visual" aria-label="MoneyBoys app preview">
          <img
            className="money-case-logo"
            src="assets/images/projects/moneyboys-logo.jpg"
            width={1024}
            height={1024}
            alt=""
          />
          <img
            className="money-case-screen"
            src="assets/images/projects/moneyboys-splash.png"
            width={600}
            height={1067}
            alt="MoneyBoys sign-in screen from the project build"
          />
          <div className="money-case-visual-label">
            <Icon name="play" />
            <span>Repository build</span>
          </div>
        </div>
      </header>

      <div className="money-case-content">
        <section
          className="money-case-highlights"
          aria-label="Case study summary"
        >
          {highlights.map(({ icon, label, title, detail }) => (
            <article key={label}>
              <span className="money-highlight-icon">
                <Icon name={icon} />
              </span>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="money-system">
          <div className="money-section-heading">
            <div>
              <span>04 / System flow</span>
              <h3>From screen interaction to shared data.</h3>
            </div>
            <p>Each layer has one clear responsibility.</p>
          </div>
          <div
            className="money-system-flow"
            aria-label="MoneyBoys architecture"
          >
            {flow.map(({ name, purpose }, index) => (
              <div className="money-flow-step" key={name}>
                <span>
                  <b>{name}</b>
                  <small>{purpose}</small>
                </span>
                {index < flow.length - 1 && <Icon name="arrow-right" />}
              </div>
            ))}
          </div>
          <p className="money-ai-note">
            <Icon name="sparkles" />
            <span>
              Gemini supports optional guidance; the core finance flow remains
              independent.
            </span>
          </p>
        </section>

        <section className="money-case-details">
          <article className="money-contribution">
            <div className="money-section-heading">
              <div>
                <span>05 / My contribution</span>
                <h3>Database work connected to product behavior.</h3>
              </div>
            </div>
            <ul>
              <li>
                <Icon name="database-zap" />
                <span>
                  Model finance data shared by transactions and budgets.
                </span>
              </li>
              <li>
                <Icon name="server-cog" />
                <span>
                  Build reusable CRUD operations behind feature screens.
                </span>
              </li>
              <li>
                <Icon name="layout-dashboard" />
                <span>Feed stored data into spending views and charts.</span>
              </li>
            </ul>
          </article>

          <aside className="money-tool-roles">
            <span className="money-tool-label">Tools with a purpose</span>
            <div>
              <Icon name="database" />
              <p>
                <strong>Supabase</strong>
                <small>Shared PostgreSQL data</small>
              </p>
            </div>
            <div>
              <Icon name="workflow" />
              <p>
                <strong>BLoC / Cubit</strong>
                <small>Predictable feature state</small>
              </p>
            </div>
            <div>
              <Icon name="table-properties" />
              <p>
                <strong>FL Chart</strong>
                <small>Visual spending insights</small>
              </p>
            </div>
          </aside>
        </section>

        <div className="money-case-takeaway">
          <Icon name="lightbulb" />
          <div>
            <small>Engineering takeaway</small>
            <p>
              Screens describe state; services own the finance operations that
              multiple features need.
            </p>
          </div>
        </div>

        <div className="case-cta money-case-cta">
          <div>
            <small>INSPECT THE IMPLEMENTATION</small>
            <strong>The team project source is publicly available.</strong>
          </div>
          <a
            className="button button-dark"
            href="https://github.com/TienTrn05/ProjectFinalMobile-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Repository</span>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyDialog({ open, caseStudy, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.classList.toggle("dialog-open", open);
    return () => document.body.classList.remove("dialog-open");
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      aria-labelledby="case-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="case-dialog-shell">
        <button
          className="case-close"
          type="button"
          onClick={onClose}
          aria-label="Close case study"
        >
          <Icon name="x" />
        </button>
        {caseStudy === "health-monitor" ? (
          <HealthMonitorCaseStudy />
        ) : (
          <MoneyBoysCaseStudy />
        )}
      </div>
    </dialog>
  );
}
