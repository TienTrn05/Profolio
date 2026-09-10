import Icon from "../ui/Icon";
import { useEffect, useRef, useState } from "react";
import { portfolioContact, portfolioLinks } from "../../config/portfolio";

const CONTACT_EMAIL = portfolioContact.email;
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function SiteFooter() {
  const [copyLabel, setCopyLabel] = useState("Copy Email");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });
  const [toast, setToast] = useState(null);
  const contactDialogRef = useRef(null);

  useEffect(() => {
    if (copyLabel === "Copy Email") return undefined;
    const timer = setTimeout(() => setCopyLabel("Copy Email"), 2000);
    return () => clearTimeout(timer);
  }, [copyLabel]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

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

  const openContactDialog = () => {
    setFormStatus({ state: "idle", message: "" });
    contactDialogRef.current?.showModal();
    document.body.classList.add("dialog-open");
  };

  const closeContactDialog = () => {
    contactDialogRef.current?.close();
    document.body.classList.remove("dialog-open");
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setFormStatus({ state: "sending", message: "Sending your message…" });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          subject: subject.trim(),
          message: message.trim(),
          _subject: `Portfolio message from ${senderName.trim()}: ${subject.trim()}`,
          _template: "table",
          _honey: "",
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(result.message || "The message could not be sent.");
      }

      setSenderName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
      setFormStatus({ state: "idle", message: "" });
      closeContactDialog();
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

  useEffect(() => () => document.body.classList.remove("dialog-open"), []);

  return (
    <footer className="site-footer" id="contact">
      <div className="contact-intro">
        <div className="container contact-grid">
          <div data-reveal>
            <h2>Let's build something meaningful.</h2>
            <p>
              Let's talk about software, products or a role where I can
              contribute and grow.
            </p>
            <div className="contact-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={openContactDialog}
              >
                <span>Say Hello</span>
                <Icon name="send" />
              </button>
              <button
                className="button button-outline-light"
                type="button"
                onClick={copyEmail}
              >
                <span>{copyLabel}</span>
                <Icon name="copy" />
              </button>
            </div>
          </div>
          <div className="contact-visual" aria-hidden="true" data-reveal>
            <div className="code-window">
              <div className="code-window-bar">
                <span />
                <span />
                <span />
                <small>developer.profile.js</small>
              </div>
              <pre>
                <code>
                  <span className="code-purple">const</span> developerProfile ={" "}
                  {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="code-yellow">"Trần Ngọc Tiến"</span>,{"\n"}
                  {"  "}education:{" "}
                  <span className="code-yellow">"Fourth-year IT student"</span>,
                  {"\n"}
                  {"  "}positioning:{" "}
                  <span className="code-yellow">"Full-stack Developer"</span>,
                  {"\n"}
                  {"  "}coreStack: [{"\n"}
                  {"    "}
                  <span className="code-yellow">"React"</span>,{" "}
                  <span className="code-yellow">"Node.js"</span>,{" "}
                  <span className="code-yellow">"SQL"</span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}currentDepth:{" "}
                  <span className="code-yellow">
                    "performance, reliability, scaling"
                  </span>
                  ,{"\n"}
                  {"  "}available: <span className="code-purple">true</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
              <div className="build-pill">
                <span /> OPEN TO INTERNSHIPS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-meta">
        <div className="container">
          <div className="footer-contact-grid" data-reveal>
            <div>
              <Icon name="phone" />
              <p>Available for a quick conversation.</p>
              <a href={portfolioContact.phoneHref}>
                {portfolioContact.phoneDisplay}
              </a>
            </div>
            <div>
              <Icon name="mail" />
              <p>The best way to start a conversation.</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>
              <Icon name="map-pin" />
              <p>Based in.</p>
              <strong>{portfolioContact.location}</strong>
            </div>
          </div>
          <div className="footer-bottom" data-reveal>
            <div>
              <p>
                <span>Designed and engineered by Trần Ngọc Tiến.</span>©{" "}
                <span>{new Date().getFullYear()}</span>
              </p>
              <small>
                Designed with creativity. Built with logic. Refined with
                discipline.
              </small>
            </div>
            <div className="footer-links">
              <a
                href={portfolioLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href={portfolioLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href={portfolioLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
              <a href="#home" aria-label="Back to top">
                <Icon name="arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <dialog
        ref={contactDialogRef}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClose={() => document.body.classList.remove("dialog-open")}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeContactDialog();
        }}
      >
        <div className="contact-dialog-shell">
          <header className="contact-dialog-header">
            <span className="contact-dialog-icon" aria-hidden="true">
              <Icon name="mail" />
            </span>
            <div>
              <p>START A CONVERSATION</p>
              <h2 id="contact-dialog-title">Say hello.</h2>
            </div>
            <button
              className="contact-dialog-close"
              type="button"
              aria-label="Close contact form"
              onClick={closeContactDialog}
            >
              <Icon name="x" />
            </button>
          </header>

          <form
            className="contact-form"
            aria-busy={formStatus.state === "sending"}
            onSubmit={sendEmail}
          >
            <div className="contact-recipient">
              <span>TO</span>
              <strong>{CONTACT_EMAIL}</strong>
            </div>
            <div className="contact-form-row">
              <label htmlFor="contact-name">
                <span>Your name</span>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={senderName}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Nguyen Van A"
                  autoFocus
                  required
                  onChange={(event) => setSenderName(event.target.value)}
                />
              </label>
              <label htmlFor="contact-email">
                <span>Your email</span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={senderEmail}
                  maxLength={160}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  onChange={(event) => setSenderEmail(event.target.value)}
                />
              </label>
            </div>
            <label htmlFor="contact-subject">
              <span>Title</span>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={subject}
                maxLength={120}
                placeholder="Internship opportunity, project idea..."
                required
                onChange={(event) => setSubject(event.target.value)}
              />
            </label>
            <label htmlFor="contact-message">
              <span>Message</span>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                rows={7}
                maxLength={3000}
                placeholder="Tell me a little about the role or project..."
                required
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>
            <div className="contact-form-footer">
              <p
                className={`contact-form-status${formStatus.state === "error" ? " is-error" : ""}`}
                role={formStatus.state === "error" ? "alert" : "status"}
              >
                {formStatus.message ||
                  "Your details are sent securely so I can reply directly."}
              </p>
              <button
                className="contact-send"
                type="submit"
                disabled={formStatus.state === "sending"}
              >
                <span>
                  {formStatus.state === "sending" ? "Sending…" : "Send Message"}
                </span>
                <Icon name="send" />
              </button>
            </div>
          </form>
        </div>
      </dialog>
      {toast && (
        <div
          className={`contact-toast contact-toast-${toast.type}`}
          role={toast.type === "error" ? "alert" : "status"}
        >
          <Icon name={toast.type === "success" ? "circle-check" : "info"} />
          <span>{toast.message}</span>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setToast(null)}
          >
            <Icon name="x" />
          </button>
        </div>
      )}
    </footer>
  );
}
