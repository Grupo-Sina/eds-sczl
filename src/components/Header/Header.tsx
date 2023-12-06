import Image from "next/image";
import edsnavarzealogo from '../../../public/edsnavarzealogo.png';

export default function Header () {

  return (
    <header className="h-[94px] bg-[#0F1768] flex justify-center items-center z-10" >
      <Image src={edsnavarzealogo} alt='header logo eds na varzea' />
    </header>
  );
};