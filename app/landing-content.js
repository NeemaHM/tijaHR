"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Check, Menu, X, Users, CalendarCheck, FileText, Megaphone, Smartphone, Monitor, GripVertical } from "lucide-react";

const industries = [
  "Manufacturing", "Mining", "Agriculture", "Hospitality", "Healthcare",
  "Logistics", "Retail", "Education", "NGOs", "Financial Services", "Government", "Media",
];

const features = [
  { icon: Users, title: "Employee directory", desc: "Every employee, department, and role in one searchable place — not three spreadsheets that disagree with each other." },
  { icon: CalendarCheck, title: "Leave management", desc: "Statutory Tanzanian leave types built in. Requests, approvals, and balances handled automatically." },
  { icon: Check, title: "Approval workflows", desc: "Route requests to the right manager without a single WhatsApp voice note." },
  { icon: FileText, title: "Employee documents", desc: "Contracts, IDs, and certificates stored securely — no more searching a filing cabinet under deadline." },
  { icon: Megaphone, title: "Internal announcements", desc: "One official channel for company news, instead of five different WhatsApp groups." },
  { icon: Monitor, title: "HR reports", desc: "Headcount, leave trends, and turnover, ready when your director asks for them." },
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

function CompareSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    setPos(pct);
  }, []);

  useEffect(() => {
    const move = (e) => { if (dragging.current) update(e.touches ? e.touches[0].clientX : e.clientX); };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", maxWidth: 880, margin: "0 auto", aspectRatio: "16/10", borderRadius: 18, overflow: "hidden", border: "1px solid #E4E0D8", boxShadow: "0 20px 60px -20px rgba(11,93,90,0.25)", cursor: "ew-resize", userSelect: "none" }}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
    >
      {/* Chaos side (full) */}
      <div style={{ position: "absolute", inset: 0, background: "#EFEBE2", padding: 24, overflow: "hidden" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8C887F", marginBottom: 14 }}>The old way</div>
        {/* fake spreadsheet */}
        <div style={{ background: "#fff", border: "1px solid #DAD5C8", borderRadius: 6, marginBottom: 10, transform: "rotate(-1.5deg)", boxShadow: "0 4px 10px rgba(0,0,0,0.06)" }}>
          {[1, 2, 3].map((r) => (
            <div key={r} style={{ display: "flex", borderBottom: "1px solid #EDEAE1" }}>
              {[1, 2, 3, 4].map((c) => (
                <div key={c} style={{ flex: 1, padding: "7px 8px", fontSize: 10.5, color: "#8C887F", borderRight: "1px solid #EDEAE1" }}>
                  {r === 1 ? ["Name", "Dept", "Leave", "Status"][c - 1] : "—"}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* fake whatsapp bubbles */}
        <div style={{ background: "#DCF3D9", borderRadius: "10px 10px 10px 2px", padding: "8px 12px", fontSize: 11, color: "#3D3A34", maxWidth: 190, marginBottom: 8, transform: "rotate(1deg)", boxShadow: "0 3px 8px rgba(0,0,0,0.08)" }}>
          "Bosi naomba likizo wiki ijayo 🙏"
        </div>
        <div style={{ background: "#fff", borderRadius: "10px 10px 10px 2px", padding: "8px 12px", fontSize: 11, color: "#3D3A34", maxWidth: 160, marginBottom: 8, transform: "rotate(-1deg)", marginLeft: 30, boxShadow: "0 3px 8px rgba(0,0,0,0.08)" }}>
          "Sawa, nitakuarifu kesho"
        </div>
        {/* sticky note */}
        <div style={{ position: "absolute", right: 24, bottom: 24, width: 96, height: 88, background: "#F9E7A0", padding: 10, fontSize: 10, color: "#5B584F", transform: "rotate(5deg)", boxShadow: "0 6px 14px rgba(0,0,0,0.12)" }}>
          Follow up Msoma docs — missing ID copy
        </div>
      </div>

      {/* Clean side (clipped) */}
      <div style={{ position: "absolute", inset: 0, background: "#F7F5F1", padding: 24, clipPath: `inset(0 0 0 ${pos}%)` }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#0B5D5A", marginBottom: 14 }}>With TijaHR</div>
        <div style={{ background: "#fff", border: "1px solid #E4E0D8", borderRadius: 10, padding: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#E6F4F2", color: "#0B5D5A", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>EK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: "#25231F" }}>Esther Kimaro</div>
            <div style={{ fontSize: 10, color: "#8C887F" }}>Annual Leave · 12–15 Aug</div>
          </div>
          <div style={{ fontSize: 9.5, fontWeight: 600, color: "#2E7D32", background: "#E9F5EA", padding: "3px 8px", borderRadius: 20 }}>Approved</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4E0D8", borderRadius: 10, padding: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#E6F4F2", color: "#0B5D5A", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>DM</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: "#25231F" }}>Daudi Mwakalinga</div>
            <div style={{ fontSize: 10, color: "#8C887F" }}>Document uploaded</div>
          </div>
          <Check size={13} color="#0B5D5A" />
        </div>
        <div style={{ background: "linear-gradient(135deg,#0B5D5A,#0E7C74)", borderRadius: 10, padding: "12px 14px", color: "#fff" }}>
          <div style={{ fontSize: 9.5, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.04em" }}>All caught up</div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>0 pending approvals</div>
        </div>
      </div>

      {/* Handle */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "#0B5D5A", transform: "translateX(-1px)" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 36, height: 36, borderRadius: "50%", background: "#0B5D5A", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.25)" }}>
          <GripVertical size={16} color="#fff" />
        </div>
      </div>
    </div>
  );
}

export default function TijaHRLandingPro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", industry: "", phone: "", email: "", size: "" });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollPct, setScrollPct] = useState(0);
  useReveal();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(pct || 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => { document.head.removeChild(link); window.removeEventListener("scroll", onScroll); };
  }, []);

  const handleMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    setMouse({ x: (e.clientX / innerWidth - 0.5) * 2, y: (e.clientY / innerHeight - 0.5) * 2 });
  };

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#25231F", background: "#F7F5F1", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap');
        .display { font-family: 'Fraunces', serif; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .r1 { transition-delay: 0.05s; } .r2 { transition-delay: 0.12s; } .r3 { transition-delay: 0.19s; }
        .r4 { transition-delay: 0.26s; } .r5 { transition-delay: 0.33s; } .r6 { transition-delay: 0.4s; }
        .feature-card { transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s ease, border-color 0.35s ease; }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -18px rgba(11,93,90,0.28); border-color: #0B5D5A; }
        .nav-link { position: relative; }
        .nav-link::after { content: ""; position: absolute; left: 0; bottom: -4px; width: 0; height: 1.5px; background: #0B5D5A; transition: width 0.25s ease; }
        .nav-link:hover::after { width: 100%; }
        .cta-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(11,93,90,0.45); }
        .marquee-track { animation: marquee 26s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } .reveal { transition: none; opacity: 1; transform: none; } }
        input:focus, select:focus, textarea:focus { border-color: #0B5D5A !important; box-shadow: 0 0 0 3px rgba(11,93,90,0.12); }
        @media (max-width: 720px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } .hero-grid { grid-template-columns: 1fr !important; } .hero-visual { display: none !important; } }
      `}</style>

      {/* Scroll progress */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 3, width: `${scrollPct}%`, background: "linear-gradient(90deg,#0B5D5A,#2FA69A)", zIndex: 100, transition: "width 0.1s linear" }} />

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(247,245,241,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid #E4E0D8" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <span className="display" style={{ fontSize: 21, fontWeight: 600, color: "#0B5D5A" }}>Tija</span>
            <span style={{ fontSize: 19, fontWeight: 500, color: "#8A6D3B" }}>HR</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 34 }} className="desktop-nav">
            <a href="#features" className="nav-link" style={{ fontSize: 14, color: "#5B584F", textDecoration: "none" }}>Features</a>
            <a href="#compare" className="nav-link" style={{ fontSize: 14, color: "#5B584F", textDecoration: "none" }}>Why TijaHR</a>
            <a href="#demo" className="nav-link" style={{ fontSize: 14, color: "#5B584F", textDecoration: "none" }}>Request a demo</a>
            <a href="#demo" className="cta-btn" style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "#0B5D5A", padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>Get started</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: "0 24px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="#features" style={{ fontSize: 14, color: "#5B584F", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#compare" style={{ fontSize: 14, color: "#5B584F", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Why TijaHR</a>
            <a href="#demo" style={{ fontSize: 14, fontWeight: 600, color: "#0B5D5A", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Request a demo</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section onMouseMove={handleMouse} style={{ position: "relative", background: "linear-gradient(160deg, #0B5D5A 0%, #073E3B 100%)", color: "#fff", padding: "88px 24px 100px", overflow: "hidden" }}>
        {/* Parallax geometric accents (kitenge-weave inspired grid) */}
        <svg width="520" height="520" viewBox="0 0 520 520" style={{ position: "absolute", top: -80, right: -80, opacity: 0.14, transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)`, transition: "transform 0.2s ease-out" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={i * 60 + 20} y={i * 40 + 20} width="140" height="140" rx="18" fill="none" stroke="#fff" strokeWidth="1" transform={`rotate(${i * 12} 260 260)`} />
          ))}
        </svg>
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(47,166,154,0.25), transparent 70%)", transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`, transition: "transform 0.2s ease-out" }} />

        <div className="hero-grid" style={{ position: "relative", maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div>
            <div className="reveal is-visible" style={{ display: "inline-block", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", background: "rgba(255,255,255,0.12)", padding: "6px 14px", borderRadius: 20, marginBottom: 24, border: "1px solid rgba(255,255,255,0.18)" }}>
              Built for Tanzania, not translated for it
            </div>
            <h1 className="display reveal is-visible" style={{ fontSize: "clamp(34px, 4.6vw, 58px)", fontWeight: 600, lineHeight: 1.08, margin: "0 0 22px", letterSpacing: "-0.015em" }}>
              Employee management that finally works the way Tanzanian businesses do
            </h1>
            <p className="reveal is-visible" style={{ fontSize: 17.5, lineHeight: 1.65, color: "#D9EDEA", maxWidth: 520, margin: "0 0 34px" }}>
              Replace scattered Excel files, endless WhatsApp threads, and paper personnel files with one simple platform — built for manufacturing, mining, hospitality, healthcare, schools, NGOs, and more.
            </p>
            <div className="reveal is-visible" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#demo" className="cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#0B5D5A", background: "#fff", padding: "15px 26px", borderRadius: 9, textDecoration: "none" }}>
                Request a demo <ArrowRight size={17} />
              </a>
              <a href="#compare" style={{ display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.35)", padding: "15px 26px", borderRadius: 9, textDecoration: "none" }}>
                See the difference
              </a>
            </div>
          </div>

          {/* Floating dashboard mock */}
          <div className="hero-visual" style={{ position: "relative", transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)`, transition: "transform 0.2s ease-out" }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "0 30px 70px -20px rgba(0,0,0,0.4)", transform: "rotate(2deg)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#25231F" }}>Pending approvals</div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0B5D5A", background: "#E6F4F2", padding: "3px 9px", borderRadius: 20 }}>3 new</div>
              </div>
              {["Esther Kimaro · Annual Leave", "Frank Massawe · Sick Leave", "Baraka Mushi · Compassionate"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 0", borderBottom: "1px solid #F0EEE8" }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#E6F4F2", flexShrink: 0 }} />
                  <div style={{ fontSize: 11.5, color: "#3D3A34" }}>{t}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: -26, left: -26, background: "#fff", borderRadius: 14, padding: "14px 18px", boxShadow: "0 20px 50px -16px rgba(0,0,0,0.35)", transform: "rotate(-4deg)" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#0B5D5A" }}>128</div>
              <div style={{ fontSize: 10.5, color: "#8C887F" }}>employees managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <div style={{ padding: "22px 0", background: "#FFFFFF", borderBottom: "1px solid #E4E0D8", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "fit-content" }} className="marquee-track">
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 500, color: "#8C887F", padding: "0 26px", whiteSpace: "nowrap", borderRight: "1px solid #E4E0D8" }}>{ind}</span>
          ))}
        </div>
      </div>

      {/* Compare section — signature element */}
      <section id="compare" style={{ padding: "88px 24px 96px", maxWidth: 1160, margin: "0 auto", textAlign: "center" }}>
        <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#8A6D3B", marginBottom: 10 }}>Drag to compare</p>
        <h2 className="display reveal" style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontWeight: 600, margin: "0 0 14px" }}>
          From scattered chaos to one source of truth
        </h2>
        <p className="reveal" style={{ fontSize: 15.5, color: "#5B584F", maxWidth: 520, margin: "0 auto 44px" }}>
          Drag the handle below to see what changes when Excel, WhatsApp, and paper files become one platform.
        </p>
        <div className="reveal"><CompareSlider /></div>
      </section>

      {/* Features */}
      <section id="features" style={{ background: "#FFFFFF", padding: "88px 24px", borderTop: "1px solid #E4E0D8", borderBottom: "1px solid #E4E0D8" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#8A6D3B", marginBottom: 10 }}>What's included</p>
          <h2 className="display reveal" style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontWeight: 600, margin: "0 0 40px", maxWidth: 640 }}>
            The essentials, done properly — nothing you don't need
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={`feature-card reveal r${(i % 6) + 1}`} style={{ padding: 24, border: "1px solid #E4E0D8", borderRadius: 14, background: "#FFFFFF" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: "#E6F4F2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon size={17} color="#0B5D5A" />
                  </div>
                  <div style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 7 }}>{f.title}</div>
                  <div style={{ fontSize: 13.5, color: "#5B584F", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Access badges */}
      <section style={{ padding: "60px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div className="reveal r1" style={{ flex: "1 1 260px", background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 14, padding: 22, display: "flex", alignItems: "center", gap: 14 }}>
            <Monitor size={24} color="#0B5D5A" />
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700 }}>Web app — available now</div>
              <div style={{ fontSize: 12.5, color: "#5B584F", marginTop: 2 }}>Works on any phone, tablet, or computer browser</div>
            </div>
          </div>
          <div className="reveal r2" style={{ flex: "1 1 260px", background: "#F2EEE6", border: "1px solid #E4E0D8", borderRadius: 14, padding: 22, display: "flex", alignItems: "center", gap: 14 }}>
            <Smartphone size={24} color="#8A6D3B" />
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700 }}>Mobile app — coming soon</div>
              <div style={{ fontSize: 12.5, color: "#5B584F", marginTop: 2 }}>For Android and iOS, in development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section id="demo" style={{ background: "linear-gradient(160deg,#0B5D5A,#073E3B)", padding: "88px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p className="reveal" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#9FD9CE", marginBottom: 10, textAlign: "center" }}>Get started</p>
          <h2 className="display reveal" style={{ fontSize: "clamp(26px, 3.4vw, 34px)", fontWeight: 600, color: "#fff", margin: "0 0 8px", textAlign: "center" }}>Request a demo</h2>
          <p className="reveal" style={{ fontSize: 14.5, color: "#D9EDEA", textAlign: "center", margin: "0 0 34px" }}>
            Tell us about your organization and we'll show you TijaHR, built around how you actually work.
          </p>

          {submitted ? (
            <div className="reveal is-visible" style={{ background: "#fff", borderRadius: 14, padding: 36, textAlign: "center" }}>
              <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#E6F4F2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <Check size={22} color="#0B5D5A" />
              </div>
              <div style={{ fontSize: 16.5, fontWeight: 700, color: "#25231F" }}>Thank you — request received</div>
              <div style={{ fontSize: 13.5, color: "#5B584F", marginTop: 6 }}>We'll reach out within one business day to schedule your demo.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal" style={{ background: "#fff", borderRadius: 14, padding: 30, display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 30px 70px -24px rgba(0,0,0,0.4)" }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Full name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={inputStyle} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Company name</label>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company Ltd" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Industry</label>
                  <select required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} style={inputStyle}>
                    <option value="">Select industry</option>
                    {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Company size</label>
                  <select required value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} style={inputStyle}>
                    <option value="">Select size</option>
                    <option>1–20 employees</option>
                    <option>21–100 employees</option>
                    <option>101–500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Phone</label>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+255 7xx xxx xxx" style={inputStyle} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", display: "block", marginBottom: 6 }}>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.co.tz" style={inputStyle} />
                </div>
              </div>
              <button type="submit" className="cta-btn" style={{ marginTop: 8, background: "#0B5D5A", color: "#fff", border: "none", borderRadius: 9, padding: "15px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                Request a demo
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "36px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 1, justifyContent: "center", marginBottom: 8 }}>
          <span className="display" style={{ fontSize: 17, fontWeight: 600, color: "#0B5D5A" }}>Tija</span>
          <span style={{ fontSize: 16, fontWeight: 500, color: "#8A6D3B" }}>HR</span>
        </div>
        <p style={{ fontSize: 12.5, color: "#8C887F", margin: 0 }}>Built in Tanzania, for East Africa.</p>
      </footer>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 12px",
  borderRadius: 8,
  border: "1px solid #E4E0D8",
  fontSize: 13.5,
  fontFamily: "inherit",
  color: "#25231F",
  outline: "none",
  background: "#F7F5F1",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};
