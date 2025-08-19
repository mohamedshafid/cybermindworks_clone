import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "CyberMind Works | Mohamed Hafid",
  description: "A Full-stack Admin Job Panel built with Next.js and TypeScript",
};

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
