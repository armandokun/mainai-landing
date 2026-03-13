import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://mainai.social";

export const metadata: Metadata = {
  title: "Mainai",
  description: "Kur svetimi tampa pažįstamais, o paprasti dalykai sujungia.",
  manifest: "/site.webmanifest",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Mainai",
    description: "Kur svetimi tampa pažįstamais, o paprasti dalykai sujungia.",
    url: BASE_URL,
    siteName: "Mainai",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 566,
        alt: "Mainai",
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainai",
    description: "Kur svetimi tampa pažįstamais, o paprasti dalykai sujungia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <head>
        <link rel="stylesheet" href="/silktide-consent-manager.css" />
        <style>{`
          #silktide-wrapper {
            --primaryColor: #DC321E;
            --backgroundColor: #faf5f0;
            --textColor: #191919;
            --cookieIconBackgroundColor: #DC321E;
            --cookieIconColor: #faf5f0;
            --fontFamily: var(--font-solar), Helvetica Neue, Arial, sans-serif;
          }
          #silktide-wrapper * {
            font-family: var(--font-solar), Helvetica Neue, Arial, sans-serif !important;
          }
          #silktide-wrapper .st-button {
            border-radius: 40px;
            border-width: 1.67px;
          }
          #silktide-wrapper .st-button--primary:hover {
            background-color: #b82818 !important;
            color: #faf5f0 !important;
            border-color: #b82818 !important;
          }
          #silktide-wrapper .st-button--secondary {
            background-color: transparent !important;
            color: #DC321E !important;
            border-color: #DC321E !important;
          }
          #silktide-wrapper .st-button--secondary:hover {
            background-color: transparent !important;
            color: #b82818 !important;
            border-color: #b82818 !important;
          }
          #silktide-wrapper {
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          #silktide-wrapper.consent-ready {
            opacity: 1;
          }
          #silktide-banner {
            border-radius: 12px !important;
          }
          #silktide-wrapper .preferences-reject-all {
            background-color: #faf5f0 !important;
            color: #DC321E !important;
            border-color: #DC321E !important;
          }
          #silktide-wrapper .preferences-reject-all:hover {
            background-color: #faf5f0 !important;
            color: #b82818 !important;
            border-color: #b82818 !important;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/silktide-bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
