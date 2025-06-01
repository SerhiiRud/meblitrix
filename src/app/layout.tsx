import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import meta from "@/data/meta.json";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const NEXT_PUBLIC_URL = "http://localhost:3000/";

const { title, description, manifest, openGraph, icons } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title,
  description,
  icons,
  manifest,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
  },
  openGraph: {
    ...openGraph,
    url: NEXT_PUBLIC_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(oswald.className, "flex h-full min-h-screen flex-col")}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
