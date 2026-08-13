import Icon from "../ui/Icon";
import { useEffect, useRef } from "react";

export default function CaseStudyDialog({ open, onClose }) {
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
              Transactions, budgets, charts and advice often live in separate
              tools.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Context</h3>
            <p>
              Bring expense tracking, budgets, charts and optional AI guidance
              into one Flutter application.
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
      </div>
    </dialog>
  );
}
