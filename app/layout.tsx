import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Coding Journey 🌸",
  description: "Learn Python and AI from absolute beginner to builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">{children}</body>
    </html>
  );
}
