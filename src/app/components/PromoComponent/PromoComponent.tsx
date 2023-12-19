"use client";

import React from "react";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

export default function PromoComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="z-20 max-w-[600px] desktop:max-w-[935px]">
      <h1>
        <span className="text-white font-bold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          B
        </span>
        <span className="text-white font-light font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          I
        </span>
        <span className="text-white font-extrabold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          L
        </span>
        <span className="text-white font-black font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          H
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-white font-bold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          {" "}
        </span>
        <span className="text-white font-bold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          D
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          A
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          {" "}
        </span>
        <span className="text-[#00E275] font-bold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          S
        </span>
        <span className="text-[#00E275] font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          O
        </span>
        <span className="text-[#00E275] font-extrabold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          R
        </span>
        <span className="text-[#00E275] font-extrabold font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-[#00E275] font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-white font-normal font-heading text-7xl desktop:text-[110px] desktop:leading-[108px]">
          !
        </span>
      </h1>
      <p className="text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        A Super Copa Zona Leste e a Esportes da Sorte estarão dando uma
        inscrição <span className="text-[#00E275] font-bold">SEM TAXA</span>{" "}
        para o time mais votado!
      </p>

      <p className="text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        E como aqui a parada é diferenciada, a equipe também indicará uma
        instituição de caridade para receber o valor de{" "}
        <span className="text-[#00E275] font-bold">R$10 mil.</span>{" "}
      </p>

      <p className="text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        Mostre que a torcida é pesada e ajude seu time a conquistar o lugar na
        Super Copa Zona Leste!{" "}
        <span className="font-semibold">Vote agora!</span>
      </p>
      <div className="space-x-4 mt-6">
        <Button
          onPress={onOpen}
          radius="full"
          className="bg-[#00E46F] font-heading text-[#003B9C] text-[16px] font-extrabold leading-5 text-center py-3 px-8 desktop:text-[24px] desktop:font-extrabold desktop:leading-[29px] desktop:py-6 desktop:px-11"
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
