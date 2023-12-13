"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import edsnavarzealogo from "../../../../public/edsnavarzealogo.png";
import escudozl from "../../../../public/escudozl.png";

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="h-[94px] bg-[#0F1768] flex justify-around items-center z-10">
      <Image src={escudozl} alt="escudo zona leste" width={38} height={45} />
      <Image src={edsnavarzealogo} alt="header logo eds na varzea" />
      <div className="space-x-4">
        <Button
          radius="full"
          size="md"
          className="bg-[#0F1768] border-solid border-[#00E46F] text-[#00E46F]"
          variant="bordered"
        >
          CADASTRE-SE
        </Button>
        <Button
          onPress={onOpen}
          radius="full"
          size="md"
          className="bg-[#00E46F] text-[#003B9C]"
        >
          LOGIN
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-[716px] p-[48px] bg-[#0F1768] text-white">
          <ModalContent>
            { (onClose) => (
              <>
                <p className="ml-6">Bilhete da Sorte</p>
                <ModalHeader className="text-[28px]">FAÇA LOGIN E VOTE!</ModalHeader>
                <ModalBody>
                  <Input labelPlacement='outside' label='Usuário' isRequired />
                  <Input labelPlacement='outside' label='Senha' isRequired />
                  <Button radius="full" isDisabled className="bg-[#00E46F] font-heading mt-3">LOGIN</Button>
                  <hr style={{ borderTop: "1px solid #FFFFFF33", marginTop: "1rem", marginBottom: "1rem" }}/>
                  <div className="flex items-center space-x-4">
                    <p className="text-[20px] font-semibold">Esqueceu a senha?</p>
                    <Button radius="full" variant="bordered" className="font-heading bg-transparent border-[#00E46F] text-[#00E46F]  px-8">REDEFINIR SENHA</Button>
                  </div>
                </ModalBody>
              </>
            ) }
          </ModalContent>
        </Modal>
      </div>
    </header>
  );
}
