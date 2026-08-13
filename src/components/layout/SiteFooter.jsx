import Icon from "../ui/Icon";
import { useEffect, useState } from "react";

export default function SiteFooter() {
  const [copyLabel, setCopyLabel] = useState("Copy Email");

  useEffect(() => {
    if (copyLabel === "Copy Email") return undefined;
    const timer = setTimeout(() => setCopyLabel("Copy Email"), 2000);
    return () => clearTimeout(timer);
  }, [copyLabel]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ngoctien20022005@gmail.com");
      setCopyLabel("Email copied");
    } catch {
      setCopyLabel("Could not copy email");
    }
  };
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
              <a
                className="button button-primary"
                href="mailto:ngoctien20022005@gmail.com"
              >
                <span>Say Hello</span>
                <Icon name="send" />
              </a>
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
                  {"  "}targetRole:{" "}
                  <span className="code-yellow">
                    "Full-stack Developer Intern"
                  </span>
                  ,{"\n"}
                  {"  "}mainTech: [{"\n"}
                  {"    "}
                  <span className="code-yellow">"Flutter"</span>,{" "}
                  <span className="code-yellow">"React"</span>,{" "}
                  <span className="code-yellow">"Node.js"</span>,{" "}
                  <span className="code-yellow">"SQL"</span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}funFact:{" "}
                  <span className="code-yellow">
                    "I turn class ideas into working apps"
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
          <div className="footer-contact-grid">
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
              <p>Building and learning from.</p>
              <strong>Da Nang, Vietnam</strong>
            </div>
          </div>
          <div className="footer-bottom">
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
    </footer>
  );
}
