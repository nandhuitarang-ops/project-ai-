import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#fbf7ec"
};

export const metadata: Metadata = {
  title: "Nexia — The Guiding Intellect",
  description:
    "Nexia helps ambitious builders ship production-grade AI projects. Intellect. Connection. Growth.",
  openGraph: {
    title: "Nexia — The Guiding Intellect",
    description:
      "Production-grade AI projects, built with you. Intellect. Connection. Growth.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
