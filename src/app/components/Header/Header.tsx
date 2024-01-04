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
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
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
          <NavbarMenu
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }}
            className="bg-[#1F3694] w-full"
          >
            <NavbarMenuItem className="mt-10 relative overflow-hidden">
              <Link
                className="cursor-pointer text-xl font-extrabold text-white hover:bg-[#0F1768] rounded-full w-full p-4"
                onPress={onOpen}
              >
                REGRAS
              </Link>
              <span className="absolute bg-[#00E46F] h-[4px] bottom-0 left-0 right-0 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </NavbarMenuItem>
            <VerRegrasModal />
            <NavbarMenuItem>
              <Link
                className="cursor-pointer text-xl font-extrabold text-white hover:bg-[#0F1768] rounded-full w-full p-4"
                onClick={() => handleSignOut()}
              >
                SAIR
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      ) : (
        <NavbarMenu
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }}
          className="bg-[#1F3694] w-full"
        >
          <NavbarMenuItem className="mt-10">
            <Link
              className="cursor-pointer text-xl font-extrabold text-white  hover:bg-[#0F1768] rounded-full w-full p-4"
              onClick={() => setModalVisible('login')}
            >
              LOGIN
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="cursor-pointer text-xl font-extrabold text-white  hover:bg-[#0F1768] rounded-full w-full p-4">
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
            onPress={onOpen}
          >
            REGRAS
          </Button>

          <Modal
            scrollBehavior="outside"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="flex flex-col gap-2 bg-[#0F1768] text-[#fff] p-[48px] md:max-w-[850px]"
            classNames={{
              body: 'list-disc text-white',
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <p className="ml-5">Bilhete da Sorte</p>
                  <ModalHeader>REGRAS GERAIS</ModalHeader>
                  <ModalBody>
                    <ul className="list-disc">
                      <li>
                        A promoção vai contar com duas fases. A primeira, que
                        segue até o dia 27 de dezembro, vai selecionar os 5
                        (cinco) times mais mencionados para irem para a fase
                        final. Na segunda fase, que começa no dia 28 de dezembro
                        e segue até o dia 8 de janeiro, os 5 (cinco) times
                        selecionados vão participar de mais uma votação popular
                        para ver quem ganha o grande prêmio.
                      </li>
                      <br />
                      <li>Você pode realizar apenas 1 (um) voto por dia.</li>
                      <br />
                      <li>
                        O resultado final será divulgado no dia 08 de janeiro de
                        2024.
                      </li>
                      <br />
                      <li>
                        O time vencedor ganhará uma inscrição (R$4.500,00) sem
                        taxa na Super Copa Zona Leste e também indicará uma
                        instituição de caridade para receber R$10.000,00 em
                        cestas básicas.
                      </li>
                      <br />
                      <li>
                        Os times que já realizaram a inscrição na Super Copa
                        Zona Leste também podem participar do Bilhete da Sorte.
                        Caso ganhe, o valor de R$4.500,00, pago no momento da
                        inscrição, será enviado para a equipe vencedora.
                      </li>
                    </ul>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

          <Button
            radius="full"
            size="md"
            className="hidden md:flex bg-[#00E46F] font-headingBold border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#003B9C] py-3 px-8"
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
