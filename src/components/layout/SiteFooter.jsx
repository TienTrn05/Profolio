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
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-[var(--container)] gap-12 px-8 py-20 md:px-16 lg:grid-cols-2 lg:items-center lg:py-28">
        <div data-reveal>
          <span className="font-mono text-xs tracking-widest text-violet-300 uppercase">
            LET’S CONNECT
          </span>
          <h2 className="mt-5 max-w-[15ch] text-[clamp(2.8rem,4.2vw,4.8rem)] leading-tight font-bold tracking-tight">
            Let’s build something meaningful.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Let’s talk about software, products or a role where I can contribute
            and grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openDialog}
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-strong"
            >
              Say Hello <Icon name="send" className="size-4" />
            </button>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold transition-colors hover:bg-white/10"
            >
              {copyLabel} <Icon name="copy" className="size-4" />
            </button>
          </div>
        </div>
        <div
          data-reveal
          className="relative rounded-xl border border-white/15 bg-slate-900 shadow-[1rem_1rem_0_rgba(109,60,215,0.35)]"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3">
            <span className="size-2 rounded-full bg-red-400" />
            <span className="size-2 rounded-full bg-yellow-400" />
            <span className="size-2 rounded-full bg-green-400" />
            <small className="ml-auto font-mono text-xs text-slate-400">
              developer.profile.js
            </small>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-loose text-slate-300 sm:text-sm">
            <code>
              <span className="text-violet-300">const</span> developerProfile ={" "}
              {"{"}
              {"\n"} name:{" "}
              <span className="text-yellow-300">"Trần Ngọc Tiến"</span>,{"\n"}{" "}
              role:{" "}
              <span className="text-yellow-300">"Full-stack Developer"</span>,
              {"\n"} coreStack: [
              <span className="text-yellow-300">"React", "Node.js", "SQL"</span>
              ],{"\n"} currentDepth:{" "}
              <span className="text-yellow-300">
                "performance & reliability"
              </span>
              ,{"\n"} available: <span className="text-violet-300">true</span>
              {"\n"}
              {"}"};
            </code>
          </pre>
          <div className="absolute right-4 -bottom-4 rounded-full border border-green-400/40 bg-green-950 px-4 py-2 font-mono text-xs font-bold text-green-300">
            ● OPEN TO INTERNSHIPS
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto w-full max-w-[var(--container)] px-8 md:px-16">
          <div
            className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-3"
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
                <Icon name={icon} className="mb-3 size-6 text-violet-300" />
                <p className="text-sm text-slate-400">{caption}</p>
                {href ? (
                  <a
                    className="font-semibold break-all hover:text-violet-300"
                    href={href}
                  >
                    {text}
                  </a>
                ) : (
                  <strong className="font-semibold">{text}</strong>
                )}
              </div>
            ))}
          </div>
          <div
            className="flex flex-wrap items-center justify-between gap-5 py-7 text-sm text-slate-400"
            data-reveal
          >
            <p>
              Designed and engineered by Trần Ngọc Tiến. ©{" "}
              {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-4">
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
                  className="rounded-md p-2 text-white hover:bg-white/10"
                >
                  <Icon name={icon} className="size-5" />
                </a>
              ))}
              <a
                href="#home"
                aria-label="Back to top"
                className="rounded-md p-2 text-white hover:bg-white/10"
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
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-[var(--border)] bg-surface p-0 text-ink shadow-2xl backdrop:bg-slate-950/70"
      >
        <div className="flex items-start gap-4 border-b border-[var(--border)] p-6">
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
          className="grid gap-5 p-6"
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
