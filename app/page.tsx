import Image from "next/image";
import Background from "@/components/Background"
import Overlay from "@/components/Overlay"
import About from "@/components/About"
// import FAQ from "@/components/Faq"
import Featured from "@/components/Featured"

export default function Home() {
  return (
    <>
    <Background/>
    <Overlay/>
    <Featured/>
    <About/>
    {/* <FAQ/> */}
  

    </>
  );
}
