import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Tija HR",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Link href="/" style={{ fontSize: 13.5, color: "var(--deep-teal)", textDecoration: "none" }}>&larr; Back to Tija HR</Link>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginTop: 24, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 32 }}>Last updated: August 2026</p>

      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        Tija HR is currently in a pre-launch, product-development stage. This page will be replaced
        with a complete Privacy Policy before the platform is generally available and before any
        organization's employee data is processed on Tija HR.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 28 }}>What we collect today</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        At this stage, we only collect the information you choose to submit through our demo
        request form — your name, work email, company name, role, industry, approximate company
        size, and an optional phone number and message. This information is used solely to respond
        to your request and to inform product development.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 28 }}>What's coming</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        As Tija HR moves toward handling real employee data on behalf of client organizations, this
        policy will be expanded to cover data storage, retention, security practices, and applicable
        regulatory obligations in detail. We will not claim a compliance standard we have not
        actually implemented and verified.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 28 }}>Contact</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        Questions about this policy can be sent through the demo request form on our homepage.
      </p>
    </div>
  );
}
