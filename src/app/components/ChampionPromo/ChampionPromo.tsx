import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import trophy from '../../../../public/trophy.png'
import { Team, getTopTeams } from '@/app/utils/teams-and-votes'
import { requestTeamsAndVotes } from '@/app/api/teams'
import championlogo from '../../../../public/championlogo.png'

export default function ChampionPromo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [teams, setTeams] = useState<Team[]>([])
  const [topTeams, setTopTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
      try {
        const res = await requestTeamsAndVotes()
        setTeams(res)
      } catch (error) {
        throw new Error('Error fetching teams and votes: ' + error)
      }
    }
    fetchingTeamsAndVotes()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const topFiveTeams = getTopTeams(teams, 5)
    setTopTeams(topFiveTeams)
    setIsLoading(false)
  }, [teams])

  return (
    <div className="px-12 md:px-0 w-screen md:w-full mt-8 md:mt-0">
      <h1 className="text-center md:text-left">
        <span className="text-[52px] font-headingBold md:text-[80px]">O</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        {/* <span className="text-[52px] font-headingLight md:text-[80px]">F</span>
        <span className="text-[52px] font-headingLight md:text-[80px]">.</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] font-headingBold md:text-[80px]">D</span>
        <span className="text-[52px] font-heading md:text-[80px]">A</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span> */}
        <span className="text-[52px] font-headingBold md:text-[80px]">C</span>
        <span className="text-[52px] font-headingLight md:text-[80px]">E</span>
        <span className="text-[52px] font-headingThin md:text-[80px]">L</span>
        <span className="text-[52px] font-headingExtraBold md:text-[80px]">
          E
        </span>
        <span className="text-[52px] font-headingBold md:text-[80px]">S</span>
        <span className="text-[52px] font-headingHeavy md:text-[80px]">T</span>
        <span className="text-[52px] font-headingThin md:text-[80px]">E</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] font-headingExtraBold md:text-[80px]">
          F
        </span>
        <span className="text-[52px] font-heading md:text-[80px]">C</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] font-headingBold md:text-[80px] ">É</span>
        <span className="text-[52px] font-headingLight md:text-[80px]"> </span>
        <span className="text-[52px] font-headingLight md:text-[80px]">O</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] font-headingExtraBold md:text-[80px]">
          G
        </span>
        <span className="text-[52px] font-headingLight md:text-[80px]">R</span>
        <span className="text-[52px] font-headingBold md:text-[80px]">A</span>
        <span className="text-[52px] font-headingLight md:text-[80px]">N</span>
        <span className="text-[52px] font-headingExtraBold md:text-[80px]">
          D
        </span>
        <span className="text-[52px] font-headingLight md:text-[80px]">E</span>
      </h1>

      <h1 className="text-center md:text-left">
        <span className="text-[52px] font-heading md:text-[80px]">V</span>
        <span className="text-[52px] font-heading md:text-[80px]">E</span>
        <span className="text-[52px] font-heading md:text-[80px]">N</span>
        <span className="text-[52px] font-heading md:text-[80px]">C</span>
        <span className="text-[52px] font-heading md:text-[80px]">E</span>
        <span className="text-[52px] font-heading md:text-[80px]">D</span>
        <span className="text-[52px] font-heading md:text-[80px]">O</span>
        <span className="text-[52px] font-heading md:text-[80px]">R</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] font-headingBold md:text-[80px]">D</span>
        <span className="text-[52px] font-headingLight md:text-[80px]">O</span>
        <span className="text-[52px] font-heading md:text-[80px]"> </span>
        <span className="text-[52px] text-[#00E275] font-bold font-headingBold md:text-[80px] desktop:leading-[108px]">
          B
        </span>
        <span className="text-[52px] text-[#00E275] font-extralight font-headingExtraLight md:text-[80px] desktop:leading-[108px]">
          I
        </span>
        <span className="text-[52px] text-[#00E275] font-extrabold font-headingExtraBold md:text-[80px] desktop:leading-[108px]">
          L
        </span>
        <span className="text-[52px] text-[#00E275] font-black font-headingHeavy md:text-[80px] desktop:leading-[108px]">
          H
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-headingLight md:text-[80px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[52px] text-[#00E275] font-bold font-headingBold md:text-[80px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-headingLight md:text-[80px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-heading md:text-[80px] 2xl:text-[110px] 2xl:leading-[108px]">
          {' '}
        </span>
        <span className="text-[52px] text-[#00E275] font-bold font-headingBold md:text-[80px] desktop:leading-[108px]">
          D
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-headingHeavy md:text-[80px] desktop:leading-[108px]">
          A
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-heading md:text-[80px] 2xl:text-[110px] 2xl:leading-[108px]">
          {' '}
        </span>
        <span className="text-[52px] text-[#00E275] font-bold font-headingBold md:text-[80px] desktop:leading-[108px]">
          S
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-heading md:text-[80px] desktop:leading-[108px]">
          O
        </span>
        <span className="text-[52px] text-[#00E275] font-extrabold font-headingBold md:text-[80px] desktop:leading-[108px]">
          R
        </span>
        <span className="text-[52px] text-[#00E275] font-extrabold font-headingExtraBold md:text-[80px] desktop:leading-[108px]">
          T
        </span>
        <span className="text-[52px] text-[#00E275] font-normal font-heading md:text-[80px] desktop:leading-[108px]">
          E
        </span>
        <span className="text-[52px] text-white font-normal font-heading md:text-[80px] desktop:leading-[108px]">
          !
        </span>
      </h1>
      <p className="text-center md:text-left py-5 text-white text-[18px] sm:text-[28px] desktop:text-[32px] font-normal">
        A equipe foi a diferenciada que ganhou uma inscrição gratuita na{' '}
        <span className="font-semibold">Super Copa Zona Leste 2024</span> e
        ainda levou mais{' '}
        <span className="font-semibold text-[#00E275]">R$10.000,00</span> para
        serem doados à uma instituição parceira!
      </p>
      <Image
        src={championlogo}
        alt="championlogo"
        className="flex md:hidden mx-auto mb-6 w-[40%] md:mb-0 max-w-[258px] max-h-[182px] md:max-w-[601px] md:max-h-[425px]"
      />
      <h1 className="text-center md:text-left">
        <span className="text-[32px] lg:text-[48px] font-headingBold">C</span>
        <span className="text-[32px] lg:text-[48px] font-heading">O</span>
        <span className="text-[32px] lg:text-[48px] font-headingExtraBold">
          N
        </span>
        <span className="text-[32px] lg:text-[48px] font-heading">F</span>
        <span className="text-[32px] lg:text-[48px] font-headingLight">I</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">R</span>
        <span className="text-[32px] lg:text-[48px] font-heading">A</span>
        <span className="text-[32px] lg:text-[48px] font-heading"> </span>
        <span className="text-[32px] lg:text-[48px] font-headingHeavy">O</span>
        <span className="text-[32px] lg:text-[48px] font-heading"> </span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">R</span>
        <span className="text-[32px] lg:text-[48px] font-heading">A</span>
        <span className="text-[32px] lg:text-[48px] font-headingExtraBold">
          N
        </span>
        <span className="text-[32px] lg:text-[48px] font-headingLight">K</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">I</span>
        <span className="text-[32px] lg:text-[48px] font-headingLight">N</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">G</span>
        <span className="text-[32px] lg:text-[48px] font-heading"> </span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">D</span>
        <span className="text-[32px] lg:text-[48px] font-heading">A</span>
        <span className="text-[32px] lg:text-[48px] font-heading"> </span>
        <span className="text-[32px] lg:text-[48px] font-heading">P</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">R</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">O</span>
        <span className="text-[32px] lg:text-[48px] font-headingLight">M</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">O</span>
        <span className="text-[32px] lg:text-[48px] font-heading">Ç</span>
        <span className="text-[32px] lg:text-[48px] font-headingBold">Ã</span>
        <span className="text-[32px] lg:text-[48px] font-heading">O</span>
        <span className="text-[32px] lg:text-[48px] font-heading">!</span>
      </h1>
      <Button
        radius="full"
        size="md"
        className="my-5 w-full md:w-auto flex bg-[#0F1768] font-headingBold border-solid border-[#00E46F] text-[18px] desktop:text-[24px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
        variant="bordered"
        onPress={onOpen}
      >
        VER RANKING
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="w-full">
        <ModalContent className="bg-[#0F1768] p-12 max-w-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="">
                <Image
                  src={trophy}
                  alt="trophy"
                  className="mr-2 w-[28px] h-[28px]"
                />
                <p className="text-2xl font-bold text-white">
                  CONFERE COMO ESTÁ O RANKING ATÉ AGORA!
                </p>
              </ModalHeader>

              <ModalBody>
                <p className="text-[#9E9E9E] text-sm font-normal">
                  {`Atualizado em: ${new Date().toLocaleString('pt-BR')}`}{' '}
                </p>
                <div className="flex justify-between text-xs font-semibold text-white">
                  <p>NOME DA EQUIPE</p>
                  <p>VOTOS</p>
                </div>
                <hr
                  style={{
                    borderTop: '1px solid #FFFFFF33',
                  }}
                />
                <ol className="text-xs font-normal text-white">
                  {topTeams.map((team, index) => (
                    <React.Fragment key={index}>
                      <li className="flex justify-between py-2 mr-4">
                        {index + 1}. {team.name.toUpperCase()}{' '}
                        <p>{team.amountVotes}</p>
                      </li>
                      <hr
                        style={{
                          borderTop: '1px solid #FFFFFF33',
                        }}
                      />
                    </React.Fragment>
                  ))}
                </ol>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
