'use client'

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";

export default function PromoComponent() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="z-20 max-w-[935px] mt-14 p-4">
      {/* <h1>BILHETE DA SORTE</h1> */}
      <h1 className="">
        <span
          className="font-heading leading-[-2rem]"
          style={{ color: "#FFF", fontWeight: "700", fontSize: "60px" }}
        >
          B
        </span>
        <span
          className="leading-[109px] font-heading"
          style={{ color: "#FFF", fontWeight: "300", fontSize: "60px" }}
        >
          I
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "800", fontSize: "60px" }}
        >
          L
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "900", fontSize: "60px" }}
        >
          H
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "400", fontSize: "60px" }}
        >
          E
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "bold", fontSize: "60px" }}
        >
          T
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "400", fontSize: "60px" }}
        >
          E
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "normal", fontSize: "60px" }}
        >
          {" "}
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "bold", fontSize: "60px" }}
        >
          D
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "bold", fontSize: "60px" }}
        >
          A
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "normal", fontSize: "60px" }}
        >
          {" "}
        </span>
        <span
          className="font-heading"
          style={{ color: "#00E275", fontWeight: "700", fontSize: "60px" }}
        >
          S
        </span>
        <span
          className="font-heading"
          style={{ color: "#00E275", fontWeight: "400", fontSize: "60px" }}
        >
          O
        </span>
        <span
          className="font-heading"
          style={{ color: "#00E275", fontWeight: "800", fontSize: "60px" }}
        >
          R
        </span>
        <span
          className="font-heading"
          style={{ color: "#00E275", fontWeight: "800", fontSize: "60px" }}
        >
          T
        </span>
        <span
          className="font-heading"
          style={{ color: "#00E275", fontWeight: "normal", fontSize: "60px" }}
        >
          E
        </span>
        <span
          className="font-heading"
          style={{ color: "#FFF", fontWeight: "normal", fontSize: "60px" }}
        >
          !
        </span>
      </h1>

      <br />
      <p className="text-white text-[26px] font-light leading-[48px]">
        A Super Copa Zona Leste e a Esportes da Sorte estarão dando uma
        inscrição <span className="text-[#00E275] font-bold">SEM TAXA</span>{" "}
        para o time mais votado!
      </p>
      <br />
      <p className="text-white text-[26px] font-light leading-[48px]">
        E como aqui a parada é diferenciada, a equipe também vai levar{" "}
        <span className="text-[#00E275] font-bold">
          R$10.000,00 em cestas básicas
        </span>{" "}
        para serem distribuídas na sede.
      </p>
      <br />
      <p className="text-white text-[26px] font-light leading-[48px]">
        Mostre que a torcida é pesada e ajude seu time a conquistar o lugar na
        Super Copa Zona Leste!{" "}
        <span className="font-semibold">Cadastre-se e vote!</span>
      </p>
      <div className="space-x-4 mt-6">
        <Button
          radius="full"
          variant="bordered"
          className="bg-transparent border-[#00E46F] text-[#00E46F] font-heading"
        >
          JÁ SOU CADASTRADO (A)
        </Button>
        <Button
          onPress={onOpen}
          radius="full"
          className="bg-[#00E46F] font-heading text-[#003B9C]"
        >
          VER REGRAS
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="flex flex-col gap-2 bg-[#0F1768] text-[#fff] p-[48px] max-w-[850px]" classNames={{
          body: "list-disc text-white",
        }}>
          <ModalContent>
            {(onClose) => (
              <>
                <p className="ml-5">Bilhete da Sorte</p>
                <ModalHeader>REGRAS GERAIS</ModalHeader>
                <ModalBody>
                  <ul className="list-disc">
                    <li>A promoção vai contar com duas fases. A primeira, que ocorre dos dias 20 a 28 de dezembro, vai selecionar os 5 (cinco) times mais mencionados para concorrerem ao prêmio final. Na segunda fase, que vai do dia 26 de dezembro até o dia 08 de janeiro, os 5 (cinco) times selecionados irão participar de mais uma votação popular para ver quem será o grande ganhador.</li>
                    <br />
                    <li>Você pode realizar apenas 1 (um) voto por dia.</li>
                    <br />
                    <li>O resultado final será divulgado no dia 08 de janeiro de 2024.</li>
                    <br />
                    <li>O time vencedor ganhará uma inscrição (R$4.000,00) sem taxa na Super Copa Zona Leste e também indicará uma instituição de caridade para receber R$10.000,00 em cesta básica, para serem distribuídas pelo time.</li>
                  </ul>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
