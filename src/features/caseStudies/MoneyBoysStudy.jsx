import { StudyFacts, StudyFlow, StudyHeading, StudyLink } from "./StudyParts";
import Icon from "../../components/ui/Icon";

const moneyFlow = [
  ["Flutter", "Interface"],
  ["Cubit", "Feature state"],
  ["Services", "Finance logic"],
  ["Supabase", "PostgreSQL"],
];

const highlights = [
  {
    icon: "circle-dollar-sign",
    label: "01 / Problem",
    title: "Fragmented finance data",
    detail:
      "Transactions, budgets and insights needed one shared source of truth across multiple screens.",
  },
  {
    icon: "waypoints",
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

export default function MoneyBoysStudy() {
  return (
    <div className="money-case-study">
      <header className="money-case-hero grid gap-8 bg-gradient-to-br from-violet-100 via-surface to-sky-100 p-7 md:p-10 lg:grid-cols-[1.25fr_0.75fr] dark:from-violet-950 dark:to-slate-900">
        <div className="money-case-copy">
          <span className="inline-flex rounded-full bg-brand px-4 py-2 text-xs font-bold text-white uppercase">
            University Team Project · Finance App
          </span>
          <h2
            id="case-dialog-title"
            className="mt-5 max-w-[17ch] text-[clamp(2.6rem,4vw,4rem)] leading-tight font-bold tracking-tight text-ink"
          >
            One shared data layer for everyday finance.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            MoneyBoys connects transactions, budgets and spending insights in
            one Flutter experience.
          </p>
          <StudyFacts
            facts={[
              ["My role", "Data models & CRUD"],
              ["Core stack", "Flutter · Supabase"],
              ["Result", "Working prototype"],
            ]}
          />
        </div>
        <div className="money-case-visual relative grid min-h-80 place-items-center overflow-hidden rounded-2xl bg-violet-900 p-6">
          <img
            src="/assets/images/projects/moneyboys-logo.jpg"
            alt=""
            width="1024"
            height="1024"
            className="money-case-logo absolute inset-0 size-full object-cover opacity-45"
          />
          <img
            src="/assets/images/projects/moneyboys-splash.png"
            alt="MoneyBoys sign-in screen from the project build"
            width="600"
            height="1067"
            className="money-case-screen relative z-[1] max-h-80 w-auto rotate-3 rounded-xl object-contain shadow-2xl"
          />
          <span className="absolute right-4 bottom-4 z-[2] inline-flex items-center gap-2 border border-white/25 bg-slate-950/75 px-3 py-2 font-mono text-xs text-white uppercase backdrop-blur">
            <Icon name="play" className="size-4" /> Repository build
          </span>
        </div>
      </header>
      <div className="money-case-content grid gap-10 p-7 md:p-10">
        <section
          className="money-case-highlights grid gap-4 md:grid-cols-3"
          aria-label="Case study summary"
        >
          {highlights.map(({ icon, label, title, detail }) => (
            <article
              className="border border-[var(--border)] bg-surface p-5"
              key={label}
            >
              <span className="money-highlight-icon grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon name={icon} className="size-5" />
              </span>
              <small className="mt-5 block font-mono text-xs font-bold tracking-wider text-brand uppercase">
                {label}
              </small>
              <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {detail}
              </p>
            </article>
          ))}
        </section>
        <section className="money-system border border-white/10 bg-slate-950 p-6 text-white md:p-8">
          <StudyHeading
            index="04 / System flow"
            title="From screen interaction to shared data."
            dark
          >
            Each layer has one clear responsibility. Gemini supports optional
            guidance; the core finance flow remains independent.
          </StudyHeading>
          <StudyFlow steps={moneyFlow} label="MoneyBoys architecture" dark />
        </section>
        <section className="money-case-details grid gap-8 lg:grid-cols-2">
          <div>
            <StudyHeading
              index="05 / My contribution"
              title="Database work connected to product behavior."
            />
            <ul className="grid gap-3 text-sm leading-relaxed text-muted">
              <li>Model finance data shared by transactions and budgets.</li>
              <li>Build reusable CRUD operations behind feature screens.</li>
              <li>Feed stored data into spending views and charts.</li>
            </ul>
          </div>
          <div className="money-tool-roles rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <StudyHeading
              index="Tools with a purpose"
              title="Implementation choices"
            />
            <ul className="grid gap-3 text-sm text-muted">
              <li>
                <strong className="text-ink">Supabase:</strong> shared
                PostgreSQL data
              </li>
              <li>
                <strong className="text-ink">BLoC / Cubit:</strong> predictable
                feature state
              </li>
              <li>
                <strong className="text-ink">FL Chart:</strong> visual spending
                insights
              </li>
            </ul>
          </div>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--border)] pt-6">
          <p className="max-w-xl text-sm text-muted">
            <strong className="text-ink">Engineering takeaway:</strong> Screens
            describe state; services own the finance operations that multiple
            features need.
          </p>
          <StudyLink href="https://github.com/TienTrn05/ProjectFinalMobile-">
            View Repository
          </StudyLink>
        </div>
      </div>
    </div>
  );
}
