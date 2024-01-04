'use client'

import SecPhasePromo from '@/app/components/SecPhasePromo/SecPhasePromo'
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'
import SuccessVoteComponent from '@/app/components/SuccessVoteComponent/SucessVoteComponent'
import VoteFormComponent from '@/app/components/VoteFormComponent/VoteFormComponent'
import VotePromoComponent from '@/app/components/VotePromoComponent/VotePromoComponent'
import { useAppContext } from '@/app/context/AppContext'
import useWindowSize from '@/app/utils/useWindowHook'
import { addDays, format } from 'date-fns'

export default function CreateVote() {
  const { confirmedVote } = useAppContext()
  const { width } = useWindowSize()

  const isMobile = width < 768

  return (
    <div className="z-20 w-full items-center flex flex-col md:flex-row md:justify-around">
      <div className="flex-col">
        <SecPhasePromo />
        <SecPhaseVote />
      </div>
    </div>
  )
}
