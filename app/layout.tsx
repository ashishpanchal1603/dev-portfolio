import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "../data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.title}`,
  description: portfolioData.summary,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Ahmedabad Developer",
    "Ashish Panchal",
    "Software Engineer",
  ],
  alternates: {
    canonical: "https://ashishpanchal.dev",
  },
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description: portfolioData.summary,
    url: "https://ashishpanchal.dev",
    siteName: `${portfolioData.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description: portfolioData.summary,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.name,
    "jobTitle": portfolioData.title,
    "email": portfolioData.email,
    "telephone": portfolioData.phone,
    "url": "https://ashishpanchal.dev",
    "sameAs": [
      portfolioData.githubUrl,
      portfolioData.linkedinUrl,
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "JavaScript",
      "REST APIs",
      "Node.js",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN",
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": portfolioData.education.institution,
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f4f4f5] antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
