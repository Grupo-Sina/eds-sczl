import Image from "next/image";
import edsfooterlogo from "../../../public/edsfooterlogo.png";
import twitterlogo from "../../../public/twitterlogo.png";
import youtubelogo from "../../../public/youtubelogo.png";
import instalogo from "../../../public/instalogo.png";

export default function Footer() {
  return (
    <footer className="h-[140px] bg-[#0F1768] flex justify-center w-full items-center gap-[80px] z-10">
      <Image src={edsfooterlogo} alt="esd footer logo" className="h-[60px]"/>
      <p className="text-[#fff]">@2023 Copyright - Esportedasorte</p>
      <div className="flex">
        <Image src={twitterlogo} alt="twitterlogo" className="h-[32px] w-[32px]"/>
        <Image src={youtubelogo} alt="youtubelogo" className="h-[32px] w-[32px]"/>
        <Image src={instalogo} alt="instalogo" className="h-[32px] w-[32px]"/>
      </div>
    </footer>
  );
}
