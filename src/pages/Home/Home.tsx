import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import favela from '../../../public/favela.png';
import bgvectors from '../../../public/bgvectors.png';
import bgvectorsbottom from '../../../public/bgvectorsbottom.png';
import shirtgradienteffect from '../../../public/shirtgradienteffect.png';
import camisa from '../../../public/camisa.png';
import escudozl from '../../../public/escudozl.png';
import FormComponent from "@/components/FormComponent/FormComponent";
import PromoComponent from "@/components/PromoComponent/PromoComponent";

export default function Home () {
  return (
    <div className="bg-[#1F3694] bg-center bg-cover min-h-screen w-screen bg-no-repeat flex flex-col justify-between overflow-hidden" style={{ backgroundImage: "url('/bgeffect.png')" }}>
      <Header />
      <Image src={bgvectors} alt="bgvectors" className="absolute top-[94px] z-[0]"/>
      <Image src={camisa} alt="camisa" className="absolute top-[85px] right-0 z-10" />
      {/* <Image src={shirtgradienteffect} alt="shirtgradienteffect" className="absoliute top-0 right-0 z-0 w-[400px] h-[700px] overflow-y-hidden " /> */}
      {/* <Image src={escudozl} alt="escudozl" className="absolute top-[135px] left-[130px]"/> */}
      <div className="flex w-screen">
        {/* <PromoComponent /> */}
        {/* <FormComponent /> */}
      </div>
      <Image src={favela} alt="favela" className="absolute bottom-[137px] h-[106px]"/>
      <Image src={bgvectorsbottom} alt="bgvectors" className="absolute bottom-0 right-0 z-[0]"/>
      <Footer />
    </div>
  );
};