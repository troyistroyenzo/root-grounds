import Image from "next/image";
import Background from "@/components/Background"
import Overlay from "@/components/Overlay"
import Products from "@/components/Products"
import About from "@/components/About"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"
import FoodProducts from "@/components/FoodProducts"
import DrinkProducts from "@/components/DrinkProducts"

export default function Home() {
  return (
    <>
    <Background/>
    <Overlay/>
    <Products/>
    {/* <Newsletter/> */}
    <FoodProducts/>
    <DrinkProducts/>
    <About/>
    <FAQ/>
    </>
  );
}
