import { useRef } from "react";
import Icon from "../ui/Icon";

const learningTopics = [
  {
    icon: "cpu",
    area: "Performance",
    title: "Runtime Profiling",
    description: "Trace CPU and memory to locate runtime bottlenecks.",
    visual: ["CPU", "HEAP", "TRACE"],
    tags: ["Node.js", "V8", "diagnostics"],
    href: "https://nodejs.org/api/cli.html#--cpu-prof",
    source: "Node.js Docs",
  },
  {
    icon: "flask-conical",
    area: "Performance",
    title: "Load Testing",
    description: "Simulate traffic and track latency, throughput and failures.",
    visual: ["VUs", "RPS", "P95"],
    tags: ["k6", "thresholds", "scenarios"],
    href: "https://grafana.com/docs/k6/latest/get-started/write-your-first-test/",
    source: "Grafana k6",
  },
  {
    icon: "database",
    area: "Data",
    title: "Query Plans",
    description: "Read execution plans to improve scans, joins and indexes.",
    visual: ["SCAN", "INDEX", "COST"],
    tags: ["PostgreSQL", "EXPLAIN", "indexes"],
    href: "https://www.postgresql.org/docs/current/using-explain.html",
    source: "PostgreSQL Docs",
  },
  {
    icon: "database-zap",
    area: "Performance",
    title: "Caching Strategies",
    description: "Explore cache-aside flows, expiration and invalidation.",
    visual: ["HIT", "MISS", "TTL"],
    tags: ["Redis", "cache-aside", "invalidation"],
    href: "https://redis.io/tutorials/howtos/solutions/microservices/caching/",
    source: "Redis Learn",
  },
  {
    icon: "telescope",
    area: "Reliability",
    title: "Observability",
    description:
      "Connect traces, metrics and logs across application boundaries.",
    visual: ["TRACE", "METRIC", "LOG"],
    tags: ["OpenTelemetry", "signals", "context"],
    href: "https://opentelemetry.io/docs/languages/js/getting-started/",
    source: "OpenTelemetry",
  },
  {
    icon: "workflow",
    area: "Architecture",
    title: "Background Jobs",
    description: "Move slow or retryable work into queues and workers.",
    visual: ["QUEUE", "WORKER", "RETRY"],
    tags: ["BullMQ", "Redis", "workers"],
    href: "https://docs.bullmq.io/guide/architecture",
    source: "BullMQ Docs",
  },
  {
    icon: "boxes",
    area: "Delivery",
    title: "Containers",
    description: "Package services for consistent development and delivery.",
    visual: ["IMAGE", "BUILD", "SHIP"],
    tags: ["Docker", "Node.js", "CI/CD"],
    href: "https://docs.docker.com/guides/nodejs/",
    source: "Docker Docs",
  },
  {
    icon: "waypoints",
    area: "Architecture",
    title: "Service Boundaries",
    description: "Study domain boundaries, independent delivery and isolation.",
    visual: ["DOMAIN", "SCALE", "ISOLATE"],
    tags: ["microservices", "trade-offs", "resilience"],
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices",
    source: "Microsoft Learn",
  },
];

export default function LearningJourney() {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 440),
      behavior: "smooth",
    });
  };

  return (
    <section
      className="section section-building"
      id="building"
      aria-labelledby="building-title"
    >
      <div className="container">
        <header className="section-heading section-heading-center" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Learning Path</span>
          </div>
          <h2 id="building-title">Currently Learning</h2>
          <p>
            Topics I’m exploring to build faster, more reliable and more
            scalable systems.
          </p>
        </header>

        <div className="learning-browser" data-reveal>
          <div className="learning-browser-toolbar">
            <p>
              <span className="learning-pulse" aria-hidden="true" />
              <strong>{String(learningTopics.length).padStart(2, "0")}</strong>
              <span>ACTIVE TOPICS</span>
            </p>
            <div
              className="learning-controls"
              aria-label="Learning list controls"
            >
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="Scroll learning topics left"
              >
                <Icon name="arrow-left" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label="Scroll learning topics right"
              >
                <Icon name="arrow-right" />
              </button>
            </div>
          </div>

          <div
            className="learning-rail"
            ref={railRef}
            tabIndex={0}
            aria-label="Current learning topics"
          >
            {learningTopics.map(
              (
                { icon, area, title, description, visual, tags, href, source },
                index,
              ) => (
                <article
                  className="learning-card"
                  key={title}
                  style={{ "--card-index": index }}
                >
                  <div
                    className={`learning-card-visual learning-card-visual-${(index % 4) + 1}`}
                    aria-hidden="true"
                  >
                    <span className="learning-card-icon">
                      <Icon name={icon} />
                    </span>
                    <div>
                      {visual.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="learning-card-body">
                    <small>{area}</small>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul aria-label={`${title} topics`}>
                      {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <span>{source}</span>
                      <Icon name="arrow-up-right" />
                    </a>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
