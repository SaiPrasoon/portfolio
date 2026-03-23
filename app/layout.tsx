import type { Metadata } from "next";
import { Inter, Oxygen } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "Prasoon Bandi | Software Engineer",
  description:
    "Explore the portfolio of Mani Sai Prasoon Bandi, a passionate software engineer with 6+ years of experience building scalable web applications using Angular, React, TypeScript, and AI-driven platforms.",
  openGraph: {
    title: "Prasoon Bandi | Software Engineer",
    description:
      "Software engineer with 6+ years of experience building scalable web applications.",
    url: "https://bmsprasoon.com",
    siteName: "Prasoon Bandi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasoon Bandi | Software Engineer",
    description:
      "Software engineer with 6+ years of experience building scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/initials.svg" type="image/svg+xml" />
      </head>

      <body
        className={`${oxygen.variable} ${inter.variable} font-[family-name:var(--font-oxygen)] antialiased`}
      >
        <Toaster position="top-right" />
        <div className="min-h-screen flex flex-col items-center">
          <div className="main-container px-4 py-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
