"use client";

import {
  Button,
  Input,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import successicon from "../../../../public/succesicon.svg";
import Image from "next/image";
import { BoundingBox } from "framer-motion";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";

export default function VoteFormComponent() {
  const [teamName, setTeamName] = useState<string>("");
  const [isTeamFocused, setIsTeamFocused] = useState<boolean>(false);
  const [isVoteButtonDisabled, setIsVoteButtonDisabled] =
    useState<boolean>(false);

  const {
    confirmedVote,
    isFormSubmitted,
    setConfirmedVote,
    setIsFormSubmitted,
  } = useAppContext();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleTeamNameInput = () => {
    return teamName.length <= 2;
  };

  const handleVoteButtonClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormSubmitted) {
      return;
    }
    setIsVoteButtonDisabled(true);
    setConfirmedVote(true);
    setIsFormSubmitted(true);
  };

  const teamLabelStyle: React.CSSProperties = {
    color: isTeamFocused || teamName ? "#CCFFFFFF" : "#858C94",
  };

  return (
    <form className="w-[90%] mb-8 md:mb-0 md:w-[650px] bg-[#0F1768] rounded-2xl p-12 text-white z-20">
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      {confirmedVote ? (
        <div className="flex space-x-2 mb-8">
          <Image src={successicon} alt="successicon" />
          <h1 className="text-[28px] font-bold leading-8">
            VOTO CONFIRMADO COM SUCESSO!
          </h1>
        </div>
      ) : (
        <h1 className="text-[28px] font-bold leading-8 mb-8">
          INSIRA O NOME ABAIXO E VOTE!
        </h1>
      )}

      <Input
        isDisabled={isFormSubmitted}
        onFocus={() => setIsTeamFocused(true)}
        onBlur={() => setIsTeamFocused(false)}
        type="text"
        value={teamName}
        onValueChange={setTeamName}
        label={<label style={teamLabelStyle}>Nome do time</label>}
        isRequired
        labelPlacement="outside"
        className="mt-8"
        classNames={{
          label: "text-[#858C94]",
          input: [
            "bg-transparent",
            "text-[#000]",
            "placeholder:text-default-700/50",
            "focus:ring-[#CCFFFFFF]",
            "focus:border-[#CCFFFFFF]",
          ],
        }}
      />
      {confirmedVote && (
        <p className="text-white mt-4">
          Fala, torcedor! No Bilhete da Sorte você só pode fazer{" "}
          <span className="font-bold">um voto por dia</span> e vimos que seu
          voto de hoje já foi computado! Mas não tem problema! É só voltar
          amanhã e votar no seu time novamente!
        </p>
      )}
      <Button
        type="submit"
        radius="full"
        isDisabled={isVoteButtonDisabled || handleTeamNameInput()}
        onClick={handleVoteButtonClick}
        className="bg-[#00E46F] font-heading text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5 w-full my-4"
      >
        VOTAR
      </Button>
      <Divider orientation="horizontal" className="mb-6 bg-[#FFFFFF33]" />
      <div className="flex space-x-4 items-center">
        {confirmedVote ? (
          <h2 className="text-[16px] font-semibold leading-6">
            Próximo voto disponível em{" "}
            <span className="text-[#00E46F]">14/12/2023 às 00:00.</span>
          </h2>
        ) : (
          <h2 className="text-[16px] font-semibold leading-6">
            Confira as regras!
          </h2>
        )}

        <Button
          onPress={onOpen}
          radius="full"
          variant="bordered"
          className="bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
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
                <ModalHeader className="text-3xl font-bold">
                  REGRAS GERAIS
                </ModalHeader>
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
    </form>
  );
}
