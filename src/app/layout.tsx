import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eKROWN | Technologies",
  description: "Professional IT Solutions and Services",
  icons: {
    icon: '/eKROWN-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative bg-[#040B24] overflow-x-hidden`}>
        <div className="fixed inset-0 z-0">
          <Image
            src="/mesh-network.png"
            alt="Network Mesh Background"
            fill
            priority
            quality={100}
            className="object-cover opacity-0 animate-fade-in"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#040B24]/95 via-[#040B24]/85 to-[#040B24]/95 opacity-0 animate-gradient-fade"
          />
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
