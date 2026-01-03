import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Demand - AI Automation & Web Development",
  description: "Build stunning, conversion-focused websites and power them with AI automation that captures leads, answers enquiries, and books appointments 24/7. Serving South African businesses.",
  keywords: ["Build Demand", "AI automation", "web development", "Next.js", "TypeScript", "South Africa", "lead generation", "WhatsApp automation", "booking automation"],
  authors: [{ name: "Build Demand" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Build Demand - Beautiful Websites & Intelligent Automation",
    description: "Build Demand creates stunning websites and AI automation for South African businesses. Capture leads 24/7 with WhatsApp automation and smart booking systems.",
    url: "https://builddemandmarketing.com",
    siteName: "Build Demand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Demand - AI Automation & Web Development",
    description: "Beautiful websites and AI automation for South African businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
