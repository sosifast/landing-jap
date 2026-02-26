import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "JustAnotherPanel - #1 Cheapest SMM Panel for Social Growth",
  description: "Boost your social media growth with JustAnotherPanel. The most affordable and high-quality SMM panel for Instagram, TikTok, YouTube, and more. Trusted by industry leaders worldwide.",
  keywords: ["SMM Panel", "Cheapest SMM Panel", "Social Media Marketing", "Instagram Growth", "TikTok SMM Panel", "JustAnotherPanel", "JAP SMM"],
  authors: [{ name: "JustAnotherPanel" }],
  openGraph: {
    title: "JustAnotherPanel - #1 Cheapest SMM Panel for Social Growth",
    description: "Revolutionize your social growth with the world's #1 SMM panel. Affordable, fast, and reliable services for all social platforms.",
    url: "https://justanotherpanel.com",
    siteName: "JustAnotherPanel",
    images: [
      {
        url: "/og-image.png", // Recommended: users should add this file
        width: 1200,
        height: 630,
        alt: "JustAnotherPanel SMM Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustAnotherPanel - #1 Cheapest SMM Panel",
    description: "Boost your social media presence with the most affordable SMM panel services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.webp",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
