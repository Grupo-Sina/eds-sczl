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

function dataAvailable() {
  const tomorrow = addDays(new Date(), 1);
  const formatted = format(tomorrow, "dd/MM/yyyy");
  return formatted;
}

export default function SecPhaseVote() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [teams, setTeams] = useState<Team[]>([]);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>();
  const [isVoteDisabled, setIsVoteDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {confirmedVote, setConfirmedVote} = useAppContext()

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
      setConfirmedVote(true)
      setIsVoteDisabled(true);
    } else if (res?.error) {
      toast.error(res?.error);
    }
    setIsLoading(false);
  };

  const handleRanking = () => {};

  return (
    <>
      <div className="flex flex-wrap space-x-4 my-4 bg-transparent justify-center">
        {isLoading ? (
          <Spinner size="lg" className="flex justify-center" />
        ) : (
          <>
            <Card
              isBlurred
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {/* {team.name.toUpperCase()} */}
                  FORTE DA RIBEIRA FC
                </h1>
              </CardHeader>
              <CardBody>{/* <Image /> */}</CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, "FORTE DA RIBEIRA FC")}
                  // onClick={() => {}}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {/* {team.name.toUpperCase()} */}
                  IMPERIO CITY
                </h1>
              </CardHeader>
              <CardBody>{/* <Image /> */}</CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, "IMPERIO CITY")}
                  // onClick={() => {}}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {/* {team.name.toUpperCase()} */}
                  CELESTE FC
                </h1>
              </CardHeader>
              <CardBody>{/* <Image /> */}</CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, "CELESTE FC")}
                  // onClick={() => {}}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {/* {team.name.toUpperCase()} */}
                  BARROCA
                </h1>
              </CardHeader>
              <CardBody>{/* <Image /> */}</CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, "BARROCA")}
                  // onClick={() => {}}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-[170px] h-[250px] flex-col justify-between bg-transparent border-solid border-white border-1 space-y-2"
            >
              <CardHeader className="flex justify-center">
                <h1 className="text-center text-white">
                  {/* {team.name.toUpperCase()} */}
                  SCORPIONS
                </h1>
              </CardHeader>
              <CardBody>{/* <Image /> */}</CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-[#00E46F] text-[#00E46F] text-[16px] font-headingExtraBold py-3 px-8"
                  type="submit"
                  onClick={(e) => handleChooseTeam(e, "SCORPIONS")}
                  // onClick={() => {}}
                >
                  ESCOLHER
                </Button>
              </CardFooter>
            </Card>
          </>
          // topTeams.map((team) => (

          // ))
        )}
      </div>
      {confirmedVote ? (
        <h2 className="text-[16px] font-semibold leading-6">
          Próximo voto disponível em{" "}
          <span className="text-[#00E46F]">{`${dataAvailable()} às 00:00`}</span>
        </h2>
      ) : (
        <h2 className="text-[16px] font-semibold leading-6">
          Confira as regras!
        </h2>
      )}
      <div className="flex space-x-4 my-8 desktop:ml-0 justify-center">
        <Button
          isDisabled={isVoteDisabled}
          radius="full"
          className="bg-[#00E46F] text-[#003B9C] text-[18px] font-headingExtraBold py-3 px-8"
          type="submit"
          // onClick={(e) => selectedTeam && handleVote(e, selectedTeam)}
          onClick={(e) => selectedTeam && handleVote({ name: selectedTeam })}
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
  );
}
