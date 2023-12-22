import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { inputListLogin, schemaLogin } from "@/app/schemas/login";
import { InputComponent } from "../InputComponent/Input";
import { login } from "@/app/api/user";
import { toast } from "react-toastify";
import { useAuthContext } from "@/app/context/AuthContext";
import { useAppContext } from "@/app/context/AppContext";
import successicon from "../../../../public/succesicon.svg";
import Image from "next/image";
export default function ModalLogin() {
  const [loading, setLoading] = useState(false);

  const {
    handleAuthWithToken,
    setPhoneSendVerificationCode,
    setUserIdVerificationCode,
  } = useAuthContext();

  const { modalVisible, setModalVisible, setShouldShowVerificationCode } =
    useAppContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginProps>({
    resolver: yupResolver(schemaLogin),
    mode: "onChange",
  });

  const handleLogin = async (data: LoginProps) => {
    setLoading(true);
    const res = await login(data);
    console.log(res);
    if (res?.data) {
      if (res?.data.access_token) {
        handleAuthWithToken(res?.data.access_token);
        window.location.href = "/vote";
      } else if (res?.data.phone && res?.data.userId) {
        setUserIdVerificationCode(res?.data.userId);
        setPhoneSendVerificationCode(res?.data.phone);
        setModalVisible(undefined);
        setShouldShowVerificationCode(true);
      }
    } else if (res?.error) {
      toast.error(res?.error);
    }
    setLoading(false);
  };

  return (
    <Modal
      scrollBehavior="outside"
      isOpen={modalVisible === "login" || modalVisible === "login-reset-pass"}
      onOpenChange={() => setModalVisible(undefined)}
      className="md:max-w-[716px] p-[48px] bg-[#0F1768] text-white"
    >
      <ModalContent className="w-[90%]">
        {() => (
          <>
            {modalVisible === "login" && (
              <>
                <ModalHeader className="text-[28px] flex flex-col">
                  <p className="text-[16px]">Bilhete da Sorte</p>
                  <p className="text-[28px]">FAÇA LOGIN E VOTE!</p>
                </ModalHeader>
              </>
            )}
            {modalVisible === "login-reset-pass" && (
              <>
                <ModalHeader className="text-[28px] flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <Image src={successicon} alt="successicon" />
                    <p className="text-[28px]">SENHA REDEFINIDA COM SUCESSO!</p>
                  </div>
                  <p className="text-[14px]">
                    Sua senha foi redefinida com sucesso, faça o login abaixo e
                    vote agora mesmo!
                  </p>
                </ModalHeader>
              </>
            )}

            <ModalBody className="p-[24px]">
              <form onSubmit={handleSubmit(handleLogin)} method="post">
                {inputListLogin.map((item, index) => (
                  <InputComponent
                    key={index}
                    errors={errors}
                    name={item.name}
                    title={item.title}
                    type={item.type}
                    isRequired={item.isRequired}
                    register={register}
                    control={control}
                  />
                ))}
                <Button
                  type="submit"
                  disabled={!isDirty || !isValid || loading}
                  radius="full"
                  className="disabled:opacity-50 bg-[#00E46F] font-headingBold text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5 mt-3 w-full"
                >
                  LOGIN
                </Button>
              </form>
              {modalVisible === "login" && (
                <>
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
                      onClick={() => setModalVisible("reset")}
                      radius="full"
                      variant="bordered"
                      className="font-headingBold bg-transparent border-[#00E46F] text-[16px] text-[#00E46F] font-bold py-3 px-8"
                    >
                      REDEFINIR SENHA
                    </Button>
                  </div>
                </>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
