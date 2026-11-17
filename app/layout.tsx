import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Shegokar — Machine Learning Engineer",
  description:
    "Om Shegokar — machine learning engineer based in Pune. Generative AI, distributed LLM evaluation, inference optimization, and persistent-memory coding agents.",
  metadataBase: new URL("http://localhost:3000"), // TODO: set to production URL after first deploy
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <div aria-hidden="true" className="crt-overlay" />
      </body>
    </html>
  );
}
