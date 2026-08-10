"use client";

import { Menu, Bell, CalendarPlus, FileText, Megaphone, ChevronRight, Clock, Wallet } from "lucide-react";

const announcements = [
  { title: "Office closed – Nane Nane Holiday", time: "2h ago" },
  { title: "New health insurance provider from Sept", time: "1d ago" },
];

const myLeaveHistory = [
  { type: "Annual Leave", dates: "3 – 5 Jul", status: "Approved" },
  { type: "Sick Leave", dates: "18 Jun", status: "Approved" },
];

export default function TijaHREmployeeHome() {
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
            <Bell size={19} color="#8C887F" />
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#0B5D5A", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
              EK
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 40px" }}>
        {/* Greeting */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13.5, color: "#8C887F", margin: 0 }}>Wednesday, 6 August</p>
          <h1 style={{ fontSize: 21, fontWeight: 700, margin: "3px 0 0", color: "#25231F" }}>Habari, Esther</h1>
        </div>

        {/* Leave balance card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0B5D5A 0%, #0E7C74 100%)",
            borderRadius: 14,
            padding: "18px 18px",
            color: "#fff",
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontSize: 12.5, opacity: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Leave balance
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}>
              <span style={{ fontSize: 30, fontWeight: 700 }}>14</span>
              <span style={{ fontSize: 14 }}>days remaining</span>
            </div>
          </div>
          <Wallet size={30} style={{ opacity: 0.5 }} />
        </div>

        {/* Quick action */}
        <button
          style={{
            width: "100%",
            background: "#FFFFFF",
            border: "1px solid #E4E0D8",
            borderRadius: 12,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            cursor: "pointer",
          }}
        >
          <div style={{ width: 38, height: 38, borderRadius: 9, background: "#E6F4F2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <CalendarPlus size={19} color="#0B5D5A" />
          </div>
          <span style={{ fontSize: 14.5, fontWeight: 600, color: "#25231F" }}>Request time off</span>
          <ChevronRight size={18} color="#B0AC9F" style={{ marginLeft: "auto" }} />
        </button>

        {/* My leave history */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h2 style={{ fontSize: 15.5, fontWeight: 700, margin: 0, color: "#25231F" }}>My recent leave</h2>
            <span style={{ fontSize: 12.5, color: "#0B5D5A", fontWeight: 600 }}>See all</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {myLeaveHistory.map((l) => (
              <div key={l.dates} style={{ background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "11px 13px", display: "flex", alignItems: "center", gap: 11 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#E6F4F2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={16} color="#0B5D5A" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>{l.type}</div>
                  <div style={{ fontSize: 12, color: "#8C887F", marginTop: 1 }}>{l.dates}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#2E7D32", background: "#E9F5EA", padding: "3px 9px", borderRadius: 20 }}>
                  {l.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* My documents shortcut */}
        <button
          style={{
            width: "100%",
            background: "#FFFFFF",
            border: "1px solid #E4E0D8",
            borderRadius: 12,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            cursor: "pointer",
          }}
        >
          <div style={{ width: 38, height: 38, borderRadius: 9, background: "#F2EEE6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <FileText size={18} color="#8A6D3B" />
          </div>
          <span style={{ fontSize: 14.5, fontWeight: 600, color: "#25231F" }}>My documents</span>
          <ChevronRight size={18} color="#B0AC9F" style={{ marginLeft: "auto" }} />
        </button>

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
