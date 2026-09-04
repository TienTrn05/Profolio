import Icon from "../ui/Icon";
import { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "ngoctien20022005@gmail.com";

export default function SiteFooter() {
  const [copyLabel, setCopyLabel] = useState("Copy Email");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const contactDialogRef = useRef(null);

  useEffect(() => {
    if (copyLabel === "Copy Email") return undefined;
    const timer = setTimeout(() => setCopyLabel("Copy Email"), 2000);
    return () => clearTimeout(timer);
  }, [copyLabel]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyLabel("Email copied");
    } catch {
      setCopyLabel("Could not copy email");
    }
  };

  const openContactDialog = () => {
    contactDialogRef.current?.showModal();
    document.body.classList.add("dialog-open");
  };

  const closeContactDialog = () => {
    contactDialogRef.current?.close();
    document.body.classList.remove("dialog-open");
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(message.trim())}`;
    closeContactDialog();
    window.location.href = emailUrl;
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
              <a href="tel:+84935572707">0935 572 707</a>
            </div>
            <div>
              <Icon name="mail" />
              <p>The best way to start a conversation.</p>
              <a href="mailto:ngoctien20022005@gmail.com">
                ngoctien20022005@gmail.com
              </a>
            </div>
            <div>
              <Icon name="map-pin" />
              <p>Based in.</p>
              <strong>Da Nang, Vietnam</strong>
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
                href="https://github.com/TienTrn05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/tr%E1%BA%A7n-nin-7b0bba355/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/nin.tran0205"
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

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="contact-recipient">
              <span>TO</span>
              <strong>{CONTACT_EMAIL}</strong>
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
                autoFocus
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
              <p>Your email app will open with this message ready to send.</p>
              <button className="contact-send" type="submit">
                <span>Send Message</span>
                <Icon name="send" />
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </footer>
  );
}
