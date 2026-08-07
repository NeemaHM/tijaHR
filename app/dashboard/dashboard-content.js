"use client";

import { Menu, Bell, Users, CalendarCheck, FileText, Megaphone, Package, ChevronRight, Clock } from "lucide-react";

const pending = [
  { name: "Daudi Mwakalinga", type: "Annual Leave", dates: "12 – 15 Aug", initials: "DM" },
  { name: "Esther Kimaro", type: "Sick Leave", dates: "7 Aug", initials: "EK" },
  { name: "Frank Massawe", type: "Annual Leave", dates: "20 – 22 Aug", initials: "FM" },
];

const announcements = [
  { title: "Office closed – Nane Nane Holiday", time: "2h ago" },
  { title: "New health insurance provider from Sept", time: "1d ago" },
];

const modules = [
  { label: "Directory", icon: Users, count: "128 staff" },
  { label: "Leave", icon: CalendarCheck, count: "3 pending" },
  { label: "Documents", icon: FileText, count: "" },
  { label: "Assets", icon: Package, count: "" },
];

export default function TijaHRHome() {
  return (
    <div style={{ background: "#F7F5F1", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: "#3D3A34" }}>
      {/* Top bar */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E0D8", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Menu size={20} color="#3D3A34" />
            <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#0B5D5A", letterSpacing: "-0.01em" }}>Tija</span>
              <span style={{ fontSize: 18, fontWeight: 500, color: "#8A6D3B" }}>HR</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ position: "relative" }}>
              <Bell size={19} color="#8C887F" />
              <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#B3261E" }} />
            </div>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#0B5D5A", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
              MK
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 40px" }}>
        {/* Greeting */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13.5, color: "#8C887F", margin: 0 }}>Wednesday, 6 August</p>
          <h1 style={{ fontSize: 21, fontWeight: 700, margin: "3px 0 0", color: "#25231F" }}>Habari, Mkurugenzi</h1>
        </div>

        {/* Summary card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0B5D5A 0%, #0E7C74 100%)",
            borderRadius: 14,
            padding: "18px 18px",
            color: "#fff",
            marginBottom: 22,
          }}
        >
          <p style={{ fontSize: 12.5, opacity: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Needs your attention
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>3</span>
            <span style={{ fontSize: 14 }}>leave requests waiting for approval</span>
          </div>
        </div>

        {/* Module grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          {modules.map(({ label, icon: Icon, count }) => (
            <div
              key={label}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E4E0D8",
                borderRadius: 12,
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: 8, background: "#E6F4F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={17} color="#0B5D5A" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#25231F" }}>{label}</div>
                {count && <div style={{ fontSize: 11.5, color: "#8C887F", marginTop: 1 }}>{count}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Pending approvals */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h2 style={{ fontSize: 15.5, fontWeight: 700, margin: 0, color: "#25231F" }}>Pending leave requests</h2>
            <span style={{ fontSize: 12.5, color: "#0B5D5A", fontWeight: 600 }}>See all</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {pending.map((p) => (
              <div key={p.name} style={{ background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "11px 13px", display: "flex", alignItems: "center", gap: 11 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E6F4F2", color: "#0B5D5A", fontSize: 12.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {p.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "#8C887F", display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                    <Clock size={10.5} />
                    {p.type} · {p.dates}
                  </div>
                </div>
                <ChevronRight size={17} color="#B0AC9F" />
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h2 style={{ fontSize: 15.5, fontWeight: 700, margin: 0, color: "#25231F" }}>Announcements</h2>
            <span style={{ fontSize: 12.5, color: "#0B5D5A", fontWeight: 600 }}>See all</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {announcements.map((a) => (
              <div key={a.title} style={{ background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "12px 13px", display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "#FBF1DC", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Megaphone size={14} color="#B8860B" />
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>{a.title}</div>
                  <div style={{ fontSize: 11.5, color: "#8C887F", marginTop: 1 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
