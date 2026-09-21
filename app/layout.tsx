import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EasterEgg } from "@/components/EasterEgg";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Shegokar — AI/ML Engineer",
  description:
    "Om Shegokar — AI/ML engineer at Juspay (Xyne team). LLM evaluation platforms, inference optimization, and agentic developer tooling. Bengaluru, India.",
  metadataBase: new URL("http://localhost:3000"), // TODO: set to production URL after first deploy
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EasterEgg />
        <div aria-hidden="true" className="crt-overlay" />
      </body>
    </html>
  );
}
