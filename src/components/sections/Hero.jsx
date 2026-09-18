import { portfolioLinks } from "../../config/portfolio";
import Icon from "../ui/Icon";

const highlights = [
  {
    icon: "panels-top-left",
    label: "Web frontend",
    detail: "React · TypeScript · Tailwind CSS",
  },
  { icon: "server", label: "Backend", detail: "Node.js · Express · REST APIs" },
  {
    icon: "database-zap",
    label: "Data & delivery",
    detail: "MySQL · PostgreSQL · Git",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative overflow-hidden bg-page pt-[var(--header-height)]"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid grid min-h-[calc(100svh-var(--header-height))] lg:grid-cols-[minmax(0,58%)_minmax(25rem,42%)]">
        <div
          className="hero-copy relative flex min-w-0 flex-col items-start justify-center bg-page px-8 py-20 md:px-16 lg:py-24 lg:pr-12 lg:pl-[max(2rem,calc((100vw-var(--container))/2+2rem))]"
          data-reveal
        >
          <p className="hero-eyebrow inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-bold tracking-wide text-ink uppercase">
            <span className="size-2 rounded-full bg-green-500 shadow-[0_0_0_0.25rem_rgba(34,197,94,0.12)]" />
            Open to full-stack internships
          </p>
          <h1
            id="hero-title"
            className="mt-10 max-w-[13ch] text-[clamp(3.4rem,5.1vw,5.4rem)] leading-[1.02] font-extrabold tracking-[-0.055em]"
          >
            Full-stack <span className="text-brand">Developer.</span>
          </h1>
          <p className="hero-description mt-6 w-full max-w-[43rem] text-[1.05rem] leading-[1.75] text-muted">
            I’m Trần Ngọc Tiến, a Full-stack Developer working across responsive
            interfaces, reliable APIs and relational data. I turn product
            requirements into clear, reviewable web experiences.
          </p>
          <div
            className="hero-capabilities mt-8 grid w-full max-w-[46rem] gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
            aria-label="Core capabilities"
          >
            {highlights.map(({ icon, label, detail }) => (
              <div
                key={label}
                className="flex min-w-0 items-center gap-3 bg-page p-4"
              >
                <Icon name={icon} className="size-5 shrink-0 text-brand" />
                <div className="min-w-0">
                  <small className="block text-[0.62rem] font-bold tracking-wider text-muted uppercase">
                    {label}
                  </small>
                  <strong className="mt-1 block text-xs leading-snug">
                    {detail}
                  </strong>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-actions mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex min-h-14 items-center gap-2 rounded-md bg-brand px-7 py-3 font-bold text-white transition-colors hover:bg-brand-strong"
            >
              View Projects <Icon name="arrow-down-right" className="size-5" />
            </a>
            <a
              href={portfolioLinks.resume}
              download
              className="inline-flex min-h-14 items-center gap-2 rounded-md border border-[var(--border)] bg-surface px-7 py-3 font-bold transition-colors hover:border-brand"
            >
              Download CV <Icon name="file-down" className="size-5" />
            </a>
          </div>
        </div>
        <div
          className="hero-media relative isolate mx-4 mb-4 min-h-[38rem] overflow-hidden rounded-3xl bg-slate-950 shadow-[0_2rem_5rem_rgba(5,12,23,0.14)] lg:my-6 lg:mr-6 lg:ml-0"
          data-reveal
        >
          <img
            src="/assets/images/Tien.jpg"
            alt="Trần Ngọc Tiến"
            width="1122"
            height="1402"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[57%_43%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="hero-gpa-card absolute top-6 left-6 flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/75 p-4 text-white backdrop-blur-md">
            <span className="grid size-10 place-items-center rounded-xl bg-brand">
              <Icon name="graduation-cap" className="size-5" />
            </span>
            <div>
              <small className="block font-mono text-[0.6rem] tracking-wider text-white/70 uppercase">
                Academic record
              </small>
              <strong className="block text-xl leading-none">3.8 / 4.0</strong>
              <span className="text-xs font-semibold text-yellow-300">GPA</span>
            </div>
          </div>
          <div className="hero-identity-card absolute right-6 bottom-6 left-6 flex flex-wrap items-end justify-between gap-3 border-t border-white/35 pt-4 text-white">
            <span className="text-lg font-bold">Trần Ngọc Tiến</span>
            <strong className="max-w-76 text-right text-xs leading-relaxed font-medium text-white/75">
              Da Nang University of Science and Technology
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
