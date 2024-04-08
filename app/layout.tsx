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
      <meta name="description" content="Delivering top-tier Specialty and Single Origin Coffee Beans directly to your doorstep. Taste the quality and uniqueness with every sip" />
        {/* Standard meta tags for most platforms */}
        <meta property="og:title" content="Root And Grounds" />
        <meta property="og:description" content="Delivering top-tier Specialty and Single Origin Coffee Beans directly to your doorstep. Taste the quality and uniqueness with every sip." />
        <meta property="og:image" content="https://res.cloudinary.com/dlgyqy69b/image/upload/v1712558514/Add_a_heading_ksvt7f.png" />
        <meta property="og:url" content="https://rootandgrounds.co" />
        <meta property="og:type" content="website" />
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
