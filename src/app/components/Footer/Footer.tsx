import Image from "next/image";
import edsfooterlogo from "../../../../public/edsfooterlogo.png";
import twitterlogo from "../../../../public/twitterlogo.png";
import youtubelogo from "../../../../public/youtubelogo.png";
import instalogo from "../../../../public/instalogo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3 px-8 md:min-h-[140px] w-full bg-[#0F1768] flex flex-col flex-wrap md:flex-row items-center justify-evenly z-10">
      <Image src={edsfooterlogo} alt="esd footer logo" />

      <p className="text-[#fff]">@2023 Copyright - Esportedasorte</p>

      <div className="flex items-center gap-[16px] mt-4 mb-4">
        <Link
          href="https://twitter.com/EsportesDaSorte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={twitterlogo}
            alt="twitterlogo"
            className="h-[32px] w-[32px]"
          />
        </Link>
        <Link
          href="https://www.youtube.com/@esportesdasorteoficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={youtubelogo}
            alt="youtubelogo"
            className="h-[32px] w-[32px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/esportesdasorte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={instalogo}
            alt="instalogo"
            className="h-[32px] w-[32px]"
          />
        </Link>
      </div>
    </footer>
  );
}
