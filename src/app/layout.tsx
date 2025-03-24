import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eKROWN | Technologies",
  description: "Expert networking, system administration, and DevOps services to transform your business infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
