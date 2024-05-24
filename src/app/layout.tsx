import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tire Empire",
  description: "Discover the best deals on winter and all-season tires, both new and used, in various widths, sizes, and profiles. Our website also offers a selection of top picks, including options with rims.",
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
