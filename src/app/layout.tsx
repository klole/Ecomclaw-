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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
