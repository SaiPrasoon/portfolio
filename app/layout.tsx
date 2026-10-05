import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// Degular substitute — UI, body, navigation, metadata.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-stack",
});

// Blanco substitute — headlines, section titles, role titles.
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif-stack",
});

const DESCRIPTION =
  "Senior Frontend Engineer with 7+ years building high-performance web applications across fintech, legaltech, and AI-driven SaaS, using React, Angular, Next.js, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bmsprasoon.com"),
  title: "Prasoon Bandi | Senior Frontend Engineer",
  description: `Explore the portfolio of Mani Sai Prasoon Bandi. ${DESCRIPTION}`,
  openGraph: {
    title: "Prasoon Bandi | Senior Frontend Engineer",
    description: DESCRIPTION,
    url: "https://bmsprasoon.com",
    siteName: "Prasoon Bandi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasoon Bandi | Senior Frontend Engineer",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/initials.svg" type="image/svg+xml" />
        {/* Applies the stored theme before first paint so there is no flash.
            Dark is the default, so this only ever opts in to light. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
