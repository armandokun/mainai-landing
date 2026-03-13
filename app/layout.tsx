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

export const metadata: Metadata = {
  title: "Mainai",
  description: "Mainai - Your AI-powered platform",
  manifest: "/site.webmanifest",
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
        <Script src="/silktide-consent-manager.js" strategy="afterInteractive" />
        <Script src="/silktide-config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
