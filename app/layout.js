import "./globals.css";

export const metadata = {
  title: "TijaHR — Employee management built for Tanzania",
  description: "Replace scattered Excel, WhatsApp, and paper records with one simple employee management platform, built for Tanzanian businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
