import Image from "next/image";
import Background from "@/components/Background"
import Overlay from "@/components/Overlay"
import About from "@/components/About"
import Questions from "@/components/Questions"
import Featured from "@/components/Featured"
import Clients from "@/components/Clients"

export default function Home() {
  return (
    <>
    <Background/>
    <Overlay/>
    <Clients/>
    <Featured/>
    <About/>
    <Questions/>
  

    </>
  );
}
