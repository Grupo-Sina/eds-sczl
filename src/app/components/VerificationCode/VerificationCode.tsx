"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import VerificationInput from "react-verification-input";
import { useAuthContext } from "@/app/context/AuthContext";
import { resendCode, validateCode } from "@/app/api/user";
import { toast } from "react-toastify";
import {
  VerificationCodeFormProps,
  schema,
} from "@/app/schemas/verificationCode";

export default function VerificationCode() {
  const [timer, setTimer] = useState<number>(0);
  const [areInputsDisabled, setAreInputsDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const {
    phoneSendVerificationCode,
    userIdVerificationCode,
    handleAuthWithToken,
  } = useAuthContext();

  const {
    handleSubmit,
    formState: { isValid, isDirty },
    control,
  } = useForm<VerificationCodeFormProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const inputTextStyles = {
  //   input: {
  //     color: '#0F1768',
  //     fontSize: '18px',
  //     fontWeight: 'normal',
  //     textAlign: 'center' as const,
  //   },
  // }

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setAreInputsDisabled(false);
      // setIsButtonDisabled(!areAllInputsFilled())
    } else {
      setAreInputsDisabled(true);
    }
  }, [timer]);

  const startTimer = () => {
    const duration = 120;
    setTimer(duration);
    setAreInputsDisabled(true);

    const intervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          setAreInputsDisabled(false);
          // setIsButtonDisabled(!areAllInputsFilled())
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const phoneNumberMasked = () => {
    // const phoneSendVerificationCode = '5581996743217'
    return phoneSendVerificationCode
      ? `(${phoneSendVerificationCode.slice(2, 4)})${"*".repeat(
          phoneSendVerificationCode.length - 8,
        )}-${"*".repeat(
          phoneSendVerificationCode.length - 11,
        )}${phoneSendVerificationCode.slice(-2)}`
      : "";
  };

  const handleResenSendCode = async () => {
    const res = await resendCode({
      userId: userIdVerificationCode,
    });
    console.log(res);
    if (res?.data) {
      toast.success("Código enviado com sucesso.");
      startTimer();
    } else if (res?.error) {
      toast.error(res?.error);
    }
  };

  const handleSendCode = async (data: VerificationCodeFormProps) => {
    setLoading(true);
    const res = await validateCode({
      userId: userIdVerificationCode,
      code: data.code,
    });

    if (res?.data) {
      console.log(res.data);
      handleAuthWithToken(res.data.access_token);
      window.location.href = "/vote";
    } else if (res?.error) {
      toast.error(res?.error);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendCode)}
      method="post"
      className="w-[90%] my-4 md:max-w-[500px] p-12 bg-[#0F1768] z-20 rounded-2xl text-white flex-col h-auto"
    >
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      <h1 className="text-[28px] font-bold leading-8">CÓDIGO DE VERIFICAÇÃO</h1>
      <p className="my-6">
        Insira abaixo o código de 4 dígitos que enviamos via SMS para{" "}
        {phoneNumberMasked()}.
      </p>
      <p className="text-[14px] mb-2">Código</p>
      <div className="flex space-x-2 mb-6 rounded-lg">
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <VerificationInput
              length={4}
              {...field}
              classNames={{
                container: "container-input",
                character: "character-input",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
              }}
            />
          )}
        />
      </div>
      <Button
        radius="full"
        disabled={!isDirty || !isValid || loading}
        type="submit"
        onClick={() => {
          if (!timer) {
            startTimer();
          }
        }}
        className="w-full disabled:opacity-50 bg-[#00E46F] font-headingBold text-[16px] text-[#003B9C] font-extrabold leading-5"
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
            onClick={() => handleResenSendCode()}
            disabled={areInputsDisabled}
            radius="full"
            variant="bordered"
            className={`${
              areInputsDisabled && "disabled:opacity-50"
            } bg-[#0F1768] font-headingBold border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8`}
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
