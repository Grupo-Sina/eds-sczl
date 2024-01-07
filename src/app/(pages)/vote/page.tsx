'use client'

import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo'
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'
import Image from 'next/image'
import escudozl from '../../../../public/escudozl.png'

export default function CreateVote() {
  return (
    <div className="z-20 p-4 px-20 flex flex-col text-center">
      <Image src={escudozl} alt='escudo zl' className='flex md:hidden w-[50px] h-[60px] mx-auto mt-6'/>
      <SecPhasePromo />
      <SecPhaseVote isPageVote={true} />
    </div>
  )
}
