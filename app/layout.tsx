import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mairyBold = localFont({
  src: "./fonts/MairyBold.otf",
  variable: "--font-mairy-bold",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Foodle",
  description: "Restaurant app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen antialiased capitalize">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
