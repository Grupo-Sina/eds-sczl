import { Button } from '@nextui-org/react'

export default function InitialButtons() {
  return (
    <div className="flex space-x-4 my-8 justify-center xl:justify-start">
      <Button
        isDisabled={true}
        radius="full"
        className="bg-[#00E46F] text-[#003B9C] text-[18px] font-headingExtraBold py-3 px-8"
        type="submit"
      >
        VOTAR
      </Button>

      <Button
        variant="bordered"
        radius="full"
        className="border-[#00E46F] text-[#00E46F] text-[18px] font-headingExtraBold py-3 px-8"
        type="submit"
        isDisabled={true}
      >
        VER RANKING
      </Button>
    </div>
  )
}
