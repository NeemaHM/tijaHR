"use client";

import { useState } from "react";
import { Search, Plus, Building2, Phone, Mail, ChevronRight, Users, Menu, Bell } from "lucide-react";

const employees = [
  { name: "Amina Juma", role: "Finance Manager", dept: "Finance", phone: "+255 754 221 903", email: "amina.juma@company.co.tz", initials: "AJ", status: "Active" },
  { name: "Baraka Mushi", role: "Site Supervisor", dept: "Operations", phone: "+255 713 445 210", email: "baraka.mushi@company.co.tz", initials: "BM", status: "Active" },
  { name: "Catherine Lyimo", role: "HR Officer", dept: "Human Resources", phone: "+255 786 902 114", email: "catherine.lyimo@company.co.tz", initials: "CL", status: "Active" },
  { name: "Daudi Mwakalinga", role: "Warehouse Assistant", dept: "Logistics", phone: "+255 622 310 887", email: "daudi.mwakalinga@company.co.tz", initials: "DM", status: "On Leave" },
  { name: "Esther Kimaro", role: "Front Desk Officer", dept: "Hospitality", phone: "+255 765 108 442", email: "esther.kimaro@company.co.tz", initials: "EK", status: "Active" },
  { name: "Frank Massawe", role: "Machine Operator", dept: "Manufacturing", phone: "+255 754 990 321", email: "frank.massawe@company.co.tz", initials: "FM", status: "Active" },
];

const departments = ["All", "Finance", "Operations", "Human Resources", "Logistics", "Hospitality", "Manufacturing"];

export default function TijaHRDirectory() {
  const [query, setQuery] = useState("");
  const [activeDept, setActiveDept] = useState("All");

  const filtered = employees.filter((e) => {
    const matchesQuery = e.name.toLowerCase().includes(query.toLowerCase()) || e.role.toLowerCase().includes(query.toLowerCase());
    const matchesDept = activeDept === "All" || e.dept === activeDept;
    return matchesQuery && matchesDept;
  });

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
              MK
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
        {/* Page header */}
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#25231F" }}>Employee Directory</h1>
          <p style={{ fontSize: 13.5, color: "#8C887F", margin: "4px 0 0" }}>
            <Users size={13} style={{ verticalAlign: -2, marginRight: 4 }} />
            128 employees across 6 departments
          </p>
        </div>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 14 }}>
          <Search size={17} color="#8C887F" style={{ position: "absolute", left: 13, top: 12 }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or role"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "11px 14px 11px 38px",
              borderRadius: 8,
              border: "1px solid #E4E0D8",
              background: "#FFFFFF",
              fontSize: 14.5,
              color: "#3D3A34",
              outline: "none",
            }}
          />
        </div>

        {/* Department filter chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 18, scrollbarWidth: "none" }}>
          {departments.map((d) => {
            const active = d === activeDept;
            return (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                style={{
                  flexShrink: 0,
                  padding: "7px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 500,
                  border: active ? "1px solid #0B5D5A" : "1px solid #E4E0D8",
                  background: active ? "#0B5D5A" : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#5B584F",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* Employee list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((emp) => (
            <div
              key={emp.name}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E4E0D8",
                borderRadius: 10,
                padding: "13px 14px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "#E6F4F2",
                  color: "#0B5D5A",
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {emp.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: "#25231F" }}>{emp.name}</span>
                  {emp.status === "On Leave" && (
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: "#B8860B", background: "#FBF1DC", padding: "2px 7px", borderRadius: 20 }}>
                      On Leave
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12.5, color: "#8C887F", marginTop: 1 }}>{emp.role}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <Building2 size={11} color="#B0AC9F" />
                  <span style={{ fontSize: 11.5, color: "#B0AC9F" }}>{emp.dept}</span>
                </div>
              </div>
              <ChevronRight size={18} color="#B0AC9F" />
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#8C887F", fontSize: 13.5 }}>
              No employees match your search.
            </div>
          )}
        </div>
      </div>

      {/* Floating add button */}
      <button
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#0B5D5A",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(11,93,90,0.35)",
          cursor: "pointer",
        }}
        aria-label="Add employee"
      >
        <Plus size={24} color="#fff" />
      </button>
    </div>
  );
}
