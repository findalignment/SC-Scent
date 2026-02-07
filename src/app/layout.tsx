import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Santa Cruz Scent - Premium Fragrance Decants & Candles",
    template: "%s | Santa Cruz Scent",
  },
  description: "Discover luxury fragrances in travel-friendly sizes. Flight-ready decants and artisan candles.",
  keywords: ["fragrance", "perfume", "decants", "travel size", "TSA approved", "flight ready", "luxury scents", "PF Candle", "Santa Cruz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
