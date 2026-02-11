import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://santacruzscent.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Santa Cruz Scent - Premium Fragrance Decants & Candles",
    template: "%s | Santa Cruz Scent",
  },
  description: "Discover luxury fragrances in travel-friendly sizes. Flight-ready decants and artisan candles in Santa Cruz.",
  keywords: ["fragrance", "perfume", "decants", "Santa Cruz", "travel size", "TSA approved", "flight ready", "luxury scents", "PF Candle", "niche fragrance"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Santa Cruz Scent",
    title: "Santa Cruz Scent - Premium Fragrance Decants & Candles",
    description: "Discover luxury fragrances in travel-friendly sizes. Flight-ready decants and artisan candles in Santa Cruz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Cruz Scent - Premium Fragrance Decants & Candles",
    description: "Discover luxury fragrances in travel-friendly sizes. Flight-ready decants and artisan candles in Santa Cruz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
