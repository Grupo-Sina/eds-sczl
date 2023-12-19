'use client'

import React, { FormEvent, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

import phone from '../../../../public/phone.png'
import escudozl from '../../../../public/escudozl.png'
import eyefilledicon from '../../../../public/eyefilledicon.svg'
import eyeslashfilledicon from '../../../../public/eyeslashfilledicon.svg'

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

export default function FormComponent() {
  const [name, setName] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [cellphone, setCellphone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isConfirmedVisible, setIsConfirmeVisible] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [isModalPassVisibile, setIsModalPassVisible] = useState<boolean>(false)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const userNameInputRef = useRef<HTMLInputElement>(null)
  const cellphoneInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null)

  const enableButton = () => {
    setIsButtonDisabled(!(password.length > 5 && userName.length >= 3))
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    enableButton()
  }

  const handleUsernameChange = (value: string) => {
    setUserName(value)
    enableButton()
  }

  const focusInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault()

    if (!name || !userName || !cellphone || !password || !confirmPassword) {
      if (!name) {
        focusInput(nameInputRef)
      } else if (!userName) {
        focusInput(userNameInputRef)
      } else if (!cellphone) {
        focusInput(cellphoneInputRef)
      } else if (!password) {
        focusInput(passwordInputRef)
      } else if (!confirmPassword) {
        focusInput(confirmPasswordInputRef)
      }
    }
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleConfirmedVisibility = () =>
    setIsConfirmeVisible(!isConfirmedVisible)
  const toggleModalPassVisibility = () =>
    setIsModalPassVisible(!isModalPassVisibile)

  return (
    <form
      onSubmit={() => handleSubmit}
      className="z-20 my-8 p-[28px] rounded-[16px] w-[90%] bg-[#0F1768] text-[#fff] md:max-w-[650px] h-auto shadow-xl"
    >
      <p className="text-[16px] font-medium leading-[19px]">Bilhete da Sorte</p>
      <h1 className="#00E275 text-[22px] font-bold leading-8 mt-2 desktop:text-[28px] desktop:leading-[33px]">
        CADASTRE-SE E VOTE!
      </h1>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-[#CCFFFFFF] text-sm mb-1 mt-2">
          Nome completo <span className="text-[#DA1414]">*</span>
        </label>
        <Input
          size="sm"
          type="text"
          value={name}
          isRequired
          labelPlacement="outside"
          onValueChange={setName}
          ref={nameInputRef}
        />
        <label
          htmlFor="cellphone"
          className="text-[#CCFFFFFF] text-sm mb-1 mt-2"
        >
          Celular <span className="text-[#DA1414]">*</span>
        </label>
        <Input
          size="sm"
          type="text"
          placeholder="(DDD) 99999-9999"
          value={cellphone}
          isRequired
          labelPlacement="outside"
          onValueChange={setCellphone}
          startContent={<Image src={phone} alt="phone" />}
          className="placeholder-[#858C94]"
          ref={cellphoneInputRef}
        />
        <label
          htmlFor="userName"
          className="text-[#CCFFFFFF] text-sm mb-1 mt-2"
        >
          Usuário <span className="text-[#DA1414]">*</span>
        </label>
        <Input
          size="sm"
          type="text"
          value={userName}
          isRequired
          labelPlacement="outside"
          onValueChange={setUserName}
          ref={userNameInputRef}
        />
        <label
          htmlFor="password"
          className="text-[#CCFFFFFF] text-sm mb-1 mt-2"
        >
          Senha <span className="text-[#DA1414]">*</span>
        </label>
        <Input
          size="sm"
          type={isVisible ? 'text' : 'password'}
          value={password}
          isRequired
          labelPlacement="outside"
          onValueChange={setPassword}
          ref={passwordInputRef}
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
        <label
          htmlFor="confirmPassword"
          className="text-[#CCFFFFFF] text-sm mb-1 mt-2"
        >
          Confirmar senha <span className="text-[#DA1414]">*</span>
        </label>
        <Input
          size="sm"
          type={isConfirmedVisible ? 'text' : 'password'}
          value={confirmPassword}
          isRequired
          labelPlacement="outside"
          onValueChange={setConfirmPassword}
          className="mb-6"
          ref={confirmPasswordInputRef}
          endContent={
            <button
              className="bg-transparent focus:outline-none"
              type="button"
              onClick={toggleConfirmedVisibility}
            >
              {isConfirmedVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
      <Button
        type="submit"
        radius="full"
        size="sm"
        className="bg-[#00E46F] text-[#003B9C] text-[16px] w-full font-heading font-extrabold py-[12px]"
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
          <Modal
            scrollBehavior='outside'
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="md:max-w-[716px] p-[48px] bg-[#0F1768] text-white"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <p className="ml-6">Bilhete da Sorte</p>
                  <ModalHeader className="text-[28px]">
                    FAÇA LOGIN E VOTE!
                  </ModalHeader>
                  <ModalBody>
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
          </Modal>
        </div>
        <Image src={escudozl} alt="escudozl" width={31} height={36} className='hidden md:flex'/>
      </div>
    </form>
  )
}
