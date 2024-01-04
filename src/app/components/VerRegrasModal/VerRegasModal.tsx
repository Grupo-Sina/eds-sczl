import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";

export default function VerRegrasModal () {

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
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
                      Os times que já realizaram a inscrição na Super Copa Zona
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
  )
}