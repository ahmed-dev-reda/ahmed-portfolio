import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
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
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-body text-on-surface">
        {children}
      </body>
    </html>
  );
}
