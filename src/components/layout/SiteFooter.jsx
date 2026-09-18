import { useEffect, useRef, useState } from "react";
import { portfolioContact, portfolioLinks } from "../../config/portfolio";
import Icon from "../ui/Icon";

const CONTACT_EMAIL = portfolioContact.email;
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const fieldClass =
  "mt-2 w-full rounded-lg border border-[var(--border)] bg-page px-4 py-3 text-ink outline-none transition-colors focus:border-brand";
const labelClass = "block text-sm font-semibold text-ink";

export default function SiteFooter() {
  const [copyLabel, setCopyLabel] = useState("Copy Email");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });
  const [toast, setToast] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (copyLabel === "Copy Email") return;
    const timer = setTimeout(() => setCopyLabel("Copy Email"), 2000);
    return () => clearTimeout(timer);
  }, [copyLabel]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);
  useEffect(() => () => document.body.classList.remove("dialog-open"), []);

  const updateField = (key) => (event) =>
    setFields((current) => ({ ...current, [key]: event.target.value }));
  const openDialog = () => {
    setFormStatus({ state: "idle", message: "" });
    dialogRef.current?.showModal();
    document.body.classList.add("dialog-open");
  };
  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.classList.remove("dialog-open");
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyLabel("Email copied");
      setToast({ type: "success", message: "Email address copied." });
    } catch {
      setCopyLabel("Could not copy email");
      setToast({
        type: "error",
        message: "Could not copy the email address. Please copy it manually.",
      });
    }
  };
  const sendEmail = async (event) => {
    event.preventDefault();
    setFormStatus({ state: "sending", message: "Sending your message…" });
    const payload = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, value.trim()]),
    );
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: `Portfolio message from ${payload.name}: ${payload.subject}`,
          _template: "table",
          _honey: "",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      )
        throw new Error(result.message || "The message could not be sent.");
      setFields({ name: "", email: "", subject: "", message: "" });
      setFormStatus({ state: "idle", message: "" });
      closeDialog();
      setToast({
        type: "success",
        message: "Message sent. Thank you — I’ll get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
      setToast({
        type: "error",
        message: "Message not sent. Your details are still here to retry.",
      });
    }
  };

  return (
    <footer id="contact" className="bg-[var(--ink)] text-white">
      <div className="contact-grid mx-auto grid w-full max-w-[var(--container)] gap-12 px-8 py-[var(--section-space)] md:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] md:items-center md:px-16 lg:gap-16">
        <div data-reveal>
          <h2 className="m-0 max-w-[41rem] text-[clamp(2.75rem,4vw,3.5rem)] leading-[1.4] font-bold tracking-[-0.04em]">
            Let’s build something meaningful.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-[1.75] text-[#8b95ad]">
            Let’s talk about software, products or a role where I can contribute
            and grow.
          </p>
          <div className="contact-actions mt-9 flex flex-wrap gap-4 max-[479px]:flex-col">
            <button
              type="button"
              onClick={openDialog}
              className="inline-flex min-h-[3.75rem] items-center justify-center gap-2 border-2 border-brand bg-brand px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand-strong hover:bg-brand-strong"
            >
              Say Hello <Icon name="send" className="size-4" />
            </button>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-[3.75rem] items-center justify-center gap-2 border-2 border-white/30 px-8 py-4 font-semibold transition hover:-translate-y-0.5 hover:border-white"
            >
              {copyLabel} <Icon name="copy" className="size-4" />
            </button>
          </div>
        </div>
        <div
          data-reveal
          className="contact-visual relative min-h-[23rem] max-md:min-h-[19rem]"
        >
          <div className="code-window absolute inset-x-0 top-1/2 border border-white/15 bg-[#0c1522] shadow-[1.5rem_1.5rem_0_rgba(var(--brand-rgb),0.38),-1.5rem_-1.5rem_0_rgba(255,196,31,0.18)] max-md:shadow-[0.75rem_0.75rem_0_rgba(var(--brand-rgb),0.38),-0.75rem_-0.75rem_0_rgba(255,196,31,0.18)]">
            <div className="code-window-bar flex items-center gap-1.5 border-b border-white/10 px-5 py-3">
              <span className="size-2 rounded-full bg-red-400" />
              <span className="size-2 rounded-full bg-yellow-400" />
              <span className="size-2 rounded-full bg-green-400" />
              <small className="ml-auto font-mono text-xs text-slate-400">
                developer.profile.js
              </small>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-loose text-slate-300 sm:text-sm">
              <code>
                <span className="text-violet-300">const</span> developerProfile
                = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-yellow-300">"Trần Ngọc Tiến"</span>,{"\n"}{" "}
                {"  "}education:{" "}
                <span className="text-yellow-300">
                  "Fourth-year IT student"
                </span>
                ,{"\n"}
                {"  "}positioning:{" "}
                <span className="text-yellow-300">"Full-stack Developer"</span>,
                {"\n"}
                {"  "}coreStack: [{"\n"}
                {"    "}
                <span className="text-yellow-300">
                  "React", "Node.js", "SQL"
                </span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}currentDepth:{" "}
                <span className="text-yellow-300">
                  "performance, reliability, scaling"
                </span>
                ,{"\n"}
                {"  "}available: <span className="text-violet-300">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
            <div className="build-pill absolute right-4 -bottom-[1.15rem] flex items-center gap-2 border border-white/20 bg-brand px-3 py-2 font-mono text-xs text-white">
              <span className="mr-1 inline-block size-2 rounded-full bg-green-400" />
              OPEN TO INTERNSHIPS
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[radial-gradient(80rem_14rem_at_50%_-2rem,var(--brand),transparent_70%),linear-gradient(145deg,var(--footer-gradient-start),var(--footer-gradient-mid)_55%,var(--footer-bg))] pt-24 before:absolute before:-top-14 before:-left-[5%] before:h-24 before:w-[110%] before:rounded-b-[50%] before:bg-[var(--ink)] before:content-['']">
        <div className="mx-auto w-full max-w-[var(--container)] px-8 md:px-16">
          <div
            className="footer-contact-grid relative z-[1] grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            data-reveal
          >
            {[
              {
                icon: "phone",
                caption: "Available for a conversation",
                text: portfolioContact.phoneDisplay,
                href: portfolioContact.phoneHref,
              },
              {
                icon: "mail",
                caption: "The best way to reach me",
                text: CONTACT_EMAIL,
                href: `mailto:${CONTACT_EMAIL}`,
              },
              {
                icon: "map-pin",
                caption: "Based in",
                text: portfolioContact.location,
              },
            ].map(({ icon, caption, text, href }) => (
              <div key={icon} className="min-w-0">
                <Icon name={icon} className="size-8 text-highlight" />
                <p className="mt-5 text-[0.9375rem] text-white/70">{caption}</p>
                {href ? (
                  <a
                    className="mt-2 block text-[1.0625rem] font-semibold break-all hover:text-highlight"
                    href={href}
                  >
                    {text}
                  </a>
                ) : (
                  <strong className="mt-2 block text-[1.0625rem] font-semibold">
                    {text}
                  </strong>
                )}
              </div>
            ))}
          </div>
          <div
            className="footer-bottom relative z-[1] mt-14 flex items-center justify-between gap-8 border-t-2 border-white/10 pt-6 pb-[6.8rem] text-sm max-md:flex-col max-md:items-start"
            data-reveal
          >
            <div>
              <p>
                Designed and engineered by Trần Ngọc Tiến. ©{" "}
                {new Date().getFullYear()}
              </p>
              <small className="mt-2 block text-xs text-white/65">
                Designed with creativity. Built with logic. Refined with
                discipline.
              </small>
            </div>
            <div className="footer-links flex items-center gap-4">
              {[
                { name: "GitHub", icon: "github", href: portfolioLinks.github },
                {
                  name: "LinkedIn",
                  icon: "linkedin",
                  href: portfolioLinks.linkedin,
                },
                {
                  name: "Facebook",
                  icon: "facebook",
                  href: portfolioLinks.facebook,
                },
              ].map(({ name, icon, href }) => (
                <a
                  key={name}
                  aria-label={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center border border-white/20 text-white transition hover:bg-white hover:text-[var(--ink)]"
                >
                  <Icon name={icon} className="size-5" />
                </a>
              ))}
              <a
                href="#home"
                aria-label="Back to top"
                className="grid size-9 place-items-center border border-white/20 text-white transition hover:bg-white hover:text-[var(--ink)]"
              >
                <Icon name="arrow-up" className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={() => document.body.classList.remove("dialog-open")}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="contact-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-[var(--border)] bg-surface p-0 text-ink shadow-2xl backdrop:bg-slate-950/70"
      >
        <div className="contact-dialog-shell">
          <div className="contact-dialog-header flex items-start gap-4 border-b border-[var(--border)] p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <Icon name="mail" className="size-5" />
            </span>
            <div className="flex-1">
              <p className="font-mono text-xs tracking-wider text-brand">
                START A CONVERSATION
              </p>
              <h2 id="contact-dialog-title" className="text-2xl font-bold">
                Say hello.
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close contact form"
              onClick={closeDialog}
              className="rounded-md p-2 hover:bg-brand/10"
            >
              <Icon name="x" className="size-5" />
            </button>
          </div>
          <form
            onSubmit={sendEmail}
            aria-busy={formStatus.state === "sending"}
            className="contact-form grid gap-5 p-6"
          >
            <p className="rounded-lg bg-brand/10 px-4 py-3 text-sm">
              <span className="mr-3 font-mono text-xs text-brand">TO</span>
              <strong>{CONTACT_EMAIL}</strong>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass} htmlFor="contact-name">
                Your name
                <input
                  className={fieldClass}
                  id="contact-name"
                  name="name"
                  type="text"
                  value={fields.name}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Nguyen Van A"
                  autoFocus
                  required
                  onChange={updateField("name")}
                />
              </label>
              <label className={labelClass} htmlFor="contact-email">
                Your email
                <input
                  className={fieldClass}
                  id="contact-email"
                  name="email"
                  type="email"
                  value={fields.email}
                  maxLength={160}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  onChange={updateField("email")}
                />
              </label>
            </div>
            <label className={labelClass} htmlFor="contact-subject">
              Title
              <input
                className={fieldClass}
                id="contact-subject"
                name="subject"
                type="text"
                value={fields.subject}
                maxLength={120}
                placeholder="Internship opportunity, project idea..."
                required
                onChange={updateField("subject")}
              />
            </label>
            <label className={labelClass} htmlFor="contact-message">
              Message
              <textarea
                className={fieldClass}
                id="contact-message"
                name="message"
                value={fields.message}
                rows={6}
                maxLength={3000}
                placeholder="Tell me a little about the role or project..."
                required
                onChange={updateField("message")}
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p
                role={formStatus.state === "error" ? "alert" : "status"}
                className={`max-w-sm text-xs ${formStatus.state === "error" ? "text-red-500" : "text-muted"}`}
              >
                {formStatus.message ||
                  "Your details are sent so I can reply directly."}
              </p>
              <button
                type="submit"
                disabled={formStatus.state === "sending"}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-5 py-2 font-semibold text-white disabled:opacity-60"
              >
                {formStatus.state === "sending" ? "Sending…" : "Send Message"}
                <Icon name="send" className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </dialog>
      {toast && (
        <div
          role={toast.type === "error" ? "alert" : "status"}
          className={`fixed right-4 bottom-20 z-[100] flex max-w-sm items-center gap-3 rounded-xl border px-4 py-3 text-sm text-white shadow-xl ${toast.type === "error" ? "border-red-400 bg-red-900" : "border-green-400 bg-green-900"}`}
        >
          <Icon
            name={toast.type === "error" ? "info" : "circle-check"}
            className="size-5 shrink-0"
          />
          <span>{toast.message}</span>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setToast(null)}
          >
            <Icon name="x" className="size-4" />
          </button>
        </div>
      )}
    </footer>
  );
}
