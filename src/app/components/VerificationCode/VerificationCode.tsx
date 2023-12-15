import { Button, Input } from "@nextui-org/react";

export default function VerificationCode() {
  return (
    <form className="p-12 bg-[#0F1768] z-20 rounded-2xl text-white flex-col h-auto">
      <p className="text-[16px] font-medium leading-5 mb-4">Bilhete da Sorte</p>
      <h1 className="text-[28px] font-bold leading-8">CÓDIGO DE VERIFICAÇÃO</h1>
      <p className="my-6">
        Insira abaixo o código de 6 dígitos que envamos via SMS para (**)
        *****-**99.
      </p>
      <p className="text-[14px] mb-2">Código</p>
      <div className="flex space-x-2 mb-6">
        <Input className="w-[85px]" />
        <Input className="w-[85px]" />
        <Input className="w-[85px]" />
        <Input className="w-[85px]" />
        <Input className="w-[85px]" />
        <Input className="w-[85px]" />
      </div>
      <Button radius="full" isDisabled className="w-full bg-[#00E46F] font-heading">CONFIRMAR CÓDIGO</Button>
      <hr className="mt-6 mb-6"/>
      <div className="flex items-center justify-between">
        <div className="flex">
          <h2 className="text-[20px] font-bold w-[200px]">Problemas ao receber o código?</h2>
          <Button radius="full" variant="bordered" className="bg-transparent text-[#00E46F] border-[#00E46F] py-3 px-8">REENVIAR CÓDIGO</Button>
        </div>
        <h1 className="text-[28px] font-light leading-8">1:59</h1>
      </div>
    </form>
  );
}
