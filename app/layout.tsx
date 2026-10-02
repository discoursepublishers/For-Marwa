import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Marwa",
  description: "A little something made for Marwa.",
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