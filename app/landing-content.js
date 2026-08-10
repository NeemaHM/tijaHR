"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, Menu, X, Users, CalendarCheck, FileText, Layers, TrendingUp } from "lucide-react";

const industries = [
  "Manufacturing", "Mining", "Agriculture", "Hospitality", "Healthcare",
  "Logistics", "Retail", "Education", "NGOs", "Financial Services", "Government", "Media", "Other",
];

const employeeRanges = ["1–20", "21–100", "101–500", "500+"];

const pillars = [
  { icon: Layers, title: "Simple by design", desc: "Easy for teams to understand and use, regardless of technical background." },
  { icon: Users, title: "Built around local operations", desc: "Shaped through direct conversations with organizations operating in Tanzania." },
  { icon: CalendarCheck, title: "One connected system", desc: "Reduce fragmented employee administration across spreadsheets, paper, and messages." },
  { icon: TrendingUp, title: "Built to grow", desc: "Suitable for organizations as their teams and operational needs expand." },
];

const exploring = [
  { icon: Users, title: "Employee records" },
  { icon: CalendarCheck, title: "Leave and approvals" },
  { icon: FileText, title: "Documents" },
  { icon: Layers, title: "Workforce visibility" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* Representative dashboard mockup — clearly conceptual, not a claim of existing functionality */
function ConceptDashboard() {
  return (
    <div style={{ background: "var(--surface)", borderRadius: 14, padding: 20, border: "1px solid var(--border)", boxShadow: "0 24px 48px -24px rgba(7,60,64,0.28)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--text)" }}>Team overview</div>
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--text-muted)", background: "var(--bg)", padding: "3px 8px", borderRadius: 20, border: "1px solid var(--border)" }}>
          Concept preview
        </span>
      </div>
      <p style={{ fontSize: 10, color: "var(--text-muted)", margin: "2px 0 14px" }}>Illustrative only — not live product data</p>
      {["Employee records", "Leave requests", "Document status"].map((t) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "var(--teal-wash)", flexShrink: 0 }} />
          <div style={{ fontSize: 11.5, color: "var(--text-secondary)" }}>{t}</div>
        </div>
      ))}
    </div>
  );
}

export default function TijaHRLandingPro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", industry: "", size: "", phone: "", message: "" });

  useReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.industry) e.industry = "Please select an industry.";
    if (!form.size) e.size = "Please select company size.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSendError("");
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ab451001-c82a-4410-85d5-7200f685da86",
          subject: "New Tija HR demo request",
          from_name: "Tija HR Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSendError("Something went wrong on our end — please try again, or reach us directly.");
      }
    } catch {
      setSendError("Something went wrong — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const field = (name) => ({
    value: form[name],
    onChange: (e) => setForm({ ...form, [name]: e.target.value }),
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "var(--text)", background: "var(--bg)" }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(247,248,249,0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: 1, textDecoration: "none" }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "var(--deep-teal)" }}>Tija</span>
            <span style={{ fontSize: 18, fontWeight: 500, color: "var(--text-secondary)" }}>&nbsp;HR</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            <a href="#why" className="nav-link" style={{ fontSize: 14, color: "var(--text-secondary)" }}>Why Tija</a>
            <a href="#for-businesses" className="nav-link" style={{ fontSize: 14, color: "var(--text-secondary)" }}>For Businesses</a>
            <a href="#about" className="nav-link" style={{ fontSize: 14, color: "var(--text-secondary)" }}>About</a>
            <a href="#demo" className="cta-btn" style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "var(--deep-teal)", padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>Request a Demo</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" aria-label="Toggle menu" aria-expanded={menuOpen} style={{ display: "none", background: "none", border: "none", color: "var(--text)" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: "0 24px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="#why" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Why Tija</a>
            <a href="#for-businesses" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>For Businesses</a>
            <a href="#about" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>About</a>
            <a href="#demo" style={{ fontSize: 14, fontWeight: 600, color: "var(--deep-teal)", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Request a Demo</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" style={{ background: "linear-gradient(165deg, var(--deep-teal) 0%, var(--midnight-teal) 100%)", color: "#fff", padding: "72px 24px 84px" }}>
        <div className="hero-grid" style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div>
            <h1 className="reveal is-visible" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.01em" }}>
              Employee management, built for the way East Africa works.
            </h1>
            <p className="reveal is-visible" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--teal-wash)", maxWidth: 520, margin: "0 0 30px" }}>
              Tija HR brings everyday people operations into one simple system — helping growing businesses move beyond scattered spreadsheets, paperwork, and manual processes.
            </p>
            <div className="reveal is-visible" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#demo" className="cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--deep-teal)", background: "#fff", padding: "14px 24px", borderRadius: 8, textDecoration: "none" }}>
                Request a Demo <ArrowRight size={17} />
              </a>
              <a href="#about" style={{ display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.35)", padding: "14px 24px", borderRadius: 8, textDecoration: "none" }}>
                Learn about Tija
              </a>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <ConceptDashboard />
          </div>
        </div>
      </section>

      {/* Availability badges */}
      <section style={{ padding: "28px 24px 0", maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <div className="reveal r1" style={{ flex: "1 1 240px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <Layers size={20} color="var(--deep-teal)" />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>Web app — coming soon</div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 1 }}>Currently in development with early pilot organizations</div>
            </div>
          </div>
          <div className="reveal r2" style={{ flex: "1 1 240px", background: "var(--teal-wash)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <Users size={20} color="var(--bronze)" />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>Mobile app — coming soon</div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 1 }}>For Android and iOS, planned after web launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section id="demo" style={{ padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--bronze)", marginBottom: 10, textAlign: "center" }}>Get started</p>
          <h2 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 700, margin: "0 0 8px", textAlign: "center" }}>
            See what Tija could do for your team.
          </h2>
          <p className="reveal" style={{ fontSize: 14.5, color: "var(--text-secondary)", textAlign: "center", margin: "0 0 32px" }}>
            Tell us a little about your organization and we'll be in touch.
          </p>

          {submitted ? (
            <div className="reveal is-visible" role="status" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--teal-wash)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <Check size={20} color="var(--deep-teal)" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Thank you — your request has been received</div>
              <div style={{ fontSize: 13.5, color: "var(--text-secondary)", marginTop: 6 }}>We'll be in touch within one business day.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="reveal" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <FormField label="Full name" name="name" field={field} errors={errors} placeholder="Your name" />
                <FormField label="Work email" name="email" field={field} errors={errors} placeholder="you@company.co.tz" type="email" />
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <FormField label="Company / Organization" name="company" field={field} errors={errors} placeholder="Company Ltd" />
                <FormField label="Role" name="role" field={field} errors={errors} placeholder="e.g. HR Manager" optional />
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label htmlFor="industry" style={labelStyle}>Industry</label>
                  <select id="industry" {...field("industry")} style={inputStyle} aria-invalid={!!errors.industry}>
                    <option value="">Select industry</option>
                    {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                  {errors.industry && <ErrorText id="industry-error">{errors.industry}</ErrorText>}
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label htmlFor="size" style={labelStyle}>Approximate number of employees</label>
                  <select id="size" {...field("size")} style={inputStyle} aria-invalid={!!errors.size}>
                    <option value="">Select size</option>
                    {employeeRanges.map((r) => <option key={r} value={r}>{r} employees</option>)}
                  </select>
                  {errors.size && <ErrorText id="size-error">{errors.size}</ErrorText>}
                </div>
              </div>
              <FormField label="Phone number (optional)" name="phone" field={field} errors={errors} placeholder="+255 7xx xxx xxx" fullWidth />
              <div>
                <label htmlFor="message" style={labelStyle}>What would you like help with? (optional)</label>
                <textarea id="message" {...field("message")} rows={3} placeholder="A short note is helpful, but not required" style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} />
              </div>

              {sendError && (
                <div role="alert" style={{ fontSize: 13, color: "var(--error)", background: "var(--error-bg)", padding: "10px 14px", borderRadius: 8 }}>
                  {sendError}
                </div>
              )}

              <button type="submit" disabled={sending} className="cta-btn" style={{ marginTop: 6, background: sending ? "var(--soft-teal)" : "var(--deep-teal)", color: "#fff", border: "none", borderRadius: 8, padding: "14px", fontSize: 15, fontWeight: 600, cursor: sending ? "not-allowed" : "pointer" }}>
                {sending ? "Sending…" : "Request a Demo"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding: "72px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--bronze)", marginBottom: 10 }}>The problem</p>
        <h2 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, margin: "0 0 16px", maxWidth: 680, lineHeight: 1.25 }}>
          As organizations grow, people operations often end up spread across several disconnected tools
        </h2>
        <p className="reveal" style={{ fontSize: 15.5, color: "var(--text-secondary)", maxWidth: 620, lineHeight: 1.65, marginBottom: 32 }}>
          Spreadsheets, paperwork, messaging apps, and separate records each hold a piece of the picture — making it harder to keep employee information current, consistent, and easy to act on.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {["Spreadsheets", "Paperwork", "Scattered messages", "Manual approvals"].map((t, i) => (
            <div key={t} className={`reveal r${i + 1}`} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "16px 18px", fontSize: 14, fontWeight: 500, color: "var(--text-secondary)" }}>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Why Tija — pillars */}
      <section id="why" style={{ background: "var(--surface)", padding: "72px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--bronze)", marginBottom: 10 }}>Why Tija</p>
          <h2 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, margin: "0 0 36px", maxWidth: 640 }}>
            A small set of principles guiding how we build
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {pillars.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={`feature-card reveal r${i + 1}`} style={{ padding: 22, border: "1px solid var(--border)", borderRadius: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--teal-wash)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <Icon size={16} color="var(--deep-teal)" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Businesses — what we're exploring, honest framing */}
      <section id="for-businesses" style={{ padding: "72px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--bronze)", marginBottom: 10 }}>For businesses</p>
        <h2 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, margin: "0 0 14px", maxWidth: 640 }}>
          Designed to bring core employee operations together
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 600, marginBottom: 32, lineHeight: 1.6 }}>
          Tija's MVP is still being shaped through direct conversations with Tanzanian organizations. These are the areas we're actively exploring:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {exploring.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`reveal r${i + 1}`} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 18, display: "flex", alignItems: "center", gap: 12 }}>
                <Icon size={18} color="var(--deep-teal)" />
                <span style={{ fontSize: 14, fontWeight: 600 }}>{f.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* About / Tanzania positioning */}
      <section id="about" style={{ background: "var(--midnight-teal)", color: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--sand)", marginBottom: 10 }}>About</p>
          <h2 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, margin: "0 0 18px" }}>
            Designed closer to the problem
          </h2>
          <p className="reveal" style={{ fontSize: 16, lineHeight: 1.7, color: "var(--teal-wash)" }}>
            Tija HR is being shaped directly through conversations with HR professionals, business owners, and operations leaders across Tanzania — not adapted from software built for a different market. Our first customers are helping define what Tija becomes.
          </p>
        </div>
      </section>

      {/* Demo form */}
      {/* Footer */}
      <footer style={{ padding: "40px 24px 32px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24 }}>
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 1, marginBottom: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "var(--deep-teal)" }}>Tija</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-secondary)" }}>&nbsp;HR</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
              Employee management software built for how Tanzanian organizations actually operate.
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>Site</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="#why" style={{ fontSize: 13.5, color: "var(--text-secondary)", textDecoration: "none" }}>Why Tija</a>
                <a href="#for-businesses" style={{ fontSize: 13.5, color: "var(--text-secondary)", textDecoration: "none" }}>For Businesses</a>
                <a href="#about" style={{ fontSize: 13.5, color: "var(--text-secondary)", textDecoration: "none" }}>About</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>Legal</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="/privacy" style={{ fontSize: 13.5, color: "var(--text-secondary)", textDecoration: "none" }}>Privacy Policy</a>
                <a href="/terms" style={{ fontSize: 13.5, color: "var(--text-secondary)", textDecoration: "none" }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1160, margin: "28px auto 0", paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Built in Tanzania, for East Africa.</p>
        </div>
      </footer>
    </div>
  );
}

function FormField({ label, name, field, errors, placeholder, type = "text", optional = false, fullWidth = false }) {
  return (
    <div style={{ flex: fullWidth ? "1 1 100%" : "1 1 200px" }}>
      <label htmlFor={name} style={labelStyle}>{label}{!optional && !label.includes("optional") ? "" : ""}</label>
      <input id={name} type={type} placeholder={placeholder} {...field(name)} style={inputStyle} />
      {errors[name] && <ErrorText id={`${name}-error`}>{errors[name]}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }) {
  return <p id={id} role="alert" style={{ fontSize: 12, color: "var(--error)", margin: "5px 0 0" }}>{children}</p>;
}

const labelStyle = {
  fontSize: 12.5,
  fontWeight: 600,
  color: "var(--text-secondary)",
  display: "block",
  marginBottom: 6,
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  fontSize: 13.5,
  fontFamily: "inherit",
  color: "var(--text)",
  outline: "none",
  background: "var(--surface)",
};
