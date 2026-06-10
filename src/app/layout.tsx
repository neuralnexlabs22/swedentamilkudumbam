import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  style: ['normal', 'italic']
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Sweden Tamil Kudumbam — Life in Sweden, Honestly",
  description: "Real stories from a Tamil family in Sweden. Jobs, relocation, Airbnb income and European life — guides built from our actual experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen bg-[#0D1B2E]`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
