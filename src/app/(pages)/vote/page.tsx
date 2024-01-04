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
    <div className="z-20 p-4 px-20">
      <SecPhasePromo />
      <SecPhaseVote />
    </div>
  )
}
