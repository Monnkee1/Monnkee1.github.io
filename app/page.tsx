"use client";

import { useMemo, useState } from "react";

const files = [
  { name: "launch-film-final.mov", drive: "JM ARCHIVE 04", path: "/Client Work/Launch/Final" },
  { name: "brand-system-v12.ai", drive: "STUDIO SSD", path: "/Design/Brand/Approved" },
  { name: "2025-tax-documents.pdf", drive: "HOME BACKUP", path: "/Personal/Records/2025" },
  { name: "field-recording-07.wav", drive: "AUDIO VAULT", path: "/Sessions/Desert/Raw" },
];

const stream = [
  "JM ARCHIVE 04",
  "8.2 TB INDEXED",
  "STUDIO SSD",
  "248,104 FILES",
  "HOME BACKUP",
  "SEARCH READY",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return files.slice(0, 3);
    return files.filter((file) =>
      `${file.name} ${file.drive} ${file.path}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="DriveSift by JM home">
          <span className="brand-mark" aria-hidden="true">DS</span>
          <span>DriveSift <small>BY JM</small></span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why DriveSift</a>
        </div>
        <a className="nav-buy" href="#buy">Get it · $58.99</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Drive intelligence, switched on</div>
          <h1>Every drive.<br /><span>One search.</span></h1>
          <p className="hero-lede">
            DriveSift indexes the drives you already own, then helps you find any file from any connected device—fast.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#buy">Get DriveSift <span>$58.99</span></a>
            <a className="text-link" href="#how">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="DriveSift highlights">
            <span>Multi-drive index</span>
            <span>Cross-device access</span>
            <span>Built for speed</span>
          </div>
        </div>

        <div className="search-machine" aria-label="Interactive DriveSift search demo">
          <div className="machine-top">
            <span>DRIVESIFT / LIVE INDEX</span>
            <span className="status"><i /> ONLINE</span>
          </div>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search example indexed files</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search every indexed drive…"
            />
            <kbd>⌘ K</kbd>
          </label>
          <div className="result-meta">
            <span>{results.length || 0} instant result{results.length === 1 ? "" : "s"}</span>
            <span>4 DRIVES READY</span>
          </div>
          <div className="results" aria-live="polite">
            {results.length ? results.map((file, index) => (
              <div className="result" key={file.name} style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
                <span className="file-icon">{file.name.split(".").pop()?.toUpperCase()}</span>
                <span className="file-copy"><strong>{file.name}</strong><small>{file.path}</small></span>
                <span className="drive-name">{file.drive}</span>
              </div>
            )) : (
              <div className="empty-result">No demo matches. Try “brand”, “launch”, or “tax”.</div>
            )}
          </div>
          <div className="machine-foot">
            <span>INDEX HEALTH 100%</span>
            <span>NO DRIVE SHUFFLING</span>
          </div>
        </div>
      </section>

      <div className="index-stream" aria-hidden="true">
        <div className="stream-track">
          {[...stream, ...stream].map((item, index) => <span key={`${item}-${index}`}>{item}<i>◆</i></span>)}
        </div>
      </div>

      <section className="section shell" id="how">
        <div className="section-heading">
          <p className="kicker">THE FAST PATH</p>
          <h2>Plug in. Index once.<br /><span>Find from anywhere.</span></h2>
        </div>
        <div className="steps">
          <article>
            <span className="step-num">01</span>
            <div className="step-line" />
            <h3>Connect your drives</h3>
            <p>Point DriveSift at the storage you already use—from working SSDs to deep archives.</p>
          </article>
          <article>
            <span className="step-num">02</span>
            <div className="step-line" />
            <h3>Build the index</h3>
            <p>DriveSift catalogs file names and locations into one clean, searchable map.</p>
          </article>
          <article>
            <span className="step-num">03</span>
            <div className="step-line" />
            <h3>Search across devices</h3>
            <p>Stop guessing which drive holds the file. Search, see its location, and get moving.</p>
          </article>
        </div>
      </section>

      <section className="speed-section" id="why">
        <div className="shell speed-grid">
          <div className="speed-visual" aria-hidden="true">
            <div className="orbit orbit-one"><span>SSD_01</span></div>
            <div className="orbit orbit-two"><span>ARCHIVE</span></div>
            <div className="core"><strong>DS</strong><small>ONE INDEX</small></div>
          </div>
          <div className="speed-copy">
            <p className="kicker">LESS HUNTING. MORE DOING.</p>
            <h2>Your storage finally moves at the speed of your brain.</h2>
            <p>Big creative libraries, business records, family archives—DriveSift gives scattered storage one clear front door.</p>
            <ul>
              <li><span>01</span><strong>Know where the file lives</strong><small>See the drive and folder path in the same result.</small></li>
              <li><span>02</span><strong>Search one place</strong><small>Skip the manual drive-by-drive treasure hunt.</small></li>
              <li><span>03</span><strong>Keep your system</strong><small>Use the drives and folder structure you already have.</small></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="buy-section shell" id="buy">
        <div className="buy-panel">
          <div className="buy-copy">
            <p className="kicker">OWN YOUR SEARCH</p>
            <h2>Find the file.<br />Skip the hunt.</h2>
            <p>Get DriveSift by JM and turn every indexed drive into one fast, searchable library.</p>
          </div>
          <form className="contact-card" onSubmit={submitContact}>
            <div className="contact-top">
              <span>GET DRIVESIFT</span>
              <strong><sup>$</sup>58<small>.99</small></strong>
            </div>
            <label>
              <span>Name</span>
              <input name="name" autoComplete="name" required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" required rows={4} defaultValue="I’m interested in DriveSift." />
            </label>
            <label className="website-field" aria-hidden="true">
              <span>Website</span>
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <button className="button button-primary button-full" type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending…" : "Contact DriveSift"}<span>→</span>
            </button>
            <p className={`form-note ${formStatus}`} aria-live="polite">
              {formStatus === "sent" && "Message received. DriveSift will be in touch."}
              {formStatus === "error" && "Something went wrong. Please try again."}
              {formStatus === "idle" && "Ask a question or tell us you’re ready to buy."}
            </p>
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark">DS</span><span>DriveSift <small>BY JM</small></span></a>
        <p>Stop searching drives. Start finding files.</p>
        <span>© {new Date().getFullYear()} JM</span>
      </footer>
    </main>
  );
}
