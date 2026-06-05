import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "plat—form® — Modular Landing Page",
  description: "The smarter way to build, run, and scale your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}