'use client'

import {
  Button,
  Input,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from '@nextui-org/react'
import { useState } from 'react'
import successicon from '../../../../public/succesicon.svg'
import Image from 'next/image'
// import { BoundingBox } from 'framer-motion'
import { useAppContext } from '@/app/context/AppContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaVote } from '@/app/schemas/vote'
import { addDays, format } from 'date-fns'
import { requestVote } from '@/app/api/vote'
import { toast } from 'react-toastify'

export default function VoteFormComponent() {
  const [isTeamFocused, setIsTeamFocused] = useState<boolean>(false)
  const [isVoteButtonDisabled, setIsVoteButtonDisabled] =
    useState<boolean>(false)

  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,

    formState: { isDirty, isValid },
  } = useForm<VoteProps>({
    resolver: yupResolver(schemaVote),
    mode: 'onChange',
  })

  const {
    confirmedVote,
    isFormSubmitted,
    setConfirmedVote,
    setIsFormSubmitted,
  } = useAppContext()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const teamLabelStyle: React.CSSProperties = {
    color: isTeamFocused ? '#CCFFFFFF' : '#858C94',
  }

  const handleVote = async (data: VoteProps) => {
    setLoading(true)
    const res = await requestVote(data)

    if (res?.data) {
      setIsVoteButtonDisabled(true)
      setConfirmedVote(true)
      setIsFormSubmitted(true)
    } else if (res?.error) {
      toast.error(res?.error)
    }
    setLoading(false)
  }

  function dataAvailable() {
    const tomorrow = addDays(new Date(), 1)
    const formatted = format(tomorrow, 'dd/MM/yyyy')
    return formatted
  }

  return (
    <form
      onSubmit={handleSubmit(handleVote)}
      className="w-[90%] mb-8 md:mb-0 md:w-[650px] bg-[#0F1768] rounded-2xl p-12 text-white z-20"
    >
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      {confirmedVote ? (
        <div className="flex space-x-2 mb-8">
          <Image src={successicon} alt="successicon" />
          <h1 className="text-[28px] font-bold leading-8">
            VOTO CONFIRMADO COM SUCESSO!
          </h1>
        </div>
      ) : (
        <h1 className="text-[28px] font-bold leading-8 mb-8">
          INSIRA O NOME ABAIXO E VOTE!
        </h1>
      )}

      <Input
        isDisabled={isFormSubmitted}
        onFocus={() => setIsTeamFocused(true)}
        type="text"
        label={<label style={teamLabelStyle}>Nome do time</label>}
        isRequired
        labelPlacement="outside"
        className="mt-8"
        {...register('name')}
        onBlur={() => setIsTeamFocused(false)}
        classNames={{
          label: 'text-[#858C94]',
          input: [
            'bg-transparent',
            'text-[#000]',
            'placeholder:text-default-700/50',
            'focus:ring-[#CCFFFFFF]',
            'focus:border-[#CCFFFFFF]',
          ],
        }}
      />
      {confirmedVote && (
        <p className="text-white mt-4">
          Fala, torcedor! No Bilhete da Sorte você só pode fazer{' '}
          <span className="font-bold">um voto por dia</span> e vimos que seu
          voto de hoje já foi computado! Mas não tem problema! É só voltar
          amanhã e votar no seu time novamente!
        </p>
      )}
      <Button
        type="submit"
        radius="full"
        isDisabled={!isDirty || !isValid || loading || isVoteButtonDisabled}
        className="bg-[#00E46F] font-headingBold text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5 w-full my-4"
      >
        VOTAR {loading && <Spinner size="sm" />}
      </Button>
      <Divider orientation="horizontal" className="mb-6 bg-[#FFFFFF33]" />
      <div className="flex space-x-4 items-center">
        {confirmedVote ? (
          <h2 className="text-[16px] font-semibold leading-6">
            Próximo voto disponível em{' '}
            <span className="text-[#00E46F]">{`${dataAvailable()} às 00:00`}</span>
          </h2>
        ) : (
          <h2 className="text-[16px] font-semibold leading-6">
            Confira as regras!
          </h2>
        )}

        <Button
          onPress={onOpen}
          radius="full"
          variant="bordered"
          className="bg-[#0F1768] font-headingBold border-solid border-[#00E46F] text-[16px] font-extrabold leading-5 text-center text-[#00E46F] py-3 px-8"
        >
          VER REGRAS
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="flex flex-col gap-2 bg-[#0F1768] text-[#fff] p-[48px] max-w-[850px]"
          classNames={{
            body: 'list-disc text-white',
          }}
        >
          <ModalContent>
            {() => (
              <>
                <p className="ml-5">Bilhete da Sorte</p>
                <ModalHeader className="text-3xl font-bold">
                  REGRAS GERAIS
                </ModalHeader>
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
    </form>
  )
}
