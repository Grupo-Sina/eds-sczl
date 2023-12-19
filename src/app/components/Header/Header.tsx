'use client'

import React, { useState } from 'react'
import {
  Button,
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'
import edsnavarzealogo from '../../../../public/edsnavarzealogo.png'
import escudozl from '../../../../public/escudozl.png'
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../EyeFilledIcon/EyeFilledIcon'
import { useAuthContext } from '@/app/context/AuthContext'

export default function Header() {
  const { handleSignOut, isAuthenticaded } = useAuthContext()
  const [userName, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const enableButton = () => {
    setIsButtonDisabled(!(password.length > 5 && userName.length >= 3))
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    enableButton()
  }

  const handleUsernameChange = (value: string) => {
    setUsername(value)
    enableButton()
  }


import { useAuthContext } from '@/app/context/AuthContext'
import { useAppContext } from '@/app/context/AppContext'

export default function Header() {
  const { onOpenChangeModalLogin } = useAppContext()
  const { handleSignOut, isAuthenticaded } = useAuthContext()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="h-[94px] bg-[#0F1768] relative flex justify-evenly space-x-4 md:space-x-0"
      classNames={{
        wrapper: 'justify-between lg:mx-[90px]',
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden bg-transparent text-white mx-2"
      />

      {isAuthenticaded ? (
        <NavbarMenu
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
          className="bg-[#1F3694] w-full"
        >
          <NavbarMenuItem className="mt-10">
            <Link
              className="cursor-pointer text-xl font-extrabold text-white"
              onClick={() => handleSignOut()}
            >
              SAIR
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      ) : (
        <NavbarMenu
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
          className="bg-[#1F3694] w-full"
        >
          <NavbarMenuItem className="mt-10">
            <Link
              className="cursor-pointer text-xl font-extrabold text-white"
              onClick={() => onOpenChangeModalLogin()}
            >
              LOGIN
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="cursor-pointer text-xl font-extrabold text-white">
              CADASTRE-SE
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}

      <Image
        src={escudozl}
        alt="escudozl"
        width={39}
        height={45}
        className="hidden md:block"
      />

      <Image
        src={edsnavarzealogo}
        alt="header logo eds na varzea"
        className="mx-auto md:mx-0"
      />

      {isAuthenticaded ? (
        <div className="hidden md:flex md:space-x-4">
          <Button
            radius="full"
            size="md"
            className="hidden md:flex bg-[#0F1768] font-heading border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
            variant="bordered"
            onClick={() => handleSignOut()}
          >
            SAIR
          </Button>
        </div>
      ) : (
        <div className="hidden md:flex md:space-x-4 ">
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
            onClick={() => onOpenChangeModalLogin()}
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
              {() => (
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
                        type={isVisible ? 'text' : 'password'}
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
      )}
    </Navbar>
  )
}
