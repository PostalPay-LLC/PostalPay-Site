import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostalPay - Smart Pay Tracking for USPS Workers",
  description:
    "PostalPay helps USPS mail carriers and postal employees accurately track work hours, mileage, and pay in real time. Available on iOS and Android.",
  keywords: [
    "USPS",
    "postal worker",
    "pay tracker",
    "mail carrier",
    "overtime",
    "mileage tracking",
  ],
  openGraph: {
    title: "PostalPay - Smart Pay Tracking for USPS Workers",
    description:
      "Accurately track your hours, mileage, and pay as a USPS employee. Real-time calculations for overtime, evaluation pay, holiday pay, and more.",
    type: "website",
    url: "https://postalpay.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
