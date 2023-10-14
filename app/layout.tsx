import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UINavigation from "./components/ui-navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doggo - Explore the dog's world!",
  description:
    "Doggo home page, explore the biggest dog's database in one application!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UINavigation />
        {children}
      </body>
    </html>
  );
}
