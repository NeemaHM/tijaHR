"use client";

import { useState } from "react";
import { ArrowLeft, ChevronDown, Calendar, Wallet } from "lucide-react";

const leaveTypes = [
  { label: "Annual Leave", balance: "14 days left" },
  { label: "Sick Leave", balance: "7 days left" },
  { label: "Maternity Leave", balance: "84 days" },
  { label: "Paternity Leave", balance: "3 days" },
  { label: "Compassionate Leave", balance: "3 days left" },
];

export default function TijaHRLeaveRequest() {
  const [selectedType, setSelectedType] = useState(leaveTypes[0]);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [reason, setReason] = useState("");

  return (
    <div style={{ background: "#F7F5F1", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: "#3D3A34" }}>
      {/* Top bar */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E0D8", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
          <ArrowLeft size={20} color="#3D3A34" />
          <span style={{ fontSize: 16, fontWeight: 700, color: "#25231F" }}>Request Time Off</span>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 40px" }}>
        {/* Leave type selector */}
        <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", marginBottom: 6, display: "block" }}>
          Leave type
        </label>
        <div style={{ position: "relative", marginBottom: 18 }}>
          <button
            onClick={() => setShowTypeMenu(!showTypeMenu)}
            style={{
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid #E4E0D8",
              borderRadius: 10,
              padding: "13px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: "#25231F" }}>{selectedType.label}</div>
              <div style={{ fontSize: 11.5, color: "#8C887F", marginTop: 1 }}>{selectedType.balance}</div>
            </div>
            <ChevronDown size={18} color="#8C887F" />
          </button>
          {showTypeMenu && (
            <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, boxShadow: "0 6px 18px rgba(0,0,0,0.08)", zIndex: 20, overflow: "hidden" }}>
              {leaveTypes.map((t) => (
                <button
                  key={t.label}
                  onClick={() => { setSelectedType(t); setShowTypeMenu(false); }}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: t.label === selectedType.label ? "#E6F4F2" : "#FFFFFF",
                    border: "none",
                    borderBottom: "1px solid #F0EEE8",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 13.5, fontWeight: 500, color: "#25231F" }}>{t.label}</span>
                  <span style={{ fontSize: 11.5, color: "#8C887F" }}>{t.balance}</span>
                </button>
              ))}
              <div style={{ padding: "10px 14px", fontSize: 12, color: "#0B5D5A", fontWeight: 600 }}>
                + Company may add more leave types
              </div>
            </div>
          )}
        </div>

        {/* Date range */}
        <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", marginBottom: 6, display: "block" }}>
          Dates
        </label>
        <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
          <div style={{ flex: 1, background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "13px 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={16} color="#8C887F" />
            <div>
              <div style={{ fontSize: 10.5, color: "#8C887F" }}>Start</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>12 Aug 2026</div>
            </div>
          </div>
          <div style={{ flex: 1, background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "13px 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={16} color="#8C887F" />
            <div>
              <div style={{ fontSize: 10.5, color: "#8C887F" }}>End</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>15 Aug 2026</div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#8C887F", margin: "0 0 18px" }}>4 working days</p>

        {/* Reason */}
        <label style={{ fontSize: 12.5, fontWeight: 600, color: "#5B584F", marginBottom: 6, display: "block" }}>
          Reason (optional)
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Add a short note for your manager"
          rows={3}
          style={{
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid #E4E0D8",
            borderRadius: 10,
            padding: "12px 14px",
            fontSize: 13.5,
            fontFamily: "inherit",
            color: "#3D3A34",
            resize: "none",
            marginBottom: 18,
            outline: "none",
          }}
        />

        {/* Approver info */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E0D8", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#E6F4F2", color: "#0B5D5A", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            CL
          </div>
          <div>
            <div style={{ fontSize: 11.5, color: "#8C887F" }}>This request goes to</div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#25231F" }}>Catherine Lyimo · HR Officer</div>
          </div>
        </div>

        {/* Balance reminder */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, color: "#8A6D3B" }}>
          <Wallet size={14} />
          <span style={{ fontSize: 12 }}>You'll have 10 days remaining after this request</span>
        </div>

        {/* Submit */}
        <button
          style={{
            width: "100%",
            background: "#0B5D5A",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "14px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
