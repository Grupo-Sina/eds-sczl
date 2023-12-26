'use client'

import React from 'react'
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from '@nextui-org/react'
import Image from 'next/image'
import escudozl from '../../../../public/escudozl.png'

export default function PromoComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className=" mx-[28px] mb-4 z-20 w-[90%] md:max-w-[600px] desktop:max-w-[935px]">
      <div className=" flex justify-center items-center">
        <Image
          src={escudozl}
          alt="escudozl"
          width={51}
          height={60}
          className="mt-8 md:hidden"
        />
      </div>
      <h1 className="text-center mt-8 md:text-left">
        <span className="text-[56px] leading-[55px] text-white font-bold font-headingBold md:md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          B
        </span>
        <span className="text-[56px] leading-[55px] text-white font-extralight font-headingExtraLight md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          I
        </span>
        <span className="text-[56px] leading-[55px] text-white font-extrabold font-headingExtraBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          L
        </span>
        <span className="text-[56px] leading-[55px] text-white font-black font-headingHeavy md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          H
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-headingLight md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[56px] leading-[55px] text-white font-bold font-headingBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-headingLight md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-heading md:text-7xl 2xl:text-[110px] 2xl:leading-[108px]">
          {' '}
        </span>
        <span className="text-[56px] leading-[55px] text-white font-bold font-headingBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          D
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-headingHeavy md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          A
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-heading md:text-7xl 2xl:text-[110px] 2xl:leading-[108px]">
          {' '}
        </span>
        <span className="text-[56px] leading-[55px] text-[#00E275] font-bold font-headingBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          S
        </span>
        <span className="text-[56px] leading-[55px] text-[#00E275] font-normal font-heading md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          O
        </span>
        <span className="text-[56px] leading-[55px] text-[#00E275] font-extrabold font-headingBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          R
        </span>
        <span className="text-[56px] leading-[55px] text-[#00E275] font-extrabold font-headingExtraBold md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-[56px] leading-[55px] text-[#00E275] font-normal font-heading md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[56px] leading-[55px] text-white font-normal font-heading md:text-7xl desktop:text-[110px] desktop:leading-[108px]">
          !
        </span>
      </h1>
      <p className="text-justify md:mx-0 text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        A Super Copa Zona Leste e a Esportes da Sorte estarão dando uma
        inscrição <span className="text-[#00E275] font-bold">SEM TAXA</span>{' '}
        para o time mais votado!
      </p>

      <p className="text-justify md:mx-0 text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        E como aqui a parada é diferenciada, a equipe também indicará uma
        instituição de caridade para receber o valor de{' '}
        <span className="text-[#00E275] font-bold">R$10 mil.</span>{' '}
      </p>

      <p className="text-justify md:mx-0 text-white text-xl font-light mt-6 desktop:font-normal desktop:text-[32px] desktop:leading-[48px]">
        Mostre que a torcida é pesada e ajude seu time a conquistar o lugar na
        Super Copa Zona Leste!{' '}
        <span className="font-semibold">Vote agora!</span>
      </p>
      <div className="space-x-4 mt-6 md:mx-0">
        <Button
          onPress={onOpen}
          radius="full"
          className="w-full md:w-[165px] bg-[#00E46F] font-headingBold text-[#003B9C] text-[16px] font-extrabold leading-5 text-center py-3 px-8 desktop:text-[24px] desktop:font-extrabold desktop:leading-[29px] desktop:py-6 desktop:px-11"
        >
          VER REGRAS
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
            {() => (
              <>
                <p className="ml-5">Bilhete da Sorte</p>
                <ModalHeader>REGRAS GERAIS</ModalHeader>
                <ModalBody>
                  <ul className="list-disc">
                    <li>
                      A promoção vai contar com duas fases. A primeira, que
                      segue até o dia 27 de dezembro, vai selecionar os 5
                      (cinco) times mais mencionados para irem para a fase
                      final. Na segunda fase, que começa no dia 28 de dezembro e
                      segue até o dia 8 de janeiro, os 5 (cinco) times
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
                      instituição de caridade para receber R$10.000,00 em cestas
                      básicas.
                    </li>
                    <br />
                    <li>
                      O times que já realizaram a inscrição na Super Copa Zona
                      Leste também podem participar do Bilhete da Sorte. Caso
                      ganhe, o valor de R$4.500,00, pago no momento da
                      inscrição, será enviado para a equipe vencedora.
                    </li>
                  </ul>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}
