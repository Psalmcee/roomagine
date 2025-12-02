import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roomagine",
  description: "Transform your space with curated room designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
