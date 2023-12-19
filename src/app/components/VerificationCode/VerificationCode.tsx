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
  const [timer, setTimer] = useState<number>(0);
  const [areInputsDisabled, setAreInputsDisabled] = useState<boolean>(false);

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

  const inputTextStyles = {
    input: {
      color: "#0F1768",
      fontSize: "18px",
      fontWeight: "normal",
      textAlign: "center" as const,
    },
  };

  const startTimer = () => {
    const duration = 120;
    setTimer(duration);
    setAreInputsDisabled(true);

    const intervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          setAreInputsDisabled(false);
          setIsButtonDisabled(!areAllInputsFilled());
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    setIsButtonDisabled(!areAllInputsFilled() || areInputsDisabled);
  }, [
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    fifthNumber,
    sixthNumber,
    areInputsDisabled,
  ]);

  useEffect(() => {
    if (timer === 0) {
      setAreInputsDisabled(false);
      setIsButtonDisabled(!areAllInputsFilled());
    }
  }, [timer]);

  return (
    <form className="w-[90%] my-4 md:max-w-[500px] p-12 bg-[#0F1768] z-20 rounded-2xl text-white flex-col h-auto">
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      <h1 className="text-[28px] font-bold leading-8">CÓDIGO DE VERIFICAÇÃO</h1>
      <p className="my-6">
        Insira abaixo o código de 6 dígitos que enviamos via SMS para (**)
        *****-**99.
      </p>
      <p className="text-[14px] mb-2">Código</p>
      <div className="flex space-x-2 mb-6">
        <Input
          type="text"
          isRequired
          value={firstNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setFirstNumber(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
        <Input
          type="text"
          isRequired
          value={secondNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setSecondNumber(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
        <Input
          type="text"
          isRequired
          value={thirdNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setThirdNumer(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
        <Input
          type="text"
          isRequired
          value={fourthNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setFourthNumber(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
        <Input
          type="text"
          isRequired
          value={fifthNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setFifthNumber(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
        <Input
          type="text"
          isRequired
          value={sixthNumber}
          onValueChange={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setSixthNumber(numericValue.substring(0, 1));
          }}
          className="w-[85px]"
          style={inputTextStyles.input}
          disabled={areInputsDisabled}
        />
      </div>
      <Button
        radius="full"
        isDisabled={isButtonDisabled || areInputsDisabled}
        onClick={() => {
          if (areAllInputsFilled() && !timer) {
            startTimer();
          }
        }}
        className="w-full bg-[#00E46F] font-heading text-[16px] text-[#003B9C] font-extrabold leading-5"
      >
        CONFIRMAR CÓDIGO
      </Button>
      <hr className="mt-6 mb-6" />
      <div className="flex flex-col items-center justify-between space-y-2">
        <div className="w-full flex flex-col md:flex-row space-y-2">
          <h2 className="text-[20px] font-bold w-[200px]">
            Problemas ao receber o código?
          </h2>
          <Button
            radius="full"
            variant="bordered"
            onClick={() => {
              if (timer !== 0) {
                setIsButtonDisabled(true);
              }
            }}
            isDisabled={areInputsDisabled}
            className="bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
          >
            REENVIAR CÓDIGO
          </Button>
        </div>
        {timer !== 0 && (
          <h1 className="text-[28px] font-light leading-8">
            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
          </h1>
        )}
      </div>
    </form>
  );
}
