import { requestTeamsAndVotes } from "@/app/api/teams";
import { Team, getTopTeams } from "@/app/utils/teams-and-votes";
import { Button, Card, CardFooter, CardHeader, Modal, ModalBody, ModalContent, ModalHeader, Spinner, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import trophy from '../../../../public/trophy.png'

export default function SecPhaseVote() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [teams, setTeams] = useState<Team[]>([]);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const [isVoteDisabled, setIsVoteDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchingTeamsAndVotes = async () => {
      try {
        const res = await requestTeamsAndVotes();
        setTeams(res);
      } catch (error) {
        throw new Error('Error fetching teams and votes: ' + error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchingTeamsAndVotes();
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    const topFiveTeams = getTopTeams(teams, 5);
    setTopTeams(topFiveTeams);
    setIsLoading(false)
  }, [teams]);

  const handleChooseTeam = (
    e: React.FormEvent<HTMLButtonElement>,
    team: Team
  ) => {
    e.preventDefault();
    setSelectedTeam(team);
    setIsVoteDisabled(false);
  };

  const handleVote = (
    e: React.FormEvent<HTMLButtonElement>,
    selectTeam: Team
  ) => {
    setIsVoteDisabled(true);
    console.log(`voce votou no time: ${selectTeam.name}`);
  };

  const handleRanking = () => {};

  return (
    <>
      <div className="flex flex-wrap space-x-4 my-4 bg-transparent justify-center">
        {isLoading ? (
          <Spinner size="lg" className="flex justify-center" />
        ) : ( 
          topTeams.map((team) => (
            <Card
              isBlurred
              key={team.name}
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
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
                  onClick={(e) => handleChooseTeam(e, team)}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      <div className="flex ml-[115px] space-x-4 my-8 desktop:ml-0">
        <Button
          isDisabled={isVoteDisabled}
          radius="full"
          className="bg-[#00E46F] text-[#003B9C] text-[18px] font-headingExtraBold py-3 px-8"
          type="submit"
          onClick={(e) => selectedTeam && handleVote(e, selectedTeam)}
        >
          VOTAR
        </Button>

        <Button
          variant="bordered"
          radius="full"
          className="border-[#00E46F] text-[#00E46F] text-[18px] font-headingExtraBold py-3 px-8"
          type="submit"
          onClick={handleRanking}
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
                    {`Atualizado em: ${new Date().toLocaleString("pt-BR")}`}{" "}
                  </p>
                  <div className="flex justify-between text-xs font-semibold">
                    <p>NOME DA EQUIPE</p>
                    <p>VOTOS</p>
                  </div>
                  <hr
                    style={{
                      borderTop: "1px solid #FFFFFF33",
                    }}
                  />
                  <ol className="text-xs font-normal">
                    {topTeams.map((team, index) => (
                      <React.Fragment key={index}>
                        <li className="flex justify-between py-2 mr-4">
                          {index + 1}. {team.name.toUpperCase()}{" "}
                          <p>{team.amountVotes}</p>
                        </li>
                        <hr
                          style={{
                            borderTop: "1px solid #FFFFFF33",
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
  )
}