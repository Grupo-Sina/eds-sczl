import { requestTeamsAndVotes } from '@/app/api/teams'
import { Team, getTopTeams } from '@/app/utils/teams-and-votes'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
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

function dataAvailable() {
  const tomorrow = addDays(new Date(), 1)
  const formatted = format(tomorrow, 'dd/MM/yyyy')
  return formatted
}

type SecPhaseVote = {
  isPageVote?: boolean
}

export default function SecPhaseVote({ isPageVote }: SecPhaseVote) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [teams, setTeams] = useState<Team[]>([])
  const [topTeams, setTopTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    confirmedVote,
    setConfirmedVote,
    setSelectedTeam,
    setIsVoteDisabled,
  } = useAppContext()

  const pathname = usePathname()
  console.log(pathname)

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
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
    const topFiveTeams = getTopTeams(teams, 5)
    setTopTeams(topFiveTeams)
    setIsLoading(false)
  }, [teams])

  const handleChooseTeam = (
    e: React.FormEvent<HTMLButtonElement>,
    team: string,
  ) => {
    e.preventDefault()
    setSelectedTeam(team)
    setIsVoteDisabled(false)
  }

  const handleVote = async (data: VoteProps) => {
    setIsLoading(true)
    const res = await requestVote(data)

    if (res?.data) {
      setIsVoteDisabled(true)
      setConfirmedVote(true)
      setIsVoteDisabled(true)
    } else if (res?.error) {
      toast.error(res?.error)
    }
    setIsLoading(false)
  }

  return (
    <div className={`flex flex-col ${isPageVote && 'items-center'}`}>
      <div
        className={`flex justify-around flex-wrap ${
          isPageVote && 'md:gap-4'
        } bg-transparent`}
      >
        {isLoading ? (
          <Spinner size="lg" className="flex justify-center" />
        ) : (
          topTeams.map((team) => (
            <Card
              isBlurred
              key={team.name}
              className="max-w-[170px] min-w-[160px] h-[250px] flex-col justify-between bg-transparent border-solid border-white my-4"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {team.name.toUpperCase()}
                </h1>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, team.name)}
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
