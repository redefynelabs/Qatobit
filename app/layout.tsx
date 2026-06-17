import type { Metadata } from "next";
import "./globals.css";
import { grift, inter } from "@/font";

export const metadata: Metadata = {
  title: "Qatobit || Your Wealth Architect for crypto.",
  description:
    "Qatobit builds digital wealth differently. We structure crypto exposure with precision, transform volatility into opportunity, and engineer portfolios that are resilient, strategic, and built to grow. It’s not speculation; it’s digital wealth, architected with intent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grift.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
