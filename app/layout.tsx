/** @format */

import type { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--young-serif",
});

const outfit = Outfit({
  weight: ["400", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--outfit",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${youngSerif.variable} antialiased lg:bg-stone-100 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
