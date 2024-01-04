import { requestTeamsAndVotes } from "@/app/api/teams";
import { Team, getTopTeams } from "@/app/utils/teams-and-votes";
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
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import trophy from "../../../../public/trophy.png";
import { requestVote } from "@/app/api/vote";
import { toast } from "react-toastify";
import { addDays, format } from "date-fns";
import { useAppContext } from "@/app/context/AppContext";
import VoteButtons from "../VoteButtons/VoteButtons";
import { usePathname } from "next/navigation";

function dataAvailable() {
  const tomorrow = addDays(new Date(), 1);
  const formatted = format(tomorrow, "dd/MM/yyyy");
  return formatted;
}

type SecPhaseVote = {
  isPageVote?: boolean
}

export default function SecPhaseVote({ isPageVote }: SecPhaseVote) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { confirmedVote, setConfirmedVote, setSelectedTeam, setIsVoteDisabled } = useAppContext();
  
  const pathname = usePathname()
  console.log(pathname)

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
      try {
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

  const handleChooseTeam = (
    e: React.FormEvent<HTMLButtonElement>,
    team: string
  ) => {
    e.preventDefault();
    setSelectedTeam(team);
    setIsVoteDisabled(false);
  };

  const handleVote = async (data: VoteProps) => {
    setIsLoading(true);
    const res = await requestVote(data);

    if (res?.data) {
      setIsVoteDisabled(true);
      setConfirmedVote(true);
      setIsVoteDisabled(true);
    } else if (res?.error) {
      toast.error(res?.error);
    }
    setIsLoading(false);
  };

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

      { pathname === "/vote" && <VoteButtons />  }

      {/* {confirmedVote ? (
          <h2 className="text-[16px] font-semibold leading-6">
            Próximo voto disponível em{' '}
            <span className="text-[#00E46F]">{`${dataAvailable()} às 00:00`}</span>
          </h2>
        ) : (
          <h2 className="text-[16px] font-semibold leading-6">
            Confira as regras!
          </h2>
        )} */}
      {/* <div className="flex space-x-4 my-8 justify-center xl:justify-start">
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
                    {`Atualizado em: ${new Date().toLocaleString('pt-BR')}`}{' '}
                  </p>
                  <div className="flex justify-between text-xs font-semibold">
                    <p>NOME DA EQUIPE</p>
                    <p>VOTOS</p>
                  </div>
                  <hr
                    style={{
                      borderTop: '1px solid #FFFFFF33',
                    }}
                  />
                  <ol className="text-xs font-normal">
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
      </div> */}
    </div>
  );
}
