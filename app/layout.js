import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tijahr.com"),
  title: "Tija HR - Employee management built for East Africa",
  description:
    "Tija HR brings everyday people operations into one simple system — helping growing Tanzanian businesses move beyond scattered spreadsheets, paperwork, and manual processes.",
  keywords: [
    "HR software Tanzania",
    "employee management Tanzania",
    "HR management software",
    "employee management software East Africa",
  ],
  openGraph: {
    title: "Tija HR - Employee management built for East Africa",
    description:
      "One simple system for employee records, leave, and documents — designed with Tanzanian organizations, not adapted from elsewhere.",
    url: "https://tijahr.com",
    siteName: "Tija HR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tija HR - Employee management built for East Africa",
    description:
      "One simple system for employee records, leave, and documents — designed with Tanzanian organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
