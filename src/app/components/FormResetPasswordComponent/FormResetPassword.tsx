"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import escudozl from "../../../../public/escudozl.png";
import { sendCodeResetPassword } from "../../api/user";

import { Button } from "@nextui-org/react";

import { InputComponent } from "../InputComponent/Input";
import { useAppContext } from "@/app/context/AppContext";
import { useAuthContext } from "@/app/context/AuthContext";
import { schemaSendCodeResetPassword } from "@/app/schemas/resetPassword";

export default function FormResetPasswordComponent() {
  const { setShouldShowResetPassword } = useAppContext();
  const { setPhoneSendVerificationCode, setUserIdVerificationCode } =
    useAuthContext();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<SendCodeResetPasswordProps>({
    resolver: yupResolver(schemaSendCodeResetPassword),
    mode: "onChange",
    shouldFocusError: false,
  });

  const handleRegister = async (data: SendCodeResetPasswordProps) => {
    setLoading(true);
    const clearNumber = data.phone.replace(/\D/g, "");
    const formatPhoneNumber = clearNumber.startsWith("55")
      ? clearNumber
      : `55${clearNumber}`;
    data.phone = formatPhoneNumber;
    const res = await sendCodeResetPassword(data);
    if (res?.data) {
      setPhoneSendVerificationCode(formatPhoneNumber);
      setUserIdVerificationCode(res?.data.userId);
      setShouldShowResetPassword(true);
    } else if (res?.error) {
      toast.error(res?.error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} method="post">
      <p className="text-[16px] font-medium leading-[19px]">Bilhete da Sorte</p>
      <h1 className="#00E275 text-[22px] font-bold leading-8 mt-2 desktop:text-[28px] desktop:leading-[33px]">
        REDEFINIR SENHA
      </h1>
      <div className="flex flex-col">
        <InputComponent
          errors={errors}
          name="phone"
          title="Celular"
          type="text"
          isRequired
          register={register}
          control={control}
          mask="(99)99999-9999"
        />
      </div>
      <p className="my-4 text-[14px]">
        Enviaremos um código de confirmação para o número cadastrado.
      </p>
      <Button
        disabled={!isDirty || !isValid || loading}
        type="submit"
        radius="full"
        size="sm"
        className={`bg-[#00E46F] disabled:opacity-50
         mt-6 text-[#003B9C] text-[16px] w-full font-headingBold font-extrabold py-[12px]`}
      >
        AVANÇAR
      </Button>
    </form>
  );
}
