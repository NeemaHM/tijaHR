import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Tija HR",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Link href="/" style={{ fontSize: 13.5, color: "var(--deep-teal)", textDecoration: "none" }}>&larr; Back to Tija HR</Link>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginTop: 24, marginBottom: 8 }}>Terms of Service</h1>
      <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 32 }}>Last updated: August 2026</p>

      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        Tija HR is currently in a pre-launch, product-development stage. Formal Terms of Service
        will be published here before the platform is made generally available to organizations.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 28 }}>Use of this website</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        This website is provided to share information about Tija HR and to collect demo requests
        from interested organizations. Product features described on this site represent current
        development direction and are subject to change as we continue customer discovery with
        Tanzanian businesses.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 28 }}>Contact</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>
        Questions can be sent through the demo request form on our homepage.
      </p>
    </div>
  );
}
