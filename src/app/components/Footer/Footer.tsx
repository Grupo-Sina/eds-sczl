import Image from "next/image";
import edsfooterlogo from "../../../../public/edsfooterlogo.png";
import twitterlogo from "../../../../public/twitterlogo.png";
import youtubelogo from "../../../../public/youtubelogo.png";
import instalogo from "../../../../public/instalogo.png";

export default function Footer() {
  return (
    <footer className="h-auto min-h-[140px] bg-[#0F1768] flex flex-col flex-wrap md:flex-row items-center justify-evenly z-10">
      <Image src={edsfooterlogo} alt="esd footer logo" />

      <p className="text-[#fff]">@2023 Copyright - Esportedasorte</p>

      <div className="flex items-center gap-[16px] mt-4 mb-4">
        <Image
          src={twitterlogo}
          alt="twitterlogo"
          className="h-[32px] w-[32px]"
        />
        <Image
          src={youtubelogo}
          alt="youtubelogo"
          className="h-[32px] w-[32px]"
        />
        <Image src={instalogo} alt="instalogo" className="h-[32px] w-[32px]" />
      </div>
    </footer>
  );
}
