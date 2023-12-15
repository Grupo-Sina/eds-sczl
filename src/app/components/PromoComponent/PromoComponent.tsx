"use client";

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

export default function PromoComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="z-20 max-w-[600px] p-4 pt-24 pl-14">
      <h1>
        <span
          style={{
            color: "#FFF",
            fontWeight: "700",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          B
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "300",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          I
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "800",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          L
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "900",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          H
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "400",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          E
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          T
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "400",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          E
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "normal",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          {" "}
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          D
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          A
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "normal",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          {" "}
        </span>
        <span
          style={{
            color: "#00E275",
            fontWeight: "700",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          S
        </span>
        <span
          style={{
            color: "#00E275",
            fontWeight: "400",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          O
        </span>
        <span
          style={{
            color: "#00E275",
            fontWeight: "800",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          R
        </span>
        <span
          style={{
            color: "#00E275",
            fontWeight: "800",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          T
        </span>
        <span
          style={{
            color: "#00E275",
            fontWeight: "normal",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          E
        </span>
        <span
          style={{
            color: "#FFF",
            fontWeight: "normal",
            fontSize: "68px",
            fontFamily: "Heading Pro Trial",
          }}
        >
          !
        </span>
      </h1>
      <p className="text-white text-xl font-light">
        A Super Copa Zona Leste e a Esportes da Sorte estarão dando uma
        inscrição <span className="text-[#00E275] font-bold">SEM TAXA</span>{" "}
        para o time mais votado!
      </p>
      <br />
      <p className="text-white text-xl font-light">
        E como aqui a parada é diferenciada, a equipe também indicará uma
        instituição de caridade para receber o valor de{" "}
        <span className="text-[#00E275] font-bold">R$10 mil.</span>{" "}
      </p>
      <br />
      <p className="text-white text-xl font-light">
        Mostre que a torcida é pesada e ajude seu time a conquistar o lugar na
        Super Copa Zona Leste!{" "}
        <span className="font-semibold">Vote agora!</span>
      </p>
      <div className="space-x-4 mt-6">
        <Button
          onPress={onOpen}
          radius="full"
          className="bg-[#00E46F] font-heading text-[#003B9C] text-[16px] font-extrabold leading-5 text-center py-3 px-8"
        >
          VER REGRAS
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="flex flex-col gap-2 bg-[#0F1768] text-[#fff] p-[48px] max-w-[850px]"
          classNames={{
            body: "list-disc text-white",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <p className="ml-5">Bilhete da Sorte</p>
                <ModalHeader>REGRAS GERAIS</ModalHeader>
                <ModalBody>
                  <ul className="list-disc">
                    <li>
                      A promoção vai contar com duas fases. A primeira, que
                      ocorre dos dias 20 a 28 de dezembro, vai selecionar os 5
                      (cinco) times mais mencionados para concorrerem ao prêmio
                      final. Na segunda fase, que vai do dia 26 de dezembro até
                      o dia 08 de janeiro, os 5 (cinco) times selecionados irão
                      participar de mais uma votação popular para ver quem será
                      o grande ganhador.
                    </li>
                    <br />
                    <li>Você pode realizar apenas 1 (um) voto por dia.</li>
                    <br />
                    <li>
                      O resultado final será divulgado no dia 08 de janeiro de
                      2024.
                    </li>
                    <br />
                    <li>
                      O time vencedor ganhará uma inscrição (R$4.000,00) sem
                      taxa na Super Copa Zona Leste e também indicará uma
                      instituição de caridade para receber R$10.000,00 em cesta
                      básica, para serem distribuídas pelo time.
                    </li>
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
