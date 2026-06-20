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

export const metadata: Metadata = {
  title: "Dilan Liyanaarachchi | Full Stack & Data Science Enthusiast",
  description: "I'm Dilan, a passionate Full Stack Developer skilled in React, TypeScript, Spring Boot, and Data Science. Explore my projects in AI, Web Development, and Software Engineering.",
  keywords: ["Dilan Liyanaarachchi", "Full Stack Developer", "Software Engineer"], 
  authors: [{ name: "Dilan Liyanaarachchi" }],
  metadataBase: new URL("https://dilanliyanaarachchi.dev"), 
  openGraph: {
    type: "website",
    url: "https://dilanliyanaarachchi.dev/",
    title: "Dilan Liyanaarachchi | Full Stack & Data Science Enthusiast",
    description: "Discover my work in Full Stack Development and Data Science. Built with React, TypeScript, Tailwind CSS, and Spring Boot.",
    images: [
      {
        url: "/assets/profile.jpg",
        alt: "Dilan Liyanaarachchi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dilan Liyanaarachchi | Full Stack & Data Science Enthusiast",
    description: "Full Stack Developer specializing in React, TypeScript, Spring Boot & Data Science. Explore my portfolio projects.",
    images: ["/assets/profile.jpg"],
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
