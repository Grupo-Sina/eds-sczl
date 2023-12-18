"use client";

import React, { FormEvent, useState } from "react";
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
import { EyeSlashFilledIcon } from "../EyeSlashFilledIcon/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../EyeFilledIcon/EyeFilledIcon";

export default function Header() {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const enableButton = () => {
    setIsButtonDisabled(!(password.length > 5 && userName.length >= 3));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    enableButton();
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    enableButton();
  };

  const handleSubmitLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login efetuado");
  };

  return (
    <header className="h-[94px] bg-[#0F1768] flex justify-around items-center z-10">
      <Image src={escudozl} alt="escudo zona leste" width={38} height={45} />
      <Image
        src={edsnavarzealogo}
        alt="header logo eds na varzea"
        className="ml-40"
      />
      <div className="space-x-4">
        <Button
          radius="full"
          size="md"
          className="bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
          variant="bordered"
        >
          CADASTRE-SE
        </Button>
        <Button
          type="submit"
          onPress={onOpen}
          radius="full"
          size="md"
          className="bg-[#00E46F] font-heading text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5"
        >
          LOGIN
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="max-w-[716px] p-[48px] bg-[#0F1768] text-white gap-3"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <p className="ml-6">Bilhete da Sorte</p>
                <ModalHeader className="text-[28px]">
                  FAÇA LOGIN E VOTE!
                </ModalHeader>
                <ModalBody>
                  <form>
                    <label htmlFor="userName">
                      Usuário <span className="text-[#DA1414]">*</span>
                    </label>
                    <Input
                      labelPlacement="outside"
                      isRequired
                      value={userName}
                      onValueChange={handleUsernameChange}
                      className="mb-3"
                    />
                    <label htmlFor="password">
                      Senha <span className="text-[#DA1414]">*</span>
                    </label>
                    <Input
                      labelPlacement="outside"
                      isRequired
                      value={password}
                      onValueChange={handlePasswordChange}
                      type={isVisible ? "text" : "password"}
                      className="mb-5"
                      endContent={
                        <button
                          className="bg-transparent focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    />
                    <Button
                      radius="full"
                      isDisabled={isButtonDisabled}
                      className="bg-[#00E46F] font-heading text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5 mt-3 w-full"
                    >
                      LOGIN
                    </Button>
                    <hr
                      style={{
                        borderTop: "1px solid #FFFFFF33",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <div className="flex items-center space-x-4">
                      <p className="text-[20px] font-semibold">
                        Esqueceu a senha?
                      </p>
                      <Button
                        radius="full"
                        variant="bordered"
                        className="bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
                      >
                        REDEFINIR SENHA
                      </Button>
                    </div>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </header>
  );
}
