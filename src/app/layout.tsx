import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mengo.ai — Your E-Commerce Team That Never Sleeps",
  description:
    "7 AI agents that handle your ads, recover carts, find trends, and grow your store — while you sleep. Join the waitlist.",
  openGraph: {
    title: "Mengo.ai — Your E-Commerce Team That Never Sleeps",
    description:
      "7 AI agents that handle your ads, recover carts, find trends, and grow your store — while you sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
