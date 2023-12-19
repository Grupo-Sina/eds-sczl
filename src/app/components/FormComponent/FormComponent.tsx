'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import escudozl from '../../../../public/escudozl.png'
import { registerUser } from '../../api/user'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../EyeFilledIcon/EyeFilledIcon'
import { inputList, schemaRegisterUser } from '@/app/schemas/register'
import { InputComponent } from '../InputComponent/Input'
import { useAppContext } from '@/app/context/AppContext'
import { useAuthContext } from '@/app/context/AuthContext'

export default function FormComponent() {
  const { setShouldShowVerificationCode } = useAppContext()
  const { setPhoneSendVerificationCode, setUserIdVerificationCode } =
    useAuthContext()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterUserProps>({
    resolver: yupResolver(schemaRegisterUser),
    mode: 'onChange',
  })

  const [isModalPassVisibile, setIsModalPassVisible] = useState<boolean>(false)

  const handleRegister = async (data: RegisterUserProps) => {
    setLoading(true)
    const clearNumber = data.phone.replace(/\D/g, '')
    const formatPhoneNumber = clearNumber.startsWith('55')
      ? clearNumber
      : `55${clearNumber}`

    data.phone = formatPhoneNumber
    const res = await registerUser(data)

    if (res?.data) {
      setUserIdVerificationCode(res.data.userId)
      setPhoneSendVerificationCode(formatPhoneNumber)
      setShouldShowVerificationCode(true)
    } else if (res?.error) {
      toast.error(res?.error)
    }
    setLoading(false)
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const toggleModalPassVisibility = () =>
    setIsModalPassVisible(!isModalPassVisibile)

  function generateMask(value: string) {
    if (value === 'phone') {
      return '(99)99999-9999'
    }
    return undefined
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      method="post"
      className="w-[90%] z-20 my-8 p-[28px] rounded-[16px]  bg-[#0F1768] text-[#fff] md:max-w-[650px] h-auto shadow-xl "
    >
      <p className="text-[16px] font-medium leading-[19px]">Bilhete da Sorte</p>
      <h1 className="#00E275 text-[22px] font-bold leading-8 mt-2 desktop:text-[28px] desktop:leading-[33px]">
        CADASTRE-SE E VOTE!
      </h1>
      <div className="flex flex-col">
        {inputList.map((item, index) => (
          <InputComponent
            key={index}
            errors={errors}
            name={item.name}
            title={item.title}
            type={item.type}
            isRequired={item.isRequired}
            register={register}
            control={control}
            mask={generateMask(item.name)}
          />
        ))}
      </div>
      <Button
        disabled={!isDirty || !isValid || loading}
        type="submit"
        radius="full"
        size="sm"
        className={`bg-[#00E46F] disabled:opacity-50
         mt-6 text-[#003B9C] text-[16px] w-full font-heading font-extrabold py-[12px]`}
      >
        CONCLUIR CADASTRO
      </Button>

      <p className="my-4 text-[14px]">
        * Ao realizar o cadastro, você concorda que a Super Copa Zona Leste e
        Esportes da Sorte utilizem seus dados para envio de SMS e e-mails sobre
        promoções e novidades.
      </p>

      <hr style={{ borderTop: '1px solid #FFFFFF33' }} />
      <div className="flex justify-between mt-4">
        <div className="w-full md:w-[350px] text-left flex flex-col md:flex-row items-center md:space-x-4">
          <h2 className="text-xl font-bold w-full">Já é cadastrado?</h2>
          <Button
            onPress={onOpen}
            radius="full"
            size="sm"
            variant="bordered"
            className="w-full mt-2 md:mt-0 md:w-[165px] bg-[#0F1768] text-[#00E46F] text-[16px] border-[#00E46F] font-heading font-[800] py-3 px-8"
          >
            FAZER LOGIN
          </Button>
          {/* <Modal
            scrollBehavior="outside"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="md:max-w-[716px] p-[48px] bg-[#0F1768] text-white"
          >
            <ModalContent className="w-[90%]">
              {(onClose) => (
                <>
                  <p className="ml-6">Bilhete da Sorte</p>
                  <ModalHeader className="text-[28px]">
                    FAÇA LOGIN E VOTE!
                  </ModalHeader>
                  <ModalBody className="p-[24px]">
                    <label htmlFor="userName">
                      Usuário <span className="text-[#DA1414]">*</span>
                    </label>
                    <Input
                      labelPlacement="outside"
                      isRequired
                      value={userName}
                      onValueChange={handleUsernameChange}
                    />
                    <label htmlFor="userName">
                      Senha <span className="text-[#DA1414]">*</span>
                    </label>
                    <Input
                      labelPlacement="outside"
                      isRequired
                      value={password}
                      onValueChange={handlePasswordChange}
                      type={isModalPassVisibile ? 'text' : 'password'}
                      endContent={
                        <button
                          className="bg-transparent focus:outline-none"
                          type="button"
                          onClick={toggleModalPassVisibility}
                        >
                          {isModalPassVisibile ? (
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
                        borderTop: '1px solid #FFFFFF33',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                      }}
                    />
                    <div className="flex items-center space-x-4">
                      <p className="text-[20px] font-semibold">
                        Esqueceu a senha?
                      </p>
                      <Button
                        radius="full"
                        variant="bordered"
                        className="font-heading bg-transparent border-[#00E46F] text-[16px] text-[#00E46F] font-bold py-3 px-8"
                      >
                        REDEFINIR SENHA
                      </Button>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal> */}
        </div>
        <Image
          src={escudozl}
          alt="escudozl"
          width={31}
          height={36}
          className="hidden md:flex"
        />
      </div>
    </form>
  )
}
