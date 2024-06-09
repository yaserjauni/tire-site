import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tire Empire - Best place to Buy New and Used Tires in Kitchener Waterloo",
  description: "Discover the best deals on both new and used, winter and all-season tires, with a great selection of top picks, including rims & accessories.",
  verification: {
    google: 'TOZK4k9D1lqazSXDf0n1gEAGhqjxao2eUFPZNhZiudY',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-717LDLBTVH" />
    </html>
  );
}
