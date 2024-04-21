import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import Head from 'next/head';
import dynamic from "next/dynamic"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Root & Grounds",
  description: "Delivering top-tier Specialty and Single Origin Coffee Beans directly to your doorstep. Taste the quality and uniqueness with every sip",
}

const CrispWithNoSSR = dynamic(() => import("@/components/crisp"), { ssr: false }); // Load with no SSR


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://res.cloudinary.com/dlgyqy69b/image/upload/v1712558514/Add_a_heading_ksvt7f.png" />
        <meta property="og:url" content="https://rootandgrounds.co" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
      <CrispWithNoSSR />
        <ChakraProvider>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
