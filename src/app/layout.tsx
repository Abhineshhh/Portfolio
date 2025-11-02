import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Abhinesh Jha | Backend Developer",
  description: "Backend Developer specializing in Java & Spring Boot. Building scalable systems, REST APIs, and microservices. Open source contributor.",
  keywords: [
    "Abhinesh Jha",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "REST API",
    "Microservices",
    "Software Engineer",
    "Open Source",
  ],
  authors: [{ name: "Abhinesh Jha", url: "https://github.com/Abhineshhh" }],
  creator: "Abhinesh Jha",
  metadataBase: new URL("https://www.abhineshhh.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhineshhh.me",
    siteName: "Abhinesh Jha Portfolio",
    title: "Abhinesh Jha | Backend Developer",
    description: "Backend Developer specializing in Java & Spring Boot. Building scalable systems, REST APIs, and microservices.",
    images: [
      {
        url: "/og-image.png", // We'll create this next
        width: 1200,
        height: 630,
        alt: "Abhinesh Jha - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinesh Jha | Backend Developer",
    description: "Backend Developer specializing in Java & Spring Boot. Building scalable systems and REST APIs.",
    creator: "@Abhineshhh",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
