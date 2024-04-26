import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import Head from 'next/head';
import dynamic from "next/dynamic"; 
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Root & Grounds",
  description: "Root and Grounds is more than just a coffee shop; it's a destination for those seeking a fresh, wholesome experience. We take pride in offering fresh produce sourced directly from the earth, ensuring that every sip and bite is free from added sugars, preservatives, and stabilizers. Our commitment to sustainability extends to our delivery options, with same-day delivery and batch shipping available for your convenience. Soon, we'll introduce subscription plans for our loyal customers, making it easier than ever to enjoy your favorite items on a regular basis. Stay tuned for our integrated payment options, which will include a variety of methods, from GCash to Bitcoin. Join us at Root and Grounds and experience coffee culture redefined.",
}

const CrispWithNoSSR = dynamic(() => import("@/components/Crisp"), { ssr: false }); // Load with no SSR


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
        <Analytics/>
      </body>
    </html>

  );
}
