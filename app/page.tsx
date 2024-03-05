import Image from "next/image";
import Background from "@/components/Background"
import Overlay from "@/components/Overlay"
import Features from "@/components/Features"
import Products from "@/components/Products"
import About from "@/components/About"

export default function Home() {
  return (
    <>
    <Background/>
    <Overlay/>
    <About/>
    <Features/>
    <Products/>
    </>
  );
}
