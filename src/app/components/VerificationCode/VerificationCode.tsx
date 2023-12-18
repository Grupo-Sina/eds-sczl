"use client";

import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function VerificationCode() {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [thirdNumber, setThirdNumer] = useState<string>("");
  const [fourthNumber, setFourthNumber] = useState<string>("");
  const [fifthNumber, setFifthNumber] = useState<string>("");
  const [sixthNumber, setSixthNumber] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const areAllInputsFilled = () => {
    return (
      firstNumber !== "" &&
      secondNumber !== "" &&
      thirdNumber !== "" &&
      fourthNumber !== "" &&
      fifthNumber !== "" &&
      sixthNumber !== ""
    );
  };

  useEffect(() => {
    setIsButtonDisabled(!areAllInputsFilled());
  }, [
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    fifthNumber,
    sixthNumber,
  ]);

  return (
    <form className="p-12 bg-[#0F1768] z-20 rounded-2xl text-white flex-col h-auto">
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      <h1 className="text-[28px] font-bold leading-8">CÓDIGO DE VERIFICAÇÃO</h1>
      <p className="my-6">
        Insira abaixo o código de 6 dígitos que envamos via SMS para (**)
        *****-**99.
      </p>
      <p className="text-[14px] mb-2">Código</p>
      <div className="flex space-x-2 mb-6">
        <Input
          type="text"
          isRequired
          value={firstNumber}
          onValueChange={(value) => {
            setFirstNumber(value);
          }}
          className="w-[85px]"
        />
        <Input
          type="text"
          isRequired
          value={secondNumber}
          onValueChange={(value) => {
            setSecondNumber(value);
          }}
          className="w-[85px]"
        />
        <Input
          type="text"
          isRequired
          value={thirdNumber}
          onValueChange={(value) => {
            setThirdNumer(value);
          }}
          className="w-[85px]"
        />
        <Input
          type="text"
          isRequired
          value={fourthNumber}
          onValueChange={(value) => {
            setFourthNumber(value);
          }}
          className="w-[85px]"
        />
        <Input
          type="text"
          isRequired
          value={fifthNumber}
          onValueChange={(value) => {
            setFifthNumber(value);
          }}
          className="w-[85px]"
        />
        <Input
          type="text"
          isRequired
          value={sixthNumber}
          onValueChange={(value) => {
            setSixthNumber(value);
          }}
          className="w-[85px]"
        />
      </div>
      <Button
        radius="full"
        isDisabled={isButtonDisabled}
        className="w-full bg-[#00E46F] font-heading text-[16px] text-[#003B9C] font-extrabold leading-5"
      >
        CONFIRMAR CÓDIGO
      </Button>
      <hr className="mt-6 mb-6" />
      <div className="flex items-center justify-between">
        <div className="flex">
          <h2 className="text-[20px] font-bold w-[200px]">
            Problemas ao receber o código?
          </h2>
          <Button
            radius="full"
            variant="bordered"
            className="bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
          >
            REENVIAR CÓDIGO
          </Button>
        </div>
        <h1 className="text-[28px] font-light leading-8">1:59</h1>
      </div>
    </form>
  );
}
