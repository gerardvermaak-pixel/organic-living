import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Header from '@/components/Header';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Organic Living | Premium Organic Cacao for Human Optimization",
  description: "Luxury organic cacao beans, nibs, powder & paste. Sourced for cafés, wellness centres & high-performers. Human optimization through nature's most powerful superfood.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-luxury-black text-luxury-cream antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}