import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Foodle - Login",
  description: "Restaurant app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen antialiased capitalize">{children}</body>
    </html>
  );
}
