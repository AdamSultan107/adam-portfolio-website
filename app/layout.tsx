import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Sultan | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer and Carnegie Mellon University student focused on reliable, mission-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
