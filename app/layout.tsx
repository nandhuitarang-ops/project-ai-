import type { Metadata, Viewport } from "next";
import "./globals.css";
import IntroGate from "@/components/motion/IntroGate";

export const viewport: Viewport = {
  themeColor: "#F5F4F0"
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <IntroGate />
        {children}
      </body>
    </html>
  );
}
