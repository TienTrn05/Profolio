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
              MQTT <small>Telemetry</small>
            </div>
            <Icon name="arrow-right" />
            <div>
              Realtime API <small>Socket + history</small>
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
              The repository does not publish clinical validation, fall accuracy
              benchmarks or the server bridge source. Before calling this
              production-ready, I would document hardware calibration, measure
              false positives and add end-to-end reliability tests.
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
          <>
            <div className="section-badge">
              <span aria-hidden="true">✦</span>
              <span>MoneyBoys Case Study</span>
            </div>
            <h2 id="case-dialog-title">
              Finance tracking backed by a shared Supabase data layer.
            </h2>
            <div className="case-grid">
              <article>
                <span>01</span>
                <h3>Problem</h3>
                <p>
                  Transactions, budgets, charts and advice often live in
                  separate tools.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Context</h3>
                <p>
                  Bring expense tracking, budgets, charts and optional AI
                  guidance into one Flutter application.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Role</h3>
                <p>
                  Implement authentication, finance models and Supabase CRUD
                  services for spending, budgets, categories and user data.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Challenge</h3>
                <p>
                  Keep account, transaction and budget data consistent across
                  several feature screens.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Solution</h3>
                <p>
                  Separate Cubit-driven UI state from dedicated authentication,
                  reporting and finance data services.
                </p>
              </article>
              <article>
                <span>07</span>
                <h3>Result</h3>
                <p>
                  A working team prototype combining expense and budget CRUD,
                  spending charts and Gemini-supported guidance.
                </p>
              </article>
            </div>
            <div className="architecture-wrap">
              <span className="architecture-index">04</span>
              <h3>Architecture</h3>
              <div className="architecture" aria-label="MoneyBoys architecture">
                <div>
                  Flutter <small>Interface</small>
                </div>
                <Icon name="arrow-right" />
                <div>
                  Cubit <small>State</small>
                </div>
                <Icon name="arrow-right" />
                <div>
                  Services <small>Finance CRUD</small>
                </div>
                <Icon name="arrow-right" />
                <div>
                  Supabase <small>PostgreSQL</small>
                </div>
                <Icon name="arrow-right" />
                <div>
                  Gemini <small>Optional Guidance</small>
                </div>
              </div>
            </div>
            <blockquote>
              <span>
                08 / <span>Lessons</span>
              </span>
              <p>
                “Good architecture is not about adding complexity. It is about
                making future changes easier.”
              </p>
            </blockquote>
          </>
        )}
      </div>
    </dialog>
  );
}
