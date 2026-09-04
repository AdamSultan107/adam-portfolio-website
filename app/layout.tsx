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
  title: "Adam Sultan | Full-Stack & GenAI Software Engineer",
  description:
    "Adam Sultan is a Carnegie Mellon senior and former PNC GenAI engineering intern building production RAG, multi-agent, backend, and full-stack systems.",
  keywords: [
    "Adam Sultan",
    "software engineer",
    "full-stack engineer",
    "GenAI engineer",
    "Carnegie Mellon University",
    "RAG",
    "Django",
    "React",
    "Azure OpenAI",
  ],
  authors: [{ name: "Adam Sultan" }],
  creator: "Adam Sultan",
  openGraph: {
    title: "Adam Sultan | Full-Stack & GenAI Software Engineer",
    description:
      "CMU senior and former PNC GenAI engineering intern building production RAG, backend, and full-stack systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Adam Sultan | Full-Stack & GenAI Software Engineer",
    description:
      "CMU senior and former PNC GenAI engineering intern building production RAG, backend, and full-stack systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
