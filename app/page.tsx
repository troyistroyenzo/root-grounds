import Image from "next/image";
import Background from "@/components/Background"
import Overlay from "@/components/Overlay"
import About from "@/components/About"
import FAQ from "@/components/Faq"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <>
    <Background/>
    <Overlay/>
    <Carousel/>
    <About/>
    <FAQ/>
  

    </>
  );
}
