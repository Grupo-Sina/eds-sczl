import Header from "@/app/components/Header/Header";
import FormComponent from "@/app/components/FormComponent/FormComponent";
import Footer from "@/app/components/Footer/Footer";

import Image from "next/image";

import shirtgradienteffect from "../../public/shirtgradienteffect.png";
import gradienteffectleft from '../../public/gradienteffectleft.png';
import edsvectorleft from '../../public/edsvectorleft.png';
import edsvectorright from '../../public/edsvectorright.png';
import PromoComponent from "./components/PromoComponent/PromoComponent";


export default function Home() {
  return (
    <div className="bg-[#1F3694] bg-center bg-cover min-h-screen w-screen bg-no-repeat flex flex-col justify-between overflow-x-hidden relative">
      <Header />
      <Image
        src={edsvectorleft}
        alt="shirtgradienteffect"
        className="absolute top-0 left-0"
      />
      <Image
        src={shirtgradienteffect}
        alt="shirtgradienteffect"
        className="absolute top-0 right-0 overflow-hidden h-screen object-cover"
      />
      <Image
        src={gradienteffectleft}
        alt="shirtgradienteffect"
        className="absolute left-0 bottom-0 overflow-hidden object-cover"
      />
      <Image
        src={edsvectorright}
        alt="shirtgradienteffect"
        className="absolute right-0 bottom-0"
      />
      <div className="flex w-screen justify-evenly">
        <PromoComponent />
        <FormComponent />
      </div>
      <Footer />
    </div>
  );
}
