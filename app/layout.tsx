import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import { Toaster } from "sonner";
import GoToTop from "../components/go-to-top";
import LoadingScreen from "../components/LoadingScreen";
import type { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://ahmed-reda-dev.vercel.app";

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#111111]">
        <LoadingScreen />

        <Header />

        <Toaster />

        {children}

        <GoToTop />
      </body>
    </html>
  );
}
