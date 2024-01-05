import { requestTeamsAndVotes } from '@/app/api/teams'
import { Team, getTopTeams } from '@/app/utils/teams-and-votes'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
  useDisclosure,
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import trophy from '../../../../public/trophy.png'
import { requestVote } from '@/app/api/vote'
import { toast } from 'react-toastify'
import { addDays, format } from 'date-fns'
import { useAppContext } from '@/app/context/AppContext'
import VoteButtons from '../VoteButtons/VoteButtons'
import { usePathname } from 'next/navigation'
import ScorpionsCrest from '../../../../public/teams/scorpions.png'
import ImperioCrest from '../../../../public/teams/imperio.png'
import BarrocaCrest from '../../../../public/teams/barroca.png'
import RibeiraCrest from '../../../../public/teams/ribeira.png'
import CelestCrest from '../../../../public/teams/celeste.png'

type SecPhaseVote = {
  isPageVote?: boolean
}

const teamsList = [
  {
    name: 'forte da ribeira fc',
    crest: RibeiraCrest,
  },
  {
    name: 'celeste fc',
    crest: CelestCrest,
  },
  {
    name: 'imperio city',
    crest: ImperioCrest,
  },
  {
    name: 'scorpions',
    crest: ScorpionsCrest,
  },
  {
    name: 'barroca',
    crest: BarrocaCrest,
  },
]

export default function SecPhaseVote({ isPageVote }: SecPhaseVote) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [teams, setTeams] = useState<Team[]>([])
  const [topTeams, setTopTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    confirmedVote,
    setConfirmedVote,
    selectedTeam,
    setSelectedTeam,
    setIsVoteDisabled,
  } = useAppContext()

  const pathname = usePathname()
  const isRegisterPage = pathname === '/register'

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
      setIsLoading(true)
      try {
        const res = await requestTeamsAndVotes()
        setTeams(res)
      } catch (error) {
        throw new Error('Error fetching teams and votes: ' + error)
      } finally {
        setIsLoading(false)
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

  const handleChooseTeam = (team: string) => {
    setSelectedTeam(team)
    setIsVoteDisabled(false)
  }

  return (
    <div className={`w-full flex flex-col ${isPageVote && 'items-center'}`}>
      <div
        className={`p-5 flex justify-around flex-wrap ${
          isPageVote && 'md:gap-4'
        } bg-transparent`}
      >
        {isLoading ? (
          <Spinner size="lg" className="flex justify-center" />
        ) : (
          topTeams.map((team) => (
            <Card
              isDisabled={!!isRegisterPage}
              isPressable
              onClick={() => handleChooseTeam(team.name)}
              key={team.name}
              className={`bg-[#1F3694] border-1 bg-opacity-10 max-w-[170px] min-w-[160px] h-[260px] flex-col justify-between bg-transparent border-solid border-white my-4 ${
                selectedTeam === team.name && 'border-2 bg-black'
              }`}
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {team.name === 'forte da ribeira fc'
                    ? 'F. DA RIBEIRA FC'
                    : team.name.toUpperCase()}
                </h1>
              </CardHeader>
              <CardBody>
                {teamsList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center overflow-y-hidden"
                  >
                    {item.name === team.name && (
                      <Image src={item.crest} alt={team.name} height={121} />
                    )}
                  </div>
                ))}
              </CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={() => handleChooseTeam(team.name)}
                  isDisabled={confirmedVote}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      {pathname === '/vote' && <VoteButtons />}
    </div>
  )
}
