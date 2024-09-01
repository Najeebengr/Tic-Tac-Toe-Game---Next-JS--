import type { Metadata } from "next";
import {Lilita_One } from 'next/font/google'
import "./globals.css";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tic Tac Toe Game",
  description: "Tic Tac Toe Game created in next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lilita.className}>{children}</body>
    </html>
  );
}
