<<<<<<< HEAD
import { Button } from "@nextui-org/react";
=======
import { Button } from '@nextui-org/react'
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)

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
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
}
