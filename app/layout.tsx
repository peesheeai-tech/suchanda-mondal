import type { Metadata } from "next";
import { Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://suchanda-mondal.vercel.app"),
  title: "Suchanda Mondal — Hospitality & Business Management Professional",
  description: "8+ years of luxury hospitality leadership across UAE and India. Assistant Manager at Sheraton Jumeirah Beach Resort. Business Manager at Imperia Clinic.",
  openGraph: {
    title: "Suchanda Mondal — Hospitality & Business Management",
    description: "8+ years in luxury hotels and resorts. Sheraton, Lapita, Le Meridien. Available for senior hospitality and business management roles in UAE.",
    images: [{ url: "/images/suchanda.jpg", width: 780, height: 1040 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${playfair.variable}`}>
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  );
}
