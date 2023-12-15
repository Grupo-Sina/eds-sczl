"use client";

import React, { FormEvent, useMemo, useState } from "react";
import Image from "next/image";

import phone from "../../../../public/phone.png";
import escudozl from '../../../../public/escudozl.png';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function FormComponent() {
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
  const [isCellphoneFocused, setIsCellphoneFocused] = useState<boolean>(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();
  };

  const nameLabelStyle: React.CSSProperties = {
    color: isNameFocused || name ? "#CCFFFFFF" : "#858C94",
  };

  const cellphoneLabelStyle: React.CSSProperties = {
    color: isCellphoneFocused || cellphone ? "#CCFFFFFF" : "#858C94",
  };

  const userNameLabelStyle: React.CSSProperties = {
    color: isUserNameFocused || userName ? "#CCFFFFFF" : "#858C94",
  };

  const passwordLabelStyle: React.CSSProperties = {
    color: isPasswordFocused || password ? "#CCFFFFFF" : "#858C94",
  };

  const confirmPasswordLabelStyle: React.CSSProperties = {
    color:
      isConfirmPasswordFocused || confirmPassword ? "#CCFFFFFF" : "#858C94",
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <form className="z-20 p-[28px] my-8 rounded-[16px]  bg-[#0F1768] text-[#fff] max-w-[650px] h-auto shadow-xl">
      <p>Bilhete da Sorte</p>
      <h1 className="#00E275 text-[24px] font-bold leading-8">
        CADASTRE-SE E VOTE!
      </h1>
      <div className="flex flex-col">
        <Input
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
          size="sm"
          type="text"
          label={<label style={nameLabelStyle}>Nome completo</label>}
          value={name}
          isRequired
          labelPlacement="outside"
          onValueChange={setName}
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
          className="mb-4"
        />
        <Input
          onFocus={() => setIsCellphoneFocused(true)}
          onBlur={() => setIsCellphoneFocused(false)}
          size="sm"
          type="text"
          label={<label style={cellphoneLabelStyle}>Celular</label>}
          value={cellphone}
          isRequired
          labelPlacement="outside"
          onValueChange={setCellphone}
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
          className="mb-4"
        />
        <Input
          onFocus={() => setIsUserNameFocused(true)}
          onBlur={() => setIsUserNameFocused(false)}
          size="sm"
          type="text"
          label={<label style={userNameLabelStyle}>Usuário</label>}
          value={userName}
          isRequired
          labelPlacement="outside"
          onValueChange={setUserName}
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
          className="mb-4"
        />
        <Input
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          size="sm"
          type="text"
          label={<label style={passwordLabelStyle}>Senha</label>}
          value={password}
          isRequired
          labelPlacement="outside"
          onValueChange={setPassword}
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
          className="mb-4"
        />
        <Input
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
          size="sm"
          type="text"
          label={
            <label style={confirmPasswordLabelStyle}>Confirmar senha</label>
          }
          value={confirmPassword}
          isRequired
          labelPlacement="outside"
          onValueChange={setConfirmPassword}
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
          className="mb-4"
        />
      </div>
      <Button
        type="submit"
        radius="full"
        size="sm"
        className="bg-[#00E46F] text-[#003B9C] text-[16px] w-full font-heading font-[800] py-[12px]"
      >
        CONCLUIR CADASTRO
      </Button>

      <p className="my-4">
        * Ao realizar o cadastro, você concorda que a Super Copa Zona Leste e
        Esportes da Sorte utilizem seus dados para envio de SMS e e-mails sobre
        promoções e novidades.
      </p>

      <hr style={{ borderTop: "1px solid #FFFFFF33" }} />
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">Já é cadastrado?</h2>
          <Button
            onPress={onOpen}
            radius="full"
            size="sm"
            variant="bordered"
            className="bg-[#0F1768] text-[#00E46F] text-[16px] border-[#00E46F] font-heading font-[800] py-3 px-8"
          >
            FAZER LOGIN
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
                  <Button radius="full" isDisabled className="bg-[#00E46F] font-heading font-bold text-[16px] mt-3">LOGIN</Button>
                  <hr style={{ borderTop: "1px solid #FFFFFF33", marginTop: "1rem", marginBottom: "1rem" }}/>
                  <div className="flex items-center space-x-4">
                    <p className="text-[20px] font-semibold">Esqueceu a senha?</p>
                    <Button radius="full" variant="bordered" className="font-heading bg-transparent border-[#00E46F] text-[16px] text-[#00E46F] font-bold py-3 px-8">REDEFINIR SENHA</Button>
                  </div>
                </ModalBody>
              </>
            ) }
          </ModalContent>
        </Modal>
        </div>
        <Image src={escudozl} alt="escudozl" width={31} height={36}/>
      </div>
    </form>
  );
}
