import Icon from "../../components/ui/Icon";
import { StudyFacts, StudyFlow, StudyHeading, StudyLink } from "./StudyParts";

const healthFlow = [
  ["Sensors", "Vitals + motion"],
  ["ESP32", "Quality + fall logic"],
  ["MQTT", "Realtime transport"],
  ["Flutter", "Monitor + respond"],
];

export default function HealthMonitorStudy() {
  return (
    <div>
      <header className="bg-gradient-to-br from-sky-100 via-surface to-violet-100 p-7 md:p-10 dark:from-sky-950 dark:to-slate-900">
        <span className="inline-flex rounded-full bg-brand px-4 py-2 text-xs font-bold text-white uppercase">
          Course Project · IoT Prototype
        </span>
        <h2
          id="case-dialog-title"
          className="mt-5 max-w-[22ch] text-[clamp(2.6rem,4vw,4rem)] leading-tight font-bold tracking-tight text-ink"
        >
          Turning sensor signals into useful health context.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          An academic team prototype combining ESP32 firmware, multi-sensor
          processing and a Flutter dashboard for live vitals, fall alerts and
          historical trends.
        </p>
        <StudyFacts
          facts={[
            ["My role", "IoT & Flutter Developer"],
            ["Scope", "Firmware + Mobile"],
            ["Evidence", "Public Repository"],
          ]}
        />
      </header>
      <div className="grid gap-10 p-7 md:p-10">
        <section>
          <StudyHeading
            index="01 / Challenge"
            title="Reliable context needs more than raw numbers."
          >
            Heart rate, SpO₂ and temperature readings can be affected by weak
            contact and movement. A single acceleration spike can also be
            mistaken for a fall, so the prototype needed signal checks before
            displaying or alerting.
          </StudyHeading>
        </section>
        <section>
          <StudyHeading
            index="02 / Decisions"
            title="Filter signals and handle connection gaps."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "shield-check",
                "Filter before display",
                "Validate contact, signal strength and motion quality before accepting pulse-oximeter windows.",
              ],
              [
                "waypoints",
                "Score a pattern",
                "Combine impact, rotation, posture change and post-event stillness for stronger fall candidates.",
              ],
              [
                "database-zap",
                "Keep history available",
                "Merge live MQTT events with REST history and retain local samples when the connection drops.",
              ],
            ].map(([icon, title, description]) => (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-surface p-5"
              >
                <Icon name={icon} className="mb-4 size-6 text-brand" />
                <h4 className="font-bold text-ink">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section>
          <StudyHeading
            index="03 / Architecture"
            title="A traceable path to the dashboard."
          />
          <StudyFlow
            steps={healthFlow}
            label="IoT Health Monitor architecture"
          />
        </section>
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <StudyHeading
              index="04 / What I built"
              title="One feature path across hardware and software."
            />
            <ul className="grid gap-3 text-sm leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Embedded:</strong> ESP32
                acquisition for MAX30102, MAX30205 and MPU6050 sensors.
              </li>
              <li>
                <strong className="text-ink">Integration:</strong> secure MQTT
                telemetry, command handling and buzzer feedback.
              </li>
              <li>
                <strong className="text-ink">Application:</strong> Flutter live
                state, fall-alert routing, charts and history caching.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <StudyHeading
              index="Repository proof"
              title="What a reviewer can inspect"
            />
            <ul className="grid gap-2 text-sm text-muted">
              <li>ESP32 firmware and sensor thresholds</li>
              <li>Signal-quality and fall-scoring logic</li>
              <li>Typed realtime packet models</li>
              <li>Flutter home, alert and history flows</li>
              <li>Branch-scoped CI workflow</li>
            </ul>
          </aside>
        </section>
        <section>
          <StudyHeading
            index="05 / Outcome and next steps"
            title="An integrated, inspectable prototype."
          >
            The repository connects acquisition, quality-aware processing,
            transport and a mobile dashboard. Clinical validation and fall
            accuracy benchmarks are not published; next steps are calibration,
            false-positive measurement and end-to-end reliability tests.
          </StudyHeading>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--border)] pt-6">
          <p className="max-w-xl text-sm text-muted">
            Firmware and Flutter source are publicly available.
          </p>
          <StudyLink href="https://github.com/TienTrn05/Heart-Rate-Monitor-and-Fall-Detection-Device">
            View Repository
          </StudyLink>
        </div>
      </div>
    </div>
  );
}
