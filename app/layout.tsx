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
  title: "Mohammed Kaif | QA Engineer Portfolio",
  description:
    "Junior QA Engineer specializing in AI Healthcare, Logistics, and Manufacturing testing. Expert in manual testing, regression testing, API validation, and Agile methodologies.",
  keywords: [
    "QA Engineer",
    "Quality Assurance",
    "Manual Testing",
    "Mohammed Kaif",
    "Software Testing",
    "AI Testing",
    "Regression Testing",
  ],
  authors: [{ name: "Mohammed Kaif" }],
  openGraph: {
    title: "Mohammed Kaif | QA Engineer Portfolio",
    description:
      "Junior QA Engineer specializing in AI Healthcare, Logistics, and Manufacturing testing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Kaif | QA Engineer Portfolio",
    description:
      "Junior QA Engineer specializing in AI Healthcare, Logistics, and Manufacturing testing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0F19] text-[#E2E8F0]`}
      >
        {children}
      </body>
    </html>
  );
}
