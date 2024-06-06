import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "8ftbeanbag-website-components/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abi's Status",
  description: "Info on Abi's status!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
