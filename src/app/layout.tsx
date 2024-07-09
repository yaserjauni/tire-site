import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tire Empire - Best Tire shop to Buy used tires in Kitchener Waterloo",
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
      <body className={inter.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-717LDLBTVH" />
    </html>
  );
}
