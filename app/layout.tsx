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

export const metadata = {
  title: "BlastRadius AI | Prevent Risk Before It Exists",
  description:
    "Preventive Engineering Intelligence that predicts risk, automates remediation, and prevents production incidents before they happen.",
  openGraph: {
    title: "BlastRadius AI",
    description: "Prevent Risk Before It Exists.",
    url: "https://blastradiusai.com",
    siteName: "BlastRadius AI",
    images: [
      {
        url: "https://blastradiusai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlastRadius AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlastRadius AI",
    description: "Prevent Risk Before It Exists.",
    images: ["https://blastradiusai.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
