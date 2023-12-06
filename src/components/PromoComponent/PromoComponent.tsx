import Image from "next/image";
import timea from "../../../public/timea.png";
import timeb from "../../../public/timeb.png";
import timec from "../../../public/timec.png";
import timed from '../../../public/timed.png';

export default function PromoComponent() {
  return (
    <div className="z-20 bg-[#fff] w-[50%]">
      <h1>
        Qual time é o diferenciado que não pode ficar de fora da Super Copa Zona
        Leste?!
      </h1>
      <p>
        Aqui a parada é daquele jeito! A Super Copa Zona Leste e a Esportes da
        Sorte estarão dando uma inscrição <span>SEM TAXA</span> para o time mais
        votado!
      </p>
      <br />
      <p>
        O vencedor também vai levar a bolada de <span>R$10.000,00</span> em
        cestas básicas para serem distribuídas na sede do time! Cê é louco!?
      </p>
      <div className="flex">
        <Image src={timea} alt="timea" />
        <Image src={timeb} alt="timeb" />
        <Image src={timec} alt="timec" />
        <Image src={timed} alt="timed" />
      </div>
    </div>
  );
}
