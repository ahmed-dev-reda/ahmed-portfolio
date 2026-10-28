import type { Metadata } from "next";

import "./globals.css";
import { Anton, Cairo, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/sections/header";
import AppToaster from "@/components/providers/toaster";
import { I18nProvider } from "@/components/providers/i18n";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const siteUrl = "https://ahmedreda-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ahmed Reda | Frontend Developer",
    template: "%s | Ahmed Reda",
  },

  description:
    "Ahmed Reda is a Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web development.",

  keywords: [
    "Ahmed Reda",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Redux",
    "Web Developer",
  ],

  authors: [
    {
      name: "Ahmed Reda",
    },
  ],

  creator: "Ahmed Reda",
  publisher: "Ahmed Reda",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ahmed Reda | Frontend Developer",

    title: "Ahmed Reda | Frontend Developer",

    description:
      "Frontend Developer building modern, fast, and scalable web experiences with React and Next.js.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Reda - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Reda | Frontend Developer",
    description:
      "Frontend Developer building modern web experiences with React and Next.js.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/profile.ico",
    shortcut: "/profile.ico",
    apple: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning className="dark" lang="en" dir="ltr">
      <body
        className={`${anton.variable} ${inter.variable} ${cairo.variable} min-h-full bg-background font-body text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["dark", "light"]}
        >
          <I18nProvider>
            <Header />
            {children}
            <AppToaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
