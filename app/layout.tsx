import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
// import Footer from "./components/Footer";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "Prasoon - Portfolio",
  description:
    "Explore the portfolio of Mani Sai Prasoon Bandi, a passionate software engineer with expertise in building scalable and user-friendly web applications using modern technologies like Angular, ReactJS, and AI-driven platforms.",
  icons: {
    icon: "/Dev.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oxygen.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <div className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="main-container">
              <Navbar />
              {children}
              {/* <Footer /> */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
