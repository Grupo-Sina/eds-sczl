import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
<<<<<<< HEAD
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import trophy from "../../../../public/trophy.png";
import { requestVote } from "@/app/api/vote";
import { useAppContext } from "@/app/context/AppContext";
import { toast } from "react-toastify";
import { Team, getTopTeams } from "@/app/utils/teams-and-votes";
import { requestTeamsAndVotes } from "@/app/api/teams";
import { addDays, format } from "date-fns";

export default function VoteButtons() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const { setConfirmedVote, selectedTeam, isVoteDisabled, setIsVoteDisabled, confirmedVote } =
    useAppContext();

    const dataAvailable = () => {
      const tomorrow = addDays(new Date(), 1);
      const formatted = format(tomorrow, "dd/MM/yyyy");
      return formatted;
    }
=======
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import trophy from '../../../../public/trophy.png'
import { requestVote } from '@/app/api/vote'
import { useAppContext } from '@/app/context/AppContext'
import { toast } from 'react-toastify'
import { Team, getTopTeams } from '@/app/utils/teams-and-votes'
import { requestTeamsAndVotes } from '@/app/api/teams'
import { addDays, format } from 'date-fns'

export default function VoteButtons() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [topTeams, setTopTeams] = useState<Team[]>([])
  const {
    setConfirmedVote,
    selectedTeam,
    isVoteDisabled,
    setIsVoteDisabled,
    confirmedVote,
  } = useAppContext()

  const dataAvailable = () => {
    const tomorrow = addDays(new Date(), 1)
    const formatted = format(tomorrow, 'dd/MM/yyyy')
    return formatted
  }
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
      try {
<<<<<<< HEAD
        const res = await requestTeamsAndVotes();
        setTeams(res);
      } catch (error) {
        throw new Error("Error fetching teams and votes: " + error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingTeamsAndVotes();
  }, []);

  useEffect(() => {
    const topFiveTeams = getTopTeams(teams, 5);
    setTopTeams(topFiveTeams);
    setIsLoading(false);
  }, [teams]);

  const handleVote = async (data: VoteProps) => {
    setIsLoading(true);
    const res = await requestVote(data);

    if (res?.data) {
      setIsVoteDisabled(true);
      setConfirmedVote(true);
      setIsVoteDisabled(true);
    } else if (res?.error) {
      toast.error(res?.error);
      setIsVoteDisabled(true);
    }
    setIsLoading(false);
  };
=======
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

  const handleVote = async (data: VoteProps) => {
    setIsLoading(true)
    const res = await requestVote(data)

    if (res?.data) {
      setIsVoteDisabled(true)
      setConfirmedVote(true)
      setIsVoteDisabled(true)
    } else if (res?.error) {
      toast.error(res?.error)
      setIsVoteDisabled(true)
    }
    setIsLoading(false)
  }
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)

  return (
    <>
      {confirmedVote ? (
        <h2 className="text-[16px] font-semibold leading-6">
<<<<<<< HEAD
          Próximo voto disponível em{" "}
=======
          Próximo voto disponível em{' '}
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
          <span className="text-[#00E46F]">{`${dataAvailable()} às 00:00`}</span>
        </h2>
      ) : (
        <h2 className="text-[16px] font-semibold leading-6">
          Confira as regras!
        </h2>
      )}
      <div className="flex space-x-4 my-8 justify-center xl:justify-start">
        <Button
          isDisabled={isVoteDisabled}
          radius="full"
          className="bg-[#00E46F] text-[#003B9C] text-[18px] font-headingExtraBold py-3 px-8"
          type="submit"
          onClick={(e) => selectedTeam && handleVote({ name: selectedTeam })}
        >
          VOTAR
        </Button>

        <Button
          variant="bordered"
          radius="full"
          className="border-[#00E46F] text-[#00E46F] text-[18px] font-headingExtraBold py-3 px-8"
          type="submit"
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
                  <p className="text-2xl font-bold">
                    CONFERE COMO ESTÁ O RANKING ATÉ AGORA!
                  </p>
                </ModalHeader>

                <ModalBody>
                  <p className="text-[#9E9E9E] text-sm font-normal">
<<<<<<< HEAD
                    {`Atualizado em: ${new Date().toLocaleString("pt-BR")}`}{" "}
=======
                    {`Atualizado em: ${new Date().toLocaleString('pt-BR')}`}{' '}
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
                  </p>
                  <div className="flex justify-between text-xs font-semibold">
                    <p>NOME DA EQUIPE</p>
                    <p>VOTOS</p>
                  </div>
                  <hr
                    style={{
<<<<<<< HEAD
                      borderTop: "1px solid #FFFFFF33",
=======
                      borderTop: '1px solid #FFFFFF33',
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
                    }}
                  />
                  <ol className="text-xs font-normal">
                    {topTeams.map((team, index) => (
                      <React.Fragment key={index}>
                        <li className="flex justify-between py-2 mr-4">
<<<<<<< HEAD
                          {index + 1}. {team.name.toUpperCase()}{" "}
=======
                          {index + 1}. {team.name.toUpperCase()}{' '}
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
                          <p>{team.amountVotes}</p>
                        </li>
                        <hr
                          style={{
<<<<<<< HEAD
                            borderTop: "1px solid #FFFFFF33",
=======
                            borderTop: '1px solid #FFFFFF33',
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
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
    </>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
}
