import { StudyFacts, StudyFlow, StudyHeading, StudyLink } from "./StudyParts";

const moneyFlow = [
  ["Flutter", "Interface"],
  ["Cubit", "Feature state"],
  ["Services", "Finance logic"],
  ["Supabase", "PostgreSQL"],
];
export default function MoneyBoysStudy() {
  return (
    <div>
      <header className="grid gap-8 bg-gradient-to-br from-violet-100 via-surface to-sky-100 p-7 md:p-10 lg:grid-cols-[1.25fr_0.75fr] dark:from-violet-950 dark:to-slate-900">
        <div>
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
        <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-2xl bg-violet-900 p-6">
          <img
            src="/assets/images/projects/moneyboys-splash.png"
            alt="MoneyBoys sign-in screen from the project build"
            width="600"
            height="1067"
            className="max-h-80 w-auto rounded-xl object-contain shadow-2xl"
          />
        </div>
      </header>
      <div className="grid gap-10 p-7 md:p-10">
        <section>
          <StudyHeading
            index="01 / Problem, decision, outcome"
            title="Keep finance workflows connected."
          >
            Transactions, budgets and insights needed shared data across
            multiple screens. Cubit handles interface state while reusable
            services own finance operations, yielding a working team prototype
            for tracking spending.
          </StudyHeading>
        </section>
        <section>
          <StudyHeading
            index="02 / System flow"
            title="From screen interaction to shared data."
          >
            Each layer has one clear responsibility. Gemini supports optional
            guidance; the core finance flow remains independent.
          </StudyHeading>
          <StudyFlow steps={moneyFlow} label="MoneyBoys architecture" />
        </section>
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <StudyHeading
              index="03 / My contribution"
              title="Database work connected to product behavior."
            />
            <ul className="grid gap-3 text-sm leading-relaxed text-muted">
              <li>Model finance data shared by transactions and budgets.</li>
              <li>Build reusable CRUD operations behind feature screens.</li>
              <li>Feed stored data into spending views and charts.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
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
