import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Root & Grounds",
  description: "Online platform for buying organice fresh produce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Add any other meta tags or links here */}
      </Head>
      <body className={inter.className}>
        <ChakraProvider>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
