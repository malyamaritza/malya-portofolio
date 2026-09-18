import type { Metadata } from "next";
import { Quicksand, Space_Mono, Plus_Jakarta_Sans, Patrick_Hand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const patrickHand = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-patrick",
});

export const metadata: Metadata = {
  title: "Malya Maritza Rahadiani | Secret Garden Portfolio",
  description: "Secret garden scrapbook portfolio dossier for Malya Maritza Rahadiani.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${quicksand.variable} ${spaceMono.variable} ${patrickHand.variable} selection:bg-[#D2E3C8] selection:text-[#2d3b2a]`}>
        {children}
      </body>
    </html>
  );
}