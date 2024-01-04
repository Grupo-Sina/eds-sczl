'use client'

import React, { useState } from 'react'
import {
  Button,
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  useDisclosure,
} from '@nextui-org/react'
import Image from 'next/image'
import edsnavarzealogo from '../../../../public/edsnavarzealogo.png'
import escudozl from '../../../../public/escudozl.png'
import { useAuthContext } from '@/app/context/AuthContext'

import { useAppContext } from '@/app/context/AppContext'
import VerRegrasModal from '../VerRegrasModal/VerRegasModal'

export default function Header() {
  const { setModalVisible } = useAppContext()
  const { handleSignOut, isAuthenticaded } = useAuthContext()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
        <>
<<<<<<< HEAD
          
          <NavbarMenu
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
          className="bg-[#1F3694] w-full"
        >
          {/* <NavbarMenuItem className="mt-10">
            <Link
              className="font-headingBold cursor-pointer text-xl font-extrabold text-white"
              onPress={onOpen}
            >
              VER REGRAS
            </Link>
          </NavbarMenuItem> */}
          {/* <VerRegrasModal /> */}
          <p>AQUI CARAI</p>
          <NavbarMenuItem className="mt-10">
=======
          <NavbarMenu
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
            className="bg-[#1F3694] w-full"
          >
            {/* <NavbarMenuItem className="mt-10">
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
            <Link
              className="font-headingBold cursor-pointer text-xl font-extrabold text-white"
              onPress={onOpen}
            >
              VER REGRAS
            </Link>
<<<<<<< HEAD
          </NavbarMenuItem>
        </NavbarMenu>
        </>
        
=======
          </NavbarMenuItem> */}
            {/* <VerRegrasModal /> */}
            <p>AQUI CARAI</p>
            <NavbarMenuItem className="mt-10">
              <Link
                className="font-headingBold cursor-pointer text-xl font-extrabold text-white"
                onClick={() => handleSignOut()}
              >
                SAIR
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
      ) : (
        <NavbarMenu
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
          className="bg-[#1F3694] w-full"
        >
          <NavbarMenuItem className="mt-10">
            <Link
              className="cursor-pointer text-xl font-extrabold text-white"
              onClick={() => setModalVisible('login')}
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
            className="hidden md:flex bg-[#0F1768] font-headingBold border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
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
            className="bg-[#0F1768] font-headingBold border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
            variant="bordered"
          >
            CADASTRE-SE
          </Button>
          <Button
            type="submit"
            onClick={() => setModalVisible('login')}
            radius="full"
            size="md"
            className="bg-[#00E46F] font-headingBold text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5"
          >
            LOGIN
          </Button>
        </div>
      )}
    </Navbar>
  )
}
